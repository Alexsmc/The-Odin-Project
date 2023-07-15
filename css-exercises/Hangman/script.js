// Lista de palavras para o jogo
var palavras = ["gato", "cachorro", "elefante", "girafa", "leao"];

// Escolha aleatória de uma palavra
var palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];

// Array para armazenar as letras descobertas
var letrasDescobertas = [];

// Número máximo de tentativas
var maxTentativas = 6;
var tentativas = 0;

// Função para adicionar uma letra
function adicionarLetra() {
  var letraInput = document.getElementById("letra-input");
  var letra = letraInput.value.toLowerCase();
  
  // Verificar se a letra já foi escolhida antes
  if (letrasDescobertas.includes(letra)) {
    alert("Você já escolheu essa letra!");
    return;
  }
  
  // Adicionar a letra às letras descobertas
  letrasDescobertas.push(letra);
  
  // Verificar se a letra está na palavra
  if (palavraSecreta.includes(letra)) {
    atualizarPalavra();
  } else {
    tentativas++;
    atualizarTentativas();
  }
  
  // Limpar o campo de input
  letraInput.value = "";
}

// Função para atualizar a palavra exibida
function atualizarPalavra() {
  var palavraDiv = document.getElementById("palavra");
  var palavraExibida = "";
  
  // Percorrer a palavra secreta
  for (var i = 0; i < palavraSecreta.length; i++) {
    var letraAtual = palavraSecreta[i];
    
    // Verificar se a letra foi descoberta
    if (letrasDescobertas.includes(letraAtual)) {
      palavraExibida += letraAtual + " ";
    } else {
      palavraExibida += "_ ";
    }
  }
  
  // Atualizar a palavra exibida
  palavraDiv.textContent = palavraExibida;
  
  // Verificar se o jogador ganhou
  if (!palavraExibida.includes("_")) {
    alert("Parabéns, você ganhou!");
  }
}

// Função para atualizar o número de tentativas
function atualizarTentativas() {
  var tentativasDiv = document.getElementById("tentativas");
  tentativasDiv.textContent = "Tentativas restantes: " + (maxTentativas - tentativas);
  
  // Verificar se o jogador perdeu
  if (tentativas >= maxTentativas) {
    alert("Game Over! A palavra secreta era: " + palavraSecreta);
  }
}

// Chamar a função inicial para exibir a palavra e o número de tentativas
atualizarPalavra();
atualizarTentativas();
