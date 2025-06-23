function petShop (input){

let dogFood = Number(input[0]);
let catFood = Number(input[1]);

let dogFoodfinalprice = dogFood * 2.5; 
let catFoodFinalprice = catFood * 4;

let finalSum = dogFoodfinalprice + catFoodFinalprice;

console.log(finalSum + ' lv.');

}

petShop(["5 ","4 "])