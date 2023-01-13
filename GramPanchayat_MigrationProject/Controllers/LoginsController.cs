using System.Data;
using GramPanchayat_MigrationProject.API.Models;
using GramPanchayat_MigrationProject.API.Repositories;
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

        [HttpGet]
        public IActionResult GetAllLogins(){
            {
                var logins = loginRepository.GetAll();
                return Ok(logins);
            }
        }

        [HttpPost, Route("[action]", Name = "Login")]
        public string login(LoginModel logindata)
        {
            SqlConnection con = new SqlConnection(_configuration.GetConnectionString("constring").ToString());
            SqlDataAdapter da = new SqlDataAdapter("Select * from login1 WHERE user = '"+logindata.user+"' AND pass = '"+logindata.pass+"'",con);
            DataTable dt = new DataTable();
            da.Fill(dt);     

            if(dt.Rows.Count > 0)
            {
                //return "Logged-in Successfully";
                return "valid";
            }
            else{
                //return "Invalid Username and Password"; 
                return logindata.user;
            }

        }
    }
}