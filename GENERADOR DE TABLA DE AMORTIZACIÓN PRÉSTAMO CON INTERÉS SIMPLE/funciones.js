document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formulario").addEventListener("submit", function (event) {
      event.preventDefault();

      const monto = parseFloat(document.getElementById("monto").value);
      const interesAnual = parseFloat(document.getElementById("interes").value) / 100;
      const numPagos = parseInt(document.getElementById("pagos").value);

      const interesTotal = monto * interesAnual * (numPagos / 12);
      const valorTotal = monto + interesTotal;
      const cuotaMensual = valorTotal / numPagos;
      const interesMensual = interesTotal / numPagos;

      let tabla = document.getElementById("tabla");
      tabla.innerHTML = "";

      for (let mes = 1; mes <= numPagos; mes++) {
        let capital = cuotaMensual - interesMensual;
        let totalAcumulado = cuotaMensual * mes;

        tabla.innerHTML += `
          <tr>
            <td>${mes}</td>
            <td>$${cuotaMensual.toFixed(2)}</td>
            <td>$${valorTotal.toFixed(2)}</td>
            <td>$${capital.toFixed(2)}</td>
            <td>$${interesMensual.toFixed(2)}</td>
            <td>$${totalAcumulado.toFixed(2)}</td>
          </tr>
        `;
      }
    });
  });