function eseguiEferma(messaggio, avvio, stop) {
  const intervalId = setInterval(() => {
    console.log(messaggio);
  }, avvio);

  // Interrompi dopo 5 secondi
  setTimeout(() => {
    clearInterval(intervalId);
    console.log("timer stop");
  }, stop);
}

eseguiEferma("start timer", 1000, 5000);
