// namespace WebApi.Authorization;

// using GramPanchayat_MigrationProject.API.Data;
// using GramPanchayat_MigrationProject.API.Models;
// using Microsoft.Extensions.Options;
// using Microsoft.IdentityModel.Tokens;
// using System.IdentityModel.Tokens.Jwt;
// using System.Security.Claims;
// using System.Text;

// public interface IJwtUtils
// {
//     public string GenerateToken(LoginModel user);
//     public int? ValidateToken(string token);
// }

// public class JwtUtils : IJwtUtils
// {
//     private readonly JwtSettings jwtSettings;
//     private readonly GramPanchayatDBContext gramPanchayatDBContext;

//     // private readonly AppSettings _appSettings;

//     // public JwtUtils(IOptions<AppSettings> appSettings)
//     // {
//     //     _appSettings = appSettings.Value;
//     // }

//     public string GenerateToken(LoginModel user)
//     {
//         // generate token that is valid for 7 days
//         var person = this.gramPanchayatDBContext.Login1.FirstOrDefault(item=>item.user==user.user && item.pass==user.pass);
//             //Generate Token
//             var tokenhandler = new JwtSecurityTokenHandler();
//             var tokenkey = Encoding.UTF8.GetBytes(this.jwtSettings.securitykey);
//             var tokendesc = new SecurityTokenDescriptor{
//                 Subject = new (
//                     new Claim[] { new Claim(ClaimTypes.Name, person.user)}
//             ),
//                 Expires = DateTime.Now.AddSeconds(20),
//                 SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(tokenkey),SecurityAlgorithms.HmacSha256)
//             };
//             var token = tokenhandler.CreateToken(tokendesc);
//             string finaltoken = tokenhandler.WriteToken(token);
//             return finaltoken;
//     }


//     public int? ValidateToken(string token)
//     {
//         if (token == null) 
//             return null;

//         var tokenHandler = new JwtSecurityTokenHandler();
//         var key = Encoding.ASCII.GetBytes(this.jwtSettings.securitykey);
//         try
//         {
//             tokenHandler.ValidateToken(token, new TokenValidationParameters
//             {
//                 ValidateIssuerSigningKey = true,
//                 IssuerSigningKey = new SymmetricSecurityKey(key),
//                 ValidateIssuer = false,
//                 ValidateAudience = false,
//                 // set clockskew to zero so tokens expire exactly at token expiration time (instead of 5 minutes later)
//                 ClockSkew = TimeSpan.Zero
//             }, out SecurityToken validatedToken);

//             var jwtToken = (JwtSecurityToken)validatedToken;
//             var userId = int.Parse(jwtToken.Claims.First(x => x.Type == "id").Value);

//             // return user id from JWT token if validation successful
//             return userId;
//         }
//         catch
//         {
//             // return null if validation fails
//             return null;
//         }
//     }
// }