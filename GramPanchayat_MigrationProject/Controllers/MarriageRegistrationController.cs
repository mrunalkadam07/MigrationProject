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

        public MarriageRegistrationController(IMarriageRegRepository marriageRegRepository)
        {
            this.marriageRegRepository = marriageRegRepository;
        }

        [HttpGet]
        public IActionResult GetAllMarriageReg(){
            {
                var result = marriageRegRepository.GetAll();
                return Ok(result);
            }
        }
        [HttpGet("{RegistrationNo}")]
        public IActionResult GetReg(int RegistrationNo)
        {
          var reg = marriageRegRepository.Get(RegistrationNo);
          if(reg == null)
          {
            return NotFound();
          }
          return Ok(reg);
        }

        [HttpPost]
        public IActionResult AddMarriage(MarriageRegModel marriageRegModel){
           marriageRegRepository.Add(marriageRegModel);
           return Ok();
        }

        [HttpDelete("{RegistrationNo}")]
        public IActionResult DeleteMarriage(int RegistrationNo){
           marriageRegRepository.Delete(RegistrationNo);
           return NoContent();
        }
        [HttpPut("{RegistrationNo}")]
        public IActionResult Update(int RegistrationNo,MarriageRegModel marriageRegModel)
        {
           var obj = marriageRegRepository.Update(RegistrationNo, marriageRegModel);

           if(obj == null){
            return NotFound();
           }

           return Ok(obj);
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
            var y = 110;
             gfx.DrawLine(pen, x, y, 600, y);
            foreach (var item in listMarriageData)
            {
                gfx.DrawString((item.RegistrationNo).ToString(),  new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 10;
                gfx.DrawString((item.MerrageDate).ToString(),  new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 100;
                gfx.DrawString(item.MerragePlace, new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 60;
                gfx.DrawString(item.FullNameOFGroom, new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 100;
                gfx.DrawString((item.GroomAge).ToString(), new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 20;
                gfx.DrawString(item.GroomReligion, new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 60;
                gfx.DrawString(item.FullNameOFBride, new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 100;
                gfx.DrawString((item.BrideAge).ToString(), new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 20;
                gfx.DrawString(item.BrideReligion, new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
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
            string filename = "MarriageReportFile.pdf";
            return File(res, "application/pdf",filename);
        }

        }
    }