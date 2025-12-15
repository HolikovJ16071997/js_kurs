// // todo 1.Funksiya yasang, ushbu funksiya 2ta argument qabul qilsin va ularning yig’indisini     qaytarib bersin.

// function sum(x, y) {
//   return x + y;
// }
// console.log(sum(3, 2));

// console.log(sum(-3, -6));
// //  sum(-3, -6)
// console.log(sum(7, 3));
// //  sum(7, 3)

// todo 2.Minutlarni butun son sifatida qabul qilib, uni sekundlarga o’girib beradigan funksiya yasang.

// toSekunds(5) ➞ 300

// toSekunds(3) ➞ 180

// toSekunds(2) ➞ 120
// function toSeconds(minutes) {
//   const seconds = 60;
//   return minutes * seconds;
// }

// console.log(toSeconds(5)); // 300
// console.log(toSeconds(3)); // 180
// console.log(toSeconds(2)); // 120

// todo 3.Funksiya butun son qabul qiladi. Funksiya ushbu butun sondan keyingi sonni qaytarsin.

// nextInteger(0) ➞ 1

// nextInteger(9) ➞ 10

// nextInteger(-3) ➞ -2

// function nextInteger(int) {
//   return int + 1;
// }

// console.log(nextInteger(0));
// console.log(nextInteger(9));
// console.log(nextInteger(-3));

// todo 4.Funskiya uchburchakning asosi va balandligini qabul qiladi. Funksiya uchburchakning yuzini hisoblab qaytarsin. Uchburchak yuzini topish formulasi: S = (asos * balandlik) / 2
// uchburchakYuzi(3, 2) ➞ 3

// uchburchakYuzi(7, 4) ➞ 14

// uchburchakYuzi(10, 10) ➞ 50

// function uchburchakYuzi(asos, balandlik) {
//   return (asos * balandlik) / 2;
// }

// console.log(uchburchakYuzi(3, 2));
// console.log(uchburchakYuzi(7, 4));
// console.log(uchburchakYuzi(10, 10));

// TODO 5.Funksiya yoshni yil ko’rinishida qabul qiladi. ushbu funksiya yoshni kunlarda hisoblab natijani qaytarsin. Bir yil 365 kun deb oling.
// ageToDays(65) ➞ 23725

// ageToDays(0) ➞ 0

// ageToDays(20) ➞ 7300
// !function ageToDays(age) {
//   return age * 365;
// }
// console.log(ageToDays(65));
// console.log(ageToDays(0));
// console.log(ageToDays(20));

// todo 6.Quyidagi namunalarga muvofiq ravishda funksiyani tana qismini yozing.
// kub(3) ➞ 27

// kub(5) ➞ 125

// kub(10) ➞ 1000

// function powKub(kub) {
//   let natija = Math.pow(kub, 3);
//   return natija;
// }

// console.log(powKub(3));
// console.log(powKub(5));
// console.log(powKub(10));

// todo 7.Massivni ichidan birinchi elementini qaytaradigan funksiya yasang.

// firstElement([1, 2, 3]) ➞ 1

// firstElement([80, 5, 100]) ➞ 80

// firstElement([-500, 0, 50]) ➞ -500

// function firstElement(arr) {
//   return arr[0];
// }

// console.log(firstElement([1, 2, 3]))
// console.log(firstElement([80, 5, 100]))
// console.log(firstElement([-500, 0, 50]))

// todo 8.Funksiya 2ta argument qabul qilsin. Ushbu funksiya birinchi qiymatning ikkinchi qiymat bilan ko’paytmasini qaytarsin.
// power(230, 10) ➞ 2300

// power(110, 3) ➞ 330

// power(480, 20) ➞ 9600
// !
// function power(x, y) {
//   return x * y;
// }

// console.log(power(230, 10));
// console.log(power(110, 3));
// console.log(power(480, 20));

// todo 9.Soat ko’rinishida qiymat kiritilsa, sekundlarda qaytaradigan funksiya yasang.

