// استرجاع المستخدمين من التخزين المحلي إذا كانوا موجودين
let users = JSON.parse(localStorage.getItem('users')) || [];

document.querySelector('.sign-in form').addEventListener('submit', function(event) {
    event.preventDefault(); // منع الإرسال الافتراضي للنموذج

    const email = this.querySelector('input[name="email"]').value;
    const password = this.querySelector('input[name="password"]').value;

    // تحقق من معلومات تسجيل الدخول
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        // إذا كانت المعلومات صحيحة، قم بتوجيه المستخدم إلى الصفحة home.html
        window.location.href = 'home.html';
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
