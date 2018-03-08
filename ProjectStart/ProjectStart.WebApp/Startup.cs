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
using System;
using Microsoft.AspNetCore.Authentication.Cookies;

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
            services.AddDbContext<CmsDbContext>((service, options) =>
                options.UseSqlServer(Configuration.GetConnectionString("ProjectStart.Cms"),
                sqlOption => sqlOption.MigrationsAssembly("ProjectStart.WebApp")
                ));

            services.AddDbContextPool<ApplicationDbContext>((service, options) =>
                options.UseSqlServer(Configuration.GetConnectionString("ProjectStart.Application"),
                sqlOption => sqlOption.MigrationsAssembly("ProjectStart.WebApp")
                ));

            services.AddIdentity<ApplicationUser, IdentityRole>(options =>
            {

                // Password settings
                options.Password.RequireDigit = true;
                options.Password.RequiredLength = 8;
                options.Password.RequiredUniqueChars = 2;
                options.Password.RequireLowercase = true;
                options.Password.RequireNonAlphanumeric = true;
                options.Password.RequireUppercase = true;
                // Lockout settings
                options.Lockout.AllowedForNewUsers = true;
                options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(5);
                options.Lockout.MaxFailedAccessAttempts = 5;
                // Signin settings
                options.SignIn.RequireConfirmedEmail = true;
                options.SignIn.RequireConfirmedPhoneNumber = false;
                // User settings
                options.User.RequireUniqueEmail = true;


            })
                .AddEntityFrameworkStores<ApplicationDbContext>()
                .AddDefaultTokenProviders();
            services.AddAuthorization(options =>
            {
                options.AddPolicy("WebAdmins", policy =>
                policy.RequireRole("Admin", "Administrator", "WebAdmin", "CmsAdmin", "PowerUser", "BackupAdministrator"));
            });
            //services.ConfigureApplicationCookie(options =>
            //{
            //    options.Cookie.Name = "ProjectStart";
            //    options.Cookie.HttpOnly = true;
            //    options.ExpireTimeSpan = TimeSpan.FromMinutes(60);
            //    options.LoginPath = "/Account/Login";
            //    options.LogoutPath = "/Account/Logout";
            //    options.AccessDeniedPath = "/Account/AccessDenied";
            //    // ReturnUrlParameter requires `using Microsoft.AspNetCore.Authentication.Cookies;`
            //    options.ReturnUrlParameter = CookieAuthenticationDefaults.ReturnUrlParameter;
            //    options.SlidingExpiration = true;
            //});

            // Add application services.
            services.AddTransient<IEmailSender, EmailSender>();
            Service.Inject(services);





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

                // Shows UseCors with CorsPolicyBuilder.
                app.UseCors("AllowSpecificOrigin");
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();

            app.UseAuthentication();


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
