
// Linear Growth Example
function exampleLinear(n) {
    for (var i=0; i<n; i++)     {
        console.log(i);
    }
}

// Quadratic Example
function exampleQuadratic(n) {
    for (var i = 0; i < n; i++) {
        console.log(i)
        for (var j = i; j < n; j++) {
            console.log(j)
        }
    }
}

// Linear cubic quadratic
function exampleCubic(n) {
    for (var i = 0; i < n; i++) {
        console.log(i);
        for (var j = i; j < n; j++) {
            console.log(j);
            for (var k = j; j < n; j++){
                console.log(k);
            }

        }
    }
}




