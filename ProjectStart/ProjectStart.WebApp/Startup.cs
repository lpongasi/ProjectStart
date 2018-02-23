using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;
using ProjectStart.WebApp.Data;
using ProjectStart.WebApp.Models;
using ProjectStart.WebApp.Services;
using Newtonsoft.Json.Serialization;
using ProjectStart.Entity;
using ProjectStart.Repository;

namespace ProjectStart.WebApp
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<CommerceDbContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("CommerceDb"),
                    b => b.MigrationsAssembly("ProjectStart.WebApp")));

            services.AddDbContextPool<ApplicationDbContext>((service, options) =>
                options.UseSqlServer(Configuration.GetConnectionString("ApplicationDb")));

            services.AddIdentity<ApplicationUser, IdentityRole>()
                .AddEntityFrameworkStores<ApplicationDbContext>()
                .AddDefaultTokenProviders();

            // Add application services.
            services.AddTransient<IEmailSender, EmailSender>();
            Service.Inject(services);


            /* these are the default values */

            services
                .AddMvc()
            .AddJsonOptions(
                options =>
                {
                    options.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
                    options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
                    options.SerializerSettings.NullValueHandling = NullValueHandling.Ignore;  
                }
            );
            services.AddCors(options =>
            {
                options.AddPolicy("AllowSpecificOrigin",
                    builder => {
                        builder.WithOrigins("http://localhost:9000");
                    });
            });
            services.AddAntiforgery(options => options.HeaderName = "X-XSRF-Token");
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseBrowserLink();
                app.UseDatabaseErrorPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();

            app.UseAuthentication();

            // Shows UseCors with CorsPolicyBuilder.
            app.UseCors("AllowSpecificOrigin");

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");

                routes.MapSpaFallbackRoute(
                    name: "spa-fallback",
                    defaults: new { controller = "Home", action = "Index" });
            });
        }
    }
}
