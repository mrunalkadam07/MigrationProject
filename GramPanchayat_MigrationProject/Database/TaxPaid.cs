using System;
using System.Collections.Generic;

namespace GramPanchayat_MigrationProject.Database;

public partial class TaxPaid
{
    public DateTime? Billdate { get; set; }

    public int? BillNo { get; set; }

    public int? Year { get; set; }

    public string? Name { get; set; }

    public string? Address { get; set; }

    public string? PropertyNo { get; set; }

    public int? HomeTax { get; set; }

    public int? ElectrycityTax { get; set; }

    public int? SpecialWaterTax { get; set; }

    public int? EducationalSess { get; set; }

    public int? PanaltyCharge { get; set; }

    public int? Total { get; set; }
}
