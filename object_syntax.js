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

var pet = {
    name: "Kupo",
    age: "2",
    breed: "Doberman, Great pyanesse",
    hobbies: "Chasing the cats and tearing up tennis balls.",
    dog: true
}
function speak() {
    console.log("Why am I so cute?");
}
speak()
console.log(pet)

var user3 = {
    name: "Oscar",
    age: 7,
    breed: "Shih-tzu, mostly",
    hobbies: ["Following Sodie around", "Peeing", "Carrying stuffed animals around the house"],
  }
  
  // 1. Access the value of user3
  console.log(user3)
  console.log(Object.values(user3))
  // // // 2. Access the value of the name of user3
  console.log(user3.name)
  
  // // // 3. Add a new property of your choosing
  user3.weight = "10lbs";
  // // // 4. Check the value of user3 again
  console.log(user3);
  // // // 5. Change the value of the name of user3
  user3.name ="Sebastian"
  // // // 6. Check the value of user3
  console.log(user3)
  // // // 7. Declare a method on user3 that logs "Why am I so cute?" to the console
  function speak() {
    console.log ("Why am I so cute?");
  }
  speak()
  // // // 8. Check the value of user3. Do you see your method?
  console.log(Object.values(user3))
  // // // 9. Use user3 to log "Why am I so cute?"
  console.log(speak());

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


// var allie = {
//     name: "Allie",
//     program: "Front End",
//     module: 1,
//     alum: false,
//     projects: ["Dog Party", "Number Guesser", "Check Yo Self", "Mythical Creatures"],
// };


// function studentLog(student){
//     var statement = `${student.name} is an awesome ${student.program} student! They have build the following projects: `;

//     for(var j = 0; j < allie.projects.length; j++) {
//         if(j === allie.projects.length - 1) {
//             statement += `and ${allie.projects[j]}.`;
//         } else {
//             statement += `${allie.projects[j]}, `;
//         }
//     }

//     return statement;
// }

//     console.log(studentLog(allie));

// function printGreeting(senshi) {
//     console.log(`Hello, ${senshi}!`);
// }
// printGreeting("Makoto");

// function multiply(num1, num2) {
//     var mul = num1 * num2;
//     console.log(mul);
// }
// multiply(2, 2);

// var sailorJupiter = {
//     name: "Makoto",
//     birthday: "December 10th",
//     age: 27,
//     attacks: ["Jupiter Thunder Dragon", "Flower hurricane", "Sparkling wide pressue",]
// };
// console.log(sailorJupiter);

// function senshi(senshi1) {
//     var statement = `${senshi1.name} is a part of the Sailor Senshi. Her birthday is ${senshi1.birthday}, she is age ${senshi1.age} and her main attacks are ${senshi1.attacks}.`;

//     for (var i = 0; i < senshi1.attacks.length; i++) {
//         if (i === sailorJupiter.attacks.length - 1) {
//             statement += `and ${sailorJupiter.attacks[i]}.`;
//         } else {
//             statement += `${sailorJupiter.attacks[i]}, `;
//         }
//     }
//     return statement;
// }
// console.log(senshi(sailorJupiter));

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

// var burrito = {
//   tortilla: 'wheat',
//   protein: 'sofritas',
//   cheese: false,
//   rice: 'brown',
//   beans: 'black',
//   guacamole: false,
//   spiciness: 1
// }
// function describeBurrito(burrito) {
//   var statement = `A ${burrito.protein} on a ${burrito.tortilla} tortilla, with ${burrito.beans} bean, ${burrito.rice} rice, and its  spiciness is a level ${burrito.spiciness}, `
  
//     if (burrito.spiciness === 3) { 
//         statement += "very very very spicy.";
//     } else if (burrito.spiciness === 2) {
//        statement += "meduim spicy."; 
//     } else if (burrito.spiciness === 1) {
//       statement += "lightly spicy."
// } else {
//         statement += "not spicy.";
//     }

// return statement; 
// }
// console.log(describeBurrito(burrito));

// var burrito = {
//     tortilla: ["white or whole wheat"],
//     protein: ["beef, chicken, or pork"],
//     cheese: "queso blanco or no cheese",
//     rice: ["white or brown"],
//     beans: ["black or pinto"],
//     guac: false,
//     spiciness: 3
// }
// function describeBurrito(burrito) {
//     var statement = `A delicious ${burrito.protein} burrito, with a ${burrito.tortilla} tortilla, with ${burrito.cheese}, ${burrito.rice} rice, and ${burrito.beans} beans and a spiciness of ${burrito.spiciness}, `
//         if (burrito.spiciness === 3) {
//             statement += "very very very spicy.";
//         } else if (burrito.spiciness === 2) {
//             statement += "very very spicy"; 
//         } else if (burrito.spiciness === 1) {
//             statement += "lightly spicy.";
//         } else {
//             statement += "not spicy.";
//         }
 
//  return statement;
// }
// console.log(describeBurrito(burrito));

// 1. MAKING AN OBJECT
// Create a variable called burrito whose value is an object
// var burrito = {
//   tortilla: ["white", "whole wheat"],
//   protein: ["beef", "chicken", "pork"],
//   cheese: true,
//   rice: ["white", "brown", "undefined"],
//   beans: ["black", "pinto", "undefined"],
//   guac: false,
//   spicyness: 
// };

// // The object should have the following keys: 
// // tortilla, whose value is a string of "white" or "whole wheat"
// // protein, whose value is a string of whatever protein you like in your burrito
// // cheese, whose value is a boolean
// // rice, whose value is a string of "white" or "brown" OR else undefined
// // beans, whose value is a string of "black" or "pinto" OR else undefined
// // guacamole, whose value is a boolean 
// // spiciness, whose value is a number between 0 and 3 inclusive



// // 2. ACCESSING VALUES
// // Use console.log() to print the whole burrito object to the console
// console.log("------", burrito);
// // Use console.log() and dot notation to print the cheese boolean value to the console
// console.log("Cheese", burrito.cheese);
// // Use console.log() to print the protein string to the console
// console.log("------", burrito.protein);


// // 3. UPDATING VALUES
// // Use dot notation and the assignment operator to CHANGE the protein string of the burrito object 
// burrito.protein.push("Veggie") 
// console.log("------", burrito);
// // Update the spiciness value of the burrito object 
// burrito.spicyness = 2 
// console.log("-------", burrito);

// // 4. CREATE YOUR OWN
// // Create 5 more objects 
// // Idea: make an object describing a character from the last show you devoured
// // Idea: make an object describing your pet
// // Idea: make an object describing a grocery list
// var character = {
//   hair: "blonde",
//   eyes: "blue",
//   height: "5'4",
//   weight: "125 lbs"
//   senshi: true
// }
// var snickers = {
//   cat: true,
//   weight: "10lbs",
//   color: "orange, white and black"
// }

// var groceryList = {
//   eggs: "1 dozen",
//   balsamic: 1,
//   peaches: 5,
//   tomato: 2,
//   salad: 1,
//   cucumner: 2
// }

// var car = {
//   make: "Toyota",
//   mode: "4Runner",
//   color: "blue",
//   year: 2019
// }

// var parkingLot = {
//   toyotas: 39,
//   hondas: 25,
//   tesla: 16,
//   chevorlets: 35,
//   fords: 23,
//   kias: 2, 
//   jaguars: 1
// }
  