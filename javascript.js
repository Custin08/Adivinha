let sort = Math.floor(Math.random() * 100) + 1;
console.log("Número sorteado:", sort);

let tentativas = 3; 
let tentativasFeitas = [];

const btn = document.getElementById("btn");
const novoBtn = document.getElementById("novo");
const output = document.getElementById("output");
const input = document.getElementById("input");
const chances = document.getElementById("chances");

chances.innerHTML = "Tentativas: " + tentativas;

function clique() {
    let valor = parseInt(input.value);

    if (btn.disabled) return;

    if (isNaN(valor)) {
        output.innerHTML = "⚠️ Digite um número válido!";
        return;
    }

    if (valor < 1 || valor > 100) {
        output.innerHTML = "⚠️ O número deve estar entre 1 e 100.";
        return;
    }

    if (tentativasFeitas.includes(valor)) {
        output.innerHTML = `⚠️ Você já tentou o número ${valor}.`;
        return;
    }

    tentativasFeitas.push(valor);

    if (valor === sort) {
        output.innerHTML = "🎉 Você acertou! O número era " + sort;
        output.style.color = "#2ecc71";
        btn.disabled = true;
        return;
    }

    tentativas--;
    chances.innerHTML = "Tentativas: " + tentativas;

    if (valor < sort) {
        output.innerHTML = "❌ Você errou. 🔼 O número é maior.";
    } else {
        output.innerHTML = "❌ Você errou. 🔽 O número é menor.";
    }

    if (tentativas === 0) {
        output.innerHTML = "😢 Acabaram as tentativas! O número era: " + sort;
        output.style.color = "#e74c3c";
        btn.disabled = true;
    }
}

function novo() {
    sort = Math.floor(Math.random() * 100) + 1;
    console.log("Novo número sorteado:", sort);

    tentativas = 3; 
    tentativasFeitas = [];
    btn.disabled = false;
    input.value = "";
    output.innerHTML = "Saída: ";
    output.style.color = "#b2ff6aff";
    chances.innerHTML = "Tentativas: " + tentativas;
}

// liga os botões às funções
btn.addEventListener("click", clique);
novoBtn.addEventListener("click", novo);
