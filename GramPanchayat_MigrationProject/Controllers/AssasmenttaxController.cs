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
    public class AssasmenttaxController : Controller
    {
        private readonly IAssasmenttaxRepository assasmenttaxRepository;
        private readonly ILogger<Assasment> _logger;
        public AssasmenttaxController(IAssasmenttaxRepository assasmenttaxRepository,ILogger<Assasment> _logger)
        {
            this.assasmenttaxRepository = assasmenttaxRepository;
            this._logger = _logger;
        }
        [HttpGet]
        public IActionResult GetAll(){
            try{
            _logger.LogInformation("Assasment tax data triggered");
            
            {
                var res = assasmenttaxRepository.GetAll();
                return Ok(res);
            }
            }
             catch(Exception ex)
            {
                _logger.LogError(ex.ToString());
                return BadRequest(ex.ToString());
            }
        }
        [HttpGet("{FormNo}")]
        public IActionResult GetReg(int FormNo)
        {
            try{
            
           _logger.LogInformation("Assasment tax data by Id"); 
          var reg = assasmenttaxRepository.Get(FormNo);
          if(reg == null)
          {
            _logger.LogInformation("ID not found error");
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
        public IActionResult Add(Assasment assasment){
            try{

            _logger.LogInformation("Assasment tax data Added");
           assasmenttaxRepository.Add(assasment);
           return Ok();
            }
            catch(Exception ex)
            {
                _logger.LogError(ex.ToString());
                return BadRequest(ex.ToString());
            }
        }
        [HttpDelete("{FormNo}")]
        public IActionResult Delete(int FormNo){
            try{

            _logger.LogInformation("Data deleted");
           assasmenttaxRepository.Delete(FormNo);
           return NoContent();
            }
            catch(Exception ex)
            {
                _logger.LogError(ex.ToString());
                return BadRequest(ex.ToString());
            }
        }
        [HttpPut("{FormNo}")]
        public Assasment Update(int FormNo,Assasment assasment)
        {
            try{

           _logger.LogInformation("Data Updated");
           return assasmenttaxRepository.Update(FormNo, assasment);
            }
            catch(Exception ex)
            {
                _logger.LogError(ex.ToString());
                return assasmenttaxRepository.Update(FormNo, assasment);
            }
        }

        [HttpGet]
         [Route("Generate")]
        public IActionResult GeneratePdf()
        {
            IActionResult actionResult = GetAll();
        var okResult = actionResult as OkObjectResult;

        var listAssessmentData = okResult.Value as List<Assasment>;
   
            var document = new PdfDocument();
            
            var page = document.AddPage();
            Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);

            var gfx = XGraphics.FromPdfPage(page);

 
            XPdfFontOptions options = new XPdfFontOptions(PdfFontEncoding.Unicode, PdfFontEmbedding.Always);

     
            gfx.DrawString("Assessment Tax Report", new XFont("Arial", 20, XFontStyle.BoldItalic), XBrushes.Black, 320, 50, XStringFormats.Center);
            //gfx.DrawString("Someotherfield", new XFont("Arial", 10, XFontStyle.BoldItalic), XBrushes.Black, 120, 70, XStringFormats.Center);

            XColor strokeColor = XColors.Gray;
            XPen pen = new XPen(strokeColor, 2);
 

            var x = 50;
            var y = 110;
             gfx.DrawLine(pen, x, y, 600, y);
            foreach (var item in listAssessmentData)
            {
                gfx.DrawString((item.FormNo).ToString(),  new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 10;
                gfx.DrawString((item.WardNo).ToString(),  new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 20;
                gfx.DrawString((item.Date).ToString(), new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 100;
                 gfx.DrawString((item.OldAssasmentNo).ToString(),  new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 30;
                gfx.DrawString(item.OwnersName,  new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 90;
                gfx.DrawString(item.HoldersName,  new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 90;
                gfx.DrawString(item.PropertyAddress,  new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 120;
                gfx.DrawString((item.TotalAreaOfBuildupSqMeter).ToString(),  new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 30;
                gfx.DrawString((item.OpenAreasPlotSqMeter).ToString(),  new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
               
                y = y + 20;
                x=50;
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
            string filename = "MyAssessmentFile.pdf";
            return File(res, "application/pdf",filename);
        }
    }
}
