// All album data stored in one object
const albums = {
    greenday: {
        title: "Dookie (1994)",
        fact: "Dookie was recorded in just three weeks and cost around $90,000 to make. It went on to sell over 20 million copies worldwide and is credited with bringing punk rock back to mainstream radio."
    },
    blink182: {
        title: "Enema of the State (1999)",
        fact: "The nurse on the cover is Janine Lindemulder, a well-known figure at the time. The album contains 'What's My Age Again?' — the band's first Top 40 hit in the US."
    },
    nodoubt: {
        title: "Tragic Kingdom (1995)",
        fact: "Tragic Kingdom took nearly four years to make and was rejected by multiple labels. The album's title is a sarcastic nickname for Anaheim, California, where the band grew up near Disneyland."
    }
};

function showInfo(albumKey) {
    // Look up the album data
    const album = albums[albumKey];

    // Put the data into the info panel
    document.getElementById('info-title').textContent = album.title;
    document.getElementById('info-fact').textContent = album.fact;

    // Make the info panel visible
    document.getElementById('info-panel').style.display = 'block';

    // Remove the 'selected' class from all albums
    const allAlbums = document.querySelectorAll('.album');
    allAlbums.forEach(function (el) {
        el.classList.remove('selected');
    });

    // Add 'selected' to the clicked album
    event.currentTarget.classList.add('selected');
}


// Primitive types
let num = 42; // number
let str = "hello"; // string
let bool = true; // boolean
let nothing = null; // null
let undef = undefined; // undefined


let num1 = 5
let num2 = 50

let string1 = "Chris"
let string2 = "the instructor"


console.log('adding numbers', num1 + num2)

console.log('adding strings', string1 + ' ' + string2)

console.log(`The instructor's name is ${string1} and he is ${num1} years old.`)

// Creating an object
const user = {
  name: "Ada Lovelace",
  age: 36,
  active: true
};

console.log(user.name)
console.log(`The user's name is ${user.name} and they are ${user.age} years old.`)


const arrayOfNames = ["Alice", "Bob", "Charlie"];


console.log(arrayOfNames[1]) // Bob

arrayOfNames.forEach(function(name) {
    console.log('I AM IN THE LOOP')
    console.log(name);
    // append a div to the body with the name
    const div = document.createElement('div');
    div.textContent = name;
    document.body.appendChild(div);
});


const arrayOfObjects = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
]


console.log(arrayOfObjects[0].age) //30