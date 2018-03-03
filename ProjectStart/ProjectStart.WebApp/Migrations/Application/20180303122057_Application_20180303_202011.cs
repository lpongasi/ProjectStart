using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace ProjectStart.WebApp.Migrations.Application
{
    public partial class Application_20180303_202011 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "keywords",
                schema: "Cms",
                table: "PageData",
                newName: "Keywords");

            migrationBuilder.RenameColumn(
                name: "FullNameUrl",
                schema: "Cms",
                table: "PageData",
                newName: "ParentUrl");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Keywords",
                schema: "Cms",
                table: "PageData",
                newName: "keywords");

            migrationBuilder.RenameColumn(
                name: "ParentUrl",
                schema: "Cms",
                table: "PageData",
                newName: "FullNameUrl");
        }
    }
}
