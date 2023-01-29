using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GramPanchayat_MigrationProject.API.Models;
    public class MarriageRegModel
    {
        [Key]
        public int RegistrationNo { get; set; }
        public DateTime MerrageDate { get; set; }
        public string MerragePlace { get; set; }
        public string FullNameOFGroom  { get; set; }
        public int GroomAge { get; set; }
        public string GroomReligion { get; set; }
        public string GroomPlaceOfResidences { get; set; }
        public string GroomAddress { get; set; }
        public string MerrageTimeGroomDesignation { get; set; }
        public string FullNameOFBride { get; set; }
        public int BrideAge { get; set; }
        public string BrideReligion { get; set; }
        public string BridePlaceOfResidences { get; set; }
        public string BrideAddress { get; set; }
        public string MerrageTimeBrideDesignation { get; set; }
        public string GroomFatherAndMotherName { get; set; }
        public int GroomFatherMotherAge { get; set; }
        public string GroomFateherMotherPLaceOfResidentes { get; set; }
        public string GroomFatherMotherAddress { get; set; }
        public string BrideFatherAndMotherName { get; set; }
        public int BrideFatherMotherAge { get; set; }
        public string BrideFatherMotherPlaceOfResidences { get; set; }
        public string BrideFatherAndMotherAddress { get; set; }
        public string NameOfBrahMan { get; set; }
        public string FirstFullNameOfWitness { get; set; }
        public string FirstWitnessAddress { get; set; }
        public string SecondFullNameOfWitness { get; set; }
        public string SecondWitnessAddress { get; set; }

        
    }