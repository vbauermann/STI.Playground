using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using STI.Playground.Associados.Aplicacao.Templates;
using STI.Playground.Associados.Dominio.Templates;
using STI.Playground.Associados.Infra.SqlServer.Templates;

namespace STI.Playground.WebApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
            services.AddTransient<ITemplatesDataAccess, TemplatesDataAccess>();
            services.AddTransient<ITemplatesAplicativo, TemplatesAplicativo>();
            services.AddTransient<ITemplatesRepositorio, TemplatesRepositorio>();
        }
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
                app.UseDeveloperExceptionPage();
                app.UseCors(builder => builder
                .AllowAnyOrigin()
                .AllowAnyHeader()
                .AllowAnyMethod()
            );
            app.UseMvc();
        }
    }
}
