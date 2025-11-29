# إنشاء Executable مستقل - Rawaa ERP

## الحل النهائي - ملف exe واحد بدون محتاجات!

### الطريقة الأسهل:

**على جهازك في PowerShell:**

```powershell
cd C:\Users\SAID\Downloads\ArabicNeumorphicPOS
npm install -g pkg
npm run build
pkg . --targets win-x64 --output "Rawaa-ERP.exe"
```

**أو استخدم الملف الذي أعددته:**
```powershell
node build-standalone.js
```

### النتيجة:
✅ ملف واحد: `Rawaa-ERP.exe` (حوالي 150-200 MB)
✅ بدون محتاجات (Node.js غير مطلوب)
✅ اضغط عليه مرتين وخلاص!

### للعميل:
1. أعطِه ملف `Rawaa-ERP.exe` فقط
2. يضغط عليه
3. يفتح المتصفح على `http://localhost:5000`
4. Username: admin, Password: admin123

---

## إذا كان في مشاكل:

جرّب هذا الأمر:
```powershell
npm install -g pkg
cd C:\Users\SAID\Downloads\ArabicNeumorphicPOS
npm run build
pkg dist/index.cjs --targets win-x64 --output Rawaa-ERP.exe
```

الملف سيطلع هنا:
```
C:\Users\SAID\Downloads\ArabicNeumorphicPOS\Rawaa-ERP.exe
```

---

## ملاحظة:
الـ exe أول مرة قد يأخذ وقت لأنه ينسخ جميع الملفات. بعدها يشتغل بسرعة.
