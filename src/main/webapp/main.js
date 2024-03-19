const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".order__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".event__content", {
  duration: 1000,
});


  document.addEventListener('DOMContentLoaded', function() {
    const reservationForm = document.getElementById('reservationForm');
    
    reservationForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      
      // Get form inputs
      const name = document.querySelector('input[name="name"]').value;
      const email = document.querySelector('input[name="email"]').value;
      const date = document.querySelector('input[name="date"]').value;
      const time = document.querySelector('input[name="time"]').value;
      const people = document.querySelector('input[name="people"]').value;
      
      // Create reservation object
      const reservation = {
        name: name,
        email: email,
        date: date,
        time: time,
        people: people
      };
      
      // Add reservation to list
      addToReservationList(reservation);
      
      // Reset form
      reservationForm.reset();
    });
    
    function addToReservationList(reservation) {
      // Get existing reservations or initialize empty array
      let reservations = JSON.parse(localStorage.getItem('reservations')) || [];
      
      // Add new reservation to the list
      reservations.push(reservation);
      
      // Save updated list to local storage
      localStorage.setItem('reservations', JSON.stringify(reservations));
    }
  });

