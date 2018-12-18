using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using STI.Playground.WebApi.Models;

namespace STI.Playground.WebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class CustomersController : Controller
    {
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var retrieveCustomersTask = RetrieveCustomers();
            var response = await retrieveCustomersTask;
            return Ok(response);
        }
        public async Task<List<Customer>> RetrieveCustomers()
        {
            await Task.Delay(1000);
            return new List<Customer> { new Customer("John Smith", 18), new Customer("Carla Bright", 28), new Customer("Jamil Smoth", 32) };
        }

    }
}