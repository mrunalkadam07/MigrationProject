using GramPanchayat_MigrationProject.API.Models;
using GramPanchayat_MigrationProject.API.Data;
using GramPanchayat_MigrationProject.Database;

namespace GramPanchayat_MigrationProject.API.Repositories
{
    public class MarriageRegService : IMarriageRegRepository
    {
        private readonly GramPanchayatDBContext gramPanchayatDBContext;

        public MarriageRegService(GramPanchayatDBContext gramPanchayatDBContext)
        {
            this.gramPanchayatDBContext = gramPanchayatDBContext;
        }

        
        public MarriageRegModel Add(MarriageRegModel merrageReg)
        {
            gramPanchayatDBContext.MerrageReg.Add(merrageReg);
            gramPanchayatDBContext.SaveChanges();
            return merrageReg;
        }


        public void Delete(int RegistrationNo)
        {
            var reg = gramPanchayatDBContext.MerrageReg.Find(RegistrationNo);
            gramPanchayatDBContext.MerrageReg.Remove(reg);
            gramPanchayatDBContext.SaveChanges();
        }
        public MarriageRegModel Get(int Registation_No)
        {
           return gramPanchayatDBContext.MerrageReg.FirstOrDefault(x => x.RegistrationNo == Registation_No );
        }
        public IEnumerable<MarriageRegModel> GetAll()
        {
            return (IEnumerable<MarriageRegModel>)gramPanchayatDBContext.MerrageReg.ToList();
        }

        public MarriageRegModel Update(int RegistrationNo, MarriageRegModel marriageRegModel)
        {
           var existingRecord = gramPanchayatDBContext.MerrageReg.FirstOrDefault(x => x.RegistrationNo == RegistrationNo);
           if(existingRecord == null)
           {
            return null;
           }

            existingRecord.MerrageDate = marriageRegModel.MerrageDate;
            existingRecord.MerragePlace = marriageRegModel.MerragePlace;
            existingRecord.FullNameOFGroom = marriageRegModel.FullNameOFGroom;
            existingRecord.GroomAge = marriageRegModel.GroomAge;
            existingRecord.GroomReligion = marriageRegModel.GroomReligion;
            existingRecord.GroomPlaceOfResidences = marriageRegModel.GroomPlaceOfResidences;
            existingRecord.GroomAddress = marriageRegModel.GroomAddress;
            existingRecord.MerrageTimeGroomDesignation = marriageRegModel.MerrageTimeGroomDesignation;
            existingRecord.FullNameOFBride= marriageRegModel.FullNameOFBride;
            existingRecord.BrideAge = marriageRegModel.BrideAge;
            existingRecord.BrideReligion = marriageRegModel.BrideReligion;
            existingRecord.BridePlaceOfResidences = marriageRegModel.BridePlaceOfResidences;
            existingRecord.BrideAddress = marriageRegModel.BrideAddress;
            existingRecord.MerrageTimeBrideDesignation = marriageRegModel.MerrageTimeBrideDesignation;
            existingRecord.GroomFatherAndMotherName = marriageRegModel.GroomFatherAndMotherName;
            existingRecord.GroomFatherMotherAge = marriageRegModel.GroomFatherMotherAge;
            existingRecord.GroomFateherMotherPLaceOfResidentes = marriageRegModel.GroomFateherMotherPLaceOfResidentes;
            existingRecord.GroomFatherMotherAddress = marriageRegModel.GroomFatherMotherAddress;
            existingRecord.BrideFatherAndMotherName = marriageRegModel.BrideFatherAndMotherName;
            existingRecord.BrideFatherMotherAge = marriageRegModel.BrideFatherMotherAge;
            existingRecord.BrideFatherMotherPlaceOfResidences = marriageRegModel.BrideFatherMotherPlaceOfResidences;
            existingRecord.BrideFatherAndMotherAddress = marriageRegModel.BrideFatherAndMotherAddress;
            existingRecord.NameOfBrahMan = marriageRegModel.NameOfBrahMan;
            existingRecord.FirstFullNameOfWitness = marriageRegModel.FirstFullNameOfWitness;
            existingRecord.FirstWitnessAddress = marriageRegModel.FirstWitnessAddress;
            existingRecord.SecondFullNameOfWitness = marriageRegModel.SecondFullNameOfWitness;
            existingRecord.SecondWitnessAddress = marriageRegModel.SecondWitnessAddress;
            
            gramPanchayatDBContext.SaveChanges();

            return existingRecord;
            
        } 
    }
}