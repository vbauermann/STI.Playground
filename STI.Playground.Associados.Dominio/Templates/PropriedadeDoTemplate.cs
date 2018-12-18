using System;
using System.Collections.Generic;
using System.Text;

namespace STI.Playground.Associados.Dominio.Templates
{
    public sealed class PropriedadeDoTemplate
    {
        public PropriedadeDoTemplate(string descricao, string nome, string valor)
        {
            Descricao = descricao;
            Nome = nome;
            Valor = valor;
        }
        public string Descricao { get; set; }
        public string Nome { get; set; }
        public string Valor { get; set; }
    }
}
