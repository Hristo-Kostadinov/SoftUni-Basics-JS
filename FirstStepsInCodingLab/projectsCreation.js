function projectsCreation (input){

let name = input[0];
let ammontOfProjects= Number(input[1]);
let time= ammontOfProjects * 3;

console.log("The architect " + name + ' will need '+ time + ' hours to complete '+ ammontOfProjects + ' project/s.');

}

projectsCreation(["George ","4 "])