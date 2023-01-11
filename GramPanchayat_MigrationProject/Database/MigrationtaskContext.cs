using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace GramPanchayat_MigrationProject.Database;

public partial class MigrationtaskContext : DbContext
{
    public MigrationtaskContext()
    {
    }

    public MigrationtaskContext(DbContextOptions<MigrationtaskContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Assasmenttax> Assasmenttaxes { get; set; }

    public virtual DbSet<BirthReg> BirthRegs { get; set; }

    public virtual DbSet<DeadBirthreg> DeadBirthregs { get; set; }

    public virtual DbSet<DeathReg> DeathRegs { get; set; }

    public virtual DbSet<Login1> Login1s { get; set; }

    public virtual DbSet<MerrageReg> MerrageRegs { get; set; }

    public virtual DbSet<Servicetax> Servicetaxes { get; set; }

    public virtual DbSet<TaxPaid> TaxPaids { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=PSL-70MH6Q3\\SQLEXPRESS;Database=migrationtask;Trusted_Connection=True;TrustServerCertificate=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Assasmenttax>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("Assasmenttax");

            entity.Property(e => e.Date).HasColumnType("datetime");
            entity.Property(e => e.HoldersName).HasMaxLength(50);
            entity.Property(e => e.OccupiedBy).HasMaxLength(50);
            entity.Property(e => e.OwnersName).HasMaxLength(50);
            entity.Property(e => e.PropertyAddress).HasMaxLength(50);
            entity.Property(e => e.UseOfPropertyType).HasMaxLength(50);
            entity.Property(e => e.YearOfBuildup).HasColumnType("datetime");
        });

        modelBuilder.Entity<BirthReg>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("BirthReg");

