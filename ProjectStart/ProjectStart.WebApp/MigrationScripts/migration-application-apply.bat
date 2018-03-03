@echo off
echo '[Started] Apply Application Migration'
dotnet ef database update --context ProjectStart.Entity.ApplicationDbContext
echo '[Done] Apply Application Migration'
@echo on