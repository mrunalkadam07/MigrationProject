using System;
using System.Collections.Generic;

namespace GramPanchayat_MigrationProject.Database;

public partial class Servicetax
{
    public DateTime? Date { get; set; }

    public int? No { get; set; }

    public string? Name { get; set; }

    public int? GovermentServent { get; set; }

    public int? OtherEmployee { get; set; }

    public int? Total { get; set; }
}
