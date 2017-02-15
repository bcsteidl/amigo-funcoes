'use strict'

module.exports = function(tipo) {
    var auxDataHora = new Date();
    var dia = ((auxDataHora.getDate() < 10) ? "0" : "") + auxDataHora.getDate();
    var mes = (((auxDataHora.getMonth() + 1) < 10) ? "0" : "") + (auxDataHora.getMonth() + 1);
    var ano = auxDataHora.getFullYear();
    var hora = (((auxDataHora.getHours()) < 10) ? "0" : "") + (auxDataHora.getHours());
    var minuto = ((auxDataHora.getMinutes() < 10) ? "0" : "") + auxDataHora.getMinutes();
    var segundo = ((auxDataHora.getSeconds() < 10) ? "0" : "") + auxDataHora.getSeconds();
    var milisegundo = auxDataHora.getMilliseconds();
    var milisegundo = ((milisegundo < 100) ? "0" : "") + milisegundo;
    var milisegundo = ((milisegundo < 10) ? "0" : "") + milisegundo;

    if (tipo == "DIA")
        return dia;
    if (tipo == "MES")
        return mes;
    if (tipo == "ANO")
        return ano;
    if (tipo == "DATA")
        return dia + "/" + mes + "/" + ano;
    if (tipo == "HORA24")
        return hora;
    if (tipo == "MINUTO")
        return minuto;
    if (tipo == "SEGUNDO")
        return segundo;
    if (tipo == "MILISEGUNDO")
        return milisegundo;
    if (tipo == "HORA")
        return hora + ":" + minuto + ":" + segundo;
    if (tipo == "DATAHORA")
        return dia + "/" + mes + "\/" + ano + " " + hora + ":" + minuto + ":" + segundo;
}
