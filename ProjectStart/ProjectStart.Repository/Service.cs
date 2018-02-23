using Microsoft.Extensions.DependencyInjection;

namespace ProjectStart.Repository
{
    public class Service
    {
        public static void Inject(IServiceCollection services)
        {
            services.AddTransient<IUnitOfWork, UnitOfWork>();
        }
    }
}
