describe("template spec", () => {
  it("Venta viaje redondo con un solo pasajero", function () {
    cy.visit("https://odm.com.mx/gridsistemas.php");
    //TIPOS DE PASAJEROS
    const adu = 1;
    const men = 0;
    const ins = 0;
    const est = 0;
    const pro = 0;
    const asientos = adu + men + ins + est + pro;
    //FECHAS DE VIAJE
    const fechaSalida = "13/12/2024";
    const fechaRegreso = "20/12/2024";
    //ORIGEN Y DESTINO
    const ORI = "MEX";
    const DES = "MTY";
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
    //SELECCIONAR ORIGEN Y DESTINO
    cy.get("#cbx_estado").select(ORI, { force: true });
    cy.get("#cbx_municipio").select(DES, { force: true });
    //SELECCIONAR FECHA DE SALIDA
    cy.get("#fechasalida1").invoke("val", fechaSalida).trigger("change");
    cy.get("#ritema").check();
    //SELECCION DE PASAJEROS
    cy.get("#adultos").select(adu);
    cy.get("#menor").select(men);
    cy.get("#inapam").select(ins);
    cy.get("#estudiantes").select(est);
    cy.get("#profesores").select(pro);
    //SELECCION DE VIAJE REDONDO
    cy.get("#fecharegreso", { timeout: 10000 })
      .invoke("val", fechaRegreso)
      .trigger("change");
    //BUSCAR VIAJE
    cy.get("#idboton").click();
    //SE VALIDA QUE APAREZCAN LAS CORRIDAS DE SALIDA Y SE SELECCIONA LA PRIMER CORRIDA
    cy.get("#u50849-4", { timeout: 15000 })
      .should("be.visible")
      .first()
      .click();
    //PAUSA PARA CARGAR LA PÁGINA
    cy.wait(5000);
    //MODAL CONFIRMA REGRESO
    cy.get(".aceptarBtn").click();
    //SE VALIDA QUE APAREZCAN LAS CORRIDAS DE REGRESO Y SE SELECCIONA LA PRIMER CORRIDA
    cy.get("#u50849-4", { timeout: 15000 })
      .should("be.visible")
      .first()
      .click();
    //PAUSA PARA CARGAR LA PÁGINA
    cy.wait(5000);
    //MODAL CONFIRMA ASIENTOS Y NOMBRE DE PASAJEROS
    cy.get(".aceptarBtn").click();
    //SELECCION DE ASIENTOS DE IDA
    //ADULTOS
    for (let q = 0; q < adu; q++) {
      cy.get("td.piso1.disponible").click({ multiple: true, force: true });
    }
    //NOMBRE DE LOS PASAJEROS
    for (let i = 0; i < asientos; i++) {
      cy.get("input[name=nombre]").eq(i).clear("te");
      cy.get("input[name=nombre]").eq(i).type("test auto");
      // cy.get(':nth-child({i}) > [height="33"] > #datosname').clear("te");
      // cy.get(':nth-child({i}) > [height="33"] > #datosname').type("test auto");
      // cy.get("input[name=nombre]").eq(i).type("a{enter}");
    }
    //PAUSA PARA CARGAR LA PÁGINA
    cy.wait(5000);
    //AVANZAR A LA SELECCION DE ASIENTOS DE REGRESO
    cy.get("#u76080-4").click();

    //FIN
  });
});
