# Financial Tracker Application

## Loyihaning maqsadi

Bu loyiha foydalanuvchilarga shaxsiy moliyaviy harajatlarini va daromadlarini kuzatib borishga, turli valyutalarga konvertatsiya qilishga va statistik ma'lumotlarni vizualizatsiya qilishga yordam beradi. Ushbu dastur orqali foydalanuvchi o'z moliyaviy oqimlarini oson boshqarishi mumkin.

## Loyiha xususiyatlari

- **Tranzaksiya qo'shish va boshqarish**: Daromad va xarajatlarni kategoriyalar bo'yicha kiritish, ularni filtrlash va o'chirish imkoniyati.
- **Valyuta konvertori**: Turli valyutalardagi summalarni bazaviy valyutaga o'tkazish.
- **Diagramma vizualizatsiyasi**: Harajat va daromadlar uchun doiraviy diagramma yordamida statistik ma'lumotlarni aks ettirish.
- **Mahalliy ma'lumotlarni saqlash**: Tranzaksiyalar mahalliy xotirada saqlanadi, shunda dastur qayta yuklanganda ma'lumotlar yo'qolmaydi.

## Foydalanilgan texnologiyalar

### Frontend

- **React.js**: Loyiha interfeysini yaratish uchun asosiy kutubxona.
- **Material-UI (MUI)**: Interfeysning komponentlari uchun.
- **Chart.js**: Diagramma va statistik ma'lumotlarni vizualizatsiya qilish uchun.
- **React-Chartjs-2**: Chart.js bilan React integratsiyasi uchun.
- **React Context API**: Holatni boshqarish va ma'lumotlarni komponentlar o'rtasida ulashish uchun.
- **CSS va MUI Styles**: Vizual ko'rinishni boshqarish uchun.

### Mahalliy saqlash

- **LocalStorage**: Tranzaksiyalar ma'lumotlarini brauzerda saqlash uchun.

## Loyiha tuzilmasi

- `src/components`: Asosiy komponentlar (masalan, CurrencyConverter, TransactionForm, TransactionList va PieChart).
- `src/contexts`: Context API yordamida yaratilgan holat boshqaruv fayllari (TransactionContext va CurrencyContext).
- `src/App.js`: Loyihaning asosiy kirish nuqtasi.

## O'rnatish va ishlatish

1. Loyihani yuklab oling:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```
2. Zaruriy kutubxonalarni o'rnating:
   ```bash
    npm install
   ```
3. Loyihani ishga tushiring:

   ```bash
    npm start
   ```

4. Brauzeringizda dasturga kirish uchun quyidagi manzilga o'ting:

```arduino
 http://localhost:3000
```

## Foydalanish bo'yicha ko'rsatmalar

- Tranzaksiyani kiritish uchun "Yangi tranzaksiya qo'shish" formasini to'ldiring va "Qo'shish" tugmasini bosing.
- Diagrammada statistik ma'lumotlarni ko'rish uchun "Statistika" bo'limiga o'ting.
- Valyuta konvertori orqali summalarni boshqa valyutaga o'girish uchun mos valyutani tanlang.

## Kelajakdagi rejalar

- Autentifikatsiya: Foydalanuvchi hisobini qo'shish.
- Bulutli saqlash: Tranzaksiyalarni serverda saqlash.

- Qo'shimcha grafikalar: Yangi diagramma turlari va batafsil statistikalar qo'shish.

## Muallif

Hojiakbar Chinozbekov Loyiha ishlab chiquvchisi
[Aloqaga chiqish](https://t.me/khojiakbar_developer)
[Men haqimda](https://khojiakbar-dev-portfolio.vercel.app/)

# personal-finance-management
