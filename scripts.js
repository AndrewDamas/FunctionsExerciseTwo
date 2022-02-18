let character = 0;
let direction = "E";

function moveForward(distance) {
    if (direction === "E") {
        return character = character + distance;
    } else if (direction === "W") {
        return character = character - distance;
    }
}

function moveBackward(distance) {
    if (direction === "E") {
        return character = character - distance;
    } else if (direction === "W") {
        return character = character + distance;
    }
}

function turnAround() {
    if (direction === "E") {
        direction = "W";
    } else {
        direction = "E";
    }
}

function printLocation() {
    console.log(character);
}

moveForward(5);
moveBackward(3);
printLocation();
turnAround();
moveForward(10);
moveBackward(5);
printLocation();
