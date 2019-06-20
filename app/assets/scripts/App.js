
// var paddy = {
//     name: "Paddy",
//     favouriteColor: "red",
//     greet: function() {
//         console.log("Hello, my name is " + paddy.name + " and my fav color is " + paddy.favouriteColor + ".  ");
//     }
// }

// paddy.greet();



// Constructor
function Person(fullName, Color) {

    this.name = fullName;
    this.favColor = Color
    this.greet = function() {
        console.log("hello, my name is " + this.name + " and my favourite color is" + this.favColor +".");
    }


}

var paddy = new Person("Paddy Griffin", "red");
paddy.greet();


var kate = new Person("Kate Griffin", "pink");
kate.greet();