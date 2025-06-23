function passwordGuess (input) {

let code = input[0];

if (code == "s3cr3t!P@ssw0rd") {
    console.log("Welcome");
} else {
    console.log("Wrong password!");
}

}

passwordGuess(["s3cr3t!P@ssw0rd"])