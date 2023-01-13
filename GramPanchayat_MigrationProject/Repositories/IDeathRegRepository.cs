using GramPanchayat_MigrationProject.API.Models;

namespace GramPanchayat_MigrationProject.API.Repositories

{

    public interface IDeathRegRepository

    {

        IEnumerable<Death> GetAll();

    }

}