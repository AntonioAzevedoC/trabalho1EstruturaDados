"use strict";

// Array de dados principal
let arrDados = [
  {
    nome: "Pedro Santos Nogueira", // Nome - string (passar .toUppercase())
    RA: "13649138726941782", // RA - string (transformar número em string)
    idade: 26, // idade - número
    sexo: true, // sexo = boolean (F = true, M = false)
    media: 7.3, // media = número (manter número para fazer calculos)
    resultado: true, // resultado = boolean (media > 6 ? true : false)
  },
];

document.querySelector(".__input-btn").addEventListener("click", function () {
  inputElements = Array.from(document.querySelectorAll(".__input-el"));
  // Validação básica caso dados estejam vazios
  let valorNome = inputElements[0].value.toUpperCase()
    ? inputElements[0].value.toUpperCase()
    : "";
  let valorRA = String(inputElements[1].value)
    ? String(inputElements[1].value)
    : "";
  let valorIdade = inputElements[2].value ? inputElements[2].value : 0;
  let valorSexo = inputElements[3].value ? inputElements[3].value : true;
  let valorMedia = Number(inputElements[4].value)
    ? Number(inputElements[4].value)
    : 0;

  // Inserindo dados no array
  arrDados.push({
    nome: valorNome,
    RA: valorRA,
    idade: valorIdade,
    sexo: valorSexo,
    media: valorMedia,
    resultado: valorMedia > 6 ? true : false, // Media > 6 = aprovado; media < 6 = não aprovado
  });
  console.log(arrDados);
});
