function bonusScore (input) {

let score = Number(input[0]);
let bonus = 0;
if (score <= 100) {
    bonus += 5;
} else if (score <= 1000) {
    bonus += (score / 5);
}else if (score > 1000) {
    bonus += (score / 10);
}

if (score % 2 === 0) {
    bonus += 1;
}

if (score % 10 === 5) {
    bonus += 2;
}
let finalScore = score + bonus;
console.log(bonus);
console.log(finalScore);


}

bonusScore(["175"])

