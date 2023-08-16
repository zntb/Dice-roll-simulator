const buttonEl = document.getElementById("roll-button");

const diceEl = document.getElementById("dice");

const rollHistoryEl = document.getElementById("roll-history");

let historyList = [];

function rollDice() {
    const rollResult = Math.floor(Math.random() * 6) + 1;
    const diceFace = getDiceFace(rollResult);
    diceEl.innerHTML = diceFace;
    historyList.push(rollResult);
    updateRollHistory();
}

function updateRollHistory() {
    rollHistoryEl.innerHTML = "";
    for (let i = 0; i < historyList.length; i++) { 
        const listItem = document.createElement("li");
        listItem.innerHTML = `Roll ${historyList.length - i}: <span>${getDiceFace(historyList[historyList.length - 1 - i])}</span>`;
        rollHistoryEl.appendChild(listItem); 
    }
}


function getDiceFace(rollResult) {
    switch (rollResult) {
        case 1:
            return `<img  id="dice-image" src="images/roll_1.png" alt="1">`;
        case 2:
            return `<img id="dice-image" src="images/roll_2.png" alt="2">`;
        case 3:
            return `<img id="dice-image" src="images/roll_3.png" alt="3">`;
        case 4:
            return `<img id="dice-image" src="images/roll_4.png" alt="4">`;
        case 5:
            return `<img id="dice-image" src="images/roll_5.png" alt="5">`;
        case 6:
            return `<img id="dice-image" src="images/roll_6.png" alt="6">`;
        default:
            return "";
    }
}


buttonEl.addEventListener("click", () => {
    diceEl.classList.add("roll-animation");
    setTimeout(() => {
      diceEl.classList.remove("roll-animation");
      rollDice();
    }, 470);
  });