const valores = document.querySelectorAll(".numberBtn");
const operadores = document.querySelectorAll('.operatorBtn');
const visao = document.getElementById('valor-numeros');

let novoNumero = true;
let operador;
let numeroAnterior, numeroAtual;

const operacaoPendente = () => operador !== undefined;

const gatilhoIgual = () => {
    calcular();
    operador = undefined;
}

const gatilhoC = () => {
    visao.textContent = '';
    operador = undefined;
    novoNumero = true;
    numeroAnterior = undefined;
}
const gatilhoCE = () => {
    visao.textContent = visao.textContent.slice(0,-1);
}

function atualizarInput(texto){
    if(novoNumero){
        visao.textContent = texto
        novoNumero = false;
    }else{
        visao.textContent += texto;
    }

}

function inserirNumero(evento){
    atualizarInput(evento.target.textContent);
}

function selecionarOperador(evento){
    if(!novoNumero){
        calcular();
        novoNumero = true;
        operador = evento.target.textContent;
        numeroAnterior = parseFloat(visao.textContent);
    }

}

function calcular(){
    if(operacaoPendente()){
        numeroAtual = parseFloat(visao.textContent);
        novoNumero = true;
        if(operador == '+'){
            atualizarInput(parseFloat(numeroAnterior + numeroAtual));
        }else if(operador == '-'){
            atualizarInput(parseFloat(numeroAnterior - numeroAtual));
        }else if(operador == 'x'){
            atualizarInput(parseFloat(numeroAnterior * numeroAtual));
        }else if(operador == '/'){
            if(numeroAtual !== 0){
                atualizarInput(parseFloat(numeroAnterior/numeroAtual));
            }else{
                atualizarInput('Operação Inválida');
                novoNumero = true;
            }
        }
    }

}

const mapearTecla = {
    '.' : 'dot',
    ',' : 'dot',
    '0' : 'zero',
    'c' : 'limpar',
    '1' : 'numero1',
    '2' : 'numero2',
    '3' : 'numero3',
    '4' : 'numero4',
    '5' : 'numero5',
    '6' : 'numero6',
    '7' : 'numero7',
    '8' : 'numero8',
    '9' : 'numero9',
    '/' : 'operador/', 
    '*' : 'operadorx',
    '+' : 'operador+',
    '-' : 'operador-',
    'Enter' : 'equal',
    'Backspace' : 'limpar-elemento'
}

function mapearTeclado(evento){
    const tecla = evento.key;
    const teclaMapeada = () => Object.keys(mapearTecla).indexOf(tecla) !== -1;
    if(teclaMapeada()) {
        document.getElementById(mapearTecla[tecla]).click();
    }
}

valores.forEach(numero => numero.addEventListener('click', inserirNumero));
operadores.forEach(operador => operador.addEventListener('click', selecionarOperador));
document.getElementById('equal').addEventListener('click',gatilhoIgual);
document.getElementById('limpar').addEventListener('click',gatilhoC);
document.getElementById('limpar-elemento').addEventListener('click',gatilhoCE);
document.addEventListener('keydown', mapearTeclado)