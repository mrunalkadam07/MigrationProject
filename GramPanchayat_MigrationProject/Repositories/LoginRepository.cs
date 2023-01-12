using GramPanchayat_MigrationProject.API.Models;
using GramPanchayat_MigrationProject.API.Data;
namespace GramPanchayat_MigrationProject.API.Repositories
{
    public class LoginRepository : ILoginRepository
    {
        private readonly GramPanchayatDBContext gramPanchayatDbContext;

        public LoginRepository(GramPanchayatDBContext gramPanchayatDbContext)
        {
            this.gramPanchayatDbContext = gramPanchayatDbContext;
        }

        public IEnumerable<LoginModel> GetAll()
        {
            return gramPanchayatDbContext.Login1.ToList();
        }
    }
}