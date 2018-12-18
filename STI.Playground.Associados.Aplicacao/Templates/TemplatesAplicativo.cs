using STI.Playground.Associados.Dominio.Templates;
using System;
using System.Collections.Generic;
using System.IO;

namespace STI.Playground.Associados.Aplicacao.Templates
{
    public interface ITemplatesAplicativo
    {
        void Atualizar(IEnumerable<PropriedadeDoTemplate> im);
    }
    public sealed class TemplatesAplicativo : ITemplatesAplicativo
    {
        private readonly ITemplatesRepositorio _templatesRepositorio;
        public TemplatesAplicativo(ITemplatesRepositorio templatesRepositorio)
        {
            _templatesRepositorio = templatesRepositorio;
        }

        public void Atualizar(IEnumerable<PropriedadeDoTemplate> im)
        {

            string fileContents;
            using (StreamReader reader = new StreamReader(new FileStream(@"D:\STI\STI.PortalAssociados.Playground\STI.Playground\TemplateCliente.txt", FileMode.Open, FileAccess.Read, FileShare.Read)))
                fileContents = reader.ReadToEnd();

            foreach (var propriedade in im)
                fileContents = fileContents.Replace(propriedade.Nome, propriedade.Valor);


            using (StreamWriter outputFile = new StreamWriter(@"D:\STI\STI.PortalAssociados.Playground\STI.Playground\STI.Playground.WebUI\wwwroot\TemplateCliente.css"))
                outputFile.Write(fileContents);

            _templatesRepositorio.Atualizar(im);
        }
    }
}
