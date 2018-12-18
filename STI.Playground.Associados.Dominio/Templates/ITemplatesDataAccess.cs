using System;
using System.Collections.Generic;
using System.Text;

namespace STI.Playground.Associados.Dominio.Templates
{
    public interface ITemplatesDataAccess
    {
        IEnumerable<PropriedadeDoTemplate> Recuperar();
      
    }
}
