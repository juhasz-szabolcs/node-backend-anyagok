const szamok = [4, 9, 16, 7, 12, 3];
const nevek = ['Anna', 'béla', 'Csilla', 'dávid'];
const termekek = [
  { id: 1, nev: 'Egér', ar: 6990, keszlet: 12, kategoria: 'periféria' },
  { id: 2, nev: 'Billentyűzet', ar: 14990, keszlet: 0, kategoria: 'periféria' },
  { id: 3, nev: 'Monitor', ar: 54990, keszlet: 3, kategoria: 'kijelző' },
  { id: 4, nev: 'HDMI-kábel', ar: 1990, keszlet: 40, kategoria: 'kábel' },
  { id: 5, nev: 'Webkamera', ar: 12990, keszlet: 0, kategoria: 'periféria' },
  { id: 6, nev: 'USB-C kábel', ar: 2490, keszlet: 25, kategoria: 'kábel' }
];


// filter — válogasd ki, ami megfelel

// 7. Tíznél nagyobbak
// Válogasd ki a szamok tömbből a 10-nél nagyobb számokat egy új tömbbe, és írd ki.
const tiznelNagyobbak = szamok.filter(szam => szam > 10);
console.log(tiznelNagyobbak);

// 8. Páros számok
// Válogasd ki a szamok tömbből a páros számokat egy új tömbbe, és írd ki.
const parosSzamok = szamok.filter(szam => szam % 2 == 0)
console.log(parosSzamok)

// 9. Kifogyott termékek
// Válogasd ki azokat a termékeket, amelyekből nincs készleten (a készlet 0). Írd ki, hány ilyen termék van,
// majd magát a tömböt is.
const keszletenTermekek = termekek.filter(termekek => termekek.keszlet > 0)
console.log(keszletenTermekek)


// find és findIndex — keresd meg az elsőt
// A tomb.find(fn) az első olyan elemet adja vissza, amelyre a függvény igazat ad — magát az elemet, nem
// tömböt.  Ha  nincs  ilyen,  az  eredmény  undefined.  A  tomb.findIndex(fn)  ugyanígy  keres,  de  az  elem
// indexét adja vissza, és ha nincs találat, -1-et.

// 10. Az első nagy szám
// Keresd meg a szamok tömbben az első 10-nél nagyobb számot, és írd ki.

// 11. Termék azonosító alapján
// Keresd meg azt a terméket, amelynek az id-je 3, és írd ki az objektumot. Utána keresd meg ugyanígy a
// 99-es id-jű terméket is, és írd ki, mit kaptál.

// 12. Hányadik helyen van?
// Írd  ki,  hányadik  indexen  áll  a  termekek  tömbben  a  Webkamera  nevű  termék.  Utána  írd  ki  ugyanezt  a
// Nyomtató nevű termékre is.