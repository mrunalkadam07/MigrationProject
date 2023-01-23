using GramPanchayat_MigrationProject.API.Data;
using GramPanchayat_MigrationProject.API.Repositories;
using Microsoft.EntityFrameworkCore;

using Microsoft.AspNetCore.Authentication.JwtBearer;

using Microsoft.IdentityModel.Tokens;

using System.IdentityModel.Tokens.Jwt;

using System.Text;


var builder = WebApplication.CreateBuilder(args);
var _authkey = builder.Configuration.GetValue<string>("JwtSettings:securitykey");

// Add services to the container.

builder.Services.AddControllersWithViews();
builder.Services.AddDbContext<GramPanchayatDBContext>(options =>{
    options.UseSqlServer(builder.Configuration.GetConnectionString("constring"));
});

builder.Services.AddScoped<ILoginRepository,LoginService>();
builder.Services.AddScoped<IDeadBirthRepository,DeadBirthService>();
builder.Services.AddScoped<IDeathRegRepository,DeathRegService>();
builder.Services.AddScoped<IPropertyTaxRepository,PropertyTaxService>();
builder.Services.AddScoped<IBirthRegRepository,BirthRegService>();
builder.Services.AddScoped<IAssasmenttaxRepository,AssasmenttaxService>();
builder.Services.AddScoped<IMarriageRegRepository,MarriageRegService>();

builder.Services.AddAuthentication(item=>{
item.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
item.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(item=>{
    item.RequireHttpsMetadata = true;
    item.SaveToken = true;
    item.TokenValidationParameters = new TokenValidationParameters(){
        ValidateIssuerSigningKey= true,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_authkey)),  
        ValidateIssuer = false,
        ValidateAudience = false,
        ClockSkew = TimeSpan.Zero
    };
});

var _jwtsettings = builder.Configuration.GetSection("JwtSettings");
builder.Services.Configure<JwtSettings>(_jwtsettings);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}


app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseAuthentication();

app.UseAuthorization();
app.UseCors();
app.UseCors(x => x
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .SetIsOriginAllowed(origin => true) // allow any origin
                    .AllowCredentials()); // allow credentials

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.Run();
