describe("Filtrar produtos por menor valor", () => {
  it("Deve filtrar os produtos e verificar se o primeiro produto é o de menor valor", () => {
    cy.visit(
      "https://qastoredesafio.lojaintegrada.com.br/categoria/15610613.html"
    );

    // Abre o menu de ordenação
    cy.get("button#botaoOrdenar").click();

    // Seleciona a opção de ordenar por menor preço
    cy.get('ul.dropdown-menu.pull-right a[href="?sort=-preco"]').click();

    // Aguarda os produtos serem carregados
    cy.get(".row-fluid > li").should("have.length.greaterThan", 0);

    // Extrai os preços e verifica a ordenação
    cy.get(".row-fluid > li").then((produtos) => {
      // Mapeia os preços dos produtos
      const precos = [...produtos].map((produto) => {
        const precoTexto = produto.querySelector(
          ".info-produto .preco-promocional"
        )?.textContent;

        // Converte o preço para número
        return precoTexto
          ? parseFloat(precoTexto.replace("R$", "").replace(",", ".").trim())
          : 0;
      });

      // Verifica se os preços estão ordenados
      const estaOrdenado = precos.every(
        (preco, index) => index === 0 || preco >= precos[index - 1]
      );

      if (estaOrdenado) {
        cy.log("Os produtos estão ordenados pelo menor preço.");
      } else {
        cy.log("Os produtos NÃO estão ordenados pelo menor preço.");
      }
      // Valida a ordenação
      expect(estaOrdenado).to.be.true;
    });
  });
});
