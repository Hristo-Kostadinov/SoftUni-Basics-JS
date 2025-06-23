function cinemaTicket (input) {
    let day = input[0];
    let price = 0;

    if (day == "Monday" || day == "Tuesday" || day == "Friday") {
        price += 12;
    } else if (day == "Wednesday" || day == "Thursday") {
        price += 14;
    } else if (day == "Saturday" || day == "Sunday") {
        price += 16;
    }
        
    console.log(price);

}
cinemaTicket(["Saturday"])



// function cinemaTicket (input) {
// let day = input[0];
// let price = 0;

// switch (day) {
//     case "Monday":
//     case "Tuesday":
//     case "Friday":
//         console.log('12');
//         break;
//     case "Wednesday":
//     case "Thursday":
//         console.log('14');
//         break;
//     case "Saturday":
//     case "Sunday":
//         console.log('16');
//         break;

// }

// }
// cinemaTicket(["Saturday"])