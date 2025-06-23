function oldBooks(input) {

    let favoriteBook = input.shift();

    let booksChecked = 0;
    let isBookFound = false;

    while (input.length > 0) {
        let currentBook = input.shift(); // Extract the next book to check

        if (currentBook === favoriteBook) {
            isBookFound = true;
            break;
        }

        booksChecked++;
    }

    if (isBookFound) {
        console.log(`You checked ${booksChecked} books and found it.`);
    } else {
        console.log("The book you search is not here!");
        console.log(`You checked ${booksChecked} books.`);
    }
}
oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"]);