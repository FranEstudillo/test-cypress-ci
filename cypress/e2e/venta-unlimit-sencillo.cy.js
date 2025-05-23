/* ==== Test Created with Cypress Studio ==== */
it.only("compra-ok", function () {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit("https://odm.com.mx/gridsistemas.php");

  //PAUSA PARA CARGAR LA PÁGINA
  //cy.wait(2000);

  //Seleccionar número y tipo de pasajeros
  const a = 2;
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
    .invoke("val", "16/04/2025") // Cambia a la fecha deseada en formato DD/MM/YYYY
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
  cy.get("#u50849-4", { timeout: 15000 }).should("be.visible").first().click();

  // cy.get(":nth-child(1) > #u50437 > #u50849-4 > p").click();

  //Modal de confirmación
  cy.get(".aceptarBtn").click();

  //PAUSA PARA CARGAR EL CONTENIDO DE LA PÁGINA
  cy.wait(5000);

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

  //Establecer datos de pago
  //CORREO
  cy.get("#emailA").clear("je");
  cy.get("#emailA").type("jestudillo@odm.com.mx");
  cy.get("#emailB").clear("je");
  cy.get("#emailB").type("jestudillo@odm.com.mx");

  //TELEFONO
  cy.get("#telefonoA").clear("5");
  cy.get("#telefonoA").type("55 4477 8899");
  cy.get("#telefonoB").clear("5");
  cy.get("#telefonoB").type("55 4477 8899");

  //NUMERO DE TARJETA
  cy.get("#tarjetaA").clear("5");
  cy.get("#tarjetaA").type("4000 0000 0000 0051");

  //PAUSA PARA CARGAR LAS PROMOCIONES BANCARIAS
  cy.wait(5000);

  //TITULAR DE LA TARJETA
  cy.get("#titularA").clear("te");
  cy.get("#titularA").type("test ");

  //VENCIMIENTO DE LA TARJETA
  cy.get("#vencimientoA").clear("0");
  cy.get("#vencimientoA").type("01/39");

  //CODIGO DE SEGURIDAD
  cy.get("#cvvA").clear("1");
  cy.get("#cvvA").type("123");

  //PROMOCIONES

  //POLÍTICAS
  cy.get("#checkAviso").check();
  cy.get("#checkTerminos").check();

  //cy.wait(5000);
  //AVANZAR AL PAGO
  cy.get("#btnPagar").click();
  //cy.wait(10000);

  //EMULAR PAGO CORRECTO O FALLIDO
  //Fallido
  // cy.get("#failureButton").click();
  /* ==== End Cypress Studio ==== */
});
it("compra-ok", function () {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit("https://odm.com.mx/gridsistemas.php");

  //PAUSA PARA CARGAR LA PÁGINA
  //cy.wait(2000);

  //Seleccionar número y tipo de pasajeros
  const a = 2;
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
    .invoke("val", "15/12/2024") // Cambia a la fecha deseada en formato DD/MM/YYYY
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
  cy.wait(5000);

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

  //Establecer datos de pago
  //CORREO
  cy.get("#emailA").clear("je");
  cy.get("#emailA").type("jestudillo@odm.com.mx");
  cy.get("#emailB").clear("je");
  cy.get("#emailB").type("jestudillo@odm.com.mx");

  //TELEFONO
  //cy.get("#telefonoA").clear("5");
  //cy.get("#telefonoA").type("55 4477 8899");
  //cy.get("#telefonoB").clear("5");
  //cy.get("#telefonoB").type("55 4477 8899");

  //NUMERO DE TARJETA
  cy.get("#tarjetaA").clear("5");
  cy.get("#tarjetaA").type("4000 0000 0000 0051");

  //PAUSA PARA CARGAR LAS PROMOCIONES BANCARIAS
  //cy.wait(10000);

  //TITULAR DE LA TARJETA
  cy.get("#titularA").clear("te");
  cy.get("#titularA").type("test ");

  //VENCIMIENTO DE LA TARJETA
  cy.get("#vencimientoA").clear("0");
  cy.get("#vencimientoA").type("01/39");

  //CODIGO DE SEGURIDAD
  cy.get("#cvvA").clear("1");
  cy.get("#cvvA").type("123");

  //PROMOCIONES

  //POLÍTICAS
  cy.get("#checkAviso").check();
  cy.get("#checkTerminos").check();

  //cy.wait(5000);
  //AVANZAR AL PAGO
  cy.get("#btnPagar").click();
  cy.wait(5000);

  //EMULAR PAGO CORRECTO O FALLIDO
  //Fallido
  // cy.get("#failureButton").click();
  /* ==== End Cypress Studio ==== */
});
