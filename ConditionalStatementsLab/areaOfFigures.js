function areaOfFigures(input) {
    let type = input[0];
    let result = 0;
    
    if (type === "square") {
        let a = Number(input[1]);
        result = a * a;
    }
    
    if (type === "rectangle") {
        let a = Number(input[1]);
        let b = Number(input[2]);
        result = a * b;
    }
    
    if (type === "circle") {
        let r = Number(input[1]);
        result = Math.PI * Math.pow(r, 2);
    }
    
    if (type === "triangle") {
        let a = Number(input[1]);
        let h = Number(input[2]);
        result = a * h / 2;
    }
    return result; 


}

areaOfFigures(["triangle", "4.5", "20"])