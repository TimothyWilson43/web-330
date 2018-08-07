
/* ============================================ 
; Title: Assignment 2.2
; Author: Timothy Wilson
; Date: 01 Aug 2018
; Modified By: Timothy Wilson
; Description: This program demonstrates the 
; use of Prototypes. 
;=========================================== */

var header = require('../header.js');
console.log(header.display("Timothy", "Wilson", "wilson-assignment-2.2"));

var person = {

    getAge: function () 
    {
        return this.age
    }};
    
    
    var dave = Object.create(person, {
    
    "age": {
    "value": "33",
    },
    "fullName": {
        "value": "Dave Wilson"
    }
    });

    dave.getAge(); 

    console.log("The person's name is: '%s'", dave.fullName);
    console.log("The person's age is: '%s'", dave.age);