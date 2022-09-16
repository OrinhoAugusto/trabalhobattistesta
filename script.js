let arrei = []

function calcular() {
    document.getElementById('res').innerHTML = "";

    const deslocamento = document.getElementById('deslocamento').value;
    const tempo = document.getElementById('tempo').value;
    let deslocamentoFloat = parseFloat(deslocamento);
    let tempoFloat = parseFloat(tempo);
    var velocidade;

    if (deslocamento && tempo) {
        velocidade = deslocamentoFloat / tempoFloat;
        arrei.push(velocidade);
        document.getElementById('resb').value = velocidade;
    }

    for (let i in arrei) {
        document.getElementById('res').innerHTML += arrei[i] + "<br>";
    }

}

function limpar() {
    const deslocamento = document.getElementById('deslocamento').value = '';
    const tempo = document.getElementById('tempo').value = '';
    const resultado = document.getElementById('resb').value = '';
    const resultadob = document.getElementById('res').innerText = '';
}

function irparahome() {
    location.href = "index.html";
}

function irparasobre() {
    location.href = "sobre.html";
}
