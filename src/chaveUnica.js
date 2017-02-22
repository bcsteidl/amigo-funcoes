'use strict'

module.exports = function() {
    // Carregando o plugin de funções
    const funcoes = require('..')

    return funcoes.dataHora("ANO") + funcoes.dataHora("MES") + funcoes.dataHora("DIA") + funcoes.dataHora("HORA24") + funcoes.dataHora("MINUTO") + funcoes.dataHora("SEGUNDO") + funcoes.dataHora("MILISEGUNDO");
}
