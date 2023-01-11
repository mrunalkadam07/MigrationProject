using System;
using System.Collections.Generic;

namespace GramPanchayat_MigrationProject.Database;

public partial class Assasmenttax
{
    public int? WardNo { get; set; }

    public DateTime? Date { get; set; }

    public int? FormNo { get; set; }

    public int? OldAssasmentNo { get; set; }

    public string? OwnersName { get; set; }

    public string? HoldersName { get; set; }

    public string? PropertyAddress { get; set; }

    public string? OccupiedBy { get; set; }

    public string? UseOfPropertyType { get; set; }

    public int? LocationCode { get; set; }

    public DateTime? YearOfBuildup { get; set; }

    public int? TotalAreaOfBuildupSqMeter { get; set; }

    public int? OpenAreaWhereNotBuildupSqMeter { get; set; }

    public int? OpenAreasPlotSqMeter { get; set; }

    public int? AssasedPropertyTax { get; set; }

    public int? WardTotal { get; set; }
}
