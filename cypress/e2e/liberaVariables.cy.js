describe("Suite de pruebas", () => {
  //FECHAS DE VIAJE
  let fechaSalidaViaje = "29/01/2025";
  let fechaRegresoViaje = "31/01/2025";
  //ORIGEN Y DESTINO
  let origenViaje = "MEX";
  let destinoViaje = "MTY";
  it("CP1 - 1 pasajero - sencillo", function () {
    let adulto = 1;
    let menor = 0;
    let insen = 0;
    let estudiante = 0;
    let docente = 0;
    let numeroAsientos = adulto + menor + insen + estudiante + docente;
    cy.visit("https://odm.com.mx/gridsistemas.php");

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
    cy.get("#cbx_estado").select(origenViaje, { force: true });
    //Seleccionar el destino
    cy.get("#cbx_municipio").select(destinoViaje, { force: true });
    //Seleccionar la fecha de viaje
    //Modifica el valor de la fecha directamente
    cy.get("#fechasalida1")
      .invoke("val", fechaSalidaViaje) // Cambia a la fecha deseada en formato DD/MM/YYYY
      .trigger("change"); // Dispara un evento para simular que se cambió el valor
    cy.pause();
    //Seleccionamos la cantidad de adulto
    cy.get("#adultos").select(adulto);
    //Seleccionamos la cantidad de menor
    cy.get("#menor").select(menor);
    //Seleccionamos la cantidad de insen
    cy.get("#inapam").select(insen);
    //Seleccionamos la cantidad de estudiante
    cy.get("#estudiantes").select(estudiante);
    //Seleccionamos la cantidad de profesor
    cy.get("#profesores").select(docente);
    //Buscar viaje
    cy.get("#idboton").click();
    //Validamos que aparezcan las corridas
    cy.get("#u50849-4", { timeout: 11000 })
      .should("be.visible")
      .first()
      .click();
    //Modal de confirmación
    cy.get(".aceptarBtn").click();
    //PAUSA PARA CARGAR EL CONTENIDO DE LA PÁGINA
    cy.wait(5000);
    //selección de asientos
    // cy.get("td.piso1.disponible[name=4]").click({ multiple: true }); //Selecciona asientos en específico
    for (let q = 0; q < adulto; q++) {
      cy.get("td.piso1.disponible").first().click({ multiple: true });
    }
    // MENORES
    for (let q = 0; q < menor; q++) {
      cy.get("td.piso1.disponible").first().click({ multiple: true });
    }
    //INSEN
    for (let q = 0; q < insen; q++) {
      cy.get("td.piso1.disponible").first().click({ multiple: true });
    }

    //Asignamos los nombres a los pasajeros
    for (let i = 0; i < numeroAsientos; i++) {
      cy.get("input[name=nombre]").eq(i).clear("te");
      cy.get("input[name=nombre]").eq(i).type("test auto");
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

    //TITULAR DE LA TARJETA
    cy.get("#titularA").clear("te");
    cy.get("#titularA").type("test ");

    //VENCIMIENTO DE LA TARJETA
    cy.get("#vencimientoA").clear("0");
    cy.get("#vencimientoA").type("01/39");

    //CODIGO DE SEGURIDAD
    cy.get("#cvvA").clear("1");
    cy.get("#cvvA").type("123");

    //POLÍTICAS
    cy.get("#checkAviso").check();
    cy.get("#checkTerminos").check();

    //cy.wait(5000);
    //AVANZAR AL PAGO
    cy.get("#btnPagar").click();
    cy.wait(5000);
  });
  it("CP2 - n pasajeros - sencillo", function () {
    let adulto = 1;
    let menor = 1;
    let insen = 1;
    let estudiante = 1;
    let docente = 1;
    let numeroAsientos = adulto + menor + insen + estudiante + docente;
    cy.visit("https://odm.com.mx/gridsistemas.php");

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
    cy.get("#cbx_estado").select(origenViaje, { force: true });
    //Seleccionar el destino
    cy.get("#cbx_municipio").select(destinoViaje, { force: true });
    //Seleccionar la fecha de viaje
    //Modifica el valor de la fecha directamente
    cy.get("#fechasalida1")
      .invoke("val", fechaSalidaViaje) // Cambia a la fecha deseada en formato DD/MM/YYYY
      .trigger("change"); // Dispara un evento para simular que se cambió el valor
    //Seleccionamos la cantidad de adulto
    cy.get("#adultos").select(adulto);
    //Seleccionamos la cantidad de menor
    cy.get("#menor").select(menor);
    //Seleccionamos la cantidad de insen
    cy.get("#inapam").select(insen);
    //Seleccionamos la cantidad de estudiante
    cy.get("#estudiantes").select(estudiante);
    //Seleccionamos la cantidad de profesor
    cy.get("#profesores").select(docente);
    //Buscar viaje
    cy.get("#idboton").click();
    //Validamos que aparezcan las corridas
    cy.get("#u50849-4", { timeout: 11000 })
      .should("be.visible")
      .first()
      .click();
    //Modal de confirmación
    cy.get(".aceptarBtn").click();
    //PAUSA PARA CARGAR EL CONTENIDO DE LA PÁGINA
    cy.wait(5000);
    //selección de asientos
    // cy.get("td.piso1.disponible[name=4]").click({ multiple: true }); //Selecciona asientos en específico
    for (let q = 0; q < adulto; q++) {
      cy.get("td.piso1.disponible").first().click({ multiple: true });
    }
    // MENORES
    for (let q = 0; q < menor; q++) {
      cy.get("td.piso1.disponible").first().click({ multiple: true });
    }
    //INSEN
    for (let q = 0; q < insen; q++) {
      cy.get("td.piso1.disponible").first().click({ multiple: true });
    }

    //Asignamos los nombres a los pasajeros
    for (let i = 0; i < numeroAsientos; i++) {
      cy.get("input[name=nombre]").eq(i).clear("te");
      cy.get("input[name=nombre]").eq(i).type("test auto");
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

    //TITULAR DE LA TARJETA
    cy.get("#titularA").clear("te");
    cy.get("#titularA").type("test ");

    //VENCIMIENTO DE LA TARJETA
    cy.get("#vencimientoA").clear("0");
    cy.get("#vencimientoA").type("01/39");

    //CODIGO DE SEGURIDAD
    cy.get("#cvvA").clear("1");
    cy.get("#cvvA").type("123");

    //POLÍTICAS
    cy.get("#checkAviso").check();
    cy.get("#checkTerminos").check();

    //cy.wait(5000);
    //AVANZAR AL PAGO
    cy.get("#btnPagar").click();
    cy.wait(5000);
  });
  it("CP3 - 1 pasajero - redondo confirmado", function () {
    let adulto = 1;
    let menor = 0;
    let insen = 0;
    let estudiante = 0;
    let docente = 0;
    let numeroAsientos = adulto + menor + insen + estudiante + docente;
    cy.visit("https://odm.com.mx/gridsistemas.php");

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
    cy.get("#cbx_estado").select(origenViaje, { force: true });
    //Seleccionar el destino
    cy.get("#cbx_municipio").select(destinoViaje, { force: true });
    //Seleccionar la fecha de viaje
    //Modifica el valor de la fecha directamente
    cy.get("#fechasalida1")
      .invoke("val", fechaSalidaViaje) // Cambia a la fecha deseada en formato DD/MM/YYYY
      .trigger("change"); // Dispara un evento para simular que se cambió el valor
    cy.get("#ritema").click();
    //Seleccionamos la cantidad de adulto
    cy.get("#adultos").select(adulto);
    //Seleccionamos la cantidad de menor
    cy.get("#menor").select(menor);
    //Seleccionamos la cantidad de insen
    cy.get("#inapam").select(insen);
    //Seleccionamos la cantidad de estudiante
    cy.get("#estudiantes").select(estudiante);
    //Seleccionamos la cantidad de profesor
    cy.get("#profesores").select(docente);
    //SELECCION DE VIAJE REDONDO
    cy.get("#fecharegreso", { timeout: 10000 })
      .invoke("val", fechaRegresoViaje)
      .trigger("change");
    //Buscar viaje
    cy.get("#idboton").click();
    //Validamos que aparezcan las corridas SALIDA

    cy.get("#u50849-4", { timeout: 11000 })
      .should("be.visible")
      .first()
      .click();
    //Modal de confirmación
    cy.get(".aceptarBtn").click();
    //PAUSA PARA CARGAR EL CONTENIDO DE LA PÁGINA
    cy.wait(5000);
    //Validamos que aparezcan las corridas REGRESO
    cy.get("#u50849-4", { timeout: 11000 }).should("be.visible").last().click();
    //Modal de confirmación
    cy.get(".aceptarBtn").click();
    //PAUSA PARA CARGAR EL CONTENIDO DE LA PÁGINA
    cy.wait(5000);
    //selección de asientos de salida
    // cy.get("td.piso1.disponible[name=4]").click({ multiple: true }); //Selecciona asientos en específico
    for (let q = 0; q < adulto; q++) {
      cy.get("td.piso1.disponible")
        .first()
        .click({ multiple: true, force: true });
    }
    // MENORES
    for (let q = 0; q < menor; q++) {
      cy.get("td.piso1.disponible").first().click({ multiple: true });
    }
    //INSEN
    for (let q = 0; q < insen; q++) {
      cy.get("td.piso1.disponible").first().click({ multiple: true });
    }

    //Asignamos los nombres a los pasajeros
    for (let i = 0; i < numeroAsientos; i++) {
      cy.get("input[name=nombre]").eq(i).clear("te");
      cy.get("input[name=nombre]").eq(i).type("test auto");
    }

    //Avanzar a los datos de pago
    cy.get("#u76080-4").click();
    cy.pause();

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

    //TITULAR DE LA TARJETA
    cy.get("#titularA").clear("te");
    cy.get("#titularA").type("test ");

    //VENCIMIENTO DE LA TARJETA
    cy.get("#vencimientoA").clear("0");
    cy.get("#vencimientoA").type("01/39");

    //CODIGO DE SEGURIDAD
    cy.get("#cvvA").clear("1");
    cy.get("#cvvA").type("123");

    //POLÍTICAS
    cy.get("#checkAviso").check();
    cy.get("#checkTerminos").check();

    //cy.wait(5000);
    //AVANZAR AL PAGO
    cy.get("#btnPagar").click();
    cy.wait(5000);
  });
});
