// var inventory = {
//     eggs: 12,
//     milk: 5,
//     cheese: 10,
//     yogurt: 24 
// };
// console.log(inventory.eggs);
// console.log (inventory.yogurt);
// console.log (inventory.sausage);
// inventory.icecream = 3
// console.log (Object.keys(inventory));
// console.log (Object.values(inventory))
// inventory.bacon = true;
// console.log (Object.keys(inventory));
// delete inventory.eggs;
// console.log(inventory);

// var tweet = {
//     quote: "My M1 Macbook Pro arrived 🤓",
//     time: "5:06AM",
//     date: "June 25, 2022"
// var zoo = {
//     giraffes: 3,
//     zebras: 12,
//     hippos: 2,
// };
// console.log(Object.keys(zoo));
// console.log(Object.values(zoo));
// console.log(zoo.giraffes);
// zoo.pandas = 3;
// zoo.monkey;
// zoo.rhino = 6;
// console.log(Object.keys(zoo));

// var pet = {
//     name: "Kupo",
//     age: "2",
//     breed: "Doberman, Great pyanesse",
//     hobbies: "Chasing the cats and tearing up tennis balls.",
//     dog: true
// };
// function speak() {
//     console.log("Why am I so cute?")
// }

// console.log(pet);
// console.log(pet.name);
// console.log(Object.values(pet));
// console.log(Object.keys(pet));
// console.log(pet.breed)
// pet.speak = speak; 
// console.log(Object.keys(pet));
// pet.speak();
// console.log(Object.values(pet))


// function studentUpdate(student) {
//      return `${student.name} is one of our awesome ${student.program} students, currenlty in module ${student.moduleNumber}.`
//  }
// var melissa = {
//     name: "Melissa",
//     program: "Front End",
//     moduleNumber: 1,
//     alum: false
// }
// // console.log(studentUpdate(melissa));

function studentLog(student){
        return `${student.name} is an aweseom ${student.program} student! They have build the following projects: ${student.project1}, ${student.project2}, and ${student.project3}` 
}

    var allie = {
        name: "Allie",
        program: "Front End",
        module: 1,
        alum: false,
        projects: ["Dog Party", "Number Guesser", "Check Yo Self"]
  }
    console.log(studentLog(allie));
