using System.ComponentModel.DataAnnotations;

 

namespace GramPanchayat_MigrationProject.API.Models;
    public class Death
    {
        [Key]
        public int RegistrationNo { get; set; }
        public int Year { get; set; }
        public string CityVillage {get; set;}
        public string Taluko {get; set;}
        public string Dist {get; set;}
        public DateTime RegistrationDate {get; set;}
        public DateTime DateOfDeath {get; set;}
        public string NameOfDeathPerson{get; set;}
        public string Sex {get; set;}
        public int AgeAtDeath {get; set;}
        public string PlaceOfDeath {get; set;}
        public String MotherFatherHusbandName {get; set;}
        public string PermanentAddressOfDeadPerson {get; set;}
        public string NameAndAddressofDeathSenderPerson {get; set;}
        public string NameOfRegistar {get; set;}

 

    }