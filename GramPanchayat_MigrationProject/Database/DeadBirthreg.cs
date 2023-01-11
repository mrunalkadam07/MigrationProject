using System;
using System.Collections.Generic;

namespace GramPanchayat_MigrationProject.Database;

public partial class DeadBirthreg
{
    public int? Year { get; set; }

    public int? RegistretionNo { get; set; }

    public string? CityVillege { get; set; }

    public string? Taluko { get; set; }

    public string? Dist { get; set; }

    public DateTime? RegistretionDate { get; set; }

    public DateTime? DeadBirthDate { get; set; }

    public string? Sex { get; set; }

    public string? FatherName { get; set; }

    public string? MotherName { get; set; }

    public string? Address { get; set; }

    public string? BirthPlace { get; set; }

    public string? NameAndAddressOfDetailSendesPerson { get; set; }

    public string? NameOfRegistar { get; set; }
}
