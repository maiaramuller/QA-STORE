describe("Validação da criação do cadastro", () => {
  it("Deve ser validado os dados para a criação do cxadastro de usuário", () => {
    cy.visit("https://qastoredesafio.lojaintegrada.com.br/conta/login");

    cy.get('input[id="id_email"][class="span8"]').type("teste27@gmail.com");

    cy.contains("button", "Cadastrar").should("be.visible").click();

    cy.get('input[id="id_confirmacao_email"]').type("teste28@hotmail.com");

    cy.get('input[id="id_senha"]').type("123456");

    cy.get('input[id="id_confirmacao_senha"]').type("123456");

    cy.get('input[id="id_nome"]').type("Maiara Muller");

    cy.get('input[id="id_cpf"]').type("04691940065s");

    cy.get('input[id="id_telefone_celular"]').type("51999999999");

    cy.get('select[id="id_sexo"]').select("Feminino");

    cy.get('input[id="id_data_nascimento"]').type("12022001");

    cy.get('input[id="id_cep"]').type("93042082");

    cy.get('input[id="id_numero"]').type("123");

    cy.contains("button", "Criar Conta").should("be.visible").click();

    cy.contains("li", "Os emails devem ser iguais.").should("be.visible");
  });
});
