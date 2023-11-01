function calcImc() {
    const pesoInput = document.getElementById("inputPeso");
    const alturaInput = document.getElementById("inputAlt");

    const peso = parseFloat(pesoInput.value);
    const altura = parseFloat(alturaInput.value);

    const imc = peso / (altura * altura);
    const resDiv = document.getElementById("resDiv");

    if (imc < 18.5) {
        resDiv.innerHTML = "Abaixo do peso";
    } else if (imc < 24.9) {
        resDiv.innerHTML = "Peso normal";
    } else if (imc < 29.9) {
        resDiv.innerHTML = "Sobrepeso";
    } else if (imc < 34.9) {
        resDiv.innerHTML = "Obesidade grau 1";
    } else if (imc < 39.9) {
        resDiv.innerHTML = "Obesidade grau 2";
    } else {
        resDiv.innerHTML = "Obesidade grau 3";
    }
}

