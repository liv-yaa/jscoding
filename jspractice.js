// 2-14-23

// Literal just typing JS 
myVariable = Math.floor(Math.random() * 100);

function guess(g) {
    if (g < myVariable) {
        console.log('eh!')
    }
    else if (g > myVariable) {
        console.log('m3h');
    } else {
        console.log('Yay!');
    }
}

guess(40);