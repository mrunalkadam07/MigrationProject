using GramPanchayat_MigrationProject.API.Models;

using GramPanchayat_MigrationProject.API.Data;

namespace GramPanchayat_MigrationProject.API.Repositories

{

    public class DeathRegRepository : IDeathRegRepository

    {

        private readonly GramPanchayatDBContext gramPanchayatDbContext;



        public DeathRegRepository(GramPanchayatDBContext gramPanchayatDbContext)

        {

            this.gramPanchayatDbContext = gramPanchayatDbContext;

        }



        public IEnumerable<Death> GetAll()

        {

            return (IEnumerable<Death>)gramPanchayatDbContext.DeathRegs.ToList();

        }

    }

}