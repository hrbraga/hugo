let listaNumerosSorteados = [];
let numeroLimite = 100
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
};

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogão do número secreto')
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 100')

}

exibirMensagemInicial();

function verificarChute() {
let chute = document.querySelector('input'). value; 

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertoug! Parabéns!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
            if (chute > numeroSecreto) {
            exibirTextoNaTela('h1', 'O número secreto é menor');
            exibirTextoNaTela('p', 'Tente novamente') ; } 
    else {
            exibirTextoNaTela('h1','O número secreto é maior');
            exibirTextoNaTela('p','Tente novamente') ;
       }
       tentativas++;
       limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeNumerosSorteados = listaNumerosSorteados.length;

    if (quantidadeDeNumerosSorteados == numeroLimite){
        listaNumerosSorteados = []
    }

    if (listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
   exibirMensagemInicial();
   document.getElementById('reiniciar').setAttribute('disabled', true);
}

 