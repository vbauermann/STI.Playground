using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace STI.Playground.WebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class ClientsController : Controller
    {
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var retrieveClientTask = RetrieveClient();
            var response = await retrieveClientTask;
            return Ok(response);
        }
        public async Task<string> RetrieveClient()
        {
            await Task.Delay(1000);
            return "STI.Playground";
        }
    }
}