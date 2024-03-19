document.addEventListener("DOMContentLoaded", function() {
    // استرجاع مصفوفة القوائم من ذاكرة التخزين المحلية
    const reservations = JSON.parse(localStorage.getItem("reservations")) || [];

    // عرض القوائم في صفحة base.html
    const detailsContainer = document.getElementById("reservationDetails");
    reservations.forEach(function(reservation, index) {
      const reservationElement = document.createElement("div");
      reservationElement.classList.add("reservation-item");
      reservationElement.innerHTML = `
        <h3>Reservation ${index + 1}</h3>
        <p>Name: ${reservation.name}</p>
        <p>Email: ${reservation.email}</p>
        <p>Date: ${reservation.date}</p>
        <p>Time: ${reservation.time}</p>
        <p>People: ${reservation.people}</p>
      `;
      detailsContainer.appendChild(reservationElement);
    });
  });