// hourToSekunds(2) ➞ 7200

// hourToSekunds(10) ➞ 36000

// hourToSekunds(24) ➞ 86400

// function hourToSekunds(hour) {
//   return hour * 3600;
// }

// console.log(hourToSekunds(2));
// console.log(hourToSekunds(10));
// console.log(hourToSekunds(24));

// todo 10.Uchburchakning uchinchi tomonining eng uzun qiymatini qaytaradigan funksiya yasang.
// ! Formula: Eng uzun uchinchi tomon = (tomon1 + tomon2) - 1

// !function uchinchiTomon(tomon1, tomon2) {
//   return tomon1 + tomon2 - 1;
// }

// console.log(uchinchiTomon(8, 10));
// console.log(uchinchiTomon(5, 7));
// console.log(uchinchiTomon(9, 2));

// todo 11.Ikkita son argument sifatida kiritilsa, ushbu ikkala sonni birinchisini ikkinchisiga bo’lgandagi qoldiqni qaytarib beradigan funksiya yasang.

// !function qoldiq(son1, son2) {
//       return Math.floor(son1%son2)
// }

// console.log(qoldiq(1, 3))
// console.log(qoldiq(3, 4))
// console.log(qoldiq(-9, 45))
// console.log(qoldiq(5, 5))

// 12.Turtburchakning bo’yi va eni berilsa uning yuzini hisoblab qaytaradigan funksiya yasang. Formula S = bo’yi * eni

// function turtburchakYuzi(boyi, eni) {
//   return 2 *(boyi + eni);
// }

// console.log(turtburchakYuzi(6, 7));
// console.log(turtburchakYuzi(20, 10));
// console.log(turtburchakYuzi(2, 9));

// todo 13.Funksiya “a” argument sifatida string ma’lumot qabul qiladi. ushbu funksiya “Something” stringiga " " bo’sh joy va “a” stringini birlashtirib qaytarsin.

// function stringQoshish(a) {
//   return "Something" + " " + a;
// }

// console.log(stringQoshish("is better than nothing"));

// todo 15.Funksiya raqam qabul qiladi. Agar ushbu raqam 0dan kichik yoki teng bo’lsa funksiya rost qaytarsin aks holda yolg’on.

// function noldan(raqam) {
//   if (raqam <= 0) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// noldan(0); // true
// noldan(-5); // true
// noldan(3);

// todo 16.Funksiya ko’p  burchakli shaklning burchaklar sonini qabul qiladi. Natijada funksiya ushbu shaklning ichki burchaklar yig’indisini qaytarsin. Formula (n - 2) x 180
// function ichkiBurchaklar(n) {
//      return (n - 2) * 180
// }
// console.log(ichkiBurchaklar(3))

// todo 17.Basketbol o’yinida ikki ochkolik va uch ochkolik gollar mavjud. Agar funksiya 1-argument sifatida ikki ochkolik gollar sonini va 2-argument sifatida uch ochkolik gollar sonini qabul qilsa, jamoaning jami ochkosini qaytaradigan funksiya yasang.

// function ochkolar(x, y) {
//   return 2 * x + 3 * y;
// }

// console.log(ochkolar(1, 1))

// todo 18.Quyidagi namunalarni kuzatgan holda unga muvofiq funksiya yasang.
// Namuna:
// nameString("Mubashir") ➞ "MubashirEdabit"

// nameString("Matt") ➞ "MattEdabit"

// nameString("javaScript") ➞ "javaScriptEdabit"

// function nameString(a) {
//   return a +"Edabit";
// }

// console.log(nameString("Mubashir"));

// todo 19.Ikkita son kiritilsa, agar ularning yig’indisi 100dan kichkina bo’lsa rost, katta bo’lsa yolg’on qiymat qaytaradigan funksiya yasang.

// kichik100dan(22, 15) ➞ true
// // 22 + 15 = 37

// kichik100dan(83, 34) ➞ false
// // 83 + 34 = 117

