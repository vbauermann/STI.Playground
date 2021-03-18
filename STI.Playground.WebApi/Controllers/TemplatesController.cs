using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using STI.Playground.Associados.Aplicacao.Templates;
using STI.Playground.Associados.Dominio.Templates;

namespace STI.Playground.WebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/Templates")]
    public class TemplatesController : Controller
    {
        private static ITemplatesDataAccess _templatesDataAccess;
        private static ITemplatesAplicativo _templatesAplicativo;
        public TemplatesController(ITemplatesDataAccess templatesDataAccess, ITemplatesAplicativo templatesAplicativo)
        {
            _templatesDataAccess = templatesDataAccess;
            _templatesAplicativo = templatesAplicativo;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                var propriedades = _templatesDataAccess.Recuperar();
                return Ok(propriedades);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }
        [HttpPut]
        public IActionResult Atualizar([FromBody]IEnumerable<PropriedadeDoTemplate> im)
        {
            try
            {
                _templatesAplicativo.Atualizar(im);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody]TimeZoneTest im)
        {
            var t = im;
            return Ok();
        }

    }

    public class TimeZoneTest
    {
        public DateTime Date { get; set; }
    }
}