'use strict'

module.exports = function(lang) {
    Globalize.load(
        require("lib/cldr-dates-full/main/pt/ca-gregorian.json"),
        require("lib/cldr-numbers-full/main/pt/numbers.json"),
        require("lib/cldr-numbers-full/main/pt/currencies.json"),
        require("lib/cldr-dates-full/main/en/ca-gregorian.json"),
        require("lib/cldr-numbers-full/main/en/numbers.json"),
        require("lib/cldr-numbers-full/main/en/currencies.json"),
        require("lib/cldr-dates-full/main/es/ca-gregorian.json"),
        require("lib/cldr-numbers-full/main/es/numbers.json"),
        require("lib/cldr-numbers-full/main/es/currencies.json"),
        require("lib/cldr-core/supplemental/timeData.json"),
        require("lib/cldr-core/supplemental/weekData.json"),
        require("lib/cldr-core/supplemental/likelySubtags.json"),
        require("lib/cldr-core/supplemental/plurals.json")
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
