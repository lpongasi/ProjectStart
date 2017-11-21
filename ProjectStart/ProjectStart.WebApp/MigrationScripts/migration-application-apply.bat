echo '[Started] Apply Application Migration'
dotnet ef database update --context ProjectStart.WebApp.Data.ApplicationDbContext
echo '[Done] Apply Application Migration'
