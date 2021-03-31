function full() {
    if (batteryLevel < 3) {
        batteryLevel++;
    }
    batteryColor();
    batteryText();
}

function empty() {
    if (batteryLevel > 0) {
        batteryLevel--;
    }
    batteryColor();
    batteryText();
}

function batteryColor() {
    if (batteryLevel === 0) {
        levelOne.setAttribute('style', 'background-color: white');
        levelTwo.setAttribute('style', 'background-color: white');
        levelThree.setAttribute('style', 'background-color: white');
    } else if (batteryLevel === 1) {
        levelOne.setAttribute('style', 'background-color: red');
        levelTwo.setAttribute('style', 'background-color: white');
        levelThree.setAttribute('style', 'background-color: white');
    } else if (batteryLevel === 2) {
        levelOne.setAttribute('style', 'background-color: orange');
        levelTwo.setAttribute('style', 'background-color: orange');
        levelThree.setAttribute('style', 'background-color: white');
    } else if (batteryLevel === 3) {
        levelOne.setAttribute('style', 'background-color: green');
        levelTwo.setAttribute('style', 'background-color: green');
        levelThree.setAttribute('style', 'background-color: green');
    }

}

function batteryText() {
    if (batteryLevel === 0) {
        batteryShow.innerHTML = "Batary: %0";
    } else if (batteryLevel === 1) {
        batteryShow.innerHTML = "Batary: %33";
    } else if (batteryLevel === 2) {
        batteryShow.innerHTML = "Batary: %66";
    } else if (batteryLevel === 3) {
        batteryShow.innerHTML = "Batary: %100";
    }
}

let batteryLevel = 0;
const batteryOne = document.querySelector("#batteryOne");
const batteryTwo = document.querySelector("#batteryTwo");
const batteryThree = document.querySelector("#batteryThree");
const batteryShow = document.querySelector("#batteryShow");


document.getElementById("raise").addEventListener("click", full);
document.getElementById("minus").addEventListener("click", empty);