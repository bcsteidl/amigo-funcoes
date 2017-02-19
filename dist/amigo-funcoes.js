/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    globalize: __webpack_require__(17),
    toUpperLowerCase: __webpack_require__(20),
    substituir: __webpack_require__(19),
    dataHora: __webpack_require__(16),
    chaveUnica: __webpack_require__(15),
    ajaxSubmit: __webpack_require__(14),
    verificaErro: __webpack_require__(21),
    isCPF: __webpack_require__(18)
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {
	"supplemental": {
		"version": {
			"_number": "$Revision: 12932 $",
			"_unicodeVersion": "9.0.0",
			"_cldrVersion": "30.0.3"
		},
		"likelySubtags": {
			"aa": "aa-Latn-ET",
			"aai": "aai-Latn-ZZ",
			"aak": "aak-Latn-ZZ",
			"aau": "aau-Latn-ZZ",
			"ab": "ab-Cyrl-GE",
			"abi": "abi-Latn-ZZ",
			"abr": "abr-Latn-GH",
			"abt": "abt-Latn-ZZ",
			"aby": "aby-Latn-ZZ",
			"acd": "acd-Latn-ZZ",
			"ace": "ace-Latn-ID",
			"ach": "ach-Latn-UG",
			"ada": "ada-Latn-GH",
			"ade": "ade-Latn-ZZ",
			"adj": "adj-Latn-ZZ",
			"ady": "ady-Cyrl-RU",
			"adz": "adz-Latn-ZZ",
			"ae": "ae-Avst-IR",
			"aeb": "aeb-Arab-TN",
			"aey": "aey-Latn-ZZ",
			"af": "af-Latn-ZA",
			"agc": "agc-Latn-ZZ",
			"agd": "agd-Latn-ZZ",
			"agg": "agg-Latn-ZZ",
			"agm": "agm-Latn-ZZ",
			"ago": "ago-Latn-ZZ",
			"agq": "agq-Latn-CM",
			"aha": "aha-Latn-ZZ",
			"ahl": "ahl-Latn-ZZ",
			"aho": "aho-Ahom-IN",
			"ajg": "ajg-Latn-ZZ",
			"ak": "ak-Latn-GH",
			"akk": "akk-Xsux-IQ",
			"ala": "ala-Latn-ZZ",
			"ali": "ali-Latn-ZZ",
			"aln": "aln-Latn-XK",
			"alt": "alt-Cyrl-RU",
			"am": "am-Ethi-ET",
			"amm": "amm-Latn-ZZ",
			"amn": "amn-Latn-ZZ",
			"amo": "amo-Latn-NG",
			"amp": "amp-Latn-ZZ",
			"anc": "anc-Latn-ZZ",
			"ank": "ank-Latn-ZZ",
			"ann": "ann-Latn-ZZ",
			"any": "any-Latn-ZZ",
			"aoj": "aoj-Latn-ZZ",
			"aom": "aom-Latn-ZZ",
			"aoz": "aoz-Latn-ID",
			"apc": "apc-Arab-ZZ",
			"apd": "apd-Arab-TG",
			"ape": "ape-Latn-ZZ",
			"apr": "apr-Latn-ZZ",
			"aps": "aps-Latn-ZZ",
			"apz": "apz-Latn-ZZ",
			"ar": "ar-Arab-EG",
			"arc": "arc-Armi-IR",
			"arc-Nbat": "arc-Nbat-JO",
			"arc-Palm": "arc-Palm-SY",
			"arh": "arh-Latn-ZZ",
			"arn": "arn-Latn-CL",
			"aro": "aro-Latn-BO",
			"arq": "arq-Arab-DZ",
			"ary": "ary-Arab-MA",
			"arz": "arz-Arab-EG",
			"as": "as-Beng-IN",
			"asa": "asa-Latn-TZ",
			"ase": "ase-Sgnw-US",
			"asg": "asg-Latn-ZZ",
			"aso": "aso-Latn-ZZ",
			"ast": "ast-Latn-ES",
			"ata": "ata-Latn-ZZ",
			"atg": "atg-Latn-ZZ",
			"atj": "atj-Latn-CA",
			"auy": "auy-Latn-ZZ",
			"av": "av-Cyrl-RU",
			"avl": "avl-Arab-ZZ",
			"avn": "avn-Latn-ZZ",
			"avt": "avt-Latn-ZZ",
			"avu": "avu-Latn-ZZ",
			"awa": "awa-Deva-IN",
			"awb": "awb-Latn-ZZ",
			"awo": "awo-Latn-ZZ",
			"awx": "awx-Latn-ZZ",
			"ay": "ay-Latn-BO",
			"ayb": "ayb-Latn-ZZ",
			"az": "az-Latn-AZ",
			"az-Arab": "az-Arab-IR",
			"az-IQ": "az-Arab-IQ",
			"az-IR": "az-Arab-IR",
			"az-RU": "az-Cyrl-RU",
			"ba": "ba-Cyrl-RU",
			"bal": "bal-Arab-PK",
			"ban": "ban-Latn-ID",
			"bap": "bap-Deva-NP",
			"bar": "bar-Latn-AT",
			"bas": "bas-Latn-CM",
			"bav": "bav-Latn-ZZ",
			"bax": "bax-Bamu-CM",
			"bba": "bba-Latn-ZZ",
			"bbb": "bbb-Latn-ZZ",
			"bbc": "bbc-Latn-ID",
			"bbd": "bbd-Latn-ZZ",
			"bbj": "bbj-Latn-CM",
			"bbp": "bbp-Latn-ZZ",
			"bbr": "bbr-Latn-ZZ",
			"bcf": "bcf-Latn-ZZ",
			"bch": "bch-Latn-ZZ",
			"bci": "bci-Latn-CI",
			"bcm": "bcm-Latn-ZZ",
			"bcn": "bcn-Latn-ZZ",
			"bco": "bco-Latn-ZZ",
			"bcq": "bcq-Ethi-ZZ",
			"bcu": "bcu-Latn-ZZ",
			"bdd": "bdd-Latn-ZZ",
			"be": "be-Cyrl-BY",
			"bef": "bef-Latn-ZZ",
			"beh": "beh-Latn-ZZ",
			"bej": "bej-Arab-SD",
			"bem": "bem-Latn-ZM",
			"bet": "bet-Latn-ZZ",
			"bew": "bew-Latn-ID",
			"bex": "bex-Latn-ZZ",
			"bez": "bez-Latn-TZ",
			"bfd": "bfd-Latn-CM",
			"bfq": "bfq-Taml-IN",
			"bft": "bft-Arab-PK",
			"bfy": "bfy-Deva-IN",
			"bg": "bg-Cyrl-BG",
			"bgc": "bgc-Deva-IN",
			"bgn": "bgn-Arab-PK",
			"bgx": "bgx-Grek-TR",
			"bhb": "bhb-Deva-IN",
			"bhg": "bhg-Latn-ZZ",
			"bhi": "bhi-Deva-IN",
			"bhk": "bhk-Latn-PH",
			"bhl": "bhl-Latn-ZZ",
			"bho": "bho-Deva-IN",
			"bhy": "bhy-Latn-ZZ",
			"bi": "bi-Latn-VU",
			"bib": "bib-Latn-ZZ",
			"big": "big-Latn-ZZ",
			"bik": "bik-Latn-PH",
			"bim": "bim-Latn-ZZ",
			"bin": "bin-Latn-NG",
			"bio": "bio-Latn-ZZ",
			"biq": "biq-Latn-ZZ",
			"bjh": "bjh-Latn-ZZ",
			"bji": "bji-Ethi-ZZ",
			"bjj": "bjj-Deva-IN",
			"bjn": "bjn-Latn-ID",
			"bjo": "bjo-Latn-ZZ",
			"bjr": "bjr-Latn-ZZ",
			"bjz": "bjz-Latn-ZZ",
			"bkc": "bkc-Latn-ZZ",
			"bkm": "bkm-Latn-CM",
			"bkq": "bkq-Latn-ZZ",
			"bku": "bku-Latn-PH",
			"bkv": "bkv-Latn-ZZ",
			"blt": "blt-Tavt-VN",
			"bm": "bm-Latn-ML",
			"bmh": "bmh-Latn-ZZ",
			"bmk": "bmk-Latn-ZZ",
			"bmq": "bmq-Latn-ML",
			"bmu": "bmu-Latn-ZZ",
			"bn": "bn-Beng-BD",
			"bng": "bng-Latn-ZZ",
			"bnm": "bnm-Latn-ZZ",
			"bnp": "bnp-Latn-ZZ",
			"bo": "bo-Tibt-CN",
			"boj": "boj-Latn-ZZ",
			"bom": "bom-Latn-ZZ",
			"bon": "bon-Latn-ZZ",
			"bpy": "bpy-Beng-IN",
			"bqc": "bqc-Latn-ZZ",
			"bqi": "bqi-Arab-IR",
			"bqp": "bqp-Latn-ZZ",
			"bqv": "bqv-Latn-CI",
			"br": "br-Latn-FR",
			"bra": "bra-Deva-IN",
			"brh": "brh-Arab-PK",
			"brx": "brx-Deva-IN",
			"brz": "brz-Latn-ZZ",
			"bs": "bs-Latn-BA",
			"bsj": "bsj-Latn-ZZ",
			"bsq": "bsq-Bass-LR",
			"bss": "bss-Latn-CM",
			"bst": "bst-Ethi-ZZ",
			"bto": "bto-Latn-PH",
			"btt": "btt-Latn-ZZ",
			"btv": "btv-Deva-PK",
			"bua": "bua-Cyrl-RU",
			"buc": "buc-Latn-YT",
			"bud": "bud-Latn-ZZ",
			"bug": "bug-Latn-ID",
			"buk": "buk-Latn-ZZ",
			"bum": "bum-Latn-CM",
			"buo": "buo-Latn-ZZ",
			"bus": "bus-Latn-ZZ",
			"buu": "buu-Latn-ZZ",
			"bvb": "bvb-Latn-GQ",
			"bwd": "bwd-Latn-ZZ",
			"bwr": "bwr-Latn-ZZ",
			"bxh": "bxh-Latn-ZZ",
			"bye": "bye-Latn-ZZ",
			"byn": "byn-Ethi-ER",
			"byr": "byr-Latn-ZZ",
			"bys": "bys-Latn-ZZ",
			"byv": "byv-Latn-CM",
			"byx": "byx-Latn-ZZ",
			"bza": "bza-Latn-ZZ",
			"bze": "bze-Latn-ML",
			"bzf": "bzf-Latn-ZZ",
			"bzh": "bzh-Latn-ZZ",
			"bzw": "bzw-Latn-ZZ",
			"ca": "ca-Latn-ES",
			"can": "can-Latn-ZZ",
			"cbj": "cbj-Latn-ZZ",
			"cch": "cch-Latn-NG",
			"ccp": "ccp-Beng-IN",
			"ccp-Cakm": "ccp-Cakm-BD",
			"ce": "ce-Cyrl-RU",
			"ceb": "ceb-Latn-PH",
			"cfa": "cfa-Latn-ZZ",
			"cgg": "cgg-Latn-UG",
			"ch": "ch-Latn-GU",
			"chk": "chk-Latn-FM",
			"chm": "chm-Cyrl-RU",
			"cho": "cho-Latn-US",
			"chp": "chp-Latn-CA",
			"chr": "chr-Cher-US",
			"cja": "cja-Arab-KH",
			"cjm": "cjm-Cham-VN",
			"cjv": "cjv-Latn-ZZ",
			"ckb": "ckb-Arab-IQ",
			"ckl": "ckl-Latn-ZZ",
			"cko": "cko-Latn-ZZ",
			"cky": "cky-Latn-ZZ",
			"cla": "cla-Latn-ZZ",
			"cme": "cme-Latn-ZZ",
			"co": "co-Latn-FR",
			"cop": "cop-Copt-EG",
			"cps": "cps-Latn-PH",
			"cr": "cr-Cans-CA",
			"crj": "crj-Cans-CA",
			"crk": "crk-Cans-CA",
			"crl": "crl-Cans-CA",
			"crm": "crm-Cans-CA",
			"crs": "crs-Latn-SC",
			"cs": "cs-Latn-CZ",
			"csb": "csb-Latn-PL",
			"csw": "csw-Cans-CA",
			"ctd": "ctd-Pauc-MM",
			"cu": "cu-Cyrl-RU",
			"cu-Glag": "cu-Glag-BG",
			"cv": "cv-Cyrl-RU",
			"cy": "cy-Latn-GB",
			"da": "da-Latn-DK",
			"dad": "dad-Latn-ZZ",
			"daf": "daf-Latn-ZZ",
			"dag": "dag-Latn-ZZ",
			"dah": "dah-Latn-ZZ",
			"dak": "dak-Latn-US",
			"dar": "dar-Cyrl-RU",
			"dav": "dav-Latn-KE",
			"dbd": "dbd-Latn-ZZ",
			"dbq": "dbq-Latn-ZZ",
			"dcc": "dcc-Arab-IN",
			"ddn": "ddn-Latn-ZZ",
			"de": "de-Latn-DE",
			"ded": "ded-Latn-ZZ",
			"den": "den-Latn-CA",
			"dga": "dga-Latn-ZZ",
			"dgh": "dgh-Latn-ZZ",
			"dgi": "dgi-Latn-ZZ",
			"dgl": "dgl-Arab-ZZ",
			"dgr": "dgr-Latn-CA",
			"dgz": "dgz-Latn-ZZ",
			"dia": "dia-Latn-ZZ",
			"dje": "dje-Latn-NE",
			"dnj": "dnj-Latn-CI",
			"dob": "dob-Latn-ZZ",
			"doi": "doi-Arab-IN",
			"dop": "dop-Latn-ZZ",
			"dow": "dow-Latn-ZZ",
			"dri": "dri-Latn-ZZ",
			"drs": "drs-Ethi-ZZ",
			"dsb": "dsb-Latn-DE",
			"dtm": "dtm-Latn-ML",
			"dtp": "dtp-Latn-MY",
			"dts": "dts-Latn-ZZ",
			"dty": "dty-Deva-NP",
			"dua": "dua-Latn-CM",
			"duc": "duc-Latn-ZZ",
			"dud": "dud-Latn-ZZ",
			"dug": "dug-Latn-ZZ",
			"dv": "dv-Thaa-MV",
			"dva": "dva-Latn-ZZ",
			"dww": "dww-Latn-ZZ",
			"dyo": "dyo-Latn-SN",
			"dyu": "dyu-Latn-BF",
			"dz": "dz-Tibt-BT",
			"dzg": "dzg-Latn-ZZ",
			"ebu": "ebu-Latn-KE",
			"ee": "ee-Latn-GH",
			"efi": "efi-Latn-NG",
			"egl": "egl-Latn-IT",
			"egy": "egy-Egyp-EG",
			"eky": "eky-Kali-MM",
			"el": "el-Grek-GR",
			"ema": "ema-Latn-ZZ",
			"emi": "emi-Latn-ZZ",
			"en": "en-Latn-US",
			"en-Shaw": "en-Shaw-GB",
			"enn": "enn-Latn-ZZ",
			"enq": "enq-Latn-ZZ",
			"eo": "eo-Latn-001",
			"eri": "eri-Latn-ZZ",
			"es": "es-Latn-ES",
			"esu": "esu-Latn-US",
			"et": "et-Latn-EE",
			"etr": "etr-Latn-ZZ",
			"ett": "ett-Ital-IT",
			"etu": "etu-Latn-ZZ",
			"etx": "etx-Latn-ZZ",
			"eu": "eu-Latn-ES",
			"ewo": "ewo-Latn-CM",
			"ext": "ext-Latn-ES",
			"fa": "fa-Arab-IR",
			"faa": "faa-Latn-ZZ",
			"fab": "fab-Latn-ZZ",
			"fag": "fag-Latn-ZZ",
			"fai": "fai-Latn-ZZ",
			"fan": "fan-Latn-GQ",
			"ff": "ff-Latn-SN",
			"ff-Adlm": "ff-Adlm-GN",
			"ffi": "ffi-Latn-ZZ",
			"ffm": "ffm-Latn-ML",
			"fi": "fi-Latn-FI",
			"fia": "fia-Arab-SD",
			"fil": "fil-Latn-PH",
			"fit": "fit-Latn-SE",
			"fj": "fj-Latn-FJ",
			"flr": "flr-Latn-ZZ",
			"fmp": "fmp-Latn-ZZ",
			"fo": "fo-Latn-FO",
			"fod": "fod-Latn-ZZ",
			"fon": "fon-Latn-BJ",
			"for": "for-Latn-ZZ",
			"fpe": "fpe-Latn-ZZ",
			"fqs": "fqs-Latn-ZZ",
			"fr": "fr-Latn-FR",
			"frc": "frc-Latn-US",
			"frp": "frp-Latn-FR",
			"frr": "frr-Latn-DE",
			"frs": "frs-Latn-DE",
			"fub": "fub-Arab-CM",
			"fud": "fud-Latn-WF",
			"fue": "fue-Latn-ZZ",
			"fuf": "fuf-Latn-GN",
			"fuh": "fuh-Latn-ZZ",
			"fuq": "fuq-Latn-NE",
			"fur": "fur-Latn-IT",
			"fuv": "fuv-Latn-NG",
			"fuy": "fuy-Latn-ZZ",
			"fvr": "fvr-Latn-SD",
			"fy": "fy-Latn-NL",
			"ga": "ga-Latn-IE",
			"gaa": "gaa-Latn-GH",
			"gaf": "gaf-Latn-ZZ",
			"gag": "gag-Latn-MD",
			"gah": "gah-Latn-ZZ",
			"gaj": "gaj-Latn-ZZ",
			"gam": "gam-Latn-ZZ",
			"gan": "gan-Hans-CN",
			"gaw": "gaw-Latn-ZZ",
			"gay": "gay-Latn-ID",
			"gbf": "gbf-Latn-ZZ",
			"gbm": "gbm-Deva-IN",
			"gby": "gby-Latn-ZZ",
			"gbz": "gbz-Arab-IR",
			"gcr": "gcr-Latn-GF",
			"gd": "gd-Latn-GB",
			"gde": "gde-Latn-ZZ",
			"gdn": "gdn-Latn-ZZ",
			"gdr": "gdr-Latn-ZZ",
			"geb": "geb-Latn-ZZ",
			"gej": "gej-Latn-ZZ",
			"gel": "gel-Latn-ZZ",
			"gez": "gez-Ethi-ET",
			"gfk": "gfk-Latn-ZZ",
			"ggn": "ggn-Deva-NP",
			"ghs": "ghs-Latn-ZZ",
			"gil": "gil-Latn-KI",
			"gim": "gim-Latn-ZZ",
			"gjk": "gjk-Arab-PK",
			"gjn": "gjn-Latn-ZZ",
			"gju": "gju-Arab-PK",
			"gkn": "gkn-Latn-ZZ",
			"gkp": "gkp-Latn-ZZ",
			"gl": "gl-Latn-ES",
			"glk": "glk-Arab-IR",
			"gmm": "gmm-Latn-ZZ",
			"gmv": "gmv-Ethi-ZZ",
			"gn": "gn-Latn-PY",
			"gnd": "gnd-Latn-ZZ",
			"gng": "gng-Latn-ZZ",
			"god": "god-Latn-ZZ",
			"gof": "gof-Ethi-ZZ",
			"goi": "goi-Latn-ZZ",
			"gom": "gom-Deva-IN",
			"gon": "gon-Telu-IN",
			"gor": "gor-Latn-ID",
			"gos": "gos-Latn-NL",
			"got": "got-Goth-UA",
			"grc": "grc-Cprt-CY",
			"grc-Linb": "grc-Linb-GR",
			"grt": "grt-Beng-IN",
			"grw": "grw-Latn-ZZ",
			"gsw": "gsw-Latn-CH",
			"gu": "gu-Gujr-IN",
			"gub": "gub-Latn-BR",
			"guc": "guc-Latn-CO",
			"gud": "gud-Latn-ZZ",
			"gur": "gur-Latn-GH",
			"guw": "guw-Latn-ZZ",
			"gux": "gux-Latn-ZZ",
			"guz": "guz-Latn-KE",
			"gv": "gv-Latn-IM",
			"gvf": "gvf-Latn-ZZ",
			"gvr": "gvr-Deva-NP",
			"gvs": "gvs-Latn-ZZ",
			"gwc": "gwc-Arab-ZZ",
			"gwi": "gwi-Latn-CA",
			"gwt": "gwt-Arab-ZZ",
			"gyi": "gyi-Latn-ZZ",
			"ha": "ha-Latn-NG",
			"ha-CM": "ha-Arab-CM",
			"ha-SD": "ha-Arab-SD",
			"hag": "hag-Latn-ZZ",
			"hak": "hak-Hans-CN",
			"ham": "ham-Latn-ZZ",
			"haw": "haw-Latn-US",
			"haz": "haz-Arab-AF",
			"hbb": "hbb-Latn-ZZ",
			"hdy": "hdy-Ethi-ZZ",
			"he": "he-Hebr-IL",
			"hhy": "hhy-Latn-ZZ",
			"hi": "hi-Deva-IN",
			"hia": "hia-Latn-ZZ",
			"hif": "hif-Latn-FJ",
			"hig": "hig-Latn-ZZ",
			"hih": "hih-Latn-ZZ",
			"hil": "hil-Latn-PH",
			"hla": "hla-Latn-ZZ",
			"hlu": "hlu-Hluw-TR",
			"hmd": "hmd-Plrd-CN",
			"hmt": "hmt-Latn-ZZ",
			"hnd": "hnd-Arab-PK",
			"hne": "hne-Deva-IN",
			"hnj": "hnj-Hmng-LA",
			"hnn": "hnn-Latn-PH",
			"hno": "hno-Arab-PK",
			"ho": "ho-Latn-PG",
			"hoc": "hoc-Deva-IN",
			"hoj": "hoj-Deva-IN",
			"hot": "hot-Latn-ZZ",
			"hr": "hr-Latn-HR",
			"hsb": "hsb-Latn-DE",
			"hsn": "hsn-Hans-CN",
			"ht": "ht-Latn-HT",
			"hu": "hu-Latn-HU",
			"hui": "hui-Latn-ZZ",
			"hy": "hy-Armn-AM",
			"hz": "hz-Latn-NA",
			"ia": "ia-Latn-FR",
			"ian": "ian-Latn-ZZ",
			"iar": "iar-Latn-ZZ",
			"iba": "iba-Latn-MY",
			"ibb": "ibb-Latn-NG",
			"iby": "iby-Latn-ZZ",
			"ica": "ica-Latn-ZZ",
			"ich": "ich-Latn-ZZ",
			"id": "id-Latn-ID",
			"idd": "idd-Latn-ZZ",
			"idi": "idi-Latn-ZZ",
			"idu": "idu-Latn-ZZ",
			"ig": "ig-Latn-NG",
			"igb": "igb-Latn-ZZ",
			"ige": "ige-Latn-ZZ",
			"ii": "ii-Yiii-CN",
			"ijj": "ijj-Latn-ZZ",
			"ik": "ik-Latn-US",
			"ikk": "ikk-Latn-ZZ",
			"ikt": "ikt-Latn-CA",
			"ikw": "ikw-Latn-ZZ",
			"ikx": "ikx-Latn-ZZ",
			"ilo": "ilo-Latn-PH",
			"imo": "imo-Latn-ZZ",
			"in": "in-Latn-ID",
			"inh": "inh-Cyrl-RU",
			"iou": "iou-Latn-ZZ",
			"iri": "iri-Latn-ZZ",
			"is": "is-Latn-IS",
			"it": "it-Latn-IT",
			"iu": "iu-Cans-CA",
			"iw": "iw-Hebr-IL",
			"iwm": "iwm-Latn-ZZ",
			"iws": "iws-Latn-ZZ",
			"izh": "izh-Latn-RU",
			"izi": "izi-Latn-ZZ",
			"ja": "ja-Jpan-JP",
			"jab": "jab-Latn-ZZ",
			"jam": "jam-Latn-JM",
			"jbu": "jbu-Latn-ZZ",
			"jen": "jen-Latn-ZZ",
			"jgk": "jgk-Latn-ZZ",
			"jgo": "jgo-Latn-CM",
			"ji": "ji-Hebr-UA",
			"jib": "jib-Latn-ZZ",
			"jmc": "jmc-Latn-TZ",
			"jml": "jml-Deva-NP",
			"jra": "jra-Latn-ZZ",
			"jut": "jut-Latn-DK",
			"jv": "jv-Latn-ID",
			"jw": "jw-Latn-ID",
			"ka": "ka-Geor-GE",
			"kaa": "kaa-Cyrl-UZ",
			"kab": "kab-Latn-DZ",
			"kac": "kac-Latn-MM",
			"kad": "kad-Latn-ZZ",
			"kai": "kai-Latn-ZZ",
			"kaj": "kaj-Latn-NG",
			"kam": "kam-Latn-KE",
			"kao": "kao-Latn-ML",
			"kbd": "kbd-Cyrl-RU",
			"kbm": "kbm-Latn-ZZ",
			"kbp": "kbp-Latn-ZZ",
			"kbq": "kbq-Latn-ZZ",
			"kbx": "kbx-Latn-ZZ",
			"kby": "kby-Arab-NE",
			"kcg": "kcg-Latn-NG",
			"kck": "kck-Latn-ZW",
			"kcl": "kcl-Latn-ZZ",
			"kct": "kct-Latn-ZZ",
			"kde": "kde-Latn-TZ",
			"kdh": "kdh-Arab-TG",
			"kdl": "kdl-Latn-ZZ",
			"kdt": "kdt-Thai-TH",
			"kea": "kea-Latn-CV",
			"ken": "ken-Latn-CM",
			"kez": "kez-Latn-ZZ",
			"kfo": "kfo-Latn-CI",
			"kfr": "kfr-Deva-IN",
			"kfy": "kfy-Deva-IN",
			"kg": "kg-Latn-CD",
			"kge": "kge-Latn-ID",
			"kgf": "kgf-Latn-ZZ",
			"kgp": "kgp-Latn-BR",
			"kha": "kha-Latn-IN",
			"khb": "khb-Talu-CN",
			"khn": "khn-Deva-IN",
			"khq": "khq-Latn-ML",
			"khs": "khs-Latn-ZZ",
			"kht": "kht-Mymr-IN",
			"khw": "khw-Arab-PK",
			"khz": "khz-Latn-ZZ",
			"ki": "ki-Latn-KE",
			"kij": "kij-Latn-ZZ",
			"kiu": "kiu-Latn-TR",
			"kiw": "kiw-Latn-ZZ",
			"kj": "kj-Latn-NA",
			"kjd": "kjd-Latn-ZZ",
			"kjg": "kjg-Laoo-LA",
			"kjs": "kjs-Latn-ZZ",
			"kjy": "kjy-Latn-ZZ",
			"kk": "kk-Cyrl-KZ",
			"kk-AF": "kk-Arab-AF",
			"kk-Arab": "kk-Arab-CN",
			"kk-CN": "kk-Arab-CN",
			"kk-IR": "kk-Arab-IR",
			"kk-MN": "kk-Arab-MN",
			"kkc": "kkc-Latn-ZZ",
			"kkj": "kkj-Latn-CM",
			"kl": "kl-Latn-GL",
			"kln": "kln-Latn-KE",
			"klq": "klq-Latn-ZZ",
			"klt": "klt-Latn-ZZ",
			"klx": "klx-Latn-ZZ",
			"km": "km-Khmr-KH",
			"kmb": "kmb-Latn-AO",
			"kmh": "kmh-Latn-ZZ",
			"kmo": "kmo-Latn-ZZ",
			"kms": "kms-Latn-ZZ",
			"kmu": "kmu-Latn-ZZ",
			"kmw": "kmw-Latn-ZZ",
			"kn": "kn-Knda-IN",
			"knp": "knp-Latn-ZZ",
			"ko": "ko-Kore-KR",
			"koi": "koi-Cyrl-RU",
			"kok": "kok-Deva-IN",
			"kol": "kol-Latn-ZZ",
			"kos": "kos-Latn-FM",
			"koz": "koz-Latn-ZZ",
			"kpe": "kpe-Latn-LR",
			"kpf": "kpf-Latn-ZZ",
			"kpo": "kpo-Latn-ZZ",
			"kpr": "kpr-Latn-ZZ",
			"kpx": "kpx-Latn-ZZ",
			"kqb": "kqb-Latn-ZZ",
			"kqf": "kqf-Latn-ZZ",
			"kqs": "kqs-Latn-ZZ",
			"kqy": "kqy-Ethi-ZZ",
			"krc": "krc-Cyrl-RU",
			"kri": "kri-Latn-SL",
			"krj": "krj-Latn-PH",
			"krl": "krl-Latn-RU",
			"krs": "krs-Latn-ZZ",
			"kru": "kru-Deva-IN",
			"ks": "ks-Arab-IN",
			"ksb": "ksb-Latn-TZ",
			"ksd": "ksd-Latn-ZZ",
			"ksf": "ksf-Latn-CM",
			"ksh": "ksh-Latn-DE",
			"ksj": "ksj-Latn-ZZ",
			"ksr": "ksr-Latn-ZZ",
			"ktb": "ktb-Ethi-ZZ",
			"ktm": "ktm-Latn-ZZ",
			"kto": "kto-Latn-ZZ",
			"ku": "ku-Latn-TR",
			"ku-Arab": "ku-Arab-IQ",
			"ku-LB": "ku-Arab-LB",
			"kub": "kub-Latn-ZZ",
			"kud": "kud-Latn-ZZ",
			"kue": "kue-Latn-ZZ",
			"kuj": "kuj-Latn-ZZ",
			"kum": "kum-Cyrl-RU",
			"kun": "kun-Latn-ZZ",
			"kup": "kup-Latn-ZZ",
			"kus": "kus-Latn-ZZ",
			"kv": "kv-Cyrl-RU",
			"kvg": "kvg-Latn-ZZ",
			"kvr": "kvr-Latn-ID",
			"kvx": "kvx-Arab-PK",
			"kw": "kw-Latn-GB",
			"kwj": "kwj-Latn-ZZ",
			"kwo": "kwo-Latn-ZZ",
			"kxa": "kxa-Latn-ZZ",
			"kxc": "kxc-Ethi-ZZ",
			"kxm": "kxm-Thai-TH",
			"kxp": "kxp-Arab-PK",
			"kxw": "kxw-Latn-ZZ",
			"kxz": "kxz-Latn-ZZ",
			"ky": "ky-Cyrl-KG",
			"ky-Arab": "ky-Arab-CN",
			"ky-CN": "ky-Arab-CN",
			"ky-Latn": "ky-Latn-TR",
			"ky-TR": "ky-Latn-TR",
			"kye": "kye-Latn-ZZ",
			"kyx": "kyx-Latn-ZZ",
			"kzr": "kzr-Latn-ZZ",
			"la": "la-Latn-VA",
			"lab": "lab-Lina-GR",
			"lad": "lad-Hebr-IL",
			"lag": "lag-Latn-TZ",
			"lah": "lah-Arab-PK",
			"laj": "laj-Latn-UG",
			"las": "las-Latn-ZZ",
			"lb": "lb-Latn-LU",
			"lbe": "lbe-Cyrl-RU",
			"lbu": "lbu-Latn-ZZ",
			"lbw": "lbw-Latn-ID",
			"lcm": "lcm-Latn-ZZ",
			"lcp": "lcp-Thai-CN",
			"ldb": "ldb-Latn-ZZ",
			"led": "led-Latn-ZZ",
			"lee": "lee-Latn-ZZ",
			"lem": "lem-Latn-ZZ",
			"lep": "lep-Lepc-IN",
			"leq": "leq-Latn-ZZ",
			"leu": "leu-Latn-ZZ",
			"lez": "lez-Cyrl-RU",
			"lg": "lg-Latn-UG",
			"lgg": "lgg-Latn-ZZ",
			"li": "li-Latn-NL",
			"lia": "lia-Latn-ZZ",
			"lid": "lid-Latn-ZZ",
			"lif": "lif-Deva-NP",
			"lif-Limb": "lif-Limb-IN",
			"lig": "lig-Latn-ZZ",
			"lih": "lih-Latn-ZZ",
			"lij": "lij-Latn-IT",
			"lis": "lis-Lisu-CN",
			"ljp": "ljp-Latn-ID",
			"lki": "lki-Arab-IR",
			"lkt": "lkt-Latn-US",
			"lle": "lle-Latn-ZZ",
			"lln": "lln-Latn-ZZ",
			"lmn": "lmn-Telu-IN",
			"lmo": "lmo-Latn-IT",
			"lmp": "lmp-Latn-ZZ",
			"ln": "ln-Latn-CD",
			"lns": "lns-Latn-ZZ",
			"lnu": "lnu-Latn-ZZ",
			"lo": "lo-Laoo-LA",
			"loj": "loj-Latn-ZZ",
			"lok": "lok-Latn-ZZ",
			"lol": "lol-Latn-CD",
			"lor": "lor-Latn-ZZ",
			"los": "los-Latn-ZZ",
			"loz": "loz-Latn-ZM",
			"lrc": "lrc-Arab-IR",
			"lt": "lt-Latn-LT",
			"ltg": "ltg-Latn-LV",
			"lu": "lu-Latn-CD",
			"lua": "lua-Latn-CD",
			"luo": "luo-Latn-KE",
			"luy": "luy-Latn-KE",
			"luz": "luz-Arab-IR",
			"lv": "lv-Latn-LV",
			"lwl": "lwl-Thai-TH",
			"lzh": "lzh-Hans-CN",
			"lzz": "lzz-Latn-TR",
			"mad": "mad-Latn-ID",
			"maf": "maf-Latn-CM",
			"mag": "mag-Deva-IN",
			"mai": "mai-Deva-IN",
			"mak": "mak-Latn-ID",
			"man": "man-Latn-GM",
			"man-GN": "man-Nkoo-GN",
			"man-Nkoo": "man-Nkoo-GN",
			"mas": "mas-Latn-KE",
			"maw": "maw-Latn-ZZ",
			"maz": "maz-Latn-MX",
			"mbh": "mbh-Latn-ZZ",
			"mbo": "mbo-Latn-ZZ",
			"mbq": "mbq-Latn-ZZ",
			"mbu": "mbu-Latn-ZZ",
			"mbw": "mbw-Latn-ZZ",
			"mci": "mci-Latn-ZZ",
			"mcp": "mcp-Latn-ZZ",
			"mcq": "mcq-Latn-ZZ",
			"mcr": "mcr-Latn-ZZ",
			"mcu": "mcu-Latn-ZZ",
			"mda": "mda-Latn-ZZ",
			"mde": "mde-Arab-ZZ",
			"mdf": "mdf-Cyrl-RU",
			"mdh": "mdh-Latn-PH",
			"mdj": "mdj-Latn-ZZ",
			"mdr": "mdr-Latn-ID",
			"mdx": "mdx-Ethi-ZZ",
			"med": "med-Latn-ZZ",
			"mee": "mee-Latn-ZZ",
			"mek": "mek-Latn-ZZ",
			"men": "men-Latn-SL",
			"mer": "mer-Latn-KE",
			"met": "met-Latn-ZZ",
			"meu": "meu-Latn-ZZ",
			"mfa": "mfa-Arab-TH",
			"mfe": "mfe-Latn-MU",
			"mfn": "mfn-Latn-ZZ",
			"mfo": "mfo-Latn-ZZ",
			"mfq": "mfq-Latn-ZZ",
			"mg": "mg-Latn-MG",
			"mgh": "mgh-Latn-MZ",
			"mgl": "mgl-Latn-ZZ",
			"mgo": "mgo-Latn-CM",
			"mgp": "mgp-Deva-NP",
			"mgy": "mgy-Latn-TZ",
			"mh": "mh-Latn-MH",
			"mhi": "mhi-Latn-ZZ",
			"mhl": "mhl-Latn-ZZ",
			"mi": "mi-Latn-NZ",
			"mif": "mif-Latn-ZZ",
			"min": "min-Latn-ID",
			"mis": "mis-Hatr-IQ",
			"miw": "miw-Latn-ZZ",
			"mk": "mk-Cyrl-MK",
			"mki": "mki-Arab-ZZ",
			"mkl": "mkl-Latn-ZZ",
			"mkp": "mkp-Latn-ZZ",
			"mkw": "mkw-Latn-ZZ",
			"ml": "ml-Mlym-IN",
			"mle": "mle-Latn-ZZ",
			"mlp": "mlp-Latn-ZZ",
			"mls": "mls-Latn-SD",
			"mmo": "mmo-Latn-ZZ",
			"mmu": "mmu-Latn-ZZ",
			"mmx": "mmx-Latn-ZZ",
			"mn": "mn-Cyrl-MN",
			"mn-CN": "mn-Mong-CN",
			"mn-Mong": "mn-Mong-CN",
			"mna": "mna-Latn-ZZ",
			"mnf": "mnf-Latn-ZZ",
			"mni": "mni-Beng-IN",
			"mnw": "mnw-Mymr-MM",
			"moa": "moa-Latn-ZZ",
			"moe": "moe-Latn-CA",
			"moh": "moh-Latn-CA",
			"mos": "mos-Latn-BF",
			"mox": "mox-Latn-ZZ",
			"mpp": "mpp-Latn-ZZ",
			"mps": "mps-Latn-ZZ",
			"mpt": "mpt-Latn-ZZ",
			"mpx": "mpx-Latn-ZZ",
			"mql": "mql-Latn-ZZ",
			"mr": "mr-Deva-IN",
			"mrd": "mrd-Deva-NP",
			"mrj": "mrj-Cyrl-RU",
			"mro": "mro-Mroo-BD",
			"ms": "ms-Latn-MY",
			"ms-CC": "ms-Arab-CC",
			"ms-ID": "ms-Arab-ID",
			"mt": "mt-Latn-MT",
			"mtc": "mtc-Latn-ZZ",
			"mtf": "mtf-Latn-ZZ",
			"mti": "mti-Latn-ZZ",
			"mtr": "mtr-Deva-IN",
			"mua": "mua-Latn-CM",
			"mur": "mur-Latn-ZZ",
			"mus": "mus-Latn-US",
			"mva": "mva-Latn-ZZ",
			"mvn": "mvn-Latn-ZZ",
			"mvy": "mvy-Arab-PK",
			"mwk": "mwk-Latn-ML",
			"mwr": "mwr-Deva-IN",
			"mwv": "mwv-Latn-ID",
			"mxc": "mxc-Latn-ZW",
			"mxm": "mxm-Latn-ZZ",
			"my": "my-Mymr-MM",
			"myk": "myk-Latn-ZZ",
			"mym": "mym-Ethi-ZZ",
			"myv": "myv-Cyrl-RU",
			"myw": "myw-Latn-ZZ",
			"myx": "myx-Latn-UG",
			"myz": "myz-Mand-IR",
			"mzk": "mzk-Latn-ZZ",
			"mzm": "mzm-Latn-ZZ",
			"mzn": "mzn-Arab-IR",
			"mzp": "mzp-Latn-ZZ",
			"mzw": "mzw-Latn-ZZ",
			"mzz": "mzz-Latn-ZZ",
			"na": "na-Latn-NR",
			"nac": "nac-Latn-ZZ",
			"naf": "naf-Latn-ZZ",
			"nak": "nak-Latn-ZZ",
			"nan": "nan-Hans-CN",
			"nap": "nap-Latn-IT",
			"naq": "naq-Latn-NA",
			"nas": "nas-Latn-ZZ",
			"nb": "nb-Latn-NO",
			"nca": "nca-Latn-ZZ",
			"nce": "nce-Latn-ZZ",
			"ncf": "ncf-Latn-ZZ",
			"nch": "nch-Latn-MX",
			"nco": "nco-Latn-ZZ",
			"ncu": "ncu-Latn-ZZ",
			"nd": "nd-Latn-ZW",
			"ndc": "ndc-Latn-MZ",
			"nds": "nds-Latn-DE",
			"ne": "ne-Deva-NP",
			"neb": "neb-Latn-ZZ",
			"new": "new-Deva-NP",
			"nex": "nex-Latn-ZZ",
			"nfr": "nfr-Latn-ZZ",
			"ng": "ng-Latn-NA",
			"nga": "nga-Latn-ZZ",
			"ngb": "ngb-Latn-ZZ",
			"ngl": "ngl-Latn-MZ",
			"nhb": "nhb-Latn-ZZ",
			"nhe": "nhe-Latn-MX",
			"nhw": "nhw-Latn-MX",
			"nif": "nif-Latn-ZZ",
			"nii": "nii-Latn-ZZ",
			"nij": "nij-Latn-ID",
			"nin": "nin-Latn-ZZ",
			"niu": "niu-Latn-NU",
			"niy": "niy-Latn-ZZ",
			"niz": "niz-Latn-ZZ",
			"njo": "njo-Latn-IN",
			"nkg": "nkg-Latn-ZZ",
			"nko": "nko-Latn-ZZ",
			"nl": "nl-Latn-NL",
			"nmg": "nmg-Latn-CM",
			"nmz": "nmz-Latn-ZZ",
			"nn": "nn-Latn-NO",
			"nnf": "nnf-Latn-ZZ",
			"nnh": "nnh-Latn-CM",
			"nnk": "nnk-Latn-ZZ",
			"nnm": "nnm-Latn-ZZ",
			"no": "no-Latn-NO",
			"nod": "nod-Lana-TH",
			"noe": "noe-Deva-IN",
			"non": "non-Runr-SE",
			"nop": "nop-Latn-ZZ",
			"nou": "nou-Latn-ZZ",
			"nqo": "nqo-Nkoo-GN",
			"nr": "nr-Latn-ZA",
			"nrb": "nrb-Latn-ZZ",
			"nsk": "nsk-Cans-CA",
			"nsn": "nsn-Latn-ZZ",
			"nso": "nso-Latn-ZA",
			"nss": "nss-Latn-ZZ",
			"ntm": "ntm-Latn-ZZ",
			"ntr": "ntr-Latn-ZZ",
			"nui": "nui-Latn-ZZ",
			"nup": "nup-Latn-ZZ",
			"nus": "nus-Latn-SS",
			"nuv": "nuv-Latn-ZZ",
			"nux": "nux-Latn-ZZ",
			"nv": "nv-Latn-US",
			"nwb": "nwb-Latn-ZZ",
			"nxq": "nxq-Latn-CN",
			"nxr": "nxr-Latn-ZZ",
			"ny": "ny-Latn-MW",
			"nym": "nym-Latn-TZ",
			"nyn": "nyn-Latn-UG",
			"nzi": "nzi-Latn-GH",
			"oc": "oc-Latn-FR",
			"ogc": "ogc-Latn-ZZ",
			"okr": "okr-Latn-ZZ",
			"okv": "okv-Latn-ZZ",
			"om": "om-Latn-ET",
			"ong": "ong-Latn-ZZ",
			"onn": "onn-Latn-ZZ",
			"ons": "ons-Latn-ZZ",
			"opm": "opm-Latn-ZZ",
			"or": "or-Orya-IN",
			"oro": "oro-Latn-ZZ",
			"oru": "oru-Arab-ZZ",
			"os": "os-Cyrl-GE",
			"osa": "osa-Osge-US",
			"ota": "ota-Arab-ZZ",
			"otk": "otk-Orkh-MN",
			"ozm": "ozm-Latn-ZZ",
			"pa": "pa-Guru-IN",
			"pa-Arab": "pa-Arab-PK",
			"pa-PK": "pa-Arab-PK",
			"pag": "pag-Latn-PH",
			"pal": "pal-Phli-IR",
			"pal-Phlp": "pal-Phlp-CN",
			"pam": "pam-Latn-PH",
			"pap": "pap-Latn-AW",
			"pau": "pau-Latn-PW",
			"pbi": "pbi-Latn-ZZ",
			"pcd": "pcd-Latn-FR",
			"pcm": "pcm-Latn-NG",
			"pdc": "pdc-Latn-US",
			"pdt": "pdt-Latn-CA",
			"ped": "ped-Latn-ZZ",
			"peo": "peo-Xpeo-IR",
			"pex": "pex-Latn-ZZ",
			"pfl": "pfl-Latn-DE",
			"phl": "phl-Arab-ZZ",
			"phn": "phn-Phnx-LB",
			"pil": "pil-Latn-ZZ",
			"pip": "pip-Latn-ZZ",
			"pka": "pka-Brah-IN",
			"pko": "pko-Latn-KE",
			"pl": "pl-Latn-PL",
			"pla": "pla-Latn-ZZ",
			"pms": "pms-Latn-IT",
			"png": "png-Latn-ZZ",
			"pnn": "pnn-Latn-ZZ",
			"pnt": "pnt-Grek-GR",
			"pon": "pon-Latn-FM",
			"ppo": "ppo-Latn-ZZ",
			"pra": "pra-Khar-PK",
			"prd": "prd-Arab-IR",
			"prg": "prg-Latn-001",
			"ps": "ps-Arab-AF",
			"pss": "pss-Latn-ZZ",
			"pt": "pt-Latn-BR",
			"ptp": "ptp-Latn-ZZ",
			"puu": "puu-Latn-GA",
			"pwa": "pwa-Latn-ZZ",
			"qu": "qu-Latn-PE",
			"quc": "quc-Latn-GT",
			"qug": "qug-Latn-EC",
			"rai": "rai-Latn-ZZ",
			"raj": "raj-Deva-IN",
			"rao": "rao-Latn-ZZ",
			"rcf": "rcf-Latn-RE",
			"rej": "rej-Latn-ID",
			"rel": "rel-Latn-ZZ",
			"res": "res-Latn-ZZ",
			"rgn": "rgn-Latn-IT",
			"rhg": "rhg-Arab-ZZ",
			"ria": "ria-Latn-IN",
			"rif": "rif-Tfng-MA",
			"rif-NL": "rif-Latn-NL",
			"rjs": "rjs-Deva-NP",
			"rkt": "rkt-Beng-BD",
			"rm": "rm-Latn-CH",
			"rmf": "rmf-Latn-FI",
			"rmo": "rmo-Latn-CH",
			"rmt": "rmt-Arab-IR",
			"rmu": "rmu-Latn-SE",
			"rn": "rn-Latn-BI",
			"rna": "rna-Latn-ZZ",
			"rng": "rng-Latn-MZ",
			"ro": "ro-Latn-RO",
			"rob": "rob-Latn-ID",
			"rof": "rof-Latn-TZ",
			"roo": "roo-Latn-ZZ",
			"rro": "rro-Latn-ZZ",
			"rtm": "rtm-Latn-FJ",
			"ru": "ru-Cyrl-RU",
			"rue": "rue-Cyrl-UA",
			"rug": "rug-Latn-SB",
			"rw": "rw-Latn-RW",
			"rwk": "rwk-Latn-TZ",
			"rwo": "rwo-Latn-ZZ",
			"ryu": "ryu-Kana-JP",
			"sa": "sa-Deva-IN",
			"saf": "saf-Latn-GH",
			"sah": "sah-Cyrl-RU",
			"saq": "saq-Latn-KE",
			"sas": "sas-Latn-ID",
			"sat": "sat-Latn-IN",
			"saz": "saz-Saur-IN",
			"sba": "sba-Latn-ZZ",
			"sbe": "sbe-Latn-ZZ",
			"sbp": "sbp-Latn-TZ",
			"sc": "sc-Latn-IT",
			"sck": "sck-Deva-IN",
			"scl": "scl-Arab-ZZ",
			"scn": "scn-Latn-IT",
			"sco": "sco-Latn-GB",
			"scs": "scs-Latn-CA",
			"sd": "sd-Arab-PK",
			"sd-Deva": "sd-Deva-IN",
			"sd-Khoj": "sd-Khoj-IN",
			"sd-Sind": "sd-Sind-IN",
			"sdc": "sdc-Latn-IT",
			"sdh": "sdh-Arab-IR",
			"se": "se-Latn-NO",
			"sef": "sef-Latn-CI",
			"seh": "seh-Latn-MZ",
			"sei": "sei-Latn-MX",
			"ses": "ses-Latn-ML",
			"sg": "sg-Latn-CF",
			"sga": "sga-Ogam-IE",
			"sgs": "sgs-Latn-LT",
			"sgw": "sgw-Ethi-ZZ",
			"sgz": "sgz-Latn-ZZ",
			"shi": "shi-Tfng-MA",
			"shk": "shk-Latn-ZZ",
			"shn": "shn-Mymr-MM",
			"shu": "shu-Arab-ZZ",
			"si": "si-Sinh-LK",
			"sid": "sid-Latn-ET",
			"sig": "sig-Latn-ZZ",
			"sil": "sil-Latn-ZZ",
			"sim": "sim-Latn-ZZ",
			"sjr": "sjr-Latn-ZZ",
			"sk": "sk-Latn-SK",
			"skc": "skc-Latn-ZZ",
			"skr": "skr-Arab-PK",
			"sks": "sks-Latn-ZZ",
			"sl": "sl-Latn-SI",
			"sld": "sld-Latn-ZZ",
			"sli": "sli-Latn-PL",
			"sll": "sll-Latn-ZZ",
			"sly": "sly-Latn-ID",
			"sm": "sm-Latn-WS",
			"sma": "sma-Latn-SE",
			"smj": "smj-Latn-SE",
			"smn": "smn-Latn-FI",
			"smp": "smp-Samr-IL",
			"smq": "smq-Latn-ZZ",
			"sms": "sms-Latn-FI",
			"sn": "sn-Latn-ZW",
			"snc": "snc-Latn-ZZ",
			"snk": "snk-Latn-ML",
			"snp": "snp-Latn-ZZ",
			"snx": "snx-Latn-ZZ",
			"sny": "sny-Latn-ZZ",
			"so": "so-Latn-SO",
			"sok": "sok-Latn-ZZ",
			"soq": "soq-Latn-ZZ",
			"sou": "sou-Thai-TH",
			"soy": "soy-Latn-ZZ",
			"spd": "spd-Latn-ZZ",
			"spl": "spl-Latn-ZZ",
			"sps": "sps-Latn-ZZ",
			"sq": "sq-Latn-AL",
			"sr": "sr-Cyrl-RS",
			"sr-ME": "sr-Latn-ME",
			"sr-RO": "sr-Latn-RO",
			"sr-RU": "sr-Latn-RU",
			"sr-TR": "sr-Latn-TR",
			"srb": "srb-Sora-IN",
			"srn": "srn-Latn-SR",
			"srr": "srr-Latn-SN",
			"srx": "srx-Deva-IN",
			"ss": "ss-Latn-ZA",
			"ssd": "ssd-Latn-ZZ",
			"ssg": "ssg-Latn-ZZ",
			"ssy": "ssy-Latn-ER",
			"st": "st-Latn-ZA",
			"stk": "stk-Latn-ZZ",
			"stq": "stq-Latn-DE",
			"su": "su-Latn-ID",
			"sua": "sua-Latn-ZZ",
			"sue": "sue-Latn-ZZ",
			"suk": "suk-Latn-TZ",
			"sur": "sur-Latn-ZZ",
			"sus": "sus-Latn-GN",
			"sv": "sv-Latn-SE",
			"sw": "sw-Latn-TZ",
			"swb": "swb-Arab-YT",
			"swc": "swc-Latn-CD",
			"swg": "swg-Latn-DE",
			"swp": "swp-Latn-ZZ",
			"swv": "swv-Deva-IN",
			"sxn": "sxn-Latn-ID",
			"sxw": "sxw-Latn-ZZ",
			"syl": "syl-Beng-BD",
			"syr": "syr-Syrc-IQ",
			"szl": "szl-Latn-PL",
			"ta": "ta-Taml-IN",
			"taj": "taj-Deva-NP",
			"tal": "tal-Latn-ZZ",
			"tan": "tan-Latn-ZZ",
			"taq": "taq-Latn-ZZ",
			"tbc": "tbc-Latn-ZZ",
			"tbd": "tbd-Latn-ZZ",
			"tbf": "tbf-Latn-ZZ",
			"tbg": "tbg-Latn-ZZ",
			"tbo": "tbo-Latn-ZZ",
			"tbw": "tbw-Latn-PH",
			"tbz": "tbz-Latn-ZZ",
			"tci": "tci-Latn-ZZ",
			"tcy": "tcy-Knda-IN",
			"tdd": "tdd-Tale-CN",
			"tdg": "tdg-Deva-NP",
			"tdh": "tdh-Deva-NP",
			"te": "te-Telu-IN",
			"ted": "ted-Latn-ZZ",
			"tem": "tem-Latn-SL",
			"teo": "teo-Latn-UG",
			"tet": "tet-Latn-TL",
			"tfi": "tfi-Latn-ZZ",
			"tg": "tg-Cyrl-TJ",
			"tg-Arab": "tg-Arab-PK",
			"tg-PK": "tg-Arab-PK",
			"tgc": "tgc-Latn-ZZ",
			"tgo": "tgo-Latn-ZZ",
			"tgu": "tgu-Latn-ZZ",
			"th": "th-Thai-TH",
			"thl": "thl-Deva-NP",
			"thq": "thq-Deva-NP",
			"thr": "thr-Deva-NP",
			"ti": "ti-Ethi-ET",
			"tif": "tif-Latn-ZZ",
			"tig": "tig-Ethi-ER",
			"tik": "tik-Latn-ZZ",
			"tim": "tim-Latn-ZZ",
			"tio": "tio-Latn-ZZ",
			"tiv": "tiv-Latn-NG",
			"tk": "tk-Latn-TM",
			"tkl": "tkl-Latn-TK",
			"tkr": "tkr-Latn-AZ",
			"tkt": "tkt-Deva-NP",
			"tl": "tl-Latn-PH",
			"tlf": "tlf-Latn-ZZ",
			"tlx": "tlx-Latn-ZZ",
			"tly": "tly-Latn-AZ",
			"tmh": "tmh-Latn-NE",
			"tmy": "tmy-Latn-ZZ",
			"tn": "tn-Latn-ZA",
			"tnh": "tnh-Latn-ZZ",
			"to": "to-Latn-TO",
			"tof": "tof-Latn-ZZ",
			"tog": "tog-Latn-MW",
			"toq": "toq-Latn-ZZ",
			"tpi": "tpi-Latn-PG",
			"tpm": "tpm-Latn-ZZ",
			"tpz": "tpz-Latn-ZZ",
			"tqo": "tqo-Latn-ZZ",
			"tr": "tr-Latn-TR",
			"tru": "tru-Latn-TR",
			"trv": "trv-Latn-TW",
			"trw": "trw-Arab-ZZ",
			"ts": "ts-Latn-ZA",
			"tsd": "tsd-Grek-GR",
			"tsf": "tsf-Deva-NP",
			"tsg": "tsg-Latn-PH",
			"tsj": "tsj-Tibt-BT",
			"tsw": "tsw-Latn-ZZ",
			"tt": "tt-Cyrl-RU",
			"ttd": "ttd-Latn-ZZ",
			"tte": "tte-Latn-ZZ",
			"ttj": "ttj-Latn-UG",
			"ttr": "ttr-Latn-ZZ",
			"tts": "tts-Thai-TH",
			"ttt": "ttt-Latn-AZ",
			"tuh": "tuh-Latn-ZZ",
			"tul": "tul-Latn-ZZ",
			"tum": "tum-Latn-MW",
			"tuq": "tuq-Latn-ZZ",
			"tvd": "tvd-Latn-ZZ",
			"tvl": "tvl-Latn-TV",
			"tvu": "tvu-Latn-ZZ",
			"twh": "twh-Latn-ZZ",
			"twq": "twq-Latn-NE",
			"txg": "txg-Tang-CN",
			"ty": "ty-Latn-PF",
			"tya": "tya-Latn-ZZ",
			"tyv": "tyv-Cyrl-RU",
			"tzm": "tzm-Latn-MA",
			"ubu": "ubu-Latn-ZZ",
			"udm": "udm-Cyrl-RU",
			"ug": "ug-Arab-CN",
			"ug-Cyrl": "ug-Cyrl-KZ",
			"ug-KZ": "ug-Cyrl-KZ",
			"ug-MN": "ug-Cyrl-MN",
			"uga": "uga-Ugar-SY",
			"uk": "uk-Cyrl-UA",
			"uli": "uli-Latn-FM",
			"umb": "umb-Latn-AO",
			"und": "en-Latn-US",
			"und-002": "en-Latn-NG",
			"und-003": "en-Latn-US",
			"und-005": "pt-Latn-BR",
			"und-009": "en-Latn-AU",
			"und-011": "en-Latn-NG",
			"und-013": "es-Latn-MX",
			"und-014": "sw-Latn-TZ",
			"und-015": "ar-Arab-EG",
			"und-017": "sw-Latn-CD",
			"und-018": "en-Latn-ZA",
			"und-019": "en-Latn-US",
			"und-021": "en-Latn-US",
			"und-029": "es-Latn-CU",
			"und-030": "zh-Hans-CN",
			"und-034": "hi-Deva-IN",
			"und-035": "id-Latn-ID",
			"und-039": "it-Latn-IT",
			"und-053": "en-Latn-AU",
			"und-054": "en-Latn-PG",
			"und-057": "en-Latn-GU",
			"und-061": "sm-Latn-WS",
			"und-142": "zh-Hans-CN",
			"und-143": "uz-Latn-UZ",
			"und-145": "ar-Arab-SA",
			"und-150": "ru-Cyrl-RU",
			"und-151": "ru-Cyrl-RU",
			"und-154": "en-Latn-GB",
			"und-155": "de-Latn-DE",
			"und-419": "es-Latn-419",
			"und-AD": "ca-Latn-AD",
			"und-Adlm": "ff-Adlm-GN",
			"und-AE": "ar-Arab-AE",
			"und-AF": "fa-Arab-AF",
			"und-Aghb": "lez-Aghb-RU",
			"und-Ahom": "aho-Ahom-IN",
			"und-AL": "sq-Latn-AL",
			"und-AM": "hy-Armn-AM",
			"und-AO": "pt-Latn-AO",
			"und-AQ": "und-Latn-AQ",
			"und-AR": "es-Latn-AR",
			"und-Arab": "ar-Arab-EG",
			"und-Arab-CC": "ms-Arab-CC",
			"und-Arab-CN": "ug-Arab-CN",
			"und-Arab-GB": "ks-Arab-GB",
			"und-Arab-ID": "ms-Arab-ID",
			"und-Arab-IN": "ur-Arab-IN",
			"und-Arab-KH": "cja-Arab-KH",
			"und-Arab-MN": "kk-Arab-MN",
			"und-Arab-MU": "ur-Arab-MU",
			"und-Arab-NG": "ha-Arab-NG",
			"und-Arab-PK": "ur-Arab-PK",
			"und-Arab-TG": "apd-Arab-TG",
			"und-Arab-TH": "mfa-Arab-TH",
			"und-Arab-TJ": "fa-Arab-TJ",
			"und-Arab-TR": "az-Arab-TR",
			"und-Arab-YT": "swb-Arab-YT",
			"und-Armi": "arc-Armi-IR",
			"und-Armn": "hy-Armn-AM",
			"und-AS": "sm-Latn-AS",
			"und-AT": "de-Latn-AT",
			"und-Avst": "ae-Avst-IR",
			"und-AW": "nl-Latn-AW",
			"und-AX": "sv-Latn-AX",
			"und-AZ": "az-Latn-AZ",
			"und-BA": "bs-Latn-BA",
			"und-Bali": "ban-Bali-ID",
			"und-Bamu": "bax-Bamu-CM",
			"und-Bass": "bsq-Bass-LR",
			"und-Batk": "bbc-Batk-ID",
			"und-BD": "bn-Beng-BD",
			"und-BE": "nl-Latn-BE",
			"und-Beng": "bn-Beng-BD",
			"und-BF": "fr-Latn-BF",
			"und-BG": "bg-Cyrl-BG",
			"und-BH": "ar-Arab-BH",
			"und-Bhks": "sa-Bhks-IN",
			"und-BI": "rn-Latn-BI",
			"und-BJ": "fr-Latn-BJ",
			"und-BL": "fr-Latn-BL",
			"und-BN": "ms-Latn-BN",
			"und-BO": "es-Latn-BO",
			"und-Bopo": "zh-Bopo-TW",
			"und-BQ": "pap-Latn-BQ",
			"und-BR": "pt-Latn-BR",
			"und-Brah": "pka-Brah-IN",
			"und-Brai": "fr-Brai-FR",
			"und-BT": "dz-Tibt-BT",
			"und-Bugi": "bug-Bugi-ID",
			"und-Buhd": "bku-Buhd-PH",
			"und-BV": "und-Latn-BV",
			"und-BY": "be-Cyrl-BY",
			"und-Cakm": "ccp-Cakm-BD",
			"und-Cans": "cr-Cans-CA",
			"und-Cari": "xcr-Cari-TR",
			"und-CD": "sw-Latn-CD",
			"und-CF": "fr-Latn-CF",
			"und-CG": "fr-Latn-CG",
			"und-CH": "de-Latn-CH",
			"und-Cham": "cjm-Cham-VN",
			"und-Cher": "chr-Cher-US",
			"und-CI": "fr-Latn-CI",
			"und-CL": "es-Latn-CL",
			"und-CM": "fr-Latn-CM",
			"und-CN": "zh-Hans-CN",
			"und-CO": "es-Latn-CO",
			"und-Copt": "cop-Copt-EG",
			"und-CP": "und-Latn-CP",
			"und-Cprt": "grc-Cprt-CY",
			"und-CR": "es-Latn-CR",
			"und-CU": "es-Latn-CU",
			"und-CV": "pt-Latn-CV",
			"und-CW": "pap-Latn-CW",
			"und-CY": "el-Grek-CY",
			"und-Cyrl": "ru-Cyrl-RU",
			"und-Cyrl-AL": "mk-Cyrl-AL",
			"und-Cyrl-BA": "sr-Cyrl-BA",
			"und-Cyrl-GE": "ab-Cyrl-GE",
			"und-Cyrl-GR": "mk-Cyrl-GR",
			"und-Cyrl-MD": "uk-Cyrl-MD",
			"und-Cyrl-PL": "be-Cyrl-PL",
			"und-Cyrl-RO": "bg-Cyrl-RO",
			"und-Cyrl-SK": "uk-Cyrl-SK",
			"und-Cyrl-TR": "kbd-Cyrl-TR",
			"und-Cyrl-XK": "sr-Cyrl-XK",
			"und-CZ": "cs-Latn-CZ",
			"und-DE": "de-Latn-DE",
			"und-Deva": "hi-Deva-IN",
			"und-Deva-BT": "ne-Deva-BT",
			"und-Deva-FJ": "hif-Deva-FJ",
			"und-Deva-MU": "bho-Deva-MU",
			"und-Deva-PK": "btv-Deva-PK",
			"und-DJ": "aa-Latn-DJ",
			"und-DK": "da-Latn-DK",
			"und-DO": "es-Latn-DO",
			"und-Dupl": "fr-Dupl-FR",
			"und-DZ": "ar-Arab-DZ",
			"und-EA": "es-Latn-EA",
			"und-EC": "es-Latn-EC",
			"und-EE": "et-Latn-EE",
			"und-EG": "ar-Arab-EG",
			"und-Egyp": "egy-Egyp-EG",
			"und-EH": "ar-Arab-EH",
			"und-Elba": "sq-Elba-AL",
			"und-ER": "ti-Ethi-ER",
			"und-ES": "es-Latn-ES",
			"und-ET": "am-Ethi-ET",
			"und-Ethi": "am-Ethi-ET",
			"und-EU": "en-Latn-GB",
			"und-EZ": "de-Latn-EZ",
			"und-FI": "fi-Latn-FI",
			"und-FO": "fo-Latn-FO",
			"und-FR": "fr-Latn-FR",
			"und-GA": "fr-Latn-GA",
			"und-GE": "ka-Geor-GE",
			"und-Geor": "ka-Geor-GE",
			"und-GF": "fr-Latn-GF",
			"und-GH": "ak-Latn-GH",
			"und-GL": "kl-Latn-GL",
			"und-Glag": "cu-Glag-BG",
			"und-GN": "fr-Latn-GN",
			"und-Goth": "got-Goth-UA",
			"und-GP": "fr-Latn-GP",
			"und-GQ": "es-Latn-GQ",
			"und-GR": "el-Grek-GR",
			"und-Gran": "sa-Gran-IN",
			"und-Grek": "el-Grek-GR",
			"und-Grek-TR": "bgx-Grek-TR",
			"und-GS": "und-Latn-GS",
			"und-GT": "es-Latn-GT",
			"und-Gujr": "gu-Gujr-IN",
			"und-Guru": "pa-Guru-IN",
			"und-GW": "pt-Latn-GW",
			"und-Hanb": "zh-Hanb-TW",
			"und-Hang": "ko-Hang-KR",
			"und-Hani": "zh-Hani-CN",
			"und-Hano": "hnn-Hano-PH",
			"und-Hans": "zh-Hans-CN",
			"und-Hant": "zh-Hant-TW",
			"und-Hant-CN": "yue-Hant-CN",
			"und-Hatr": "mis-Hatr-IQ",
			"und-Hebr": "he-Hebr-IL",
			"und-Hebr-CA": "yi-Hebr-CA",
			"und-Hebr-GB": "yi-Hebr-GB",
			"und-Hebr-SE": "yi-Hebr-SE",
			"und-Hebr-UA": "yi-Hebr-UA",
			"und-Hebr-US": "yi-Hebr-US",
			"und-Hira": "ja-Hira-JP",
			"und-HK": "zh-Hant-HK",
			"und-Hluw": "hlu-Hluw-TR",
			"und-HM": "und-Latn-HM",
			"und-Hmng": "hnj-Hmng-LA",
			"und-HN": "es-Latn-HN",
			"und-HR": "hr-Latn-HR",
			"und-HT": "ht-Latn-HT",
			"und-HU": "hu-Latn-HU",
			"und-Hung": "hu-Hung-HU",
			"und-IC": "es-Latn-IC",
			"und-ID": "id-Latn-ID",
			"und-IL": "he-Hebr-IL",
			"und-IN": "hi-Deva-IN",
			"und-IQ": "ar-Arab-IQ",
			"und-IR": "fa-Arab-IR",
			"und-IS": "is-Latn-IS",
			"und-IT": "it-Latn-IT",
			"und-Ital": "ett-Ital-IT",
			"und-Jamo": "ko-Jamo-KR",
			"und-Java": "jv-Java-ID",
			"und-JO": "ar-Arab-JO",
			"und-JP": "ja-Jpan-JP",
			"und-Jpan": "ja-Jpan-JP",
			"und-Kali": "eky-Kali-MM",
			"und-Kana": "ja-Kana-JP",
			"und-KE": "sw-Latn-KE",
			"und-KG": "ky-Cyrl-KG",
			"und-KH": "km-Khmr-KH",
			"und-Khar": "pra-Khar-PK",
			"und-Khmr": "km-Khmr-KH",
			"und-Khoj": "sd-Khoj-IN",
			"und-KM": "ar-Arab-KM",
			"und-Knda": "kn-Knda-IN",
			"und-Kore": "ko-Kore-KR",
			"und-KP": "ko-Kore-KP",
			"und-KR": "ko-Kore-KR",
			"und-Kthi": "bho-Kthi-IN",
			"und-KW": "ar-Arab-KW",
			"und-KZ": "ru-Cyrl-KZ",
			"und-LA": "lo-Laoo-LA",
			"und-Lana": "nod-Lana-TH",
			"und-Laoo": "lo-Laoo-LA",
			"und-Latn-AF": "tk-Latn-AF",
			"und-Latn-AM": "ku-Latn-AM",
			"und-Latn-CN": "za-Latn-CN",
			"und-Latn-CY": "tr-Latn-CY",
			"und-Latn-DZ": "fr-Latn-DZ",
			"und-Latn-ET": "en-Latn-ET",
			"und-Latn-GE": "ku-Latn-GE",
			"und-Latn-IR": "tk-Latn-IR",
			"und-Latn-KM": "fr-Latn-KM",
			"und-Latn-MA": "fr-Latn-MA",
			"und-Latn-MK": "sq-Latn-MK",
			"und-Latn-MM": "kac-Latn-MM",
			"und-Latn-MO": "pt-Latn-MO",
			"und-Latn-MR": "fr-Latn-MR",
			"und-Latn-RU": "krl-Latn-RU",
			"und-Latn-SY": "fr-Latn-SY",
			"und-Latn-TN": "fr-Latn-TN",
			"und-Latn-TW": "trv-Latn-TW",
			"und-Latn-UA": "pl-Latn-UA",
			"und-LB": "ar-Arab-LB",
			"und-Lepc": "lep-Lepc-IN",
			"und-LI": "de-Latn-LI",
			"und-Limb": "lif-Limb-IN",
			"und-Lina": "lab-Lina-GR",
			"und-Linb": "grc-Linb-GR",
			"und-Lisu": "lis-Lisu-CN",
			"und-LK": "si-Sinh-LK",
			"und-LS": "st-Latn-LS",
			"und-LT": "lt-Latn-LT",
			"und-LU": "fr-Latn-LU",
			"und-LV": "lv-Latn-LV",
			"und-LY": "ar-Arab-LY",
			"und-Lyci": "xlc-Lyci-TR",
			"und-Lydi": "xld-Lydi-TR",
			"und-MA": "ar-Arab-MA",
			"und-Mahj": "hi-Mahj-IN",
			"und-Mand": "myz-Mand-IR",
			"und-Mani": "xmn-Mani-CN",
			"und-Marc": "bo-Marc-CN",
			"und-MC": "fr-Latn-MC",
			"und-MD": "ro-Latn-MD",
			"und-ME": "sr-Latn-ME",
			"und-Mend": "men-Mend-SL",
			"und-Merc": "xmr-Merc-SD",
			"und-Mero": "xmr-Mero-SD",
			"und-MF": "fr-Latn-MF",
			"und-MG": "mg-Latn-MG",
			"und-MK": "mk-Cyrl-MK",
			"und-ML": "bm-Latn-ML",
			"und-Mlym": "ml-Mlym-IN",
			"und-MM": "my-Mymr-MM",
			"und-MN": "mn-Cyrl-MN",
			"und-MO": "zh-Hant-MO",
			"und-Modi": "mr-Modi-IN",
			"und-Mong": "mn-Mong-CN",
			"und-MQ": "fr-Latn-MQ",
			"und-MR": "ar-Arab-MR",
			"und-Mroo": "mro-Mroo-BD",
			"und-MT": "mt-Latn-MT",
			"und-Mtei": "mni-Mtei-IN",
			"und-MU": "mfe-Latn-MU",
			"und-Mult": "skr-Mult-PK",
			"und-MV": "dv-Thaa-MV",
			"und-MX": "es-Latn-MX",
			"und-MY": "ms-Latn-MY",
			"und-Mymr": "my-Mymr-MM",
			"und-Mymr-IN": "kht-Mymr-IN",
			"und-Mymr-TH": "mnw-Mymr-TH",
			"und-MZ": "pt-Latn-MZ",
			"und-NA": "af-Latn-NA",
			"und-Narb": "xna-Narb-SA",
			"und-Nbat": "arc-Nbat-JO",
			"und-NC": "fr-Latn-NC",
			"und-NE": "ha-Latn-NE",
			"und-Newa": "new-Newa-NP",
			"und-NI": "es-Latn-NI",
			"und-Nkoo": "man-Nkoo-GN",
			"und-NL": "nl-Latn-NL",
			"und-NO": "nb-Latn-NO",
			"und-NP": "ne-Deva-NP",
			"und-Ogam": "sga-Ogam-IE",
			"und-Olck": "sat-Olck-IN",
			"und-OM": "ar-Arab-OM",
			"und-Orkh": "otk-Orkh-MN",
			"und-Orya": "or-Orya-IN",
			"und-Osge": "osa-Osge-US",
			"und-Osma": "so-Osma-SO",
			"und-PA": "es-Latn-PA",
			"und-Palm": "arc-Palm-SY",
			"und-Pauc": "ctd-Pauc-MM",
			"und-PE": "es-Latn-PE",
			"und-Perm": "kv-Perm-RU",
			"und-PF": "fr-Latn-PF",
			"und-PG": "tpi-Latn-PG",
			"und-PH": "fil-Latn-PH",
			"und-Phag": "lzh-Phag-CN",
			"und-Phli": "pal-Phli-IR",
			"und-Phlp": "pal-Phlp-CN",
			"und-Phnx": "phn-Phnx-LB",
			"und-PK": "ur-Arab-PK",
			"und-PL": "pl-Latn-PL",
			"und-Plrd": "hmd-Plrd-CN",
			"und-PM": "fr-Latn-PM",
			"und-PR": "es-Latn-PR",
			"und-Prti": "xpr-Prti-IR",
			"und-PS": "ar-Arab-PS",
			"und-PT": "pt-Latn-PT",
			"und-PW": "pau-Latn-PW",
			"und-PY": "gn-Latn-PY",
			"und-QA": "ar-Arab-QA",
			"und-QO": "en-Latn-IO",
			"und-RE": "fr-Latn-RE",
			"und-Rjng": "rej-Rjng-ID",
			"und-RO": "ro-Latn-RO",
			"und-RS": "sr-Cyrl-RS",
			"und-RU": "ru-Cyrl-RU",
			"und-Runr": "non-Runr-SE",
			"und-RW": "rw-Latn-RW",
			"und-SA": "ar-Arab-SA",
			"und-Samr": "smp-Samr-IL",
			"und-Sarb": "xsa-Sarb-YE",
			"und-Saur": "saz-Saur-IN",
			"und-SC": "fr-Latn-SC",
			"und-SD": "ar-Arab-SD",
			"und-SE": "sv-Latn-SE",
			"und-Sgnw": "ase-Sgnw-US",
			"und-Shaw": "en-Shaw-GB",
			"und-Shrd": "sa-Shrd-IN",
			"und-SI": "sl-Latn-SI",
			"und-Sidd": "sa-Sidd-IN",
			"und-Sind": "sd-Sind-IN",
			"und-Sinh": "si-Sinh-LK",
			"und-SJ": "nb-Latn-SJ",
			"und-SK": "sk-Latn-SK",
			"und-SM": "it-Latn-SM",
			"und-SN": "fr-Latn-SN",
			"und-SO": "so-Latn-SO",
			"und-Sora": "srb-Sora-IN",
			"und-SR": "nl-Latn-SR",
			"und-ST": "pt-Latn-ST",
			"und-Sund": "su-Sund-ID",
			"und-SV": "es-Latn-SV",
			"und-SY": "ar-Arab-SY",
			"und-Sylo": "syl-Sylo-BD",
			"und-Syrc": "syr-Syrc-IQ",
			"und-Tagb": "tbw-Tagb-PH",
			"und-Takr": "doi-Takr-IN",
			"und-Tale": "tdd-Tale-CN",
			"und-Talu": "khb-Talu-CN",
			"und-Taml": "ta-Taml-IN",
			"und-Tang": "txg-Tang-CN",
			"und-Tavt": "blt-Tavt-VN",
			"und-TD": "fr-Latn-TD",
			"und-Telu": "te-Telu-IN",
			"und-TF": "fr-Latn-TF",
			"und-Tfng": "zgh-Tfng-MA",
			"und-TG": "fr-Latn-TG",
			"und-Tglg": "fil-Tglg-PH",
			"und-TH": "th-Thai-TH",
			"und-Thaa": "dv-Thaa-MV",
			"und-Thai": "th-Thai-TH",
			"und-Thai-CN": "lcp-Thai-CN",
			"und-Thai-KH": "kdt-Thai-KH",
			"und-Thai-LA": "kdt-Thai-LA",
			"und-Tibt": "bo-Tibt-CN",
			"und-Tirh": "mai-Tirh-IN",
			"und-TJ": "tg-Cyrl-TJ",
			"und-TK": "tkl-Latn-TK",
			"und-TL": "pt-Latn-TL",
			"und-TM": "tk-Latn-TM",
			"und-TN": "ar-Arab-TN",
			"und-TO": "to-Latn-TO",
			"und-TR": "tr-Latn-TR",
			"und-TV": "tvl-Latn-TV",
			"und-TW": "zh-Hant-TW",
			"und-TZ": "sw-Latn-TZ",
			"und-UA": "uk-Cyrl-UA",
			"und-UG": "sw-Latn-UG",
			"und-Ugar": "uga-Ugar-SY",
			"und-UY": "es-Latn-UY",
			"und-UZ": "uz-Latn-UZ",
			"und-VA": "it-Latn-VA",
			"und-Vaii": "vai-Vaii-LR",
			"und-VE": "es-Latn-VE",
			"und-VN": "vi-Latn-VN",
			"und-VU": "bi-Latn-VU",
			"und-Wara": "hoc-Wara-IN",
			"und-WF": "fr-Latn-WF",
			"und-WS": "sm-Latn-WS",
			"und-XK": "sq-Latn-XK",
			"und-Xpeo": "peo-Xpeo-IR",
			"und-Xsux": "akk-Xsux-IQ",
			"und-YE": "ar-Arab-YE",
			"und-Yiii": "ii-Yiii-CN",
			"und-YT": "fr-Latn-YT",
			"und-ZW": "sn-Latn-ZW",
			"unr": "unr-Beng-IN",
			"unr-Deva": "unr-Deva-NP",
			"unr-NP": "unr-Deva-NP",
			"unx": "unx-Beng-IN",
			"ur": "ur-Arab-PK",
			"uri": "uri-Latn-ZZ",
			"urt": "urt-Latn-ZZ",
			"urw": "urw-Latn-ZZ",
			"usa": "usa-Latn-ZZ",
			"utr": "utr-Latn-ZZ",
			"uvh": "uvh-Latn-ZZ",
			"uvl": "uvl-Latn-ZZ",
			"uz": "uz-Latn-UZ",
			"uz-AF": "uz-Arab-AF",
			"uz-Arab": "uz-Arab-AF",
			"uz-CN": "uz-Cyrl-CN",
			"vag": "vag-Latn-ZZ",
			"vai": "vai-Vaii-LR",
			"van": "van-Latn-ZZ",
			"ve": "ve-Latn-ZA",
			"vec": "vec-Latn-IT",
			"vep": "vep-Latn-RU",
			"vi": "vi-Latn-VN",
			"vic": "vic-Latn-SX",
			"viv": "viv-Latn-ZZ",
			"vls": "vls-Latn-BE",
			"vmf": "vmf-Latn-DE",
			"vmw": "vmw-Latn-MZ",
			"vo": "vo-Latn-001",
			"vot": "vot-Latn-RU",
			"vro": "vro-Latn-EE",
			"vun": "vun-Latn-TZ",
			"vut": "vut-Latn-ZZ",
			"wa": "wa-Latn-BE",
			"wae": "wae-Latn-CH",
			"waj": "waj-Latn-ZZ",
			"wal": "wal-Ethi-ET",
			"wan": "wan-Latn-ZZ",
			"war": "war-Latn-PH",
			"wbp": "wbp-Latn-AU",
			"wbq": "wbq-Telu-IN",
			"wbr": "wbr-Deva-IN",
			"wci": "wci-Latn-ZZ",
			"wer": "wer-Latn-ZZ",
			"wgi": "wgi-Latn-ZZ",
			"whg": "whg-Latn-ZZ",
			"wib": "wib-Latn-ZZ",
			"wiu": "wiu-Latn-ZZ",
			"wiv": "wiv-Latn-ZZ",
			"wja": "wja-Latn-ZZ",
			"wji": "wji-Latn-ZZ",
			"wls": "wls-Latn-WF",
			"wmo": "wmo-Latn-ZZ",
			"wnc": "wnc-Latn-ZZ",
			"wni": "wni-Arab-KM",
			"wnu": "wnu-Latn-ZZ",
			"wo": "wo-Latn-SN",
			"wob": "wob-Latn-ZZ",
			"wos": "wos-Latn-ZZ",
			"wrs": "wrs-Latn-ZZ",
			"wsk": "wsk-Latn-ZZ",
			"wtm": "wtm-Deva-IN",
			"wuu": "wuu-Hans-CN",
			"wuv": "wuv-Latn-ZZ",
			"wwa": "wwa-Latn-ZZ",
			"xav": "xav-Latn-BR",
			"xbi": "xbi-Latn-ZZ",
			"xcr": "xcr-Cari-TR",
			"xes": "xes-Latn-ZZ",
			"xh": "xh-Latn-ZA",
			"xla": "xla-Latn-ZZ",
			"xlc": "xlc-Lyci-TR",
			"xld": "xld-Lydi-TR",
			"xmf": "xmf-Geor-GE",
			"xmn": "xmn-Mani-CN",
			"xmr": "xmr-Merc-SD",
			"xna": "xna-Narb-SA",
			"xnr": "xnr-Deva-IN",
			"xog": "xog-Latn-UG",
			"xon": "xon-Latn-ZZ",
			"xpr": "xpr-Prti-IR",
			"xrb": "xrb-Latn-ZZ",
			"xsa": "xsa-Sarb-YE",
			"xsi": "xsi-Latn-ZZ",
			"xsm": "xsm-Latn-ZZ",
			"xsr": "xsr-Deva-NP",
			"xwe": "xwe-Latn-ZZ",
			"yam": "yam-Latn-ZZ",
			"yao": "yao-Latn-MZ",
			"yap": "yap-Latn-FM",
			"yas": "yas-Latn-ZZ",
			"yat": "yat-Latn-ZZ",
			"yav": "yav-Latn-CM",
			"yay": "yay-Latn-ZZ",
			"yaz": "yaz-Latn-ZZ",
			"yba": "yba-Latn-ZZ",
			"ybb": "ybb-Latn-CM",
			"yby": "yby-Latn-ZZ",
			"yer": "yer-Latn-ZZ",
			"ygr": "ygr-Latn-ZZ",
			"ygw": "ygw-Latn-ZZ",
			"yi": "yi-Hebr-001",
			"yko": "yko-Latn-ZZ",
			"yle": "yle-Latn-ZZ",
			"ylg": "ylg-Latn-ZZ",
			"yll": "yll-Latn-ZZ",
			"yml": "yml-Latn-ZZ",
			"yo": "yo-Latn-NG",
			"yon": "yon-Latn-ZZ",
			"yrb": "yrb-Latn-ZZ",
			"yre": "yre-Latn-ZZ",
			"yrl": "yrl-Latn-BR",
			"yss": "yss-Latn-ZZ",
			"yua": "yua-Latn-MX",
			"yue": "yue-Hant-HK",
			"yue-CN": "yue-Hans-CN",
			"yue-Hans": "yue-Hans-CN",
			"yuj": "yuj-Latn-ZZ",
			"yut": "yut-Latn-ZZ",
			"yuw": "yuw-Latn-ZZ",
			"za": "za-Latn-CN",
			"zag": "zag-Latn-SD",
			"zdj": "zdj-Arab-KM",
			"zea": "zea-Latn-NL",
			"zgh": "zgh-Tfng-MA",
			"zh": "zh-Hans-CN",
			"zh-AU": "zh-Hant-AU",
			"zh-BN": "zh-Hant-BN",
			"zh-Bopo": "zh-Bopo-TW",
			"zh-GB": "zh-Hant-GB",
			"zh-GF": "zh-Hant-GF",
			"zh-Hanb": "zh-Hanb-TW",
			"zh-Hant": "zh-Hant-TW",
			"zh-HK": "zh-Hant-HK",
			"zh-ID": "zh-Hant-ID",
			"zh-MO": "zh-Hant-MO",
			"zh-MY": "zh-Hant-MY",
			"zh-PA": "zh-Hant-PA",
			"zh-PF": "zh-Hant-PF",
			"zh-PH": "zh-Hant-PH",
			"zh-SR": "zh-Hant-SR",
			"zh-TH": "zh-Hant-TH",
			"zh-TW": "zh-Hant-TW",
			"zh-US": "zh-Hant-US",
			"zh-VN": "zh-Hant-VN",
			"zia": "zia-Latn-ZZ",
			"zlm": "zlm-Latn-TG",
			"zmi": "zmi-Latn-MY",
			"zne": "zne-Latn-ZZ",
			"zu": "zu-Latn-ZA",
			"zza": "zza-Latn-TR"
		}
	}
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = {
	"supplemental": {
		"version": {
			"_number": "$Revision: 12805 $",
			"_unicodeVersion": "9.0.0",
			"_cldrVersion": "30.0.3"
		},
		"plurals-type-cardinal": {
			"af": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"ak": {
				"pluralRule-count-one": "n = 0..1 @integer 0, 1 @decimal 0.0, 1.0, 0.00, 1.00, 0.000, 1.000, 0.0000, 1.0000",
				"pluralRule-count-other": " @integer 2~17, 100, 1000, 10000, 100000, 1000000, … @decimal 0.1~0.9, 1.1~1.7, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"am": {
				"pluralRule-count-one": "i = 0 or n = 1 @integer 0, 1 @decimal 0.0~1.0, 0.00~0.04",
				"pluralRule-count-other": " @integer 2~17, 100, 1000, 10000, 100000, 1000000, … @decimal 1.1~2.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"ar": {
				"pluralRule-count-zero": "n = 0 @integer 0 @decimal 0.0, 0.00, 0.000, 0.0000",
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-two": "n = 2 @integer 2 @decimal 2.0, 2.00, 2.000, 2.0000",
				"pluralRule-count-few": "n % 100 = 3..10 @integer 3~10, 103~110, 1003, … @decimal 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 103.0, 1003.0, …",
				"pluralRule-count-many": "n % 100 = 11..99 @integer 11~26, 111, 1011, … @decimal 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 111.0, 1011.0, …",
				"pluralRule-count-other": " @integer 100~102, 200~202, 300~302, 400~402, 500~502, 600, 1000, 10000, 100000, 1000000, … @decimal 0.1~0.9, 1.1~1.7, 10.1, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"ars": {
				"pluralRule-count-zero": "n = 0 @integer 0 @decimal 0.0, 0.00, 0.000, 0.0000",
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-two": "n = 2 @integer 2 @decimal 2.0, 2.00, 2.000, 2.0000",
				"pluralRule-count-few": "n % 100 = 3..10 @integer 3~10, 103~110, 1003, … @decimal 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 103.0, 1003.0, …",
				"pluralRule-count-many": "n % 100 = 11..99 @integer 11~26, 111, 1011, … @decimal 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 111.0, 1011.0, …",
				"pluralRule-count-other": " @integer 100~102, 200~202, 300~302, 400~402, 500~502, 600, 1000, 10000, 100000, 1000000, … @decimal 0.1~0.9, 1.1~1.7, 10.1, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"as": {
				"pluralRule-count-one": "i = 0 or n = 1 @integer 0, 1 @decimal 0.0~1.0, 0.00~0.04",
				"pluralRule-count-other": " @integer 2~17, 100, 1000, 10000, 100000, 1000000, … @decimal 1.1~2.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"asa": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"ast": {
				"pluralRule-count-one": "i = 1 and v = 0 @integer 1",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"az": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"be": {
				"pluralRule-count-one": "n % 10 = 1 and n % 100 != 11 @integer 1, 21, 31, 41, 51, 61, 71, 81, 101, 1001, … @decimal 1.0, 21.0, 31.0, 41.0, 51.0, 61.0, 71.0, 81.0, 101.0, 1001.0, …",
				"pluralRule-count-few": "n % 10 = 2..4 and n % 100 != 12..14 @integer 2~4, 22~24, 32~34, 42~44, 52~54, 62, 102, 1002, … @decimal 2.0, 3.0, 4.0, 22.0, 23.0, 24.0, 32.0, 33.0, 102.0, 1002.0, …",
				"pluralRule-count-many": "n % 10 = 0 or n % 10 = 5..9 or n % 100 = 11..14 @integer 0, 5~19, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …",
				"pluralRule-count-other": "   @decimal 0.1~0.9, 1.1~1.7, 10.1, 100.1, 1000.1, …"
			},
			"bem": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"bez": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"bg": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"bh": {
				"pluralRule-count-one": "n = 0..1 @integer 0, 1 @decimal 0.0, 1.0, 0.00, 1.00, 0.000, 1.000, 0.0000, 1.0000",
				"pluralRule-count-other": " @integer 2~17, 100, 1000, 10000, 100000, 1000000, … @decimal 0.1~0.9, 1.1~1.7, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"bm": {
				"pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"bn": {
				"pluralRule-count-one": "i = 0 or n = 1 @integer 0, 1 @decimal 0.0~1.0, 0.00~0.04",
				"pluralRule-count-other": " @integer 2~17, 100, 1000, 10000, 100000, 1000000, … @decimal 1.1~2.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"bo": {
				"pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"br": {
				"pluralRule-count-one": "n % 10 = 1 and n % 100 != 11,71,91 @integer 1, 21, 31, 41, 51, 61, 81, 101, 1001, … @decimal 1.0, 21.0, 31.0, 41.0, 51.0, 61.0, 81.0, 101.0, 1001.0, …",
				"pluralRule-count-two": "n % 10 = 2 and n % 100 != 12,72,92 @integer 2, 22, 32, 42, 52, 62, 82, 102, 1002, … @decimal 2.0, 22.0, 32.0, 42.0, 52.0, 62.0, 82.0, 102.0, 1002.0, …",
				"pluralRule-count-few": "n % 10 = 3..4,9 and n % 100 != 10..19,70..79,90..99 @integer 3, 4, 9, 23, 24, 29, 33, 34, 39, 43, 44, 49, 103, 1003, … @decimal 3.0, 4.0, 9.0, 23.0, 24.0, 29.0, 33.0, 34.0, 103.0, 1003.0, …",
				"pluralRule-count-many": "n != 0 and n % 1000000 = 0 @integer 1000000, … @decimal 1000000.0, 1000000.00, 1000000.000, …",
				"pluralRule-count-other": " @integer 0, 5~8, 10~20, 100, 1000, 10000, 100000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, …"
			},
			"brx": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"bs": {
				"pluralRule-count-one": "v = 0 and i % 10 = 1 and i % 100 != 11 or f % 10 = 1 and f % 100 != 11 @integer 1, 21, 31, 41, 51, 61, 71, 81, 101, 1001, … @decimal 0.1, 1.1, 2.1, 3.1, 4.1, 5.1, 6.1, 7.1, 10.1, 100.1, 1000.1, …",
				"pluralRule-count-few": "v = 0 and i % 10 = 2..4 and i % 100 != 12..14 or f % 10 = 2..4 and f % 100 != 12..14 @integer 2~4, 22~24, 32~34, 42~44, 52~54, 62, 102, 1002, … @decimal 0.2~0.4, 1.2~1.4, 2.2~2.4, 3.2~3.4, 4.2~4.4, 5.2, 10.2, 100.2, 1000.2, …",
				"pluralRule-count-other": " @integer 0, 5~19, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0, 0.5~1.0, 1.5~2.0, 2.5~2.7, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"ca": {
				"pluralRule-count-one": "i = 1 and v = 0 @integer 1",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"ce": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"cgg": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"chr": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"ckb": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"cs": {
				"pluralRule-count-one": "i = 1 and v = 0 @integer 1",
				"pluralRule-count-few": "i = 2..4 and v = 0 @integer 2~4",
				"pluralRule-count-many": "v != 0   @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …",
				"pluralRule-count-other": " @integer 0, 5~19, 100, 1000, 10000, 100000, 1000000, …"
			},
			"cy": {
				"pluralRule-count-zero": "n = 0 @integer 0 @decimal 0.0, 0.00, 0.000, 0.0000",
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-two": "n = 2 @integer 2 @decimal 2.0, 2.00, 2.000, 2.0000",
				"pluralRule-count-few": "n = 3 @integer 3 @decimal 3.0, 3.00, 3.000, 3.0000",
				"pluralRule-count-many": "n = 6 @integer 6 @decimal 6.0, 6.00, 6.000, 6.0000",
				"pluralRule-count-other": " @integer 4, 5, 7~20, 100, 1000, 10000, 100000, 1000000, … @decimal 0.1~0.9, 1.1~1.7, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"da": {
				"pluralRule-count-one": "n = 1 or t != 0 and i = 0,1 @integer 1 @decimal 0.1~1.6",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0, 2.0~3.4, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"de": {
				"pluralRule-count-one": "i = 1 and v = 0 @integer 1",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"dsb": {
				"pluralRule-count-one": "v = 0 and i % 100 = 1 or f % 100 = 1 @integer 1, 101, 201, 301, 401, 501, 601, 701, 1001, … @decimal 0.1, 1.1, 2.1, 3.1, 4.1, 5.1, 6.1, 7.1, 10.1, 100.1, 1000.1, …",
				"pluralRule-count-two": "v = 0 and i % 100 = 2 or f % 100 = 2 @integer 2, 102, 202, 302, 402, 502, 602, 702, 1002, … @decimal 0.2, 1.2, 2.2, 3.2, 4.2, 5.2, 6.2, 7.2, 10.2, 100.2, 1000.2, …",
				"pluralRule-count-few": "v = 0 and i % 100 = 3..4 or f % 100 = 3..4 @integer 3, 4, 103, 104, 203, 204, 303, 304, 403, 404, 503, 504, 603, 604, 703, 704, 1003, … @decimal 0.3, 0.4, 1.3, 1.4, 2.3, 2.4, 3.3, 3.4, 4.3, 4.4, 5.3, 5.4, 6.3, 6.4, 7.3, 7.4, 10.3, 100.3, 1000.3, …",
				"pluralRule-count-other": " @integer 0, 5~19, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0, 0.5~1.0, 1.5~2.0, 2.5~2.7, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"dv": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"dz": {
				"pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"ee": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"el": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"en": {
				"pluralRule-count-one": "i = 1 and v = 0 @integer 1",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"eo": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"es": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"et": {
				"pluralRule-count-one": "i = 1 and v = 0 @integer 1",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"eu": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"fa": {
				"pluralRule-count-one": "i = 0 or n = 1 @integer 0, 1 @decimal 0.0~1.0, 0.00~0.04",
				"pluralRule-count-other": " @integer 2~17, 100, 1000, 10000, 100000, 1000000, … @decimal 1.1~2.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"ff": {
				"pluralRule-count-one": "i = 0,1 @integer 0, 1 @decimal 0.0~1.5",
				"pluralRule-count-other": " @integer 2~17, 100, 1000, 10000, 100000, 1000000, … @decimal 2.0~3.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"fi": {
				"pluralRule-count-one": "i = 1 and v = 0 @integer 1",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"fil": {
				"pluralRule-count-one": "v = 0 and i = 1,2,3 or v = 0 and i % 10 != 4,6,9 or v != 0 and f % 10 != 4,6,9 @integer 0~3, 5, 7, 8, 10~13, 15, 17, 18, 20, 21, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.3, 0.5, 0.7, 0.8, 1.0~1.3, 1.5, 1.7, 1.8, 2.0, 2.1, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …",
				"pluralRule-count-other": " @integer 4, 6, 9, 14, 16, 19, 24, 26, 104, 1004, … @decimal 0.4, 0.6, 0.9, 1.4, 1.6, 1.9, 2.4, 2.6, 10.4, 100.4, 1000.4, …"
			},
			"fo": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"fr": {
				"pluralRule-count-one": "i = 0,1 @integer 0, 1 @decimal 0.0~1.5",
				"pluralRule-count-other": " @integer 2~17, 100, 1000, 10000, 100000, 1000000, … @decimal 2.0~3.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"fur": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"fy": {
				"pluralRule-count-one": "i = 1 and v = 0 @integer 1",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"ga": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-two": "n = 2 @integer 2 @decimal 2.0, 2.00, 2.000, 2.0000",
				"pluralRule-count-few": "n = 3..6 @integer 3~6 @decimal 3.0, 4.0, 5.0, 6.0, 3.00, 4.00, 5.00, 6.00, 3.000, 4.000, 5.000, 6.000, 3.0000, 4.0000, 5.0000, 6.0000",
				"pluralRule-count-many": "n = 7..10 @integer 7~10 @decimal 7.0, 8.0, 9.0, 10.0, 7.00, 8.00, 9.00, 10.00, 7.000, 8.000, 9.000, 10.000, 7.0000, 8.0000, 9.0000, 10.0000",
				"pluralRule-count-other": " @integer 0, 11~25, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.1, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"gd": {
				"pluralRule-count-one": "n = 1,11 @integer 1, 11 @decimal 1.0, 11.0, 1.00, 11.00, 1.000, 11.000, 1.0000",
				"pluralRule-count-two": "n = 2,12 @integer 2, 12 @decimal 2.0, 12.0, 2.00, 12.00, 2.000, 12.000, 2.0000",
				"pluralRule-count-few": "n = 3..10,13..19 @integer 3~10, 13~19 @decimal 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 3.00",
				"pluralRule-count-other": " @integer 0, 20~34, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.1, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"gl": {
				"pluralRule-count-one": "i = 1 and v = 0 @integer 1",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"gsw": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"gu": {
				"pluralRule-count-one": "i = 0 or n = 1 @integer 0, 1 @decimal 0.0~1.0, 0.00~0.04",
				"pluralRule-count-other": " @integer 2~17, 100, 1000, 10000, 100000, 1000000, … @decimal 1.1~2.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"guw": {
				"pluralRule-count-one": "n = 0..1 @integer 0, 1 @decimal 0.0, 1.0, 0.00, 1.00, 0.000, 1.000, 0.0000, 1.0000",
				"pluralRule-count-other": " @integer 2~17, 100, 1000, 10000, 100000, 1000000, … @decimal 0.1~0.9, 1.1~1.7, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"gv": {
				"pluralRule-count-one": "v = 0 and i % 10 = 1 @integer 1, 11, 21, 31, 41, 51, 61, 71, 101, 1001, …",
				"pluralRule-count-two": "v = 0 and i % 10 = 2 @integer 2, 12, 22, 32, 42, 52, 62, 72, 102, 1002, …",
				"pluralRule-count-few": "v = 0 and i % 100 = 0,20,40,60,80 @integer 0, 20, 40, 60, 80, 100, 120, 140, 1000, 10000, 100000, 1000000, …",
				"pluralRule-count-many": "v != 0   @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …",
				"pluralRule-count-other": " @integer 3~10, 13~19, 23, 103, 1003, …"
			},
			"ha": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"haw": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"he": {
				"pluralRule-count-one": "i = 1 and v = 0 @integer 1",
				"pluralRule-count-two": "i = 2 and v = 0 @integer 2",
				"pluralRule-count-many": "v = 0 and n != 0..10 and n % 10 = 0 @integer 20, 30, 40, 50, 60, 70, 80, 90, 100, 1000, 10000, 100000, 1000000, …",
				"pluralRule-count-other": " @integer 0, 3~17, 101, 1001, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"hi": {
				"pluralRule-count-one": "i = 0 or n = 1 @integer 0, 1 @decimal 0.0~1.0, 0.00~0.04",
				"pluralRule-count-other": " @integer 2~17, 100, 1000, 10000, 100000, 1000000, … @decimal 1.1~2.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"hr": {
				"pluralRule-count-one": "v = 0 and i % 10 = 1 and i % 100 != 11 or f % 10 = 1 and f % 100 != 11 @integer 1, 21, 31, 41, 51, 61, 71, 81, 101, 1001, … @decimal 0.1, 1.1, 2.1, 3.1, 4.1, 5.1, 6.1, 7.1, 10.1, 100.1, 1000.1, …",
				"pluralRule-count-few": "v = 0 and i % 10 = 2..4 and i % 100 != 12..14 or f % 10 = 2..4 and f % 100 != 12..14 @integer 2~4, 22~24, 32~34, 42~44, 52~54, 62, 102, 1002, … @decimal 0.2~0.4, 1.2~1.4, 2.2~2.4, 3.2~3.4, 4.2~4.4, 5.2, 10.2, 100.2, 1000.2, …",
				"pluralRule-count-other": " @integer 0, 5~19, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0, 0.5~1.0, 1.5~2.0, 2.5~2.7, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"hsb": {
				"pluralRule-count-one": "v = 0 and i % 100 = 1 or f % 100 = 1 @integer 1, 101, 201, 301, 401, 501, 601, 701, 1001, … @decimal 0.1, 1.1, 2.1, 3.1, 4.1, 5.1, 6.1, 7.1, 10.1, 100.1, 1000.1, …",
				"pluralRule-count-two": "v = 0 and i % 100 = 2 or f % 100 = 2 @integer 2, 102, 202, 302, 402, 502, 602, 702, 1002, … @decimal 0.2, 1.2, 2.2, 3.2, 4.2, 5.2, 6.2, 7.2, 10.2, 100.2, 1000.2, …",
				"pluralRule-count-few": "v = 0 and i % 100 = 3..4 or f % 100 = 3..4 @integer 3, 4, 103, 104, 203, 204, 303, 304, 403, 404, 503, 504, 603, 604, 703, 704, 1003, … @decimal 0.3, 0.4, 1.3, 1.4, 2.3, 2.4, 3.3, 3.4, 4.3, 4.4, 5.3, 5.4, 6.3, 6.4, 7.3, 7.4, 10.3, 100.3, 1000.3, …",
				"pluralRule-count-other": " @integer 0, 5~19, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0, 0.5~1.0, 1.5~2.0, 2.5~2.7, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"hu": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"hy": {
				"pluralRule-count-one": "i = 0,1 @integer 0, 1 @decimal 0.0~1.5",
				"pluralRule-count-other": " @integer 2~17, 100, 1000, 10000, 100000, 1000000, … @decimal 2.0~3.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"id": {
				"pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"ig": {
				"pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"ii": {
				"pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"in": {
				"pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"is": {
				"pluralRule-count-one": "t = 0 and i % 10 = 1 and i % 100 != 11 or t != 0 @integer 1, 21, 31, 41, 51, 61, 71, 81, 101, 1001, … @decimal 0.1~1.6, 10.1, 100.1, 1000.1, …",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"it": {
				"pluralRule-count-one": "i = 1 and v = 0 @integer 1",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"iu": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-two": "n = 2 @integer 2 @decimal 2.0, 2.00, 2.000, 2.0000",
				"pluralRule-count-other": " @integer 0, 3~17, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"iw": {
				"pluralRule-count-one": "i = 1 and v = 0 @integer 1",
				"pluralRule-count-two": "i = 2 and v = 0 @integer 2",
				"pluralRule-count-many": "v = 0 and n != 0..10 and n % 10 = 0 @integer 20, 30, 40, 50, 60, 70, 80, 90, 100, 1000, 10000, 100000, 1000000, …",
				"pluralRule-count-other": " @integer 0, 3~17, 101, 1001, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"ja": {
				"pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"jbo": {
				"pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"jgo": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"ji": {
				"pluralRule-count-one": "i = 1 and v = 0 @integer 1",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"jmc": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"jv": {
				"pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"jw": {
				"pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"ka": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"kab": {
				"pluralRule-count-one": "i = 0,1 @integer 0, 1 @decimal 0.0~1.5",
				"pluralRule-count-other": " @integer 2~17, 100, 1000, 10000, 100000, 1000000, … @decimal 2.0~3.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"kaj": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"kcg": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"kde": {
				"pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"kea": {
				"pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"kk": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"kkj": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"kl": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"km": {
				"pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"kn": {
				"pluralRule-count-one": "i = 0 or n = 1 @integer 0, 1 @decimal 0.0~1.0, 0.00~0.04",
				"pluralRule-count-other": " @integer 2~17, 100, 1000, 10000, 100000, 1000000, … @decimal 1.1~2.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"ko": {
				"pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"ks": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"ksb": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"ksh": {
				"pluralRule-count-zero": "n = 0 @integer 0 @decimal 0.0, 0.00, 0.000, 0.0000",
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 2~17, 100, 1000, 10000, 100000, 1000000, … @decimal 0.1~0.9, 1.1~1.7, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"ku": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"kw": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-two": "n = 2 @integer 2 @decimal 2.0, 2.00, 2.000, 2.0000",
				"pluralRule-count-other": " @integer 0, 3~17, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"ky": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"lag": {
				"pluralRule-count-zero": "n = 0 @integer 0 @decimal 0.0, 0.00, 0.000, 0.0000",
				"pluralRule-count-one": "i = 0,1 and n != 0 @integer 1 @decimal 0.1~1.6",
				"pluralRule-count-other": " @integer 2~17, 100, 1000, 10000, 100000, 1000000, … @decimal 2.0~3.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"lb": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"lg": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"lkt": {
				"pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"ln": {
				"pluralRule-count-one": "n = 0..1 @integer 0, 1 @decimal 0.0, 1.0, 0.00, 1.00, 0.000, 1.000, 0.0000, 1.0000",
				"pluralRule-count-other": " @integer 2~17, 100, 1000, 10000, 100000, 1000000, … @decimal 0.1~0.9, 1.1~1.7, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"lo": {
				"pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"lt": {
				"pluralRule-count-one": "n % 10 = 1 and n % 100 != 11..19 @integer 1, 21, 31, 41, 51, 61, 71, 81, 101, 1001, … @decimal 1.0, 21.0, 31.0, 41.0, 51.0, 61.0, 71.0, 81.0, 101.0, 1001.0, …",
				"pluralRule-count-few": "n % 10 = 2..9 and n % 100 != 11..19 @integer 2~9, 22~29, 102, 1002, … @decimal 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 22.0, 102.0, 1002.0, …",
				"pluralRule-count-many": "f != 0   @decimal 0.1~0.9, 1.1~1.7, 10.1, 100.1, 1000.1, …",
				"pluralRule-count-other": " @integer 0, 10~20, 30, 40, 50, 60, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"lv": {
				"pluralRule-count-zero": "n % 10 = 0 or n % 100 = 11..19 or v = 2 and f % 100 = 11..19 @integer 0, 10~20, 30, 40, 50, 60, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …",
				"pluralRule-count-one": "n % 10 = 1 and n % 100 != 11 or v = 2 and f % 10 = 1 and f % 100 != 11 or v != 2 and f % 10 = 1 @integer 1, 21, 31, 41, 51, 61, 71, 81, 101, 1001, … @decimal 0.1, 1.0, 1.1, 2.1, 3.1, 4.1, 5.1, 6.1, 7.1, 10.1, 100.1, 1000.1, …",
				"pluralRule-count-other": " @integer 2~9, 22~29, 102, 1002, … @decimal 0.2~0.9, 1.2~1.9, 10.2, 100.2, 1000.2, …"
			},
			"mas": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"mg": {
				"pluralRule-count-one": "n = 0..1 @integer 0, 1 @decimal 0.0, 1.0, 0.00, 1.00, 0.000, 1.000, 0.0000, 1.0000",
				"pluralRule-count-other": " @integer 2~17, 100, 1000, 10000, 100000, 1000000, … @decimal 0.1~0.9, 1.1~1.7, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"mgo": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"mk": {
				"pluralRule-count-one": "v = 0 and i % 10 = 1 or f % 10 = 1 @integer 1, 11, 21, 31, 41, 51, 61, 71, 101, 1001, … @decimal 0.1, 1.1, 2.1, 3.1, 4.1, 5.1, 6.1, 7.1, 10.1, 100.1, 1000.1, …",
				"pluralRule-count-other": " @integer 0, 2~10, 12~17, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0, 0.2~1.0, 1.2~1.7, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"ml": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"mn": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"mo": {
				"pluralRule-count-one": "i = 1 and v = 0 @integer 1",
				"pluralRule-count-few": "v != 0 or n = 0 or n != 1 and n % 100 = 1..19 @integer 0, 2~16, 101, 1001, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …",
				"pluralRule-count-other": " @integer 20~35, 100, 1000, 10000, 100000, 1000000, …"
			},
			"mr": {
				"pluralRule-count-one": "i = 0 or n = 1 @integer 0, 1 @decimal 0.0~1.0, 0.00~0.04",
				"pluralRule-count-other": " @integer 2~17, 100, 1000, 10000, 100000, 1000000, … @decimal 1.1~2.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"ms": {
				"pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"mt": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-few": "n = 0 or n % 100 = 2..10 @integer 0, 2~10, 102~107, 1002, … @decimal 0.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 10.0, 102.0, 1002.0, …",
				"pluralRule-count-many": "n % 100 = 11..19 @integer 11~19, 111~117, 1011, … @decimal 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 111.0, 1011.0, …",
				"pluralRule-count-other": " @integer 20~35, 100, 1000, 10000, 100000, 1000000, … @decimal 0.1~0.9, 1.1~1.7, 10.1, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"my": {
				"pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"nah": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"naq": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-two": "n = 2 @integer 2 @decimal 2.0, 2.00, 2.000, 2.0000",
				"pluralRule-count-other": " @integer 0, 3~17, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"nb": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"nd": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"ne": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"nl": {
				"pluralRule-count-one": "i = 1 and v = 0 @integer 1",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"nn": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"nnh": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"no": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"nqo": {
				"pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"nr": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"nso": {
				"pluralRule-count-one": "n = 0..1 @integer 0, 1 @decimal 0.0, 1.0, 0.00, 1.00, 0.000, 1.000, 0.0000, 1.0000",
				"pluralRule-count-other": " @integer 2~17, 100, 1000, 10000, 100000, 1000000, … @decimal 0.1~0.9, 1.1~1.7, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"ny": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"nyn": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"om": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"or": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"os": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"pa": {
				"pluralRule-count-one": "n = 0..1 @integer 0, 1 @decimal 0.0, 1.0, 0.00, 1.00, 0.000, 1.000, 0.0000, 1.0000",
				"pluralRule-count-other": " @integer 2~17, 100, 1000, 10000, 100000, 1000000, … @decimal 0.1~0.9, 1.1~1.7, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"pap": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"pl": {
				"pluralRule-count-one": "i = 1 and v = 0 @integer 1",
				"pluralRule-count-few": "v = 0 and i % 10 = 2..4 and i % 100 != 12..14 @integer 2~4, 22~24, 32~34, 42~44, 52~54, 62, 102, 1002, …",
				"pluralRule-count-many": "v = 0 and i != 1 and i % 10 = 0..1 or v = 0 and i % 10 = 5..9 or v = 0 and i % 100 = 12..14 @integer 0, 5~19, 100, 1000, 10000, 100000, 1000000, …",
				"pluralRule-count-other": "   @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"prg": {
				"pluralRule-count-zero": "n % 10 = 0 or n % 100 = 11..19 or v = 2 and f % 100 = 11..19 @integer 0, 10~20, 30, 40, 50, 60, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …",
				"pluralRule-count-one": "n % 10 = 1 and n % 100 != 11 or v = 2 and f % 10 = 1 and f % 100 != 11 or v != 2 and f % 10 = 1 @integer 1, 21, 31, 41, 51, 61, 71, 81, 101, 1001, … @decimal 0.1, 1.0, 1.1, 2.1, 3.1, 4.1, 5.1, 6.1, 7.1, 10.1, 100.1, 1000.1, …",
				"pluralRule-count-other": " @integer 2~9, 22~29, 102, 1002, … @decimal 0.2~0.9, 1.2~1.9, 10.2, 100.2, 1000.2, …"
			},
			"ps": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"pt": {
				"pluralRule-count-one": "n = 0..2 and n != 2 @integer 0, 1 @decimal 0.0, 1.0, 0.00, 1.00, 0.000, 1.000, 0.0000, 1.0000",
				"pluralRule-count-other": " @integer 2~17, 100, 1000, 10000, 100000, 1000000, … @decimal 0.1~0.9, 1.1~1.7, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"pt-PT": {
				"pluralRule-count-one": "n = 1 and v = 0 @integer 1",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"rm": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"ro": {
				"pluralRule-count-one": "i = 1 and v = 0 @integer 1",
				"pluralRule-count-few": "v != 0 or n = 0 or n != 1 and n % 100 = 1..19 @integer 0, 2~16, 101, 1001, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …",
				"pluralRule-count-other": " @integer 20~35, 100, 1000, 10000, 100000, 1000000, …"
			},
			"rof": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"root": {
				"pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"ru": {
				"pluralRule-count-one": "v = 0 and i % 10 = 1 and i % 100 != 11 @integer 1, 21, 31, 41, 51, 61, 71, 81, 101, 1001, …",
				"pluralRule-count-few": "v = 0 and i % 10 = 2..4 and i % 100 != 12..14 @integer 2~4, 22~24, 32~34, 42~44, 52~54, 62, 102, 1002, …",
				"pluralRule-count-many": "v = 0 and i % 10 = 0 or v = 0 and i % 10 = 5..9 or v = 0 and i % 100 = 11..14 @integer 0, 5~19, 100, 1000, 10000, 100000, 1000000, …",
				"pluralRule-count-other": "   @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"rwk": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"sah": {
				"pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"saq": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"sdh": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"se": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-two": "n = 2 @integer 2 @decimal 2.0, 2.00, 2.000, 2.0000",
				"pluralRule-count-other": " @integer 0, 3~17, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"seh": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"ses": {
				"pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"sg": {
				"pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"sh": {
				"pluralRule-count-one": "v = 0 and i % 10 = 1 and i % 100 != 11 or f % 10 = 1 and f % 100 != 11 @integer 1, 21, 31, 41, 51, 61, 71, 81, 101, 1001, … @decimal 0.1, 1.1, 2.1, 3.1, 4.1, 5.1, 6.1, 7.1, 10.1, 100.1, 1000.1, …",
				"pluralRule-count-few": "v = 0 and i % 10 = 2..4 and i % 100 != 12..14 or f % 10 = 2..4 and f % 100 != 12..14 @integer 2~4, 22~24, 32~34, 42~44, 52~54, 62, 102, 1002, … @decimal 0.2~0.4, 1.2~1.4, 2.2~2.4, 3.2~3.4, 4.2~4.4, 5.2, 10.2, 100.2, 1000.2, …",
				"pluralRule-count-other": " @integer 0, 5~19, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0, 0.5~1.0, 1.5~2.0, 2.5~2.7, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"shi": {
				"pluralRule-count-one": "i = 0 or n = 1 @integer 0, 1 @decimal 0.0~1.0, 0.00~0.04",
				"pluralRule-count-few": "n = 2..10 @integer 2~10 @decimal 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 2.00, 3.00, 4.00, 5.00, 6.00, 7.00, 8.00",
				"pluralRule-count-other": " @integer 11~26, 100, 1000, 10000, 100000, 1000000, … @decimal 1.1~1.9, 2.1~2.7, 10.1, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"si": {
				"pluralRule-count-one": "n = 0,1 or i = 0 and f = 1 @integer 0, 1 @decimal 0.0, 0.1, 1.0, 0.00, 0.01, 1.00, 0.000, 0.001, 1.000, 0.0000, 0.0001, 1.0000",
				"pluralRule-count-other": " @integer 2~17, 100, 1000, 10000, 100000, 1000000, … @decimal 0.2~0.9, 1.1~1.8, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"sk": {
				"pluralRule-count-one": "i = 1 and v = 0 @integer 1",
				"pluralRule-count-few": "i = 2..4 and v = 0 @integer 2~4",
				"pluralRule-count-many": "v != 0   @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …",
				"pluralRule-count-other": " @integer 0, 5~19, 100, 1000, 10000, 100000, 1000000, …"
			},
			"sl": {
				"pluralRule-count-one": "v = 0 and i % 100 = 1 @integer 1, 101, 201, 301, 401, 501, 601, 701, 1001, …",
				"pluralRule-count-two": "v = 0 and i % 100 = 2 @integer 2, 102, 202, 302, 402, 502, 602, 702, 1002, …",
				"pluralRule-count-few": "v = 0 and i % 100 = 3..4 or v != 0 @integer 3, 4, 103, 104, 203, 204, 303, 304, 403, 404, 503, 504, 603, 604, 703, 704, 1003, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …",
				"pluralRule-count-other": " @integer 0, 5~19, 100, 1000, 10000, 100000, 1000000, …"
			},
			"sma": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-two": "n = 2 @integer 2 @decimal 2.0, 2.00, 2.000, 2.0000",
				"pluralRule-count-other": " @integer 0, 3~17, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"smi": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-two": "n = 2 @integer 2 @decimal 2.0, 2.00, 2.000, 2.0000",
				"pluralRule-count-other": " @integer 0, 3~17, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"smj": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-two": "n = 2 @integer 2 @decimal 2.0, 2.00, 2.000, 2.0000",
				"pluralRule-count-other": " @integer 0, 3~17, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"smn": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-two": "n = 2 @integer 2 @decimal 2.0, 2.00, 2.000, 2.0000",
				"pluralRule-count-other": " @integer 0, 3~17, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"sms": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-two": "n = 2 @integer 2 @decimal 2.0, 2.00, 2.000, 2.0000",
				"pluralRule-count-other": " @integer 0, 3~17, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"sn": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"so": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"sq": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"sr": {
				"pluralRule-count-one": "v = 0 and i % 10 = 1 and i % 100 != 11 or f % 10 = 1 and f % 100 != 11 @integer 1, 21, 31, 41, 51, 61, 71, 81, 101, 1001, … @decimal 0.1, 1.1, 2.1, 3.1, 4.1, 5.1, 6.1, 7.1, 10.1, 100.1, 1000.1, …",
				"pluralRule-count-few": "v = 0 and i % 10 = 2..4 and i % 100 != 12..14 or f % 10 = 2..4 and f % 100 != 12..14 @integer 2~4, 22~24, 32~34, 42~44, 52~54, 62, 102, 1002, … @decimal 0.2~0.4, 1.2~1.4, 2.2~2.4, 3.2~3.4, 4.2~4.4, 5.2, 10.2, 100.2, 1000.2, …",
				"pluralRule-count-other": " @integer 0, 5~19, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0, 0.5~1.0, 1.5~2.0, 2.5~2.7, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"ss": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"ssy": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"st": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"sv": {
				"pluralRule-count-one": "i = 1 and v = 0 @integer 1",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"sw": {
				"pluralRule-count-one": "i = 1 and v = 0 @integer 1",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"syr": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"ta": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"te": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"teo": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"th": {
				"pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"ti": {
				"pluralRule-count-one": "n = 0..1 @integer 0, 1 @decimal 0.0, 1.0, 0.00, 1.00, 0.000, 1.000, 0.0000, 1.0000",
				"pluralRule-count-other": " @integer 2~17, 100, 1000, 10000, 100000, 1000000, … @decimal 0.1~0.9, 1.1~1.7, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"tig": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"tk": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"tl": {
				"pluralRule-count-one": "v = 0 and i = 1,2,3 or v = 0 and i % 10 != 4,6,9 or v != 0 and f % 10 != 4,6,9 @integer 0~3, 5, 7, 8, 10~13, 15, 17, 18, 20, 21, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.3, 0.5, 0.7, 0.8, 1.0~1.3, 1.5, 1.7, 1.8, 2.0, 2.1, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …",
				"pluralRule-count-other": " @integer 4, 6, 9, 14, 16, 19, 24, 26, 104, 1004, … @decimal 0.4, 0.6, 0.9, 1.4, 1.6, 1.9, 2.4, 2.6, 10.4, 100.4, 1000.4, …"
			},
			"tn": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"to": {
				"pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"tr": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"ts": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"tzm": {
				"pluralRule-count-one": "n = 0..1 or n = 11..99 @integer 0, 1, 11~24 @decimal 0.0, 1.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 20.0, 21.0, 22.0, 23.0, 24.0",
				"pluralRule-count-other": " @integer 2~10, 100~106, 1000, 10000, 100000, 1000000, … @decimal 0.1~0.9, 1.1~1.7, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"ug": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"uk": {
				"pluralRule-count-one": "v = 0 and i % 10 = 1 and i % 100 != 11 @integer 1, 21, 31, 41, 51, 61, 71, 81, 101, 1001, …",
				"pluralRule-count-few": "v = 0 and i % 10 = 2..4 and i % 100 != 12..14 @integer 2~4, 22~24, 32~34, 42~44, 52~54, 62, 102, 1002, …",
				"pluralRule-count-many": "v = 0 and i % 10 = 0 or v = 0 and i % 10 = 5..9 or v = 0 and i % 100 = 11..14 @integer 0, 5~19, 100, 1000, 10000, 100000, 1000000, …",
				"pluralRule-count-other": "   @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"ur": {
				"pluralRule-count-one": "i = 1 and v = 0 @integer 1",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"uz": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"ve": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"vi": {
				"pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"vo": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"vun": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"wa": {
				"pluralRule-count-one": "n = 0..1 @integer 0, 1 @decimal 0.0, 1.0, 0.00, 1.00, 0.000, 1.000, 0.0000, 1.0000",
				"pluralRule-count-other": " @integer 2~17, 100, 1000, 10000, 100000, 1000000, … @decimal 0.1~0.9, 1.1~1.7, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"wae": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"wo": {
				"pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"xh": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"xog": {
				"pluralRule-count-one": "n = 1 @integer 1 @decimal 1.0, 1.00, 1.000, 1.0000",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~0.9, 1.1~1.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"yi": {
				"pluralRule-count-one": "i = 1 and v = 0 @integer 1",
				"pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"yo": {
				"pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"yue": {
				"pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"zh": {
				"pluralRule-count-other": " @integer 0~15, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			},
			"zu": {
				"pluralRule-count-one": "i = 0 or n = 1 @integer 0, 1 @decimal 0.0~1.0, 0.00~0.04",
				"pluralRule-count-other": " @integer 2~17, 100, 1000, 10000, 100000, 1000000, … @decimal 1.1~2.6, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
			}
		}
	}
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = {
	"supplemental": {
		"version": {
			"_number": "$Revision: 13091 $",
			"_unicodeVersion": "9.0.0",
			"_cldrVersion": "30.0.3"
		},
		"timeData": {
			"AX": {
				"_allowed": "H",
				"_preferred": "H"
			},
			"BQ": {
				"_allowed": "H",
				"_preferred": "H"
			},
			"CP": {
				"_allowed": "H",
				"_preferred": "H"
			},
			"CZ": {
				"_allowed": "H",
				"_preferred": "H"
			},
			"DK": {
				"_allowed": "H",
				"_preferred": "H"
			},
			"FI": {
				"_allowed": "H",
				"_preferred": "H"
			},
			"ID": {
				"_allowed": "H",
				"_preferred": "H"
			},
			"IS": {
				"_allowed": "H",
				"_preferred": "H"
			},
			"ML": {
				"_allowed": "H",
				"_preferred": "H"
			},
			"NE": {
				"_allowed": "H",
				"_preferred": "H"
			},
			"RU": {
				"_allowed": "H",
				"_preferred": "H"
			},
			"SE": {
				"_allowed": "H",
				"_preferred": "H"
			},
			"SJ": {
				"_allowed": "H",
				"_preferred": "H"
			},
			"SK": {
				"_allowed": "H",
				"_preferred": "H"
			},
			"AS": {
				"_allowed": "h H",
				"_preferred": "h"
			},
			"BT": {
				"_allowed": "h H",
				"_preferred": "h"
			},
			"DJ": {
				"_allowed": "h H",
				"_preferred": "h"
			},
			"ER": {
				"_allowed": "h H",
				"_preferred": "h"
			},
			"GH": {
				"_allowed": "h H",
				"_preferred": "h"
			},
			"GL": {
				"_allowed": "h H",
				"_preferred": "h"
			},
			"IN": {
				"_allowed": "h H",
				"_preferred": "h"
			},
			"LS": {
				"_allowed": "h H",
				"_preferred": "h"
			},
			"PG": {
				"_allowed": "h H",
				"_preferred": "h"
			},
			"PW": {
				"_allowed": "h H",
				"_preferred": "h"
			},
			"SO": {
				"_allowed": "h H",
				"_preferred": "h"
			},
			"TO": {
				"_allowed": "h H",
				"_preferred": "h"
			},
			"VU": {
				"_allowed": "h H",
				"_preferred": "h"
			},
			"WS": {
				"_allowed": "h H",
				"_preferred": "h"
			},
			"001": {
				"_allowed": "H h",
				"_preferred": "H"
			},
			"AL": {
				"_allowed": "h H hB",
				"_preferred": "h"
			},
			"fr_CA": {
				"_allowed": "h H hB",
				"_preferred": "h"
			},
			"TD": {
				"_allowed": "h H hB",
				"_preferred": "h"
			},
			"ca_ES": {
				"_allowed": "H h hB",
				"_preferred": "H"
			},
			"CF": {
				"_allowed": "H h hB",
				"_preferred": "H"
			},
			"CM": {
				"_allowed": "H h hB",
				"_preferred": "H"
			},
			"gl_ES": {
				"_allowed": "H h hB",
				"_preferred": "H"
			},
			"LU": {
				"_allowed": "H h hB",
				"_preferred": "H"
			},
			"NP": {
				"_allowed": "H h hB",
				"_preferred": "H"
			},
			"PF": {
				"_allowed": "H h hB",
				"_preferred": "H"
			},
			"SC": {
				"_allowed": "H h hB",
				"_preferred": "H"
			},
			"SN": {
				"_allowed": "H h hB",
				"_preferred": "H"
			},
			"TF": {
				"_allowed": "H h hB",
				"_preferred": "H"
			},
			"CY": {
				"_allowed": "h H hb hB",
				"_preferred": "h"
			},
			"GR": {
				"_allowed": "h H hb hB",
				"_preferred": "h"
			},
			"CO": {
				"_allowed": "h H hB hb",
				"_preferred": "h"
			},
			"DO": {
				"_allowed": "h H hB hb",
				"_preferred": "h"
			},
			"KP": {
				"_allowed": "h H hB hb",
				"_preferred": "h"
			},
			"KR": {
				"_allowed": "h H hB hb",
				"_preferred": "h"
			},
			"NA": {
				"_allowed": "h H hB hb",
				"_preferred": "h"
			},
			"PA": {
				"_allowed": "h H hB hb",
				"_preferred": "h"
			},
			"PR": {
				"_allowed": "h H hB hb",
				"_preferred": "h"
			},
			"VE": {
				"_allowed": "h H hB hb",
				"_preferred": "h"
			},
			"AC": {
				"_allowed": "H h hb hB",
				"_preferred": "H"
			},
			"AI": {
				"_allowed": "H h hb hB",
				"_preferred": "H"
			},
			"BW": {
				"_allowed": "H h hb hB",
				"_preferred": "H"
			},
			"BZ": {
				"_allowed": "H h hb hB",
				"_preferred": "H"
			},
			"CC": {
				"_allowed": "H h hb hB",
				"_preferred": "H"
			},
			"CK": {
				"_allowed": "H h hb hB",
				"_preferred": "H"
			},
			"CX": {
				"_allowed": "H h hb hB",
				"_preferred": "H"
			},
			"DG": {
				"_allowed": "H h hb hB",
				"_preferred": "H"
			},
			"FK": {
				"_allowed": "H h hb hB",
				"_preferred": "H"
			},
			"GB": {
				"_allowed": "H h hb hB",
				"_preferred": "H"
			},
			"GG": {
				"_allowed": "H h hb hB",
				"_preferred": "H"
			},
			"GI": {
				"_allowed": "H h hb hB",
				"_preferred": "H"
			},
			"IE": {
				"_allowed": "H h hb hB",
				"_preferred": "H"
			},
			"IM": {
				"_allowed": "H h hb hB",
				"_preferred": "H"
			},
			"IO": {
				"_allowed": "H h hb hB",
				"_preferred": "H"
			},
			"JE": {
				"_allowed": "H h hb hB",
				"_preferred": "H"
			},
			"LT": {
				"_allowed": "H h hb hB",
				"_preferred": "H"
			},
			"MK": {
				"_allowed": "H h hb hB",
				"_preferred": "H"
			},
			"MN": {
				"_allowed": "H h hb hB",
				"_preferred": "H"
			},
			"MS": {
				"_allowed": "H h hb hB",
				"_preferred": "H"
			},
			"NF": {
				"_allowed": "H h hb hB",
				"_preferred": "H"
			},
			"NG": {
				"_allowed": "H h hb hB",
				"_preferred": "H"
			},
			"NR": {
				"_allowed": "H h hb hB",
				"_preferred": "H"
			},
			"NU": {
				"_allowed": "H h hb hB",
				"_preferred": "H"
			},
			"PN": {
				"_allowed": "H h hb hB",
				"_preferred": "H"
			},
			"SH": {
				"_allowed": "H h hb hB",
				"_preferred": "H"
			},
			"SX": {
				"_allowed": "H h hb hB",
				"_preferred": "H"
			},
			"TA": {
				"_allowed": "H h hb hB",
				"_preferred": "H"
			},
			"ZA": {
				"_allowed": "H h hb hB",
				"_preferred": "H"
			},
			"af_ZA": {
				"_allowed": "H h hB hb",
				"_preferred": "H"
			},
			"KG": {
				"_allowed": "H h hB hb",
				"_preferred": "H"
			},
			"KM": {
				"_allowed": "H h hB hb",
				"_preferred": "H"
			},
			"LK": {
				"_allowed": "H h hB hb",
				"_preferred": "H"
			},
			"MA": {
				"_allowed": "H h hB hb",
				"_preferred": "H"
			},
			"JP": {
				"_allowed": "H h K",
				"_preferred": "H"
			},
			"AD": {
				"_allowed": "H hB",
				"_preferred": "H"
			},
			"AM": {
				"_allowed": "H hB",
				"_preferred": "H"
			},
			"AO": {
				"_allowed": "H hB",
				"_preferred": "H"
			},
			"AT": {
				"_allowed": "H hB",
				"_preferred": "H"
			},
			"AW": {
				"_allowed": "H hB",
				"_preferred": "H"
			},
			"BE": {
				"_allowed": "H hB",
				"_preferred": "H"
			},
			"BF": {
				"_allowed": "H hB",
				"_preferred": "H"
			},
			"BJ": {
				"_allowed": "H hB",
				"_preferred": "H"
			},
			"BL": {
				"_allowed": "H hB",
				"_preferred": "H"
			},
			"BR": {
				"_allowed": "H hB",
				"_preferred": "H"
			},
			"CG": {
				"_allowed": "H hB",
				"_preferred": "H"
			},
			"CI": {
				"_allowed": "H hB",
				"_preferred": "H"
			},
			"CV": {
				"_allowed": "H hB",
				"_preferred": "H"
			},
			"DE": {
				"_allowed": "H hB",
				"_preferred": "H"
			},
			"EE": {
				"_allowed": "H hB",
				"_preferred": "H"
			},
			"FR": {
				"_allowed": "H hB",
				"_preferred": "H"
			},
			"GA": {
				"_allowed": "H hB",
				"_preferred": "H"
			},
			"GF": {
				"_allowed": "H hB",
				"_preferred": "H"
			},
			"GN": {
				"_allowed": "H hB",
				"_preferred": "H"
			},
			"GP": {
				"_allowed": "H hB",
				"_preferred": "H"
			},
			"GW": {
				"_allowed": "H hB",
				"_preferred": "H"
			},
			"HR": {
				"_allowed": "H hB",
				"_preferred": "H"
			},
			"IL": {
				"_allowed": "H hB",
				"_preferred": "H"
			},
			"IT": {
				"_allowed": "H hB",
				"_preferred": "H"
			},
			"KZ": {
				"_allowed": "H hB",
				"_preferred": "H"
			},
			"MC": {
				"_allowed": "H hB",
				"_preferred": "H"
			},
			"MD": {
				"_allowed": "H hB",
				"_preferred": "H"
			},
			"MF": {
				"_allowed": "H hB",
				"_preferred": "H"
			},
			"MQ": {
				"_allowed": "H hB",
				"_preferred": "H"
			},
			"MZ": {
				"_allowed": "H hB",
				"_preferred": "H"
			},
			"NC": {
				"_allowed": "H hB",
				"_preferred": "H"
			},
			"NL": {
				"_allowed": "H hB",
				"_preferred": "H"
			},
			"PM": {
				"_allowed": "H hB",
				"_preferred": "H"
			},
			"PT": {
				"_allowed": "H hB",
				"_preferred": "H"
			},
			"RE": {
				"_allowed": "H hB",
				"_preferred": "H"
			},
			"RO": {
				"_allowed": "H hB",
				"_preferred": "H"
			},
			"SI": {
				"_allowed": "H hB",
				"_preferred": "H"
			},
			"SM": {
				"_allowed": "H hB",
				"_preferred": "H"
			},
			"SR": {
				"_allowed": "H hB",
				"_preferred": "H"
			},
			"ST": {
				"_allowed": "H hB",
				"_preferred": "H"
			},
			"TG": {
				"_allowed": "H hB",
				"_preferred": "H"
			},
			"TR": {
				"_allowed": "H hB",
				"_preferred": "H"
			},
			"WF": {
				"_allowed": "H hB",
				"_preferred": "H"
			},
			"YT": {
				"_allowed": "H hB",
				"_preferred": "H"
			},
			"BD": {
				"_allowed": "h hB H",
				"_preferred": "h"
			},
			"PK": {
				"_allowed": "h hB H",
				"_preferred": "h"
			},
			"AZ": {
				"_allowed": "H hB h",
				"_preferred": "H"
			},
			"BA": {
				"_allowed": "H hB h",
				"_preferred": "H"
			},
			"BG": {
				"_allowed": "H hB h",
				"_preferred": "H"
			},
			"CH": {
				"_allowed": "H hB h",
				"_preferred": "H"
			},
			"GE": {
				"_allowed": "H hB h",
				"_preferred": "H"
			},
			"LI": {
				"_allowed": "H hB h",
				"_preferred": "H"
			},
			"ME": {
				"_allowed": "H hB h",
				"_preferred": "H"
			},
			"RS": {
				"_allowed": "H hB h",
				"_preferred": "H"
			},
			"UA": {
				"_allowed": "H hB h",
				"_preferred": "H"
			},
			"UZ": {
				"_allowed": "H hB h",
				"_preferred": "H"
			},
			"VA": {
				"_allowed": "H hB h",
				"_preferred": "H"
			},
			"XK": {
				"_allowed": "H hB h",
				"_preferred": "H"
			},
			"AG": {
				"_allowed": "h hb H hB",
				"_preferred": "h"
			},
			"AU": {
				"_allowed": "h hb H hB",
				"_preferred": "h"
			},
			"BB": {
				"_allowed": "h hb H hB",
				"_preferred": "h"
			},
			"BM": {
				"_allowed": "h hb H hB",
				"_preferred": "h"
			},
			"BS": {
				"_allowed": "h hb H hB",
				"_preferred": "h"
			},
			"CA": {
				"_allowed": "h hb H hB",
				"_preferred": "h"
			},
			"DM": {
				"_allowed": "h hb H hB",
				"_preferred": "h"
			},
			"FJ": {
				"_allowed": "h hb H hB",
				"_preferred": "h"
			},
			"FM": {
				"_allowed": "h hb H hB",
				"_preferred": "h"
			},
			"GD": {
				"_allowed": "h hb H hB",
				"_preferred": "h"
			},
			"GM": {
				"_allowed": "h hb H hB",
				"_preferred": "h"
			},
			"GU": {
				"_allowed": "h hb H hB",
				"_preferred": "h"
			},
			"GY": {
				"_allowed": "h hb H hB",
				"_preferred": "h"
			},
			"JM": {
				"_allowed": "h hb H hB",
				"_preferred": "h"
			},
			"KI": {
				"_allowed": "h hb H hB",
				"_preferred": "h"
			},
			"KN": {
				"_allowed": "h hb H hB",
				"_preferred": "h"
			},
			"KY": {
				"_allowed": "h hb H hB",
				"_preferred": "h"
			},
			"LC": {
				"_allowed": "h hb H hB",
				"_preferred": "h"
			},
			"LR": {
				"_allowed": "h hb H hB",
				"_preferred": "h"
			},
			"MH": {
				"_allowed": "h hb H hB",
				"_preferred": "h"
			},
			"MP": {
				"_allowed": "h hb H hB",
				"_preferred": "h"
			},
			"MW": {
				"_allowed": "h hb H hB",
				"_preferred": "h"
			},
			"NZ": {
				"_allowed": "h hb H hB",
				"_preferred": "h"
			},
			"SB": {
				"_allowed": "h hb H hB",
				"_preferred": "h"
			},
			"SG": {
				"_allowed": "h hb H hB",
				"_preferred": "h"
			},
			"SL": {
				"_allowed": "h hb H hB",
				"_preferred": "h"
			},
			"SS": {
				"_allowed": "h hb H hB",
				"_preferred": "h"
			},
			"SZ": {
				"_allowed": "h hb H hB",
				"_preferred": "h"
			},
			"TC": {
				"_allowed": "h hb H hB",
				"_preferred": "h"
			},
			"TT": {
				"_allowed": "h hb H hB",
				"_preferred": "h"
			},
			"UM": {
				"_allowed": "h hb H hB",
				"_preferred": "h"
			},
			"US": {
				"_allowed": "h hb H hB",
				"_preferred": "h"
			},
			"VC": {
				"_allowed": "h hb H hB",
				"_preferred": "h"
			},
			"VG": {
				"_allowed": "h hb H hB",
				"_preferred": "h"
			},
			"VI": {
				"_allowed": "h hb H hB",
				"_preferred": "h"
			},
			"ZM": {
				"_allowed": "h hb H hB",
				"_preferred": "h"
			},
			"AR": {
				"_allowed": "H hB h hb",
				"_preferred": "H"
			},
			"BO": {
				"_allowed": "H hB h hb",
				"_preferred": "H"
			},
			"CL": {
				"_allowed": "H hB h hb",
				"_preferred": "H"
			},
			"CR": {
				"_allowed": "H hB h hb",
				"_preferred": "H"
			},
			"CU": {
				"_allowed": "H hB h hb",
				"_preferred": "H"
			},
			"EA": {
				"_allowed": "H hB h hb",
				"_preferred": "H"
			},
			"EC": {
				"_allowed": "H hB h hb",
				"_preferred": "H"
			},
			"ES": {
				"_allowed": "H hB h hb",
				"_preferred": "H"
			},
			"GQ": {
				"_allowed": "H hB h hb",
				"_preferred": "H"
			},
			"GT": {
				"_allowed": "H hB h hb",
				"_preferred": "H"
			},
			"HN": {
				"_allowed": "H hB h hb",
				"_preferred": "H"
			},
			"IC": {
				"_allowed": "H hB h hb",
				"_preferred": "H"
			},
			"MX": {
				"_allowed": "H hB h hb",
				"_preferred": "H"
			},
			"NI": {
				"_allowed": "H hB h hb",
				"_preferred": "H"
			},
			"PE": {
				"_allowed": "H hB h hb",
				"_preferred": "H"
			},
			"SV": {
				"_allowed": "H hB h hb",
				"_preferred": "H"
			},
			"UY": {
				"_allowed": "H hB h hb",
				"_preferred": "H"
			},
			"AE": {
				"_allowed": "h hB hb H",
				"_preferred": "h"
			},
			"BH": {
				"_allowed": "h hB hb H",
				"_preferred": "h"
			},
			"DZ": {
				"_allowed": "h hB hb H",
				"_preferred": "h"
			},
			"EG": {
				"_allowed": "h hB hb H",
				"_preferred": "h"
			},
			"EH": {
				"_allowed": "h hB hb H",
				"_preferred": "h"
			},
			"IQ": {
				"_allowed": "h hB hb H",
				"_preferred": "h"
			},
			"JO": {
				"_allowed": "h hB hb H",
				"_preferred": "h"
			},
			"KW": {
				"_allowed": "h hB hb H",
				"_preferred": "h"
			},
			"LB": {
				"_allowed": "h hB hb H",
				"_preferred": "h"
			},
			"LY": {
				"_allowed": "h hB hb H",
				"_preferred": "h"
			},
			"MR": {
				"_allowed": "h hB hb H",
				"_preferred": "h"
			},
			"OM": {
				"_allowed": "h hB hb H",
				"_preferred": "h"
			},
			"PH": {
				"_allowed": "h hB hb H",
				"_preferred": "h"
			},
			"PS": {
				"_allowed": "h hB hb H",
				"_preferred": "h"
			},
			"QA": {
				"_allowed": "h hB hb H",
				"_preferred": "h"
			},
			"SA": {
				"_allowed": "h hB hb H",
				"_preferred": "h"
			},
			"SD": {
				"_allowed": "h hB hb H",
				"_preferred": "h"
			},
			"SY": {
				"_allowed": "h hB hb H",
				"_preferred": "h"
			},
			"TN": {
				"_allowed": "h hB hb H",
				"_preferred": "h"
			},
			"YE": {
				"_allowed": "h hB hb H",
				"_preferred": "h"
			},
			"AF": {
				"_allowed": "H hb hB h",
				"_preferred": "H"
			},
			"IR": {
				"_allowed": "H hb hB h",
				"_preferred": "H"
			},
			"LA": {
				"_allowed": "H hb hB h",
				"_preferred": "H"
			},
			"LV": {
				"_allowed": "H hB hb h",
				"_preferred": "H"
			},
			"TL": {
				"_allowed": "H hB hb h",
				"_preferred": "H"
			},
			"zu_ZA": {
				"_allowed": "H hB hb h",
				"_preferred": "H"
			},
			"CD": {
				"_allowed": "hB H",
				"_preferred": "H"
			},
			"kn_IN": {
				"_allowed": "hB h H",
				"_preferred": "h"
			},
			"ml_IN": {
				"_allowed": "hB h H",
				"_preferred": "h"
			},
			"te_IN": {
				"_allowed": "hB h H",
				"_preferred": "h"
			},
			"KH": {
				"_allowed": "hB h H hb",
				"_preferred": "h"
			},
			"ta_IN": {
				"_allowed": "hB h hb H",
				"_preferred": "h"
			},
			"BN": {
				"_allowed": "hb hB H h",
				"_preferred": "h"
			},
			"MY": {
				"_allowed": "hb hB H h",
				"_preferred": "h"
			},
			"ET": {
				"_allowed": "hB hb h H",
				"_preferred": "h"
			},
			"gu_IN": {
				"_allowed": "hB hb h H",
				"_preferred": "h"
			},
			"mr_IN": {
				"_allowed": "hB hb h H",
				"_preferred": "h"
			},
			"pa_IN": {
				"_allowed": "hB hb h H",
				"_preferred": "h"
			},
			"KE": {
				"_allowed": "hB hb h H",
				"_preferred": "H"
			},
			"MM": {
				"_allowed": "hB hb h H",
				"_preferred": "H"
			},
			"TZ": {
				"_allowed": "hB hb h H",
				"_preferred": "H"
			},
			"UG": {
				"_allowed": "hB hb h H",
				"_preferred": "H"
			},
			"CN": {
				"_allowed": "hB hb H h",
				"_preferred": "h"
			},
			"HK": {
				"_allowed": "hB hb H h",
				"_preferred": "h"
			},
			"MO": {
				"_allowed": "hB hb H h",
				"_preferred": "h"
			},
			"TW": {
				"_allowed": "hB hb H h",
				"_preferred": "h"
			}
		}
	}
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = {
	"supplemental": {
		"version": {
			"_number": "$Revision: 13091 $",
			"_unicodeVersion": "9.0.0",
			"_cldrVersion": "30.0.3"
		},
		"weekData": {
			"minDays": {
				"001": "1",
				"AD": "4",
				"AN": "4",
				"AT": "4",
				"AX": "4",
				"BE": "4",
				"BG": "4",
				"CH": "4",
				"CZ": "4",
				"DE": "4",
				"DK": "4",
				"EE": "4",
				"ES": "4",
				"FI": "4",
				"FJ": "4",
				"FO": "4",
				"FR": "4",
				"GB": "4",
				"GF": "4",
				"GG": "4",
				"GI": "4",
				"GP": "4",
				"GR": "4",
				"GU": "1",
				"HU": "4",
				"IE": "4",
				"IM": "4",
				"IS": "4",
				"IT": "4",
				"JE": "4",
				"LI": "4",
				"LT": "4",
				"LU": "4",
				"MC": "4",
				"MQ": "4",
				"NL": "4",
				"NO": "4",
				"PL": "4",
				"PT": "4",
				"RE": "4",
				"SE": "4",
				"SJ": "4",
				"SK": "4",
				"SM": "4",
				"UM": "1",
				"US": "1",
				"VA": "4",
				"VI": "1"
			},
			"firstDay": {
				"001": "mon",
				"AD": "mon",
				"AE": "sat",
				"AF": "sat",
				"AG": "sun",
				"AI": "mon",
				"AL": "mon",
				"AM": "mon",
				"AN": "mon",
				"AR": "sun",
				"AS": "sun",
				"AT": "mon",
				"AU": "sun",
				"AX": "mon",
				"AZ": "mon",
				"BA": "mon",
				"BD": "fri",
				"BE": "mon",
				"BG": "mon",
				"BH": "sat",
				"BM": "mon",
				"BN": "mon",
				"BR": "sun",
				"BS": "sun",
				"BT": "sun",
				"BW": "sun",
				"BY": "mon",
				"BZ": "sun",
				"CA": "sun",
				"CH": "mon",
				"CL": "mon",
				"CM": "mon",
				"CN": "sun",
				"CO": "sun",
				"CR": "mon",
				"CY": "mon",
				"CZ": "mon",
				"DE": "mon",
				"DJ": "sat",
				"DK": "mon",
				"DM": "sun",
				"DO": "sun",
				"DZ": "sat",
				"EC": "mon",
				"EE": "mon",
				"EG": "sat",
				"ES": "mon",
				"ET": "sun",
				"FI": "mon",
				"FJ": "mon",
				"FO": "mon",
				"FR": "mon",
				"GB": "mon",
				"GB-alt-variant": "sun",
				"GE": "mon",
				"GF": "mon",
				"GP": "mon",
				"GR": "mon",
				"GT": "sun",
				"GU": "sun",
				"HK": "sun",
				"HN": "sun",
				"HR": "mon",
				"HU": "mon",
				"ID": "sun",
				"IE": "sun",
				"IL": "sun",
				"IN": "sun",
				"IQ": "sat",
				"IR": "sat",
				"IS": "mon",
				"IT": "mon",
				"JM": "sun",
				"JO": "sat",
				"JP": "sun",
				"KE": "sun",
				"KG": "mon",
				"KH": "sun",
				"KR": "sun",
				"KW": "sat",
				"KZ": "mon",
				"LA": "sun",
				"LB": "mon",
				"LI": "mon",
				"LK": "mon",
				"LT": "mon",
				"LU": "mon",
				"LV": "mon",
				"LY": "sat",
				"MA": "sat",
				"MC": "mon",
				"MD": "mon",
				"ME": "mon",
				"MH": "sun",
				"MK": "mon",
				"MM": "sun",
				"MN": "mon",
				"MO": "sun",
				"MQ": "mon",
				"MT": "sun",
				"MV": "fri",
				"MX": "sun",
				"MY": "mon",
				"MZ": "sun",
				"NI": "sun",
				"NL": "mon",
				"NO": "mon",
				"NP": "sun",
				"NZ": "sun",
				"OM": "sat",
				"PA": "sun",
				"PE": "sun",
				"PH": "sun",
				"PK": "sun",
				"PL": "mon",
				"PR": "sun",
				"PT": "mon",
				"PY": "sun",
				"QA": "sat",
				"RE": "mon",
				"RO": "mon",
				"RS": "mon",
				"RU": "mon",
				"SA": "sun",
				"SD": "sat",
				"SE": "mon",
				"SG": "sun",
				"SI": "mon",
				"SK": "mon",
				"SM": "mon",
				"SV": "sun",
				"SY": "sat",
				"TH": "sun",
				"TJ": "mon",
				"TM": "mon",
				"TN": "sun",
				"TR": "mon",
				"TT": "sun",
				"TW": "sun",
				"UA": "mon",
				"UM": "sun",
				"US": "sun",
				"UY": "mon",
				"UZ": "mon",
				"VA": "mon",
				"VE": "sun",
				"VI": "sun",
				"VN": "mon",
				"WS": "sun",
				"XK": "mon",
				"YE": "sun",
				"ZA": "sun",
				"ZW": "sun"
			},
			"weekendStart": {
				"001": "sat",
				"AE": "fri",
				"AF": "thu",
				"BH": "fri",
				"DZ": "fri",
				"EG": "fri",
				"IL": "fri",
				"IN": "sun",
				"IQ": "fri",
				"IR": "fri",
				"JO": "fri",
				"KW": "fri",
				"LY": "fri",
				"MA": "fri",
				"OM": "fri",
				"QA": "fri",
				"SA": "fri",
				"SD": "fri",
				"SY": "fri",
				"TN": "fri",
				"YE": "fri"
			},
			"weekendEnd": {
				"001": "sun",
				"AE": "sat",
				"AF": "fri",
				"BH": "sat",
				"DZ": "sat",
				"EG": "sat",
				"IL": "sat",
				"IQ": "sat",
				"IR": "fri",
				"JO": "sat",
				"KW": "sat",
				"LY": "sat",
				"MA": "sat",
				"OM": "sat",
				"QA": "sat",
				"SA": "sat",
				"SD": "sat",
				"SY": "sat",
				"TN": "sat",
				"YE": "sat"
			},
			"af": {
				"_ordering": "weekOfDate weekOfInterval weekOfMonth"
			},
			"am az bs cs cy da el et hi ky lt mk sk ta th": {
				"_ordering": "weekOfYear weekOfMonth"
			},
			"ar fil gu hu hy id kk ko": {
				"_ordering": "weekOfMonth"
			},
			"be ro ru": {
				"_ordering": "weekOfInterval weekOfMonth"
			},
			"bg de iw pt ur zh": {
				"_ordering": "weekOfDate weekOfMonth weekOfInterval"
			},
			"ca es fr gl": {
				"_ordering": "weekOfDate"
			},
			"en bn ja ka": {
				"_ordering": "weekOfDate weekOfMonth"
			},
			"eu": {
				"_ordering": "weekOfMonth weekOfDate"
			},
			"fa hr it lv pl si sr uk uz": {
				"_ordering": "weekOfMonth weekOfInterval"
			},
			"fi zh-TW": {
				"_ordering": "weekOfYear weekOfDate weekOfMonth"
			},
			"is mn no sv vi": {
				"_ordering": "weekOfYear weekOfMonth weekOfInterval"
			},
			"km mr": {
				"_ordering": "weekOfMonth weekOfYear"
			},
			"kn ml pa": {
				"_ordering": "weekOfMonth weekOfDate weekOfYear"
			},
			"lo sq": {
				"_ordering": "weekOfMonth weekOfInterval weekOfDate weekOfYear"
			},
			"ms tr": {
				"_ordering": "weekOfMonth weekOfYear weekOfInterval weekOfDate"
			},
			"nl": {
				"_ordering": "weekOfDate weekOfYear weekOfMonth"
			},
			"sl": {
				"_ordering": "weekOfInterval"
			},
			"sw te": {
				"_ordering": "weekOfMonth weekOfInterval weekOfYear"
			},
			"und": {
				"_ordering": "weekOfYear"
			},
			"zu": {
				"_ordering": "weekOfYear weekOfInterval"
			}
		}
	}
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = {
	"main": {
		"en": {
			"identity": {
				"version": {
					"_number": "$Revision: 13050 $",
					"_cldrVersion": "30.0.3"
				},
				"language": "en"
			},
			"dates": {
				"calendars": {
					"gregorian": {
						"months": {
							"format": {
								"abbreviated": {
									"1": "Jan",
									"2": "Feb",
									"3": "Mar",
									"4": "Apr",
									"5": "May",
									"6": "Jun",
									"7": "Jul",
									"8": "Aug",
									"9": "Sep",
									"10": "Oct",
									"11": "Nov",
									"12": "Dec"
								},
								"narrow": {
									"1": "J",
									"2": "F",
									"3": "M",
									"4": "A",
									"5": "M",
									"6": "J",
									"7": "J",
									"8": "A",
									"9": "S",
									"10": "O",
									"11": "N",
									"12": "D"
								},
								"wide": {
									"1": "January",
									"2": "February",
									"3": "March",
									"4": "April",
									"5": "May",
									"6": "June",
									"7": "July",
									"8": "August",
									"9": "September",
									"10": "October",
									"11": "November",
									"12": "December"
								}
							},
							"stand-alone": {
								"abbreviated": {
									"1": "Jan",
									"2": "Feb",
									"3": "Mar",
									"4": "Apr",
									"5": "May",
									"6": "Jun",
									"7": "Jul",
									"8": "Aug",
									"9": "Sep",
									"10": "Oct",
									"11": "Nov",
									"12": "Dec"
								},
								"narrow": {
									"1": "J",
									"2": "F",
									"3": "M",
									"4": "A",
									"5": "M",
									"6": "J",
									"7": "J",
									"8": "A",
									"9": "S",
									"10": "O",
									"11": "N",
									"12": "D"
								},
								"wide": {
									"1": "January",
									"2": "February",
									"3": "March",
									"4": "April",
									"5": "May",
									"6": "June",
									"7": "July",
									"8": "August",
									"9": "September",
									"10": "October",
									"11": "November",
									"12": "December"
								}
							}
						},
						"days": {
							"format": {
								"abbreviated": {
									"sun": "Sun",
									"mon": "Mon",
									"tue": "Tue",
									"wed": "Wed",
									"thu": "Thu",
									"fri": "Fri",
									"sat": "Sat"
								},
								"narrow": {
									"sun": "S",
									"mon": "M",
									"tue": "T",
									"wed": "W",
									"thu": "T",
									"fri": "F",
									"sat": "S"
								},
								"short": {
									"sun": "Su",
									"mon": "Mo",
									"tue": "Tu",
									"wed": "We",
									"thu": "Th",
									"fri": "Fr",
									"sat": "Sa"
								},
								"wide": {
									"sun": "Sunday",
									"mon": "Monday",
									"tue": "Tuesday",
									"wed": "Wednesday",
									"thu": "Thursday",
									"fri": "Friday",
									"sat": "Saturday"
								}
							},
							"stand-alone": {
								"abbreviated": {
									"sun": "Sun",
									"mon": "Mon",
									"tue": "Tue",
									"wed": "Wed",
									"thu": "Thu",
									"fri": "Fri",
									"sat": "Sat"
								},
								"narrow": {
									"sun": "S",
									"mon": "M",
									"tue": "T",
									"wed": "W",
									"thu": "T",
									"fri": "F",
									"sat": "S"
								},
								"short": {
									"sun": "Su",
									"mon": "Mo",
									"tue": "Tu",
									"wed": "We",
									"thu": "Th",
									"fri": "Fr",
									"sat": "Sa"
								},
								"wide": {
									"sun": "Sunday",
									"mon": "Monday",
									"tue": "Tuesday",
									"wed": "Wednesday",
									"thu": "Thursday",
									"fri": "Friday",
									"sat": "Saturday"
								}
							}
						},
						"quarters": {
							"format": {
								"abbreviated": {
									"1": "Q1",
									"2": "Q2",
									"3": "Q3",
									"4": "Q4"
								},
								"narrow": {
									"1": "1",
									"2": "2",
									"3": "3",
									"4": "4"
								},
								"wide": {
									"1": "1st quarter",
									"2": "2nd quarter",
									"3": "3rd quarter",
									"4": "4th quarter"
								}
							},
							"stand-alone": {
								"abbreviated": {
									"1": "Q1",
									"2": "Q2",
									"3": "Q3",
									"4": "Q4"
								},
								"narrow": {
									"1": "1",
									"2": "2",
									"3": "3",
									"4": "4"
								},
								"wide": {
									"1": "1st quarter",
									"2": "2nd quarter",
									"3": "3rd quarter",
									"4": "4th quarter"
								}
							}
						},
						"dayPeriods": {
							"format": {
								"abbreviated": {
									"midnight": "midnight",
									"am": "AM",
									"am-alt-variant": "am",
									"noon": "noon",
									"pm": "PM",
									"pm-alt-variant": "pm",
									"morning1": "in the morning",
									"afternoon1": "in the afternoon",
									"evening1": "in the evening",
									"night1": "at night"
								},
								"narrow": {
									"midnight": "mi",
									"am": "a",
									"am-alt-variant": "am",
									"noon": "n",
									"pm": "p",
									"pm-alt-variant": "pm",
									"morning1": "in the morning",
									"afternoon1": "in the afternoon",
									"evening1": "in the evening",
									"night1": "at night"
								},
								"wide": {
									"midnight": "midnight",
									"am": "AM",
									"am-alt-variant": "am",
									"noon": "noon",
									"pm": "PM",
									"pm-alt-variant": "pm",
									"morning1": "in the morning",
									"afternoon1": "in the afternoon",
									"evening1": "in the evening",
									"night1": "at night"
								}
							},
							"stand-alone": {
								"abbreviated": {
									"midnight": "midnight",
									"am": "AM",
									"am-alt-variant": "am",
									"noon": "noon",
									"pm": "PM",
									"pm-alt-variant": "pm",
									"morning1": "morning",
									"afternoon1": "afternoon",
									"evening1": "evening",
									"night1": "night"
								},
								"narrow": {
									"midnight": "midnight",
									"am": "AM",
									"am-alt-variant": "am",
									"noon": "noon",
									"pm": "PM",
									"pm-alt-variant": "pm",
									"morning1": "morning",
									"afternoon1": "afternoon",
									"evening1": "evening",
									"night1": "night"
								},
								"wide": {
									"midnight": "midnight",
									"am": "AM",
									"am-alt-variant": "am",
									"noon": "noon",
									"pm": "PM",
									"pm-alt-variant": "pm",
									"morning1": "morning",
									"afternoon1": "afternoon",
									"evening1": "evening",
									"night1": "night"
								}
							}
						},
						"eras": {
							"eraNames": {
								"0": "Before Christ",
								"1": "Anno Domini",
								"0-alt-variant": "Before Common Era",
								"1-alt-variant": "Common Era"
							},
							"eraAbbr": {
								"0": "BC",
								"1": "AD",
								"0-alt-variant": "BCE",
								"1-alt-variant": "CE"
							},
							"eraNarrow": {
								"0": "B",
								"1": "A",
								"0-alt-variant": "BCE",
								"1-alt-variant": "CE"
							}
						},
						"dateFormats": {
							"full": "EEEE, MMMM d, y",
							"long": "MMMM d, y",
							"medium": "MMM d, y",
							"short": "M/d/yy"
						},
						"timeFormats": {
							"full": "h:mm:ss a zzzz",
							"long": "h:mm:ss a z",
							"medium": "h:mm:ss a",
							"short": "h:mm a"
						},
						"dateTimeFormats": {
							"full": "{1} 'at' {0}",
							"long": "{1} 'at' {0}",
							"medium": "{1}, {0}",
							"short": "{1}, {0}",
							"availableFormats": {
								"d": "d",
								"E": "ccc",
								"Ed": "d E",
								"Ehm": "E h:mm a",
								"EHm": "E HH:mm",
								"Ehms": "E h:mm:ss a",
								"EHms": "E HH:mm:ss",
								"Gy": "y G",
								"GyMMM": "MMM y G",
								"GyMMMd": "MMM d, y G",
								"GyMMMEd": "E, MMM d, y G",
								"h": "h a",
								"H": "HH",
								"hm": "h:mm a",
								"Hm": "HH:mm",
								"hms": "h:mm:ss a",
								"Hms": "HH:mm:ss",
								"hmsv": "h:mm:ss a v",
								"Hmsv": "HH:mm:ss v",
								"hmv": "h:mm a v",
								"Hmv": "HH:mm v",
								"M": "L",
								"Md": "M/d",
								"MEd": "E, M/d",
								"MMM": "LLL",
								"MMMd": "MMM d",
								"MMMEd": "E, MMM d",
								"MMMMd": "MMMM d",
								"MMMMW": "'week' W 'of' MMMM",
								"ms": "mm:ss",
								"y": "y",
								"yM": "M/y",
								"yMd": "M/d/y",
								"yMEd": "E, M/d/y",
								"yMMM": "MMM y",
								"yMMMd": "MMM d, y",
								"yMMMEd": "E, MMM d, y",
								"yMMMM": "MMMM y",
								"yQQQ": "QQQ y",
								"yQQQQ": "QQQQ y",
								"yw": "'week' w 'of' y"
							},
							"appendItems": {
								"Day": "{0} ({2}: {1})",
								"Day-Of-Week": "{0} {1}",
								"Era": "{0} {1}",
								"Hour": "{0} ({2}: {1})",
								"Minute": "{0} ({2}: {1})",
								"Month": "{0} ({2}: {1})",
								"Quarter": "{0} ({2}: {1})",
								"Second": "{0} ({2}: {1})",
								"Timezone": "{0} {1}",
								"Week": "{0} ({2}: {1})",
								"Year": "{0} {1}"
							},
							"intervalFormats": {
								"intervalFormatFallback": "{0} – {1}",
								"d": {
									"d": "d – d"
								},
								"h": {
									"a": "h a – h a",
									"h": "h – h a"
								},
								"H": {
									"H": "HH – HH"
								},
								"hm": {
									"a": "h:mm a – h:mm a",
									"h": "h:mm – h:mm a",
									"m": "h:mm – h:mm a"
								},
								"Hm": {
									"H": "HH:mm – HH:mm",
									"m": "HH:mm – HH:mm"
								},
								"hmv": {
									"a": "h:mm a – h:mm a v",
									"h": "h:mm – h:mm a v",
									"m": "h:mm – h:mm a v"
								},
								"Hmv": {
									"H": "HH:mm – HH:mm v",
									"m": "HH:mm – HH:mm v"
								},
								"hv": {
									"a": "h a – h a v",
									"h": "h – h a v"
								},
								"Hv": {
									"H": "HH – HH v"
								},
								"M": {
									"M": "M – M"
								},
								"Md": {
									"d": "M/d – M/d",
									"M": "M/d – M/d"
								},
								"MEd": {
									"d": "E, M/d – E, M/d",
									"M": "E, M/d – E, M/d"
								},
								"MMM": {
									"M": "MMM – MMM"
								},
								"MMMd": {
									"d": "MMM d – d",
									"M": "MMM d – MMM d"
								},
								"MMMEd": {
									"d": "E, MMM d – E, MMM d",
									"M": "E, MMM d – E, MMM d"
								},
								"y": {
									"y": "y – y"
								},
								"yM": {
									"M": "M/y – M/y",
									"y": "M/y – M/y"
								},
								"yMd": {
									"d": "M/d/y – M/d/y",
									"M": "M/d/y – M/d/y",
									"y": "M/d/y – M/d/y"
								},
								"yMEd": {
									"d": "E, M/d/y – E, M/d/y",
									"M": "E, M/d/y – E, M/d/y",
									"y": "E, M/d/y – E, M/d/y"
								},
								"yMMM": {
									"M": "MMM – MMM y",
									"y": "MMM y – MMM y"
								},
								"yMMMd": {
									"d": "MMM d – d, y",
									"M": "MMM d – MMM d, y",
									"y": "MMM d, y – MMM d, y"
								},
								"yMMMEd": {
									"d": "E, MMM d – E, MMM d, y",
									"M": "E, MMM d – E, MMM d, y",
									"y": "E, MMM d, y – E, MMM d, y"
								},
								"yMMMM": {
									"M": "MMMM – MMMM y",
									"y": "MMMM y – MMMM y"
								}
							}
						}
					}
				}
			}
		}
	}
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = {
	"main": {
		"es": {
			"identity": {
				"version": {
					"_number": "$Revision: 12880 $",
					"_cldrVersion": "30.0.3"
				},
				"language": "es"
			},
			"dates": {
				"calendars": {
					"gregorian": {
						"months": {
							"format": {
								"abbreviated": {
									"1": "ene.",
									"2": "feb.",
									"3": "mar.",
									"4": "abr.",
									"5": "may.",
									"6": "jun.",
									"7": "jul.",
									"8": "ago.",
									"9": "sept.",
									"10": "oct.",
									"11": "nov.",
									"12": "dic."
								},
								"narrow": {
									"1": "E",
									"2": "F",
									"3": "M",
									"4": "A",
									"5": "M",
									"6": "J",
									"7": "J",
									"8": "A",
									"9": "S",
									"10": "O",
									"11": "N",
									"12": "D"
								},
								"wide": {
									"1": "enero",
									"2": "febrero",
									"3": "marzo",
									"4": "abril",
									"5": "mayo",
									"6": "junio",
									"7": "julio",
									"8": "agosto",
									"9": "septiembre",
									"10": "octubre",
									"11": "noviembre",
									"12": "diciembre"
								}
							},
							"stand-alone": {
								"abbreviated": {
									"1": "ene.",
									"2": "feb.",
									"3": "mar.",
									"4": "abr.",
									"5": "may.",
									"6": "jun.",
									"7": "jul.",
									"8": "ago.",
									"9": "sept.",
									"10": "oct.",
									"11": "nov.",
									"12": "dic."
								},
								"narrow": {
									"1": "E",
									"2": "F",
									"3": "M",
									"4": "A",
									"5": "M",
									"6": "J",
									"7": "J",
									"8": "A",
									"9": "S",
									"10": "O",
									"11": "N",
									"12": "D"
								},
								"wide": {
									"1": "enero",
									"2": "febrero",
									"3": "marzo",
									"4": "abril",
									"5": "mayo",
									"6": "junio",
									"7": "julio",
									"8": "agosto",
									"9": "septiembre",
									"10": "octubre",
									"11": "noviembre",
									"12": "diciembre"
								}
							}
						},
						"days": {
							"format": {
								"abbreviated": {
									"sun": "dom.",
									"mon": "lun.",
									"tue": "mar.",
									"wed": "mié.",
									"thu": "jue.",
									"fri": "vie.",
									"sat": "sáb."
								},
								"narrow": {
									"sun": "D",
									"mon": "L",
									"tue": "M",
									"wed": "X",
									"thu": "J",
									"fri": "V",
									"sat": "S"
								},
								"short": {
									"sun": "DO",
									"mon": "LU",
									"tue": "MA",
									"wed": "MI",
									"thu": "JU",
									"fri": "VI",
									"sat": "SA"
								},
								"wide": {
									"sun": "domingo",
									"mon": "lunes",
									"tue": "martes",
									"wed": "miércoles",
									"thu": "jueves",
									"fri": "viernes",
									"sat": "sábado"
								}
							},
							"stand-alone": {
								"abbreviated": {
									"sun": "dom.",
									"mon": "lun.",
									"tue": "mar.",
									"wed": "mié.",
									"thu": "jue.",
									"fri": "vie.",
									"sat": "sáb."
								},
								"narrow": {
									"sun": "D",
									"mon": "L",
									"tue": "M",
									"wed": "X",
									"thu": "J",
									"fri": "V",
									"sat": "S"
								},
								"short": {
									"sun": "DO",
									"mon": "LU",
									"tue": "MA",
									"wed": "MI",
									"thu": "JU",
									"fri": "VI",
									"sat": "SA"
								},
								"wide": {
									"sun": "domingo",
									"mon": "lunes",
									"tue": "martes",
									"wed": "miércoles",
									"thu": "jueves",
									"fri": "viernes",
									"sat": "sábado"
								}
							}
						},
						"quarters": {
							"format": {
								"abbreviated": {
									"1": "T1",
									"2": "T2",
									"3": "T3",
									"4": "T4"
								},
								"narrow": {
									"1": "1",
									"2": "2",
									"3": "3",
									"4": "4"
								},
								"wide": {
									"1": "1.er trimestre",
									"2": "2.º trimestre",
									"3": "3.er trimestre",
									"4": "4.º trimestre"
								}
							},
							"stand-alone": {
								"abbreviated": {
									"1": "T1",
									"2": "T2",
									"3": "T3",
									"4": "T4"
								},
								"narrow": {
									"1": "1",
									"2": "2",
									"3": "3",
									"4": "4"
								},
								"wide": {
									"1": "1.er trimestre",
									"2": "2.º trimestre",
									"3": "3.er trimestre",
									"4": "4.º trimestre"
								}
							}
						},
						"dayPeriods": {
							"format": {
								"abbreviated": {
									"am": "a. m.",
									"noon": "del mediodía",
									"pm": "p. m.",
									"morning1": "de la madrugada",
									"morning2": "de la mañana",
									"evening1": "de la tarde",
									"night1": "de la noche"
								},
								"narrow": {
									"am": "a. m.",
									"noon": "del mediodía",
									"pm": "p. m.",
									"morning1": "de la madrugada",
									"morning2": "de la mañana",
									"evening1": "de la tarde",
									"night1": "de la noche"
								},
								"wide": {
									"am": "a. m.",
									"noon": "del mediodía",
									"pm": "p. m.",
									"morning1": "de la madrugada",
									"morning2": "de la mañana",
									"evening1": "de la tarde",
									"night1": "de la noche"
								}
							},
							"stand-alone": {
								"abbreviated": {
									"am": "a. m.",
									"noon": "mediodía",
									"pm": "p. m.",
									"morning1": "madrugada",
									"morning2": "mañana",
									"evening1": "tarde",
									"night1": "noche"
								},
								"narrow": {
									"am": "a. m.",
									"noon": "mediodía",
									"pm": "p. m.",
									"morning1": "madrugada",
									"morning2": "mañana",
									"evening1": "tarde",
									"night1": "noche"
								},
								"wide": {
									"am": "a. m.",
									"noon": "mediodía",
									"pm": "p. m.",
									"morning1": "madrugada",
									"morning2": "mañana",
									"evening1": "tarde",
									"night1": "noche"
								}
							}
						},
						"eras": {
							"eraNames": {
								"0": "antes de Cristo",
								"1": "después de Cristo",
								"0-alt-variant": "antes de la era común",
								"1-alt-variant": "era común"
							},
							"eraAbbr": {
								"0": "a. C.",
								"1": "d. C.",
								"0-alt-variant": "a. e. c.",
								"1-alt-variant": "e. c."
							},
							"eraNarrow": {
								"0": "a. C.",
								"1": "d. C.",
								"0-alt-variant": "a. e. c.",
								"1-alt-variant": "e. c."
							}
						},
						"dateFormats": {
							"full": "EEEE, d 'de' MMMM 'de' y",
							"long": "d 'de' MMMM 'de' y",
							"medium": "d MMM y",
							"short": "d/M/yy"
						},
						"timeFormats": {
							"full": "H:mm:ss (zzzz)",
							"long": "H:mm:ss z",
							"medium": "H:mm:ss",
							"short": "H:mm"
						},
						"dateTimeFormats": {
							"full": "{1}, {0}",
							"long": "{1}, {0}",
							"medium": "{1} {0}",
							"short": "{1} {0}",
							"availableFormats": {
								"d": "d",
								"E": "ccc",
								"Ed": "E d",
								"Ehm": "E, h:mm a",
								"EHm": "E, H:mm",
								"Ehms": "E, h:mm:ss a",
								"EHms": "E, H:mm:ss",
								"Gy": "y G",
								"GyMMM": "MMM y G",
								"GyMMMd": "d MMM y G",
								"GyMMMEd": "E, d MMM y G",
								"GyMMMM": "MMMM 'de' y G",
								"GyMMMMd": "d 'de' MMMM 'de' y G",
								"GyMMMMEd": "E, d 'de' MMMM 'de' y G",
								"h": "h a",
								"H": "H",
								"hm": "h:mm a",
								"Hm": "H:mm",
								"hms": "h:mm:ss a",
								"Hms": "H:mm:ss",
								"hmsv": "h:mm:ss a v",
								"Hmsv": "H:mm:ss v",
								"hmsvvvv": "h:mm:ss a (vvvv)",
								"Hmsvvvv": "H:mm:ss (vvvv)",
								"hmv": "h:mm a v",
								"Hmv": "H:mm v",
								"M": "L",
								"Md": "d/M",
								"MEd": "E, d/M",
								"MMd": "d/M",
								"MMdd": "d/M",
								"MMM": "LLL",
								"MMMd": "d MMM",
								"MMMEd": "E, d MMM",
								"MMMMd": "d 'de' MMMM",
								"MMMMEd": "E, d 'de' MMMM",
								"MMMMW": "'semana' W 'de' MMM",
								"ms": "mm:ss",
								"y": "y",
								"yM": "M/y",
								"yMd": "d/M/y",
								"yMEd": "EEE, d/M/y",
								"yMM": "M/y",
								"yMMM": "MMM y",
								"yMMMd": "d MMM y",
								"yMMMEd": "EEE, d MMM y",
								"yMMMM": "MMMM 'de' y",
								"yMMMMd": "d 'de' MMMM 'de' y",
								"yMMMMEd": "EEE, d 'de' MMMM 'de' y",
								"yQQQ": "QQQ y",
								"yQQQQ": "QQQQ 'de' y",
								"yw": "'semana' w 'de' y"
							},
							"appendItems": {
								"Day": "{0} ({2}: {1})",
								"Day-Of-Week": "{0} {1}",
								"Era": "{1} {0}",
								"Hour": "{0} ({2}: {1})",
								"Minute": "{0} ({2}: {1})",
								"Month": "{0} ({2}: {1})",
								"Quarter": "{0} ({2}: {1})",
								"Second": "{0} ({2}: {1})",
								"Timezone": "{0} {1}",
								"Week": "{0} ({2}: {1})",
								"Year": "{1} {0}"
							},
							"intervalFormats": {
								"intervalFormatFallback": "{0}–{1}",
								"d": {
									"d": "d–d"
								},
								"h": {
									"a": "h a – h a",
									"h": "h–h a"
								},
								"H": {
									"H": "H–H"
								},
								"hm": {
									"a": "h:mm a – h:mm a",
									"h": "h:mm – h:mm a",
									"m": "h:mm – h:mm a"
								},
								"Hm": {
									"H": "H:mm–H:mm",
									"m": "H:mm–H:mm"
								},
								"hmv": {
									"a": "h:mm a – h:mm a v",
									"h": "h:mm–h:mm a v",
									"m": "h:mm–h:mm a v"
								},
								"Hmv": {
									"H": "H:mm–H:mm v",
									"m": "H:mm–H:mm v"
								},
								"hv": {
									"a": "h a – h a v",
									"h": "h–h a v"
								},
								"Hv": {
									"H": "H–H v"
								},
								"M": {
									"M": "M–M"
								},
								"Md": {
									"d": "d/M–d/M",
									"M": "d/M–d/M"
								},
								"MEd": {
									"d": "E, d/M – E, d/M",
									"M": "E, d/M – E, d/M"
								},
								"MMM": {
									"M": "MMM–MMM"
								},
								"MMMd": {
									"d": "d–d MMM",
									"M": "d MMM – d MMM"
								},
								"MMMEd": {
									"d": "E, d MMM – E, d MMM",
									"M": "E, d MMM – E, d MMM"
								},
								"MMMMd": {
									"d": "d–d 'de' MMMM",
									"M": "d 'de' MMMM–d 'de' MMMM"
								},
								"MMMMEd": {
									"d": "E, d 'de' MMMM–E, d 'de' MMMM",
									"M": "E, d 'de' MMMM–E, d 'de' MMMM"
								},
								"y": {
									"y": "y–y"
								},
								"yM": {
									"M": "M/y–M/y",
									"y": "M/y–M/y"
								},
								"yMd": {
									"d": "d/M/y–d/M/y",
									"M": "d/M/y–d/M/y",
									"y": "d/M/y–d/M/y"
								},
								"yMEd": {
									"d": "E, d/M/y – E, d/M/y",
									"M": "E, d/M/y – E, d/M/y",
									"y": "E, d/M/y – E, d/M/y"
								},
								"yMMM": {
									"M": "MMM–MMM y",
									"y": "MMM y – MMM y"
								},
								"yMMMd": {
									"d": "d–d MMM y",
									"M": "d MMM – d MMM y",
									"y": "d MMM y – d MMM y"
								},
								"yMMMEd": {
									"d": "E, d MMM – E, d MMM y",
									"M": "E, d MMM – E, d MMM y",
									"y": "E, d MMM y – E, d MMM y"
								},
								"yMMMM": {
									"M": "MMMM–MMMM 'de' y",
									"y": "MMMM 'de' y – MMMM 'de' y"
								},
								"yMMMMd": {
									"d": "d–d 'de' MMMM 'de' y",
									"M": "d 'de' MMMM–d 'de' MMMM 'de' y",
									"y": "d 'de' MMMM 'de' y–d 'de' MMMM 'de' y"
								},
								"yMMMMEd": {
									"d": "E, d 'de' MMMM–E, d 'de' MMMM 'de' y",
									"M": "E, d 'de' MMMM–E, d 'de' MMMM 'de' y",
									"y": "E, d 'de' MMMM 'de' y–E, d 'de' MMMM 'de' y"
								}
							}
						}
					}
				}
			}
		}
	}
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = {
	"main": {
		"pt": {
			"identity": {
				"version": {
					"_number": "$Revision: 12879 $",
					"_cldrVersion": "30.0.3"
				},
				"language": "pt"
			},
			"dates": {
				"calendars": {
					"gregorian": {
						"months": {
							"format": {
								"abbreviated": {
									"1": "jan",
									"2": "fev",
									"3": "mar",
									"4": "abr",
									"5": "mai",
									"6": "jun",
									"7": "jul",
									"8": "ago",
									"9": "set",
									"10": "out",
									"11": "nov",
									"12": "dez"
								},
								"narrow": {
									"1": "J",
									"2": "F",
									"3": "M",
									"4": "A",
									"5": "M",
									"6": "J",
									"7": "J",
									"8": "A",
									"9": "S",
									"10": "O",
									"11": "N",
									"12": "D"
								},
								"wide": {
									"1": "janeiro",
									"2": "fevereiro",
									"3": "março",
									"4": "abril",
									"5": "maio",
									"6": "junho",
									"7": "julho",
									"8": "agosto",
									"9": "setembro",
									"10": "outubro",
									"11": "novembro",
									"12": "dezembro"
								}
							},
							"stand-alone": {
								"abbreviated": {
									"1": "jan",
									"2": "fev",
									"3": "mar",
									"4": "abr",
									"5": "mai",
									"6": "jun",
									"7": "jul",
									"8": "ago",
									"9": "set",
									"10": "out",
									"11": "nov",
									"12": "dez"
								},
								"narrow": {
									"1": "J",
									"2": "F",
									"3": "M",
									"4": "A",
									"5": "M",
									"6": "J",
									"7": "J",
									"8": "A",
									"9": "S",
									"10": "O",
									"11": "N",
									"12": "D"
								},
								"wide": {
									"1": "janeiro",
									"2": "fevereiro",
									"3": "março",
									"4": "abril",
									"5": "maio",
									"6": "junho",
									"7": "julho",
									"8": "agosto",
									"9": "setembro",
									"10": "outubro",
									"11": "novembro",
									"12": "dezembro"
								}
							}
						},
						"days": {
							"format": {
								"abbreviated": {
									"sun": "dom",
									"mon": "seg",
									"tue": "ter",
									"wed": "qua",
									"thu": "qui",
									"fri": "sex",
									"sat": "sáb"
								},
								"narrow": {
									"sun": "D",
									"mon": "S",
									"tue": "T",
									"wed": "Q",
									"thu": "Q",
									"fri": "S",
									"sat": "S"
								},
								"short": {
									"sun": "dom",
									"mon": "seg",
									"tue": "ter",
									"wed": "qua",
									"thu": "qui",
									"fri": "sex",
									"sat": "sáb"
								},
								"wide": {
									"sun": "domingo",
									"mon": "segunda-feira",
									"tue": "terça-feira",
									"wed": "quarta-feira",
									"thu": "quinta-feira",
									"fri": "sexta-feira",
									"sat": "sábado"
								}
							},
							"stand-alone": {
								"abbreviated": {
									"sun": "dom",
									"mon": "seg",
									"tue": "ter",
									"wed": "qua",
									"thu": "qui",
									"fri": "sex",
									"sat": "sáb"
								},
								"narrow": {
									"sun": "D",
									"mon": "S",
									"tue": "T",
									"wed": "Q",
									"thu": "Q",
									"fri": "S",
									"sat": "S"
								},
								"short": {
									"sun": "dom",
									"mon": "seg",
									"tue": "ter",
									"wed": "qua",
									"thu": "qui",
									"fri": "sex",
									"sat": "sáb"
								},
								"wide": {
									"sun": "domingo",
									"mon": "segunda-feira",
									"tue": "terça-feira",
									"wed": "quarta-feira",
									"thu": "quinta-feira",
									"fri": "sexta-feira",
									"sat": "sábado"
								}
							}
						},
						"quarters": {
							"format": {
								"abbreviated": {
									"1": "T1",
									"2": "T2",
									"3": "T3",
									"4": "T4"
								},
								"narrow": {
									"1": "1",
									"2": "2",
									"3": "3",
									"4": "4"
								},
								"wide": {
									"1": "1º trimestre",
									"2": "2º trimestre",
									"3": "3º trimestre",
									"4": "4º trimestre"
								}
							},
							"stand-alone": {
								"abbreviated": {
									"1": "T1",
									"2": "T2",
									"3": "T3",
									"4": "T4"
								},
								"narrow": {
									"1": "1",
									"2": "2",
									"3": "3",
									"4": "4"
								},
								"wide": {
									"1": "1º trimestre",
									"2": "2º trimestre",
									"3": "3º trimestre",
									"4": "4º trimestre"
								}
							}
						},
						"dayPeriods": {
							"format": {
								"abbreviated": {
									"midnight": "meia-noite",
									"am": "AM",
									"noon": "meio-dia",
									"pm": "PM",
									"morning1": "da manhã",
									"afternoon1": "da tarde",
									"evening1": "da noite",
									"night1": "da madrugada"
								},
								"narrow": {
									"midnight": "meia-noite",
									"am": "AM",
									"noon": "meio-dia",
									"pm": "PM",
									"morning1": "da manhã",
									"afternoon1": "da tarde",
									"evening1": "da noite",
									"night1": "da madrugada"
								},
								"wide": {
									"midnight": "meia-noite",
									"am": "AM",
									"noon": "meio-dia",
									"pm": "PM",
									"morning1": "da manhã",
									"afternoon1": "da tarde",
									"evening1": "da noite",
									"night1": "da madrugada"
								}
							},
							"stand-alone": {
								"abbreviated": {
									"midnight": "meia-noite",
									"am": "AM",
									"noon": "meio-dia",
									"pm": "PM",
									"morning1": "manhã",
									"afternoon1": "tarde",
									"evening1": "noite",
									"night1": "madrugada"
								},
								"narrow": {
									"midnight": "meia-noite",
									"am": "AM",
									"noon": "meio-dia",
									"pm": "PM",
									"morning1": "manhã",
									"afternoon1": "tarde",
									"evening1": "noite",
									"night1": "madrugada"
								},
								"wide": {
									"midnight": "meia-noite",
									"am": "AM",
									"noon": "meio-dia",
									"pm": "PM",
									"morning1": "manhã",
									"afternoon1": "tarde",
									"evening1": "noite",
									"night1": "madrugada"
								}
							}
						},
						"eras": {
							"eraNames": {
								"0": "antes de Cristo",
								"1": "depois de Cristo",
								"0-alt-variant": "antes da Era Comum",
								"1-alt-variant": "Era Comum"
							},
							"eraAbbr": {
								"0": "a.C.",
								"1": "d.C.",
								"0-alt-variant": "AEC",
								"1-alt-variant": "EC"
							},
							"eraNarrow": {
								"0": "a.C.",
								"1": "d.C.",
								"0-alt-variant": "AEC",
								"1-alt-variant": "EC"
							}
						},
						"dateFormats": {
							"full": "EEEE, d 'de' MMMM 'de' y",
							"long": "d 'de' MMMM 'de' y",
							"medium": "d 'de' MMM 'de' y",
							"short": "dd/MM/y"
						},
						"timeFormats": {
							"full": "HH:mm:ss zzzz",
							"long": "HH:mm:ss z",
							"medium": "HH:mm:ss",
							"short": "HH:mm"
						},
						"dateTimeFormats": {
							"full": "{1} {0}",
							"long": "{1} {0}",
							"medium": "{1} {0}",
							"short": "{1} {0}",
							"availableFormats": {
								"d": "d",
								"E": "ccc",
								"Ed": "E, d",
								"Ehm": "E, h:mm a",
								"EHm": "E, HH:mm",
								"Ehms": "E, h:mm:ss a",
								"EHms": "E, HH:mm:ss",
								"Gy": "y G",
								"GyMMM": "MMM 'de' y G",
								"GyMMMd": "d 'de' MMM 'de' y G",
								"GyMMMEd": "E, d 'de' MMM 'de' y G",
								"h": "h a",
								"H": "HH",
								"hm": "h:mm a",
								"Hm": "HH:mm",
								"hms": "h:mm:ss a",
								"Hms": "HH:mm:ss",
								"hmsv": "h:mm:ss a v",
								"Hmsv": "HH:mm:ss v",
								"hmv": "h:mm a v",
								"Hmv": "HH:mm v",
								"M": "L",
								"Md": "d/M",
								"MEd": "E, dd/MM",
								"MMdd": "dd/MM",
								"MMM": "LLL",
								"MMMd": "d 'de' MMM",
								"MMMEd": "E, d 'de' MMM",
								"MMMMd": "d 'de' MMMM",
								"MMMMEd": "E, d 'de' MMMM",
								"MMMMW": "W'ª' 'semana' 'de' MMMM",
								"ms": "mm:ss",
								"y": "y",
								"yM": "MM/y",
								"yMd": "dd/MM/y",
								"yMEd": "E, dd/MM/y",
								"yMM": "MM/y",
								"yMMM": "MMM 'de' y",
								"yMMMd": "d 'de' MMM 'de' y",
								"yMMMEd": "E, d 'de' MMM 'de' y",
								"yMMMM": "MMMM 'de' y",
								"yMMMMd": "d 'de' MMMM 'de' y",
								"yMMMMEd": "E, d 'de' MMMM 'de' y",
								"yQQQ": "QQQ 'de' y",
								"yQQQQ": "QQQQ 'de' y",
								"yw": "w'ª' 'semana' 'de' y"
							},
							"appendItems": {
								"Day": "{0} ({2}: {1})",
								"Day-Of-Week": "{0} {1}",
								"Era": "{1} {0}",
								"Hour": "{0} ({2}: {1})",
								"Minute": "{0} ({2}: {1})",
								"Month": "{0} ({2}: {1})",
								"Quarter": "{0} ({2}: {1})",
								"Second": "{0} ({2}: {1})",
								"Timezone": "{0} {1}",
								"Week": "{0} ({2}: {1})",
								"Year": "{1} {0}"
							},
							"intervalFormats": {
								"intervalFormatFallback": "{0} - {1}",
								"d": {
									"d": "d – d"
								},
								"h": {
									"a": "h'h' a – h'h' a",
									"h": "h'h' - h'h' a"
								},
								"H": {
									"H": "HH'h' - HH'h'"
								},
								"hm": {
									"a": "h:mm a – h:mm a",
									"h": "h:mm – h:mm a",
									"m": "h:mm – h:mm a"
								},
								"Hm": {
									"H": "HH:mm – HH:mm",
									"m": "HH:mm – HH:mm"
								},
								"hmv": {
									"a": "h:mm a – h:mm a v",
									"h": "h:mm – h:mm a v",
									"m": "h:mm – h:mm a v"
								},
								"Hmv": {
									"H": "HH:mm – HH:mm v",
									"m": "HH:mm – HH:mm v"
								},
								"hv": {
									"a": "h a – h a v",
									"h": "h – h a v"
								},
								"Hv": {
									"H": "HH – HH v"
								},
								"M": {
									"M": "M – M"
								},
								"Md": {
									"d": "dd/MM – dd/MM",
									"M": "dd/MM – dd/MM"
								},
								"MEd": {
									"d": "E, dd/MM – E, dd/MM",
									"M": "E, dd/MM – E, dd/MM"
								},
								"MMM": {
									"M": "MMM – MMM"
								},
								"MMMd": {
									"d": "d – d 'de' MMM",
									"M": "d 'de' MMM – d 'de' MMM"
								},
								"MMMEd": {
									"d": "E, d – E, d 'de' MMM",
									"M": "E, d 'de' MMM – E, d 'de' MMM"
								},
								"y": {
									"y": "y – y"
								},
								"yM": {
									"M": "MM/y – MM/y",
									"y": "MM/y – MM/y"
								},
								"yMd": {
									"d": "dd/MM/y – dd/MM/y",
									"M": "dd/MM/y – dd/MM/y",
									"y": "dd/MM/y – dd/MM/y"
								},
								"yMEd": {
									"d": "E, dd/MM/y – E, dd/MM/y",
									"M": "E, dd/MM/y – E, dd/MM/y",
									"y": "E, dd/MM/y – E, dd/MM/y"
								},
								"yMMM": {
									"M": "MMM – MMM 'de' y",
									"y": "MMM 'de' y – MMM 'de' y"
								},
								"yMMMd": {
									"d": "d – d 'de' MMM 'de' y",
									"M": "d 'de' MMM – d 'de' MMM 'de' y",
									"y": "d 'de' MMM 'de' y – d 'de' MMM 'de' y"
								},
								"yMMMEd": {
									"d": "E, d – E, d 'de' MMM 'de' y",
									"M": "E, d 'de' MMM – E, d 'de' MMM 'de' y",
									"y": "E, d 'de' MMM 'de' y – E, d 'de' MMM 'de' y"
								},
								"yMMMM": {
									"M": "MMMM – MMMM 'de' y",
									"y": "MMMM 'de' y – MMMM 'de' y"
								}
							}
						}
					}
				}
			}
		}
	}
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = {
	"main": {
		"en": {
			"identity": {
				"version": {
					"_number": "$Revision: 13050 $",
					"_cldrVersion": "30.0.3"
				},
				"language": "en"
			},
			"numbers": {
				"currencies": {
					"ADP": {
						"displayName": "Andorran Peseta",
						"displayName-count-one": "Andorran peseta",
						"displayName-count-other": "Andorran pesetas",
						"symbol": "ADP"
					},
					"AED": {
						"displayName": "United Arab Emirates Dirham",
						"displayName-count-one": "UAE dirham",
						"displayName-count-other": "UAE dirhams",
						"symbol": "AED"
					},
					"AFA": {
						"displayName": "Afghan Afghani (1927–2002)",
						"displayName-count-one": "Afghan afghani (1927–2002)",
						"displayName-count-other": "Afghan afghanis (1927–2002)",
						"symbol": "AFA"
					},
					"AFN": {
						"displayName": "Afghan Afghani",
						"displayName-count-one": "Afghan Afghani",
						"displayName-count-other": "Afghan Afghanis",
						"symbol": "AFN"
					},
					"ALK": {
						"displayName": "Albanian Lek (1946–1965)",
						"displayName-count-one": "Albanian lek (1946–1965)",
						"displayName-count-other": "Albanian lekë (1946–1965)"
					},
					"ALL": {
						"displayName": "Albanian Lek",
						"displayName-count-one": "Albanian lek",
						"displayName-count-other": "Albanian lekë",
						"symbol": "ALL"
					},
					"AMD": {
						"displayName": "Armenian Dram",
						"displayName-count-one": "Armenian dram",
						"displayName-count-other": "Armenian drams",
						"symbol": "AMD"
					},
					"ANG": {
						"displayName": "Netherlands Antillean Guilder",
						"displayName-count-one": "Netherlands Antillean guilder",
						"displayName-count-other": "Netherlands Antillean guilders",
						"symbol": "ANG"
					},
					"AOA": {
						"displayName": "Angolan Kwanza",
						"displayName-count-one": "Angolan kwanza",
						"displayName-count-other": "Angolan kwanzas",
						"symbol": "AOA",
						"symbol-alt-narrow": "Kz"
					},
					"AOK": {
						"displayName": "Angolan Kwanza (1977–1991)",
						"displayName-count-one": "Angolan kwanza (1977–1991)",
						"displayName-count-other": "Angolan kwanzas (1977–1991)",
						"symbol": "AOK"
					},
					"AON": {
						"displayName": "Angolan New Kwanza (1990–2000)",
						"displayName-count-one": "Angolan new kwanza (1990–2000)",
						"displayName-count-other": "Angolan new kwanzas (1990–2000)",
						"symbol": "AON"
					},
					"AOR": {
						"displayName": "Angolan Readjusted Kwanza (1995–1999)",
						"displayName-count-one": "Angolan readjusted kwanza (1995–1999)",
						"displayName-count-other": "Angolan readjusted kwanzas (1995–1999)",
						"symbol": "AOR"
					},
					"ARA": {
						"displayName": "Argentine Austral",
						"displayName-count-one": "Argentine austral",
						"displayName-count-other": "Argentine australs",
						"symbol": "ARA"
					},
					"ARL": {
						"displayName": "Argentine Peso Ley (1970–1983)",
						"displayName-count-one": "Argentine peso ley (1970–1983)",
						"displayName-count-other": "Argentine pesos ley (1970–1983)",
						"symbol": "ARL"
					},
					"ARM": {
						"displayName": "Argentine Peso (1881–1970)",
						"displayName-count-one": "Argentine peso (1881–1970)",
						"displayName-count-other": "Argentine pesos (1881–1970)",
						"symbol": "ARM"
					},
					"ARP": {
						"displayName": "Argentine Peso (1983–1985)",
						"displayName-count-one": "Argentine peso (1983–1985)",
						"displayName-count-other": "Argentine pesos (1983–1985)",
						"symbol": "ARP"
					},
					"ARS": {
						"displayName": "Argentine Peso",
						"displayName-count-one": "Argentine peso",
						"displayName-count-other": "Argentine pesos",
						"symbol": "ARS",
						"symbol-alt-narrow": "$"
					},
					"ATS": {
						"displayName": "Austrian Schilling",
						"displayName-count-one": "Austrian schilling",
						"displayName-count-other": "Austrian schillings",
						"symbol": "ATS"
					},
					"AUD": {
						"displayName": "Australian Dollar",
						"displayName-count-one": "Australian dollar",
						"displayName-count-other": "Australian dollars",
						"symbol": "A$",
						"symbol-alt-narrow": "$"
					},
					"AWG": {
						"displayName": "Aruban Florin",
						"displayName-count-one": "Aruban florin",
						"displayName-count-other": "Aruban florin",
						"symbol": "AWG"
					},
					"AZM": {
						"displayName": "Azerbaijani Manat (1993–2006)",
						"displayName-count-one": "Azerbaijani manat (1993–2006)",
						"displayName-count-other": "Azerbaijani manats (1993–2006)",
						"symbol": "AZM"
					},
					"AZN": {
						"displayName": "Azerbaijani Manat",
						"displayName-count-one": "Azerbaijani manat",
						"displayName-count-other": "Azerbaijani manats",
						"symbol": "AZN"
					},
					"BAD": {
						"displayName": "Bosnia-Herzegovina Dinar (1992–1994)",
						"displayName-count-one": "Bosnia-Herzegovina dinar (1992–1994)",
						"displayName-count-other": "Bosnia-Herzegovina dinars (1992–1994)",
						"symbol": "BAD"
					},
					"BAM": {
						"displayName": "Bosnia-Herzegovina Convertible Mark",
						"displayName-count-one": "Bosnia-Herzegovina convertible mark",
						"displayName-count-other": "Bosnia-Herzegovina convertible marks",
						"symbol": "BAM",
						"symbol-alt-narrow": "KM"
					},
					"BAN": {
						"displayName": "Bosnia-Herzegovina New Dinar (1994–1997)",
						"displayName-count-one": "Bosnia-Herzegovina new dinar (1994–1997)",
						"displayName-count-other": "Bosnia-Herzegovina new dinars (1994–1997)",
						"symbol": "BAN"
					},
					"BBD": {
						"displayName": "Barbadian Dollar",
						"displayName-count-one": "Barbadian dollar",
						"displayName-count-other": "Barbadian dollars",
						"symbol": "BBD",
						"symbol-alt-narrow": "$"
					},
					"BDT": {
						"displayName": "Bangladeshi Taka",
						"displayName-count-one": "Bangladeshi taka",
						"displayName-count-other": "Bangladeshi takas",
						"symbol": "BDT",
						"symbol-alt-narrow": "৳"
					},
					"BEC": {
						"displayName": "Belgian Franc (convertible)",
						"displayName-count-one": "Belgian franc (convertible)",
						"displayName-count-other": "Belgian francs (convertible)",
						"symbol": "BEC"
					},
					"BEF": {
						"displayName": "Belgian Franc",
						"displayName-count-one": "Belgian franc",
						"displayName-count-other": "Belgian francs",
						"symbol": "BEF"
					},
					"BEL": {
						"displayName": "Belgian Franc (financial)",
						"displayName-count-one": "Belgian franc (financial)",
						"displayName-count-other": "Belgian francs (financial)",
						"symbol": "BEL"
					},
					"BGL": {
						"displayName": "Bulgarian Hard Lev",
						"displayName-count-one": "Bulgarian hard lev",
						"displayName-count-other": "Bulgarian hard leva",
						"symbol": "BGL"
					},
					"BGM": {
						"displayName": "Bulgarian Socialist Lev",
						"displayName-count-one": "Bulgarian socialist lev",
						"displayName-count-other": "Bulgarian socialist leva",
						"symbol": "BGM"
					},
					"BGN": {
						"displayName": "Bulgarian Lev",
						"displayName-count-one": "Bulgarian lev",
						"displayName-count-other": "Bulgarian leva",
						"symbol": "BGN"
					},
					"BGO": {
						"displayName": "Bulgarian Lev (1879–1952)",
						"displayName-count-one": "Bulgarian lev (1879–1952)",
						"displayName-count-other": "Bulgarian leva (1879–1952)",
						"symbol": "BGO"
					},
					"BHD": {
						"displayName": "Bahraini Dinar",
						"displayName-count-one": "Bahraini dinar",
						"displayName-count-other": "Bahraini dinars",
						"symbol": "BHD"
					},
					"BIF": {
						"displayName": "Burundian Franc",
						"displayName-count-one": "Burundian franc",
						"displayName-count-other": "Burundian francs",
						"symbol": "BIF"
					},
					"BMD": {
						"displayName": "Bermudan Dollar",
						"displayName-count-one": "Bermudan dollar",
						"displayName-count-other": "Bermudan dollars",
						"symbol": "BMD",
						"symbol-alt-narrow": "$"
					},
					"BND": {
						"displayName": "Brunei Dollar",
						"displayName-count-one": "Brunei dollar",
						"displayName-count-other": "Brunei dollars",
						"symbol": "BND",
						"symbol-alt-narrow": "$"
					},
					"BOB": {
						"displayName": "Bolivian Boliviano",
						"displayName-count-one": "Bolivian boliviano",
						"displayName-count-other": "Bolivian bolivianos",
						"symbol": "BOB",
						"symbol-alt-narrow": "Bs"
					},
					"BOL": {
						"displayName": "Bolivian Boliviano (1863–1963)",
						"displayName-count-one": "Bolivian boliviano (1863–1963)",
						"displayName-count-other": "Bolivian bolivianos (1863–1963)",
						"symbol": "BOL"
					},
					"BOP": {
						"displayName": "Bolivian Peso",
						"displayName-count-one": "Bolivian peso",
						"displayName-count-other": "Bolivian pesos",
						"symbol": "BOP"
					},
					"BOV": {
						"displayName": "Bolivian Mvdol",
						"displayName-count-one": "Bolivian mvdol",
						"displayName-count-other": "Bolivian mvdols",
						"symbol": "BOV"
					},
					"BRB": {
						"displayName": "Brazilian New Cruzeiro (1967–1986)",
						"displayName-count-one": "Brazilian new cruzeiro (1967–1986)",
						"displayName-count-other": "Brazilian new cruzeiros (1967–1986)",
						"symbol": "BRB"
					},
					"BRC": {
						"displayName": "Brazilian Cruzado (1986–1989)",
						"displayName-count-one": "Brazilian cruzado (1986–1989)",
						"displayName-count-other": "Brazilian cruzados (1986–1989)",
						"symbol": "BRC"
					},
					"BRE": {
						"displayName": "Brazilian Cruzeiro (1990–1993)",
						"displayName-count-one": "Brazilian cruzeiro (1990–1993)",
						"displayName-count-other": "Brazilian cruzeiros (1990–1993)",
						"symbol": "BRE"
					},
					"BRL": {
						"displayName": "Brazilian Real",
						"displayName-count-one": "Brazilian real",
						"displayName-count-other": "Brazilian reals",
						"symbol": "R$",
						"symbol-alt-narrow": "R$"
					},
					"BRN": {
						"displayName": "Brazilian New Cruzado (1989–1990)",
						"displayName-count-one": "Brazilian new cruzado (1989–1990)",
						"displayName-count-other": "Brazilian new cruzados (1989–1990)",
						"symbol": "BRN"
					},
					"BRR": {
						"displayName": "Brazilian Cruzeiro (1993–1994)",
						"displayName-count-one": "Brazilian cruzeiro (1993–1994)",
						"displayName-count-other": "Brazilian cruzeiros (1993–1994)",
						"symbol": "BRR"
					},
					"BRZ": {
						"displayName": "Brazilian Cruzeiro (1942–1967)",
						"displayName-count-one": "Brazilian cruzeiro (1942–1967)",
						"displayName-count-other": "Brazilian cruzeiros (1942–1967)",
						"symbol": "BRZ"
					},
					"BSD": {
						"displayName": "Bahamian Dollar",
						"displayName-count-one": "Bahamian dollar",
						"displayName-count-other": "Bahamian dollars",
						"symbol": "BSD",
						"symbol-alt-narrow": "$"
					},
					"BTN": {
						"displayName": "Bhutanese Ngultrum",
						"displayName-count-one": "Bhutanese ngultrum",
						"displayName-count-other": "Bhutanese ngultrums",
						"symbol": "BTN"
					},
					"BUK": {
						"displayName": "Burmese Kyat",
						"displayName-count-one": "Burmese kyat",
						"displayName-count-other": "Burmese kyats",
						"symbol": "BUK"
					},
					"BWP": {
						"displayName": "Botswanan Pula",
						"displayName-count-one": "Botswanan pula",
						"displayName-count-other": "Botswanan pulas",
						"symbol": "BWP",
						"symbol-alt-narrow": "P"
					},
					"BYB": {
						"displayName": "Belarusian Ruble (1994–1999)",
						"displayName-count-one": "Belarusian ruble (1994–1999)",
						"displayName-count-other": "Belarusian rubles (1994–1999)",
						"symbol": "BYB"
					},
					"BYN": {
						"displayName": "Belarusian Ruble",
						"displayName-count-one": "Belarusian ruble",
						"displayName-count-other": "Belarusian rubles",
						"symbol": "BYN",
						"symbol-alt-narrow": "р."
					},
					"BYR": {
						"displayName": "Belarusian Ruble (2000–2016)",
						"displayName-count-one": "Belarusian ruble (2000–2016)",
						"displayName-count-other": "Belarusian rubles (2000–2016)",
						"symbol": "BYR"
					},
					"BZD": {
						"displayName": "Belize Dollar",
						"displayName-count-one": "Belize dollar",
						"displayName-count-other": "Belize dollars",
						"symbol": "BZD",
						"symbol-alt-narrow": "$"
					},
					"CAD": {
						"displayName": "Canadian Dollar",
						"displayName-count-one": "Canadian dollar",
						"displayName-count-other": "Canadian dollars",
						"symbol": "CA$",
						"symbol-alt-narrow": "$"
					},
					"CDF": {
						"displayName": "Congolese Franc",
						"displayName-count-one": "Congolese franc",
						"displayName-count-other": "Congolese francs",
						"symbol": "CDF"
					},
					"CHE": {
						"displayName": "WIR Euro",
						"displayName-count-one": "WIR euro",
						"displayName-count-other": "WIR euros",
						"symbol": "CHE"
					},
					"CHF": {
						"displayName": "Swiss Franc",
						"displayName-count-one": "Swiss franc",
						"displayName-count-other": "Swiss francs",
						"symbol": "CHF"
					},
					"CHW": {
						"displayName": "WIR Franc",
						"displayName-count-one": "WIR franc",
						"displayName-count-other": "WIR francs",
						"symbol": "CHW"
					},
					"CLE": {
						"displayName": "Chilean Escudo",
						"displayName-count-one": "Chilean escudo",
						"displayName-count-other": "Chilean escudos",
						"symbol": "CLE"
					},
					"CLF": {
						"displayName": "Chilean Unit of Account (UF)",
						"displayName-count-one": "Chilean unit of account (UF)",
						"displayName-count-other": "Chilean units of account (UF)",
						"symbol": "CLF"
					},
					"CLP": {
						"displayName": "Chilean Peso",
						"displayName-count-one": "Chilean peso",
						"displayName-count-other": "Chilean pesos",
						"symbol": "CLP",
						"symbol-alt-narrow": "$"
					},
					"CNX": {
						"displayName": "Chinese People’s Bank Dollar",
						"displayName-count-one": "Chinese People’s Bank dollar",
						"displayName-count-other": "Chinese People’s Bank dollars"
					},
					"CNY": {
						"displayName": "Chinese Yuan",
						"displayName-count-one": "Chinese yuan",
						"displayName-count-other": "Chinese yuan",
						"symbol": "CN¥",
						"symbol-alt-narrow": "¥"
					},
					"COP": {
						"displayName": "Colombian Peso",
						"displayName-count-one": "Colombian peso",
						"displayName-count-other": "Colombian pesos",
						"symbol": "COP",
						"symbol-alt-narrow": "$"
					},
					"COU": {
						"displayName": "Colombian Real Value Unit",
						"displayName-count-one": "Colombian real value unit",
						"displayName-count-other": "Colombian real value units",
						"symbol": "COU"
					},
					"CRC": {
						"displayName": "Costa Rican Colón",
						"displayName-count-one": "Costa Rican colón",
						"displayName-count-other": "Costa Rican colóns",
						"symbol": "CRC",
						"symbol-alt-narrow": "₡"
					},
					"CSD": {
						"displayName": "Serbian Dinar (2002–2006)",
						"displayName-count-one": "Serbian dinar (2002–2006)",
						"displayName-count-other": "Serbian dinars (2002–2006)",
						"symbol": "CSD"
					},
					"CSK": {
						"displayName": "Czechoslovak Hard Koruna",
						"displayName-count-one": "Czechoslovak hard koruna",
						"displayName-count-other": "Czechoslovak hard korunas",
						"symbol": "CSK"
					},
					"CUC": {
						"displayName": "Cuban Convertible Peso",
						"displayName-count-one": "Cuban convertible peso",
						"displayName-count-other": "Cuban convertible pesos",
						"symbol": "CUC",
						"symbol-alt-narrow": "$"
					},
					"CUP": {
						"displayName": "Cuban Peso",
						"displayName-count-one": "Cuban peso",
						"displayName-count-other": "Cuban pesos",
						"symbol": "CUP",
						"symbol-alt-narrow": "$"
					},
					"CVE": {
						"displayName": "Cape Verdean Escudo",
						"displayName-count-one": "Cape Verdean escudo",
						"displayName-count-other": "Cape Verdean escudos",
						"symbol": "CVE"
					},
					"CYP": {
						"displayName": "Cypriot Pound",
						"displayName-count-one": "Cypriot pound",
						"displayName-count-other": "Cypriot pounds",
						"symbol": "CYP"
					},
					"CZK": {
						"displayName": "Czech Republic Koruna",
						"displayName-count-one": "Czech Republic koruna",
						"displayName-count-other": "Czech Republic korunas",
						"symbol": "CZK",
						"symbol-alt-narrow": "Kč"
					},
					"DDM": {
						"displayName": "East German Mark",
						"displayName-count-one": "East German mark",
						"displayName-count-other": "East German marks",
						"symbol": "DDM"
					},
					"DEM": {
						"displayName": "German Mark",
						"displayName-count-one": "German mark",
						"displayName-count-other": "German marks",
						"symbol": "DEM"
					},
					"DJF": {
						"displayName": "Djiboutian Franc",
						"displayName-count-one": "Djiboutian franc",
						"displayName-count-other": "Djiboutian francs",
						"symbol": "DJF"
					},
					"DKK": {
						"displayName": "Danish Krone",
						"displayName-count-one": "Danish krone",
						"displayName-count-other": "Danish kroner",
						"symbol": "DKK",
						"symbol-alt-narrow": "kr"
					},
					"DOP": {
						"displayName": "Dominican Peso",
						"displayName-count-one": "Dominican peso",
						"displayName-count-other": "Dominican pesos",
						"symbol": "DOP",
						"symbol-alt-narrow": "$"
					},
					"DZD": {
						"displayName": "Algerian Dinar",
						"displayName-count-one": "Algerian dinar",
						"displayName-count-other": "Algerian dinars",
						"symbol": "DZD"
					},
					"ECS": {
						"displayName": "Ecuadorian Sucre",
						"displayName-count-one": "Ecuadorian sucre",
						"displayName-count-other": "Ecuadorian sucres",
						"symbol": "ECS"
					},
					"ECV": {
						"displayName": "Ecuadorian Unit of Constant Value",
						"displayName-count-one": "Ecuadorian unit of constant value",
						"displayName-count-other": "Ecuadorian units of constant value",
						"symbol": "ECV"
					},
					"EEK": {
						"displayName": "Estonian Kroon",
						"displayName-count-one": "Estonian kroon",
						"displayName-count-other": "Estonian kroons",
						"symbol": "EEK"
					},
					"EGP": {
						"displayName": "Egyptian Pound",
						"displayName-count-one": "Egyptian pound",
						"displayName-count-other": "Egyptian pounds",
						"symbol": "EGP",
						"symbol-alt-narrow": "E£"
					},
					"ERN": {
						"displayName": "Eritrean Nakfa",
						"displayName-count-one": "Eritrean nakfa",
						"displayName-count-other": "Eritrean nakfas",
						"symbol": "ERN"
					},
					"ESA": {
						"displayName": "Spanish Peseta (A account)",
						"displayName-count-one": "Spanish peseta (A account)",
						"displayName-count-other": "Spanish pesetas (A account)",
						"symbol": "ESA"
					},
					"ESB": {
						"displayName": "Spanish Peseta (convertible account)",
						"displayName-count-one": "Spanish peseta (convertible account)",
						"displayName-count-other": "Spanish pesetas (convertible account)",
						"symbol": "ESB"
					},
					"ESP": {
						"displayName": "Spanish Peseta",
						"displayName-count-one": "Spanish peseta",
						"displayName-count-other": "Spanish pesetas",
						"symbol": "ESP",
						"symbol-alt-narrow": "₧"
					},
					"ETB": {
						"displayName": "Ethiopian Birr",
						"displayName-count-one": "Ethiopian birr",
						"displayName-count-other": "Ethiopian birrs",
						"symbol": "ETB"
					},
					"EUR": {
						"displayName": "Euro",
						"displayName-count-one": "euro",
						"displayName-count-other": "euros",
						"symbol": "€",
						"symbol-alt-narrow": "€"
					},
					"FIM": {
						"displayName": "Finnish Markka",
						"displayName-count-one": "Finnish markka",
						"displayName-count-other": "Finnish markkas",
						"symbol": "FIM"
					},
					"FJD": {
						"displayName": "Fijian Dollar",
						"displayName-count-one": "Fijian dollar",
						"displayName-count-other": "Fijian dollars",
						"symbol": "FJD",
						"symbol-alt-narrow": "$"
					},
					"FKP": {
						"displayName": "Falkland Islands Pound",
						"displayName-count-one": "Falkland Islands pound",
						"displayName-count-other": "Falkland Islands pounds",
						"symbol": "FKP",
						"symbol-alt-narrow": "£"
					},
					"FRF": {
						"displayName": "French Franc",
						"displayName-count-one": "French franc",
						"displayName-count-other": "French francs",
						"symbol": "FRF"
					},
					"GBP": {
						"displayName": "British Pound",
						"displayName-count-one": "British pound",
						"displayName-count-other": "British pounds",
						"symbol": "£",
						"symbol-alt-narrow": "£"
					},
					"GEK": {
						"displayName": "Georgian Kupon Larit",
						"displayName-count-one": "Georgian kupon larit",
						"displayName-count-other": "Georgian kupon larits",
						"symbol": "GEK"
					},
					"GEL": {
						"displayName": "Georgian Lari",
						"displayName-count-one": "Georgian lari",
						"displayName-count-other": "Georgian laris",
						"symbol": "GEL",
						"symbol-alt-narrow": "₾"
					},
					"GHC": {
						"displayName": "Ghanaian Cedi (1979–2007)",
						"displayName-count-one": "Ghanaian cedi (1979–2007)",
						"displayName-count-other": "Ghanaian cedis (1979–2007)",
						"symbol": "GHC"
					},
					"GHS": {
						"displayName": "Ghanaian Cedi",
						"displayName-count-one": "Ghanaian cedi",
						"displayName-count-other": "Ghanaian cedis",
						"symbol": "GHS"
					},
					"GIP": {
						"displayName": "Gibraltar Pound",
						"displayName-count-one": "Gibraltar pound",
						"displayName-count-other": "Gibraltar pounds",
						"symbol": "GIP",
						"symbol-alt-narrow": "£"
					},
					"GMD": {
						"displayName": "Gambian Dalasi",
						"displayName-count-one": "Gambian dalasi",
						"displayName-count-other": "Gambian dalasis",
						"symbol": "GMD"
					},
					"GNF": {
						"displayName": "Guinean Franc",
						"displayName-count-one": "Guinean franc",
						"displayName-count-other": "Guinean francs",
						"symbol": "GNF",
						"symbol-alt-narrow": "FG"
					},
					"GNS": {
						"displayName": "Guinean Syli",
						"displayName-count-one": "Guinean syli",
						"displayName-count-other": "Guinean sylis",
						"symbol": "GNS"
					},
					"GQE": {
						"displayName": "Equatorial Guinean Ekwele",
						"displayName-count-one": "Equatorial Guinean ekwele",
						"displayName-count-other": "Equatorial Guinean ekwele",
						"symbol": "GQE"
					},
					"GRD": {
						"displayName": "Greek Drachma",
						"displayName-count-one": "Greek drachma",
						"displayName-count-other": "Greek drachmas",
						"symbol": "GRD"
					},
					"GTQ": {
						"displayName": "Guatemalan Quetzal",
						"displayName-count-one": "Guatemalan quetzal",
						"displayName-count-other": "Guatemalan quetzals",
						"symbol": "GTQ",
						"symbol-alt-narrow": "Q"
					},
					"GWE": {
						"displayName": "Portuguese Guinea Escudo",
						"displayName-count-one": "Portuguese Guinea escudo",
						"displayName-count-other": "Portuguese Guinea escudos",
						"symbol": "GWE"
					},
					"GWP": {
						"displayName": "Guinea-Bissau Peso",
						"displayName-count-one": "Guinea-Bissau peso",
						"displayName-count-other": "Guinea-Bissau pesos",
						"symbol": "GWP"
					},
					"GYD": {
						"displayName": "Guyanaese Dollar",
						"displayName-count-one": "Guyanaese dollar",
						"displayName-count-other": "Guyanaese dollars",
						"symbol": "GYD",
						"symbol-alt-narrow": "$"
					},
					"HKD": {
						"displayName": "Hong Kong Dollar",
						"displayName-count-one": "Hong Kong dollar",
						"displayName-count-other": "Hong Kong dollars",
						"symbol": "HK$",
						"symbol-alt-narrow": "$"
					},
					"HNL": {
						"displayName": "Honduran Lempira",
						"displayName-count-one": "Honduran lempira",
						"displayName-count-other": "Honduran lempiras",
						"symbol": "HNL",
						"symbol-alt-narrow": "L"
					},
					"HRD": {
						"displayName": "Croatian Dinar",
						"displayName-count-one": "Croatian dinar",
						"displayName-count-other": "Croatian dinars",
						"symbol": "HRD"
					},
					"HRK": {
						"displayName": "Croatian Kuna",
						"displayName-count-one": "Croatian kuna",
						"displayName-count-other": "Croatian kunas",
						"symbol": "HRK",
						"symbol-alt-narrow": "kn"
					},
					"HTG": {
						"displayName": "Haitian Gourde",
						"displayName-count-one": "Haitian gourde",
						"displayName-count-other": "Haitian gourdes",
						"symbol": "HTG"
					},
					"HUF": {
						"displayName": "Hungarian Forint",
						"displayName-count-one": "Hungarian forint",
						"displayName-count-other": "Hungarian forints",
						"symbol": "HUF",
						"symbol-alt-narrow": "Ft"
					},
					"IDR": {
						"displayName": "Indonesian Rupiah",
						"displayName-count-one": "Indonesian rupiah",
						"displayName-count-other": "Indonesian rupiahs",
						"symbol": "IDR",
						"symbol-alt-narrow": "Rp"
					},
					"IEP": {
						"displayName": "Irish Pound",
						"displayName-count-one": "Irish pound",
						"displayName-count-other": "Irish pounds",
						"symbol": "IEP"
					},
					"ILP": {
						"displayName": "Israeli Pound",
						"displayName-count-one": "Israeli pound",
						"displayName-count-other": "Israeli pounds",
						"symbol": "ILP"
					},
					"ILR": {
						"displayName": "Israeli Shekel (1980–1985)",
						"displayName-count-one": "Israeli shekel (1980–1985)",
						"displayName-count-other": "Israeli shekels (1980–1985)"
					},
					"ILS": {
						"displayName": "Israeli New Shekel",
						"displayName-count-one": "Israeli new shekel",
						"displayName-count-other": "Israeli new shekels",
						"symbol": "₪",
						"symbol-alt-narrow": "₪"
					},
					"INR": {
						"displayName": "Indian Rupee",
						"displayName-count-one": "Indian rupee",
						"displayName-count-other": "Indian rupees",
						"symbol": "₹",
						"symbol-alt-narrow": "₹"
					},
					"IQD": {
						"displayName": "Iraqi Dinar",
						"displayName-count-one": "Iraqi dinar",
						"displayName-count-other": "Iraqi dinars",
						"symbol": "IQD"
					},
					"IRR": {
						"displayName": "Iranian Rial",
						"displayName-count-one": "Iranian rial",
						"displayName-count-other": "Iranian rials",
						"symbol": "IRR"
					},
					"ISJ": {
						"displayName": "Icelandic Króna (1918–1981)",
						"displayName-count-one": "Icelandic króna (1918–1981)",
						"displayName-count-other": "Icelandic krónur (1918–1981)"
					},
					"ISK": {
						"displayName": "Icelandic Króna",
						"displayName-count-one": "Icelandic króna",
						"displayName-count-other": "Icelandic krónur",
						"symbol": "ISK",
						"symbol-alt-narrow": "kr"
					},
					"ITL": {
						"displayName": "Italian Lira",
						"displayName-count-one": "Italian lira",
						"displayName-count-other": "Italian liras",
						"symbol": "ITL"
					},
					"JMD": {
						"displayName": "Jamaican Dollar",
						"displayName-count-one": "Jamaican dollar",
						"displayName-count-other": "Jamaican dollars",
						"symbol": "JMD",
						"symbol-alt-narrow": "$"
					},
					"JOD": {
						"displayName": "Jordanian Dinar",
						"displayName-count-one": "Jordanian dinar",
						"displayName-count-other": "Jordanian dinars",
						"symbol": "JOD"
					},
					"JPY": {
						"displayName": "Japanese Yen",
						"displayName-count-one": "Japanese yen",
						"displayName-count-other": "Japanese yen",
						"symbol": "¥",
						"symbol-alt-narrow": "¥"
					},
					"KES": {
						"displayName": "Kenyan Shilling",
						"displayName-count-one": "Kenyan shilling",
						"displayName-count-other": "Kenyan shillings",
						"symbol": "KES"
					},
					"KGS": {
						"displayName": "Kyrgystani Som",
						"displayName-count-one": "Kyrgystani som",
						"displayName-count-other": "Kyrgystani soms",
						"symbol": "KGS"
					},
					"KHR": {
						"displayName": "Cambodian Riel",
						"displayName-count-one": "Cambodian riel",
						"displayName-count-other": "Cambodian riels",
						"symbol": "KHR",
						"symbol-alt-narrow": "៛"
					},
					"KMF": {
						"displayName": "Comorian Franc",
						"displayName-count-one": "Comorian franc",
						"displayName-count-other": "Comorian francs",
						"symbol": "KMF",
						"symbol-alt-narrow": "CF"
					},
					"KPW": {
						"displayName": "North Korean Won",
						"displayName-count-one": "North Korean won",
						"displayName-count-other": "North Korean won",
						"symbol": "KPW",
						"symbol-alt-narrow": "₩"
					},
					"KRH": {
						"displayName": "South Korean Hwan (1953–1962)",
						"displayName-count-one": "South Korean hwan (1953–1962)",
						"displayName-count-other": "South Korean hwan (1953–1962)",
						"symbol": "KRH"
					},
					"KRO": {
						"displayName": "South Korean Won (1945–1953)",
						"displayName-count-one": "South Korean won (1945–1953)",
						"displayName-count-other": "South Korean won (1945–1953)",
						"symbol": "KRO"
					},
					"KRW": {
						"displayName": "South Korean Won",
						"displayName-count-one": "South Korean won",
						"displayName-count-other": "South Korean won",
						"symbol": "₩",
						"symbol-alt-narrow": "₩"
					},
					"KWD": {
						"displayName": "Kuwaiti Dinar",
						"displayName-count-one": "Kuwaiti dinar",
						"displayName-count-other": "Kuwaiti dinars",
						"symbol": "KWD"
					},
					"KYD": {
						"displayName": "Cayman Islands Dollar",
						"displayName-count-one": "Cayman Islands dollar",
						"displayName-count-other": "Cayman Islands dollars",
						"symbol": "KYD",
						"symbol-alt-narrow": "$"
					},
					"KZT": {
						"displayName": "Kazakhstani Tenge",
						"displayName-count-one": "Kazakhstani tenge",
						"displayName-count-other": "Kazakhstani tenges",
						"symbol": "KZT",
						"symbol-alt-narrow": "₸"
					},
					"LAK": {
						"displayName": "Laotian Kip",
						"displayName-count-one": "Laotian kip",
						"displayName-count-other": "Laotian kips",
						"symbol": "LAK",
						"symbol-alt-narrow": "₭"
					},
					"LBP": {
						"displayName": "Lebanese Pound",
						"displayName-count-one": "Lebanese pound",
						"displayName-count-other": "Lebanese pounds",
						"symbol": "LBP",
						"symbol-alt-narrow": "L£"
					},
					"LKR": {
						"displayName": "Sri Lankan Rupee",
						"displayName-count-one": "Sri Lankan rupee",
						"displayName-count-other": "Sri Lankan rupees",
						"symbol": "LKR",
						"symbol-alt-narrow": "Rs"
					},
					"LRD": {
						"displayName": "Liberian Dollar",
						"displayName-count-one": "Liberian dollar",
						"displayName-count-other": "Liberian dollars",
						"symbol": "LRD",
						"symbol-alt-narrow": "$"
					},
					"LSL": {
						"displayName": "Lesotho Loti",
						"displayName-count-one": "Lesotho loti",
						"displayName-count-other": "Lesotho lotis",
						"symbol": "LSL"
					},
					"LTL": {
						"displayName": "Lithuanian Litas",
						"displayName-count-one": "Lithuanian litas",
						"displayName-count-other": "Lithuanian litai",
						"symbol": "LTL",
						"symbol-alt-narrow": "Lt"
					},
					"LTT": {
						"displayName": "Lithuanian Talonas",
						"displayName-count-one": "Lithuanian talonas",
						"displayName-count-other": "Lithuanian talonases",
						"symbol": "LTT"
					},
					"LUC": {
						"displayName": "Luxembourgian Convertible Franc",
						"displayName-count-one": "Luxembourgian convertible franc",
						"displayName-count-other": "Luxembourgian convertible francs",
						"symbol": "LUC"
					},
					"LUF": {
						"displayName": "Luxembourgian Franc",
						"displayName-count-one": "Luxembourgian franc",
						"displayName-count-other": "Luxembourgian francs",
						"symbol": "LUF"
					},
					"LUL": {
						"displayName": "Luxembourg Financial Franc",
						"displayName-count-one": "Luxembourg financial franc",
						"displayName-count-other": "Luxembourg financial francs",
						"symbol": "LUL"
					},
					"LVL": {
						"displayName": "Latvian Lats",
						"displayName-count-one": "Latvian lats",
						"displayName-count-other": "Latvian lati",
						"symbol": "LVL",
						"symbol-alt-narrow": "Ls"
					},
					"LVR": {
						"displayName": "Latvian Ruble",
						"displayName-count-one": "Latvian ruble",
						"displayName-count-other": "Latvian rubles",
						"symbol": "LVR"
					},
					"LYD": {
						"displayName": "Libyan Dinar",
						"displayName-count-one": "Libyan dinar",
						"displayName-count-other": "Libyan dinars",
						"symbol": "LYD"
					},
					"MAD": {
						"displayName": "Moroccan Dirham",
						"displayName-count-one": "Moroccan dirham",
						"displayName-count-other": "Moroccan dirhams",
						"symbol": "MAD"
					},
					"MAF": {
						"displayName": "Moroccan Franc",
						"displayName-count-one": "Moroccan franc",
						"displayName-count-other": "Moroccan francs",
						"symbol": "MAF"
					},
					"MCF": {
						"displayName": "Monegasque Franc",
						"displayName-count-one": "Monegasque franc",
						"displayName-count-other": "Monegasque francs",
						"symbol": "MCF"
					},
					"MDC": {
						"displayName": "Moldovan Cupon",
						"displayName-count-one": "Moldovan cupon",
						"displayName-count-other": "Moldovan cupon",
						"symbol": "MDC"
					},
					"MDL": {
						"displayName": "Moldovan Leu",
						"displayName-count-one": "Moldovan leu",
						"displayName-count-other": "Moldovan lei",
						"symbol": "MDL"
					},
					"MGA": {
						"displayName": "Malagasy Ariary",
						"displayName-count-one": "Malagasy ariary",
						"displayName-count-other": "Malagasy ariaries",
						"symbol": "MGA",
						"symbol-alt-narrow": "Ar"
					},
					"MGF": {
						"displayName": "Malagasy Franc",
						"displayName-count-one": "Malagasy franc",
						"displayName-count-other": "Malagasy francs",
						"symbol": "MGF"
					},
					"MKD": {
						"displayName": "Macedonian Denar",
						"displayName-count-one": "Macedonian denar",
						"displayName-count-other": "Macedonian denari",
						"symbol": "MKD"
					},
					"MKN": {
						"displayName": "Macedonian Denar (1992–1993)",
						"displayName-count-one": "Macedonian denar (1992–1993)",
						"displayName-count-other": "Macedonian denari (1992–1993)",
						"symbol": "MKN"
					},
					"MLF": {
						"displayName": "Malian Franc",
						"displayName-count-one": "Malian franc",
						"displayName-count-other": "Malian francs",
						"symbol": "MLF"
					},
					"MMK": {
						"displayName": "Myanmar Kyat",
						"displayName-count-one": "Myanmar kyat",
						"displayName-count-other": "Myanmar kyats",
						"symbol": "MMK",
						"symbol-alt-narrow": "K"
					},
					"MNT": {
						"displayName": "Mongolian Tugrik",
						"displayName-count-one": "Mongolian tugrik",
						"displayName-count-other": "Mongolian tugriks",
						"symbol": "MNT",
						"symbol-alt-narrow": "₮"
					},
					"MOP": {
						"displayName": "Macanese Pataca",
						"displayName-count-one": "Macanese pataca",
						"displayName-count-other": "Macanese patacas",
						"symbol": "MOP"
					},
					"MRO": {
						"displayName": "Mauritanian Ouguiya",
						"displayName-count-one": "Mauritanian ouguiya",
						"displayName-count-other": "Mauritanian ouguiyas",
						"symbol": "MRO"
					},
					"MTL": {
						"displayName": "Maltese Lira",
						"displayName-count-one": "Maltese lira",
						"displayName-count-other": "Maltese lira",
						"symbol": "MTL"
					},
					"MTP": {
						"displayName": "Maltese Pound",
						"displayName-count-one": "Maltese pound",
						"displayName-count-other": "Maltese pounds",
						"symbol": "MTP"
					},
					"MUR": {
						"displayName": "Mauritian Rupee",
						"displayName-count-one": "Mauritian rupee",
						"displayName-count-other": "Mauritian rupees",
						"symbol": "MUR",
						"symbol-alt-narrow": "Rs"
					},
					"MVP": {
						"displayName": "Maldivian Rupee (1947–1981)",
						"displayName-count-one": "Maldivian rupee (1947–1981)",
						"displayName-count-other": "Maldivian rupees (1947–1981)"
					},
					"MVR": {
						"displayName": "Maldivian Rufiyaa",
						"displayName-count-one": "Maldivian rufiyaa",
						"displayName-count-other": "Maldivian rufiyaas",
						"symbol": "MVR"
					},
					"MWK": {
						"displayName": "Malawian Kwacha",
						"displayName-count-one": "Malawian kwacha",
						"displayName-count-other": "Malawian kwachas",
						"symbol": "MWK"
					},
					"MXN": {
						"displayName": "Mexican Peso",
						"displayName-count-one": "Mexican peso",
						"displayName-count-other": "Mexican pesos",
						"symbol": "MX$",
						"symbol-alt-narrow": "$"
					},
					"MXP": {
						"displayName": "Mexican Silver Peso (1861–1992)",
						"displayName-count-one": "Mexican silver peso (1861–1992)",
						"displayName-count-other": "Mexican silver pesos (1861–1992)",
						"symbol": "MXP"
					},
					"MXV": {
						"displayName": "Mexican Investment Unit",
						"displayName-count-one": "Mexican investment unit",
						"displayName-count-other": "Mexican investment units",
						"symbol": "MXV"
					},
					"MYR": {
						"displayName": "Malaysian Ringgit",
						"displayName-count-one": "Malaysian ringgit",
						"displayName-count-other": "Malaysian ringgits",
						"symbol": "MYR",
						"symbol-alt-narrow": "RM"
					},
					"MZE": {
						"displayName": "Mozambican Escudo",
						"displayName-count-one": "Mozambican escudo",
						"displayName-count-other": "Mozambican escudos",
						"symbol": "MZE"
					},
					"MZM": {
						"displayName": "Mozambican Metical (1980–2006)",
						"displayName-count-one": "Mozambican metical (1980–2006)",
						"displayName-count-other": "Mozambican meticals (1980–2006)",
						"symbol": "MZM"
					},
					"MZN": {
						"displayName": "Mozambican Metical",
						"displayName-count-one": "Mozambican metical",
						"displayName-count-other": "Mozambican meticals",
						"symbol": "MZN"
					},
					"NAD": {
						"displayName": "Namibian Dollar",
						"displayName-count-one": "Namibian dollar",
						"displayName-count-other": "Namibian dollars",
						"symbol": "NAD",
						"symbol-alt-narrow": "$"
					},
					"NGN": {
						"displayName": "Nigerian Naira",
						"displayName-count-one": "Nigerian naira",
						"displayName-count-other": "Nigerian nairas",
						"symbol": "NGN",
						"symbol-alt-narrow": "₦"
					},
					"NIC": {
						"displayName": "Nicaraguan Córdoba (1988–1991)",
						"displayName-count-one": "Nicaraguan córdoba (1988–1991)",
						"displayName-count-other": "Nicaraguan córdobas (1988–1991)",
						"symbol": "NIC"
					},
					"NIO": {
						"displayName": "Nicaraguan Córdoba",
						"displayName-count-one": "Nicaraguan córdoba",
						"displayName-count-other": "Nicaraguan córdobas",
						"symbol": "NIO",
						"symbol-alt-narrow": "C$"
					},
					"NLG": {
						"displayName": "Dutch Guilder",
						"displayName-count-one": "Dutch guilder",
						"displayName-count-other": "Dutch guilders",
						"symbol": "NLG"
					},
					"NOK": {
						"displayName": "Norwegian Krone",
						"displayName-count-one": "Norwegian krone",
						"displayName-count-other": "Norwegian kroner",
						"symbol": "NOK",
						"symbol-alt-narrow": "kr"
					},
					"NPR": {
						"displayName": "Nepalese Rupee",
						"displayName-count-one": "Nepalese rupee",
						"displayName-count-other": "Nepalese rupees",
						"symbol": "NPR",
						"symbol-alt-narrow": "Rs"
					},
					"NZD": {
						"displayName": "New Zealand Dollar",
						"displayName-count-one": "New Zealand dollar",
						"displayName-count-other": "New Zealand dollars",
						"symbol": "NZ$",
						"symbol-alt-narrow": "$"
					},
					"OMR": {
						"displayName": "Omani Rial",
						"displayName-count-one": "Omani rial",
						"displayName-count-other": "Omani rials",
						"symbol": "OMR"
					},
					"PAB": {
						"displayName": "Panamanian Balboa",
						"displayName-count-one": "Panamanian balboa",
						"displayName-count-other": "Panamanian balboas",
						"symbol": "PAB"
					},
					"PEI": {
						"displayName": "Peruvian Inti",
						"displayName-count-one": "Peruvian inti",
						"displayName-count-other": "Peruvian intis",
						"symbol": "PEI"
					},
					"PEN": {
						"displayName": "Peruvian Sol",
						"displayName-count-one": "Peruvian sol",
						"displayName-count-other": "Peruvian soles",
						"symbol": "PEN"
					},
					"PES": {
						"displayName": "Peruvian Sol (1863–1965)",
						"displayName-count-one": "Peruvian sol (1863–1965)",
						"displayName-count-other": "Peruvian soles (1863–1965)",
						"symbol": "PES"
					},
					"PGK": {
						"displayName": "Papua New Guinean Kina",
						"displayName-count-one": "Papua New Guinean kina",
						"displayName-count-other": "Papua New Guinean kina",
						"symbol": "PGK"
					},
					"PHP": {
						"displayName": "Philippine Peso",
						"displayName-count-one": "Philippine peso",
						"displayName-count-other": "Philippine pesos",
						"symbol": "PHP",
						"symbol-alt-narrow": "₱"
					},
					"PKR": {
						"displayName": "Pakistani Rupee",
						"displayName-count-one": "Pakistani rupee",
						"displayName-count-other": "Pakistani rupees",
						"symbol": "PKR",
						"symbol-alt-narrow": "Rs"
					},
					"PLN": {
						"displayName": "Polish Zloty",
						"displayName-count-one": "Polish zloty",
						"displayName-count-other": "Polish zlotys",
						"symbol": "PLN",
						"symbol-alt-narrow": "zł"
					},
					"PLZ": {
						"displayName": "Polish Zloty (1950–1995)",
						"displayName-count-one": "Polish zloty (PLZ)",
						"displayName-count-other": "Polish zlotys (PLZ)",
						"symbol": "PLZ"
					},
					"PTE": {
						"displayName": "Portuguese Escudo",
						"displayName-count-one": "Portuguese escudo",
						"displayName-count-other": "Portuguese escudos",
						"symbol": "PTE"
					},
					"PYG": {
						"displayName": "Paraguayan Guarani",
						"displayName-count-one": "Paraguayan guarani",
						"displayName-count-other": "Paraguayan guaranis",
						"symbol": "PYG",
						"symbol-alt-narrow": "₲"
					},
					"QAR": {
						"displayName": "Qatari Rial",
						"displayName-count-one": "Qatari rial",
						"displayName-count-other": "Qatari rials",
						"symbol": "QAR"
					},
					"RHD": {
						"displayName": "Rhodesian Dollar",
						"displayName-count-one": "Rhodesian dollar",
						"displayName-count-other": "Rhodesian dollars",
						"symbol": "RHD"
					},
					"ROL": {
						"displayName": "Romanian Leu (1952–2006)",
						"displayName-count-one": "Romanian leu (1952–2006)",
						"displayName-count-other": "Romanian Lei (1952–2006)",
						"symbol": "ROL"
					},
					"RON": {
						"displayName": "Romanian Leu",
						"displayName-count-one": "Romanian leu",
						"displayName-count-other": "Romanian lei",
						"symbol": "RON",
						"symbol-alt-narrow": "lei"
					},
					"RSD": {
						"displayName": "Serbian Dinar",
						"displayName-count-one": "Serbian dinar",
						"displayName-count-other": "Serbian dinars",
						"symbol": "RSD"
					},
					"RUB": {
						"displayName": "Russian Ruble",
						"displayName-count-one": "Russian ruble",
						"displayName-count-other": "Russian rubles",
						"symbol": "RUB",
						"symbol-alt-narrow": "₽"
					},
					"RUR": {
						"displayName": "Russian Ruble (1991–1998)",
						"displayName-count-one": "Russian ruble (1991–1998)",
						"displayName-count-other": "Russian rubles (1991–1998)",
						"symbol": "RUR",
						"symbol-alt-narrow": "р."
					},
					"RWF": {
						"displayName": "Rwandan Franc",
						"displayName-count-one": "Rwandan franc",
						"displayName-count-other": "Rwandan francs",
						"symbol": "RWF",
						"symbol-alt-narrow": "RF"
					},
					"SAR": {
						"displayName": "Saudi Riyal",
						"displayName-count-one": "Saudi riyal",
						"displayName-count-other": "Saudi riyals",
						"symbol": "SAR"
					},
					"SBD": {
						"displayName": "Solomon Islands Dollar",
						"displayName-count-one": "Solomon Islands dollar",
						"displayName-count-other": "Solomon Islands dollars",
						"symbol": "SBD",
						"symbol-alt-narrow": "$"
					},
					"SCR": {
						"displayName": "Seychellois Rupee",
						"displayName-count-one": "Seychellois rupee",
						"displayName-count-other": "Seychellois rupees",
						"symbol": "SCR"
					},
					"SDD": {
						"displayName": "Sudanese Dinar (1992–2007)",
						"displayName-count-one": "Sudanese dinar (1992–2007)",
						"displayName-count-other": "Sudanese dinars (1992–2007)",
						"symbol": "SDD"
					},
					"SDG": {
						"displayName": "Sudanese Pound",
						"displayName-count-one": "Sudanese pound",
						"displayName-count-other": "Sudanese pounds",
						"symbol": "SDG"
					},
					"SDP": {
						"displayName": "Sudanese Pound (1957–1998)",
						"displayName-count-one": "Sudanese pound (1957–1998)",
						"displayName-count-other": "Sudanese pounds (1957–1998)",
						"symbol": "SDP"
					},
					"SEK": {
						"displayName": "Swedish Krona",
						"displayName-count-one": "Swedish krona",
						"displayName-count-other": "Swedish kronor",
						"symbol": "SEK",
						"symbol-alt-narrow": "kr"
					},
					"SGD": {
						"displayName": "Singapore Dollar",
						"displayName-count-one": "Singapore dollar",
						"displayName-count-other": "Singapore dollars",
						"symbol": "SGD",
						"symbol-alt-narrow": "$"
					},
					"SHP": {
						"displayName": "St. Helena Pound",
						"displayName-count-one": "St. Helena pound",
						"displayName-count-other": "St. Helena pounds",
						"symbol": "SHP",
						"symbol-alt-narrow": "£"
					},
					"SIT": {
						"displayName": "Slovenian Tolar",
						"displayName-count-one": "Slovenian tolar",
						"displayName-count-other": "Slovenian tolars",
						"symbol": "SIT"
					},
					"SKK": {
						"displayName": "Slovak Koruna",
						"displayName-count-one": "Slovak koruna",
						"displayName-count-other": "Slovak korunas",
						"symbol": "SKK"
					},
					"SLL": {
						"displayName": "Sierra Leonean Leone",
						"displayName-count-one": "Sierra Leonean leone",
						"displayName-count-other": "Sierra Leonean leones",
						"symbol": "SLL"
					},
					"SOS": {
						"displayName": "Somali Shilling",
						"displayName-count-one": "Somali shilling",
						"displayName-count-other": "Somali shillings",
						"symbol": "SOS"
					},
					"SRD": {
						"displayName": "Surinamese Dollar",
						"displayName-count-one": "Surinamese dollar",
						"displayName-count-other": "Surinamese dollars",
						"symbol": "SRD",
						"symbol-alt-narrow": "$"
					},
					"SRG": {
						"displayName": "Surinamese Guilder",
						"displayName-count-one": "Surinamese guilder",
						"displayName-count-other": "Surinamese guilders",
						"symbol": "SRG"
					},
					"SSP": {
						"displayName": "South Sudanese Pound",
						"displayName-count-one": "South Sudanese pound",
						"displayName-count-other": "South Sudanese pounds",
						"symbol": "SSP",
						"symbol-alt-narrow": "£"
					},
					"STD": {
						"displayName": "São Tomé & Príncipe Dobra",
						"displayName-count-one": "São Tomé & Príncipe dobra",
						"displayName-count-other": "São Tomé & Príncipe dobras",
						"symbol": "STD",
						"symbol-alt-narrow": "Db"
					},
					"SUR": {
						"displayName": "Soviet Rouble",
						"displayName-count-one": "Soviet rouble",
						"displayName-count-other": "Soviet roubles",
						"symbol": "SUR"
					},
					"SVC": {
						"displayName": "Salvadoran Colón",
						"displayName-count-one": "Salvadoran colón",
						"displayName-count-other": "Salvadoran colones",
						"symbol": "SVC"
					},
					"SYP": {
						"displayName": "Syrian Pound",
						"displayName-count-one": "Syrian pound",
						"displayName-count-other": "Syrian pounds",
						"symbol": "SYP",
						"symbol-alt-narrow": "£"
					},
					"SZL": {
						"displayName": "Swazi Lilangeni",
						"displayName-count-one": "Swazi lilangeni",
						"displayName-count-other": "Swazi emalangeni",
						"symbol": "SZL"
					},
					"THB": {
						"displayName": "Thai Baht",
						"displayName-count-one": "Thai baht",
						"displayName-count-other": "Thai baht",
						"symbol": "THB",
						"symbol-alt-narrow": "฿"
					},
					"TJR": {
						"displayName": "Tajikistani Ruble",
						"displayName-count-one": "Tajikistani ruble",
						"displayName-count-other": "Tajikistani rubles",
						"symbol": "TJR"
					},
					"TJS": {
						"displayName": "Tajikistani Somoni",
						"displayName-count-one": "Tajikistani somoni",
						"displayName-count-other": "Tajikistani somonis",
						"symbol": "TJS"
					},
					"TMM": {
						"displayName": "Turkmenistani Manat (1993–2009)",
						"displayName-count-one": "Turkmenistani manat (1993–2009)",
						"displayName-count-other": "Turkmenistani manat (1993–2009)",
						"symbol": "TMM"
					},
					"TMT": {
						"displayName": "Turkmenistani Manat",
						"displayName-count-one": "Turkmenistani manat",
						"displayName-count-other": "Turkmenistani manat",
						"symbol": "TMT"
					},
					"TND": {
						"displayName": "Tunisian Dinar",
						"displayName-count-one": "Tunisian dinar",
						"displayName-count-other": "Tunisian dinars",
						"symbol": "TND"
					},
					"TOP": {
						"displayName": "Tongan Paʻanga",
						"displayName-count-one": "Tongan paʻanga",
						"displayName-count-other": "Tongan paʻanga",
						"symbol": "TOP",
						"symbol-alt-narrow": "T$"
					},
					"TPE": {
						"displayName": "Timorese Escudo",
						"displayName-count-one": "Timorese escudo",
						"displayName-count-other": "Timorese escudos",
						"symbol": "TPE"
					},
					"TRL": {
						"displayName": "Turkish Lira (1922–2005)",
						"displayName-count-one": "Turkish lira (1922–2005)",
						"displayName-count-other": "Turkish Lira (1922–2005)",
						"symbol": "TRL"
					},
					"TRY": {
						"displayName": "Turkish Lira",
						"displayName-count-one": "Turkish lira",
						"displayName-count-other": "Turkish Lira",
						"symbol": "TRY",
						"symbol-alt-narrow": "₺",
						"symbol-alt-variant": "TL"
					},
					"TTD": {
						"displayName": "Trinidad & Tobago Dollar",
						"displayName-count-one": "Trinidad & Tobago dollar",
						"displayName-count-other": "Trinidad & Tobago dollars",
						"symbol": "TTD",
						"symbol-alt-narrow": "$"
					},
					"TWD": {
						"displayName": "New Taiwan Dollar",
						"displayName-count-one": "New Taiwan dollar",
						"displayName-count-other": "New Taiwan dollars",
						"symbol": "NT$",
						"symbol-alt-narrow": "$"
					},
					"TZS": {
						"displayName": "Tanzanian Shilling",
						"displayName-count-one": "Tanzanian shilling",
						"displayName-count-other": "Tanzanian shillings",
						"symbol": "TZS"
					},
					"UAH": {
						"displayName": "Ukrainian Hryvnia",
						"displayName-count-one": "Ukrainian hryvnia",
						"displayName-count-other": "Ukrainian hryvnias",
						"symbol": "UAH",
						"symbol-alt-narrow": "₴"
					},
					"UAK": {
						"displayName": "Ukrainian Karbovanets",
						"displayName-count-one": "Ukrainian karbovanets",
						"displayName-count-other": "Ukrainian karbovantsiv",
						"symbol": "UAK"
					},
					"UGS": {
						"displayName": "Ugandan Shilling (1966–1987)",
						"displayName-count-one": "Ugandan shilling (1966–1987)",
						"displayName-count-other": "Ugandan shillings (1966–1987)",
						"symbol": "UGS"
					},
					"UGX": {
						"displayName": "Ugandan Shilling",
						"displayName-count-one": "Ugandan shilling",
						"displayName-count-other": "Ugandan shillings",
						"symbol": "UGX"
					},
					"USD": {
						"displayName": "US Dollar",
						"displayName-count-one": "US dollar",
						"displayName-count-other": "US dollars",
						"symbol": "$",
						"symbol-alt-narrow": "$"
					},
					"USN": {
						"displayName": "US Dollar (Next day)",
						"displayName-count-one": "US dollar (next day)",
						"displayName-count-other": "US dollars (next day)",
						"symbol": "USN"
					},
					"USS": {
						"displayName": "US Dollar (Same day)",
						"displayName-count-one": "US dollar (same day)",
						"displayName-count-other": "US dollars (same day)",
						"symbol": "USS"
					},
					"UYI": {
						"displayName": "Uruguayan Peso (Indexed Units)",
						"displayName-count-one": "Uruguayan peso (indexed units)",
						"displayName-count-other": "Uruguayan pesos (indexed units)",
						"symbol": "UYI"
					},
					"UYP": {
						"displayName": "Uruguayan Peso (1975–1993)",
						"displayName-count-one": "Uruguayan peso (1975–1993)",
						"displayName-count-other": "Uruguayan pesos (1975–1993)",
						"symbol": "UYP"
					},
					"UYU": {
						"displayName": "Uruguayan Peso",
						"displayName-count-one": "Uruguayan peso",
						"displayName-count-other": "Uruguayan pesos",
						"symbol": "UYU",
						"symbol-alt-narrow": "$"
					},
					"UZS": {
						"displayName": "Uzbekistani Som",
						"displayName-count-one": "Uzbekistani som",
						"displayName-count-other": "Uzbekistani som",
						"symbol": "UZS"
					},
					"VEB": {
						"displayName": "Venezuelan Bolívar (1871–2008)",
						"displayName-count-one": "Venezuelan bolívar (1871–2008)",
						"displayName-count-other": "Venezuelan bolívars (1871–2008)",
						"symbol": "VEB"
					},
					"VEF": {
						"displayName": "Venezuelan Bolívar",
						"displayName-count-one": "Venezuelan bolívar",
						"displayName-count-other": "Venezuelan bolívars",
						"symbol": "VEF",
						"symbol-alt-narrow": "Bs"
					},
					"VND": {
						"displayName": "Vietnamese Dong",
						"displayName-count-one": "Vietnamese dong",
						"displayName-count-other": "Vietnamese dong",
						"symbol": "₫",
						"symbol-alt-narrow": "₫"
					},
					"VNN": {
						"displayName": "Vietnamese Dong (1978–1985)",
						"displayName-count-one": "Vietnamese dong (1978–1985)",
						"displayName-count-other": "Vietnamese dong (1978–1985)",
						"symbol": "VNN"
					},
					"VUV": {
						"displayName": "Vanuatu Vatu",
						"displayName-count-one": "Vanuatu vatu",
						"displayName-count-other": "Vanuatu vatus",
						"symbol": "VUV"
					},
					"WST": {
						"displayName": "Samoan Tala",
						"displayName-count-one": "Samoan tala",
						"displayName-count-other": "Samoan tala",
						"symbol": "WST"
					},
					"XAF": {
						"displayName": "Central African CFA Franc",
						"displayName-count-one": "Central African CFA franc",
						"displayName-count-other": "Central African CFA francs",
						"symbol": "FCFA"
					},
					"XAG": {
						"displayName": "Silver",
						"displayName-count-one": "troy ounce of silver",
						"displayName-count-other": "troy ounces of silver",
						"symbol": "XAG"
					},
					"XAU": {
						"displayName": "Gold",
						"displayName-count-one": "troy ounce of gold",
						"displayName-count-other": "troy ounces of gold",
						"symbol": "XAU"
					},
					"XBA": {
						"displayName": "European Composite Unit",
						"displayName-count-one": "European composite unit",
						"displayName-count-other": "European composite units",
						"symbol": "XBA"
					},
					"XBB": {
						"displayName": "European Monetary Unit",
						"displayName-count-one": "European monetary unit",
						"displayName-count-other": "European monetary units",
						"symbol": "XBB"
					},
					"XBC": {
						"displayName": "European Unit of Account (XBC)",
						"displayName-count-one": "European unit of account (XBC)",
						"displayName-count-other": "European units of account (XBC)",
						"symbol": "XBC"
					},
					"XBD": {
						"displayName": "European Unit of Account (XBD)",
						"displayName-count-one": "European unit of account (XBD)",
						"displayName-count-other": "European units of account (XBD)",
						"symbol": "XBD"
					},
					"XCD": {
						"displayName": "East Caribbean Dollar",
						"displayName-count-one": "East Caribbean dollar",
						"displayName-count-other": "East Caribbean dollars",
						"symbol": "EC$",
						"symbol-alt-narrow": "$"
					},
					"XDR": {
						"displayName": "Special Drawing Rights",
						"displayName-count-one": "special drawing rights",
						"displayName-count-other": "special drawing rights",
						"symbol": "XDR"
					},
					"XEU": {
						"displayName": "European Currency Unit",
						"displayName-count-one": "European currency unit",
						"displayName-count-other": "European currency units",
						"symbol": "XEU"
					},
					"XFO": {
						"displayName": "French Gold Franc",
						"displayName-count-one": "French gold franc",
						"displayName-count-other": "French gold francs",
						"symbol": "XFO"
					},
					"XFU": {
						"displayName": "French UIC-Franc",
						"displayName-count-one": "French UIC-franc",
						"displayName-count-other": "French UIC-francs",
						"symbol": "XFU"
					},
					"XOF": {
						"displayName": "West African CFA Franc",
						"displayName-count-one": "West African CFA franc",
						"displayName-count-other": "West African CFA francs",
						"symbol": "CFA"
					},
					"XPD": {
						"displayName": "Palladium",
						"displayName-count-one": "troy ounce of palladium",
						"displayName-count-other": "troy ounces of palladium",
						"symbol": "XPD"
					},
					"XPF": {
						"displayName": "CFP Franc",
						"displayName-count-one": "CFP franc",
						"displayName-count-other": "CFP francs",
						"symbol": "CFPF"
					},
					"XPT": {
						"displayName": "Platinum",
						"displayName-count-one": "troy ounce of platinum",
						"displayName-count-other": "troy ounces of platinum",
						"symbol": "XPT"
					},
					"XRE": {
						"displayName": "RINET Funds",
						"displayName-count-one": "RINET Funds unit",
						"displayName-count-other": "RINET Funds units",
						"symbol": "XRE"
					},
					"XSU": {
						"displayName": "Sucre",
						"displayName-count-one": "Sucre",
						"displayName-count-other": "Sucres",
						"symbol": "XSU"
					},
					"XTS": {
						"displayName": "Testing Currency Code",
						"displayName-count-one": "Testing Currency unit",
						"displayName-count-other": "Testing Currency units",
						"symbol": "XTS"
					},
					"XUA": {
						"displayName": "ADB Unit of Account",
						"displayName-count-one": "ADB unit of account",
						"displayName-count-other": "ADB units of account",
						"symbol": "XUA"
					},
					"XXX": {
						"displayName": "Unknown Currency",
						"displayName-count-one": "(unknown unit of currency)",
						"displayName-count-other": "(unknown currency)",
						"symbol": "XXX"
					},
					"YDD": {
						"displayName": "Yemeni Dinar",
						"displayName-count-one": "Yemeni dinar",
						"displayName-count-other": "Yemeni dinars",
						"symbol": "YDD"
					},
					"YER": {
						"displayName": "Yemeni Rial",
						"displayName-count-one": "Yemeni rial",
						"displayName-count-other": "Yemeni rials",
						"symbol": "YER"
					},
					"YUD": {
						"displayName": "Yugoslavian Hard Dinar (1966–1990)",
						"displayName-count-one": "Yugoslavian hard dinar (1966–1990)",
						"displayName-count-other": "Yugoslavian hard dinars (1966–1990)",
						"symbol": "YUD"
					},
					"YUM": {
						"displayName": "Yugoslavian New Dinar (1994–2002)",
						"displayName-count-one": "Yugoslavian new dinar (1994–2002)",
						"displayName-count-other": "Yugoslavian new dinars (1994–2002)",
						"symbol": "YUM"
					},
					"YUN": {
						"displayName": "Yugoslavian Convertible Dinar (1990–1992)",
						"displayName-count-one": "Yugoslavian convertible dinar (1990–1992)",
						"displayName-count-other": "Yugoslavian convertible dinars (1990–1992)",
						"symbol": "YUN"
					},
					"YUR": {
						"displayName": "Yugoslavian Reformed Dinar (1992–1993)",
						"displayName-count-one": "Yugoslavian reformed dinar (1992–1993)",
						"displayName-count-other": "Yugoslavian reformed dinars (1992–1993)",
						"symbol": "YUR"
					},
					"ZAL": {
						"displayName": "South African Rand (financial)",
						"displayName-count-one": "South African rand (financial)",
						"displayName-count-other": "South African rands (financial)",
						"symbol": "ZAL"
					},
					"ZAR": {
						"displayName": "South African Rand",
						"displayName-count-one": "South African rand",
						"displayName-count-other": "South African rand",
						"symbol": "ZAR",
						"symbol-alt-narrow": "R"
					},
					"ZMK": {
						"displayName": "Zambian Kwacha (1968–2012)",
						"displayName-count-one": "Zambian kwacha (1968–2012)",
						"displayName-count-other": "Zambian kwachas (1968–2012)",
						"symbol": "ZMK"
					},
					"ZMW": {
						"displayName": "Zambian Kwacha",
						"displayName-count-one": "Zambian kwacha",
						"displayName-count-other": "Zambian kwachas",
						"symbol": "ZMW",
						"symbol-alt-narrow": "ZK"
					},
					"ZRN": {
						"displayName": "Zairean New Zaire (1993–1998)",
						"displayName-count-one": "Zairean new zaire (1993–1998)",
						"displayName-count-other": "Zairean new zaires (1993–1998)",
						"symbol": "ZRN"
					},
					"ZRZ": {
						"displayName": "Zairean Zaire (1971–1993)",
						"displayName-count-one": "Zairean zaire (1971–1993)",
						"displayName-count-other": "Zairean zaires (1971–1993)",
						"symbol": "ZRZ"
					},
					"ZWD": {
						"displayName": "Zimbabwean Dollar (1980–2008)",
						"displayName-count-one": "Zimbabwean dollar (1980–2008)",
						"displayName-count-other": "Zimbabwean dollars (1980–2008)",
						"symbol": "ZWD"
					},
					"ZWL": {
						"displayName": "Zimbabwean Dollar (2009)",
						"displayName-count-one": "Zimbabwean dollar (2009)",
						"displayName-count-other": "Zimbabwean dollars (2009)",
						"symbol": "ZWL"
					},
					"ZWR": {
						"displayName": "Zimbabwean Dollar (2008)",
						"displayName-count-one": "Zimbabwean dollar (2008)",
						"displayName-count-other": "Zimbabwean dollars (2008)",
						"symbol": "ZWR"
					}
				}
			}
		}
	}
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = {
	"main": {
		"en": {
			"identity": {
				"version": {
					"_number": "$Revision: 13050 $",
					"_cldrVersion": "30.0.3"
				},
				"language": "en"
			},
			"numbers": {
				"defaultNumberingSystem": "latn",
				"otherNumberingSystems": {
					"native": "latn"
				},
				"minimumGroupingDigits": "1",
				"symbols-numberSystem-latn": {
					"decimal": ".",
					"group": ",",
					"list": ";",
					"percentSign": "%",
					"plusSign": "+",
					"minusSign": "-",
					"exponential": "E",
					"superscriptingExponent": "×",
					"perMille": "‰",
					"infinity": "∞",
					"nan": "NaN",
					"timeSeparator": ":"
				},
				"decimalFormats-numberSystem-latn": {
					"standard": "#,##0.###",
					"long": {
						"decimalFormat": {
							"1000-count-one": "0 thousand",
							"1000-count-other": "0 thousand",
							"10000-count-one": "00 thousand",
							"10000-count-other": "00 thousand",
							"100000-count-one": "000 thousand",
							"100000-count-other": "000 thousand",
							"1000000-count-one": "0 million",
							"1000000-count-other": "0 million",
							"10000000-count-one": "00 million",
							"10000000-count-other": "00 million",
							"100000000-count-one": "000 million",
							"100000000-count-other": "000 million",
							"1000000000-count-one": "0 billion",
							"1000000000-count-other": "0 billion",
							"10000000000-count-one": "00 billion",
							"10000000000-count-other": "00 billion",
							"100000000000-count-one": "000 billion",
							"100000000000-count-other": "000 billion",
							"1000000000000-count-one": "0 trillion",
							"1000000000000-count-other": "0 trillion",
							"10000000000000-count-one": "00 trillion",
							"10000000000000-count-other": "00 trillion",
							"100000000000000-count-one": "000 trillion",
							"100000000000000-count-other": "000 trillion"
						}
					},
					"short": {
						"decimalFormat": {
							"1000-count-one": "0K",
							"1000-count-other": "0K",
							"10000-count-one": "00K",
							"10000-count-other": "00K",
							"100000-count-one": "000K",
							"100000-count-other": "000K",
							"1000000-count-one": "0M",
							"1000000-count-other": "0M",
							"10000000-count-one": "00M",
							"10000000-count-other": "00M",
							"100000000-count-one": "000M",
							"100000000-count-other": "000M",
							"1000000000-count-one": "0B",
							"1000000000-count-other": "0B",
							"10000000000-count-one": "00B",
							"10000000000-count-other": "00B",
							"100000000000-count-one": "000B",
							"100000000000-count-other": "000B",
							"1000000000000-count-one": "0T",
							"1000000000000-count-other": "0T",
							"10000000000000-count-one": "00T",
							"10000000000000-count-other": "00T",
							"100000000000000-count-one": "000T",
							"100000000000000-count-other": "000T"
						}
					}
				},
				"scientificFormats-numberSystem-latn": {
					"standard": "#E0"
				},
				"percentFormats-numberSystem-latn": {
					"standard": "#,##0%"
				},
				"currencyFormats-numberSystem-latn": {
					"currencySpacing": {
						"beforeCurrency": {
							"currencyMatch": "[:^S:]",
							"surroundingMatch": "[:digit:]",
							"insertBetween": " "
						},
						"afterCurrency": {
							"currencyMatch": "[:^S:]",
							"surroundingMatch": "[:digit:]",
							"insertBetween": " "
						}
					},
					"standard": "¤#,##0.00",
					"accounting": "¤#,##0.00;(¤#,##0.00)",
					"short": {
						"standard": {
							"1000-count-one": "¤0K",
							"1000-count-other": "¤0K",
							"10000-count-one": "¤00K",
							"10000-count-other": "¤00K",
							"100000-count-one": "¤000K",
							"100000-count-other": "¤000K",
							"1000000-count-one": "¤0M",
							"1000000-count-other": "¤0M",
							"10000000-count-one": "¤00M",
							"10000000-count-other": "¤00M",
							"100000000-count-one": "¤000M",
							"100000000-count-other": "¤000M",
							"1000000000-count-one": "¤0B",
							"1000000000-count-other": "¤0B",
							"10000000000-count-one": "¤00B",
							"10000000000-count-other": "¤00B",
							"100000000000-count-one": "¤000B",
							"100000000000-count-other": "¤000B",
							"1000000000000-count-one": "¤0T",
							"1000000000000-count-other": "¤0T",
							"10000000000000-count-one": "¤00T",
							"10000000000000-count-other": "¤00T",
							"100000000000000-count-one": "¤000T",
							"100000000000000-count-other": "¤000T"
						}
					},
					"unitPattern-count-one": "{0} {1}",
					"unitPattern-count-other": "{0} {1}"
				},
				"miscPatterns-numberSystem-latn": {
					"atLeast": "{0}+",
					"range": "{0}–{1}"
				}
			}
		}
	}
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {
	"main": {
		"es": {
			"identity": {
				"version": {
					"_number": "$Revision: 12880 $",
					"_cldrVersion": "30.0.3"
				},
				"language": "es"
			},
			"numbers": {
				"currencies": {
					"ADP": {
						"displayName": "peseta andorrana",
						"displayName-count-one": "peseta andorrana",
						"displayName-count-other": "pesetas andorranas",
						"symbol": "ADP"
					},
					"AED": {
						"displayName": "dírham de los Emiratos Árabes Unidos",
						"displayName-count-one": "dírham de los Emiratos Árabes Unidos",
						"displayName-count-other": "dírhams de los Emiratos Árabes Unidos",
						"symbol": "AED"
					},
					"AFA": {
						"displayName": "afgani (1927–2002)",
						"symbol": "AFA"
					},
					"AFN": {
						"displayName": "afgani",
						"displayName-count-one": "afgani",
						"displayName-count-other": "afganis",
						"symbol": "AFN"
					},
					"ALL": {
						"displayName": "lek",
						"displayName-count-one": "lek",
						"displayName-count-other": "lekes",
						"symbol": "ALL"
					},
					"AMD": {
						"displayName": "dram",
						"displayName-count-one": "dram",
						"displayName-count-other": "drams",
						"symbol": "AMD"
					},
					"ANG": {
						"displayName": "florín de las Antillas Neerlandesas",
						"displayName-count-one": "florín de las Antillas Neerlandesas",
						"displayName-count-other": "florines de las Antillas Neerlandesas",
						"symbol": "ANG"
					},
					"AOA": {
						"displayName": "kuanza",
						"displayName-count-one": "kuanza",
						"displayName-count-other": "kuanzas",
						"symbol": "AOA",
						"symbol-alt-narrow": "Kz"
					},
					"AOK": {
						"displayName": "kwanza angoleño (1977–1990)",
						"symbol": "AOK"
					},
					"AON": {
						"displayName": "nuevo kwanza angoleño (1990–2000)",
						"symbol": "AON"
					},
					"AOR": {
						"displayName": "kwanza reajustado angoleño (1995–1999)",
						"symbol": "AOR"
					},
					"ARA": {
						"displayName": "austral argentino",
						"displayName-count-one": "austral argentino",
						"displayName-count-other": "australes argentinos",
						"symbol": "ARA"
					},
					"ARL": {
						"displayName": "ARL",
						"symbol": "ARL"
					},
					"ARM": {
						"displayName": "ARM",
						"symbol": "ARM"
					},
					"ARP": {
						"displayName": "peso argentino (1983–1985)",
						"displayName-count-one": "peso argentino (ARP)",
						"displayName-count-other": "pesos argentinos (ARP)",
						"symbol": "ARP"
					},
					"ARS": {
						"displayName": "peso argentino",
						"displayName-count-one": "peso argentino",
						"displayName-count-other": "pesos argentinos",
						"symbol": "ARS",
						"symbol-alt-narrow": "$"
					},
					"ATS": {
						"displayName": "chelín austriaco",
						"displayName-count-one": "chelín austriaco",
						"displayName-count-other": "chelines austriacos",
						"symbol": "ATS"
					},
					"AUD": {
						"displayName": "dólar australiano",
						"displayName-count-one": "dólar australiano",
						"displayName-count-other": "dólares australianos",
						"symbol": "AUD",
						"symbol-alt-narrow": "$"
					},
					"AWG": {
						"displayName": "florín arubeño",
						"displayName-count-one": "florín arubeño",
						"displayName-count-other": "florines arubeños",
						"symbol": "AWG"
					},
					"AZM": {
						"displayName": "manat azerí (1993–2006)",
						"symbol": "AZM"
					},
					"AZN": {
						"displayName": "manat azerí",
						"displayName-count-one": "manat azerí",
						"displayName-count-other": "manat azeríes",
						"symbol": "AZN"
					},
					"BAD": {
						"displayName": "dinar bosnio",
						"displayName-count-one": "dinar bosnio",
						"displayName-count-other": "dinares bosnios",
						"symbol": "BAD"
					},
					"BAM": {
						"displayName": "marco convertible de Bosnia-Herzegovina",
						"displayName-count-one": "marco convertible de Bosnia-Herzegovina",
						"displayName-count-other": "marcos convertibles de Bosnia-Herzegovina",
						"symbol": "BAM",
						"symbol-alt-narrow": "KM"
					},
					"BAN": {
						"displayName": "BAN",
						"symbol": "BAN"
					},
					"BBD": {
						"displayName": "dólar barbadense",
						"displayName-count-one": "dólar barbadense",
						"displayName-count-other": "dólares barbadenses",
						"symbol": "BBD",
						"symbol-alt-narrow": "$"
					},
					"BDT": {
						"displayName": "taka",
						"displayName-count-one": "taka",
						"displayName-count-other": "takas",
						"symbol": "BDT",
						"symbol-alt-narrow": "৳"
					},
					"BEC": {
						"displayName": "franco belga (convertible)",
						"displayName-count-one": "franco belga (convertible)",
						"displayName-count-other": "francos belgas (convertibles)",
						"symbol": "BEC"
					},
					"BEF": {
						"displayName": "franco belga",
						"displayName-count-one": "franco belga",
						"displayName-count-other": "francos belgas",
						"symbol": "BEF"
					},
					"BEL": {
						"displayName": "franco belga (financiero)",
						"displayName-count-one": "franco belga (financiero)",
						"displayName-count-other": "francos belgas (financieros)",
						"symbol": "BEL"
					},
					"BGL": {
						"displayName": "lev fuerte búlgaro",
						"displayName-count-one": "lev fuerte búlgaro",
						"displayName-count-other": "leva fuertes búlgaros",
						"symbol": "BGL"
					},
					"BGM": {
						"displayName": "BGM",
						"symbol": "BGM"
					},
					"BGN": {
						"displayName": "lev búlgaro",
						"displayName-count-one": "lev búlgaro",
						"displayName-count-other": "levas búlgaras",
						"symbol": "BGN"
					},
					"BGO": {
						"displayName": "BGO",
						"symbol": "BGO"
					},
					"BHD": {
						"displayName": "dinar bahreiní",
						"displayName-count-one": "dinar bahreiní",
						"displayName-count-other": "dinares bahreiníes",
						"symbol": "BHD"
					},
					"BIF": {
						"displayName": "franco burundés",
						"displayName-count-one": "franco burundés",
						"displayName-count-other": "francos burundeses",
						"symbol": "BIF"
					},
					"BMD": {
						"displayName": "dólar de Bermudas",
						"displayName-count-one": "dólar de Bermudas",
						"displayName-count-other": "dólares de Bermudas",
						"symbol": "BMD",
						"symbol-alt-narrow": "$"
					},
					"BND": {
						"displayName": "dólar bruneano",
						"displayName-count-one": "dólar bruneano",
						"displayName-count-other": "dólares bruneanos",
						"symbol": "BND",
						"symbol-alt-narrow": "$"
					},
					"BOB": {
						"displayName": "boliviano",
						"displayName-count-one": "boliviano",
						"displayName-count-other": "bolivianos",
						"symbol": "BOB",
						"symbol-alt-narrow": "Bs"
					},
					"BOL": {
						"displayName": "BOL",
						"symbol": "BOL"
					},
					"BOP": {
						"displayName": "peso boliviano",
						"displayName-count-one": "peso boliviano",
						"displayName-count-other": "pesos bolivianos",
						"symbol": "BOP"
					},
					"BOV": {
						"displayName": "MVDOL boliviano",
						"displayName-count-one": "MVDOL boliviano",
						"displayName-count-other": "MVDOL bolivianos",
						"symbol": "BOV"
					},
					"BRB": {
						"displayName": "nuevo cruceiro brasileño (1967–1986)",
						"displayName-count-one": "nuevo cruzado brasileño (BRB)",
						"displayName-count-other": "nuevos cruzados brasileños (BRB)",
						"symbol": "BRB"
					},
					"BRC": {
						"displayName": "cruzado brasileño",
						"displayName-count-one": "cruzado brasileño",
						"displayName-count-other": "cruzados brasileños",
						"symbol": "BRC"
					},
					"BRE": {
						"displayName": "cruceiro brasileño (1990–1993)",
						"displayName-count-one": "cruceiro brasileño (BRE)",
						"displayName-count-other": "cruceiros brasileños (BRE)",
						"symbol": "BRE"
					},
					"BRL": {
						"displayName": "real brasileño",
						"displayName-count-one": "real brasileño",
						"displayName-count-other": "reales brasileños",
						"symbol": "BRL",
						"symbol-alt-narrow": "R$"
					},
					"BRN": {
						"displayName": "nuevo cruzado brasileño",
						"displayName-count-one": "nuevo cruzado brasileño",
						"displayName-count-other": "nuevos cruzados brasileños",
						"symbol": "BRN"
					},
					"BRR": {
						"displayName": "cruceiro brasileño",
						"displayName-count-one": "cruceiro brasileño",
						"displayName-count-other": "cruceiros brasileños",
						"symbol": "BRR"
					},
					"BRZ": {
						"displayName": "BRZ",
						"symbol": "BRZ"
					},
					"BSD": {
						"displayName": "dólar bahameño",
						"displayName-count-one": "dólar bahameño",
						"displayName-count-other": "dólares bahameños",
						"symbol": "BSD",
						"symbol-alt-narrow": "$"
					},
					"BTN": {
						"displayName": "gultrum",
						"displayName-count-one": "gultrum",
						"displayName-count-other": "gultrums",
						"symbol": "BTN"
					},
					"BUK": {
						"displayName": "kyat birmano",
						"displayName-count-one": "kyat birmano",
						"displayName-count-other": "kyat birmanos",
						"symbol": "BUK"
					},
					"BWP": {
						"displayName": "pula",
						"displayName-count-one": "pula",
						"displayName-count-other": "pulas",
						"symbol": "BWP",
						"symbol-alt-narrow": "P"
					},
					"BYB": {
						"displayName": "nuevo rublo bielorruso (1994–1999)",
						"displayName-count-one": "nuevo rublo bielorruso",
						"displayName-count-other": "nuevos rublos bielorrusos",
						"symbol": "BYB"
					},
					"BYN": {
						"displayName": "rublo bielorruso",
						"displayName-count-one": "rublo bielorruso",
						"displayName-count-other": "rublos bielorrusos",
						"symbol": "BYN",
						"symbol-alt-narrow": "р."
					},
					"BYR": {
						"displayName": "rublo bielorruso (2000–2016)",
						"displayName-count-one": "rublo bielorruso (2000–2016)",
						"displayName-count-other": "rublos bielorrusos (2000–2016)",
						"symbol": "BYR"
					},
					"BZD": {
						"displayName": "dólar beliceño",
						"displayName-count-one": "dólar beliceño",
						"displayName-count-other": "dólares beliceños",
						"symbol": "BZD",
						"symbol-alt-narrow": "$"
					},
					"CAD": {
						"displayName": "dólar canadiense",
						"displayName-count-one": "dólar canadiense",
						"displayName-count-other": "dólares canadienses",
						"symbol": "CA$",
						"symbol-alt-narrow": "$"
					},
					"CDF": {
						"displayName": "franco congoleño",
						"displayName-count-one": "franco congoleño",
						"displayName-count-other": "francos congoleños",
						"symbol": "CDF"
					},
					"CHE": {
						"displayName": "euro WIR",
						"displayName-count-one": "euro WIR",
						"displayName-count-other": "euros WIR",
						"symbol": "CHE"
					},
					"CHF": {
						"displayName": "franco suizo",
						"displayName-count-one": "franco suizo",
						"displayName-count-other": "francos suizos",
						"symbol": "CHF"
					},
					"CHW": {
						"displayName": "franco WIR",
						"displayName-count-one": "franco WIR",
						"displayName-count-other": "francos WIR",
						"symbol": "CHW"
					},
					"CLE": {
						"displayName": "CLE",
						"symbol": "CLE"
					},
					"CLF": {
						"displayName": "unidad de fomento chilena",
						"displayName-count-one": "unidad de fomento chilena",
						"displayName-count-other": "unidades de fomento chilenas",
						"symbol": "CLF"
					},
					"CLP": {
						"displayName": "peso chileno",
						"displayName-count-one": "peso chileno",
						"displayName-count-other": "pesos chilenos",
						"symbol": "CLP",
						"symbol-alt-narrow": "$"
					},
					"CNY": {
						"displayName": "yuan",
						"displayName-count-one": "yuan",
						"displayName-count-other": "yuanes",
						"symbol": "CNY",
						"symbol-alt-narrow": "¥"
					},
					"COP": {
						"displayName": "peso colombiano",
						"displayName-count-one": "peso colombiano",
						"displayName-count-other": "pesos colombianos",
						"symbol": "COP",
						"symbol-alt-narrow": "$"
					},
					"COU": {
						"displayName": "unidad de valor real colombiana",
						"displayName-count-one": "unidad de valor real",
						"displayName-count-other": "unidades de valor reales",
						"symbol": "COU"
					},
					"CRC": {
						"displayName": "colón costarricense",
						"displayName-count-one": "colón costarricense",
						"displayName-count-other": "colones costarricenses",
						"symbol": "CRC",
						"symbol-alt-narrow": "₡"
					},
					"CSD": {
						"displayName": "antiguo dinar serbio",
						"displayName-count-one": "antiguo dinar serbio",
						"displayName-count-other": "antiguos dinares serbios",
						"symbol": "CSD"
					},
					"CSK": {
						"displayName": "corona fuerte checoslovaca",
						"displayName-count-one": "corona fuerte checoslovaca",
						"displayName-count-other": "coronas fuertes checoslovacas",
						"symbol": "CSK"
					},
					"CUC": {
						"displayName": "peso cubano convertible",
						"displayName-count-one": "peso cubano convertible",
						"displayName-count-other": "pesos cubanos convertibles",
						"symbol": "CUC",
						"symbol-alt-narrow": "$"
					},
					"CUP": {
						"displayName": "peso cubano",
						"displayName-count-one": "peso cubano",
						"displayName-count-other": "pesos cubanos",
						"symbol": "CUP",
						"symbol-alt-narrow": "$"
					},
					"CVE": {
						"displayName": "escudo de Cabo Verde",
						"displayName-count-one": "escudo de Cabo Verde",
						"displayName-count-other": "escudos de Cabo Verde",
						"symbol": "CVE"
					},
					"CYP": {
						"displayName": "libra chipriota",
						"displayName-count-one": "libra chipriota",
						"displayName-count-other": "libras chipriotas",
						"symbol": "CYP"
					},
					"CZK": {
						"displayName": "corona checa",
						"displayName-count-one": "corona checa",
						"displayName-count-other": "coronas checas",
						"symbol": "CZK",
						"symbol-alt-narrow": "Kč"
					},
					"DDM": {
						"displayName": "ostmark de Alemania del Este",
						"displayName-count-one": "marco de la República Democrática Alemana",
						"displayName-count-other": "marcos de la República Democrática Alemana",
						"symbol": "DDM"
					},
					"DEM": {
						"displayName": "marco alemán",
						"displayName-count-one": "marco alemán",
						"displayName-count-other": "marcos alemanes",
						"symbol": "DEM"
					},
					"DJF": {
						"displayName": "franco yibutiano",
						"displayName-count-one": "franco yibutiano",
						"displayName-count-other": "francos yibutianos",
						"symbol": "DJF"
					},
					"DKK": {
						"displayName": "corona danesa",
						"displayName-count-one": "corona danesa",
						"displayName-count-other": "coronas danesas",
						"symbol": "DKK",
						"symbol-alt-narrow": "kr"
					},
					"DOP": {
						"displayName": "peso dominicano",
						"displayName-count-one": "peso dominicano",
						"displayName-count-other": "pesos dominicanos",
						"symbol": "DOP",
						"symbol-alt-narrow": "$"
					},
					"DZD": {
						"displayName": "dinar argelino",
						"displayName-count-one": "dinar argelino",
						"displayName-count-other": "dinares argelinos",
						"symbol": "DZD"
					},
					"ECS": {
						"displayName": "sucre ecuatoriano",
						"displayName-count-one": "sucre ecuatoriano",
						"displayName-count-other": "sucres ecuatorianos",
						"symbol": "ECS"
					},
					"ECV": {
						"displayName": "unidad de valor constante (UVC) ecuatoriana",
						"displayName-count-one": "unidad de valor constante (UVC) ecuatoriana",
						"displayName-count-other": "unidades de valor constante (UVC) ecuatorianas",
						"symbol": "ECV"
					},
					"EEK": {
						"displayName": "corona estonia",
						"displayName-count-one": "corona estonia",
						"displayName-count-other": "coronas estonias",
						"symbol": "EEK"
					},
					"EGP": {
						"displayName": "libra egipcia",
						"displayName-count-one": "libra egipcia",
						"displayName-count-other": "libras egipcias",
						"symbol": "EGP",
						"symbol-alt-narrow": "EGP"
					},
					"ERN": {
						"displayName": "nakfa",
						"displayName-count-one": "nakfa",
						"displayName-count-other": "nakfas",
						"symbol": "ERN"
					},
					"ESA": {
						"displayName": "peseta española (cuenta A)",
						"displayName-count-one": "peseta española (cuenta A)",
						"displayName-count-other": "pesetas españolas (cuenta A)",
						"symbol": "ESA"
					},
					"ESB": {
						"displayName": "peseta española (cuenta convertible)",
						"displayName-count-one": "peseta española (cuenta convertible)",
						"displayName-count-other": "pesetas españolas (cuenta convertible)",
						"symbol": "ESB"
					},
					"ESP": {
						"displayName": "peseta española",
						"displayName-count-one": "peseta española",
						"displayName-count-other": "pesetas españolas",
						"symbol": "₧",
						"symbol-alt-narrow": "₧"
					},
					"ETB": {
						"displayName": "bir",
						"displayName-count-one": "bir",
						"displayName-count-other": "bires",
						"symbol": "ETB"
					},
					"EUR": {
						"displayName": "euro",
						"displayName-count-one": "euro",
						"displayName-count-other": "euros",
						"symbol": "€",
						"symbol-alt-narrow": "€"
					},
					"FIM": {
						"displayName": "marco finlandés",
						"displayName-count-one": "marco finlandés",
						"displayName-count-other": "marcos finlandeses",
						"symbol": "FIM"
					},
					"FJD": {
						"displayName": "dólar fiyiano",
						"displayName-count-one": "dólar fiyiano",
						"displayName-count-other": "dólares fiyianos",
						"symbol": "FJD",
						"symbol-alt-narrow": "$"
					},
					"FKP": {
						"displayName": "libra malvinense",
						"displayName-count-one": "libra malvinense",
						"displayName-count-other": "libras malvinenses",
						"symbol": "FKP",
						"symbol-alt-narrow": "£"
					},
					"FRF": {
						"displayName": "franco francés",
						"displayName-count-one": "franco francés",
						"displayName-count-other": "francos franceses",
						"symbol": "FRF"
					},
					"GBP": {
						"displayName": "libra británica",
						"displayName-count-one": "libra británica",
						"displayName-count-other": "libras británicas",
						"symbol": "GBP",
						"symbol-alt-narrow": "£"
					},
					"GEK": {
						"displayName": "kupon larit georgiano",
						"symbol": "GEK"
					},
					"GEL": {
						"displayName": "lari",
						"displayName-count-one": "lari",
						"displayName-count-other": "laris",
						"symbol": "GEL",
						"symbol-alt-narrow": "₾",
						"symbol-alt-variant": "₾"
					},
					"GHC": {
						"displayName": "cedi ghanés (1979–2007)",
						"symbol": "GHC"
					},
					"GHS": {
						"displayName": "cedi",
						"displayName-count-one": "cedi",
						"displayName-count-other": "cedis",
						"symbol": "GHS"
					},
					"GIP": {
						"displayName": "libra gibraltareña",
						"displayName-count-one": "libra gibraltareña",
						"displayName-count-other": "libras gibraltareñas",
						"symbol": "GIP",
						"symbol-alt-narrow": "£"
					},
					"GMD": {
						"displayName": "dalasi",
						"displayName-count-one": "dalasi",
						"displayName-count-other": "dalasis",
						"symbol": "GMD"
					},
					"GNF": {
						"displayName": "franco guineano",
						"displayName-count-one": "franco guineano",
						"displayName-count-other": "francos guineanos",
						"symbol": "GNF",
						"symbol-alt-narrow": "FG"
					},
					"GNS": {
						"displayName": "syli guineano",
						"symbol": "GNS"
					},
					"GQE": {
						"displayName": "ekuele de Guinea Ecuatorial",
						"displayName-count-one": "ekuele de Guinea Ecuatorial",
						"displayName-count-other": "ekueles de Guinea Ecuatorial",
						"symbol": "GQE"
					},
					"GRD": {
						"displayName": "dracma griego",
						"displayName-count-one": "dracma griego",
						"displayName-count-other": "dracmas griegos",
						"symbol": "GRD"
					},
					"GTQ": {
						"displayName": "quetzal guatemalteco",
						"displayName-count-one": "quetzal guatemalteco",
						"displayName-count-other": "quetzales guatemaltecos",
						"symbol": "GTQ",
						"symbol-alt-narrow": "Q"
					},
					"GWE": {
						"displayName": "escudo de Guinea Portuguesa",
						"symbol": "GWE"
					},
					"GWP": {
						"displayName": "peso de Guinea-Bissáu",
						"symbol": "GWP"
					},
					"GYD": {
						"displayName": "dólar guyanés",
						"displayName-count-one": "dólar guyanés",
						"displayName-count-other": "dólares guyaneses",
						"symbol": "GYD",
						"symbol-alt-narrow": "$"
					},
					"HKD": {
						"displayName": "dólar hongkonés",
						"displayName-count-one": "dólar hongkonés",
						"displayName-count-other": "dólares hongkoneses",
						"symbol": "HKD",
						"symbol-alt-narrow": "$"
					},
					"HNL": {
						"displayName": "lempira hondureño",
						"displayName-count-one": "lempira hondureño",
						"displayName-count-other": "lempiras hondureños",
						"symbol": "HNL",
						"symbol-alt-narrow": "L"
					},
					"HRD": {
						"displayName": "dinar croata",
						"displayName-count-one": "dinar croata",
						"displayName-count-other": "dinares croatas",
						"symbol": "HRD"
					},
					"HRK": {
						"displayName": "kuna",
						"displayName-count-one": "kuna",
						"displayName-count-other": "kunas",
						"symbol": "HRK",
						"symbol-alt-narrow": "kn"
					},
					"HTG": {
						"displayName": "gourde haitiano",
						"displayName-count-one": "gourde haitiano",
						"displayName-count-other": "gourdes haitianos",
						"symbol": "HTG"
					},
					"HUF": {
						"displayName": "forinto húngaro",
						"displayName-count-one": "forinto húngaro",
						"displayName-count-other": "forintos húngaros",
						"symbol": "HUF",
						"symbol-alt-narrow": "Ft"
					},
					"IDR": {
						"displayName": "rupia indonesia",
						"displayName-count-one": "rupia indonesia",
						"displayName-count-other": "rupias indonesias",
						"symbol": "IDR",
						"symbol-alt-narrow": "Rp"
					},
					"IEP": {
						"displayName": "libra irlandesa",
						"displayName-count-one": "libra irlandesa",
						"displayName-count-other": "libras irlandesas",
						"symbol": "IEP"
					},
					"ILP": {
						"displayName": "libra israelí",
						"displayName-count-one": "libra israelí",
						"displayName-count-other": "libras israelíes",
						"symbol": "ILP"
					},
					"ILS": {
						"displayName": "nuevo séquel israelí",
						"displayName-count-one": "nuevo séquel israelí",
						"displayName-count-other": "nuevos séqueles israelíes",
						"symbol": "ILS",
						"symbol-alt-narrow": "₪"
					},
					"INR": {
						"displayName": "rupia india",
						"displayName-count-one": "rupia india",
						"displayName-count-other": "rupias indias",
						"symbol": "INR",
						"symbol-alt-narrow": "₹"
					},
					"IQD": {
						"displayName": "dinar iraquí",
						"displayName-count-one": "dinar iraquí",
						"displayName-count-other": "dinares iraquíes",
						"symbol": "IQD"
					},
					"IRR": {
						"displayName": "rial iraní",
						"displayName-count-one": "rial iraní",
						"displayName-count-other": "riales iraníes",
						"symbol": "IRR"
					},
					"ISK": {
						"displayName": "corona islandesa",
						"displayName-count-one": "corona islandesa",
						"displayName-count-other": "coronas islandesas",
						"symbol": "ISK",
						"symbol-alt-narrow": "kr"
					},
					"ITL": {
						"displayName": "lira italiana",
						"displayName-count-one": "lira italiana",
						"displayName-count-other": "liras italianas",
						"symbol": "ITL"
					},
					"JMD": {
						"displayName": "dólar jamaicano",
						"displayName-count-one": "dólar jamaicano",
						"displayName-count-other": "dólares jamaicanos",
						"symbol": "JMD",
						"symbol-alt-narrow": "$"
					},
					"JOD": {
						"displayName": "dinar jordano",
						"displayName-count-one": "dinar jordano",
						"displayName-count-other": "dinares jordanos",
						"symbol": "JOD"
					},
					"JPY": {
						"displayName": "yen",
						"displayName-count-one": "yen",
						"displayName-count-other": "yenes",
						"symbol": "JPY",
						"symbol-alt-narrow": "¥"
					},
					"KES": {
						"displayName": "chelín keniano",
						"displayName-count-one": "chelín keniano",
						"displayName-count-other": "chelines kenianos",
						"symbol": "KES"
					},
					"KGS": {
						"displayName": "som",
						"displayName-count-one": "som",
						"displayName-count-other": "soms",
						"symbol": "KGS"
					},
					"KHR": {
						"displayName": "riel",
						"displayName-count-one": "riel",
						"displayName-count-other": "rieles",
						"symbol": "KHR",
						"symbol-alt-narrow": "៛"
					},
					"KMF": {
						"displayName": "franco comorense",
						"displayName-count-one": "franco comorense",
						"displayName-count-other": "francos comorenses",
						"symbol": "KMF",
						"symbol-alt-narrow": "CF"
					},
					"KPW": {
						"displayName": "won norcoreano",
						"displayName-count-one": "won norcoreano",
						"displayName-count-other": "wons norcoreanos",
						"symbol": "KPW",
						"symbol-alt-narrow": "₩"
					},
					"KRH": {
						"displayName": "KRH",
						"symbol": "KRH"
					},
					"KRO": {
						"displayName": "KRO",
						"symbol": "KRO"
					},
					"KRW": {
						"displayName": "won surcoreano",
						"displayName-count-one": "won surcoreano",
						"displayName-count-other": "wons surcoreanos",
						"symbol": "KRW",
						"symbol-alt-narrow": "₩"
					},
					"KWD": {
						"displayName": "dinar kuwaití",
						"displayName-count-one": "dinar kuwaití",
						"displayName-count-other": "dinares kuwaitíes",
						"symbol": "KWD"
					},
					"KYD": {
						"displayName": "dólar de las Islas Caimán",
						"displayName-count-one": "dólar de las Islas Caimán",
						"displayName-count-other": "dólares de las Islas Caimán",
						"symbol": "KYD",
						"symbol-alt-narrow": "$"
					},
					"KZT": {
						"displayName": "tenge kazako",
						"displayName-count-one": "tenge kazako",
						"displayName-count-other": "tenges kazakos",
						"symbol": "KZT",
						"symbol-alt-narrow": "₸"
					},
					"LAK": {
						"displayName": "kip",
						"displayName-count-one": "kip",
						"displayName-count-other": "kips",
						"symbol": "LAK",
						"symbol-alt-narrow": "₭"
					},
					"LBP": {
						"displayName": "libra libanesa",
						"displayName-count-one": "libra libanesa",
						"displayName-count-other": "libras libanesas",
						"symbol": "LBP",
						"symbol-alt-narrow": "L£"
					},
					"LKR": {
						"displayName": "rupia esrilanquesa",
						"displayName-count-one": "rupia esrilanquesa",
						"displayName-count-other": "rupias esrilanquesas",
						"symbol": "LKR",
						"symbol-alt-narrow": "Rs"
					},
					"LRD": {
						"displayName": "dólar liberiano",
						"displayName-count-one": "dólar liberiano",
						"displayName-count-other": "dólares liberianos",
						"symbol": "LRD",
						"symbol-alt-narrow": "$"
					},
					"LSL": {
						"displayName": "loti lesothense",
						"symbol": "LSL"
					},
					"LTL": {
						"displayName": "litas lituano",
						"displayName-count-one": "litas lituana",
						"displayName-count-other": "litas lituanas",
						"symbol": "LTL",
						"symbol-alt-narrow": "Lt"
					},
					"LTT": {
						"displayName": "talonas lituano",
						"displayName-count-one": "talonas lituana",
						"displayName-count-other": "talonas lituanas",
						"symbol": "LTT"
					},
					"LUC": {
						"displayName": "franco convertible luxemburgués",
						"displayName-count-one": "franco convertible luxemburgués",
						"displayName-count-other": "francos convertibles luxemburgueses",
						"symbol": "LUC"
					},
					"LUF": {
						"displayName": "franco luxemburgués",
						"displayName-count-one": "franco luxemburgués",
						"displayName-count-other": "francos luxemburgueses",
						"symbol": "LUF"
					},
					"LUL": {
						"displayName": "franco financiero luxemburgués",
						"displayName-count-one": "franco financiero luxemburgués",
						"displayName-count-other": "francos financieros luxemburgueses",
						"symbol": "LUL"
					},
					"LVL": {
						"displayName": "lats letón",
						"displayName-count-one": "lats letón",
						"displayName-count-other": "lats letónes",
						"symbol": "LVL",
						"symbol-alt-narrow": "Ls"
					},
					"LVR": {
						"displayName": "rublo letón",
						"displayName-count-one": "rublo letón",
						"displayName-count-other": "rublos letones",
						"symbol": "LVR"
					},
					"LYD": {
						"displayName": "dinar libio",
						"displayName-count-one": "dinar libio",
						"displayName-count-other": "dinares libios",
						"symbol": "LYD"
					},
					"MAD": {
						"displayName": "dírham marroquí",
						"displayName-count-one": "dírham marroquí",
						"displayName-count-other": "dírhams marroquíes",
						"symbol": "MAD"
					},
					"MAF": {
						"displayName": "franco marroquí",
						"displayName-count-one": "franco marroquí",
						"displayName-count-other": "francos marroquíes",
						"symbol": "MAF"
					},
					"MCF": {
						"displayName": "MCF",
						"symbol": "MCF"
					},
					"MDC": {
						"displayName": "MDC",
						"symbol": "MDC"
					},
					"MDL": {
						"displayName": "leu moldavo",
						"displayName-count-one": "leu moldavo",
						"displayName-count-other": "leus moldavos",
						"symbol": "MDL"
					},
					"MGA": {
						"displayName": "ariari",
						"displayName-count-one": "ariari",
						"displayName-count-other": "ariaris",
						"symbol": "MGA",
						"symbol-alt-narrow": "Ar"
					},
					"MGF": {
						"displayName": "franco malgache",
						"symbol": "MGF"
					},
					"MKD": {
						"displayName": "dinar macedonio",
						"displayName-count-one": "dinar macedonio",
						"displayName-count-other": "dinares macedonios",
						"symbol": "MKD"
					},
					"MKN": {
						"displayName": "MKN",
						"symbol": "MKN"
					},
					"MLF": {
						"displayName": "franco malí",
						"symbol": "MLF"
					},
					"MMK": {
						"displayName": "kiat",
						"displayName-count-one": "kiat",
						"displayName-count-other": "kiats",
						"symbol": "MMK",
						"symbol-alt-narrow": "K"
					},
					"MNT": {
						"displayName": "tugrik",
						"displayName-count-one": "tugrik",
						"displayName-count-other": "tugriks",
						"symbol": "MNT",
						"symbol-alt-narrow": "₮"
					},
					"MOP": {
						"displayName": "pataca de Macao",
						"displayName-count-one": "pataca de Macao",
						"displayName-count-other": "patacas de Macao",
						"symbol": "MOP"
					},
					"MRO": {
						"displayName": "uguiya",
						"displayName-count-one": "uguiya",
						"displayName-count-other": "uguiyas",
						"symbol": "MRO"
					},
					"MTL": {
						"displayName": "lira maltesa",
						"displayName-count-one": "lira maltesa",
						"displayName-count-other": "liras maltesas",
						"symbol": "MTL"
					},
					"MTP": {
						"displayName": "libra maltesa",
						"displayName-count-one": "libra maltesa",
						"displayName-count-other": "libras maltesas",
						"symbol": "MTP"
					},
					"MUR": {
						"displayName": "rupia mauriciana",
						"displayName-count-one": "rupia mauriciana",
						"displayName-count-other": "rupias mauricianas",
						"symbol": "MUR",
						"symbol-alt-narrow": "Rs"
					},
					"MVR": {
						"displayName": "rufiya",
						"displayName-count-one": "rufiya",
						"displayName-count-other": "rufiyas",
						"symbol": "MVR"
					},
					"MWK": {
						"displayName": "kwacha malauí",
						"displayName-count-one": "kwacha malauí",
						"displayName-count-other": "kwachas malauís",
						"symbol": "MWK"
					},
					"MXN": {
						"displayName": "peso mexicano",
						"displayName-count-one": "peso mexicano",
						"displayName-count-other": "pesos mexicanos",
						"symbol": "MXN",
						"symbol-alt-narrow": "$"
					},
					"MXP": {
						"displayName": "peso de plata mexicano (1861–1992)",
						"displayName-count-one": "peso de plata mexicano (MXP)",
						"displayName-count-other": "pesos de plata mexicanos (MXP)",
						"symbol": "MXP"
					},
					"MXV": {
						"displayName": "unidad de inversión (UDI) mexicana",
						"displayName-count-one": "unidad de inversión (UDI) mexicana",
						"displayName-count-other": "unidades de inversión (UDI) mexicanas",
						"symbol": "MXV"
					},
					"MYR": {
						"displayName": "ringit",
						"displayName-count-one": "ringit",
						"displayName-count-other": "ringits",
						"symbol": "MYR",
						"symbol-alt-narrow": "RM"
					},
					"MZE": {
						"displayName": "escudo mozambiqueño",
						"displayName-count-one": "escudo mozambiqueño",
						"displayName-count-other": "escudos mozambiqueños",
						"symbol": "MZE"
					},
					"MZM": {
						"displayName": "antiguo metical mozambiqueño",
						"symbol": "MZM"
					},
					"MZN": {
						"displayName": "metical",
						"displayName-count-one": "metical",
						"displayName-count-other": "meticales",
						"symbol": "MZN"
					},
					"NAD": {
						"displayName": "dólar namibio",
						"displayName-count-one": "dólar namibio",
						"displayName-count-other": "dólares namibios",
						"symbol": "NAD",
						"symbol-alt-narrow": "$"
					},
					"NGN": {
						"displayName": "naira",
						"displayName-count-one": "naira",
						"displayName-count-other": "nairas",
						"symbol": "NGN",
						"symbol-alt-narrow": "₦"
					},
					"NIC": {
						"displayName": "córdoba nicaragüense (1988–1991)",
						"displayName-count-one": "córdoba nicaragüense (1988–1991)",
						"displayName-count-other": "córdobas nicaragüenses (1988–1991)",
						"symbol": "NIC"
					},
					"NIO": {
						"displayName": "córdoba nicaragüense",
						"displayName-count-one": "córdoba nicaragüense",
						"displayName-count-other": "córdobas nicaragüenses",
						"symbol": "NIO",
						"symbol-alt-narrow": "C$"
					},
					"NLG": {
						"displayName": "florín neerlandés",
						"displayName-count-one": "florín neerlandés",
						"displayName-count-other": "florines neerlandeses",
						"symbol": "NLG"
					},
					"NOK": {
						"displayName": "corona noruega",
						"displayName-count-one": "corona noruega",
						"displayName-count-other": "coronas noruegas",
						"symbol": "NOK",
						"symbol-alt-narrow": "kr"
					},
					"NPR": {
						"displayName": "rupia nepalí",
						"displayName-count-one": "rupia nepalí",
						"displayName-count-other": "rupias nepalíes",
						"symbol": "NPR",
						"symbol-alt-narrow": "Rs"
					},
					"NZD": {
						"displayName": "dólar neozelandés",
						"displayName-count-one": "dólar neozelandés",
						"displayName-count-other": "dólares neozelandeses",
						"symbol": "NZD",
						"symbol-alt-narrow": "$"
					},
					"OMR": {
						"displayName": "rial omaní",
						"displayName-count-one": "rial omaní",
						"displayName-count-other": "riales omaníes",
						"symbol": "OMR"
					},
					"PAB": {
						"displayName": "balboa panameño",
						"displayName-count-one": "balboa panameño",
						"displayName-count-other": "balboas panameños",
						"symbol": "PAB"
					},
					"PEI": {
						"displayName": "inti peruano",
						"displayName-count-one": "inti peruano",
						"displayName-count-other": "intis peruanos",
						"symbol": "PEI"
					},
					"PEN": {
						"displayName": "nuevo sol peruano",
						"displayName-count-one": "nuevo sol peruano",
						"displayName-count-other": "nuevos soles peruanos",
						"symbol": "PEN"
					},
					"PES": {
						"displayName": "sol peruano (1863–1965)",
						"displayName-count-one": "sol peruano (1863–1965)",
						"displayName-count-other": "soles peruanos (1863–1965)",
						"symbol": "PES"
					},
					"PGK": {
						"displayName": "kina",
						"displayName-count-one": "kina",
						"displayName-count-other": "kinas",
						"symbol": "PGK"
					},
					"PHP": {
						"displayName": "peso filipino",
						"displayName-count-one": "peso filipino",
						"displayName-count-other": "pesos filipinos",
						"symbol": "PHP",
						"symbol-alt-narrow": "₱"
					},
					"PKR": {
						"displayName": "rupia pakistaní",
						"displayName-count-one": "rupia pakistaní",
						"displayName-count-other": "rupias pakistaníes",
						"symbol": "PKR",
						"symbol-alt-narrow": "Rs"
					},
					"PLN": {
						"displayName": "esloti",
						"displayName-count-one": "esloti",
						"displayName-count-other": "eslotis",
						"symbol": "PLN",
						"symbol-alt-narrow": "zł"
					},
					"PLZ": {
						"displayName": "zloty polaco (1950–1995)",
						"displayName-count-one": "zloty polaco (PLZ)",
						"displayName-count-other": "zlotys polacos (PLZ)",
						"symbol": "PLZ"
					},
					"PTE": {
						"displayName": "escudo portugués",
						"displayName-count-one": "escudo portugués",
						"displayName-count-other": "escudos portugueses",
						"symbol": "PTE"
					},
					"PYG": {
						"displayName": "guaraní paraguayo",
						"displayName-count-one": "guaraní paraguayo",
						"displayName-count-other": "guaraníes paraguayos",
						"symbol": "PYG",
						"symbol-alt-narrow": "₲"
					},
					"QAR": {
						"displayName": "rial catarí",
						"displayName-count-one": "rial catarí",
						"displayName-count-other": "riales cataríes",
						"symbol": "QAR"
					},
					"RHD": {
						"displayName": "dólar rodesiano",
						"symbol": "RHD"
					},
					"ROL": {
						"displayName": "antiguo leu rumano",
						"displayName-count-one": "antiguo leu rumano",
						"displayName-count-other": "antiguos lei rumanos",
						"symbol": "ROL"
					},
					"RON": {
						"displayName": "leu rumano",
						"displayName-count-one": "leu rumano",
						"displayName-count-other": "leus rumanos",
						"symbol": "RON",
						"symbol-alt-narrow": "L"
					},
					"RSD": {
						"displayName": "dinar serbio",
						"displayName-count-one": "dinar serbio",
						"displayName-count-other": "dinares serbios",
						"symbol": "RSD"
					},
					"RUB": {
						"displayName": "rublo ruso",
						"displayName-count-one": "rublo ruso",
						"displayName-count-other": "rublos rusos",
						"symbol": "RUB",
						"symbol-alt-narrow": "₽"
					},
					"RUR": {
						"displayName": "rublo ruso (1991–1998)",
						"displayName-count-one": "rublo ruso (RUR)",
						"displayName-count-other": "rublos rusos (RUR)",
						"symbol": "RUR",
						"symbol-alt-narrow": "р."
					},
					"RWF": {
						"displayName": "franco ruandés",
						"displayName-count-one": "franco ruandés",
						"displayName-count-other": "francos ruandeses",
						"symbol": "RWF",
						"symbol-alt-narrow": "RF"
					},
					"SAR": {
						"displayName": "rial saudí",
						"displayName-count-one": "rial saudí",
						"displayName-count-other": "riales saudíes",
						"symbol": "SAR"
					},
					"SBD": {
						"displayName": "dólar salomonense",
						"displayName-count-one": "dólar salomonense",
						"displayName-count-other": "dólares salomonenses",
						"symbol": "SBD",
						"symbol-alt-narrow": "$"
					},
					"SCR": {
						"displayName": "rupia seychellense",
						"displayName-count-one": "rupia seychellense",
						"displayName-count-other": "rupias seychellenses",
						"symbol": "SCR"
					},
					"SDD": {
						"displayName": "dinar sudanés",
						"displayName-count-one": "dinar sudanés",
						"displayName-count-other": "dinares sudaneses",
						"symbol": "SDD"
					},
					"SDG": {
						"displayName": "libra sudanesa",
						"displayName-count-one": "libra sudanesa",
						"displayName-count-other": "libras sudanesas",
						"symbol": "SDG"
					},
					"SDP": {
						"displayName": "libra sudanesa antigua",
						"displayName-count-one": "libra sudanesa antigua",
						"displayName-count-other": "libras sudanesas antiguas",
						"symbol": "SDP"
					},
					"SEK": {
						"displayName": "corona sueca",
						"displayName-count-one": "corona sueca",
						"displayName-count-other": "coronas suecas",
						"symbol": "SEK",
						"symbol-alt-narrow": "kr"
					},
					"SGD": {
						"displayName": "dólar singapurense",
						"displayName-count-one": "dólar singapurense",
						"displayName-count-other": "dólares singapurenses",
						"symbol": "SGD",
						"symbol-alt-narrow": "$"
					},
					"SHP": {
						"displayName": "libra de Santa Elena",
						"displayName-count-one": "libra de Santa Elena",
						"displayName-count-other": "libras de Santa Elena",
						"symbol": "SHP",
						"symbol-alt-narrow": "£"
					},
					"SIT": {
						"displayName": "tólar esloveno",
						"displayName-count-one": "tólar esloveno",
						"displayName-count-other": "tólares eslovenos",
						"symbol": "SIT"
					},
					"SKK": {
						"displayName": "corona eslovaca",
						"displayName-count-one": "corona eslovaca",
						"displayName-count-other": "coronas eslovacas",
						"symbol": "SKK"
					},
					"SLL": {
						"displayName": "leona",
						"displayName-count-one": "leona",
						"displayName-count-other": "leonas",
						"symbol": "SLL"
					},
					"SOS": {
						"displayName": "chelín somalí",
						"displayName-count-one": "chelín somalí",
						"displayName-count-other": "chelines somalíes",
						"symbol": "SOS"
					},
					"SRD": {
						"displayName": "dólar surinamés",
						"displayName-count-one": "dólar surinamés",
						"displayName-count-other": "dólares surinameses",
						"symbol": "SRD",
						"symbol-alt-narrow": "$"
					},
					"SRG": {
						"displayName": "florín surinamés",
						"symbol": "SRG"
					},
					"SSP": {
						"displayName": "libra sursudanesa",
						"displayName-count-one": "libra sursudanesa",
						"displayName-count-other": "libras sursudanesas",
						"symbol": "SSP",
						"symbol-alt-narrow": "£"
					},
					"STD": {
						"displayName": "dobra",
						"displayName-count-one": "dobra",
						"displayName-count-other": "dobras",
						"symbol": "STD",
						"symbol-alt-narrow": "Db"
					},
					"SUR": {
						"displayName": "rublo soviético",
						"displayName-count-one": "rublo soviético",
						"displayName-count-other": "rublos soviéticos",
						"symbol": "SUR"
					},
					"SVC": {
						"displayName": "colón salvadoreño",
						"displayName-count-one": "colón salvadoreño",
						"displayName-count-other": "colones salvadoreños",
						"symbol": "SVC"
					},
					"SYP": {
						"displayName": "libra siria",
						"displayName-count-one": "libra siria",
						"displayName-count-other": "libras sirias",
						"symbol": "SYP",
						"symbol-alt-narrow": "£"
					},
					"SZL": {
						"displayName": "lilangeni",
						"displayName-count-one": "lilangeni",
						"displayName-count-other": "lilangenis",
						"symbol": "SZL"
					},
					"THB": {
						"displayName": "bat",
						"displayName-count-one": "bat",
						"displayName-count-other": "bats",
						"symbol": "฿",
						"symbol-alt-narrow": "฿"
					},
					"TJR": {
						"displayName": "rublo tayiko",
						"symbol": "TJR"
					},
					"TJS": {
						"displayName": "somoni tayiko",
						"displayName-count-one": "somoni tayiko",
						"displayName-count-other": "somonis tayikos",
						"symbol": "TJS"
					},
					"TMM": {
						"displayName": "manat turcomano (1993–2009)",
						"displayName-count-one": "manat turcomano (1993–2009)",
						"displayName-count-other": "manats turcomanos (1993–2009)",
						"symbol": "TMM"
					},
					"TMT": {
						"displayName": "manat turcomano",
						"displayName-count-one": "manat turcomano",
						"displayName-count-other": "manats turcomanos",
						"symbol": "TMT"
					},
					"TND": {
						"displayName": "dinar tunecino",
						"displayName-count-one": "dinar tunecino",
						"displayName-count-other": "dinares tunecinos",
						"symbol": "TND"
					},
					"TOP": {
						"displayName": "paanga",
						"displayName-count-one": "paanga",
						"displayName-count-other": "paangas",
						"symbol": "TOP",
						"symbol-alt-narrow": "T$"
					},
					"TPE": {
						"displayName": "escudo timorense",
						"symbol": "TPE"
					},
					"TRL": {
						"displayName": "lira turca (1922–2005)",
						"displayName-count-one": "lira turca (1922–2005)",
						"displayName-count-other": "liras turcas (1922–2005)",
						"symbol": "TRL"
					},
					"TRY": {
						"displayName": "lira turca",
						"displayName-count-one": "lira turca",
						"displayName-count-other": "liras turcas",
						"symbol": "TRY",
						"symbol-alt-narrow": "₺",
						"symbol-alt-variant": "TL"
					},
					"TTD": {
						"displayName": "dólar de Trinidad y Tobago",
						"displayName-count-one": "dólar de Trinidad y Tobago",
						"displayName-count-other": "dólares de Trinidad y Tobago",
						"symbol": "TTD",
						"symbol-alt-narrow": "$"
					},
					"TWD": {
						"displayName": "nuevo dólar taiwanés",
						"displayName-count-one": "nuevo dólar taiwanés",
						"displayName-count-other": "nuevos dólares taiwaneses",
						"symbol": "TWD",
						"symbol-alt-narrow": "NT$"
					},
					"TZS": {
						"displayName": "chelín tanzano",
						"displayName-count-one": "chelín tanzano",
						"displayName-count-other": "chelines tanzanos",
						"symbol": "TZS"
					},
					"UAH": {
						"displayName": "grivna",
						"displayName-count-one": "grivna",
						"displayName-count-other": "grivnas",
						"symbol": "UAH",
						"symbol-alt-narrow": "₴"
					},
					"UAK": {
						"displayName": "karbovanet ucraniano",
						"displayName-count-one": "karbovanet ucraniano",
						"displayName-count-other": "karbovanets ucranianos",
						"symbol": "UAK"
					},
					"UGS": {
						"displayName": "chelín ugandés (1966–1987)",
						"symbol": "UGS"
					},
					"UGX": {
						"displayName": "chelín ugandés",
						"displayName-count-one": "chelín ugandés",
						"displayName-count-other": "chelines ugandeses",
						"symbol": "UGX"
					},
					"USD": {
						"displayName": "dólar estadounidense",
						"displayName-count-one": "dólar estadounidense",
						"displayName-count-other": "dólares estadounidenses",
						"symbol": "$",
						"symbol-alt-narrow": "$"
					},
					"USN": {
						"displayName": "dólar estadounidense (día siguiente)",
						"displayName-count-one": "dólar estadounidense (día siguiente)",
						"displayName-count-other": "dólares estadounidenses (día siguiente)",
						"symbol": "USN"
					},
					"USS": {
						"displayName": "dólar estadounidense (mismo día)",
						"displayName-count-one": "dólar estadounidense (mismo día)",
						"displayName-count-other": "dólares estadounidenses (mismo día)",
						"symbol": "USS"
					},
					"UYI": {
						"displayName": "peso uruguayo en unidades indexadas",
						"displayName-count-one": "peso uruguayo en unidades indexadas",
						"displayName-count-other": "pesos uruguayos en unidades indexadas",
						"symbol": "UYI"
					},
					"UYP": {
						"displayName": "peso uruguayo (1975–1993)",
						"displayName-count-one": "peso uruguayo (UYP)",
						"displayName-count-other": "pesos uruguayos (UYP)",
						"symbol": "UYP"
					},
					"UYU": {
						"displayName": "peso uruguayo",
						"displayName-count-one": "peso uruguayo",
						"displayName-count-other": "pesos uruguayos",
						"symbol": "UYU",
						"symbol-alt-narrow": "$"
					},
					"UZS": {
						"displayName": "sum",
						"displayName-count-one": "sum",
						"displayName-count-other": "sums",
						"symbol": "UZS"
					},
					"VEB": {
						"displayName": "bolívar venezolano (1871–2008)",
						"displayName-count-one": "bolívar venezolano (1871–2008)",
						"displayName-count-other": "bolívares venezolanos (1871–2008)",
						"symbol": "VEB"
					},
					"VEF": {
						"displayName": "bolívar venezolano",
						"displayName-count-one": "bolívar venezolano",
						"displayName-count-other": "bolívares venezolanos",
						"symbol": "VEF",
						"symbol-alt-narrow": "Bs"
					},
					"VND": {
						"displayName": "dong",
						"displayName-count-one": "dong",
						"displayName-count-other": "dongs",
						"symbol": "₫",
						"symbol-alt-narrow": "₫"
					},
					"VNN": {
						"displayName": "VNN",
						"symbol": "VNN"
					},
					"VUV": {
						"displayName": "vatu",
						"displayName-count-one": "vatu",
						"displayName-count-other": "vatus",
						"symbol": "VUV"
					},
					"WST": {
						"displayName": "tala",
						"displayName-count-one": "tala",
						"displayName-count-other": "talas",
						"symbol": "WST"
					},
					"XAF": {
						"displayName": "franco CFA BEAC",
						"displayName-count-one": "franco CFA BEAC",
						"displayName-count-other": "francos CFA BEAC",
						"symbol": "XAF"
					},
					"XAG": {
						"displayName": "plata",
						"displayName-count-one": "plata",
						"displayName-count-other": "plata",
						"symbol": "XAG"
					},
					"XAU": {
						"displayName": "oro",
						"displayName-count-one": "oro",
						"displayName-count-other": "oro",
						"symbol": "XAU"
					},
					"XBA": {
						"displayName": "unidad compuesta europea",
						"displayName-count-one": "unidad compuesta europea",
						"displayName-count-other": "unidades compuestas europeas",
						"symbol": "XBA"
					},
					"XBB": {
						"displayName": "unidad monetaria europea",
						"displayName-count-one": "unidad monetaria europea",
						"displayName-count-other": "unidades monetarias europeas",
						"symbol": "XBB"
					},
					"XBC": {
						"displayName": "unidad de cuenta europea (XBC)",
						"displayName-count-one": "unidad de cuenta europea (XBC)",
						"displayName-count-other": "unidades de cuenta europeas (XBC)",
						"symbol": "XBC"
					},
					"XBD": {
						"displayName": "unidad de cuenta europea (XBD)",
						"displayName-count-one": "unidad de cuenta europea (XBD)",
						"displayName-count-other": "unidades de cuenta europeas (XBD)",
						"symbol": "XBD"
					},
					"XCD": {
						"displayName": "dólar del Caribe Oriental",
						"displayName-count-one": "dólar del Caribe Oriental",
						"displayName-count-other": "dólares del Caribe Oriental",
						"symbol": "XCD",
						"symbol-alt-narrow": "$"
					},
					"XDR": {
						"displayName": "derechos especiales de giro",
						"symbol": "XDR"
					},
					"XEU": {
						"displayName": "unidad de moneda europea",
						"displayName-count-one": "unidad de moneda europea",
						"displayName-count-other": "unidades de moneda europeas",
						"symbol": "XEU"
					},
					"XFO": {
						"displayName": "franco oro francés",
						"displayName-count-one": "franco oro francés",
						"displayName-count-other": "francos oro franceses",
						"symbol": "XFO"
					},
					"XFU": {
						"displayName": "franco UIC francés",
						"displayName-count-one": "franco UIC francés",
						"displayName-count-other": "francos UIC franceses",
						"symbol": "XFU"
					},
					"XOF": {
						"displayName": "franco CFA BCEAO",
						"displayName-count-one": "franco CFA BCEAO",
						"displayName-count-other": "francos CFA BCEAO",
						"symbol": "XOF"
					},
					"XPD": {
						"displayName": "paladio",
						"displayName-count-one": "paladio",
						"displayName-count-other": "paladio",
						"symbol": "XPD"
					},
					"XPF": {
						"displayName": "franco CFP",
						"displayName-count-one": "franco CFP",
						"displayName-count-other": "francos CFP",
						"symbol": "CFPF"
					},
					"XPT": {
						"displayName": "platino",
						"displayName-count-one": "platino",
						"displayName-count-other": "platino",
						"symbol": "XPT"
					},
					"XRE": {
						"displayName": "fondos RINET",
						"symbol": "XRE"
					},
					"XSU": {
						"displayName": "XSU",
						"symbol": "XSU"
					},
					"XTS": {
						"displayName": "código reservado para pruebas",
						"symbol": "XTS"
					},
					"XUA": {
						"displayName": "XUA",
						"symbol": "XUA"
					},
					"XXX": {
						"displayName": "moneda desconocida",
						"displayName-count-one": "(moneda desconocida)",
						"displayName-count-other": "(moneda desconocida)",
						"symbol": "XXX"
					},
					"YDD": {
						"displayName": "dinar yemení",
						"symbol": "YDD"
					},
					"YER": {
						"displayName": "rial yemení",
						"displayName-count-one": "rial yemení",
						"displayName-count-other": "riales yemeníes",
						"symbol": "YER"
					},
					"YUD": {
						"displayName": "dinar fuerte yugoslavo",
						"symbol": "YUD"
					},
					"YUM": {
						"displayName": "super dinar yugoslavo",
						"symbol": "YUM"
					},
					"YUN": {
						"displayName": "dinar convertible yugoslavo",
						"displayName-count-one": "dinar convertible yugoslavo",
						"displayName-count-other": "dinares convertibles yugoslavos",
						"symbol": "YUN"
					},
					"YUR": {
						"displayName": "YUR",
						"symbol": "YUR"
					},
					"ZAL": {
						"displayName": "rand sudafricano (financiero)",
						"symbol": "ZAL"
					},
					"ZAR": {
						"displayName": "rand",
						"displayName-count-one": "rand",
						"displayName-count-other": "rands",
						"symbol": "ZAR",
						"symbol-alt-narrow": "R"
					},
					"ZMK": {
						"displayName": "kwacha zambiano (1968–2012)",
						"displayName-count-one": "kwacha zambiano (1968–2012)",
						"displayName-count-other": "kwachas zambianos (1968–2012)",
						"symbol": "ZMK"
					},
					"ZMW": {
						"displayName": "kuacha zambiano",
						"displayName-count-one": "kuacha zambiano",
						"displayName-count-other": "kuachas zambianos",
						"symbol": "ZMW",
						"symbol-alt-narrow": "ZK"
					},
					"ZRN": {
						"displayName": "nuevo zaire zaireño",
						"symbol": "ZRN"
					},
					"ZRZ": {
						"displayName": "zaire zaireño",
						"symbol": "ZRZ"
					},
					"ZWD": {
						"displayName": "dólar de Zimbabue",
						"symbol": "ZWD"
					},
					"ZWL": {
						"displayName": "dólar zimbabuense",
						"symbol": "ZWL"
					},
					"ZWR": {
						"displayName": "ZWR",
						"symbol": "ZWR"
					}
				}
			}
		}
	}
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = {
	"main": {
		"es": {
			"identity": {
				"version": {
					"_number": "$Revision: 12880 $",
					"_cldrVersion": "30.0.3"
				},
				"language": "es"
			},
			"numbers": {
				"defaultNumberingSystem": "latn",
				"otherNumberingSystems": {
					"native": "latn"
				},
				"minimumGroupingDigits": "2",
				"symbols-numberSystem-latn": {
					"decimal": ",",
					"group": ".",
					"list": ";",
					"percentSign": "%",
					"plusSign": "+",
					"minusSign": "-",
					"exponential": "E",
					"superscriptingExponent": "×",
					"perMille": "‰",
					"infinity": "∞",
					"nan": "NaN",
					"timeSeparator": ":"
				},
				"decimalFormats-numberSystem-latn": {
					"standard": "#,##0.###",
					"long": {
						"decimalFormat": {
							"1000-count-one": "0 mil",
							"1000-count-other": "0 mil",
							"10000-count-one": "00 mil",
							"10000-count-other": "00 mil",
							"100000-count-one": "000 mil",
							"100000-count-other": "000 mil",
							"1000000-count-one": "0 millón",
							"1000000-count-other": "0 millones",
							"10000000-count-one": "00 millones",
							"10000000-count-other": "00 millones",
							"100000000-count-one": "000 millones",
							"100000000-count-other": "000 millones",
							"1000000000-count-one": "0 mil millones",
							"1000000000-count-other": "0 mil millones",
							"10000000000-count-one": "00 mil millones",
							"10000000000-count-other": "00 mil millones",
							"100000000000-count-one": "000 mil millones",
							"100000000000-count-other": "000 mil millones",
							"1000000000000-count-one": "0 billón",
							"1000000000000-count-other": "0 billones",
							"10000000000000-count-one": "00 billones",
							"10000000000000-count-other": "00 billones",
							"100000000000000-count-one": "000 billones",
							"100000000000000-count-other": "000 billones"
						}
					},
					"short": {
						"decimalFormat": {
							"1000-count-one": "0 K",
							"1000-count-other": "0 K",
							"10000-count-one": "00 K",
							"10000-count-other": "00 K",
							"100000-count-one": "000 K",
							"100000-count-other": "000 K",
							"1000000-count-one": "0 M",
							"1000000-count-other": "0 M",
							"10000000-count-one": "00 M",
							"10000000-count-other": "00 M",
							"100000000-count-one": "000 M",
							"100000000-count-other": "000 M",
							"1000000000-count-one": "0000 M",
							"1000000000-count-other": "0000 M",
							"10000000000-count-one": "00 MRD",
							"10000000000-count-other": "00 MRD",
							"100000000000-count-one": "000 MRD",
							"100000000000-count-other": "000 MRD",
							"1000000000000-count-one": "0 B",
							"1000000000000-count-other": "0 B",
							"10000000000000-count-one": "00 B",
							"10000000000000-count-other": "00 B",
							"100000000000000-count-one": "000 B",
							"100000000000000-count-other": "000 B"
						}
					}
				},
				"scientificFormats-numberSystem-latn": {
					"standard": "#E0"
				},
				"percentFormats-numberSystem-latn": {
					"standard": "#,##0 %"
				},
				"currencyFormats-numberSystem-latn": {
					"currencySpacing": {
						"beforeCurrency": {
							"currencyMatch": "[:^S:]",
							"surroundingMatch": "[:digit:]",
							"insertBetween": " "
						},
						"afterCurrency": {
							"currencyMatch": "[:^S:]",
							"surroundingMatch": "[:digit:]",
							"insertBetween": " "
						}
					},
					"standard": "#,##0.00 ¤",
					"accounting": "#,##0.00 ¤",
					"short": {
						"standard": {
							"1000-count-one": "0 K ¤",
							"1000-count-other": "0 K ¤",
							"10000-count-one": "00 K ¤",
							"10000-count-other": "00 K ¤",
							"100000-count-one": "000 K ¤",
							"100000-count-other": "000 K ¤",
							"1000000-count-one": "0 M ¤",
							"1000000-count-other": "0 M ¤",
							"10000000-count-one": "00 M ¤",
							"10000000-count-other": "00 M ¤",
							"100000000-count-one": "000 M ¤",
							"100000000-count-other": "000 M ¤",
							"1000000000-count-one": "0000 M ¤",
							"1000000000-count-other": "0000 M ¤",
							"10000000000-count-one": "00 MRD ¤",
							"10000000000-count-other": "00 MRD ¤",
							"100000000000-count-one": "000 MRD ¤",
							"100000000000-count-other": "000 MRD ¤",
							"1000000000000-count-one": "0 B ¤",
							"1000000000000-count-other": "0 B ¤",
							"10000000000000-count-one": "00 B ¤",
							"10000000000000-count-other": "00 B ¤",
							"100000000000000-count-one": "000 B ¤",
							"100000000000000-count-other": "000 B ¤"
						}
					},
					"unitPattern-count-one": "{0} {1}",
					"unitPattern-count-other": "{0} {1}"
				},
				"miscPatterns-numberSystem-latn": {
					"atLeast": "Más de {0}",
					"range": "{0}-{1}"
				}
			}
		}
	}
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = {
	"main": {
		"pt": {
			"identity": {
				"version": {
					"_number": "$Revision: 12879 $",
					"_cldrVersion": "30.0.3"
				},
				"language": "pt"
			},
			"numbers": {
				"currencies": {
					"ADP": {
						"displayName": "Peseta de Andorra",
						"displayName-count-one": "Peseta de Andorra",
						"displayName-count-other": "Pesetas de Andorra",
						"symbol": "ADP"
					},
					"AED": {
						"displayName": "Dirrã dos Emirados Árabes Unidos",
						"displayName-count-one": "Dirrã dos Emirados Árabes Unidos",
						"displayName-count-other": "Dirrãs dos Emirados Árabes Unidos",
						"symbol": "AED"
					},
					"AFA": {
						"displayName": "Afegane (1927–2002)",
						"displayName-count-one": "Afegane do Afeganistão (AFA)",
						"displayName-count-other": "Afeganes do Afeganistão (AFA)",
						"symbol": "AFA"
					},
					"AFN": {
						"displayName": "Afegane afegão",
						"displayName-count-one": "Afegane afegão",
						"displayName-count-other": "Afeganes afegãos",
						"symbol": "AFN"
					},
					"ALK": {
						"displayName": "Lek Albanês (1946–1965)",
						"displayName-count-one": "Lek Albanês (1946–1965)",
						"displayName-count-other": "Leks Albaneses (1946–1965)"
					},
					"ALL": {
						"displayName": "Lek albanês",
						"displayName-count-one": "Lek albanês",
						"displayName-count-other": "Leks albaneses",
						"symbol": "ALL"
					},
					"AMD": {
						"displayName": "Dram armênio",
						"displayName-count-one": "Dram armênio",
						"displayName-count-other": "Drams armênios",
						"symbol": "AMD"
					},
					"ANG": {
						"displayName": "Florim das Antilhas Holandesas",
						"displayName-count-one": "Florim das Antilhas Holandesas",
						"displayName-count-other": "Florins das Antilhas Holandesas",
						"symbol": "ANG"
					},
					"AOA": {
						"displayName": "Kwanza angolano",
						"displayName-count-one": "Kwanza angolano",
						"displayName-count-other": "Kwanzas angolanos",
						"symbol": "AOA",
						"symbol-alt-narrow": "Kz"
					},
					"AOK": {
						"displayName": "Cuanza angolano (1977–1990)",
						"displayName-count-one": "Kwanza angolano (AOK)",
						"displayName-count-other": "Kwanzas angolanos (AOK)",
						"symbol": "AOK"
					},
					"AON": {
						"displayName": "Novo cuanza angolano (1990–2000)",
						"displayName-count-one": "Novo kwanza angolano (AON)",
						"displayName-count-other": "Novos kwanzas angolanos (AON)",
						"symbol": "AON"
					},
					"AOR": {
						"displayName": "Cuanza angolano reajustado (1995–1999)",
						"displayName-count-one": "Kwanza angolano reajustado (AOR)",
						"displayName-count-other": "Kwanzas angolanos reajustados (AOR)",
						"symbol": "AOR"
					},
					"ARA": {
						"displayName": "Austral argentino",
						"displayName-count-one": "Austral argentino",
						"displayName-count-other": "Austrais argentinos",
						"symbol": "ARA"
					},
					"ARL": {
						"displayName": "Peso lei argentino (1970–1983)",
						"displayName-count-one": "Peso lei argentino (1970–1983)",
						"displayName-count-other": "Pesos lei argentinos (1970–1983)",
						"symbol": "ARL"
					},
					"ARM": {
						"displayName": "Peso argentino (1881–1970)",
						"displayName-count-one": "Peso argentino (1881–1970)",
						"displayName-count-other": "Pesos argentinos (1881–1970)",
						"symbol": "ARM"
					},
					"ARP": {
						"displayName": "Peso argentino (1983–1985)",
						"displayName-count-one": "Peso argentino (1983–1985)",
						"displayName-count-other": "Pesos argentinos (1983–1985)",
						"symbol": "ARP"
					},
					"ARS": {
						"displayName": "Peso argentino",
						"displayName-count-one": "Peso argentino",
						"displayName-count-other": "Pesos argentinos",
						"symbol": "ARS",
						"symbol-alt-narrow": "$"
					},
					"ATS": {
						"displayName": "Xelim austríaco",
						"displayName-count-one": "Schilling australiano",
						"displayName-count-other": "Schillings australianos",
						"symbol": "ATS"
					},
					"AUD": {
						"displayName": "Dólar australiano",
						"displayName-count-one": "Dólar australiano",
						"displayName-count-other": "Dólares australianos",
						"symbol": "AU$",
						"symbol-alt-narrow": "$"
					},
					"AWG": {
						"displayName": "Florim arubano",
						"displayName-count-one": "Florim arubano",
						"displayName-count-other": "Florins arubanos",
						"symbol": "AWG"
					},
					"AZM": {
						"displayName": "Manat azerbaijano (1993–2006)",
						"displayName-count-one": "Manat do Azeibaijão (1993–2006)",
						"displayName-count-other": "Manats do Azeibaijão (1993–2006)",
						"symbol": "AZM"
					},
					"AZN": {
						"displayName": "Manat azeri",
						"displayName-count-one": "Manat azeri",
						"displayName-count-other": "Manats azeris",
						"symbol": "AZN"
					},
					"BAD": {
						"displayName": "Dinar da Bósnia-Herzegovina (1992–1994)",
						"displayName-count-one": "Dinar da Bósnia Herzegovina",
						"displayName-count-other": "Dinares da Bósnia Herzegovina",
						"symbol": "BAD"
					},
					"BAM": {
						"displayName": "Marco bósnio-herzegovino conversível",
						"displayName-count-one": "Marco bósnio-herzegovino conversível",
						"displayName-count-other": "Marco bósnio-herzegovino conversível",
						"symbol": "BAM",
						"symbol-alt-narrow": "KM"
					},
					"BAN": {
						"displayName": "Novo dinar da Bósnia-Herzegovina (1994–1997)",
						"displayName-count-one": "Novo dinar da Bósnia-Herzegovina",
						"displayName-count-other": "Novos dinares da Bósnia-Herzegovina",
						"symbol": "BAN"
					},
					"BBD": {
						"displayName": "Dólar barbadense",
						"displayName-count-one": "Dólar barbadense",
						"displayName-count-other": "Dólares barbadenses",
						"symbol": "BBD",
						"symbol-alt-narrow": "$"
					},
					"BDT": {
						"displayName": "Taka bengalesa",
						"displayName-count-one": "Taka bengalesa",
						"displayName-count-other": "Takas bengalesas",
						"symbol": "BDT",
						"symbol-alt-narrow": "৳"
					},
					"BEC": {
						"displayName": "Franco belga (conversível)",
						"displayName-count-one": "Franco belga (conversível)",
						"displayName-count-other": "Francos belgas (conversíveis)",
						"symbol": "BEC"
					},
					"BEF": {
						"displayName": "Franco belga",
						"displayName-count-one": "Franco belga",
						"displayName-count-other": "Francos belgas",
						"symbol": "BEF"
					},
					"BEL": {
						"displayName": "Franco belga (financeiro)",
						"displayName-count-one": "Franco belga (financeiro)",
						"displayName-count-other": "Francos belgas (financeiros)",
						"symbol": "BEL"
					},
					"BGL": {
						"displayName": "Lev forte búlgaro",
						"displayName-count-one": "Lev forte búlgaro",
						"displayName-count-other": "Levs fortes búlgaros",
						"symbol": "BGL"
					},
					"BGM": {
						"displayName": "Lev socialista búlgaro",
						"displayName-count-one": "Lev socialista búlgaro",
						"displayName-count-other": "Levs socialistas búlgaros",
						"symbol": "BGM"
					},
					"BGN": {
						"displayName": "Lev búlgaro",
						"displayName-count-one": "Lev búlgaro",
						"displayName-count-other": "Levs búlgaros",
						"symbol": "BGN"
					},
					"BGO": {
						"displayName": "Lev búlgaro (1879–1952)",
						"displayName-count-one": "Lev búlgaro (1879–1952)",
						"displayName-count-other": "Levs búlgaros (1879–1952)",
						"symbol": "BGO"
					},
					"BHD": {
						"displayName": "Dinar bareinita",
						"displayName-count-one": "Dinar bareinita",
						"displayName-count-other": "Dinares bareinitas",
						"symbol": "BHD"
					},
					"BIF": {
						"displayName": "Franco burundiano",
						"displayName-count-one": "Franco burundiano",
						"displayName-count-other": "Francos burundianos",
						"symbol": "BIF"
					},
					"BMD": {
						"displayName": "Dólar bermudense",
						"displayName-count-one": "Dólar bermudense",
						"displayName-count-other": "Dólares bermudenses",
						"symbol": "BMD",
						"symbol-alt-narrow": "$"
					},
					"BND": {
						"displayName": "Dólar bruneano",
						"displayName-count-one": "Dólar bruneano",
						"displayName-count-other": "Dólares bruneanos",
						"symbol": "BND",
						"symbol-alt-narrow": "$"
					},
					"BOB": {
						"displayName": "Boliviano",
						"displayName-count-one": "Boliviano",
						"displayName-count-other": "Bolivianos",
						"symbol": "BOB",
						"symbol-alt-narrow": "Bs"
					},
					"BOL": {
						"displayName": "Boliviano (1863–1963)",
						"displayName-count-one": "Boliviano (1863–1963)",
						"displayName-count-other": "Bolivianos (1863–1963)",
						"symbol": "BOL"
					},
					"BOP": {
						"displayName": "Peso boliviano",
						"displayName-count-one": "Peso boliviano",
						"displayName-count-other": "Pesos bolivianos",
						"symbol": "BOP"
					},
					"BOV": {
						"displayName": "Mvdol boliviano",
						"displayName-count-one": "Mvdol boliviano",
						"displayName-count-other": "Mvdols bolivianos",
						"symbol": "BOV"
					},
					"BRB": {
						"displayName": "Cruzeiro novo brasileiro (1967–1986)",
						"displayName-count-one": "Cruzeiro novo brasileiro (BRB)",
						"displayName-count-other": "Cruzeiros novos brasileiros (BRB)",
						"symbol": "BRB"
					},
					"BRC": {
						"displayName": "Cruzado brasileiro (1986–1989)",
						"displayName-count-one": "Cruzado brasileiro",
						"displayName-count-other": "Cruzados brasileiros",
						"symbol": "BRC"
					},
					"BRE": {
						"displayName": "Cruzeiro brasileiro (1990–1993)",
						"displayName-count-one": "Cruzeiro brasileiro (BRE)",
						"displayName-count-other": "Cruzeiros brasileiros (BRE)",
						"symbol": "BRE"
					},
					"BRL": {
						"displayName": "Real brasileiro",
						"displayName-count-one": "Real brasileiro",
						"displayName-count-other": "Reais brasileiros",
						"symbol": "R$",
						"symbol-alt-narrow": "R$"
					},
					"BRN": {
						"displayName": "Cruzado novo brasileiro (1989–1990)",
						"displayName-count-one": "Cruzado novo brasileiro",
						"displayName-count-other": "Cruzados novos brasileiros",
						"symbol": "BRN"
					},
					"BRR": {
						"displayName": "Cruzeiro brasileiro (1993–1994)",
						"displayName-count-one": "Cruzeiro brasileiro",
						"displayName-count-other": "Cruzeiros brasileiros",
						"symbol": "BRR"
					},
					"BRZ": {
						"displayName": "Cruzeiro brasileiro (1942–1967)",
						"displayName-count-one": "Cruzeiro brasileiro antigo",
						"displayName-count-other": "Cruzeiros brasileiros antigos",
						"symbol": "BRZ"
					},
					"BSD": {
						"displayName": "Dólar bahamense",
						"displayName-count-one": "Dólar bahamense",
						"displayName-count-other": "Dólares bahamenses",
						"symbol": "BSD",
						"symbol-alt-narrow": "$"
					},
					"BTN": {
						"displayName": "Ngultrum butanês",
						"displayName-count-one": "Ngultrum butanês",
						"displayName-count-other": "Ngultruns butaneses",
						"symbol": "BTN"
					},
					"BUK": {
						"displayName": "Kyat birmanês",
						"displayName-count-one": "Kyat burmês",
						"displayName-count-other": "Kyats burmeses",
						"symbol": "BUK"
					},
					"BWP": {
						"displayName": "Pula botsuanesa",
						"displayName-count-one": "Pula botsuanesa",
						"displayName-count-other": "Pulas botsuanesas",
						"symbol": "BWP",
						"symbol-alt-narrow": "P"
					},
					"BYB": {
						"displayName": "Rublo novo bielo-russo (1994–1999)",
						"displayName-count-one": "Novo rublo bielorusso (BYB)",
						"displayName-count-other": "Novos rublos bielorussos (BYB)",
						"symbol": "BYB"
					},
					"BYN": {
						"displayName": "Rublo bielorrusso",
						"displayName-count-one": "Rublo bielorrusso",
						"displayName-count-other": "Rublos bielorrussos",
						"symbol": "BYN",
						"symbol-alt-narrow": "р."
					},
					"BYR": {
						"displayName": "Rublo bielorrusso (2000–2016)",
						"displayName-count-one": "Rublo bielorrusso (2000–2016)",
						"displayName-count-other": "Rublos bielorrussos (2000–2016)",
						"symbol": "BYR"
					},
					"BZD": {
						"displayName": "Dólar belizenho",
						"displayName-count-one": "Dólar belizenho",
						"displayName-count-other": "Dólares belizenhos",
						"symbol": "BZD",
						"symbol-alt-narrow": "$"
					},
					"CAD": {
						"displayName": "Dólar canadense",
						"displayName-count-one": "Dólar canadense",
						"displayName-count-other": "Dólares canadenses",
						"symbol": "CA$",
						"symbol-alt-narrow": "$"
					},
					"CDF": {
						"displayName": "Franco congolês",
						"displayName-count-one": "Franco congolês",
						"displayName-count-other": "Francos congoleses",
						"symbol": "CDF"
					},
					"CHE": {
						"displayName": "Euro WIR",
						"displayName-count-one": "Euro WIR",
						"displayName-count-other": "Euros WIR",
						"symbol": "CHE"
					},
					"CHF": {
						"displayName": "Franco suíço",
						"displayName-count-one": "Franco suíço",
						"displayName-count-other": "Francos suíços",
						"symbol": "CHF"
					},
					"CHW": {
						"displayName": "Franco WIR",
						"displayName-count-one": "Franco WIR",
						"displayName-count-other": "Francos WIR",
						"symbol": "CHW"
					},
					"CLE": {
						"displayName": "Escudo chileno",
						"displayName-count-one": "Escudo chileno",
						"displayName-count-other": "Escudos chilenos",
						"symbol": "CLE"
					},
					"CLF": {
						"displayName": "Unidades de Fomento chilenas",
						"displayName-count-one": "Unidade de fomento chilena",
						"displayName-count-other": "Unidades de fomento chilenas",
						"symbol": "CLF"
					},
					"CLP": {
						"displayName": "Peso chileno",
						"displayName-count-one": "Peso chileno",
						"displayName-count-other": "Pesos chilenos",
						"symbol": "CLP",
						"symbol-alt-narrow": "$"
					},
					"CNX": {
						"displayName": "Dólar do Banco Popular da China",
						"displayName-count-one": "Dólar do Banco Popular da China",
						"displayName-count-other": "Dólares do Banco Popular da China"
					},
					"CNY": {
						"displayName": "Yuan chinês",
						"displayName-count-one": "Yuan chinês",
						"displayName-count-other": "Yuans chineses",
						"symbol": "CN¥",
						"symbol-alt-narrow": "¥"
					},
					"COP": {
						"displayName": "Peso colombiano",
						"displayName-count-one": "Peso colombiano",
						"displayName-count-other": "Pesos colombianos",
						"symbol": "COP",
						"symbol-alt-narrow": "$"
					},
					"COU": {
						"displayName": "Unidade de Valor Real",
						"displayName-count-one": "Unidade de valor real",
						"displayName-count-other": "Unidades de valor real",
						"symbol": "COU"
					},
					"CRC": {
						"displayName": "Colón costarriquenho",
						"displayName-count-one": "Colón costarriquenho",
						"displayName-count-other": "Colóns costarriquenhos",
						"symbol": "CRC",
						"symbol-alt-narrow": "₡"
					},
					"CSD": {
						"displayName": "Dinar sérvio (2002–2006)",
						"displayName-count-one": "Dinar antigo da Sérvia",
						"displayName-count-other": "Dinares antigos da Sérvia",
						"symbol": "CSD"
					},
					"CSK": {
						"displayName": "Coroa Forte checoslovaca",
						"displayName-count-one": "Coroa forte tchecoslovaca",
						"displayName-count-other": "Coroas fortes tchecoslovacas",
						"symbol": "CSK"
					},
					"CUC": {
						"displayName": "Peso cubano conversível",
						"displayName-count-one": "Peso cubano conversível",
						"displayName-count-other": "Pesos cubanos conversíveis",
						"symbol": "CUC",
						"symbol-alt-narrow": "$"
					},
					"CUP": {
						"displayName": "Peso cubano",
						"displayName-count-one": "Peso cubano",
						"displayName-count-other": "Pesos cubanos",
						"symbol": "CUP",
						"symbol-alt-narrow": "$"
					},
					"CVE": {
						"displayName": "Escudo cabo-verdiano",
						"displayName-count-one": "Escudo cabo-verdiano",
						"displayName-count-other": "Escudos cabo-verdianos",
						"symbol": "CVE"
					},
					"CYP": {
						"displayName": "Libra cipriota",
						"displayName-count-one": "Libra cipriota",
						"displayName-count-other": "Libras cipriotas",
						"symbol": "CYP"
					},
					"CZK": {
						"displayName": "Coroa tcheca",
						"displayName-count-one": "Coroa tcheca",
						"displayName-count-other": "Coroas tchecas",
						"symbol": "CZK",
						"symbol-alt-narrow": "Kč"
					},
					"DDM": {
						"displayName": "Ostmark da Alemanha Oriental",
						"displayName-count-one": "Marco da Alemanha Oriental",
						"displayName-count-other": "Marcos da Alemanha Oriental",
						"symbol": "DDM"
					},
					"DEM": {
						"displayName": "Marco alemão",
						"displayName-count-one": "Marco alemão",
						"displayName-count-other": "Marcos alemães",
						"symbol": "DEM"
					},
					"DJF": {
						"displayName": "Franco djibutiense",
						"displayName-count-one": "Franco djibutiense",
						"displayName-count-other": "Francos djibutienses",
						"symbol": "DJF"
					},
					"DKK": {
						"displayName": "Coroa dinamarquesa",
						"displayName-count-one": "Coroa dinamarquesa",
						"displayName-count-other": "Coroas dinamarquesas",
						"symbol": "DKK",
						"symbol-alt-narrow": "kr"
					},
					"DOP": {
						"displayName": "Peso dominicano",
						"displayName-count-one": "Peso dominicano",
						"displayName-count-other": "Pesos dominicanos",
						"symbol": "DOP",
						"symbol-alt-narrow": "$"
					},
					"DZD": {
						"displayName": "Dinar argelino",
						"displayName-count-one": "Dinar argelino",
						"displayName-count-other": "Dinares argelinos",
						"symbol": "DZD"
					},
					"ECS": {
						"displayName": "Sucre equatoriano",
						"displayName-count-one": "Sucre equatoriano",
						"displayName-count-other": "Sucres equatorianos",
						"symbol": "ECS"
					},
					"ECV": {
						"displayName": "Unidade de Valor Constante (UVC) do Equador",
						"displayName-count-one": "Unidade de valor constante equatoriana (UVC)",
						"displayName-count-other": "Unidades de valor constante equatorianas (UVC)",
						"symbol": "ECV"
					},
					"EEK": {
						"displayName": "Coroa estoniana",
						"displayName-count-one": "Coroa estoniana",
						"displayName-count-other": "Coroas estonianas",
						"symbol": "EEK"
					},
					"EGP": {
						"displayName": "Libra egípcia",
						"displayName-count-one": "Libra egípcia",
						"displayName-count-other": "Libras egípcias",
						"symbol": "EGP",
						"symbol-alt-narrow": "E£"
					},
					"ERN": {
						"displayName": "Nakfa da Eritreia",
						"displayName-count-one": "Nakfa da Eritreia",
						"displayName-count-other": "Nakfas da Eritreia",
						"symbol": "ERN"
					},
					"ESA": {
						"displayName": "Peseta espanhola (conta A)",
						"displayName-count-one": "Peseta espanhola (conta A)",
						"displayName-count-other": "Pesetas espanholas (conta A)",
						"symbol": "ESA"
					},
					"ESB": {
						"displayName": "Peseta espanhola (conta conversível)",
						"displayName-count-one": "Peseta espanhola (conta conversível)",
						"displayName-count-other": "Pesetas espanholas (conta conversível)",
						"symbol": "ESB"
					},
					"ESP": {
						"displayName": "Peseta espanhola",
						"displayName-count-one": "Peseta espanhola",
						"displayName-count-other": "Pesetas espanholas",
						"symbol": "ESP",
						"symbol-alt-narrow": "₧"
					},
					"ETB": {
						"displayName": "Birr etíope",
						"displayName-count-one": "Birr etíope",
						"displayName-count-other": "Birrs etíopes",
						"symbol": "ETB"
					},
					"EUR": {
						"displayName": "Euro",
						"displayName-count-one": "Euro",
						"displayName-count-other": "Euros",
						"symbol": "€",
						"symbol-alt-narrow": "€"
					},
					"FIM": {
						"displayName": "Marca finlandesa",
						"displayName-count-one": "Marco finlandês",
						"displayName-count-other": "Marcos finlandeses",
						"symbol": "FIM"
					},
					"FJD": {
						"displayName": "Dólar fijiano",
						"displayName-count-one": "Dólar fijiano",
						"displayName-count-other": "Dólares fijianos",
						"symbol": "FJD",
						"symbol-alt-narrow": "$"
					},
					"FKP": {
						"displayName": "Libra malvinense",
						"displayName-count-one": "Libra malvinense",
						"displayName-count-other": "Libras malvinenses",
						"symbol": "FKP",
						"symbol-alt-narrow": "£"
					},
					"FRF": {
						"displayName": "Franco francês",
						"displayName-count-one": "Franco francês",
						"displayName-count-other": "Francos franceses",
						"symbol": "FRF"
					},
					"GBP": {
						"displayName": "Libra britânica",
						"displayName-count-one": "Libra britânica",
						"displayName-count-other": "Libras britânicas",
						"symbol": "£",
						"symbol-alt-narrow": "£"
					},
					"GEK": {
						"displayName": "Cupom Lari georgiano",
						"displayName-count-one": "Kupon larit da Geórgia",
						"displayName-count-other": "Kupon larits da Geórgia",
						"symbol": "GEK"
					},
					"GEL": {
						"displayName": "Lari georgiano",
						"displayName-count-one": "Lari georgiano",
						"displayName-count-other": "Laris georgianos",
						"symbol": "GEL",
						"symbol-alt-narrow": "₾",
						"symbol-alt-variant": "₾"
					},
					"GHC": {
						"displayName": "Cedi de Gana (1979–2007)",
						"displayName-count-one": "Cedi de Gana (1979–2007)",
						"displayName-count-other": "Cedis de Gana (1979–2007)",
						"symbol": "GHC"
					},
					"GHS": {
						"displayName": "Cedi ganês",
						"displayName-count-one": "Cedi ganês",
						"displayName-count-other": "Cedis ganeses",
						"symbol": "GHS"
					},
					"GIP": {
						"displayName": "Libra de Gibraltar",
						"displayName-count-one": "Libra de Gibraltar",
						"displayName-count-other": "Libras de Gibraltar",
						"symbol": "GIP",
						"symbol-alt-narrow": "£"
					},
					"GMD": {
						"displayName": "Dalasi gambiano",
						"displayName-count-one": "Dalasi gambiano",
						"displayName-count-other": "Dalasis gambianos",
						"symbol": "GMD"
					},
					"GNF": {
						"displayName": "Franco guineano",
						"displayName-count-one": "Franco guineano",
						"displayName-count-other": "Francos guineanos",
						"symbol": "GNF",
						"symbol-alt-narrow": "FG"
					},
					"GNS": {
						"displayName": "Syli da Guiné",
						"displayName-count-one": "Syli guineano",
						"displayName-count-other": "Sylis guineanos",
						"symbol": "GNS"
					},
					"GQE": {
						"displayName": "Ekwele da Guiné Equatorial",
						"displayName-count-one": "Ekwele da Guiné Equatorial",
						"displayName-count-other": "Ekweles da Guiné Equatorial",
						"symbol": "GQE"
					},
					"GRD": {
						"displayName": "Dracma grego",
						"displayName-count-one": "Dracma grego",
						"displayName-count-other": "Dracmas gregos",
						"symbol": "GRD"
					},
					"GTQ": {
						"displayName": "Quetzal guatemalense",
						"displayName-count-one": "Quetzal guatemalense",
						"displayName-count-other": "Quetzais guatemalenses",
						"symbol": "GTQ",
						"symbol-alt-narrow": "Q"
					},
					"GWE": {
						"displayName": "Escudo da Guiné Portuguesa",
						"displayName-count-one": "Escudo da Guiné Portuguesa",
						"displayName-count-other": "Escudos da Guinéa Portuguesa",
						"symbol": "GWE"
					},
					"GWP": {
						"displayName": "Peso da Guiné-Bissau",
						"displayName-count-one": "Peso de Guiné-Bissau",
						"displayName-count-other": "Pesos de Guiné-Bissau",
						"symbol": "GWP"
					},
					"GYD": {
						"displayName": "Dólar guianense",
						"displayName-count-one": "Dólar guianense",
						"displayName-count-other": "Dólares guianenses",
						"symbol": "GYD",
						"symbol-alt-narrow": "$"
					},
					"HKD": {
						"displayName": "Dólar de Hong Kong",
						"displayName-count-one": "Dólar de Hong Kong",
						"displayName-count-other": "Dólares de Hong Kong",
						"symbol": "HK$",
						"symbol-alt-narrow": "$"
					},
					"HNL": {
						"displayName": "Lempira hondurenha",
						"displayName-count-one": "Lempira hondurenha",
						"displayName-count-other": "Lempiras hondurenhas",
						"symbol": "HNL",
						"symbol-alt-narrow": "L"
					},
					"HRD": {
						"displayName": "Dinar croata",
						"displayName-count-one": "Dinar croata",
						"displayName-count-other": "Dinares croatas",
						"symbol": "HRD"
					},
					"HRK": {
						"displayName": "Kuna croata",
						"displayName-count-one": "Kuna croata",
						"displayName-count-other": "Kunas croatas",
						"symbol": "HRK",
						"symbol-alt-narrow": "kn"
					},
					"HTG": {
						"displayName": "Gourde haitiano",
						"displayName-count-one": "Gourde haitiano",
						"displayName-count-other": "Gourdes haitianos",
						"symbol": "HTG"
					},
					"HUF": {
						"displayName": "Forint húngaro",
						"displayName-count-one": "Forint húngaro",
						"displayName-count-other": "Forints húngaros",
						"symbol": "HUF",
						"symbol-alt-narrow": "Ft"
					},
					"IDR": {
						"displayName": "Rupia indonésia",
						"displayName-count-one": "Rupia indonésia",
						"displayName-count-other": "Rupias indonésias",
						"symbol": "IDR",
						"symbol-alt-narrow": "Rp"
					},
					"IEP": {
						"displayName": "Libra irlandesa",
						"displayName-count-one": "Libra irlandesa",
						"displayName-count-other": "Libras irlandesas",
						"symbol": "IEP"
					},
					"ILP": {
						"displayName": "Libra israelita",
						"displayName-count-one": "Libra israelita",
						"displayName-count-other": "Libras israelitas",
						"symbol": "ILP"
					},
					"ILR": {
						"displayName": "Sheqel antigo israelita",
						"displayName-count-one": "Sheqel antigo israelita",
						"displayName-count-other": "Sheqels antigos israelitas"
					},
					"ILS": {
						"displayName": "Sheqel novo israelita",
						"displayName-count-one": "Sheqel novo israelita",
						"displayName-count-other": "Sheqels novos israelita",
						"symbol": "₪",
						"symbol-alt-narrow": "₪"
					},
					"INR": {
						"displayName": "Rupia indiana",
						"displayName-count-one": "Rupia indiana",
						"displayName-count-other": "Rupias indianas",
						"symbol": "₹",
						"symbol-alt-narrow": "₹"
					},
					"IQD": {
						"displayName": "Dinar iraquiano",
						"displayName-count-one": "Dinar iraquiano",
						"displayName-count-other": "Dinares iraquianos",
						"symbol": "IQD"
					},
					"IRR": {
						"displayName": "Rial iraniano",
						"displayName-count-one": "Rial iraniano",
						"displayName-count-other": "Riales iranianos",
						"symbol": "IRR"
					},
					"ISJ": {
						"displayName": "Coroa antiga islandesa",
						"displayName-count-one": "Coroa antiga islandesa",
						"displayName-count-other": "Coroas antigas islandesas"
					},
					"ISK": {
						"displayName": "Coroa islandesa",
						"displayName-count-one": "Coroa islandesa",
						"displayName-count-other": "Coroas islandesas",
						"symbol": "ISK",
						"symbol-alt-narrow": "kr"
					},
					"ITL": {
						"displayName": "Lira italiana",
						"displayName-count-one": "Lira italiana",
						"displayName-count-other": "Liras italianas",
						"symbol": "ITL"
					},
					"JMD": {
						"displayName": "Dólar jamaicano",
						"displayName-count-one": "Dólar jamaicano",
						"displayName-count-other": "Dólares jamaicanos",
						"symbol": "JMD",
						"symbol-alt-narrow": "$"
					},
					"JOD": {
						"displayName": "Dinar jordaniano",
						"displayName-count-one": "Dinar jordaniano",
						"displayName-count-other": "Dinares jordanianos",
						"symbol": "JOD"
					},
					"JPY": {
						"displayName": "Iene japonês",
						"displayName-count-one": "Iene japonês",
						"displayName-count-other": "Ienes japoneses",
						"symbol": "JP¥",
						"symbol-alt-narrow": "¥"
					},
					"KES": {
						"displayName": "Xelim queniano",
						"displayName-count-one": "Xelim queniano",
						"displayName-count-other": "Xelins quenianos",
						"symbol": "KES"
					},
					"KGS": {
						"displayName": "Som quirguiz",
						"displayName-count-one": "Som quirguiz",
						"displayName-count-other": "Sons quirguizes",
						"symbol": "KGS"
					},
					"KHR": {
						"displayName": "Riel cambojano",
						"displayName-count-one": "Riel cambojano",
						"displayName-count-other": "Rieles cambojanos",
						"symbol": "KHR",
						"symbol-alt-narrow": "៛"
					},
					"KMF": {
						"displayName": "Franco comorense",
						"displayName-count-one": "Franco comorense",
						"displayName-count-other": "Francos comorenses",
						"symbol": "KMF",
						"symbol-alt-narrow": "CF"
					},
					"KPW": {
						"displayName": "Won norte-coreano",
						"displayName-count-one": "Won norte-coreano",
						"displayName-count-other": "Wons norte-coreanos",
						"symbol": "KPW",
						"symbol-alt-narrow": "₩"
					},
					"KRH": {
						"displayName": "Hwan da Coreia do Sul (1953–1962)",
						"displayName-count-one": "Hwan da Coreia do Sul",
						"displayName-count-other": "Hwans da Coreia do Sul",
						"symbol": "KRH"
					},
					"KRO": {
						"displayName": "Won da Coreia do Sul (1945–1953)",
						"displayName-count-one": "Won antigo da Coreia do Sul",
						"displayName-count-other": "Wons antigos da Coreia do Sul",
						"symbol": "KRO"
					},
					"KRW": {
						"displayName": "Won sul-coreano",
						"displayName-count-one": "Won sul-coreano",
						"displayName-count-other": "Wons sul-coreanos",
						"symbol": "₩",
						"symbol-alt-narrow": "₩"
					},
					"KWD": {
						"displayName": "Dinar kuwaitiano",
						"displayName-count-one": "Dinar kuwaitiano",
						"displayName-count-other": "Dinares kuwaitianos",
						"symbol": "KWD"
					},
					"KYD": {
						"displayName": "Dólar das Ilhas Caiman",
						"displayName-count-one": "Dólar das Ilhas Caiman",
						"displayName-count-other": "Dólares das Ilhas Caiman",
						"symbol": "KYD",
						"symbol-alt-narrow": "$"
					},
					"KZT": {
						"displayName": "Tenge cazaque",
						"displayName-count-one": "Tenge cazaque",
						"displayName-count-other": "Tenges cazaques",
						"symbol": "KZT",
						"symbol-alt-narrow": "₸"
					},
					"LAK": {
						"displayName": "Kip laosiano",
						"displayName-count-one": "Kip laosiano",
						"displayName-count-other": "Kips laosianos",
						"symbol": "LAK",
						"symbol-alt-narrow": "₭"
					},
					"LBP": {
						"displayName": "Libra libanesa",
						"displayName-count-one": "Libra libanesa",
						"displayName-count-other": "Libras libanesas",
						"symbol": "LBP",
						"symbol-alt-narrow": "L£"
					},
					"LKR": {
						"displayName": "Rupia ceilandesa",
						"displayName-count-one": "Rupia ceilandesa",
						"displayName-count-other": "Rupias ceilandesas",
						"symbol": "LKR",
						"symbol-alt-narrow": "Rs"
					},
					"LRD": {
						"displayName": "Dólar liberiano",
						"displayName-count-one": "Dólar liberiano",
						"displayName-count-other": "Dólares liberianos",
						"symbol": "LRD",
						"symbol-alt-narrow": "$"
					},
					"LSL": {
						"displayName": "Loti do Lesoto",
						"displayName-count-one": "Loti do Lesoto",
						"displayName-count-other": "Lotis do Lesoto",
						"symbol": "LSL"
					},
					"LTL": {
						"displayName": "Litas lituano",
						"displayName-count-one": "Litas lituano",
						"displayName-count-other": "Litai lituanos",
						"symbol": "LTL",
						"symbol-alt-narrow": "Lt"
					},
					"LTT": {
						"displayName": "Talonas lituano",
						"displayName-count-one": "Talonas lituanas",
						"displayName-count-other": "Talonases lituanas",
						"symbol": "LTT"
					},
					"LUC": {
						"displayName": "Franco conversível de Luxemburgo",
						"displayName-count-one": "Franco conversível de Luxemburgo",
						"displayName-count-other": "Francos conversíveis de Luxemburgo",
						"symbol": "LUC"
					},
					"LUF": {
						"displayName": "Franco luxemburguês",
						"displayName-count-one": "Franco de Luxemburgo",
						"displayName-count-other": "Francos de Luxemburgo",
						"symbol": "LUF"
					},
					"LUL": {
						"displayName": "Franco financeiro de Luxemburgo",
						"displayName-count-one": "Franco financeiro de Luxemburgo",
						"displayName-count-other": "Francos financeiros de Luxemburgo",
						"symbol": "LUL"
					},
					"LVL": {
						"displayName": "Lats letão",
						"displayName-count-one": "Lats letão",
						"displayName-count-other": "Lati letões",
						"symbol": "LVL",
						"symbol-alt-narrow": "Ls"
					},
					"LVR": {
						"displayName": "Rublo letão",
						"displayName-count-one": "Rublo da Letônia",
						"displayName-count-other": "Rublos da Letônia",
						"symbol": "LVR"
					},
					"LYD": {
						"displayName": "Dinar líbio",
						"displayName-count-one": "Dinar líbio",
						"displayName-count-other": "Dinares líbios",
						"symbol": "LYD"
					},
					"MAD": {
						"displayName": "Dirrã marroquino",
						"displayName-count-one": "Dirrã marroquino",
						"displayName-count-other": "Dirrãs marroquinos",
						"symbol": "MAD"
					},
					"MAF": {
						"displayName": "Franco marroquino",
						"displayName-count-one": "Franco marroquino",
						"displayName-count-other": "Francos marroquinos",
						"symbol": "MAF"
					},
					"MCF": {
						"displayName": "Franco monegasco",
						"displayName-count-one": "Franco monegasco",
						"displayName-count-other": "Francos monegascos",
						"symbol": "MCF"
					},
					"MDC": {
						"displayName": "Cupon moldávio",
						"displayName-count-one": "Cupon moldávio",
						"displayName-count-other": "Cupon moldávio",
						"symbol": "MDC"
					},
					"MDL": {
						"displayName": "Leu moldávio",
						"displayName-count-one": "Leu moldávio",
						"displayName-count-other": "Leus moldávios",
						"symbol": "MDL"
					},
					"MGA": {
						"displayName": "Ariary malgaxe",
						"displayName-count-one": "Ariary malgaxe",
						"displayName-count-other": "Ariarys malgaxes",
						"symbol": "MGA",
						"symbol-alt-narrow": "Ar"
					},
					"MGF": {
						"displayName": "Franco de Madagascar",
						"displayName-count-one": "Franco de Madagascar",
						"displayName-count-other": "Francos de Madagascar",
						"symbol": "MGF"
					},
					"MKD": {
						"displayName": "Dinar macedônio",
						"displayName-count-one": "Dinar macedônio",
						"displayName-count-other": "Dinares macedônios",
						"symbol": "MKD"
					},
					"MKN": {
						"displayName": "Dinar macedônio (1992–1993)",
						"displayName-count-one": "Dinar macedônio (1992–1993)",
						"displayName-count-other": "Dinares macedônios (1992–1993)",
						"symbol": "MKN"
					},
					"MLF": {
						"displayName": "Franco de Mali",
						"displayName-count-one": "Franco de Mali",
						"displayName-count-other": "Francos de Mali",
						"symbol": "MLF"
					},
					"MMK": {
						"displayName": "Kyat mianmarense",
						"displayName-count-one": "Kyat mianmarense",
						"displayName-count-other": "Kyats mianmarenses",
						"symbol": "MMK",
						"symbol-alt-narrow": "K"
					},
					"MNT": {
						"displayName": "Tugrik mongol",
						"displayName-count-one": "Tugrik mongol",
						"displayName-count-other": "Tugriks mongóis",
						"symbol": "MNT",
						"symbol-alt-narrow": "₮"
					},
					"MOP": {
						"displayName": "Pataca macaense",
						"displayName-count-one": "Pataca macaense",
						"displayName-count-other": "Patacas macaenses",
						"symbol": "MOP"
					},
					"MRO": {
						"displayName": "Ouguiya mauritana",
						"displayName-count-one": "Ouguiya mauritana",
						"displayName-count-other": "Ouguiyas mauritanas",
						"symbol": "MRO"
					},
					"MTL": {
						"displayName": "Lira maltesa",
						"displayName-count-one": "Lira Maltesa",
						"displayName-count-other": "Liras maltesas",
						"symbol": "MTL"
					},
					"MTP": {
						"displayName": "Libra maltesa",
						"displayName-count-one": "Libra maltesa",
						"displayName-count-other": "Libras maltesas",
						"symbol": "MTP"
					},
					"MUR": {
						"displayName": "Rupia mauriciana",
						"displayName-count-one": "Rupia mauriciana",
						"displayName-count-other": "Rupias mauricianas",
						"symbol": "MUR",
						"symbol-alt-narrow": "Rs"
					},
					"MVR": {
						"displayName": "Rupia maldiva",
						"displayName-count-one": "Rupia maldiva",
						"displayName-count-other": "Rupias maldivas",
						"symbol": "MVR"
					},
					"MWK": {
						"displayName": "Kwacha malawiana",
						"displayName-count-one": "Kwacha malawiana",
						"displayName-count-other": "Kwachas malawianas",
						"symbol": "MWK"
					},
					"MXN": {
						"displayName": "Peso mexicano",
						"displayName-count-one": "Peso mexicano",
						"displayName-count-other": "Pesos mexicanos",
						"symbol": "MX$",
						"symbol-alt-narrow": "$"
					},
					"MXP": {
						"displayName": "Peso Prata mexicano (1861–1992)",
						"displayName-count-one": "Peso de prata mexicano (1861–1992)",
						"displayName-count-other": "Pesos de prata mexicanos (1861–1992)",
						"symbol": "MXP"
					},
					"MXV": {
						"displayName": "Unidade Mexicana de Investimento (UDI)",
						"displayName-count-one": "Unidade de investimento mexicana (UDI)",
						"displayName-count-other": "Unidades de investimento mexicanas (UDI)",
						"symbol": "MXV"
					},
					"MYR": {
						"displayName": "Ringgit malaio",
						"displayName-count-one": "Ringgit malaio",
						"displayName-count-other": "Ringgits malaios",
						"symbol": "MYR",
						"symbol-alt-narrow": "RM"
					},
					"MZE": {
						"displayName": "Escudo de Moçambique",
						"displayName-count-one": "Escudo de Moçambique",
						"displayName-count-other": "Escudos de Moçambique",
						"symbol": "MZE"
					},
					"MZM": {
						"displayName": "Metical de Moçambique (1980–2006)",
						"displayName-count-one": "Metical antigo de Moçambique",
						"displayName-count-other": "Meticales antigos de Moçambique",
						"symbol": "MZM"
					},
					"MZN": {
						"displayName": "Metical moçambicano",
						"displayName-count-one": "Metical moçambicano",
						"displayName-count-other": "Meticales moçambicanos",
						"symbol": "MZN"
					},
					"NAD": {
						"displayName": "Dólar namibiano",
						"displayName-count-one": "Dólar namibiano",
						"displayName-count-other": "Dólares namibianos",
						"symbol": "NAD",
						"symbol-alt-narrow": "$"
					},
					"NGN": {
						"displayName": "Naira nigeriana",
						"displayName-count-one": "Naira nigeriana",
						"displayName-count-other": "Nairas nigerianas",
						"symbol": "NGN",
						"symbol-alt-narrow": "₦"
					},
					"NIC": {
						"displayName": "Córdoba nicaraguense (1988–1991)",
						"displayName-count-one": "Córdoba nicaraguense (1988–1991)",
						"displayName-count-other": "Córdobas nicaraguense (1988–1991)",
						"symbol": "NIC"
					},
					"NIO": {
						"displayName": "Córdoba nicaraguense",
						"displayName-count-one": "Córdoba nicaraguense",
						"displayName-count-other": "Córdobas nicaraguenses",
						"symbol": "NIO",
						"symbol-alt-narrow": "C$"
					},
					"NLG": {
						"displayName": "Florim holandês",
						"displayName-count-one": "Florim holandês",
						"displayName-count-other": "Florins holandeses",
						"symbol": "NLG"
					},
					"NOK": {
						"displayName": "Coroa norueguesa",
						"displayName-count-one": "Coroa norueguesa",
						"displayName-count-other": "Coroas norueguesas",
						"symbol": "NOK",
						"symbol-alt-narrow": "kr"
					},
					"NPR": {
						"displayName": "Rupia nepalesa",
						"displayName-count-one": "Rupia nepalesa",
						"displayName-count-other": "Rupias nepalesas",
						"symbol": "NPR",
						"symbol-alt-narrow": "Rs"
					},
					"NZD": {
						"displayName": "Dólar neozelandês",
						"displayName-count-one": "Dólar neozelandês",
						"displayName-count-other": "Dólares neozelandeses",
						"symbol": "NZ$",
						"symbol-alt-narrow": "$"
					},
					"OMR": {
						"displayName": "Rial omanense",
						"displayName-count-one": "Rial omanense",
						"displayName-count-other": "Riales omanenses",
						"symbol": "OMR"
					},
					"PAB": {
						"displayName": "Balboa panamenha",
						"displayName-count-one": "Balboa panamenha",
						"displayName-count-other": "Balboas panamenhas",
						"symbol": "PAB"
					},
					"PEI": {
						"displayName": "Inti peruano",
						"displayName-count-one": "Inti peruano",
						"displayName-count-other": "Intis peruanos",
						"symbol": "PEI"
					},
					"PEN": {
						"displayName": "Novo sol peruano",
						"displayName-count-one": "Novo sol peruano",
						"displayName-count-other": "Novos sóis peruanos",
						"symbol": "PEN"
					},
					"PES": {
						"displayName": "Sol peruano (1863–1965)",
						"displayName-count-one": "Sol peruano",
						"displayName-count-other": "Soles peruanos",
						"symbol": "PES"
					},
					"PGK": {
						"displayName": "Kina papuásia",
						"displayName-count-one": "Kina papuásia",
						"displayName-count-other": "Kinas papuásias",
						"symbol": "PGK"
					},
					"PHP": {
						"displayName": "Peso filipino",
						"displayName-count-one": "Peso filipino",
						"displayName-count-other": "Pesos filipinos",
						"symbol": "PHP",
						"symbol-alt-narrow": "₱"
					},
					"PKR": {
						"displayName": "Rupia paquistanesa",
						"displayName-count-one": "Rupia paquistanesa",
						"displayName-count-other": "Rupias paquistanesas",
						"symbol": "PKR",
						"symbol-alt-narrow": "Rs"
					},
					"PLN": {
						"displayName": "Zloti polonês",
						"displayName-count-one": "Zloti polonês",
						"displayName-count-other": "Zlotis poloneses",
						"symbol": "PLN",
						"symbol-alt-narrow": "zł"
					},
					"PLZ": {
						"displayName": "Zloti polonês (1950–1995)",
						"displayName-count-one": "Zloti polonês (1950–1995)",
						"displayName-count-other": "Zlotis poloneses (1950–1995)",
						"symbol": "PLZ"
					},
					"PTE": {
						"displayName": "Escudo português",
						"displayName-count-one": "Escudo português",
						"displayName-count-other": "Escudos portugueses",
						"symbol": "Esc."
					},
					"PYG": {
						"displayName": "Guarani paraguaio",
						"displayName-count-one": "Guarani paraguaio",
						"displayName-count-other": "Guaranis paraguaios",
						"symbol": "PYG",
						"symbol-alt-narrow": "₲"
					},
					"QAR": {
						"displayName": "Rial catariano",
						"displayName-count-one": "Rial catariano",
						"displayName-count-other": "Riales catarianos",
						"symbol": "QAR"
					},
					"RHD": {
						"displayName": "Dólar rodesiano",
						"displayName-count-one": "Dólar da Rodésia",
						"displayName-count-other": "Dólares da Rodésia",
						"symbol": "RHD"
					},
					"ROL": {
						"displayName": "Leu romeno (1952–2006)",
						"displayName-count-one": "Leu antigo da Romênia",
						"displayName-count-other": "Leus antigos da Romênia",
						"symbol": "ROL"
					},
					"RON": {
						"displayName": "Leu romeno",
						"displayName-count-one": "Leu romeno",
						"displayName-count-other": "Leus romenos",
						"symbol": "RON",
						"symbol-alt-narrow": "L"
					},
					"RSD": {
						"displayName": "Dinar sérvio",
						"displayName-count-one": "Dinar sérvio",
						"displayName-count-other": "Dinares sérvios",
						"symbol": "RSD"
					},
					"RUB": {
						"displayName": "Rublo russo",
						"displayName-count-one": "Rublo russo",
						"displayName-count-other": "Rublos russos",
						"symbol": "RUB",
						"symbol-alt-narrow": "₽"
					},
					"RUR": {
						"displayName": "Rublo russo (1991–1998)",
						"displayName-count-one": "Rublo russo (1991–1998)",
						"displayName-count-other": "Rublos russos (1991–1998)",
						"symbol": "RUR",
						"symbol-alt-narrow": "р."
					},
					"RWF": {
						"displayName": "Franco ruandês",
						"displayName-count-one": "Franco ruandês",
						"displayName-count-other": "Francos ruandeses",
						"symbol": "RWF",
						"symbol-alt-narrow": "RF"
					},
					"SAR": {
						"displayName": "Riyal saudita",
						"displayName-count-one": "Riyal saudita",
						"displayName-count-other": "Riyales sauditas",
						"symbol": "SAR"
					},
					"SBD": {
						"displayName": "Dólar das Ilhas Salomão",
						"displayName-count-one": "Dólar das Ilhas Salomão",
						"displayName-count-other": "Dólares das Ilhas Salomão",
						"symbol": "SBD",
						"symbol-alt-narrow": "$"
					},
					"SCR": {
						"displayName": "Rupia seichelense",
						"displayName-count-one": "Rupia seichelense",
						"displayName-count-other": "Rupias seichelenses",
						"symbol": "SCR"
					},
					"SDD": {
						"displayName": "Dinar sudanês (1992–2007)",
						"displayName-count-one": "Dinar antigo do Sudão",
						"displayName-count-other": "Dinares antigos do Sudão",
						"symbol": "SDD"
					},
					"SDG": {
						"displayName": "Libra sudanesa",
						"displayName-count-one": "Libra sudanesa",
						"displayName-count-other": "Libras sudanesas",
						"symbol": "SDG"
					},
					"SDP": {
						"displayName": "Libra sudanesa (1957–1998)",
						"displayName-count-one": "Libra antiga sudanesa",
						"displayName-count-other": "Libras antigas sudanesas",
						"symbol": "SDP"
					},
					"SEK": {
						"displayName": "Coroa sueca",
						"displayName-count-one": "Coroa sueca",
						"displayName-count-other": "Coroas suecas",
						"symbol": "SEK",
						"symbol-alt-narrow": "kr"
					},
					"SGD": {
						"displayName": "Dólar singapuriano",
						"displayName-count-one": "Dólar singapuriano",
						"displayName-count-other": "Dólares singapurianos",
						"symbol": "SGD",
						"symbol-alt-narrow": "$"
					},
					"SHP": {
						"displayName": "Libra de Santa Helena",
						"displayName-count-one": "Libra de Santa Helena",
						"displayName-count-other": "Libras de Santa Helena",
						"symbol": "SHP",
						"symbol-alt-narrow": "£"
					},
					"SIT": {
						"displayName": "Tolar Bons esloveno",
						"displayName-count-one": "Tolar da Eslovênia",
						"displayName-count-other": "Tolares da Eslovênia",
						"symbol": "SIT"
					},
					"SKK": {
						"displayName": "Coroa eslovaca",
						"displayName-count-one": "Coroa eslovaca",
						"displayName-count-other": "Coroas eslovacas",
						"symbol": "SKK"
					},
					"SLL": {
						"displayName": "Leone de Serra Leoa",
						"displayName-count-one": "Leone de Serra Leoa",
						"displayName-count-other": "Leones de Serra Leoa",
						"symbol": "SLL"
					},
					"SOS": {
						"displayName": "Xelim somaliano",
						"displayName-count-one": "Xelim somaliano",
						"displayName-count-other": "Xelins somalianos",
						"symbol": "SOS"
					},
					"SRD": {
						"displayName": "Dólar surinamês",
						"displayName-count-one": "Dólar surinamês",
						"displayName-count-other": "Dólares surinameses",
						"symbol": "SRD",
						"symbol-alt-narrow": "$"
					},
					"SRG": {
						"displayName": "Florim do Suriname",
						"displayName-count-one": "Florim do Suriname",
						"displayName-count-other": "Florins do Suriname",
						"symbol": "SRG"
					},
					"SSP": {
						"displayName": "Libra sul-sudanesa",
						"displayName-count-one": "Libra sul-sudanesa",
						"displayName-count-other": "Libras sul-sudanesas",
						"symbol": "SSP",
						"symbol-alt-narrow": "£"
					},
					"STD": {
						"displayName": "Dobra de São Tomé e Príncipe",
						"displayName-count-one": "Dobra de São Tomé e Príncipe",
						"displayName-count-other": "Dobras de São Tomé e Príncipe",
						"symbol": "STD",
						"symbol-alt-narrow": "Db"
					},
					"SUR": {
						"displayName": "Rublo soviético",
						"displayName-count-one": "Rublo soviético",
						"displayName-count-other": "Rublos soviéticos",
						"symbol": "SUR"
					},
					"SVC": {
						"displayName": "Colom salvadorenho",
						"displayName-count-one": "Colon de El Salvador",
						"displayName-count-other": "Colons de El Salvador",
						"symbol": "SVC"
					},
					"SYP": {
						"displayName": "Libra síria",
						"displayName-count-one": "Libra síria",
						"displayName-count-other": "Libras sírias",
						"symbol": "SYP",
						"symbol-alt-narrow": "£"
					},
					"SZL": {
						"displayName": "Lilangeni suazi",
						"displayName-count-one": "Lilangeni suazi",
						"displayName-count-other": "Lilangenis suazis",
						"symbol": "SZL"
					},
					"THB": {
						"displayName": "Baht tailandês",
						"displayName-count-one": "Baht tailandês",
						"displayName-count-other": "Bahts tailandeses",
						"symbol": "฿",
						"symbol-alt-narrow": "฿"
					},
					"TJR": {
						"displayName": "Rublo do Tadjiquistão",
						"displayName-count-one": "Rublo do Tajaquistão",
						"displayName-count-other": "Rublos do Tajaquistão",
						"symbol": "TJR"
					},
					"TJS": {
						"displayName": "Somoni tadjique",
						"displayName-count-one": "Somoni tadjique",
						"displayName-count-other": "Somonis tadjiques",
						"symbol": "TJS"
					},
					"TMM": {
						"displayName": "Manat do Turcomenistão (1993–2009)",
						"displayName-count-one": "Manat do Turcomenistão (1993–2009)",
						"displayName-count-other": "Manats do Turcomenistão (1993–2009)",
						"symbol": "TMM"
					},
					"TMT": {
						"displayName": "Manat turcomeno",
						"displayName-count-one": "Manat turcomeno",
						"displayName-count-other": "Manats turcomenos",
						"symbol": "TMT"
					},
					"TND": {
						"displayName": "Dinar tunisiano",
						"displayName-count-one": "Dinar tunisiano",
						"displayName-count-other": "Dinares tunisianos",
						"symbol": "TND"
					},
					"TOP": {
						"displayName": "Paʻanga tonganesa",
						"displayName-count-one": "Paʻanga tonganesa",
						"displayName-count-other": "Paʻangas tonganesas",
						"symbol": "TOP",
						"symbol-alt-narrow": "T$"
					},
					"TPE": {
						"displayName": "Escudo timorense",
						"displayName-count-one": "Escudo do Timor",
						"displayName-count-other": "Escudos do Timor",
						"symbol": "TPE"
					},
					"TRL": {
						"displayName": "Lira turca (1922–2005)",
						"displayName-count-one": "Lira turca antiga",
						"displayName-count-other": "Liras turcas antigas",
						"symbol": "TRL"
					},
					"TRY": {
						"displayName": "Lira turca",
						"displayName-count-one": "Lira turca",
						"displayName-count-other": "Liras turcas",
						"symbol": "TRY",
						"symbol-alt-narrow": "₺",
						"symbol-alt-variant": "TL"
					},
					"TTD": {
						"displayName": "Dólar de Trinidad e Tobago",
						"displayName-count-one": "Dólar de Trinidad e Tobago",
						"displayName-count-other": "Dólares de Trinidad e Tobago",
						"symbol": "TTD",
						"symbol-alt-narrow": "$"
					},
					"TWD": {
						"displayName": "Novo dólar taiwanês",
						"displayName-count-one": "Novo dólar taiwanês",
						"displayName-count-other": "Novos dólares taiwaneses",
						"symbol": "NT$",
						"symbol-alt-narrow": "NT$"
					},
					"TZS": {
						"displayName": "Xelim tanzaniano",
						"displayName-count-one": "Xelim tanzaniano",
						"displayName-count-other": "Xelins tanzanianos",
						"symbol": "TZS"
					},
					"UAH": {
						"displayName": "Hryvnia ucraniano",
						"displayName-count-one": "Hryvnia ucraniano",
						"displayName-count-other": "Hryvnias ucranianos",
						"symbol": "UAH",
						"symbol-alt-narrow": "₴"
					},
					"UAK": {
						"displayName": "Karbovanetz ucraniano",
						"displayName-count-one": "Karbovanetz da Ucrânia",
						"displayName-count-other": "Karbovanetzs da Ucrânia",
						"symbol": "UAK"
					},
					"UGS": {
						"displayName": "Xelim ugandense (1966–1987)",
						"displayName-count-one": "Shilling de Uganda (1966–1987)",
						"displayName-count-other": "Shillings de Uganda (1966–1987)",
						"symbol": "UGS"
					},
					"UGX": {
						"displayName": "Xelim ugandense",
						"displayName-count-one": "Xelim ugandense",
						"displayName-count-other": "Xelins ugandenses",
						"symbol": "UGX"
					},
					"USD": {
						"displayName": "Dólar americano",
						"displayName-count-one": "Dólar americano",
						"displayName-count-other": "Dólares americanos",
						"symbol": "US$",
						"symbol-alt-narrow": "$"
					},
					"USN": {
						"displayName": "Dólar norte-americano (Dia seguinte)",
						"displayName-count-one": "Dólar americano (dia seguinte)",
						"displayName-count-other": "Dólares americanos (dia seguinte)",
						"symbol": "USN"
					},
					"USS": {
						"displayName": "Dólar norte-americano (Mesmo dia)",
						"displayName-count-one": "Dólar americano (mesmo dia)",
						"displayName-count-other": "Dólares americanos (mesmo dia)",
						"symbol": "USS"
					},
					"UYI": {
						"displayName": "Peso uruguaio en unidades indexadas",
						"displayName-count-one": "Peso uruguaio em unidades indexadas",
						"displayName-count-other": "Pesos uruguaios em unidades indexadas",
						"symbol": "UYI"
					},
					"UYP": {
						"displayName": "Peso uruguaio (1975–1993)",
						"displayName-count-one": "Peso uruguaio (1975–1993)",
						"displayName-count-other": "Pesos uruguaios (1975–1993)",
						"symbol": "UYP"
					},
					"UYU": {
						"displayName": "Peso uruguaio",
						"displayName-count-one": "Peso uruguaio",
						"displayName-count-other": "Pesos uruguaios",
						"symbol": "UYU",
						"symbol-alt-narrow": "$"
					},
					"UZS": {
						"displayName": "Som uzbeque",
						"displayName-count-one": "Som uzbeque",
						"displayName-count-other": "Sons uzbeques",
						"symbol": "UZS"
					},
					"VEB": {
						"displayName": "Bolívar venezuelano (1871–2008)",
						"displayName-count-one": "Bolívar venezuelano (1871–2008)",
						"displayName-count-other": "Bolívares venezuelanos (1871–2008)",
						"symbol": "VEB"
					},
					"VEF": {
						"displayName": "Bolívar venezuelano",
						"displayName-count-one": "Bolívar venezuelano",
						"displayName-count-other": "Bolívares venezuelanos",
						"symbol": "VEF",
						"symbol-alt-narrow": "Bs"
					},
					"VND": {
						"displayName": "Dong vietnamita",
						"displayName-count-one": "Dong vietnamita",
						"displayName-count-other": "Dongs vietnamitas",
						"symbol": "₫",
						"symbol-alt-narrow": "₫"
					},
					"VNN": {
						"displayName": "Dong vietnamita (1978–1985)",
						"displayName-count-one": "Dong vietnamita (1978–1985)",
						"displayName-count-other": "Dong vietnamita (1978–1985)",
						"symbol": "VNN"
					},
					"VUV": {
						"displayName": "Vatu vanuatuense",
						"displayName-count-one": "Vatu vanuatuense",
						"displayName-count-other": "Vatus vanuatuenses",
						"symbol": "VUV"
					},
					"WST": {
						"displayName": "Tala samoano",
						"displayName-count-one": "Tala samoano",
						"displayName-count-other": "Talas samoanos",
						"symbol": "WST"
					},
					"XAF": {
						"displayName": "Franco CFA de BEAC",
						"displayName-count-one": "Franco CFA de BEAC",
						"displayName-count-other": "Francos CFA de BEAC",
						"symbol": "FCFA"
					},
					"XAG": {
						"displayName": "Prata",
						"displayName-count-one": "Prata",
						"displayName-count-other": "Pratas",
						"symbol": "XAG"
					},
					"XAU": {
						"displayName": "Ouro",
						"displayName-count-one": "Ouro",
						"displayName-count-other": "Ouros",
						"symbol": "XAU"
					},
					"XBA": {
						"displayName": "Unidade Composta Europeia",
						"displayName-count-one": "Unidade de composição europeia",
						"displayName-count-other": "Unidades de composição europeias",
						"symbol": "XBA"
					},
					"XBB": {
						"displayName": "Unidade Monetária Europeia",
						"displayName-count-one": "Unidade monetária europeia",
						"displayName-count-other": "Unidades monetárias europeias",
						"symbol": "XBB"
					},
					"XBC": {
						"displayName": "Unidade de Conta Europeia (XBC)",
						"displayName-count-one": "Unidade europeia de conta (XBC)",
						"displayName-count-other": "Unidades europeias de conta (XBC)",
						"symbol": "XBC"
					},
					"XBD": {
						"displayName": "Unidade de Conta Europeia (XBD)",
						"displayName-count-one": "Unidade europeia de conta (XBD)",
						"displayName-count-other": "Unidades europeias de conta (XBD)",
						"symbol": "XBD"
					},
					"XCD": {
						"displayName": "Dólar do Caribe Oriental",
						"displayName-count-one": "Dólar do Caribe Oriental",
						"displayName-count-other": "Dólares do Caribe Oriental",
						"symbol": "EC$",
						"symbol-alt-narrow": "$"
					},
					"XDR": {
						"displayName": "Direitos Especiais de Giro",
						"displayName-count-one": "Direitos de desenho especiais",
						"displayName-count-other": "Direitos de desenho especiais",
						"symbol": "XDR"
					},
					"XEU": {
						"displayName": "Unidade de Moeda Europeia",
						"displayName-count-one": "Unidade de moeda europeia",
						"displayName-count-other": "Unidades de moedas europeias",
						"symbol": "XEU"
					},
					"XFO": {
						"displayName": "Franco-ouro francês",
						"displayName-count-one": "Franco de ouro francês",
						"displayName-count-other": "Francos de ouro franceses",
						"symbol": "XFO"
					},
					"XFU": {
						"displayName": "Franco UIC francês",
						"displayName-count-one": "Franco UIC francês",
						"displayName-count-other": "Francos UIC franceses",
						"symbol": "XFU"
					},
					"XOF": {
						"displayName": "Franco CFA de BCEAO",
						"displayName-count-one": "Franco CFA de BCEAO",
						"displayName-count-other": "Francos CFA de BCEAO",
						"symbol": "CFA"
					},
					"XPD": {
						"displayName": "Paládio",
						"displayName-count-one": "Paládio",
						"displayName-count-other": "Paládios",
						"symbol": "XPD"
					},
					"XPF": {
						"displayName": "Franco CFP",
						"displayName-count-one": "Franco CFP",
						"displayName-count-other": "Francos CFP",
						"symbol": "CFPF"
					},
					"XPT": {
						"displayName": "Platina",
						"displayName-count-one": "Platina",
						"displayName-count-other": "Platinas",
						"symbol": "XPT"
					},
					"XRE": {
						"displayName": "Fundos RINET",
						"displayName-count-one": "Fundos RINET",
						"displayName-count-other": "Fundos RINET",
						"symbol": "XRE"
					},
					"XSU": {
						"displayName": "XSU",
						"symbol": "XSU"
					},
					"XTS": {
						"displayName": "Código de Moeda de Teste",
						"displayName-count-one": "Código de moeda de teste",
						"displayName-count-other": "Códigos de moeda de teste",
						"symbol": "XTS"
					},
					"XUA": {
						"displayName": "XUA",
						"symbol": "XUA"
					},
					"XXX": {
						"displayName": "Moeda desconhecida",
						"displayName-count-one": "(moeda desconhecida)",
						"displayName-count-other": "(moedas desconhecidas)",
						"symbol": "XXX"
					},
					"YDD": {
						"displayName": "Dinar iemenita",
						"displayName-count-one": "Dinar do Iêmen",
						"displayName-count-other": "Dinares do Iêmen",
						"symbol": "YDD"
					},
					"YER": {
						"displayName": "Rial iemenita",
						"displayName-count-one": "Rial iemenita",
						"displayName-count-other": "Riales iemenitas",
						"symbol": "YER"
					},
					"YUD": {
						"displayName": "Dinar forte iugoslavo (1966–1990)",
						"displayName-count-one": "Dinar forte iugoslavo",
						"displayName-count-other": "Dinares fortes iugoslavos",
						"symbol": "YUD"
					},
					"YUM": {
						"displayName": "Dinar noviy iugoslavo (1994–2002)",
						"displayName-count-one": "Dinar noviy da Iugoslávia",
						"displayName-count-other": "Dinares noviy da Iugoslávia",
						"symbol": "YUM"
					},
					"YUN": {
						"displayName": "Dinar conversível iugoslavo (1990–1992)",
						"displayName-count-one": "Dinar conversível da Iugoslávia",
						"displayName-count-other": "Dinares conversíveis da Iugoslávia",
						"symbol": "YUN"
					},
					"YUR": {
						"displayName": "Dinar reformado iugoslavo (1992–1993)",
						"displayName-count-one": "Dinar iugoslavo reformado",
						"displayName-count-other": "Dinares iugoslavos reformados",
						"symbol": "YUR"
					},
					"ZAL": {
						"displayName": "Rand sul-africano (financeiro)",
						"displayName-count-one": "Rand da África do Sul (financeiro)",
						"displayName-count-other": "Rands da África do Sul (financeiro)",
						"symbol": "ZAL"
					},
					"ZAR": {
						"displayName": "Rand sul-africano",
						"displayName-count-one": "Rand sul-africano",
						"displayName-count-other": "Rands sul-africanos",
						"symbol": "ZAR",
						"symbol-alt-narrow": "R"
					},
					"ZMK": {
						"displayName": "Cuacha zambiano (1968–2012)",
						"displayName-count-one": "Kwacha da Zâmbia (1968–2012)",
						"displayName-count-other": "Kwachas da Zâmbia (1968–2012)",
						"symbol": "ZMK"
					},
					"ZMW": {
						"displayName": "Kwacha zambiano",
						"displayName-count-one": "Kwacha zambiano",
						"displayName-count-other": "Kwachas zambianos",
						"symbol": "ZMW",
						"symbol-alt-narrow": "ZK"
					},
					"ZRN": {
						"displayName": "Zaire Novo zairense (1993–1998)",
						"displayName-count-one": "Novo zaire do Zaire",
						"displayName-count-other": "Novos zaires do Zaire",
						"symbol": "ZRN"
					},
					"ZRZ": {
						"displayName": "Zaire zairense (1971–1993)",
						"displayName-count-one": "Zaire do Zaire",
						"displayName-count-other": "Zaires do Zaire",
						"symbol": "ZRZ"
					},
					"ZWD": {
						"displayName": "Dólar do Zimbábue (1980–2008)",
						"displayName-count-one": "Dólar do Zimbábue",
						"displayName-count-other": "Dólares do Zimbábue",
						"symbol": "ZWD"
					},
					"ZWL": {
						"displayName": "Dólar do Zimbábue (2009)",
						"displayName-count-one": "Dólar do Zimbábue (2009)",
						"displayName-count-other": "Dólares do Zimbábue (2009)",
						"symbol": "ZWL"
					},
					"ZWR": {
						"displayName": "Dólar do Zimbábue (2008)",
						"displayName-count-one": "Dólar do Zimbábue (2008)",
						"displayName-count-other": "Dólares do Zimbábue (2008)",
						"symbol": "ZWR"
					}
				}
			}
		}
	}
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = {
	"main": {
		"pt": {
			"identity": {
				"version": {
					"_number": "$Revision: 12879 $",
					"_cldrVersion": "30.0.3"
				},
				"language": "pt"
			},
			"numbers": {
				"defaultNumberingSystem": "latn",
				"otherNumberingSystems": {
					"native": "latn"
				},
				"minimumGroupingDigits": "1",
				"symbols-numberSystem-latn": {
					"decimal": ",",
					"group": ".",
					"list": ";",
					"percentSign": "%",
					"plusSign": "+",
					"minusSign": "-",
					"exponential": "E",
					"superscriptingExponent": "×",
					"perMille": "‰",
					"infinity": "∞",
					"nan": "NaN",
					"timeSeparator": ":"
				},
				"decimalFormats-numberSystem-latn": {
					"standard": "#,##0.###",
					"long": {
						"decimalFormat": {
							"1000-count-one": "0 mil",
							"1000-count-other": "0 mil",
							"10000-count-one": "00 mil",
							"10000-count-other": "00 mil",
							"100000-count-one": "000 mil",
							"100000-count-other": "000 mil",
							"1000000-count-one": "0 milhão",
							"1000000-count-other": "0 milhões",
							"10000000-count-one": "00 milhão",
							"10000000-count-other": "00 milhões",
							"100000000-count-one": "000 milhão",
							"100000000-count-other": "000 milhões",
							"1000000000-count-one": "0 bilhão",
							"1000000000-count-other": "0 bilhões",
							"10000000000-count-one": "00 bilhão",
							"10000000000-count-other": "00 bilhões",
							"100000000000-count-one": "000 bilhão",
							"100000000000-count-other": "000 bilhões",
							"1000000000000-count-one": "0 trilhão",
							"1000000000000-count-other": "0 trilhões",
							"10000000000000-count-one": "00 trilhão",
							"10000000000000-count-other": "00 trilhões",
							"100000000000000-count-one": "000 trilhão",
							"100000000000000-count-other": "000 trilhões"
						}
					},
					"short": {
						"decimalFormat": {
							"1000-count-one": "0 mil",
							"1000-count-other": "0 mil",
							"10000-count-one": "00 mil",
							"10000-count-other": "00 mil",
							"100000-count-one": "000 mil",
							"100000-count-other": "000 mil",
							"1000000-count-one": "0 mi",
							"1000000-count-other": "0 mi",
							"10000000-count-one": "00 mi",
							"10000000-count-other": "00 mi",
							"100000000-count-one": "000 mi",
							"100000000-count-other": "000 mi",
							"1000000000-count-one": "0 bi",
							"1000000000-count-other": "0 bi",
							"10000000000-count-one": "00 bi",
							"10000000000-count-other": "00 bi",
							"100000000000-count-one": "000 bi",
							"100000000000-count-other": "000 bi",
							"1000000000000-count-one": "0 tri",
							"1000000000000-count-other": "0 tri",
							"10000000000000-count-one": "00 tri",
							"10000000000000-count-other": "00 tri",
							"100000000000000-count-one": "000 tri",
							"100000000000000-count-other": "000 tri"
						}
					}
				},
				"scientificFormats-numberSystem-latn": {
					"standard": "#E0"
				},
				"percentFormats-numberSystem-latn": {
					"standard": "#,##0%"
				},
				"currencyFormats-numberSystem-latn": {
					"currencySpacing": {
						"beforeCurrency": {
							"currencyMatch": "[:^S:]",
							"surroundingMatch": "[:digit:]",
							"insertBetween": " "
						},
						"afterCurrency": {
							"currencyMatch": "[:^S:]",
							"surroundingMatch": "[:digit:]",
							"insertBetween": " "
						}
					},
					"standard": "¤#,##0.00",
					"accounting": "¤#,##0.00;(¤#,##0.00)",
					"short": {
						"standard": {
							"1000-count-one": "¤0 mil",
							"1000-count-other": "¤0 mil",
							"10000-count-one": "¤00 mil",
							"10000-count-other": "¤00 mil",
							"100000-count-one": "¤000 mil",
							"100000-count-other": "¤000 mil",
							"1000000-count-one": "¤0 mi",
							"1000000-count-other": "¤0 mi",
							"10000000-count-one": "¤00 mi",
							"10000000-count-other": "¤00 mi",
							"100000000-count-one": "¤000 mi",
							"100000000-count-other": "¤000 mi",
							"1000000000-count-one": "¤0 bi",
							"1000000000-count-other": "¤0 bi",
							"10000000000-count-one": "¤00 bi",
							"10000000000-count-other": "¤00 bi",
							"100000000000-count-one": "¤000 bi",
							"100000000000-count-other": "¤000 bi",
							"1000000000000-count-one": "¤0 tri",
							"1000000000000-count-other": "¤0 tri",
							"10000000000000-count-one": "¤00 tri",
							"10000000000000-count-other": "¤00 tri",
							"100000000000000-count-one": "¤000 tri",
							"100000000000000-count-other": "¤000 tri"
						}
					},
					"unitPattern-count-one": "{0} {1}",
					"unitPattern-count-other": "{0} {1}"
				},
				"miscPatterns-numberSystem-latn": {
					"atLeast": "+{0}",
					"range": "{0}–{1}"
				}
			}
		}
	}
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function() {
    return $().funcoes.dataHora("ANO") + $().funcoes.dataHora("MES") + $().funcoes.dataHora("DIA") + $().funcoes.dataHora("HORA24") + $().funcoes.dataHora("MINUTO") + $().funcoes.dataHora("SEGUNDO") + $().funcoes.dataHora("MILISEGUNDO");
}


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(lang) {
    Globalize.load(
        __webpack_require__(7),
        __webpack_require__(13),
        __webpack_require__(12),
        __webpack_require__(5),
        __webpack_require__(9),
        __webpack_require__(8),
        __webpack_require__(6),
        __webpack_require__(11),
        __webpack_require__(10),
        __webpack_require__(3),
        __webpack_require__(4),
        __webpack_require__(1),
        __webpack_require__(2)
    );

    $.widget("ui.spinner", $.ui.spinner, {
        _format: function(value) {
            if (value === "") {
                return "";
            }
            return window.Globalize && this.options.numberFormat ?
                Globalize(lang).formatNumber(value, {
                    minimumFractionDigits: Number(this.options.numberFormat.replace("n", ""))
                }) :
                value;
        },
        _parse: function(val) {
            if (typeof val === "string" && val !== "") {
                val = window.Globalize && this.options.numberFormat ?
                    Globalize(lang).parseNumber(val) : +val;
            }
            return val === "" || isNaN(val) ? null : val;
        }
    });

    return Globalize(lang)
}


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(value) {
    value = jQuery.trim(value);
    cpf = value.replace(/\.|-|\//gi, '');
    // elimina .(ponto), -(hifem) e /(barra)

    while (cpf.length < 11) {
        cpf = "0" + cpf;
    }
    var expReg = /^0+$|^1+$|^2+$|^3+$|^4+$|^5+$|^6+$|^7+$|^8+$|^9+$/;
    var a = [];
    var b = new Number;
    var c = 11;
    for (i = 0; i < 11; i++) {
        a[i] = cpf.charAt(i);
        if (i < 9)
            b += (a[i] * --c);
    }
    if ((x = b % 11) < 2) {
        a[9] = 0;
    } else {
        a[9] = 11 - x;
    }
    b = 0;
    c = 11;
    for (y = 0; y < 10; y++) {
        b += (a[y] * c--);
    }
    if ((x = b % 11) < 2) {
        a[10] = 0;
    } else {
        a[10] = 11 - x;
    }
    if ((cpf.charAt(9) != a[9]) || (cpf.charAt(10) != a[10]) || cpf.match(expReg))
        return false;
    return true;
}


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(cadeia) {
    cadeia = "_" + cadeia.toLowerCase();
    while (cadeia.indexOf("_") > -1) {
        var pos = cadeia.indexOf("_");
        cadeia = cadeia.substring(0, pos) + cadeia.substring(pos + 1, pos + 2).toUpperCase() + cadeia.substring(pos + 2);
    }
    return cadeia;
}


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(retorno) {
    // Verifica se houve mensagens no retorno e apresenta na tela
    if (parseInt(retorno["codigo"]) > 0) {
        $().mensagem({
            tipo: retorno["tipo"],
            mensagem: retorno["tipo"] + " [" + retorno["codigo"] + "]:<br/>" + retorno["mensagem"],
            largura: 400,
            altura: 160
        });
    }

    return (retorno["tipo"] == "Erro" ? true : false);
}


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$.fn.funcoes = __webpack_require__(0)

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


/***/ })
/******/ ]);
//# sourceMappingURL=amigo-funcoes.js.map