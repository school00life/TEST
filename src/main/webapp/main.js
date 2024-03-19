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

  document.getElementById("reservationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var name = document.querySelector("#reservationForm input[name='NAME']").value;
    var email = document.querySelector("#reservationForm input[name='EMAIL']").value;
    var date = document.querySelector("#reservationForm input[name='DATE']").value;
    var time = document.querySelector("#reservationForm input[name='TIME']").value;
    var people = document.querySelector("#reservationForm input[name='PEOPLE']").value;

    // Create reservation object
    var reservation = {
      name: name,
      email: email,
      date: date,
      time: time,
      people: people
    };

    // Store reservation data in localStorage
    localStorage.setItem("reservation", JSON.stringify(reservation));

    // Redirect to base.html
    window.location.href = "reservation.html";
  });

