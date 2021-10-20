function comparaNumero(num1, num2) {
   const primeiraFrase = criaPrimeiraFRase(num1, num2); 
   const segundaFrase = criaSegundaFRase(num1, num2);

   return `${primeiraFrase} ${segundaFrase}`
}

function primeiraFrase(num1, num2){
    let saoIguais = '';

    if(num1 !== num2){
        saoIguais = 'não';
    }
    return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`
};

function criaSegundaFRase(num1, num2){
    const soma = num1 + num2;
    let resultado10 = 'menor';
    let resultado20 = 'menor';
    const compara10 =  soma > 10;
    const compara20 =  soma > 20;

    if(compara10) {
        resultado10 = 'maior'
    }
    if(compara20) {
        resultado20 = 'maior';
    }
    return `Sua soma é ${soma}, que é ${resultado} que 10 e ${resultado20} que 20.

    }`
}

console.log(comparaNumero(1, 2));