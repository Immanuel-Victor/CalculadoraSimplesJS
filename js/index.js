const valores = document.querySelectorAll(".numberBtn");
const operadores = document.querySelectorAll('.operatorBtn');
const visao = document.getElementById('valor-numeros');

let operacaoAtual = () => operador !== undefined;
let novoNumero = true;
let operador;
let valor1;

function visaoAtt(texto){
    if(novoNumero){
        visao.textContent = texto;
        novoNumero = false;
    }else{
        visao.textContent += texto;
    }
}

function irParaOperacao(evento){
    if(!novoNumero){
        calcular();
        novoNumero = true;
        operador = evento.target.textContent;
        valor1 = parseFloat(view.textContent);
    }
}

function calcular(){
    if(operacaoAtual()){
        const valor2 = parseFloat(view.textContent);
        novoNumero = true;
        switch(operador){
            case '+':
                visaoAtt(parseFloat(valor1 + valor2));
                break;
            case '-':
                visaoAtt(parseFloat(valor1 - valor2));
                break;
            case '*':
                visaoAtt(parseFloat(valor1 * valor2));
                break;
            case '/':
                if(valor2 != 0){
                visaoAtt(parseFloat(valor1 / valor2));
                }else{
                    visaoAtt('Não valido');
                }
                break; 
            case 'C': visaoAtt('');
        }
    }
}


const colocarNumero = (evento) => visaoAtt(evento.target.textContent);
valores.forEach(valor => valor.addEventListener('click', colocarNumero));

operadores.forEach(operador => operador.addEventListener('click', irParaOperacao));