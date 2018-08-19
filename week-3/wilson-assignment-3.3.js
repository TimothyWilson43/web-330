var header = require('../header.js');
console.log(header.display("Timothy", "Wilson", "wilson-assignment-2.2"));


/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Same database instance? true

*/

 // start program

var DatabaseSingleton = (function () {
    var instance;
    function createInstance() {
        var postgresDatabase = new Object("Database instance initialized!");
        return postgresDatabase;
    }
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();

function DatabaseSingletonTest(){
    var oracle = DatabaseSingleton.getInstance();
    var postgres = DatabaseSingleton.getInstance();

    console.log("Same database instance? %s", oracle === postgres);
}
DatabaseSingletonTest();

// end program