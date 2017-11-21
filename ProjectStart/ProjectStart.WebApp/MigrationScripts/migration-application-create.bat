echo '[Started] Create Application Migration'
dotnet ef migrations add Application_%date:~10,4%%date:~4,2%%date:~7,2%%time:~0,2%%time:~3,2%%time:~6,2% --context ProjectStart.WebApp.Data.ApplicationDbContext -o Migrations/Application
echo '[Done] Create Application Migration'