
  // Retrieve reservation data from localStorage
  var reservationData = localStorage.getItem("reservation");
  if (reservationData) {
    // Parse reservation data
    var reservation = JSON.parse(reservationData);
    
    // Display reservation details
    document.getElementById("reservationDetails").innerHTML = `
      <p>Name: ${reservation.name}</p>
      <p>Email: ${reservation.email}</p>
      <p>Date: ${reservation.date}</p>
      <p>Time: ${reservation.time}</p>
      <p>Number of People: ${reservation.people}</p>
    `;
    
    // Clear reservation data from localStorage after displaying it
    localStorage.removeItem("reservation");
  }
