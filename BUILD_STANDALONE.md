# بناء نسخة Standalone لـ Rawaa ERP

## الطريقة السريعة لكل عميل:

### 1. المتطلبات (مرة واحدة فقط):
- Node.js LTS من https://nodejs.org

### 2. إنشاء النسخة:

```bash
# في الـ Command Prompt أو PowerShell
cd C:\Users\SAID\Downloads\ArabicNeumorphicPOS

# تثبيت المكتبات
npm install

# بناء التطبيق
npm run build

# إنشاء Standalone Executable
npm install -g pkg
pkg . --targets win-x64 --output "Rawaa-ERP.exe"
```

### 3. للعميل:
- إعطِه الملف `Rawaa-ERP.exe` فقط
- يضغط عليه مرتين
- يفتح المتصفح على: http://localhost:5000
- Username: admin
- Password: admin123

---

## أو البديل - استخدم RawaaERP.bat:

1. ضع `standalone-app.js` و `RawaaERP.bat` معاً
2. اضغط على `RawaaERP.bat`
3. هيشتغل التطبيق تلقائياً

---

## الخيار الأسهل - في Replit مباشرة:

التطبيق يعمل الآن على:
https://replit.com/@yourname/ArabicNeumorphicPOS

أعطِ العميل الرابط!
