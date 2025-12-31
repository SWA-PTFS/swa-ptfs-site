fetch(`${API_URL}/flights`)
  .then(r => r.json())
  .then(flights => {
    const tbody = document.getElementById("flights");
    flights.forEach(f => {
      tbody.innerHTML += `
        <tr>
          <td>${f.flight}</td>
          <td>${f.status}</td>
        </tr>`;
    });
  });
