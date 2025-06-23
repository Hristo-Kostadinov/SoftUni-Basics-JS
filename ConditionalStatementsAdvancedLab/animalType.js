function animalType (input) {

    let animal = input[0];

    let dog = "mammal";
    let crocodile = "reptile";
    let tortoise = "reptile";
    let snake = "reptile";

    switch (animal) {
        case "dog" :
            console. log("mammal");
            break;
        case "crocodile":
        case "tortoise":
        case "snake" :
            console. log("reptile");
            break;
        default:
            console. log("unknown");
            break;
    }

}
animalType(["snake"])