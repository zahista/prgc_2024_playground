

console.log('Ahoj tome!');

let nazev = 'Tome';
var vek = 25;
let pravda = true;

console.log(nazev); // Tome
console.log(vek); // Tome
console.log(pravda); // Tome


let vek2 = 100;


console.log(vek2); // 10
console.log(vek2 + vek); // 10



var nazev2 = 'Ahoj';

console.log(nazev2 + " " + nazev); // Ahoj Tome

const konstanta = 10;

console.log(konstanta); // 10   


var nazev2 = 'Hello';


console.log(nazev2, konstanta); // Hello



// vytvoření funkce bez argumentů - prázdné kulaté závorky
function vypisCislo(cislo) {
   console.log(cislo);
}

function vypisJmeno() {
   console.log('Tome');
}

function nakrajejZeleninu(zelenina) {
   console.log(zelenina);
}


vypisCislo(5); // 10 
vypisCislo(10); // 10 
vypisCislo(100); // 10 
vypisJmeno(); // Tome   

nakrajejZeleninu('mrkev'); // mrkev
nakrajejZeleninu('cibuli'); // mrkev
nakrajejZeleninu('rajčata'); // mrkev


function secti(a, b) {
   console.log(a + b);
}

secti(1, 2); // 3
secti(10, 20); // 30
secti(100, 200); // 300


let pole = [1, 2, 3, 4, 5];
let pole1 = ["?", "máš", "se", "jak", "ahoj"];
let pole2 = ["1", "2", true, "jak", "ahoj"];
let pole3 = ["1", "2", true, "jak", ["ahoj", "nazdar"]];

let osoba = { 
   jmeno: 'Tome', 
   vek: 25, 
   zamestnani: true,
   kolegove: ['Petr', 'Jana', 'Karel'],
   stekej: function (){
      console.log('haf');
   },
   zamestnavatel: {
      holding: {
         nazev: 'PPF Group',
         adresa: 'Praha 1',
         pocetFirem: 10
      },
      nazev: 'Google',
      adresa: 'Praha 1',
      pocetZamestnancu: 100
   } 
};


console.log(osoba.kolegove[1]); 
console.log(osoba.zamestnavatel.holding.nazev);


console.log(osoba.stekej()); // 1

osoba.jmeno = 'Petr';
console.log(osoba.jmeno); // Petr

let button = document.getElementById('btn');

let links = document.getElementsByTagName('a');

console.log(links[2]);










// u formulářů budeme používat hranaté závorky, do kterých vepíšeme
// jméno formuláře a následně prvku
const formular = document.forms['prihlaseni'];

const email = document.forms['prihlaseni']['email'];
const heslo = document.forms['prihlaseni']['heslo'];

console.log(email.value);