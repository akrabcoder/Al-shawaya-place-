document.addEventListener("DOMContentLoaded", () => {
    // تغيير شكل الهيدر عند النزول (Scroll)
    const header = document.querySelector(".main-header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = "rgba(26, 26, 26, 0.98)";
            header.style.padding = "10px 0";
        } else {
            header.style.backgroundColor = "rgba(26, 26, 26, 0.95)";
            header.style.padding = "15px 0";
        }
    });

    // تتبع ضغطات الأزرار (للتأكد إنها شغالة)
    const whatsappBtn = document.querySelector('.whatsapp-btn');
    const callBtn = document.querySelector('.call-btn');

    if(whatsappBtn) {
        whatsappBtn.addEventListener('click', () => console.log('جاري تحويل العميل للواتساب...'));
    }
    if(callBtn) {
        callBtn.addEventListener('click', () => console.log('جاري تحويل العميل للاتصال...'));
    }
});
