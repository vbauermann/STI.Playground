using Dapper;
using STI.Playground.Associados.Dominio.Templates;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace STI.Playground.Associados.Infra.SqlServer.Templates
{
    public sealed class TemplatesRepositorio : ITemplatesRepositorio
    {
        const string connection = @"Data Source = DRACO-VM\SQLEXPRESS2012_2; Initial Catalog = Society_234_NewPortalAssociados; user ID = sa; Password = STI000";


        public void Atualizar(IEnumerable<PropriedadeDoTemplate> im)
        {
            using (var conexao = new SqlConnection(connection))
            {

                const string sql = @"UPDATE TemplatePortalAssociados SET Valor = @Valor WHERE Nome = @Nome";
                foreach (var propriedade in im)
                {
                    var resultado = conexao
                            .Execute(sql, new { propriedade.Nome, propriedade.Valor });
                }
                return;
            }
        }
    }
}
