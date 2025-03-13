function creaTimer(t) {
  return function () {
    setTimeout(() => {
      console.log("Tempo scaduto!");
    }, t);
  };
}

const time = creaTimer(3000);
time();
