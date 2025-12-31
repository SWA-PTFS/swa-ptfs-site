document.addEventListener("DOMContentLoaded", loadFlights);

function loadFlights() {
  fetch(`${API_URL}/flights`)
    .then(res => {
      if (!res.ok) throw new Error("API failed");
      return res.json();
    })
    .then(flights => {
      const tbody = document.getElementById("adminFlights");
      tbody.innerHTML = "";

      flights.forEach(f => {
        const row = document.createElement("tr");

        row.innerHTML = `
          <td>${f.flight}</td>
          <td>
            <select id="status-${f.id}">
              ${["On Time","Boarding","Delayed","Departed","Cancelled"]
                .map(s => `<option ${f.status===s?"selected":""}>${s}</option>`)
                .join("")}
            </select>
          </td>
          <td>
            <button onclick="updateFlight(${f.id})">Update</button>
          </td>
        `;

        tbody.appendChild(row);
      });
    })
    .catch(err => {
      console.error(err);
      alert("Admin failed to load flights");
    });
}

function updateFlight(id) {
  const status = document.getElementById(`status-${id}`).value;

  fetch(`${API_URL}/flights/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status })
  })
  .then(res => {
    if (!res.ok) throw new Error("Update failed");
    alert("Flight updated");
  })
  .catch(err => {
    console.error(err);
    alert("Update failed");
  });
}
