using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace ProjectStart.WebApp.Migrations.Cms
{
    public partial class Cms_20180308_183233 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "PageData",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    CreatedBy = table.Column<string>(nullable: true),
                    DateCreated = table.Column<DateTime>(nullable: false),
                    DateModified = table.Column<DateTime>(nullable: true),
                    DateRemoved = table.Column<DateTime>(nullable: true),
                    Description = table.Column<string>(nullable: false),
                    IsRemoved = table.Column<bool>(nullable: false),
                    Keywords = table.Column<string>(nullable: false),
                    ModifiedBy = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: false),
                    NameUrl = table.Column<string>(nullable: false),
                    ParentId = table.Column<string>(nullable: true),
                    ParentUrl = table.Column<string>(nullable: false),
                    RemovedBy = table.Column<string>(nullable: true),
                    Title = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PageData", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PageData_PageData_ParentId",
                        column: x => x.ParentId,
                        principalTable: "PageData",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_PageData_ParentId",
                table: "PageData",
                column: "ParentId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PageData");
        }
    }
}
