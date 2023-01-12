using System.ComponentModel.DataAnnotations;

namespace GramPanchayat_MigrationProject.API.Models;
    public class LoginModel
    {
        [Key]
        public string user { get; set; }
        public string pass { get; set; }
    }
