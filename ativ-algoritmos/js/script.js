function somaMaior() {
    let a = parseFloat(prompt('Digite um valor para variável A:'))
    let b = parseFloat(prompt('Digite um valor para variável B:'))
    let c = parseFloat(prompt('Digite um valor para variável C:'))

    let soma = a + b

    if (soma > c) {
        alert('A soma das variáveis A e B é maior que a variável C.')
    } else {
        alert('A soma das variáveis A e B é menor que a variável C.')
    }
}

function tempoCasamento() {
    let nome = prompt('Qual o seu nome?')
    let sexo = prompt('Você é do sexo feminino ou masculino?')
    let estadoCivil = prompt('Qual seu estado cívil?')

    if (sexo.toLowerCase() === 'feminino' && estadoCivil.toLowerCase() === 'casada') {
        let tempoCasada = parseFloat(prompt('A quantos anos você é casada?'))
        alert(`Parabéns pelos ${tempoCasada} anos de casada, ${nome.charAt(0).toUpperCase() + nome.slice(1)}.`)
    }
}

function imparPar() {
    let valor = prompt('Digite um valor e descubra se ele é ímpar ou par:')

    if (valor % 2 === 0) {
        alert(`O número ${valor} é par.`)
    } else {
        alert(`O número ${valor} é ímpar.`)
    }
}

function valoresIguais() {
    let a = parseFloat(prompt('Digite o primeiro valor:'))
    let b = parseFloat(prompt('Digite o segundo valor:'))

    if (a === b) {
        let soma = a + b
        c = soma
        alert(`Se somarmos ${a} e ${b} o resultado será ${c}.`)
    } else {
        let soma = a * b
        c = soma
        alert(`Se multiplicarmos ${a} por ${b} o resultado será ${c}.`)
    }
}

function valorPositivoNegativo() {
    let numero = parseFloat(prompt('Digite qualquer número:'))

    if (numero >= 0) {
        let positivo = numero * 2
        alert(`O dobro de ${numero} é ${positivo}.`)
    } else {
        let negativo = numero * 3
        alert(`O triplo de ${numero} é ${negativo}.`)
    }
}

function valorBooleano() {
    let bool1 = prompt('Digite o primeiro valor booleano (true ou false)')
    let bool2 = prompt('Digite o segundo valor booleano (true ou false)')

    if (bool1.toLowerCase() === 'true' && bool2.toLowerCase() === 'true') {
        alert('Os dois valores informados são TRUE (Verdadeiros).')
    } else if (bool1.toLowerCase() === 'false' && bool2.toLowerCase() === 'false') {
        alert('Os dois valores informados são FALSE (Falsos).')
    } else {
        alert('Os valores são diferentes.')
    }

}

function lerVariaveis() {
    let variavel = parseFloat(prompt('Digite um número qualquer:'))

    if (variavel % 2 === 0) {
        let soma5 = variavel + 5
        alert(`O valor ${variavel} somado a 5, resulta em ${soma5}.`)
    } else {
        let soma8 = variavel + 8
        alert(`O valor ${variavel} somado a 8, resulta em ${soma8}.`)
    }
}

function ordenarDecrescente() {
    let num1 = parseInt(prompt("Digite o primeiro número inteiro:"))
    let num2 = parseInt(prompt("Digite o segundo número inteiro:"))
    let num3 = parseInt(prompt("Digite o terceiro número inteiro:"))

    let numeros = [num1, num2, num3]

    numeros.sort((a, b) => b - a);

    if (num1 === num2 || num1 === num3 || num2 === num3) {
        alert('Os números devem ser diferentes.')
        ordenarDecrescente()
    } else {
        alert(`A ordem decrescente dos números informados é: ${numeros}.`)
    }

}

function pesoIdeal() {
    let nome = prompt('Olá! Qual o seu nome?')
    let altura = parseFloat(prompt('Qual a sua altura em centímetros?'))
    let sexo = prompt(`Você é do sexo feminino ou masculino, ${nome.charAt(0).toUpperCase() + nome.slice(1)}?`)

    if (sexo.toLowerCase() === 'feminino') {
        let feminino = (62.1 * (altura / 100)) - 44.7
        alert(`${nome.charAt(0).toUpperCase() + nome.slice(1)}, seu peso ideal é ${feminino.toFixed(2)}`)
    } else {
        let masculino = (72.7 * (altura / 100)) - 58
        alert(`${nome.charAt(0).toUpperCase() + nome.slice(1)}, seu peso ideal é ${masculino.toFixed(2)}`)
    }
}

function descobrirImc() {
    let nome = prompt('Vamos descobrir seu IMC? Me diga, qual o seu nome.')
    let peso = parseFloat(prompt('Qual seu peso atual?'))
    let altura = parseFloat(prompt('Qual a sua altura em centimetros?'))

    let imc = peso / ((altura / 100) * (altura / 100))

    if (imc < 18.5) {
        alert(`${nome.charAt(0).toUpperCase() + nome.slice(1)}, você está abaixo do peso. Seu IMC atual é ${imc.toFixed(2)}.`)
    } else if (imc <= 25) {
        alert(`${nome.charAt(0).toUpperCase() + nome.slice(1)}, você está com o peso ideal. Seu IMC atual é ${imc.toFixed(2)}.`)
    } else if (imc <= 30) {
        alert(`${nome.charAt(0).toUpperCase() + nome.slice(1)}, você está acima do peso. Seu IMC atual é ${imc.toFixed(2)}.`)
    } else {
        alert(`${nome.charAt(0).toUpperCase() + nome.slice(1)}, você entrou no primeiro nível de obesidade. Seu IMC atual é ${imc.toFixed(2)}.`)

    }
}

function verDesconto() {
    let produto = parseFloat(prompt('Digite o valor que do produto de acordo com a etiqueta:'))
    let formaPagamento = parseFloat(prompt('Informe qual será a forma de pagamento de acordo com as opções: 1 - À vista em dinheiro ou cheque; 2 - À vista no cartão de crédito; 3 - Em duas vezes; 4 - Em três vezes.'))

    let precoFinal

    switch (formaPagamento) {
        case 1: precoFinal = produto * 0.90
            break

        case 2: precoFinal = produto * 0.85
            break

        case 3: precoFinal = produto
            break

        case 4: precoFinal = produto * 1.10
            break

        default: "Por favor, digite um número válido."
            break
    }

    precoFinal

    alert(`De acordo com a forma de pagamento selecionada, o total da sua compra ficou em ` + precoFinal.toFixed(2))

}

function verificarMedia() {
    let matricula = parseFloat(prompt('Informe sua matricula:'))
    let nota1 = parseFloat(prompt('Qual nota você obteve na primeira avaliação?'))
    let nota2 = parseFloat(prompt('Qual nota você obteve na segunda avaliação?'))
    let nota3 = parseFloat(prompt('Qual nota você obteve na terceira avaliação?'))
    let mediaExercicios = parseFloat(prompt('Você ficou com qual média nos exercícios avaliativos?'))

    let media = (nota1 + (nota2 * 2) + (nota3 * 3) + mediaExercicios) / 7

    if (media >= 6) {
        alert(`Referente a matrícula ${matricula}, a média final foi ${media.toFixed(2)}. Parabéns, você foi aprovado(a)!`)
    } else {
        alert(`Referente a matrícula ${matricula}, a média final foi ${media.toFixed(2)}. Infelizmente você não atingiu a média de aproveitamento e foi reprovado.`)

    }
}

