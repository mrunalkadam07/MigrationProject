using GramPanchayat_MigrationProject.API.Models;
namespace GramPanchayat_MigrationProject.API.Repositories
{
    public interface ILoginRepository
    {
        IEnumerable<LoginModel> GetAll();
    }
}