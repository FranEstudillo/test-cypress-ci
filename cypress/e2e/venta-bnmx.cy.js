/* ==== Test Created with Cypress Studio ==== */
it("compra-ok", function () {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit("https://odm.com.mx/gridsistemas.php");

  //PAUSA PARA CARGAR LA PÁGINA
  cy.wait(2000);

  //Seleccionar número y tipo de pasajeros
  const a = 1;
  const m = 0;
  const i = 0;
  const e = 0;
  const p = 0;

  // Ignorar el error de asientosRaw.filter
  cy.on("uncaught:exception", (e) => {
    if (e.message.includes("asientosRaw.filter is not a function")) {
      return false; // Ignorar el error
    }
  });
  //Ignorar el error de postMessage
  cy.on("uncaught:exception", (err) => {
    if (err.message.includes("postMessage")) {
      return false; // Ignora el error
    }
  });

  //Seleccionar el Origen
  cy.get("#cbx_estado").select("MEX", { force: true });
  //Seleccionar el destino
  cy.get("#cbx_municipio").select("AGU", { force: true });

  //Seleccionar la fecha de viaje
  //Modifica el valor de la fecha directamente
  cy.get("#fechasalida1")
    .invoke("val", "26/11/2024") // Cambia a la fecha deseada en formato DD/MM/YYYY
    .trigger("change"); // Dispara un evento para simular que se cambió el valor

  //Seleccionamos la cantidad de adulto
  cy.get("#adultos").select(a);

  //Seleccionamos la cantidad de menor
  cy.get("#menor").select(m);

  //Seleccionamos la cantidad de insen
  cy.get("#inapam").select(i);

  //Seleccionamos la cantidad de estudiante
  cy.get("#estudiantes").select(e);

  //Seleccionamos la cantidad de profesor
  cy.get("#profesores").select(p);

  //PAUSA PARA VALIDAR DATOS
  //cy.wait(10000);

  //Buscar viaje
  cy.get("#idboton").click();

  //Validamos que aparezcan las corridas
  cy.get("#u50849-4", { timeout: 11000 }).should("be.visible").first().click();

  // cy.get(":nth-child(1) > #u50437 > #u50849-4 > p").click();

  //Modal de confirmación
  cy.get(".aceptarBtn").click();

  //PAUSA PARA CARGAR EL CONTENIDO DE LA PÁGINA
  cy.wait(7000);

  //selección de asientos
  // cy.get("td.piso1.disponible[name=4]").click({ multiple: true }); //Selecciona asientos en específico
  for (let q = 0; q < a; q++) {
    cy.get("td.piso1.disponible").first().click({ multiple: true });
  }

  //Asignamos los nombres a los pasajeros
  for (let i = 0; i < a; i++) {
    cy.get("input[name=nombre]").eq(i).clear("te");
    cy.get("input[name=nombre]").eq(i).type("test auto");
    // cy.get(':nth-child({i}) > [height="33"] > #datosname').clear("te");
    // cy.get(':nth-child({i}) > [height="33"] > #datosname').type("test auto");
    // cy.get("input[name=nombre]").eq(i).type("a{enter}");
  }

  //Avanzar a los datos de pago
  cy.get("#u76080-4").click();

  //Validación PASO 3
  cy.get("td").should("contain", "CONFIRMACIÓN DE LA COMPRA");

  cy.get("#u82853-4").type("Test");
  cy.get("#u83090-4").type("Autom");

  cy.get("#u82862-4").type("jestudillo@odm.com.mx");
  cy.get("#u82935-4").type("jestudillo@odm.com.mx");

  cy.get("#widgetu82989_input").check({ force: true });
  cy.get("#widgetu83068_input").check({ force: true });

  cy.get("#u82865-4").click();
});
