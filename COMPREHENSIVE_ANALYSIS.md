# تحلیل جامع پروژه idpay-checkout

## مقدمه

این سند شامل تحلیل کاملی از پروژه `idpay-checkout` است که یک ماژول Node.js برای یکپارچه‌سازی با درگاه پرداخت IDPay ایران می‌باشد.

---

## 📋 خلاصه پروژه

**نام پروژه:** idpay-checkout  
**نوع:** کتابخانه Node.js/TypeScript  
**مخزن:** https://github.com/hadiazt/idpay-checkout  
**نسخه:** 1.0.1  
**مؤلف:** hadiazt (hadiazari30@gmail.com)  
**مجوز:** MIT License  

---

## 🔍 عملکرد اصلی کد

### هدف کلی
این پکیج یک wrapper ساده و قابل استفاده برای API درگاه پرداخت IDPay فراهم می‌کند. IDPay یکی از معتبرترین درگاه‌های پرداخت ایرانی است و این کتابخانه امکان یکپارچه‌سازی آسان با آن را برای توسعه‌دهندگان Node.js فراهم می‌آورد.

### قابلیت‌های اصلی

#### 1. ایجاد درخواست پرداخت (Create Payment)
- ایجاد لینک پرداخت با جزئیات مشتری
- تنظیمات مبلغ، شناسه سفارش و URL بازگشت
- پشتیبانی از اطلاعات اختیاری مانند نام، ایمیل، و شماره تلفن
- اعتبارسنجی کامل ورودی‌ها با محدودیت‌های طول و نوع

#### 2. تأیید پرداخت (Verify Payment)
- تأیید وضعیت پرداخت‌های انجام شده
- دریافت جزئیات تراکنش شامل مبلغ، تاریخ، و اطلاعات کارت
- پردازش کدهای وضعیت مختلف پرداخت
- ارائه پیام‌های فارسی برای وضعیت‌های مختلف

#### 3. مدیریت خطا و اعتبارسنجی
- اعتبارسنجی جامع ورودی‌ها قبل از ارسال درخواست
- مدیریت خطاهای API با پیام‌های واضح
- پشتیبانی از حالت sandbox برای تست

### جزئیات تکنیکی عملکرد

#### معماری کد
```
src/
├── main.ts                 # نقطه ورود اصلی و factory function
├── client/
│   ├── client.ts          # کلاس اصلی IDPay
│   └── Payment/
│       ├── createPayment.ts    # عملیات ایجاد پرداخت
│       └── verifyPayment.ts    # عملیات تأیید پرداخت
├── functions/
│   ├── axiosHelper.ts     # کمک‌کننده HTTP requests
│   ├── Logger.ts          # سیستم logging
│   └── PropertyValidator.ts    # اعتبارسنجی ورودی‌ها
├── types/
│   ├── CreatePaymentTypes.ts   # تایپ‌های ایجاد پرداخت
│   ├── VerifyPaymentTypes.ts   # تایپ‌های تأیید پرداخت
│   └── AxiosTypes.ts      # تایپ‌های HTTP
└── config.ts              # تنظیمات API
```

#### جریان کار (Workflow)
1. **ایجاد کلاینت:** استفاده از factory function با API key و حالت sandbox
2. **اعتبارسنجی:** بررسی صحت API key و پارامترهای ورودی
3. **آماده‌سازی درخواست:** تبدیل داده‌های ورودی به فرمت API
4. **ارسال درخواست:** استفاده از axios برای ارتباط با IDPay API
5. **پردازش پاسخ:** تبدیل پاسخ API به فرمت قابل استفاده
6. **مدیریت خطا:** پردازش و نمایش خطاهای احتمالی

---

## 💻 فناوری‌ها و مهارت‌های استفاده شده

### زبان‌های برنامه‌نویسی
- **TypeScript (اصلی):** تمام کد اصلی
- **JavaScript:** فایل‌های تست و نمونه

### محیط اجرا
- **Node.js:** محیط اجرای JavaScript server-side

### کتابخانه‌ها و Dependencies

#### Dependencies اصلی (از package.json)
```json
{
  "axios": "^1.6.5"  // کتابخانه HTTP client
}
```

#### DevDependencies (از package.json)
```json
{
  "@types/node": "^20.11.5",    // تایپ‌های Node.js
  "tsc": "^2.0.4",              // TypeScript compiler wrapper
  "typescript": "^5.3.3"        // کامپایلر TypeScript
}
```

### فریم‌ورک‌ها و ابزارهای توسعه

#### TypeScript Configuration
- **Target:** ES2020
- **Module:** CommonJS
- **Module Resolution:** Node
- **Declaration:** True (تولید فایل‌های .d.ts)
- **Output Directory:** ./lib
- **Strict Mode:** Partial (noImplicitAny: true)

#### Package Management
- **NPM:** مدیریت بسته‌ها
- **Yarn:** پشتیبانی از yarn.lock

#### Build System
- **TypeScript Compiler:** کامپایل کد TypeScript به JavaScript
- **CommonJS:** سیستم ماژول برای Node.js

### الگوهای طراحی و معماری

#### Design Patterns
1. **Factory Pattern:** `IDPayClient()` function
2. **Class-based OOP:** استفاده از کلاس‌های TypeScript
3. **Prototype Pattern:** اتصال متدها به prototype
4. **Configuration Pattern:** جداسازی تنظیمات در config.ts
5. **Validation Pattern:** اعتبارسنجی مرکزی ورودی‌ها

