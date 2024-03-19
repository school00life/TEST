// Retrieve and display reservation details
const displayReservationDetails = () => {
    const reservations = JSON.parse(localStorage.getItem('reservations')) || [];
    const reservationDetails = document.getElementById('reservationDetails');
    
    if (reservations.length > 0) {
        let reservationHTML = '<h3>All Reservations:</h3>';
        reservations.forEach((reservation, index) => {
            reservationHTML += `
                <div class="reservation">
                    <p><strong>Reservation ${index + 1}:</strong></p>
                    <p><strong>Name:</strong> ${reservation.name}</p>
                    <p><strong>Email:</strong> ${reservation.email}</p>
                    <p><strong>Number of Guests:</strong> ${reservation.guests}</p>
                    <p><strong>Date:</strong> ${reservation.date}</p>
                    <p><strong>Time:</strong> ${reservation.time}</p>
                </div>
            `;
        });
        reservationDetails.innerHTML = reservationHTML;
    } else {
        reservationDetails.innerHTML = '<p>No reservations found!</p>';
    }
};

// Call the function to display reservation details when the page loads
window.addEventListener('load', displayReservationDetails);

// Function to add a new reservation to localStorage
const addReservation = (reservation) => {
    const reservations = JSON.parse(localStorage.getItem('reservations')) || [];
    reservations.push(reservation);
    localStorage.setItem('reservations', JSON.stringify(reservations));
};
