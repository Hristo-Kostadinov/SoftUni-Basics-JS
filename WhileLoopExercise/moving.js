function moving(input) {
 
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);
 
    let freeSpace = width * length * height;
    let index = 3;
    let row = input[index];
 
    while (row !== 'Done') {
 
        let boxes = Number(row);
 
        freeSpace -= boxes;
 
        if (freeSpace < 0) {
            console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`);
            break;
        }
        index++;
        row = input[index];
    }
 
    if (freeSpace > 0) {
        console.log(`${freeSpace} Cubic meters left.`);
    }
}
moving(["10",
    "10",
    "2",
    "20",
    "20",
    "20",
    "20",
    "122"]);