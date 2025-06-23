// function suppliesForSchool (input) {
//     let penAmmount = Number(input[0]);
//     let markerAmmount = Number(input[1]);
//     let detergentLiters = Number(input[2]);
//     let discountPercent = Number(input[3]);
//     let finalPrice = penAmmount + markerAmmount + detergentLiters  discountPercent;
 
//     penAmmount *= 5.80;
//     markerAmmount *= 7.20;
//     detergentLiters *= 1.20;
 
//     console.log(finalPrice);
 
 
// }
// suppliesForSchool(["2 ",
 
// "3 ",
 
// "4 ",
 
// "25 "])





function suppliesForSchool(input) {
    let penAmount = Number(input[0]);
    let markerAmount = Number(input[1]);
    let detergentLiters = Number(input[2]);
    let discountPercent = Number(input[3]);

    let penPrice = penAmount * 5.80;
    let markerPrice = markerAmount * 7.20;
    let detergentPrice = detergentLiters * 1.20;

    let totalPrice = penPrice + markerPrice + detergentPrice;
    let discountedPrice = totalPrice - (totalPrice * (discountPercent / 100));//AHHHHHHHHHHHHHHHHHHHHH

    console.log(discountedPrice);
}

suppliesForSchool(["2", "3", "4", "25"]);