'use strict'

const mensagem = require('amigo-mensagem')

module.exports = function(retorno) {
    // Verifica se houve mensagens no retorno e apresenta na tela
    if (parseInt(retorno["codigo"]) > 0) {
        mensagem({
            tipo: retorno["tipo"],
            mensagem: retorno["tipo"] + " [" + retorno["codigo"] + "]:<br/>" + retorno["mensagem"],
            largura: 400,
            altura: 160
        });
    }

    return (retorno["tipo"] == "Erro" ? true : false);
}
