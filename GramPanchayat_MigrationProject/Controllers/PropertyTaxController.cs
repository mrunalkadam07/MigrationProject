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

    public class PropertyTaxController : Controller
    {
           private readonly IPropertyTaxRepository propertytaxRepository;
            public PropertyTaxController(IPropertyTaxRepository propertytaxRepository)
             {
                this.propertytaxRepository = propertytaxRepository;
            }

        [HttpGet]
        public IActionResult GetAll(){
            {
                var registrations = propertytaxRepository.GetAll();
                return Ok(registrations);
            }
        }

        [HttpGet("{BillNo}")]
       
        public IActionResult GetReg(int billNo)
        {
          var reg = propertytaxRepository.Get(billNo);
          if(reg == null)
          {
            return NotFound();
          }
          return Ok(reg);
        }

        [HttpPost]
        public IActionResult AddProperty(PropertyTaxPaid propertytax){
           propertytaxRepository.Add(propertytax);
           return Ok();
        }

        [HttpDelete("{BillNo}")]
        public IActionResult DeleteDeath(int billNo){
           propertytaxRepository.Delete(billNo);
           return NoContent();
        }

        [HttpPut("{BillNo}")]
        public PropertyTaxPaid Update(int billNo,PropertyTaxPaid propertyTax)
        {
           return propertytaxRepository.Update(billNo, propertyTax);
        }

        [HttpGet]
         [Route("Generate")]
        public IActionResult GeneratePdf()
        {
            IActionResult actionResult = GetAll();
        var okResult = actionResult as OkObjectResult;

        var listPropertyData = okResult.Value as List<PropertyTaxPaid>;
   
            var document = new PdfDocument();
            
            var page = document.AddPage();
            Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);

            var gfx = XGraphics.FromPdfPage(page);

 
            XPdfFontOptions options = new XPdfFontOptions(PdfFontEncoding.Unicode, PdfFontEmbedding.Always);

     
            gfx.DrawString("Property Tax Report", new XFont("Arial", 20, XFontStyle.BoldItalic), XBrushes.Black, 320, 50, XStringFormats.Center);
            //gfx.DrawString("Someotherfield", new XFont("Arial", 10, XFontStyle.BoldItalic), XBrushes.Black, 120, 70, XStringFormats.Center);

            XColor strokeColor = XColors.Gray;
            XPen pen = new XPen(strokeColor, 2);
 

            var x = 50;
            var y = 110;
             gfx.DrawLine(pen, x, y, 600, y);
            foreach (var item in listPropertyData)
            {
                gfx.DrawString((item.BillNo).ToString(),  new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 10;
                gfx.DrawString((item.Billdate).ToString(),  new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 100;
                gfx.DrawString(item.Name, new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 90;
                gfx.DrawString(item.Address, new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 120;
                gfx.DrawString(item.PropertyNo, new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 20;
                gfx.DrawString((item.HomeTax).ToString(), new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 50;
                gfx.DrawString((item.Total).ToString(), new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
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
            string filename = "PropertyReportFile.pdf";
            return File(res, "application/pdf",filename);
        }
    }
}