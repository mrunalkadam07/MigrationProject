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

    public class MarriageRegistrationController : Controller
    {
        private readonly IMarriageRegRepository marriageRegRepository;
        private readonly ILogger<MarriageRegModel> _logger;

        public MarriageRegistrationController(IMarriageRegRepository marriageRegRepository,ILogger<MarriageRegModel> _logger)
        {
            this.marriageRegRepository = marriageRegRepository;
            this._logger = _logger;
        }

        [HttpGet]
        public IActionResult GetAllMarriageReg(){
            try{

            _logger.LogInformation("Marriage Registration data triggered");
            {
                var result = marriageRegRepository.GetAll();
                return Ok(result);
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

          _logger.LogInformation("Marriage Registration data get by Id"); 
          var reg = marriageRegRepository.Get(RegistrationNo);
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
        public IActionResult AddMarriage(MarriageRegModel marriageRegModel){
            try{

            _logger.LogInformation(" Marriage Registration Data Added");
           marriageRegRepository.Add(marriageRegModel);
           return Ok();
            }
            catch(Exception ex)
            {
                _logger.LogError(ex.ToString());
                return BadRequest(ex.ToString());
            }
        }

        [HttpDelete("{RegistrationNo}")]
        public IActionResult DeleteMarriage(int RegistrationNo){
            try{
           _logger.LogInformation("Data Deleted");
           marriageRegRepository.Delete(RegistrationNo);
           return NoContent();
            }
            catch(Exception ex)
            {
                _logger.LogError(ex.ToString());
                return BadRequest(ex.ToString());
            }
        }
        [HttpPut("{RegistrationNo}")]
        public IActionResult Update(int RegistrationNo,MarriageRegModel marriageRegModel)
        {
            try{
           _logger.LogInformation("Data Updated");
           var obj = marriageRegRepository.Update(RegistrationNo, marriageRegModel);

           if(obj == null){
            return NotFound();
           }

           return Ok(obj);
            }
            catch(Exception ex)
            {
                _logger.LogError(ex.ToString());
                return BadRequest(ex.ToString());
            }
        }

          
    [HttpGet]
         [Route("Generate")]
        public IActionResult GeneratePdf()
        {
            IActionResult actionResult = GetAllMarriageReg();
        var okResult = actionResult as OkObjectResult;

        var listMarriageData = okResult.Value as List<MarriageRegModel>;
   
            var document = new PdfDocument();
            
            var page = document.AddPage();
            Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);

            var gfx = XGraphics.FromPdfPage(page);

 
            XPdfFontOptions options = new XPdfFontOptions(PdfFontEncoding.Unicode, PdfFontEmbedding.Always);

     
            gfx.DrawString("Marriage Registration Report", new XFont("Arial", 20, XFontStyle.BoldItalic), XBrushes.Black, 320, 50, XStringFormats.Center);
            //gfx.DrawString("Someotherfield", new XFont("Arial", 10, XFontStyle.BoldItalic), XBrushes.Black, 120, 70, XStringFormats.Center);

            XColor strokeColor = XColors.Gray;
            XPen pen = new XPen(strokeColor, 2);
 

            var x = 50;
            var y = 90;
            gfx.DrawLine(pen, 48, y, 600, y);


            gfx.DrawString("RegNo",  new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 40;
                gfx.DrawString("MarriageDate",  new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 100;
                gfx.DrawString("MarriagePlace", new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 60;
                gfx.DrawString("NameOfGroom", new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 100;
                gfx.DrawString("NameOfBride", new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 100;
                gfx.DrawString("GroomAge", new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 40;
                gfx.DrawString("BrideAge", new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = 50;
 

            x = 50;
            y = 110;
             gfx.DrawLine(pen, 48, y, 600, y);
            foreach (var item in listMarriageData)
            {
                gfx.DrawString((item.RegistrationNo).ToString(),  new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 40;
                gfx.DrawString((item.MerrageDate).ToString(),  new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 100;
                gfx.DrawString(item.MerragePlace, new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 60;
                gfx.DrawString(item.FullNameOFGroom, new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 100;
                gfx.DrawString(item.FullNameOFBride, new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 100;
                gfx.DrawString((item.GroomAge).ToString(), new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 40;
                gfx.DrawString((item.BrideAge).ToString(), new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = 50;
                

                y = y + 20;
                    gfx.DrawLine(pen, 48, y, 600, y);
                if (y >= 750)
                {
                    page = document.AddPage();
                    gfx = XGraphics.FromPdfPage(page);
                    y = 110;
                }
            }
            gfx.DrawLine(pen, x, y, 400, y);
            gfx.DrawLine(pen,48,90,48,y);
            gfx.DrawLine(pen,600,90,600,y);
            y = y + 40;
        
            Byte[] res = null;
            using (MemoryStream ms = new MemoryStream())
            {
                document.Save(ms);
                res = ms.ToArray();
            }
            string filename = "MarriageReportFile.pdf";
            return File(res, "application/pdf",filename);
        }

        }
    }