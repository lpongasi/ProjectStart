﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using ProjectStart.Entity;
using System;

namespace ProjectStart.WebApp.Migrations.Commerce
{
    [DbContext(typeof(CommerceDbContext))]
    [Migration("20180208174745_Commerce_20180209_014730")]
    partial class Commerce_20180209_014730
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.1-rtm-125")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("ProjectStart.Entity.NodeEntity", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Code");

                    b.Property<string>("CreatedBy");

                    b.Property<DateTime>("DateCreated");

                    b.Property<DateTime?>("DateModified")
                        .ValueGeneratedOnAddOrUpdate();

                    b.Property<DateTime?>("DateRemoved");

                    b.Property<bool>("IsRemoved");

                    b.Property<string>("ModifiedBy");

                    b.Property<string>("Name");

                    b.Property<string>("ParentId");

                    b.Property<string>("RemovedBy");

                    b.HasKey("Id");

                    b.HasIndex("ParentId");

                    b.ToTable("Node");
                });

            modelBuilder.Entity("ProjectStart.Entity.NodeEntity", b =>
                {
                    b.HasOne("ProjectStart.Entity.NodeEntity", "ParentNode")
                        .WithMany("SubNodes")
                        .HasForeignKey("ParentId");
                });
#pragma warning restore 612, 618
        }
    }
}