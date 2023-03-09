// var botoes = document.querySelectorAll("button");

// for (var i = 0; i < botoes.length; i++) {
//   botoes[i].addEventListener("click", function () {
//     var balao = document.getElementById("balao");
//     balao.innerHTML = this.getAttribute("data-info");
//     balao.style.display = "block";
//     balao.style.top = this.offsetTop + 50 + "px";
//     balao.style.left = this.offsetLeft - 100 + "px";
//   });
// }

// document.addEventListener("click", function (e) {
//   var balao = document.getElementById("balao");
//   if (e.target != balao && e.target.parentNode != balao) {
//     balao.style.display = "none";
//   }
// });
//
// BOTAO 1
var botao = document.getElementById("botao-1");

botao.addEventListener("click", function () {
  var mensagem = document.getElementById("minhaMensagem");
  mensagem.innerHTML =
    "Primeiras experiencias de uso de computador na educação";
});
// BATAO 2
var botao = document.getElementById("botao-2");

botao.addEventListener("click", function () {
  var mensagem = document.getElementById("minhaMensagem");
  mensagem.innerHTML =
    "Projeto EDUCAM. Primeiras iniciativas governamentais de tecnologia na educação coordenadas pelo MEC";
});
// BOTAO 3
var botao = document.getElementById("botao-3");

botao.addEventListener("click", function () {
  var mensagem = document.getElementById("minhaMensagem");
  mensagem.innerHTML =
    "Programa de ação imediata em Informática na Educação de 1º e 2º Grau";
});
// BOTAO 4
var botao = document.getElementById("botao-4");

botao.addEventListener("click", function () {
  var mensagem = document.getElementById("minhaMensagem");
  mensagem.innerHTML =
    "PRONINFE. Programa conceitualmente muito avançado, mas nennhuma ação foi realizada";
});
// BOTAO 5
var botao = document.getElementById("botao-5");

botao.addEventListener("click", function () {
  var mensagem = document.getElementById("minhaMensagem");
  mensagem.innerHTML =
    "PROINFO. Principal politica nacional de tecnologia educacional do Brasil. Vigente até hoje";
});
// BOTAO 6
var botao = document.getElementById("botao-6");

botao.addEventListener("click", function () {
  var mensagem = document.getElementById("minhaMensagem");
  mensagem.innerHTML =
    "PROINFO integrado, criado para integrar distintas ações";
});
// BOTAO 7
var botao = document.getElementById("botao-7");

botao.addEventListener("click", function () {
  var mensagem = document.getElementById("minhaMensagem");
  mensagem.innerHTML =
    "Programa de banda larganna escola. Projeto Um Computador Por Aluno, distribuição de tablets";
});
// BOTAO 8
var botao = document.getElementById("botao-8");

botao.addEventListener("click", function () {
  var mensagem = document.getElementById("minhaMensagem");
  mensagem.innerHTML = "Programa de Inovação Educação Conectada";
});
// BOTAO 9
var botao = document.getElementById("botao-9");

botao.addEventListener("click", function () {
  var mensagem = document.getElementById("minhaMensagem");
  mensagem.innerHTML = "Olá, mundo!999999999";
});
