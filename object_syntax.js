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
//     moduleNumber: 1
//     alum: false
// }
// // console.log(studentUpdate(melissa));


var allie = {
    name: "Allie",
    program: "Front End",
    module: 1,
    alum: false,
    projects: ["Dog Party", "Number Guesser", "Check Yo Self", "Mythical Creatures"],
};


function studentLog(student){
    var statement = `${student.name} is an awesome ${student.program} student! They have build the following projects: `;

    for(var j = 0; j < allie.projects.length; j++) {
        if(j === allie.projects.length - 1) {
            statement += `and ${allie.projects[j]}.`;
        } else {
            statement += `${allie.projects[j]}, `;
        }
    }

    return statement;
}

    console.log(studentLog(allie));

// function printGreeting(senshi) {
//     console.log(`Hello, ${senshi}!`);
// }
// printGreeting("Makoto");

// function multiply(num1, num2) {
//     var mul = num1 * num2;
//     console.log(mul);
// }
// multiply(2, 2);

var sailorJupiter = {
    name: "Makoto",
    birthday: "December 10th",
    age: 27,
    attacks: ["Jupiter Thunder Dragon", "Flower hurricane", "Sparkling wide pressue",]
};
// console.log(sailorJupiter);

function senshi(senshi1) {
    var statement = `${senshi1.name} is a part of the Sailor Senshi. Her birthday is ${senshi1.birthday}, she is age ${senshi1.age} and her main attacks are ${senshi1.attacks}.`;

    // for (var i = 0; i < senshi1.attacks.length; i++) {
    //     if (i === sailorJupiter.attacks.length - 1) {
    //         statement += `and ${sailorJupiter.attacks[i]}.`;
    //     } else {
    //         statement += `${sailorJupiter.attacks[i]}, `;
    //     }
    // }
    return statement;
}
console.log(senshi(sailorJupiter));

// var sailorMoon = {
//     name: "Usako",
//     age: 32,
//     attacks: ["Moon Tiara Action", "Moon Healing Escalation", "Moon Spiral Heartache", "Moon Gorgeous Meditation", "Starlight Honeymoon Therapy Kiss"]
// };
// function senshi(senshi2) {
//     var statement =`${senshi2.name} is the leader of the Sailor Senshi. She is ${senshi2.age} and some of her attacks are `;
//     for (var i = 0; i <senshi2.attacks.length; i++) {
//         if (i === sailorMoon.attacks.length -1) {
//             statement += `and ${sailorMoon.attacks[i]}.`;
//         } else {
//             statement += `${sailorMoon.attacks[i]}, `;
//         }
//     }
//     return statement;
// }
// console.log(senshi(sailorMoon));

// var pets = {
//     cats: 4,
//     dogs: 3,
//     fish: 14,
//     hedgehog: 2
// }
// console.log(pets.cats);
// console.log(Object.keys(pets));
// console.log(Object.values(pets));
// pets.hamster = 5; 
// console.log(pets);
// delete pets["fish"];
// console.log(Object.keys(pets));
// pets.mice = 6;
// console.log(Object.keys(pets));
// pets.cats = 5 
// console.log(pets);