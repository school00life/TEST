// Retrieve and display reservation details
const displayReservationDetails = () => {
    const reservationData = JSON.parse(localStorage.getItem('reservationData'));
    const reservationDetails = document.getElementById('reservationDetails');

    if (reservationData) {
        const { name, email, guests, date, time } = reservationData;
        reservationDetails.innerHTML = `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Number of Guests:</strong> ${guests}</p>
            <p><strong>Date:</strong> ${date}</p>
            <p><strong>Time:</strong> ${time}</p>
        `;
    } else {
        reservationDetails.innerHTML = '<p>No reservation data found!</p>';
    }
};

// Call the function to display reservation details when the page loads
window.addEventListener('load', displayReservationDetails);

// Function to clear reservation data from localStorage
const clearReservationData = () => {
    localStorage.removeItem('reservationData');
    // Optionally, redirect to another page after clearing reservation data
    window.location.href = 'index.html'; // Change 'index.html' to your home page
};