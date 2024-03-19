const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
// استرجاع المستخدمين من التخزين المحلي إذا كانوا موجودين
let users = JSON.parse(localStorage.getItem('users')) || [];

// إضافة حساب المسؤول إلى قائمة المستخدمين
users.push({ name: 'Admin', email: 'admin@admin.com', password: 'admin' });

document.querySelector('.sign-in form').addEventListener('submit', function(event) {
    event.preventDefault(); // منع الإرسال الافتراضي للنموذج

    const email = this.querySelector('input[name="email"]').value;
    const password = this.querySelector('input[name="password"]').value;

    // تحقق من معلومات تسجيل الدخول
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        if (user.email === 'admin@admin.com' && user.password === 'admin') {
            // إذا كان المستخدم مسؤولًا، قم بتوجيهه إلى rese.html
            window.location.href = 'reservation.html';
        } else {
            // إذا كان المستخدم عاديًا، قم بتوجيهه إلى الصفحة home.html
            window.location.href = 'home.html';
        }
    } else {
        // إذا كانت المعلومات غير صحيحة، أظهر رسالة خطأ
        alert('Incorrect email or password. Please try again.');
    }
});

document.querySelector('.sign-up form').addEventListener('submit', function(event) {
    event.preventDefault(); // منع الإرسال الافتراضي للنموذج

    const name = this.querySelector('input[name="nom"]').value;
    const email = this.querySelector('input[name="email"]').value;
    const password = this.querySelector('input[name="password"]').value;

    // إضافة مستخدم جديد إلى القائمة
    users.push({ name, email, password });

    // حفظ المستخدمين في التخزين المحلي
    localStorage.setItem('users', JSON.stringify(users));

    // إعادة توجيه المستخدم إلى صفحة تسجيل الدخول بعد التسجيل الناجح
    window.location.href = 'index.html';
});
