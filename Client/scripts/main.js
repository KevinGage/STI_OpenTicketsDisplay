$( document ).ready(function() {
    $.getJSON( "/TicketsWcf/TicketsService.svc/GetOpenTickets", function (data) {
		/*
		$.each (data, function (index, ticketObject) {
			$.each (ticketObject, function (key, val){
				$("#wrapper").append("<p>" + key + " " + val + "</p>");
			}) 
		});
		*/
		$.each (data, function (index, ticketObject) {
			var ticketDiv = document.createElement("div");
			$(ticketDiv).addClass("ticketdiv");
			
			var ticketDivText = document.createElement("span");
			ticketDivText.innerHTML = ticketObject.Description;
			$(ticketDiv).append(ticketDivText);
			
			$("#wrapper").append(ticketDiv);
		});
	});
});