function foodDelivery (input) {

let chickenMenuAmount = Number(input[0]);
let fishMenuAmount = Number(input[1]);
let vegetarianMenuAmount = Number(input[2]);

let chickenMenuPrice = chickenMenuAmount * 10.35;
let fishMenuPrice = fishMenuAmount * 12.40;
let vegetarianMenuPrice = vegetarianMenuAmount * 8.15;

let sum = chickenMenuPrice + fishMenuPrice + vegetarianMenuPrice;
let dessert  = sum / 5;

let finalSum = sum + dessert + 2.5;

console.log(finalSum);

}
foodDelivery(["2 ",

"4 ",

"3 "])