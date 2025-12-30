const flights = [
  { id: "SWA101", aircraft: "B737", route: "LAX → DEN", status: "Boarding" },
  { id: "SWA205", aircraft: "A320", route: "DAL → PHX", status: "Enroute" },
  { id: "SWA332", aircraft: "B738", route: "MCO → ATL", status: "Landed" }
];

const table = document.getElementById("flightTable");

flights.forEach(flight => {
  const row = table.insertRow();
  row.innerHTML = `
    <td>${flight.id}</td>
    <td>${flight.aircraft}</td>
    <td>${flight.route}</td>
    <td>${flight.status}</td>
  `;
});
