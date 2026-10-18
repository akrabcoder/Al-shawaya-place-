// 1. تفعيل التابات (المنيو)
document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll('.tab-btn');
    const grids = document.querySelectorAll('.menu-grid');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            grids.forEach(g => g.classList.remove('active'));
            tab.classList.add('active');
            const targetId = tab.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });
});

// 2. كود تغيير اللغة (عربي <-> إنجليزي)
let currentLang = 'ar'; // اللغة الافتراضية

function toggleLanguage() {
    const htmlRoot = document.getElementById('html-root');
    const langBtn = document.getElementById('lang-toggle');
    const pageTitle = document.getElementById('page-title');
    
    // نجيب كل العناصر اللي فيها داتا عربي وإنجليزي
    const elementsToTranslate = document.querySelectorAll('[data-ar]');

    if (currentLang === 'ar') {
        // التحويل للإنجليزي
        currentLang = 'en';
        htmlRoot.setAttribute('dir', 'ltr'); // تغيير اتجاه الصفحة
        htmlRoot.setAttribute('lang', 'en');
        langBtn.innerText = 'AR'; // الزرار يبقى مكتوب عليه عربي
        pageTitle.innerText = 'Qasr Al-Shawaya | قصر الشواية';
        
        elementsToTranslate.forEach(el => {
            el.innerText = el.getAttribute('data-en');
        });
        
        // تغيير خط الموقع للإنجليزي
        document.body.style.fontFamily = "'Playfair Display', sans-serif";
        
    } else {
        // التحويل للعربي
        currentLang = 'ar';
        htmlRoot.setAttribute('dir', 'rtl');
        htmlRoot.setAttribute('lang', 'ar');
        langBtn.innerText = 'EN';
        pageTitle.innerText = 'قصر الشواية | Qasr Al-Shawaya';
        
        elementsToTranslate.forEach(el => {
            el.innerText = el.getAttribute('data-ar');
        });
        
        // إرجاع الخط العربي
        document.body.style.fontFamily = "'Cairo', sans-serif";
    }
}
