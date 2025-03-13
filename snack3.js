const somma = (x, y) => x + y;
const sottrazione = (x, y) => x - y;

const eseguiOperazione = (x, y, operatore) => operatore(x, y);

console.log(eseguiOperazione(5, 4, somma));
console.log(eseguiOperazione(5, 4, sottrazione));
