/* ============================================ 
; Title: Assignment 1.3
; Author: Timothy Wilson
; Date: 31 July 2018
; Modified By: Timothy Wilson
; Description: This program demonstrates the 
; class refresher .
;=========================================== */

var header = require('../header.js');
console.log(header.display("Timothy", "Wilson", "wilson-assignment-1.3"));
/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 -- DISPLAYING CELL PHONE DETAILS --
 Manufacturer: <manufacturer>
 Model: <model>
 Color: <color>
 Price: <price>


*/

// start program

function CellPhone(manufacturer, model, color, price)
{
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.price = price;

    this.getPrice = function()
    {
        return this.price;
    }

    this.getModel = function()
    {
        return this.model;
    }

    this.getDetails = function()
    {
        return "Manufacturer: " + this.manufacturer + "\nModel: " + this.getModel() + "\nColor: " + this.color + "\nPrice: " + this.getPrice()
    }

}

var iPhone = new CellPhone("Apple", "iPhone 6", "Black", "$300.00")
console.log("--Displaying Cell Phone Details--")
console.log(iPhone.getDetails());




// end program