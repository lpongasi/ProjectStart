using Microsoft.Extensions.DependencyInjection;
using ProjectStart.Entity;

namespace ProjectStart.Repository
{
    public class Service
    {
        public static void Inject(IServiceCollection services)
        {
            services.AddTransient<IBaseRepository<ApplicationUser>, BaseRepository<ApplicationUser, ApplicationDbContext>>();
            services.AddTransient<AccountRepository>();
            services.AddTransient<IUnitOfWork, UnitOfWork>();
        }
    }
}
