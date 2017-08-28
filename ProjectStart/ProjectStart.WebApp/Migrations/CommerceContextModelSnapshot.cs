﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using ProjectStart.Commerce;
using System;

namespace ProjectStart.WebApp.Migrations
{
    [DbContext(typeof(CommerceContext))]
    partial class CommerceContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.0-rtm-26452")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("ProjectStart.Commerce.Entity.Node", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Code")
                        .IsRequired();

                    b.Property<string>("CreatedBy");

                    b.Property<DateTime>("DateCreated")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime?>("DateModified")
                        .ValueGeneratedOnUpdate();

                    b.Property<DateTime?>("DateRemoved");

                    b.Property<bool>("IsRemoved");

                    b.Property<string>("ModifiedBy");

                    b.Property<string>("Name")
                        .IsRequired();

                    b.Property<int?>("ParentId");

                    b.Property<string>("RemovedBy");

                    b.HasKey("Id");

                    b.HasIndex("ParentId");

                    b.ToTable("Node");
                });

            modelBuilder.Entity("ProjectStart.Commerce.Entity.Node", b =>
                {
                    b.HasOne("ProjectStart.Commerce.Entity.Node", "ParentNode")
                        .WithMany("SubNodes")
                        .HasForeignKey("ParentId");
                });
#pragma warning restore 612, 618
        }
    }
}