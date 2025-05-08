// Espera o carregamento completo da página antes de executar o código
document.addEventListener("DOMContentLoaded", function () {

  // Obtém o botão com id "modoEscuro" (usado para ativar o modo escuro)
  const toggle = document.getElementById("modoEscuro");

  // Seleciona o corpo da página
  const body = document.body;

  // Adiciona um evento de clique no botão de modo escuro
  toggle.addEventListener("click", () => {
    // Alterna a classe 'dark-mode' no body (ativa/desativa o modo escuro)
    body.classList.toggle("dark-mode");
  });

  // Cria dinamicamente um elemento <div> que vai exibir a mensagem de boas-vindas
  const saudacao = document.createElement("div");

  // Adiciona a classe "boas-vindas" à div criada (o estilo está no CSS)
  saudacao.classList.add("boas-vindas");

  // Define o conteúdo HTML da div com um <span> onde será digitado o texto
  saudacao.innerHTML = '<span id="textoDigitando"></span>';

  // Adiciona essa div no topo do corpo da página, antes de todo o conteúdo
  document.body.prepend(saudacao);

  // Texto que será digitado na tela, letra por letra
  const texto = "👋 Olá! Seja muito bem-vindo ao meu portfólio.";

  // Variável de controle para saber em que letra está
  let i = 0;

  // Função responsável por "digitar" cada letra
  function digitar() {
    if (i < texto.length) {
      // Adiciona uma letra por vez no span com id 'textoDigitando'
      document.getElementById("textoDigitando").innerHTML += texto.charAt(i);
      i++; // Avança para a próxima letra

      // Chama a função novamente após 50 milissegundos (efeito de digitação)
      setTimeout(digitar, 50);
    } else {
      // Após terminar de digitar todo o texto, espera 4 segundos e some com a mensagem
      setTimeout(() => {
        saudacao.style.opacity = 0; // Torna a div invisível
        saudacao.style.transform = "translateY(-50px)"; // Move para cima com suavidade
      }, 4000);
    }
  }

  // Inicia o processo de digitação
  digitar();

});
