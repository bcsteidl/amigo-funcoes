'use strict'

module.exports = function(cadeia) {
    cadeia = "_" + cadeia.toLowerCase();
    while (cadeia.indexOf("_") > -1) {
        var pos = cadeia.indexOf("_");
        cadeia = cadeia.substring(0, pos) + cadeia.substring(pos + 1, pos + 2).toUpperCase() + cadeia.substring(pos + 2);
    }
    return cadeia;
}
