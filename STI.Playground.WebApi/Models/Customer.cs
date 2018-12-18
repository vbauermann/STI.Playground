using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace STI.Playground.WebApi.Models
{
    public sealed class Customer
    {
        public Customer(string nome, int idade)
        {
            Nome = nome;
            Idade = idade;
        }

        public string Nome { get;  }
        public int Idade { get;  }
    }
}
