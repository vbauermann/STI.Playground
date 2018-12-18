using System;
using System.Collections.Generic;
using System.Text;

namespace STI.Playground.Associados.Dominio.Templates
{
    public interface ITemplatesRepositorio
    {
        void Atualizar(IEnumerable<PropriedadeDoTemplate> im);
    }
}
