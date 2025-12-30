const flights = JSON.parse(localStorage.getItem("flights")) || [];


flights.forEach(flight => {
  const row = table.insertRow();
  row.innerHTML = `
    <td>${flight.id}</td>
    <td>${flight.aircraft}</td>
    <td>${flight.route}</td>
    <td>${flight.status}</td>
  `;
});
