using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace ProjectStart.WebApp.Migrations.Cms
{
    public partial class Cms_20180311_150913 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "HistoryEntity",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    CreatedBy = table.Column<string>(nullable: true),
                    DateCreated = table.Column<DateTime>(nullable: false),
                    DateModified = table.Column<DateTime>(nullable: true),
                    DateRemoved = table.Column<DateTime>(nullable: true),
                    IsRemoved = table.Column<bool>(nullable: false),
                    ModifiedBy = table.Column<string>(nullable: true),
                    RemovedBy = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HistoryEntity", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "PageData",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Description = table.Column<string>(nullable: false),
                    Keywords = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: false),
                    ParentId = table.Column<string>(nullable: true),
                    Title = table.Column<string>(nullable: false),
                    Url = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PageData", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PageData_HistoryEntity_Id",
                        column: x => x.Id,
                        principalTable: "HistoryEntity",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
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

            migrationBuilder.DropTable(
                name: "HistoryEntity");
        }
    }
}
