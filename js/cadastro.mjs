"use strict";

// Importando array de dados principal
import { arrDados } from "./dados.mjs";

// Importando função de atualizar tabela
import atualizarTabela from "./tabela.mjs";

// Função para lidar com envio de dados em cadastro de aluno
document.querySelector(".__input-btn").addEventListener("click", function () {
  // Selecionando valores de input
  let inputElements = Array.from(document.querySelectorAll(".__input-el"));

  // Validação básica caso dados estejam vazios
  let valorNome = inputElements[0].value.toUpperCase()
    ? inputElements[0].value.toUpperCase()
    : "";
  let valorRA = String(inputElements[1].value)
    ? String(inputElements[1].value)
    : "";
  let valorIdade = inputElements[2].value ? inputElements[2].value : 0;
  let valorSexo = inputElements[3].value ? inputElements[3].value : "F";
  let valorMedia = Number(inputElements[4].value)
    ? Number(inputElements[4].value)
    : 0;

  // Inserindo dados no array
  arrDados.push({
    nome: valorNome,
    RA: valorRA,
    idade: valorIdade,
    sexo: valorSexo === "F" ? "FEMININO" : "MASCULINO",
    media: valorMedia,
    resultado: valorMedia > 6 ? true : false, // Media > 6 = aprovado; media < 6 = não aprovado
  });
  console.log(arrDados);
});