// function kichik100dan(x, y) {
//   return x + y < 100;
// }

// console.log(kichik100dan(3, 77))
// todo 20.Quyidagi namunalarni kuzatgan holda unga muvofiq keladigan funksiya yasang.
// Namuna:
// printArray(1) ➞ [1]

// printArray(3) ➞ [1, 2, 3]

// printArray(6) ➞ [1, 2, 3, 4, 5, 6]
function printArray(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr;
}
console.log(printArray(6));

//todo 21.Fermada turli xildagi hayvonlar mavjud. Shunday funksiya yasangki, ushbu funksiya jami fermadagi hayvonlar oyoqlari nechta ekanligini hisoblab qaytarsin. Bunda funksiya birinchi argument sifatida tovuqlar sonini, ikkinchi argument sifatida qo’ylarni va uchinchi argument sifatida sigirlarning sonini qabul qiladi.

// Namuna:
// oyoqlar(2, 3, 5) ➞ 36

// oyoqlar(1, 2, 3) ➞ 22

// oyoqlar(5, 2, 8) ➞ 50
// function oyoqlar(tovuq, qoy, sigir) {
//   return tovuq * 2 + (qoy + sigir) * 4;
// }
// console.log(oyoqlar(2, 3, 5));

// todo 22.Javascriptda “&&” matiqiy operatori mavjud. Ushbu operator ikkita mantiqiy ifoda qabul qiladi. Quyidagi namunaga muvofiq keladigan funskiya yasang. Ushbu operatordan foydalangan holda!
// Namuna:
// and(true, false) ➞ false

// and(true, true) ➞ true

// and(false, true) ➞ false

// and(false, false) ➞ false

// function and(a, b) {
//   return a && b;
// }
// console.log(and(true, false));

// todo 23.Funksiya 2ta son qiymat qabul qiladi. Agar 1-son 2-songa teng bo’lsa rost, aks holda yolg’on qiymat qaytsin. Bunda ikkala qiymatning ma’lumot turi bir xil bo’lsin.

// tengMi(4, 8) ➞ false

// tengMi(2, 2) ➞  true

// tengMi(2, "2") ➞ false
// function tengMi(x, y) {
//   return x === y;
// }
// console.log(tengMi(4, 8))

// todo 24.Futbolda ochkoni hisoblaydigan funksiya yasang. Bunda funksiya yutishlar soni, duranglar soni va mag’lubiyatlar sonini qabul qiladi. 1ta yutish = 3 ochko, 1ta durang = 1 ochko, 1ta mag’lubiyat = 0 ochko hisoblanadi.
// Namuna:
// futbolOchko(3, 4, 2) ➞ 13

// futbolOchko(5, 0, 2) ➞ 15

// futbolOchko(0, 0, 1) ➞ 0

// function futbolOchko(yutishlar, duranglar, maglubiyatlar) {
//   return yutishlar * 3 + duranglar;
// }
// console.log(futbolOchko(3, 4, 2));
// todo 25.Funskiya soatlar va minutlarni argument sifatida qabul qiladi. Ushbu funkisya soatlar va minutlarni sekundga o’girib ularning yig’indisini qaytarsin.
// Namuna:
// sekundlar(1, 3) ➞ 3780

// sekundlar(2, 0) ➞ 7200

// sekundlar(0, 0) ➞ 0
// function sekundlar(soat, minut) {
//   return soat * 3600 + minut * 60;
// }
// console.log(sekundlar(2, 0));

// todo 26.Quyidagi namunalarni kuzatgan holda funksiya yasang.
// Namuna:
// fun(4) ➞ false

// fun(9) ➞ false

// fun(7) ➞ true

