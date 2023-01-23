using System.Data;
using GramPanchayat_MigrationProject.API.Data;
using GramPanchayat_MigrationProject.API.Models;
using GramPanchayat_MigrationProject.API.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;

namespace GramPanchayat_MigrationProject.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class LoginsController : ControllerBase
    {
        private readonly ILoginRepository loginRepository;
        private readonly IConfiguration _configuration;

        public LoginsController(IConfiguration configuration,ILoginRepository loginRepository)
        {
            this.loginRepository = loginRepository;
            _configuration = configuration;
        }

        // [AllowAnonymous]
        // [HttpPost("authenticate")]
        // public IActionResult Authenticate(AuthenticateRequest model)
        // {
        //     var response = _userService.Authenticate(model);
        //     return Ok(response);
        // }

        [HttpGet]
        public IActionResult GetAllLogins(){
            {
                var logins = loginRepository.GetAll();
                return Ok(logins);
            }
        }

        [HttpPost, Route("[action]", Name = "Login")]
        public IActionResult Validate([FromBody]LoginModel logindata)
        {
            int res = loginRepository.Validate(logindata);
            if(res == 1)
            {
                return Ok();
            }
            else
            {
                return NoContent();
            }

        }
    }
}
