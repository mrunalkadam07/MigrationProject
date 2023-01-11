using System;
using System.Collections.Generic;

namespace GramPanchayat_MigrationProject.Database;

public partial class BirthReg
{
    public int? RegistrationNo { get; set; }

    public DateTime? RegistionDate { get; set; }

    public DateTime? DateOfBirth { get; set; }

    public string? Sex { get; set; }

    public string? ChildName { get; set; }

    public string? FatherName { get; set; }

    public string? Mothername { get; set; }

    public string? Address { get; set; }

    public int? WeightOfChild { get; set; }

    public string? BirthPlace { get; set; }

    public string? NameAndAddressOfDetailSenderPerson { get; set; }

    public string? CityVillegName { get; set; }

    public string? DistName { get; set; }

    public string? State { get; set; }

    public string? Religion { get; set; }

    public string? FatherEducationQualification { get; set; }

    public string? MotherEducationQualification { get; set; }

    public string? FatherOccupation { get; set; }

    public string? MotherOccupation { get; set; }

    public int? MotherAgeMerrageTime { get; set; }

    public int? MotherAgeAtChildTime { get; set; }

    public string? DeliveryType { get; set; }

    public string? MotherRecidences { get; set; }

    public int? TotalLiveChildWithThisChild { get; set; }
}
