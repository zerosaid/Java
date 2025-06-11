let opc, opc2;

do {
  opc = parseInt(prompt("Elige una opción:\n1. Suicidarte\n2. Vivir\n0. Salir"));

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
        "7. Explosivos\n" +
        "8. Electrocutarte con un tenedor\n" +
        "9. Ir a la Antártida en pijama\n" +
        "10. Invocar un demonio\n" +
        "11. Retarte a un duelo con un espejo\n" +
        "12. Comer wasabi hasta explotar\n" +
        "13. Meter la cabeza en una pecera con pirañas\n" +
        "14. Contratar a un asesino por MercadoLibre\n" +
        "15. Dormir en una autopista\n" +
        "16. Cortarte con una hoja de papel\n" +
        "17. Meterte a un horno como Hansel y Gretel\n" +
        "18. Escalar un volcán activo en crocs\n" +
        "19. Decirle a tu mamá que el arroz te quedó feo\n" +
        "20. No hacerlo e ir a jugar LoL"
      ));

      switch (opc2) {
        case 1:
          alert("El arma se encasquilló. Parece que no era tu día.");
          break;
        case 2:
          alert("La cuerda se rompió. ¡Calidad Made in China!");
          break;
        case 3:
          alert("Las pastillas estaban caducadas. Solo te dio reflujo.");
          break;
        case 4:
          alert("Eso no es un cuchillo, ¡es una espátula!");
          break;
        case 5:
          alert("No hay gasolina en el país. Nadie te atropelló.");
          break;
        case 6:
          alert("Un camión de colchones te salvó. Te dieron una rosquilla.");
          break;
        case 7:
          alert("Los explosivos eran de utilería. Era una broma de cámara escondida.");
          break;
        case 8:
          alert("Te hiciste un nuevo look con el pelo parado. Electricidad con estilo.");
          break;
        case 9:
          alert("Un pingüino te abrazó. Ahora tienes un nuevo mejor amigo.");
          break;
        case 10:
          alert("El demonio rechazó tu alma. Dice que está en oferta y no quiere más.");
          break;
        case 11:
          alert("Tu reflejo se rindió primero. Ganaste el duelo.");
          break;
        case 12:
          alert("Lloraste tanto con el wasabi que decidiste vivir para contarlo.");
          break;
        case 13:
          alert("Las pirañas son veganas. Te invitaron a una ensalada.");
          break;
        case 14:
          alert("El asesino olvidó su contraseña. Canceló el pedido.");
          break;
        case 15:
          alert("Un policía te tapó con una manta y te dijo que descanses.");
          break;
        case 16:
          alert("Te cortaste... pero con una servilleta. Dolió más tu dignidad.");
          break;
        case 17:
          alert("El horno estaba apagado. Solo te dio calorcito.");
          break;
        case 18:
          alert("El volcán hizo erupción… ¡en fuegos artificiales! Era un festival.");
          break;
        case 19:
          alert("Sobreviviste… pero tu mamá no te hablará en una semana.");
          break;
        case 20:
          alert("Chevere. Ahora vete a jugar LoL. La vida continúa.");
          break;
        default:
          alert("Elige una de las opciones presentadas.");
          break;
      }
      break;

    case 2:
      alert("Buena elección. Que tengas un gran día.");
      break;

    case 0:
      alert("¡Hasta luego! Cuídate.");
      break;

    default:
      alert("Por favor, lee bien las opciones.");
  }

} while (opc !== 0 && opc !== 2 && opc2 !== 20);