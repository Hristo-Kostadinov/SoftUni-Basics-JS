function swimingRecord(input) {
 
    let worldRecordInSec = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeForMeterInSec = Number(input[2]);
 
    let totalTimeInSec = distanceInMeters * timeForMeterInSec;
    let delayTime = Math.floor(distanceInMeters / 15) * 12.5;
 
    let timePlusDelay = totalTimeInSec + delayTime;
 
    if (timePlusDelay < worldRecordInSec) {
        console.log(`Yes, he succeeded! The new world record is ${timePlusDelay.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(timePlusDelay - worldRecordInSec).toFixed(2)} seconds slower.`);
    }
 
}
swimingRecord(["10464",
    "1500",
    "20"]);
 
 
 