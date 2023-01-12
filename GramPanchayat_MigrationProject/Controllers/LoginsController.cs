using GramPanchayat_MigrationProject.API.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace GramPanchayat_MigrationProject.API.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class LoginsController : Controller
    {
        private readonly ILoginRepository loginRepository;

        public LoginsController(ILoginRepository loginRepository)
        {
            this.loginRepository = loginRepository;
        }

        [HttpGet]
        public IActionResult GetAllLogins(){
            {
                var logins = loginRepository.GetAll();
                return Ok(logins);
            }
        }
    }
}