using System.Text;
using GramPanchayat_MigrationProject.API.Models;
using GramPanchayat_MigrationProject.API.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PdfSharpCore;
//using PdfSharpCore.Pdf;
using TheArtOfDev.HtmlRenderer.PdfSharp;
using PdfSharp.Drawing;
using PdfSharp.Pdf;
using System.Diagnostics;
using System.Text;
using PdfSharp.Charting;
using Microsoft.VisualBasic;

namespace GramPanchayat_MigrationProject.API.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class BirthRegistrationController : Controller
    {
        private readonly IBirthRegRepository birthregRepository;
        private readonly ILogger<Birth> _logger;

        public BirthRegistrationController(IBirthRegRepository birthregRepository,ILogger<Birth> _logger)
        {
            this.birthregRepository = birthregRepository;
            this._logger = _logger;
        }
        [HttpGet]
        public IActionResult GetAll(){
            try{
            {
                _logger.LogInformation("Birth Registration Data Triggered");
                var registrations = birthregRepository.GetAll();
                return Ok(registrations);
            }
            }
             catch(Exception ex)
            {
                _logger.LogError(ex.ToString());
                return BadRequest(ex.ToString());
            }
        }
        [HttpGet("{RegistrationNo}")]
        public IActionResult GetReg(int RegistrationNo)
        {
            try{
            _logger.LogInformation("Birth Registration data Get By ID");
          var reg = birthregRepository.Get(RegistrationNo);
          if(reg == null)
          {
            _logger.LogInformation("Id not found error");
            return NotFound();
          }
          return Ok(reg);
        }
         catch(Exception ex)
            {
                _logger.LogError(ex.ToString());
                return BadRequest(ex.ToString());
            }
        }
        [HttpPost]
        public IActionResult AddDeath(Birth birth){
            try{
                _logger.LogInformation("New Birth Registration data Added");
           birthregRepository.Add(birth);
           return Ok();
            }
             catch(Exception ex)
            {
                _logger.LogError(ex.ToString());
                return BadRequest(ex.ToString());
            }
        }
        [HttpDelete("{RegistrationNo}")]
        public IActionResult DeleteDeath(int RegistrationNo){
            try{
                _logger.LogInformation("Deleted Birth Registration data");
           birthregRepository.Delete(RegistrationNo);
           return NoContent();
            }
             catch(Exception ex)
            {
                _logger.LogError(ex.ToString());
                return BadRequest(ex.ToString());
            }
        }
        [HttpPut("{RegistrationNo}")]
        public Birth Update(int RegistrationNo,Birth birth)
        {
            try{
                _logger.LogInformation("Updated Birth Registration Data");
                return birthregRepository.Update(RegistrationNo, birth);
            }
             catch(Exception ex)
            {
                _logger.LogError(ex.ToString());
                return birthregRepository.Update(RegistrationNo, birth);
            }
        }

    //     
    
    [HttpGet]
         [Route("Generate")]
        public IActionResult GeneratePdf()
        {
            IActionResult actionResult = GetAll();
        var okResult = actionResult as OkObjectResult;

        var listBirthData = okResult.Value as List<Birth>;
   
            var document = new PdfDocument();
            
            var page = document.AddPage();
            Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);

            var gfx = XGraphics.FromPdfPage(page);

 
            XPdfFontOptions options = new XPdfFontOptions(PdfFontEncoding.Unicode, PdfFontEmbedding.Always);

     
            gfx.DrawString("Birth Registration Report", new XFont("Arial", 20, XFontStyle.BoldItalic), XBrushes.Black, 320, 50, XStringFormats.Center);
            //gfx.DrawString("Someotherfield", new XFont("Arial", 10, XFontStyle.BoldItalic), XBrushes.Black, 120, 70, XStringFormats.Center);

            XColor strokeColor = XColors.Gray;
            XPen pen = new XPen(strokeColor, 2);
 

            var x = 50;
            var y = 110;
             gfx.DrawLine(pen, x, y, 600, y);
            foreach (var item in listBirthData)
            {
                gfx.DrawString((item.RegistrationNo).ToString(),  new XFont("Arial", 12, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 10;
                gfx.DrawString(item.ChildName, new XFont("Arial", 12, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 80;
                gfx.DrawString(item.Sex, new XFont("Arial", 12, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 40;
                gfx.DrawString((item.DateOfBirth).ToString(), new XFont("Arial", 12, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 140;
                gfx.DrawString(item.FatherName, new XFont("Arial", 12, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 90;
                gfx.DrawString(item.MotherName, new XFont("Arial", 12, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 80;
                gfx.DrawString(item.Address, new XFont("Arial", 12, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = 50;
                

                y = y + 20;
                 gfx.DrawLine(pen, x, y, 600, y);
                
                if (y >= 750)
                {
                    page = document.AddPage();
                    gfx = XGraphics.FromPdfPage(page);
                    y = 110;
                }
            }
            gfx.DrawLine(pen, x, y, 400, y);
            y = y + 40;
    
            Byte[] res = null;
            using (MemoryStream ms = new MemoryStream())
            {
                document.Save(ms);
                res = ms.ToArray();
            }
            string filename = "MyFile.pdf";
            return File(res, "application/pdf",filename);
        }
    
    }
}
