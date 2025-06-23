function shoping(input) {
 
    let budget = Number(input[0]);
    let GPU = Number(input[1]);
    let CPU = Number(input[2]);
    let RAM = Number(input[3]);
 
    let GPUSum = GPU * 250;
    let CPUSum = GPUSum * 0.35 * CPU;
    let RAMSum = GPUSum * 0.10 * RAM;
 
    let totalSum = GPUSum + CPUSum + RAMSum;
 
    if (GPU > CPU) {
        totalSum = totalSum * 0.85;
    }
 
    if (totalSum > budget) {
        console.log(`Not enough money! You need ${(totalSum - budget).toFixed(2)} leva more!`);
    } else {
        console.log(`You have ${(budget - totalSum).toFixed(2)} leva left!`);
    }
 
}
shoping(["920.45",
"3",
"1",
"1"])
 