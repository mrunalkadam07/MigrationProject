using GramPanchayat_MigrationProject.API.Models;
using Microsoft.AspNetCore.Mvc;

namespace GramPanchayat_MigrationProject.API.Repositories
{
    public interface ILoginRepository
    {
        IEnumerable<LoginModel> GetAll();
        public string Validate(LoginModel logindata);
    }
}