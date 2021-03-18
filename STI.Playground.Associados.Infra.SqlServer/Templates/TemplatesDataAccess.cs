using Dapper;
using STI.Playground.Associados.Dominio.Templates;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;

namespace STI.Playground.Associados.Infra.SqlServer.Templates
{
    public sealed class TemplatesDataAccess : ITemplatesDataAccess
    {
        const string connection = @"Data Source = DRACO-VM\SQLEXPRESS2012_2; Initial Catalog = Society_234_NewPortalAssociados; user ID = sa; Password = STI000";
        public TemplatesDataAccess()
        {
        }

        public IEnumerable<PropriedadeDoTemplate> Recuperar()
        {
            using (var conexao = new SqlConnection(connection))
            {
                const string sql = @"SELECT * FROM TemplatePortalAssociados";
                return conexao
                            .Query<dynamic>(sql)
                            .Select(p => new PropriedadeDoTemplate(p.Descricao, p.Nome, p.Valor));
            }
        }     
    }
}
