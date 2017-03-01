'use strict'

const $ = require('jquery')

module.exports = function(parametros) {
    // Definindo valores padrões
    if (typeof(parametros) == "undefined")
        parametros = {};

    var opcoes = {
        servidor: (typeof(parametros.servidor) != "undefined" ? parametros.servidor : "localhost"),
        porta: (typeof(parametros.porta) != "undefined" ? parametros.porta : "8080"),
        url: (typeof(parametros.url) != "undefined" ? parametros.url : "http://[servidor]:[porta]"),
        metodo: (typeof(parametros.metodo) != "undefined" ? parametros.metodo : "GET"),
        acao: (typeof(parametros.acao) != "undefined" ? parametros.acao : "consultar"),
        assincrono: (typeof(parametros.assincrono) != "undefined" ? parametros.assincrono : true),
        query: (typeof(parametros.query) != "undefined" ? parametros.query : ""),
        dados: (typeof(parametros.dados) != "undefined" ? parametros.dados : {}),
        callback: (typeof(parametros.callback) != "undefined" ? parametros.callback : "")
    };

    $.each(opcoes, function(key, value) {
        if (typeof(value) == "string") {
            value = value.replace("[servidor]", opcoes.servidor);
            value = value.replace("[porta]", opcoes.porta);
            opcoes[key] = value;
        }
    });

    $.ajax({
        type: opcoes.metodo,
        url: opcoes.url + "/api/" + opcoes.acao + "/" + opcoes.query,
        dataType: "json",
        contentType: "application/json",
        async: opcoes.assincrono,
        cache: false,
        timeout: 30000,
        headers: {
            "authorization": localStorage.getItem("token")
        },
        data: opcoes.dados,
        success: opcoes.callback,
        error: function(xmlHttpRequest, status, err) {
            alert("Não foi possível completar a comunicação com o servidor, aguarde alguns minutos e tente novamente.");
        }
    });
}
