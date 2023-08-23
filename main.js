

// const peso = parseInt(prompt('Informe o seu peso: ', 'Digite aqui'));
// const altura = parseFloat(prompt('Informe a sua altura: ', 'Digite aqui'));
function calcImc() {
    const pesoInput = document.getElementById("inputPeso");
    const alturaInput = document.getElementById("inputAlt");

    const peso = parseFloat(pesoInput.value);
    const altura = parseFloat(alturaInput.value);

    const imc = peso / (altura * altura);
    const resDiv = document.getElementById("resDiv");

    if (imc < 18.5) {
        resDiv.innerHTML = `Abaixo do peso`;
    } else if (imc < 24.9) {
        resDiv.innerHTML = `Peso normal`;
    } else if (imc < 29.9) {
        resDiv.innerHTML = `Sobrepeso`;
    } else if (imc < 34.9) {
        resDiv.innerHTML = `Obesidade grau 1`;
    } else if (imc < 39.9) {
        resDiv.innerHTML = `Obesidade grau 2`;
    } else {
        resDiv.innerHTML = `Obesidade grau 3`;
    }
}




// js_n1 = parseInt(window.prompt('Informe o primeiro número: ' , 'Digite aqui',00));
// js_n2 = parseInt(window.prompt('Informe o segundo número: ' , 'Digite aqui',00));


// /* Saída de Dados sem classificação */
// document.write('Prim. número digitado =' + js_n1 );
// document.write('<br>Seg. número digitado =' + js_n2 );

// //Saída de Dados com IF...ELSE
//     if (js_n1 > js_n2){
//         document.write('<p><b> Classificação em Ordem Crescente:</b>' + js_n1 + 'e' + js_n2);
//     }
//     else{
//     document.write('<p><b> Classificação em Ordem Crescente:</b>' + js_n2 + 'e' + js_n1);
//     }
//         -->
// </script>
// </body>
