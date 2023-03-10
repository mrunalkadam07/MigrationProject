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
        private readonly ILogger<DeathRegistration> _logger;


        public DeathRegistrationController(IDeathRegRepository deathregRepository,ILogger<DeathRegistration> _logger)
        {
            this.deathregRepository = deathregRepository;
            this._logger = _logger;
        }
        [HttpGet]
        public IActionResult GetAll(){
            try
            {
                {
                _logger.LogInformation("Death Registration Data Triggered");
                var registrations = deathregRepository.GetAll();
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
                _logger.LogInformation("Death Registration Get By ID");
          var reg = deathregRepository.Get(RegistrationNo);
          if(reg == null)
          {
            _logger.LogInformation("Id not found Error occur");
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
        public IActionResult AddDeath(DeathRegistration deathRegistration){
            try{
                _logger.LogInformation("Added new Death Registration");
           deathregRepository.Add(deathRegistration);
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
             _logger.LogInformation(" Data Deleted");
           deathregRepository.Delete(RegistrationNo);
           return NoContent();
           }
           catch(Exception ex)
           {
            _logger.LogError(ex.ToString());
                return BadRequest(ex.ToString()); 
           }
        }
        [HttpPut("{RegistrationNo}")]
        public DeathRegistration Update(int RegistrationNo,DeathRegistration deathRegistration)
        {
            try{
                 _logger.LogInformation("Updated Death Registration");
           return deathregRepository.Update(RegistrationNo, deathRegistration);
            }
            catch(Exception ex)
            {
                _logger.LogError(ex.ToString());
                return deathregRepository.Update(RegistrationNo, deathRegistration); 
            }
        }

         [HttpGet]
         [Route("Generate")]
        public IActionResult GeneratePdf()
        {
            IActionResult actionResult = GetAll();
        var okResult = actionResult as OkObjectResult;

        var listDeathData = okResult.Value as List<DeathRegistration>;
   
            var document = new PdfDocument();
            
            var page = document.AddPage();
            Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);

            var gfx = XGraphics.FromPdfPage(page);

 
            XPdfFontOptions options = new XPdfFontOptions(PdfFontEncoding.Unicode, PdfFontEmbedding.Always);

     
            gfx.DrawString("Death Registration Report", new XFont("Arial", 20, XFontStyle.BoldItalic), XBrushes.Black, 320, 50, XStringFormats.Center);
            //gfx.DrawString("Someotherfield", new XFont("Arial", 10, XFontStyle.BoldItalic), XBrushes.Black, 120, 70, XStringFormats.Center);

            XColor strokeColor = XColors.Gray;
            XPen pen = new XPen(strokeColor, 2);

            var x = 50;
            var y = 90;
            gfx.DrawLine(pen, 48, y, 600, y);


            gfx.DrawString("RegNo",  new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 40;
                gfx.DrawString("Year",  new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 40;
                gfx.DrawString("NameOfDeathPerson", new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 90;
                gfx.DrawString("City", new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 60;
                gfx.DrawString("DateOfDeath", new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 100;
                gfx.DrawString("Age", new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 40;
                gfx.DrawString("Mother/Father/HusbandName", new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = 50;
 

            x = 50;
            y = 110;
             gfx.DrawLine(pen, 48, y, 600, y);
            foreach (var item in listDeathData)
            {
                gfx.DrawString((item.RegistrationNo).ToString(),  new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 40;
                gfx.DrawString((item.Year).ToString(),  new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 40;
                gfx.DrawString(item.NameOfDeathPerson, new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 90;
                gfx.DrawString(item.CityVillege, new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 60;
                gfx.DrawString((item.DateOfDeath).ToString(), new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 100;
                gfx.DrawString((item.AgeAtDeath).ToString(), new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
                x = x + 40;
                gfx.DrawString(item.MotherFatherHusbandName, new XFont("Arial", 8, XFontStyle.Regular), XBrushes.Black, x, y, XStringFormats.TopLeft);
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
            string filename = "MyDeathFile.pdf";
            return File(res, "application/pdf",filename);
        }
    }
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
    
