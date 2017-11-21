echo '[Started] Apply Commerce Migration'
dotnet ef database update --context ProjectStart.Entity.CommerceDbContext
echo '[Done] Apply Commerce Migration'
