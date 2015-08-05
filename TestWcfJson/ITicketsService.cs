using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;

using System.ServiceModel.Web;

namespace TicketsWcfJson
{
    [DataContract]
    public class Ticket
    {
        [DataMember]
        public string TicketNumber { get; set; }

        [DataMember]
        public string AssignTech { get; set; }

        [DataMember]
        public string OpenDate { get; set; }

        [DataMember]
        public string Description { get; set; }

        [DataMember]
        public string Notes { get; set; }

        [DataMember]
        public string HoursWorked { get; set; }

        [DataMember]
        public string EmailAddresses { get; set; }

        [DataMember]
        public string ClientName { get; set; }

    }

    [ServiceContract]
    public interface ITicketsService
    {
        [OperationContract]
        [WebGet(UriTemplate = "/GetOpenTickets", ResponseFormat = WebMessageFormat.Json)]
        List<Ticket> GetOpenTickets();
    }
}