function fun(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(fun(4));

//todo  27.Funskiay 2ta istalgan turdagi qiymatlar qabul qiladi. Agar ushbu 2ta qiymat ham qiymat jihatidan ham ma’lumot turi jihatidan teng bo’lsa rost, aks holda funkisya yolg’on qiymat qaytarsin.
// Namuna:
// checkEquality(1, true) ➞ false
// // raqam bilan mantiqiy qiymat => bir-biriga teng emas

// checkEquality(0, "0") ➞ false
// // raqam va string => ma'lumot turlari to'g'ri kelmaydi.

// checkEquality(1,  1) ➞ true
// raqam va raqam => bir-biriga ikkala holatda ham teng
// function checkEquality(x, y) {
//   return x === y;
// }
// console.log(checkEquality(1, true));

// todo 28.Funksiya boolean qiymat qabul qiladi. Ushbu funksiya boolean qiymatni stringga o’girib qaytarib bersin.

// Namuna:
// booleanToString(true) ➞ "true"

// booleanToString(false) ➞ "false"'
// function booleanToString(bool) {
//   return String(bool);
// }
// console.log(booleanToString(true))
// todo  29.Arrow funksiyasini yarating ushbu funksiya shunchaki berilgan qiymatni qaytarsin.
// Namuna:
// arrowFunc(3) ➞ 3

// arrowFunc("3") ➞ "3"

// arrowFunc(true) ➞ true
// const arrowFunc = x => x;
// console.log(true)

// todo 30.Framelar sonini hisoblaydigan funksiya yarating. Frame bu 1 sekundda necha marta ko’rinishlar soni aylanishi. Funksiya minutlar va 1 sekundda nechta framelar soni aylanishini argument sifatida qabul qiladi. Funksiya jami framelar sonini qaytarsin.

// Namuna:
// frameSoni(1, 1) ➞ 60

// frameSoni(10, 1) ➞ 600

// frameSoni(10, 25) ➞ 15000

// function frameSoni(minut, frame) {
//   return minut * 60 * frame;
// }
// console.log(frameSoni(10, 1))

//todo  31.Oddiy matematik amallar ketma-ketligi string ko’rinishida funksiyaga argument sifatida beriladi. Ushbu funksiya matematik ifodani bajarib natijani qaytarsin.
// Namuna:
// calc("23+4") ➞ 27

// calc("45-15") ➞ 30

// calc("13+2-5*2") ➞ 5

// calc("49/7*2-3") ➞ 11
// function calc(str) {
//   return eval(str);
// }
// console.log(calc("45-15"))

// todo 32.Shunday funksiya yasangki, unda 2ta butun son argument qilib beriladi. Agar ushbu sonlardan birontasi 10ga teng bo’lsa yoki ularning yig’indisi 10ga teng bo’lsa funksiya rost qiymat qaytaradi. Aks hold yolg’on.
// teng10(9, 10) ➞ true

// teng10(9, 9) ➞ false

// teng10(1, 9) ➞ true
// function teng10(x, y) {
//   return x === 10 || y === 10 || x + y === 10;
// }

// console.log(teng10(9, 10))
//  todo 33.Mashina kilometriga 10litr benzin ichadi. Mashina doim yo’lga chiqishdan oldin kamida 100litr benzin bilan chiqadi. Agar masofa funksiyaga argument sifatida berilsa, ushbu masofaga chiqish uchun Mashina necha litr benzin bilan chiqishi keraglini funksiya qaytarib bersin.
// Namuna:
// litrMasofa(15) ➞ 150

// litrMasofa(23.5) ➞ 235

// litrMasofa(3) ➞ 100
// function litrMasofa(km) {
//   let kerak = km * 10;
//   return kerak < 100 ? 100 : kerak;
// }
// console.log(litrMasofa(15));

// todo 34.Quyidagi namunaga nazar tashlagan holda funksiya yasang.
// Namuna:
// fun(3, 7) ➞ 7

// fun(-1, 0) ➞ 0

// fun(1000, 400) ➞ 1000
// function fun(a, b) {
//   return a > b ? a : b;
// }
// console.log(fun(3, 7))

// todo 35.Funksiya 2ta argument berilsa, funksiya anashu 2ta argumentdan iborat massiv qaytarsin.

// Namuna:
// arr(1, 2) ➞ [1, 2]

// arr(51, 21) ➞ [51, 21]

// arr(512124, 215) ➞ [512124, 215]

// function fun(a, b) {
//   return a > b ? a : b;
// }
// console.log(arr((51, 21)))

// todo 36.Funksiyaga 2ta argument sifatida string ko’rinishidagi ma’lumotlar beriladi. Agar ushbu ikkala stringdagi belgilar soni bir-birinikiga teng bo’lsa funksiya rost qiymat qaytarsin, aks hold yolg’on.

// Namuna:
// tengStrings("AB", "CD") ➞ true

// tengStrings("ABC", "DE") ➞ false

// tengStrings("hello", "edabit") ➞ false

// function tengStrings(str1, str2) {
//   return str1.length === str2.length;
// }
// console.log(tengStrings("hello", "edabit"))
// todo 37.Shunday funksiya yasangki, unga string argument qilib beriladi, agar ushbu string bo’sh bo’lsa funksiya true qaytaradi, aks holda false.

// Namuna:
// boshStr("") ➞ true

// boshStr(" ") ➞ false

// boshStr("a") ➞ false
// function boshStr(str) {
//   return str === "";
// }
// console.log(boshStr("a"))
// todo 38.Shunday funksiya yasang.Unda butun son argument qilib beriladi. Agar ushbu butun son 5ga bo’linsa, funksiya true qaytarsin, aks holda false.

// Namuna:
// bolinsin5(5) ➞ true

// bolinsin5(-55) ➞ true

// bolinsin5(37) ➞ false
// function bolinsin5(son) {
//   return son % 5 === 0;
// }
// console.log(bolinsin5(5))
// todo 39.Shunday funksiya yasang.Unda butun son argument qilib beriladi. Agar ushbu butun son 100ga bo’linsa, funksiya true qaytarsin, aks holda false.

// Namuna:
// bolinsin100(1) ➞ false

// bolinsin100(1000) ➞ true

// bolinsin100(100) ➞ true
// function bolinsin100(son) {
//   return son % 100 === 0;
// }
// console.log(bolinsin100(1000))
// todo 40.Shunday funksiya yasangki, ushbu funksiya stringni ichida nechta belgi borligini aytsin. Bunda length propertisidan foydalanmang va rekursiv funksiya ishlating.

// Namuna:
// uzunlik("apple") ➞ 5

// uzunlik("make") ➞ 4

// uzunlik("a") ➞ 1

// uzunlik("") ➞ 0

// uzunlik("  ") ➞ 2
// function uzunlik(str) {
//   if (str === "") return 0;
//   return 1 + uzunlik(str.slice(1));
// }
// console.log(uzunlik(""))
// todo 41.Funksiya 2ta argument qabul qiladi. Birinchi argument ikkinchi argumentdan katta emas. Agar birinchi argumentni ikkinchisiga bo’linsa, funksiya true qaytaradi aks holda false

//bolinsin(98, 7) ➞ true
// 98/7 = 14

// bolinsin(85, 4) ➞ false
// 85/4 = 21.25
// function bolinsin(x, y) {
//   return x % y === 0;
// }
// console.log(bolinsin(98, 7))
//  todo 42.Funksiyaga raqam string ko’rinishida berilsa, funksiya ushbu ma’lumotni yana raqam ma’lumot turi ko’rinishida qaytarib bersin.

// Namuna:
// raqam("6") ➞ 6

// raqam("1000") ➞ 1000

// raqam("12") ➞ 12
// function raqam(str) {
//   return Number(str);
// }
// console.log(raqam("6"))
// todo 43.To’rtburchakning yuzini hisoblaydigan funksiya yasang. Bunda funksiyaga to’rtburchakning(ya’ni to’g’ri turtburchak) tomonlari beriladi. Funksiya uning yuzini qaytarishi kerak, agar tomonlar xato kiritilgan bo’lsa funksiya -1 qaytarsin.

// Namuna:
// tortYuzi(3, 4) ➞ 12

// tortYuzi(10, 11) ➞ 110

// tortYuzi(-1, 5) ➞ -1

// tortYuzi(0, 2) ➞ -1
// function tortYuzi(a, b) {
//   if (a <= 0 || b <= 0) return -1;
//   return a * b;
// }
// console.log(tortYuzi(0, 2))
// todo 44.Funksiyaga ism va familiya argument qilib berilsa, funksiya “ism, familiya” formatdagi string qaytarsin.
// Namuna:
// ismFam("First", "Last") ➞ "Last, First"

// ismFam("John", "Doe") ➞ "Doe, John"

// ismFam("Mary", "Jane") ➞ "Jane, Mary"
// function ismFam(ism, familiya) {
//   return familiya + ", " + ism;
// }
// console.log(ismFam("First", "Last"))
//todo  45.Quyidaga namunani kuzatgan holda funksiya yasang.
// Namuna:
// bug(true) ➞ "sad days"

// bug(false) ➞ "it's a good day"
// function bug(bool) {
//   return bool ? "sad days" : "it's a good day";
// }
// console.log(bug(true))
// todo 46.Shunday funksiya yasangki, ushbu funksiya 2ta argument qabul qiladi. Birinchi argument massive, ikkinchi argument ushbu massivni boshidan boshlab nechta elementni tushurib qoldirish. Tushirib qoldirilgandan so’ng funksiya natijani qaytarsin.

// Namuna:
// tushirMassiv([1, 2, 3], 1) ➞ [2, 3]

// tushirMassiv([1, 2, 3], 2) ➞ [3]

// tushirMassiv([1, 2, 3], 5) ➞ []

// tushirMassiv([1, 2, 3], 0) ➞ [1, 2, 3]
// function tushirMassiv(arr, tushirishSoni) {
//   return arr.slice(tushirishSoni);
// }
// console.log(tushirMassiv([1, 2, 3], 5));
// todo 47.Funksiya argument sifatida ovoz berib qo’llab quvvatlashlar soni va ovoz berib qo’llamaganlar sonini qabul qiladi. Funksiya natijani qaytarsin.

// Namuna:
// ovozlar({ upvotes: 13, downvotes: 0 }) ➞ 13

// ovozlar({ upvotes: 2, downvotes: 33 }) ➞ -31

// ovozlar({ upvotes: 132, downvotes: 132 }) ➞ 0
// function ovozlar(obj) {
//   return obj.upvotes - obj.downvotes;
// }
// console.log(ovozlar({ upvotes: 13, downvotes: 0 }));
// todo 48.Funksiya son qabul qilsa, ushbu sonning negativini qaytarsin.

// Namuna:
// negativ(4) ➞ -4

// negativ(15) ➞ -15

// negativ(-4) ➞ -4

// negativ(0) ➞ 0
function negativ(son) {
  return son <= 0 ? son : -son;
}
console.log(negativ(4));
// todo 49.Massivni elementlarini o’rnin almashtiradigan funksiya yasang. Reverse metodi siz ham urinib ko’ring.

// Namuna:
// almash([1, 2, 3, 4]) ➞ [4, 3, 2, 1]

// almash([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]

// almash([]) ➞ []
// function almash(arr) {
//   return arr.reverse();
// }
// console.log(almash([1, 2, 3, 4]))
// todo 50.Kinoteatrga bollar kino ko’rgani kirmoqchi bunda 2ta talab mavjud. Shunda funksiya 2ta argument qabul qiladi. Bolaning yoshini va ota-onasi bilan birgami degan boolean qiymat. Agar bolaning yoshi kamida 15 bo’lsa va ota-onasi bilan birga bo’lsa funksiya true qaytarsin aks holda false.

// Namuna:
// kinogaKirish(14, true) ➞ true

// kinogaKirish(14, false) ➞ false

// kinogaKirish(16, false) ➞ true
// function kinogaKirish(yosh, otaOna) {
//   return yosh >= 15 || otaOna === true;
// }

// console.log(kinogaKirish(14, true))
