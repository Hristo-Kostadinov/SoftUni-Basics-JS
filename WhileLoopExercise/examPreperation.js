function examPreparation(input) {
    let badGradesLimit = Number(input.shift());
    let totalProblems = 0;
    let solvedProblems = 0;
    let totalGrade = 0;
    let lastProblem = "";
    let badGradesCount = 0;

    while (badGradesCount < badGradesLimit) {
        let problemName = input.shift();
        if (problemName === "Enough") {
            break;
        }

        let grade = Number(input.shift());
        totalProblems++;
        totalGrade += grade;
        lastProblem = problemName;

        if (grade <= 4) {
            badGradesCount++;
        } else {
            solvedProblems++;
        }
    }

    if (badGradesCount === badGradesLimit) {
        console.log(`You need a break, ${badGradesLimit} poor grades.`);
    } else {
        console.log(`Average score: ${(totalGrade / totalProblems).toFixed(2)}`);
        console.log(`Number of problems: ${totalProblems}`);
        console.log(`Last problem: ${lastProblem}`);
    }
}

examPreparation(["3", "Money", "6", "Story", "4", "Movie", "5", "Enough"]);