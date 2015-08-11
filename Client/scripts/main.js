$( document ).ready(function() {
    $.getJSON( "/TicketsWcf/TicketsService.svc/GetOpenTickets", function (data) {
		$.each (data, function (index, ticketObject) {
			var ticketDiv = document.createElement("div");
			$(ticketDiv).addClass("ticketdiv");
		
			var clientDiv = document.createElement("div");
			$(clientDiv).addClass("clientdiv");

			var clientDivText = document.createElement("span");
			clientDivText.innerHTML = ticketObject.ClientName;
			$(clientDiv).append(clientDivText);
		
			var descriptionDiv = document.createElement("div");
			$(descriptionDiv).addClass("deescriptiondiv");

			var descriptionDivText = document.createElement("span");
			descriptionDivText.innerHTML = ticketObject.Description;
			$(descriptionDiv).append(descriptionDivText);

			var assignDiv = document.createElement("div");
			$(assignDiv).addClass("assigndiv");

			var assignDivText = document.createElement("span");
			assignDivText.innerHTML = ticketObject.AssignTech;
			$(assignDiv).append(assignDivText);

			$(ticketDiv).append(clientDiv);
			$(ticketDiv).append(descriptionDiv);
			$(ticketDiv).append(assignDiv);
			
			$("#wrapper").append(ticketDiv);
			
		});
	});
});