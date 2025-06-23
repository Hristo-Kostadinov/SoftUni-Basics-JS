function depositCalculator (input) {
let depositSum = Number(input[0]);
let depositTerm = Number(input[1]);
let yearlyTaxPercent = Number(input[2]);

let yearlyTaxSum = depositSum * (yearlyTaxPercent / 100);
let monthlyTaxSum = yearlyTaxSum / 12;

let finalSum = depositSum + depositTerm * monthlyTaxSum;

console.log(finalSum);
}
depositCalculator(["200 ",

"3 ",

"5.7 "])