            entity.Property(e => e.Address).HasMaxLength(50);
            entity.Property(e => e.BirthPlace).HasMaxLength(50);
            entity.Property(e => e.ChildName).HasMaxLength(50);
            entity.Property(e => e.CityVillegName).HasMaxLength(50);
            entity.Property(e => e.DateOfBirth).HasColumnType("datetime");
            entity.Property(e => e.DeliveryType).HasMaxLength(50);
            entity.Property(e => e.DistName).HasMaxLength(50);
            entity.Property(e => e.FatherEducationQualification).HasMaxLength(50);
            entity.Property(e => e.FatherName).HasMaxLength(50);
            entity.Property(e => e.FatherOccupation).HasMaxLength(50);
            entity.Property(e => e.MotherEducationQualification).HasMaxLength(50);
            entity.Property(e => e.MotherOccupation).HasMaxLength(50);
            entity.Property(e => e.MotherRecidences).HasMaxLength(50);
            entity.Property(e => e.Mothername).HasMaxLength(50);
            entity.Property(e => e.NameAndAddressOfDetailSenderPerson).HasMaxLength(50);
            entity.Property(e => e.RegistionDate).HasColumnType("datetime");
            entity.Property(e => e.Religion).HasMaxLength(50);
            entity.Property(e => e.Sex).HasMaxLength(50);
            entity.Property(e => e.State).HasMaxLength(50);
        });

        modelBuilder.Entity<DeadBirthreg>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("DeadBirthreg");

            entity.Property(e => e.Address).HasMaxLength(50);
            entity.Property(e => e.BirthPlace).HasMaxLength(50);
            entity.Property(e => e.CityVillege).HasMaxLength(50);
            entity.Property(e => e.DeadBirthDate).HasColumnType("datetime");
            entity.Property(e => e.Dist).HasMaxLength(50);
            entity.Property(e => e.FatherName).HasMaxLength(50);
            entity.Property(e => e.MotherName).HasMaxLength(50);
            entity.Property(e => e.NameAndAddressOfDetailSendesPerson).HasMaxLength(50);
            entity.Property(e => e.NameOfRegistar).HasMaxLength(50);
            entity.Property(e => e.RegistretionDate).HasColumnType("datetime");
            entity.Property(e => e.Sex).HasMaxLength(50);
            entity.Property(e => e.Taluko).HasMaxLength(50);
        });

        modelBuilder.Entity<DeathReg>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("DeathReg");

            entity.Property(e => e.CityVillege).HasMaxLength(50);
            entity.Property(e => e.DateOfDeath).HasColumnType("datetime");
            entity.Property(e => e.Dist).HasMaxLength(50);
            entity.Property(e => e.MotherFatherHusbandName).HasMaxLength(50);
            entity.Property(e => e.NameAndAddressOfDeathSenderPerson).HasMaxLength(50);
            entity.Property(e => e.NameOfDeathPerson).HasMaxLength(50);
            entity.Property(e => e.NameOfRegistar).HasMaxLength(50);
            entity.Property(e => e.PermentAddressOfDeathPerson).HasMaxLength(50);
            entity.Property(e => e.PlaceOfDeath).HasMaxLength(50);
            entity.Property(e => e.RegistrationDate).HasColumnType("datetime");
            entity.Property(e => e.Sex).HasMaxLength(50);
            entity.Property(e => e.Taluko).HasMaxLength(50);
        });

        modelBuilder.Entity<Login1>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("login1");

            entity.Property(e => e.Pass)
                .HasMaxLength(50)
                .HasColumnName("pass");
            entity.Property(e => e.User)
                .HasMaxLength(50)
                .HasColumnName("user");
        });

        modelBuilder.Entity<MerrageReg>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("MerrageReg");

            entity.Property(e => e.BrideAddress).HasMaxLength(50);
            entity.Property(e => e.BrideFatherAndMotherAddress).HasMaxLength(50);
            entity.Property(e => e.BrideFatherAndMotherName).HasMaxLength(50);
            entity.Property(e => e.BrideFatherMotherPlaceOfResidences).HasMaxLength(50);
            entity.Property(e => e.BridePlaceOfResidences).HasMaxLength(50);
            entity.Property(e => e.BrideReligion).HasMaxLength(50);
            entity.Property(e => e.FirstFullNameOfWitness).HasMaxLength(50);
            entity.Property(e => e.FirstWitnessAddress).HasMaxLength(50);
            entity.Property(e => e.FullNameOfbride)
                .HasMaxLength(50)
                .HasColumnName("FullNameOFBride");
            entity.Property(e => e.FullNameOfgroom)
                .HasMaxLength(50)
                .HasColumnName("FullNameOFGroom");
            entity.Property(e => e.GroomAddress).HasMaxLength(50);
            entity.Property(e => e.GroomFateherMotherPlaceOfResidentes)
                .HasMaxLength(50)
                .HasColumnName("GroomFateherMotherPLaceOfResidentes");
            entity.Property(e => e.GroomFatherAndMotherName).HasMaxLength(50);
            entity.Property(e => e.GroomFatherMotherAddress).HasMaxLength(50);
            entity.Property(e => e.GroomPlaceOfResidences).HasMaxLength(50);
            entity.Property(e => e.GroomReligion).HasMaxLength(50);
            entity.Property(e => e.MerrageDate).HasColumnType("datetime");
            entity.Property(e => e.MerragePlace).HasMaxLength(50);
            entity.Property(e => e.MerrageTimeBrideDesignation).HasMaxLength(50);
            entity.Property(e => e.MerrageTimeGroomDesignation).HasMaxLength(50);
            entity.Property(e => e.NameOfBrahMan).HasMaxLength(50);
            entity.Property(e => e.SecondFullNameOfWitness).HasMaxLength(50);
            entity.Property(e => e.SecondWitnessAddress).HasMaxLength(50);
        });

        modelBuilder.Entity<Servicetax>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("Servicetax");

            entity.Property(e => e.Date).HasColumnType("datetime");
            entity.Property(e => e.Name).HasMaxLength(50);
        });

        modelBuilder.Entity<TaxPaid>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("TaxPaid");

            entity.Property(e => e.Address).HasMaxLength(50);
            entity.Property(e => e.Billdate).HasColumnType("datetime");
            entity.Property(e => e.Name).HasMaxLength(50);
            entity.Property(e => e.PropertyNo).HasMaxLength(50);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
