"use strict";

// Importando array de dados principal
import { arrAlunos } from "./dados.mjs";
import { ultimoSort } from "./dados.mjs";

// Importando função de atualizar tabela
import atualizarTabela from "./tabela.mjs";

// Selecionando elemento .__botao-organizar
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
const quickSortRaCrescente = (el1, el2) => +el1.RA < +el2.RA;
const quickSortRaDecrescente = (el1, el2) => +el1.RA > +el2.RA;

// Função para chamada de funções de organização
export const ChamadaOrganizacao = function (e, ordem = "", situacao = "") {
  let selectOrdem =
    ordem === "" ? document.querySelector("#__select-ordem").value : ordem;
  let arrOrdem = selectOrdem.split("-");

  let selectSituacao =
    situacao === ""
      ? document.querySelector("#__select-aprov").value
      : situacao;

  let cresc = arrOrdem[0];
  let tipo = arrOrdem[1];

  // Definindo que tipo de organização deve ser feita
  if (cresc === "Cresc" && tipo === "Nome")
    // Crescente por nome
    quickSort(arrAlunos, quickSortNomeCrescente);
  else if (cresc === "Decresc" && tipo === "Nome")
    // Decrescente por nome
    quickSort(arrAlunos, quickSortNomeDecrescente);
  else if (cresc === "Cresc" && tipo === "RA")
    // Crescente por RA
    quickSort(arrAlunos, quickSortRaCrescente);
  else if (cresc === "Decresc" && tipo === "RA")
    // Decrescente por RA
    quickSort(arrAlunos, quickSortRaDecrescente);

  // Filtrando por aprovação
  if (selectSituacao === "Ambos") atualizarTabela(arrAlunos);
  else if (selectSituacao === "Aprovados")
    atualizarTabela(arrAlunos.filter((a) => a.resultado === true));
  else if (selectSituacao === "Reprovados")
    atualizarTabela(arrAlunos.filter((a) => a.resultado === false));

  // // Atualizando dados da última organização feita
  // console.log("a", selectOrdem, "b", selectSituacao);

  ultimoSort.push(selectOrdem, selectSituacao);
  ultimoSort.splice(0, 2);
  // console.log(ultimoSort);
};

// Evento para clique de botão organizar chamando "chamadaOrganizacao"
botaoOrganizar.addEventListener("click", ChamadaOrganizacao);
