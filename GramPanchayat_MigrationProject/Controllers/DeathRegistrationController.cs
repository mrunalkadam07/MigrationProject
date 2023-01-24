using GramPanchayat_MigrationProject.API.Models;
using GramPanchayat_MigrationProject.API.Repositories;
using Microsoft.AspNetCore.Mvc;
using PdfSharpCore;
using PdfSharpCore.Pdf;
using TheArtOfDev.HtmlRenderer.PdfSharp;

namespace GramPanchayat_MigrationProject.API.Controllers
{
    //[Authorize]
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

        [HttpGet("GeneratePDF")]
        public FileContentResult GeneratePDF()
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
            var pdfx = PdfGenerator.GeneratePdf(htmlstring,PdfSharp.PageSize.A4);

            Byte[] res = null;
            using (MemoryStream ms = new MemoryStream())
            {
                pdfx.Save(ms);
                res = ms.ToArray();
            }

            return File(res, "application/pdf");
        }
    }
}