"use strict";

// import { arrAlunos } from "./dados.mjs";

// Selecionando tabela
const tabela = document.getElementById("__tabela");

// Função para atualizar dados da tabela
const atualizarTabela = function (arr) {
  // Limpando tabela
  let itemsTabela = document.querySelectorAll(".__item-tabela");
  for (const item of itemsTabela) {
    item.remove();
  }

  // Loop por array, adicionando eles à tabela
  for (const aluno of arr) {
    // Gerando HTML por aluno
    const html = `<tr class='__item-tabela'>
        <td>${aluno.nome}</td>
        <td>${aluno.RA}</td>
        <td>${aluno.idade}</td>
        <td>${aluno.sexo}</td>
        <td>${aluno.media}</td>
        <td>${aluno.resultado ? "Aprovado(a)" : "Não aprovado(a)"}</td>
      </tr>`;
    // Inserindo HTML à tabela
    tabela.insertAdjacentHTML("beforeend", html);
  }
};

export default atualizarTabela;
