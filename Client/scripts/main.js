$( document ).ready(function() {
    $.getJSON( "/TicketsWcf/TicketsService.svc/GetOpenTickets", function (data) {
		$.each (data, function (index, ticketObject) {
			$.each (ticketObject, function (key, val){
				$("#wrapper").append("<p>" + key + " " + val + "</p>");
			}) 
		});
	});
});