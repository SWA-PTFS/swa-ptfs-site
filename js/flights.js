const flights = JSON.parse(localStorage.getItem("flights")) || [];
const table = document.getElementById("flightTable");

function getCountdown(timeStr) {
  if (!timeStr) return "-";
  const now = new Date();
  const [hours, minutes] = timeStr.split(":");
  const flightTime = new Date();
  flightTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);

  let diff = flightTime - now;
  if (diff < 0) return "Departed";

  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  return `${h}h ${m}m ${s}s`;
}

function renderFlights() {
  table.innerHTML = `
    <tr>
      <th>Flight</th>
      <th>Aircraft</th>
      <th>Route</th>
      <th>Status</th>
      <th>Scheduled</th>
      <th>Countdown</th>
    </tr>
  `;

  flights.forEach(f => {
    let statusColor = "#fff";
    if(f.status === "Scheduled") statusColor = "#ffb81c";
    else if(f.status === "Boarding") statusColor = "#00b4ff";
    else if(f.status === "Enroute") statusColor = "#1da1f2";
    else if(f.status === "Landed") statusColor = "#aaa";

    const row = table.insertRow();
    row.innerHTML = `
      <td>${f.id}</td>
      <td>${f.aircraft}</td>
      <td>${f.route}</td>
      <td style="color:${statusColor}; font-weight:bold;">${f.status}</td>
      <td>${f.scheduledTime || "-"}</td>
      <td>${getCountdown(f.scheduledTime)}</td>
    `;
  });
}

setInterval(renderFlights, 1000);
renderFlights();
