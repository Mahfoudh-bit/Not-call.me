const express = require('express');
const path = require('path');

const app = express();
const port = 3000; // يمكنك تغيير المنفذ إذا لزم الأمر

// تحديد المجلد الذي يحتوي على ملفات الموقع الثابتة (HTML, CSS, JS)
const staticPath = path.join(__dirname);

// استخدام الوسيط لخدمة الملفات الثابتة
app.use(express.static(staticPath));

// تشغيل الخادم
app.listen(port, () => {
  console.log(`الخادم يعمل الآن على http://localhost:${port}`);
  console.log(`يمكنك الوصول إلى الموقع من متصفحك عبر هذا الرابط.`);
});

