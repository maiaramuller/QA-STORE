describe("Adicionar cupom FRETEGRATIS e verificar valores", () => {
  it("Deve adicionar o cupom e não cobrar o valor do frete, mantendo o valor 'subtotal' e 'total' iguais.", () => {
    cy.visit(
      "https://qastoredesafio.lojaintegrada.com.br/categoria/15610609.html"
    );

    cy.get("div.listagem-item.prod-id-118475045")
      .find('a[title="Adicionar produto ao carrinho"]')
      .click({ force: true });

    cy.get('input[name="cupom"]').type("FRETEGRATIS");

    cy.contains("button", "Usar cupom").should("be.visible").click();

    cy.get('input[name="cep_destino"]').clear().type("93042082");

    cy.get('input[type="radio"][name="formaEnvio"][value="156583"]').check({
      force: true,
    });

    //Verifica se o valor subtotal é igual ao total, oonfirmando que o valor do frete foi removido do total.
    cy.get("strong.valor-subtotal")
      .invoke("text")
      .then((subtotalText) => {
        cy.get("strong.valor-total")
          .invoke("text")
          .then((totalText) => {
            const subtotal = subtotalText
              .trim()
              .replace(/\u00a0|R\$|\s|,/g, "");
            const total = totalText.trim().replace(/\u00a0|R\$|\s|,/g, "");

            expect(subtotal).to.eq(total);
          });
      });
  });
});
