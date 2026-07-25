'use strict'

const botaoCalcular = document.getElementById('botao-calcular')

function mostrarComissao() {
    const nome = document.getElementById('caixa-nome')
    const valor = document.getElementById('caixa-valor')
    const resultado = document.getElementById('resultado')
    
    const salario = valor.value * 0.08

    resultado.textContent = `${nome.value}, o valor das vendas é de: R$${Number(valor.value).toFixed(2)} e seu salário é de: R$${Number(salario).toFixed(2)}`
}

botaoCalcular.addEventListener('click', mostrarComissao)
