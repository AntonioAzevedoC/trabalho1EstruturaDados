"use strict";

// Importando array de dados principais
import { arrAlunos } from "./dados.mjs";
import { ultimoSort } from "./dados.mjs";

// Importando função para chamar organização da lista
import { ChamadaOrganizacao } from "./organizar.mjs";

// Função para lidar com envio de dados em cadastro de aluno
document.querySelector(".__input-btn").addEventListener("click", function () {
  // Selecionando valores de input
  let inputElements = Array.from(document.querySelectorAll(".__input-el"));

  // Validação básica caso dados estejam vazios
  let valorNome = inputElements[0].value.toUpperCase()
    ? inputElements[0].value.toUpperCase()
    : "";
  let valorRA = Number(inputElements[1].value)
    ? Number(inputElements[1].value)
    : 0;
  let valorIdade = inputElements[2].value ? inputElements[2].value : 0;
  let valorSexo = inputElements[3].value ? inputElements[3].value : "F";
  let valorMedia = Number(inputElements[4].value)
    ? Number(inputElements[4].value)
    : 0;

  // Limpando campos de imput
  for (const el of inputElements) {
    el.value = "";
  }

  // Inserindo dados no array
  arrAlunos.push({
    nome: valorNome,
    RA: valorRA,
    idade: valorIdade,
    sexo: valorSexo === "F" ? "FEMININO" : "MASCULINO",
    media: valorMedia,
    resultado: valorMedia > 6 ? true : false, // Media > 6 = aprovado; media < 6 = não aprovado
  });

  // console.log(...ultimoSort);/
  console.log(arrAlunos);

  // Organizando tabela com o último tipo de organização, para adicionar o novo aluno
  ChamadaOrganizacao("e", ...ultimoSort);
});
