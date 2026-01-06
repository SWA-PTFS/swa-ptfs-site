async function update() {
  await fetch(
    "https://swaptfs.sfleishman.workers.dev/admin/update-flight",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.token
      },
      body: JSON.stringify({
        flight: flight.value,
        status: status.value,
        time: time.value
      })
    }
  );
  alert("Updated");
}
