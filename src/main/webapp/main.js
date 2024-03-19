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


  document.addEventListener("DOMContentLoaded", function() {
    // تحديد النموذج والاستماع لحدث submit
    const form = document.getElementById("reservationForm");
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // منع السلوك الافتراضي للنموذج

      // جمع البيانات من النموذج
      const name = form.querySelector('input[name="name"]').value;
      const email = form.querySelector('input[name="email"]').value;
      const date = form.querySelector('input[name="date"]').value;
      const time = form.querySelector('input[name="time"]').value;
      const people = form.querySelector('input[name="people"]').value;

      // إنشاء القائمة
      const reservationList = {
        name: name,
        email: email,
        date: date,
        time: time,
        people: people
      };

      // إضافة القائمة إلى مصفوفة القوائم
      let reservations = JSON.parse(localStorage.getItem("reservations")) || [];
      reservations.push(reservationList);

      // حفظ مصفوفة القوائم في ذاكرة التخزين المحلية
      localStorage.setItem("reservations", JSON.stringify(reservations));

      // إرسال المستخدم إلى صفحة base.html بعد الانتهاء من الحجز
      window.location.href = "reservation.html";
    });
  });

