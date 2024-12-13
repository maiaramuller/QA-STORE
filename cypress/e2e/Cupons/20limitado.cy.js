describe("Adicionar cupom 20LIMITADO e verificar valores", () => {
  it("Deve adicionar o cupom e constar que o cupom é inválido", () => {
    cy.visit(
      "https://qastoredesafio.lojaintegrada.com.br/categoria/15610609.html"
    );

    cy.get("div.listagem-item.prod-id-118475045")
      .find('a[title="Adicionar produto ao carrinho"]')
      .click({ force: true });

    cy.get('input[name="cupom"]').type("20LIMITADO");

    cy.contains("button", "Usar cupom").should("be.visible").click();

    //Verifica se o texto "Cupom não encontrado" existe na página
    cy.get("div.alert.alert-danger.alert-geral")
      .should("be.visible")
      .and("contain.text", "Cupom não encontrado");

    //Verifica se o valor subtotal é igual ao total
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
