'use strict'

$.fn.funcoes = require('.')

// Number.prototype.formata = function(d) {
// 	var num = this.toFixed(d);
// 	if (d > 0) {
// 		var posPonto = num.lastIndexOf(".");
// 		var inteiro = num.substring(0, posPonto);
// 		var decimais = num.substring(posPonto + 1);
// 		num = inteiro.replace(/\d(?=(?:\d{3})+(?:\D|$))/g, "$&.") + "," + decimais;
// 	} else {
// 		num = num.replace(/\d(?=(?:\d{3})+(?:\D|$))/g, "$&.");
// 	}
//
// 	return num;
// };
//
// String.prototype.desformata = function() {
// 	var num = this.replace(eval(/\./g),"");
// 	num = num.replace(eval(/,/g),".");
// 	return Number(num);
// };
//
// Date.prototype.toString = function() {
//    var dia = ((this.getDate() < 10) ? "0" : "") + this.getDate();
//    var mes = (((this.getMonth() + 1) < 10) ? "0" : "") + (this.getMonth() + 1);
//    var ano = this.getFullYear();
//    var hora = (((this.getHours()) < 10) ? "0" : "") + (this.getHours());
//    var minuto = ((this.getMinutes() < 10) ? "0" : "") + this.getMinutes();
//    var segundo = ((this.getSeconds() < 10) ? "0" : "") + this.getSeconds();
//    return dia + "/" + mes + "\/" + ano + " " + hora + ":" + minuto + ":" + segundo;
// };
//
// String.prototype.toDate = function() {
// 	return new Date(this.substr(6,4) + "-" + this.substr(3,2) + "-" + this.substr(0,2) + this.substr(10,9));
// };