#### Architecture Principles
- **Separation of Concerns:** جداسازی منطق‌های مختلف
- **Type Safety:** استفاده کامل از TypeScript types
- **Error Handling:** مدیریت جامع خطاها
- **Modularity:** ساختار ماژولار و قابل نگهداری

### فناوری‌های API و شبکه
- **RESTful API:** ارتباط با IDPay API
- **HTTP POST:** متد درخواست برای عملیات‌ها
- **JSON:** فرمت داده برای ارتباط
- **Headers Management:** مدیریت header های API

### امنیت
- **API Key Authentication:** احراز هویت با کلید API
- **Sandbox Mode:** حالت تست برای توسعه
- **Input Validation:** اعتبارسنجی جامع ورودی‌ها
- **Error Sanitization:** پاک‌سازی خطاها قبل از نمایش

---

## 📅 جدول زمانی پروژه

### تاریخ‌های مهم (از تاریخچه commit ها)

| تاریخ | رویداد | جزئیات |
|-------|--------|---------|
| **30 می 2024** | شروع پروژه | اولین commit واقعی با کد کامل |
| **30 می 2024** | Release نسخه 1.0.1 | انتشار نسخه اول در npm |
| **21 آگوست 2024** | آخرین به‌روزرسانی | commit اخیر (ممکن است تاریخ نادرست باشد) |

### دوره زمانی توسعه
- **تاریخ شروع:** 30 می 2024 (2024-05-30)
- **تاریخ پایان:** آگوست 2024 (تخمینی)
- **مدت زمان توسعه:** حدود 3 ماه
- **وضعیت:** آماده برای production

### تحلیل commit ها
```
9b9bad1 - 2024-05-30: "Update idpay-checkout package version and add API usage documentation"
- شامل تمام فایل‌های اصلی پروژه
- مستندات README
- تنظیمات TypeScript
- تست‌های نمونه

973a150 - 2025-08-21: "Initial plan"
- احتمالاً commit مربوط به برنامه‌ریزی یا بازنگری
- تاریخ ممکن است به دلیل مشکل timezone نادرست باشد
```

---

## 🏗️ ساختار پروژه

### فایل‌های اصلی

#### 📁 Root Directory
- `package.json` - تنظیمات npm و dependencies
- `tsconfig.json` - تنظیمات TypeScript
- `README.md` - مستندات اصلی
- `LICENSE` - مجوز MIT
- `.gitignore` - فایل‌های نادیده گرفته شده در git
- `.npmignore` - فایل‌های نادیده گرفته شده در npm
- `yarn.lock` - قفل نسخه‌های yarn

#### 📁 src/ (کد منبع)
- `main.ts` - نقطه ورود و factory function
- `config.ts` - تنظیمات API و ثابت‌ها
- `client/client.ts` - کلاس اصلی IDPay
- `client/Payment/createPayment.ts` - منطق ایجاد پرداخت
- `client/Payment/verifyPayment.ts` - منطق تأیید پرداخت
- `functions/axiosHelper.ts` - کمک‌کننده HTTP
- `functions/Logger.ts` - سیستم لاگ
- `functions/PropertyValidator.ts` - اعتبارسنجی
- `types/` - تعاریف TypeScript

#### 📁 lib/ (خروجی کامپایل)
- فایل‌های JavaScript کامپایل شده
- فایل‌های declaration (.d.ts)

#### 📁 test/
- `index.js` - نمونه استفاده و تست‌های ساده

### Dependencies Analysis

#### Production Dependencies
```json
{
  "axios": "^1.6.5"
}
```
- **axios:** کتابخانه محبوب HTTP client
- **نسخه:** 1.6.5 (جدید و پایدار)
- **استفاده:** ارسال درخواست‌های HTTP به IDPay API

#### Development Dependencies
```json
{
  "@types/node": "^20.11.5",
  "tsc": "^2.0.4", 
  "typescript": "^5.3.3"
}
```
- **@types/node:** تایپ‌های TypeScript برای Node.js API
- **typescript:** کامپایلر اصلی TypeScript
- **tsc:** wrapper برای TypeScript compiler

---

## 🎯 نتیجه‌گیری

### نقاط قوت پروژه
1. **Type Safety کامل:** استفاده جامع از TypeScript
2. **معماری تمیز:** ساختار ماژولار و منظم
3. **مدیریت خطای جامع:** پردازش خطاها با پیام‌های فارسی
4. **اعتبارسنجی قوی:** بررسی دقیق ورودی‌ها
5. **سادگی استفاده:** API ساده و واضح
6. **پشتیبانی از Sandbox:** امکان تست بدون پرداخت واقعی
7. **مستندات خوب:** README واضح با نمونه‌های کد

### موارد استفاده
- **فروشگاه‌های آنلاین:** یکپارچه‌سازی درگاه پرداخت
- **اپلیکیشن‌های وب:** پردازش پرداخت‌ها
- **سیستم‌های مالی:** مدیریت تراکنش‌ها
- **پلتفرم‌های e-commerce:** درگاه پرداخت

### فناوری‌های کلیدی مورد استفاده
- **TypeScript/JavaScript**
- **Node.js Runtime**
- **Axios HTTP Client**
- **RESTful API Integration**
- **JSON Data Format**
- **CommonJS Modules**
- **NPM Package Management**

این پروژه نمونه‌ای از یک کتابخانه حرفه‌ای و آماده برای production است که استانداردهای مدرن توسعه نرم‌افزار را رعایت می‌کند.