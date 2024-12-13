describe("Adicionar CPF inválido e verificar resultado", () => {
  it("Deve avisar que o CPF é inválido e desabilitar o botão de 'Finalizar compra'", () => {
    cy.visit(
      "https://qastoredesafio.lojaintegrada.com.br/categoria/15610609.html"
    );

    cy.get("div.listagem-item.prod-id-118475045")
      .find('a[title="Adicionar produto ao carrinho"]')
      .click({ force: true });

    cy.get("a.ir-carrinho.hidden-phone").should("be.visible").click();

    cy.get('input[id="id_email_login"]').type("teste@maiara.com.br");

    cy.get("a.submit-email").should("be.visible").click();

    cy.get('input[id="id_nome"]')
      .should("be.visible")
      .type("Maiara Alessandra Muller");

    cy.get('input[id="id_cpf"]').should("be.visible").type("00000000"); //CPF inválido

    cy.get('input[id="id_telefone_celular"]')
      .should("be.visible")
      .type("51989528277");

    //Verifica se o parágrafo "CPF inválido" aparece
    cy.contains("p", "CPF inválido")
      .should("be.visible")
      .and("have.css", "display", "block");

    cy.get('input[id="id_telefone_celular"]')
      .should("be.visible")
      .type("51989528277");

    cy.get('input[id="id_cep"]').type("93042082");

    cy.wait(1000);

    cy.get("label.accordion-heading.SEDEX").should("be.visible").click();

    cy.get('input[id="id_numero"]').type("2300");

    cy.get('input[id="id_complemento"]').type("347");

    cy.get('input[id="id_referencia"]').type(
      "Condominio Imperatriz Leopoldina"
    );

    cy.get('input[id="id_complemento"]').type("347");

    // Validação do botão "Finalizar compra"
    //*Mesmo que não seja possível finalizar uma compra de fato, esses são os atributos que o botão deveria possuir caso o CPF fosse inválido para evitar o clique.
    cy.get("#finalizarCompra")
      .should("have.class", "disabled") // Verifica se o botão possui a classe "disabled"
      .and("have.attr", "readonly"); // Verifica se o botão possui o atributo "readonly"

    cy.get("#finalizarCompra").click({ force: true });

    // Confirma que o clique não teve efeito
    cy.url().should("include", "/checkout"); // Ou valida que a URL não mudou, dependendo do comportamento esperado.
  });
});
