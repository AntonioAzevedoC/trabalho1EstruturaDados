"use strict";

import { arrDados } from "./dados.mjs";

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
    // Gerando html por aluno
    const html = `<tr class='__item-tabela'>
        <td>${aluno.nome}</td>
        <td>${aluno.RA}</td>
        <td>${aluno.idade}</td>
        <td>${aluno.sexo}</td>
        <td>${aluno.media}</td>
        <td>${aluno.resultado ? "Aprovado(a)" : "Não aprovado(a)"}</td>
      </tr>`;
    // Inserindo html à tabela
    tabela.insertAdjacentHTML("beforeend", html);
  }
};

export default atualizarTabela;
