function multiplicationTable(input){


let factor2 = Number(input[0]);

for (let factor1 = 1; factor1 <= 10; factor1++) {
    let product = factor1 * factor2;
    
    console.log(`${factor1} * ${factor2} = ${product}`);
}



}

multiplicationTable(["5"])