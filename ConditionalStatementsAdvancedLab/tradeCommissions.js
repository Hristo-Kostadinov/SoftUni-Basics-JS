function tradeCommissions (input) {
let cityName = input[0];
let sales = Number(input[1]);
let commission = 0;

if (sales < 0) {
    console.log("error");
    return;
}
if (cityName === "Sofia") {
    if (sales >0 && sales <= 500 ) {
        commission += (sales * 0.05);
    } else if (sales <= 1000) {
        commission += (sales * 0.07);
    } else if (sales <= 10000) {
        commission += (sales * 0.08);
    } else if (sales > 10000) {
        commission += (sales * 0.12);
    } else {
        console.log("error");
        return;
    }
} else if (cityName === "Varna") {
    if (sales >0 && sales <= 500 ) {
        commission += (sales * 0.045);
    } else if (sales <= 1000) {
        commission += (sales * 0.075);
    } else if (sales <= 10000) {
        commission += (sales * 0.10);
    } else if (sales > 10000) {
        commission += (sales * 0.13);
    } else {
        console.log("error");
        return;
    }
} else if (cityName === "Plovdiv") {
    if (sales >0 && sales <= 500 ) {
        commission += (sales * 0.055);
    } else if (sales <= 1000) {
        commission += (sales * 0.08);
    } else if (sales <= 10000) {
        commission += (sales * 0.12);
    } else if (sales > 10000) {
        commission += (sales * 0.145);
    } else {
        console.log("error");
        return;
    }
} else {
    console.log("error");
    return;
}

console.log(commission.toFixed(2));



}
tradeCommissions(["Kaspichan", "-50"])