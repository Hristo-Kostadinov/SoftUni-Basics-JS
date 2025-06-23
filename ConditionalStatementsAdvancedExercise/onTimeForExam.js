function onTimeForExam (input) {
    let hoursExam = Number(input[0]);
    let minExam = Number(input[1]);
    let arriveHours = Number(input[2]);
    let arriveMin = Number(input[3]);

    let timeExam = hoursExam * 60 + minExam;
    let timeArrive = arriveHours * 60 + arriveMin;

    if (timeExam >= timeArrive && timeExam - timeArrive <= 30) {
        console.log("On time");
        let diff = timeExam - timeArrive;
        if (diff !== 0) {
            console.log(`${diff} minutes before the start`);
        }
    } else if (timeExam < timeArrive) {
        console.log("Late");
        let diff = timeArrive - timeExam;
        let hours = Math.floor(diff / 60);
        let min = diff % 60;
        if (hours > 0) {
            if (min < 10) {
                console.log(`${hours}:0${min} hours after the start`);
            } else {
                console.log(`${hours}:${min} hours after the start`);
            }
        } else {
            console.log(`${min} minutes after the start`);
        }
    } else {
        console.log("Early");
        let diff = Math.abs(timeArrive - timeExam);
        let hours = Math.floor(diff / 60);
        let min = diff % 60;
        if (diff >= 60) {
            if (min < 10) {
                console.log(`${hours}:0${min} hours before the start`);
            } else {
                console.log(`${hours}:${min} hours before the start`);
            }
        } else {
            console.log(`${min} minutes before the start`);
        }
    }
}
onTimeForExam(["9","00","8","29"])