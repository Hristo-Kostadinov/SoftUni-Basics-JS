function smallShop (input) {
let product = input[0];   
let city = input[1];
let productamount = Number(input[2]);
let price = 0;

if (city == "Plovdiv") {
    if (product == "coffee") {
        price = productamount * 0.40;
    } else if (product == "water") {
        price = productamount * 0.70;
    } else if (product == "beer") {
        price = productamount * 1.15;
    } else if (product == "sweets") {
        price = productamount * 1.30;
    } else if (product == "peanuts") {
        price = productamount * 1.50;
    } else {
        console.log('error');
    }
} else if (city == "Varna") {
    if (product == "coffee") {
        price = productamount * 0.45;
    } else if (product == "water") {
        price = productamount * 0.70;
    } else if (product == "beer") {
        price = productamount * 1.10;
    } else if (product == "sweets") {
        price = productamount * 1.35;
    } else if (product == "peanuts") {
        price = productamount * 1.55;
    } else {
        console.log('error');
    } 
} else if(city == "Sofia") {
    if (product == "coffee") {
        price = productamount * 0.50;
    } else if (product == "water") {
        price = productamount * 0.80;
    } else if (product == "beer") {
        price = productamount * 1.20;
    } else if (product == "sweets") {
        price = productamount * 1.45;
    } else if (product == "peanuts") {
        price = productamount * 1.60;
    } else {
        console.log('error');
    }
} else {
    console.log("error");
}

console.log(price.toFixed(2));

}
smallShop(["beer", "Sofia", "2"])