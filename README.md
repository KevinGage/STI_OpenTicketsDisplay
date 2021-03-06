# STI_OpenTicketsDisplay
A read only display for the STI tickets program using WCF

This is a multi-part application.  Part 1 is a WCF service to be run on IIS which exposes a JSON representation of open tickets in the STI tickets database.  Part 2 is a web client used to visualize the JSON.

<h3>WCF Service Install Instructions:</h3>
<ol>
<li>Make sure Tickets database is available on the network</li>
<li>Install IIS on an application server</li>
<li>Install the dotnet framework, WCF Services, and HTTP Activation on the application server</li>
<li>Right click a website in IIS and choose to Add Application</li>
<li>Give the application the allias of TicketsWcf and select a physical path on the server</li>
<li>Open the solution with visual studio and build it</li>
<li>Copy the Web.config file and the TicketsService.svc file to the root of the application</li>
<li>Copy TicketsWcfJson.dll file to a subfolder called bin</li>
<li>Edit the Web.config file and correct the connection string to the database</li>
<ul><li>Example: add name="TicketsConnection" connectionString="connection string here" providerName="System.Data.SqlClient"</li></ul>
<li>Visit the page and make sure JSON is displayed.</li>
<ul><li>Example http:/192.168.1.1/ticketswcf/TicketsService.svc/GetOpenTickets</li></ul>
</ol>
