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
          console.log("El arma se encasquillo");
        case 2:
          console.log("La cuerda se rompio");
        case 3:
          console.log("Las pastillas estan caducadas");
          break;
        case 4:
          console.log("Esto no es odjeto o pastel, intenta otra cosa");
        case 5:
          console.log("No hay gasolina en todo el pais es una pena, no te atropellaron.");
        case 6:
          console.log("Justo paso un camion de colchones y te salvaste de milagro, te dejaron en una gasolinera cercana y te dieron una rosquilla");
        case 7:
          console.log("Chebre ahora vete");
          break;
        default:
          console.log("Elige una de las opciones presentadas.");
      }
      break;
    case 2:
      console.log("Buena elección, que tengas un gran día.");
      break;
    case 0:
      console.log("¡Hasta luego! Cuídate.");
      break;
    default:
      console.log("Por favor, lee bien las opciones.");
  }
} while (opc !== 0 && opc !== 2 && opc2 !== 7);
