function stampaOgniSecondo(messaggio) {
  const intervalId = setInterval(() => {
    console.log(messaggio);
  }, 1000);

  // Interrompi dopo 5 secondi
  setTimeout(() => {
    clearInterval(intervalId);
    console.log("Intervallo interrotto");
  }, 5000);
}

// Chiamo la funzione
stampaOgniSecondo("Ciao Boolean!");
