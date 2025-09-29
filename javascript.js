let sort = Math.floor(Math.random() * 100) + 1;
console.log("Número sorteado:", sort);

let tentativas = 5;
let tentativasFeitas = []; // ← Aqui guardamos os números já tentados

const btn = document.getElementById("btn");
const output = document.getElementById("output");
const input = document.getElementById("input");

document.getElementById("chances").innerHTML = "Tentativas: " + tentativas;

function clique() {
    let valor = parseInt(input.value);

    if (btn.disabled) return;

    if (isNaN(valor)) {
        output.innerHTML = "Digite um número válido!";
        return;
    }

    if (valor < 1 || valor > 100) {
        output.innerHTML = "O número deve estar entre 1 e 100.";
        return;
    }

    if (tentativasFeitas.includes(valor)) {
        output.innerHTML = `Você já tentou este número ${valor}. Tente outro.`;
        return; // Não desconta tentativa
    }

    // Adiciona o valor à lista de tentativas únicas
    tentativasFeitas.push(valor);

    if (valor === sort) {
        output.innerHTML = "Você Acertou";
        output.style.color = "#5d9cf4ff";
        btn.disabled = true;
        return;
    }

    tentativas--;
    document.getElementById("chances").innerHTML = "Tentativas: " + tentativas;

    if (valor < sort) {
        output.innerHTML = "🔼 O número é maior.";
    } else {
        output.innerHTML = "🔽 O número é menor.";
    }

    if (tentativas === 0) {
        output.innerHTML = "Acabaram as tentativas! O número era: " + sort;
        output.style.color = "#fc9292ff";
        btn.disabled = true;
    }
}

function novo() {
    sort = Math.floor(Math.random() * 100) + 1;
    console.log("Novo número sorteado:", sort);

    tentativas = 5;
    tentativasFeitas = []; // ← Resetamos os números já tentados
    btn.disabled = false;
    input.value = "";
    output.innerHTML = "Saída: ";
    output.style.color = "#b2ff6aff";
    document.getElementById("chances").innerHTML = "Tentativas: " + tentativas;
}