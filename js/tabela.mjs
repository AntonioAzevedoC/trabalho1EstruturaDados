"use strict";

import { arrDados } from "./dados.mjs";

const tabela = document.getElementById("__tabela");
console.log(tabela);

const atualizarTabela = function (arr) {
  for (const aluno of arr) {
    const html = `<tr>
        <td>${aluno.nome}</td>
        <td>${aluno.RA}</td>
        <td>${aluno.idade}</td>
        <td>${aluno.sexo}</td>
        <td>${aluno.media}</td>
        <td>${aluno.resultado ? "Aprovado(a)" : "Não aprovado(a)"}</td>
      </tr>`;
    tabela.insertAdjacentHTML("beforeend", html);
  }
};

export default atualizarTabela;
