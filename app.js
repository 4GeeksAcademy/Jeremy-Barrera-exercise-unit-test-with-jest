function sum(a,b){
    return a + b
}

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
function fromEuroToDollar(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;

    return parseFloat(valueInDollar.toFixed(3));
}
function fromDollarToYen(usd){
    let usdToEuro = usd/1.07
    let eurotoYen = usdToEuro * 156.5
    return parseFloat(eurotoYen.toFixed(2));
}

function fromYenToPound(yen){
    let yenToEuro = yen/156.5
    let euroToGbp = yenToEuro * 0.87
    return parseFloat(euroToGbp.toFixed(2));
}


module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}