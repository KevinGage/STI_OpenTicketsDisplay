using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;

using System.Data.SqlClient;
using System.Collections;

namespace TicketsWcfJson
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "TicketsService" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select TicketsService.svc or TicketsService.svc.cs at the Solution Explorer and start debugging.


    //uncomment for verbose error messages to help debugging.  don't set to true for production!!!!
    //[System.ServiceModel.ServiceBehavior(IncludeExceptionDetailInFaults = true)] 
    public class TicketsService : ITicketsService
    {
        public List<Ticket> GetOpenTickets()
        {
            List<Ticket> tickets = new List<Ticket>();

            System.Configuration.Configuration rootWebConfig = System.Web.Configuration.WebConfigurationManager.OpenWebConfiguration("/TicketsWcf");
            System.Configuration.ConnectionStringSettings connString = rootWebConfig.ConnectionStrings.ConnectionStrings["TicketsConnection"];
            using (SqlConnection conn = new SqlConnection(connString.ConnectionString))
            {              
                conn.Open();
                SqlCommand cmd = new SqlCommand("SELECT TicketNum, AssignTech, OpenDate, Description, Notes, HoursWorked, EmailAddresses, ClientName from View_Open_Tickets", conn);
                SqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    Ticket t = new Ticket();
                    t.TicketNumber = reader["TicketNum"].ToString();
                    t.AssignTech = reader["AssignTech"].ToString();
                    t.OpenDate = reader["OpenDate"].ToString();
                    t.Description = reader["Description"].ToString();
                    t.Notes = reader["Notes"].ToString();
                    t.HoursWorked = reader["HoursWorked"].ToString();
                    t.EmailAddresses = reader["EmailAddresses"].ToString();
                    t.ClientName = reader["ClientName"].ToString();

                    tickets.Add(t);
                }
            }
            return tickets;
        }
    }
}
