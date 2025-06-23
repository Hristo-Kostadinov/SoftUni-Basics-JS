function vacationBooksList (input) {

 let amountOfPages = Number(input[0]);
 let pagesPerHour = Number(input[1]);
 let daysToFinish = Number(input[2]);

 let hoursPerDay = amountOfPages / pagesPerHour / daysToFinish;

 console.log(hoursPerDay);

}
vacationBooksList(["212 ",

"20 ",

"2 "])