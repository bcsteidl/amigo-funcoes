'use strict'

module.exports = function(cadeia, valorA, valorB) {
    cadeia = cadeia + "";
    // Linha de código colocada para forçar o fim de linha na variavel;
    var cadeiaAux = "";
    while (cadeia.indexOf(valorA) >= 0) {
        cadeiaAux = cadeiaAux + cadeia.substring(0, cadeia.indexOf(valorA)) + valorB;
        cadeia = cadeia.substring(cadeia.indexOf(valorA) + valorA.length);
    }
    if (cadeiaAux != "")
        cadeiaAux = cadeiaAux + cadeia.substring(cadeia.indexOf(valorA));
    else
        cadeiaAux = cadeia;
    return cadeiaAux;
}
