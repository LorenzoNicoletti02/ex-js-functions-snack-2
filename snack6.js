function creaContatoreAutomatico(intervalloTempo) {
  return function () {
    let contatore = 0;
    setInterval(() => {
      contatore++;
      console.log(contatore);
    }, intervalloTempo);
  };
}

const avvioContatore = creaContatoreAutomatico(1000);
avvioContatore();
