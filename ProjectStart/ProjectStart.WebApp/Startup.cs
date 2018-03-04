using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;
using ProjectStart.WebApp.Services;
using Newtonsoft.Json.Serialization;
using ProjectStart.Repository;
using ProjectStart.Entity;
using Swashbuckle.AspNetCore.Swagger;
using ProjectStart.WebApp.Extensions;
using System.Data;
using System.Data.SqlClient;

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
            services.AddDbContextPool<ApplicationDbContext>((service, options) =>
                options.UseSqlServer(Configuration.GetConnectionString("ProjectStart.Application"),
                sqlOption => sqlOption.MigrationsAssembly("ProjectStart.WebApp")
                ));

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
                    options.SerializerSettings.ContractResolver = AppHelper.JsonSerializerSettings.ContractResolver;
                    options.SerializerSettings.Formatting = AppHelper.JsonSerializerSettings.Formatting;
                    options.SerializerSettings.ReferenceLoopHandling = AppHelper.JsonSerializerSettings.ReferenceLoopHandling;
                    options.SerializerSettings.NullValueHandling = AppHelper.JsonSerializerSettings.NullValueHandling;
                }
            );
            services.AddCors(options =>
            {
                options.AddPolicy("AllowSpecificOrigin",
                    builder =>
                    {
                        builder.WithOrigins("http://localhost:9000");
                    });
            });
            services.AddAntiforgery(options => options.HeaderName = "X-XSRF-Token");

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Info { Title = "My API", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseBrowserLink();
                app.UseDatabaseErrorPage();
                app.UseSwagger();
                app.UseSwaggerUI(c =>
                {
                    c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
                });
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
                //routes.MapRoute(
                //    name: "default",
                //    template: "{controller=Home}/{action=Index}/{id?}"
                //    );
                routes.MapRoute(
                    name: "page",
                    template: "page/{*url}",
                    defaults: new { controller = "Page", action = "Index" }
                    );
                routes.MapSpaFallbackRoute(
                    name: "spa-fallback",
                    defaults: new { controller = "Home", action = "Index" }
                    );
            });
        }
    }
}
