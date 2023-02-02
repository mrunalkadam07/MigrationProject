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

namespace GramPanchayat_MigrationProject.API.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]

    public class DeadBirthRegController : Controller
    {
           private readonly IDeadBirthRepository deathBirthregRepository;
           private readonly ILogger<DeadBirth> _logger;
            public DeadBirthRegController(IDeadBirthRepository deathBirthregRepository,ILogger<DeadBirth> _logger)
             {
                this.deathBirthregRepository = deathBirthregRepository;
                this._logger = _logger;
            }

        [HttpGet]
        public IActionResult GetAll(){
            try{

            _logger.LogInformation("DeadBirth Registration data triggered");
            {
                var registrations = deathBirthregRepository.GetAll();
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
            
           _logger.LogInformation("DeadBirth Registration data get by Id");
          var reg = deathBirthregRepository.Get(RegistrationNo);
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
        public IActionResult AddDeath(DeadBirth deadBirthRegistration){
            try{

            _logger.LogInformation("DeadBirth Registration data Added");
           deathBirthregRepository.Add(deadBirthRegistration);
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
                _logger.LogInformation("Data deleted");
                deathBirthregRepository.Delete(RegistrationNo);
                return NoContent();
            }
              catch(Exception ex)
            {
                _logger.LogError(ex.ToString());
                return BadRequest(ex.ToString());
            }
            
           
        }

        [HttpPut("{RegistrationNo}")]
        public DeadBirth Update(int RegistrationNo,DeadBirth deadBirthRegistration)
        {
            try{
                _logger.LogInformation("Data Updated");
                return deathBirthregRepository.Update(RegistrationNo, deadBirthRegistration);
            }
            catch(Exception ex)
            {
                _logger.LogError(ex.ToString());
                return deathBirthregRepository.Update(RegistrationNo, deadBirthRegistration);
            }
        }

        [HttpGet]
         [Route("Generate")]
        public IActionResult GeneratePdf()
        {
            IActionResult actionResult = GetAll();
        var okResult = actionResult as OkObjectResult;

        var listDeadBirthData = okResult.Value as List<DeadBirth>;
   
            var document = new PdfDocument();
            
            var page = document.AddPage();
            Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);

            var gfx = XGraphics.FromPdfPage(page);

 
            XPdfFontOptions options = new XPdfFontOptions(PdfFontEncoding.Unicode, PdfFontEmbedding.Always);

     
            gfx.DrawString("DeadBirth Registration Report", new XFont("Arial", 20, XFontStyle.BoldItalic), XBrushes.Black, 320, 50, XStringFormats.Center);
            //gfx.DrawString("Someotherfield", new XFont("Arial", 10, XFontStyle.BoldItalic), XBrushes.Black, 120, 70, XStringFormats.Center);

            XColor strokeColor = XColors.Gray;
            XPen pen = new XPen(strokeColor, 2);
            

            var x = 50;
            var y = 110;
             gfx.DrawLine(pen, x, y, 600, y);
            foreach (var item in listDeadBirthData)
            {
                gfx.DrawString((item.RegistretionNo).ToString(),  new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 10;
                gfx.DrawString((item.Year).ToString(),  new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 30;
                gfx.DrawString(item.CityVillege, new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 80;
                gfx.DrawString((item.DeadBirthDate).ToString(),  new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 100;
                gfx.DrawString(item.Sex, new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 40;
                gfx.DrawString(item.FatherName, new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 90;
                gfx.DrawString(item.MotherName, new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 90;
                gfx.DrawString(item.BirthPlace, new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
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
            string filename = "MyDeadBirthFile.pdf";
            return File(res, "application/pdf",filename);
        }
    }
}