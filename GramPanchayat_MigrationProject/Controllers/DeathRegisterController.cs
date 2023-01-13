using GramPanchayat_MigrationProject.API.Repositories;

using Microsoft.AspNetCore.Mvc;



namespace GramPanchayat_MigrationProject.API.Controllers

{

    [ApiController]

    [Route("[controller]")]



    public class DeathRegisterController : Controller

    {

       

        private readonly IDeathRegRepository deathregistrationRepository;



        public DeathRegisterController(IDeathRegRepository deathregistrationRepository)

        {

            this.deathregistrationRepository = deathregistrationRepository;

        }



        [HttpGet]

        public IActionResult GetAll(){

            {

                var registrations = deathregistrationRepository.GetAll();

                return Ok(registrations);

            }

        }

    }

}