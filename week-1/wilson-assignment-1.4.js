
/* ============================================ 
; Title: Assignment 1.4
; Author: Timothy Wilson
; Date: 01 Aug 2018
; Modified By: Timothy Wilson
; Description: This program demonstrates the 
; use of Duck Typing. 
;=========================================== */

var header = require('../header.js');
console.log(header.display("Timothy", "Wilson", "wilson-assignment-1.4"));

function Car(model) {
     this.model = model;
}

Car.prototype.start = function() {
console.log("Car added to the racetrack!"); 
};


function Truck(model, year) { 
    this.model = model;
    this.year = year; 
}

Truck.prototype.start = function() {
console.log("Truck added to the racetrack!"); 
};

function Jeep(model, year, color) { 
    this.model = model;
    this.year = year;
    this.color = color;
}

 Jeep.prototype.start = function() { 
 console.log("Jeep added to the racetrack!");
};

var Car = new Car("Pinto");
var Truck = new Truck("Silverado", "Chevy");
var Jeep = new Jeep("Wrangler", "2011", "White");

var racetrack = [];
function driveIt(vehicle) { 
    vehicle.start();
    racetrack.push(vehicle);
}

driveIt(Truck); 
driveIt(Car); 
driveIt(Jeep);

// Display racetrack

console.log("\n-- The following vehicles have been added to the racetrack --"); 

for (var k = 0; k < racetrack.length; k++) {

 console.log(racetrack[k].constructor.name + ": " + racetrack[k].model); }
