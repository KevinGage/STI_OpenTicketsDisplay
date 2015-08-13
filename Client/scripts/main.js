var oldTicketArray = [];
var newTicketArray = [];


$( document ).ready(function() {
    $.getJSON( "/TicketsWcf/TicketsService.svc/GetOpenTickets", function (data) {
		oldTicketArray = data;
		$.each (data, function (index, ticketObject) {
			createDiv(ticketObject)	
		})
		
		$(".ticketdiv").click(function() {
			deleteDiv($(this).data("TicketNumber"));
		});
	});
	
	setInterval(function() {
		$.getJSON( "/TicketsWcf/TicketsService.svc/GetOpenTickets", function (data) {
			newTicketArray = data;
			

			for (var i = 0; i < oldTicketArray.length; i++){
				//check for ticket numbers in new array.  Anything found compare the rest of the ticket info and update div if necissary. anything missing close
				
			}
			
			
			//check for ticket numbers in old array.  Anything missing open
			$.each (newTicketArray, function (indexNew, ticketObjectNew) {
				
				var alreadyExists = false;
				
				$.each (oldTicketArray, function (indexOld, ticketObjectOld) {
					
					if (ticketObjectOld.TicketNumber === ticketObjectNew.TicketNumber){
						alreadyExists = true;
					}
				});
				
				if (!alreadyExists){
					createDiv(ticketObjectNew);
				}
				
			});
			
		});
	}, 30000);
	
	
});

function updateDiv(ticket){
	
}

function deleteDiv(ticketNum){	
	$(".ticketdiv").each(function() {
		if ($(this).data("TicketNumber") === ticketNum){
			$(this).hide( 1000, function(){
				$(this).remove();
			});
			return false;
		}
	});
}

function createDiv(ticket){
	var ticketDiv = document.createElement("div");
	$(ticketDiv).addClass("ticketdiv");
	$(ticketDiv).data(ticket);
	
	var clientDiv = document.createElement("div");
	$(clientDiv).addClass("clientdiv");

	var clientDivText = document.createElement("span");
	clientDivText.innerHTML = ticket.ClientName;
	$(clientDiv).append(clientDivText);

	var descriptionDiv = document.createElement("div");
	$(descriptionDiv).addClass("deescriptiondiv");

	var descriptionDivText = document.createElement("span");
	descriptionDivText.innerHTML = ticket.Description;
	$(descriptionDiv).append(descriptionDivText);

	var assignDiv = document.createElement("div");
	$(assignDiv).addClass("assigndiv");

	var assignDivText = document.createElement("span");
	assignDivText.innerHTML = ticket.AssignTech;
	$(assignDiv).append(assignDivText);

	$(ticketDiv).append(clientDiv);
	$(ticketDiv).append(descriptionDiv);
	$(ticketDiv).append(assignDiv);
	
	$("#wrapper").prepend(ticketDiv);
	$(ticketDiv).hide(0);
	$(ticketDiv).show( 1000 );
}

