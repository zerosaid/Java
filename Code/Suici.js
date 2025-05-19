let opc, opc2;

do {
  opc = parseInt(prompt("Elige una opción:\n1. Suicidarte\n2. Vivir.\n0. Salir"));

  switch (opc) {
    case 1:
      opc2 = parseInt(prompt(
        "¿Qué alternativa estás considerando?\n" +
        "1. Pistola\n" +
        "2. Cuerda\n" +
        "3. Pastillas\n" +
        "4. Cuchillo\n" +
        "5. Atropellado\n" +
        "6. Saltar de un barranco\n" +
        "7. No hacer lo e ir a jugar lol"
      ));

      switch (opc2) {
        case 1:
          alert("El arma se encasquillo");
        case 2:
          alert("La cuerda se rompio");
        case 3:
          alert("Las pastillas estan caducadas");
          break;
        case 4:
          alert("Esto no es odjeto o pastel, intenta otra cosa");
        case 5:
          alert("No hay gasolina en todo el pais es una pena, no te atropellaron.");
        case 6:
          alert("Justo paso un camion de colchones y te salvaste de milagro, te dejaron en una gasolinera cercana y te dieron una rosquilla");
        case 7:
          alert("Chebre ahora vete");
          break;
        default:
          alert("Elige una de las opciones presentadas.");
      }
      break;
    case 2:
      alert("Buena elección, que tengas un gran día.");
      break;
    case 0:
      alert("¡Hasta luego! Cuídate.");
      break;
    default:
      alert("Por favor, lee bien las opciones.");
  }
} while (opc !== 0 && opc !== 2 && opc2 !== 7);
