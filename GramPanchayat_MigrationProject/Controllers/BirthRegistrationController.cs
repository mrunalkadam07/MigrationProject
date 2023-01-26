using GramPanchayat_MigrationProject.API.Models;
using GramPanchayat_MigrationProject.API.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PdfSharpCore.Pdf;
// using PdfSharpCore;
// using PdfSharpCore.Pdf;
using TheArtOfDev.HtmlRenderer.PdfSharp;

namespace GramPanchayat_MigrationProject.API.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class BirthRegistrationController : Controller
    {
        private readonly IBirthRegRepository birthregRepository;
        public BirthRegistrationController(IBirthRegRepository birthregRepository)
        {
            this.birthregRepository = birthregRepository;
        }
        [HttpGet]
        public IActionResult GetAll(){
            {
                var registrations = birthregRepository.GetAll();
                return Ok(registrations);
            }
        }
        [HttpGet("{RegistrationNo}")]
        public IActionResult GetReg(int RegistrationNo)
        {
          var reg = birthregRepository.Get(RegistrationNo);
          if(reg == null)
          {
            return NotFound();
          }
          return Ok(reg);
        }
        [HttpPost]
        public IActionResult AddDeath(Birth birth){
           birthregRepository.Add(birth);
           return Ok();
        }
        [HttpDelete("{RegistrationNo}")]
        public IActionResult DeleteDeath(int RegistrationNo){
           birthregRepository.Delete(RegistrationNo);
           return NoContent();
        }
        [HttpPut("{RegistrationNo}")]
        public Birth Update(int RegistrationNo,Birth birth)
        {
           return birthregRepository.Update(RegistrationNo, birth);
        }

        [HttpGet("GeneratePDF")]
        // [Route("GeneratePDF")]
        public async Task<ActionResult> GeneratePdf()
        {
            var document = new PdfDocument();
            
            List<DeathRegistration> listDeathData = (List<DeathRegistration>)GetAll();

            string htmlstring = "<table style='width:800px; border:solid; border-width:1px;'><thead><tr>";
            htmlstring += "<th style='width:10%;text-align:left;'>Registration No</th>";
            htmlstring += "<th style='width:10%;text-align:left;'>Year</th>";
            htmlstring += "<th style='width:10%;text-align:left;'>City</th>";
            htmlstring += "<th style='width:10%;text-align:left;'>Taluka</th>";
            htmlstring += "<th style='width:10%;text-align:left;'>District</th>";
            htmlstring += "<th style='width:10%;text-align:left;'>RegistrationDate</th>";
            htmlstring += "<th style='width:10%;text-align:left;'>DateOfDeath</th>";
            htmlstring += "<th style='width:10%;text-align:left;'>Name and address of Death Sender Person</th>";
            htmlstring += "<th style='width:10%;text-align:left;'>Gender</th>";
            htmlstring += "<th style='width:10%;text-align:left;'>AgeAtDeath</th>";
            htmlstring += "<th style='width:10%;text-align:left;'>PlaceOfDeath</th>";
            htmlstring += "<th style='width:10%;text-align:left;'>Mother/FatherName</th>";
            htmlstring += "<th style='width:10%;text-align:left;'>NameOfDeadPerson</th>";
            htmlstring += "<th style='width:10%;text-align:left;'>NameOfRegister</th>";
            htmlstring += "</tr></thead> <tbody>";

            foreach (DeathRegistration obj in listDeathData)
            {
            htmlstring += "<tr><td style='width:10%;text-align:left;'>"+obj.RegistrationNo.ToString()+"</td>";
            htmlstring += "<td style='width:10%;text-align:left;'>"+obj.Year.ToString()+"</td>";
            htmlstring += "<td style='width:10%;text-align:left;'>"+obj.CityVillege+"</td>";
            htmlstring += "<td style='width:10%;text-align:left;'>"+obj.Taluko+"</td>";
            htmlstring += "<td style='width:10%;text-align:left;'>"+obj.Dist+"</td>";
            htmlstring += "<td style='width:10%;text-align:left;'>"+obj.RegistrationDate.ToString()+"</td>";
            htmlstring += "<td style='width:10%;text-align:left;'>"+obj.DateOfDeath.ToString()+"</td>";
            htmlstring += "<td style='width:10%;text-align:left;'>"+obj.NameAndAddressOfDeathSenderPerson+"</td>";
            htmlstring += "<td style='width:10%;text-align:left;'>"+obj.Sex+"</td>";
            htmlstring += "<td style='width:10%;text-align:left;'>"+obj.AgeAtDeath.ToString()+"</td>";
            htmlstring += "<td style='width:10%;text-align:left;'>"+obj.PlaceOfDeath+"</td>";
            htmlstring += "<td style='width:10%;text-align:left;'>"+obj.MotherFatherHusbandName+"</td>";
            htmlstring += "<td style='width:10%;text-align:left;'>"+obj.PermentAddressOfDeathPerson+"</td>";
            htmlstring += "<td style='width:10%;text-align:left;'>"+obj.NameOfDeathPerson+"</td>";
            htmlstring += "<td style='width:10%;text-align:left;'>"+obj.NameOfRegistar+"</td></tr>";
            }

            htmlstring += "</tbody></table>";
            PdfPage page = document.AddPage();
            // PdfGenerator.AddPdfPages(document,htmlstring,PdfSharp.PageSize.A4);

            Byte[] res = null;
            using (MemoryStream ms = new MemoryStream())
            {
                document.Save(ms);
                res = ms.ToArray();
            }

            return File(res, "application/pdf");
        }
    
    }
}
