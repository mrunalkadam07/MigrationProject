using GramPanchayat_MigrationProject.API.Models;

using GramPanchayat_MigrationProject.API.Repositories;

using Microsoft.AspNetCore.Mvc;

using Microsoft.AspNetCore.Authorization;

using Microsoft.Extensions.Options;

using Microsoft.IdentityModel.Tokens;

using System.IdentityModel.Tokens.Jwt;

using System.Text;

using System.Security.Claims;
using GramPanchayat_MigrationProject.API.Data;

namespace GramPanchayat_MigrationProject.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : Controller
    {
        private readonly GramPanchayatDBContext gramPanchayatDBContext;
        private readonly JwtSettings jwtSettings;
        public UserController(GramPanchayatDBContext gramPanchayatDBContext,IOptions<JwtSettings> options)
        {
            this.gramPanchayatDBContext = gramPanchayatDBContext;
            this.jwtSettings =options.Value;
        }

        [HttpPost("Authenticate")]
        public string Authenticate([FromBody]LoginModel loginmodel)
        {
            var person = this.gramPanchayatDBContext.Login1.FirstOrDefault(item=>item.user==loginmodel.user && item.pass==loginmodel.pass);
            if(person==null)
            {
                return "Unautorized";
            }
            //Generate Token
            var tokenhandler = new JwtSecurityTokenHandler();
            var tokenkey = Encoding.UTF8.GetBytes(this.jwtSettings.securitykey);
            var tokendesc = new SecurityTokenDescriptor{
                Subject = new (
                    new Claim[] { new Claim(ClaimTypes.Name, person.user)}
            ),
                Expires = DateTime.Now.AddMinutes(20),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(tokenkey),SecurityAlgorithms.HmacSha256)
            };
            var token = tokenhandler.CreateToken(tokendesc);
            string finaltoken = tokenhandler.WriteToken(token);
            return finaltoken;
        }
    }
}