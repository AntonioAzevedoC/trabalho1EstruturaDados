"use strict";

// EXEMPLO OBJETO ALUNO PADRÃO
// {
//   nome: "Pedro Santos Nogueira", // Nome - string (passar .toUppercase())
//   RA: "13649138726941782", // RA - número (manter número para funções de organização)
//   idade: 26, // idade - número
//   sexo: "MASCULINO", // sexo - string
//   media: 7.3, // media = número (manter número para calcular média)
//   resultado: true, // resultado = boolean (media > 6 ? true : false)
// },

// Array com objetos de alunos
export const arrAlunos = [
  {
    nome: "Pedro",
    RA: 2,
    idade: 26,
    sexo: "MASCULINO",
    media: 3,
    resultado: false,
  },
  {
    nome: "Marina",
    RA: 5,
    idade: 26,
    sexo: "FEMININO",
    media: 5,
    resultado: false,
  },
  {
    nome: "Vitória",
    RA: 13,
    idade: 26,
    sexo: "FEMININO",
    media: 10,
    resultado: true,
  },
  {
    nome: "Breno",
    RA: 9,
    idade: 26,
    sexo: "MASCULINO",
    media: 7.3,
    resultado: true,
  },
  {
    nome: "Antonio",
    RA: 1,
    idade: 26,
    sexo: "MASCULINO",
    media: 9,
    resultado: true,
  },
  {
    nome: "Carla",
    RA: 28,
    idade: 26,
    sexo: "FEMININO",
    media: 6.8,
    resultado: false,
  },
];

// Array que contém os dados da última organização que ocorreu, dado armazenado para adicionar novos alunos automaticamente para tabelas sendo mostradas
export let ultimoSort = ["Cresc-Nome", "Ambos"];
