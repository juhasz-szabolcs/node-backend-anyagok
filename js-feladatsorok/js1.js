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


// map — alakíts át minden elemet

// 3. Duplázás
// Készíts új tömböt, amelyben a szamok minden elemének a kétszerese szerepel. Írd ki az új tömböt.
const duplak = szamok.map(szam => szam * 2);
console.log(szamok);
console.log(duplak);


// 4. Csupa nagybetű
// Készíts új tömböt a nevek elemeiből úgy, hogy minden név csupa nagybetűs legyen. Írd ki az új tömböt.
const nagybetusNevek = nevek.map(nev => nev.toUpperCase());
console.log(nagybetusNevek);

// 5. Terméknevek
// Készíts egy tömböt, amely csak a termékek nevét tartalmazza (objektumok helyett szövegeket). Írd ki
const termekNevek = termekek.map(termek => termek.nev);
console.log(termekNevek);

// 6. Árcímkék
// Készíts egy tömböt, amelyben minden termékhez egy szöveg tartozik ebben a formában: Egér – 6990
// Ft. Írd ki a tömböt!
const arCimkek = termekek.map(termek => `${termek.nev} – ${termek.ar} Ft`);
console.log(arCimkek);