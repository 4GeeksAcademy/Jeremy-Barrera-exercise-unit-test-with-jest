function sum(a,b){
    return a + b
}

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}
function fromDollarToYen(usd){
    let usdToEuro = usd/1.07
    let eurotoYen = usdToEuro * 156.5
    return eurotoYen
}

function fromYenToPound(yen){
    let yenToEuro = yen/156.5
    let euroToGbp = yenToEuro * 0.87
    return euroToGbp
}


module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}