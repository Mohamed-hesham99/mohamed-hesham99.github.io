let beachDoorPath =
    "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
let spaceDoorPath =
    "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
let botDoorPath =
    "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
let closedDoorPath =
    "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;
var startButton = document.getElementById("start");
const isBot = (door) => {
    if (door.src === botDoorPath) {
        return true;
    } else return false;
};
const isClicked = (door) => {
    if (door.src === closedDoorPath) {
        return true;
    } else {
        return false;
    }
};
const playDoor = (door) => {
    numClosedDoors--;
    if (numClosedDoors === 0) {
        gameOver("win");
    } else if (isBot(door)) {
        gameOver();
    }
};
const randomChoreDoorGenerator = () => {
    let choreDoor = Math.floor(Math.random() * numClosedDoors);
    if (choreDoor === 0) {
        openDoor1 = botDoorPath;
        openDoor2 = spaceDoorPath;
        openDoor3 = beachDoorPath;
    } else if (choreDoor === 1) {
        openDoor2 = botDoorPath;
        openDoor1 = spaceDoorPath;
        openDoor3 = beachDoorPath;
    } else {
        openDoor3 = botDoorPath;
        openDoor1 = spaceDoorPath;
        openDoor2 = beachDoorPath;
    }
};

let doorImage1 = document.getElementById("door1");
doorImage1.onclick = () => {
    if (isClicked(doorImage1) && currentlyPlaying) {
        doorImage1.src = openDoor1;
        playDoor(doorImage1);
    }
};
let doorImage2 = document.getElementById("door2");
doorImage2.onclick = () => {
    if (isClicked(doorImage2) && currentlyPlaying) {
        doorImage2.src = openDoor2;
        playDoor(doorImage2);
    }
};
let doorImage3 = document.getElementById("door3");
doorImage3.onclick = () => {
    if (isClicked(doorImage3) && currentlyPlaying) {
        doorImage3.src = openDoor3;
        playDoor(doorImage3);
    }
};
const startRound = () => {
    numClosedDoors = 3;
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    startButton.innerHTML = "Good luck!";
    currentlyPlaying = true;
    randomChoreDoorGenerator();
};
startButton.onclick = () => {
    if (currentlyPlaying === false) startRound();
};
const gameOver = (status) => {
    if (status === "win") {
        startButton.innerHTML = "You win! Play again?";
    } else {
        startButton.innerHTML = "Game Over! Play again?";
    }
    currentlyPlaying = false;
};
startRound();
