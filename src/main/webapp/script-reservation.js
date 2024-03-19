
  document.addEventListener('DOMContentLoaded', function() {
    const reservationDetails = document.getElementById('reservationDetails');
    
    // Get reservations from local storage
    const reservations = JSON.parse(localStorage.getItem('reservations')) || [];
    
    // Display reservations
    reservations.forEach(function(reservation) {
      const reservationInfo = document.createElement('div');
      reservationInfo.innerHTML = `
        <p>Name: ${reservation.name}</p>
        <p>Email: ${reservation.email}</p>
        <p>Date: ${reservation.date}</p>
        <p>Time: ${reservation.time}</p>
        <p>Number of People: ${reservation.people}</p>
      `;
      reservationDetails.appendChild(reservationInfo);
    });
  });

