fetch(`${API_URL}/flights`)
  .then(r => r.json())
  .then(flights => {
    const tbody = document.getElementById("adminFlights");

    flights.forEach(f => {
      tbody.innerHTML += `
        <tr>
          <td>${f.flight}</td>
          <td>
            <select id="status-${f.id}">
              <option ${f.status==="On Time"?"selected":""}>On Time</option>
              <option ${f.status==="Delayed"?"selected":""}>Delayed</option>
              <option ${f.status==="Boarding"?"selected":""}>Boarding</option>
              <option ${f.status==="Departed"?"selected":""}>Departed</option>
              <option ${f.status==="Cancelled"?"selected":""}>Cancelled</option>
            </select>
          </td>
          <td>
            <button onclick="updateFlight(${f.id})">Update</button>
          </td>
        </tr>`;
    });
  });

function updateFlight(id) {
  const status = document.getElementById(`status-${id}`).value;

  fetch(`${API_URL}/flights/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status })
  }).then(() => alert("Flight updated"));
}
