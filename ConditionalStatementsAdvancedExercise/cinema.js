function cinema (input) {
    let income = 0;
    let type = input[0];
    let rows = Number(input[1]);
    let colons = Number(input[2]);
     
    if (type == "Premiere") {
        income = rows * colons * 12.0;
    } else if (type == "Normal") {
        income = rows * colons * 7.50;
    } else if (type == "Discount") {
        income = rows * colons * 5.0;
    }
    console.log(`${income.toFixed(2)} leva`);
     
    }
     
    cinema(["Discount", "12", "30"])
