///describe("API - Autenticação", () => {

 // it("Deve autenticar com sucesso", () => {
   // cy.request({
     // method: "POST",
    //  url: "https://reqres.in/api/login",
   //   failOnStatusCode: false,
   //   body: {
      //  email: "eve.holt@reqres.in",
      //  password: "cityslicka"
     // }
   // }).then((response) => {
     // cy.log(response.status)
      //cy.log(JSON.stringify(response.body))
   // });
 // });

//});


describe("API - Health Check", () => {

  it("Deve retornar 200 do SauceDemo", () => {
    cy.request("https://www.saucedemo.com")
      .its("status")
      .should("eq", 200);
  });

});