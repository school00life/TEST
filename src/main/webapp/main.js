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

// استهدف النموذج في صفحة الحجز
const reservationForm = document.getElementById('reservationForm');

// استمع لحدث إرسال النموذج
reservationForm.addEventListener('submit', (event) => {
    event.preventDefault(); // منع إرسال النموذج بطريقة التقليدية
    
    // استخراج القيم من النموذج
    const name = reservationForm.elements['name'].value;
    const email = reservationForm.elements['email'].value;
    const guests = reservationForm.elements['guests'].value;
    const date = reservationForm.elements['date'].value;
    const time = reservationForm.elements['time'].value;
    
    // إنشاء كائن حجز جديد
    const newReservation = {
        name: name,
        email: email,
        guests: guests,
        date: date,
        time: time
    };
    
    // إضافة الحجز الجديد إلى قائمة الحجوزات وتحديث البيانات في LocalStorage
    addReservation(newReservation);
    
    // إعادة توجيه المستخدم إلى صفحة الحجز لعرض تفاصيل الحجز
    window.location.href = 'reservation.html';
});
// اجلب زر "Find Table"
const findTableButton = document.querySelector('button[name="find-table"]');

// استمع لحدث النقر على زر "Find Table"
findTableButton.addEventListener('click', (event) => {
    event.preventDefault(); // منع سلوك الافتراضي للزر

    // إذا تم النقر على الزر، قم بإظهار شعار الحجز
    const reservationConfirmation = document.getElementById('reservationConfirmation');
    reservationConfirmation.classList.remove('hidden');
});
