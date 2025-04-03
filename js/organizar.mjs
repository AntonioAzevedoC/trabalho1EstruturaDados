"use strict";

// Importando array de dados principal
import { arrDados } from "./dados.mjs";

// Importando função de atualizar tabela
import atualizarTabela from "./tabela.mjs";

const botaoOrganizar = document.querySelector(".__botao-organizar");

// Função Quick-sort para ordenar array que será inserida na tabela
const quickSort = function (arr, fnComp, inicio = 0, fim = arr.length - 1) {
  if (fim <= inicio) return;

  let pivot = fim; // Definindo pivot
  let div = inicio - 1; // Definindo posição de início para loop

  // Iteração pela array
  for (let i = inicio; i < fim; i++) {
    if (fnComp(arr[i], arr[pivot])) {
      div++;
      if (div !== i) {
        [arr[i], arr[div]] = [arr[div], arr[i]];
      }
    }
  }
  div++;

  if (fnComp(arr[pivot], arr[div]) && div !== pivot) {
    [arr[pivot], arr[div]] = [arr[div], arr[pivot]];
  }

  // Recursão, organizando as metades
  quickSort(arr, fnComp, inicio, div - 1);
  quickSort(arr, fnComp, div + 1, fim);
};

// Funções para serem inseridas no quick-sort
const quickSortNomeCrescente = (el1, el2) => el1.nome < el2.nome;
const quickSortNomeDecrescente = (el1, el2) => el1.nome > el2.nome;
const quickSortRaCrescente = (el1, el2) => el1.RA < el2.RA;
const quickSortRaDecrescente = (el1, el2) => el1.RA > el2.RA;

// let quickSortNome function (arrDados, (el1, el2) => el1.nome < el2.nome);

// Evento para clique de botão organizar e chamada de função organizar
botaoOrganizar.addEventListener("click", function () {
  //   console.log(selectOrdem.value.split("-"), selectSituacao.value);
  let selectSituacao = document.querySelector("#__select-aprov").value;
  let selectOrdem = document.querySelector("#__select-ordem");
  selectOrdem = selectOrdem.value.split("-");
  console.log(selectSituacao.value);

  let cresc = selectOrdem[0];
  let tipo = selectOrdem[1];

  if (cresc === "Cresc" && tipo === "Nome")
    quickSort(arrDados, quickSortNomeCrescente);
  else if (cresc === "Decresc" && tipo === "Nome")
    quickSort(arrDados, quickSortNomeDecrescente);
  else if (cresc === "Cresc" && tipo === "RA")
    quickSort(arrDados, quickSortRaCrescente);
  else if (cresc === "Decresc" && tipo === "RA")
    quickSort(arrDados, quickSortRaDecrescente);

  if (selectSituacao === "Ambos") atualizarTabela(arrDados);
  else if (selectSituacao === "Aprovados")
    atualizarTabela(arrDados.filter((a) => a.resultado === true));
  else if (selectSituacao === "Reprovados")
    atualizarTabela(arrDados.filter((a) => a.resultado === false));
});
