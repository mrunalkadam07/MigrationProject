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
    public class DeathRegistrationController : Controller
    {
        private readonly IDeathRegRepository deathregRepository;


        public DeathRegistrationController(IDeathRegRepository deathregRepository)
        {
            this.deathregRepository = deathregRepository;
        }
        [HttpGet]
        public IActionResult GetAll(){
            {
                var registrations = deathregRepository.GetAll();
                return Ok(registrations);
            }
        }
        [HttpGet("{RegistrationNo}")]
        public IActionResult GetReg(int RegistrationNo)
        {
          var reg = deathregRepository.Get(RegistrationNo);
          if(reg == null)
          {
            return NotFound();
          }
          return Ok(reg);
        }
        [HttpPost]
        public IActionResult AddDeath(DeathRegistration deathRegistration){
           deathregRepository.Add(deathRegistration);
           return Ok();
        }
        [HttpDelete("{RegistrationNo}")]
        public IActionResult DeleteDeath(int RegistrationNo){
           deathregRepository.Delete(RegistrationNo);
           return NoContent();
        }
        [HttpPut("{RegistrationNo}")]
        public DeathRegistration Update(int RegistrationNo,DeathRegistration deathRegistration)
        {
           return deathregRepository.Update(RegistrationNo, deathRegistration);
        }
         [HttpGet]
         [Route("Generate")]
        public IActionResult GeneratePdf()
        {
            IActionResult actionResult = GetAll();

    //Assert
        var okResult = actionResult as OkObjectResult;
        //Assert.IsNotNull(okResult);

        var listDeathData = okResult.Value as List<DeathRegistration>;
    //Assert.IsNotNull(newBatch);
          // List<DeathRegistration> listDeathData = (List<DeathRegistration>)GetAll();
            //Font drawFont = new Font("Arial", 16);
            var document = new PdfDocument();
            // document.Info.Title = Microsoft.VisualBasic.Constants.EnvelopLabelTitle;
            // document.Info.Subject = Constants.EnvelopLabelSubject;
            // document.Info.Author = Constants.EnvelopLabelAuthor;

 

            // Create an empty page
            var page = document.AddPage();
            Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);

 

            // Get an XGraphics object for drawing
            var gfx = XGraphics.FromPdfPage(page);

 
            XPdfFontOptions options = new XPdfFontOptions(PdfFontEncoding.Unicode, PdfFontEmbedding.Always);

      // Create a font
      
           // Font font = new Font("Arial", 20);
            // Create a font
            //var font = new XFont(Constants.EnvelopLabelFontFamily, 14, XFontStyle.BoldItalic);

 

            // Draw the text
            // gfx.DrawString(ReportTitle, font, XBrushes.Black, 120, 50, XStringFormats.Center);
            // gfx.DrawString(Someotherfield, new XFont(FontFamily, 10, BoldItalic), XBrushes.Black, 120, 70, XStringFormats.Center);

            XColor strokeColor = XColors.Gray;
            XPen pen = new XPen(strokeColor, 2);
            gfx.DrawLine(pen, 100, 90, 150, 90);
            gfx.DrawLine(pen, 200, 90, 250, 90);
            gfx.DrawLine(pen, 300, 90, 350, 90);

 

            var x = 100;
            var y = 110;
            foreach (var item in listDeathData)
            {
                gfx.DrawString(item.Dist,  new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 100;
                gfx.DrawString(item.Taluko,  new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 100;
                gfx.DrawString(item.CityVillege, new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = 100;
                y = y + 10;
                // if y coordinate is >= 750 then add new page so that footer can be added on new page
                if (y >= 750)
                {
                    page = document.AddPage();
                    gfx = XGraphics.FromPdfPage(page);
                    y = 110;
                }
            }
            gfx.DrawLine(pen, x, y, 400, y);
            y = y + 40;
           // gfx.DrawString(footer, new XFont(Constants.EnvelopLabelFontFamily, 8, XFontStyle.BoldItalic), XBrushes.Black, x, y, XStringFormats.TopLeft);
            // var stream = new MemoryStream();
            // document.Save(stream, false);
            // return stream.ToArray();
            Byte[] res = null;
            using (MemoryStream ms = new MemoryStream())
            {
                document.Save(ms);
                res = ms.ToArray();
            }
            string filename = "MyFile.pdf";
            return File(res, "application/pdf",filename);
        }


//         [HttpGet]
// [Route("GeneratePDF")]
// public System.Web.Http.IHttpActionResult GeneratePDF()
// {

//     var file = GetAll();

//     System.Web.Http.IHttpActionResult response;
//     HttpResponseMessage responseMsg = new HttpResponseMessage(System.Net.HttpStatusCode.OK);
//     responseMsg.Content = new I(file);
//     responseMsg.Content.Headers.ContentDisposition = new System.Net.Http.Headers.ContentDispositionHeaderValue("attachment");
//     responseMsg.Content.Headers.ContentDisposition.FileName = file.FileName;
//     responseMsg.Content.Headers.ContentType = new MediaTypeHeaderValue("application/pdf");
//     response = ResponseMessage(responseMsg);
//     return response;
// }

        // [HttpGet]
        // [Route("GeneratePDF")]
        // public IActionResult GeneratePDF()
        // {
        //     var document = new PdfDocument();
            
        //     List<DeathRegistration> listDeathData = (List<DeathRegistration>)GetAll();

        //     string htmlstring = "<table style='width:800px; border:solid; border-width:1px;'><thead><tr>";
        //     htmlstring += "<th style='width:10%;text-align:left;'>Registration No</th>";
        //     htmlstring += "<th style='width:10%;text-align:left;'>Year</th>";
        //     htmlstring += "<th style='width:10%;text-align:left;'>City</th>";
        //     htmlstring += "<th style='width:10%;text-align:left;'>Taluka</th>";
        //     htmlstring += "<th style='width:10%;text-align:left;'>District</th>";
        //     htmlstring += "<th style='width:10%;text-align:left;'>RegistrationDate</th>";
        //     htmlstring += "<th style='width:10%;text-align:left;'>DateOfDeath</th>";
        //     htmlstring += "<th style='width:10%;text-align:left;'>Name and address of Death Sender Person</th>";
        //     htmlstring += "<th style='width:10%;text-align:left;'>Gender</th>";
        //     htmlstring += "<th style='width:10%;text-align:left;'>AgeAtDeath</th>";
        //     htmlstring += "<th style='width:10%;text-align:left;'>PlaceOfDeath</th>";
        //     htmlstring += "<th style='width:10%;text-align:left;'>Mother/FatherName</th>";
        //     htmlstring += "<th style='width:10%;text-align:left;'>NameOfDeadPerson</th>";
        //     htmlstring += "<th style='width:10%;text-align:left;'>NameOfRegister</th>";
        //     htmlstring += "</tr></thead> <tbody>";

        //     foreach (DeathRegistration obj in listDeathData)
        //     {
        //     htmlstring += "<tr><td style='width:10%;text-align:left;'>"+obj.RegistrationNo.ToString()+"</td>";
        //     htmlstring += "<td style='width:10%;text-align:left;'>"+obj.Year.ToString()+"</td>";
        //     htmlstring += "<td style='width:10%;text-align:left;'>"+obj.CityVillege+"</td>";
        //     htmlstring += "<td style='width:10%;text-align:left;'>"+obj.Taluko+"</td>";
        //     htmlstring += "<td style='width:10%;text-align:left;'>"+obj.Dist+"</td>";
        //     htmlstring += "<td style='width:10%;text-align:left;'>"+obj.RegistrationDate.ToString()+"</td>";
        //     htmlstring += "<td style='width:10%;text-align:left;'>"+obj.DateOfDeath.ToString()+"</td>";
        //     htmlstring += "<td style='width:10%;text-align:left;'>"+obj.NameAndAddressOfDeathSenderPerson+"</td>";
        //     htmlstring += "<td style='width:10%;text-align:left;'>"+obj.Sex+"</td>";
        //     htmlstring += "<td style='width:10%;text-align:left;'>"+obj.AgeAtDeath.ToString()+"</td>";
        //     htmlstring += "<td style='width:10%;text-align:left;'>"+obj.PlaceOfDeath+"</td>";
        //     htmlstring += "<td style='width:10%;text-align:left;'>"+obj.MotherFatherHusbandName+"</td>";
        //     htmlstring += "<td style='width:10%;text-align:left;'>"+obj.PermentAddressOfDeathPerson+"</td>";
        //     htmlstring += "<td style='width:10%;text-align:left;'>"+obj.NameOfDeathPerson+"</td>";
        //     htmlstring += "<td style='width:10%;text-align:left;'>"+obj.NameOfRegistar+"</td></tr>";
        //     }

        //     htmlstring += "</tbody></table>";
        //     PdfGenerator.AddPdfPages(document,htmlstring,PdfSharp.PageSize.A4);

        //     Byte[] res = null;
        //     using (MemoryStream ms = new MemoryStream())
        //     {
        //         document.Save(ms);
        //         res = ms.ToArray();
        //     }

        //     return File(res, "application/pdf");
        // }
    }
}