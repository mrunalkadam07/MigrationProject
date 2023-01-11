using Microsoft.EntityFrameworkCore;
using GramPanchayat_MigrationProject.API.Models;

namespace GramPanchayat_MigrationProject.API.Data
{
    public class GramPanchayatDBContext : DbContext
    {
        public GramPanchayatDBContext(DbContextOptions<GramPanchayatDBContext> options): base(options) 
        {
            
        }

        public DbSet<LoginModel> Login1s { get; set; }
    }
    
}