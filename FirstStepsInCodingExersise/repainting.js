function repainting (input) {

let nylonSquareMeter = Number(input[0]);
let paintLiters = Number(input[1]);
let paintThinner = Number(input[2]);
let hoursOfWork = Number(input[3]);

let nylonPrice = nylonSquareMeter * 1.50;
let paintPrice = paintLiters * 14.50;
let paintThinnerPrice = paintThinner * 5.00;

let extraPaintAmmount = paintLiters / 10;
let extraPaint = extraPaintAmmount * 14.50;
let extraNylon = 1.50 * 2;

let addedTogether = nylonPrice + paintPrice + paintThinnerPrice + extraNylon + extraPaint;
let expenses = addedTogether + 0.40;
let hoursOfWorkPrice = hoursOfWork * (expenses / 3.3333333333333333);

let finalPrice = expenses + hoursOfWorkPrice;

console.log(finalPrice);

}
repainting(["10 ",

"11 ",

"4 ",

"8 "])