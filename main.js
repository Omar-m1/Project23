// التحقق من صحة نموذج تسجيل الدخول
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('الرجاء ملء جميع الحقول');
    } else {
        alert('تم تسجيل الدخول بنجاح!');
        // هنا يمكنك إضافة التوجيه إلى صفحة أخرى
    }
});
