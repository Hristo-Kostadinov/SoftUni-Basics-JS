// function weekendOrWorkingDay (input) {
//     let day = input[0];
//     switch (day) {
//         case "Monday":
//         case "Tuesday":
//         case "Wednesday":
//         case "Thursday":
//         case "Friday": console.log("Working day");
//         break;
//         case "Saturday":
//         case "Sunday": console.log("Weekend");
//         break;
//         default: console.log(Error);
//         break;
//     }
   
// }
// weekendOrWorkingDay(["April"])



function weekendOrWorkingDay(input) {
    let extra = 'Error';

    let day = input[0];
    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            console.log("Working day");
            break;
        case "Saturday":
        case "Sunday":
            console.log("Weekend");
            break;
        default:
            console.log(extra)
            break;
    }
}

weekendOrWorkingDay(["April"])