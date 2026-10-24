
"use strict";

function outer() {
    console.log("Outer count:", count);

    var count = 5;

    function inner() {
        console.log("Inner count:", count);

        var count = 10;
        console.log("Inner count after assignment:", count);
    }

    inner();

    console.log("Outer count after inner:", count);
}

outer();
