function trekkingManiaSkip(input) {
    let musalaClimberGroups = 0;
    let montblancClimberGroups = 0;
    let kilimanjaroClimberGroups = 0;
    let k2ClimberGroups = 0;
    let everestClimberGroups = 0;

    let musalaClimbers = 0;
    let montblancClimbers = 0;
    let kilimanjaroClimbers = 0;
    let k2Climbers = 0;
    let everestClimbers = 0;

    let totalPeople = 0;

    // Start the loop from index 1 to ignore the first input every time
    for (let i = 1; i < input.length; i++) {
        let amountOfPeople = parseInt(input[i]);

        totalPeople += amountOfPeople;

        if (amountOfPeople <= 5) {
            musalaClimberGroups += 1;
            musalaClimbers += amountOfPeople;
        } else if (amountOfPeople <= 12) {
            montblancClimberGroups += 1;
            montblancClimbers += amountOfPeople;
        } else if (amountOfPeople <= 25) {
            kilimanjaroClimberGroups += 1;
            kilimanjaroClimbers += amountOfPeople;
        } else if (amountOfPeople <= 40) {
            k2ClimberGroups += 1;
            k2Climbers += amountOfPeople;
        } else if (amountOfPeople > 40) {
            everestClimberGroups += 1;
            everestClimbers += amountOfPeople;
        } 
    } 

    let musalaClimbersPercent = (musalaClimbers / totalPeople * 100);
    let montblancClimbersPercent = (montblancClimbers / totalPeople * 100);
    let kilimanjaroClimbersPercent = (kilimanjaroClimbers / totalPeople * 100);
    let k2ClimbersPercent = (k2Climbers / totalPeople * 100);
    let everestClimbersPercent = (everestClimbers / totalPeople * 100);

    console.log(`${musalaClimbersPercent.toFixed(2)}%`);
    console.log(`${montblancClimbersPercent.toFixed(2)}%`);
    console.log(`${kilimanjaroClimbersPercent.toFixed(2)}%`);
    console.log(`${k2ClimbersPercent.toFixed(2)}%`);
    console.log(`${everestClimbersPercent.toFixed(2)}%`);
}
trekkingManiaSkip(["5","25","41","31","250","6"])