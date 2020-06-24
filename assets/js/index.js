// variables
const container = document.querySelector(".cont");
const contButtonYes = document.getElementById("START-GAME");
const contMessage = document.querySelector(".cont-text");

// listeners
contButtonYes.addEventListener("click", game);

// functions
function createButton(buttonText, color) {
    var newButton = document.createElement("button");
    if (color === "normal") {
        newButton.setAttribute("class", "normal-button")
    } else if (color === "red") {
        newButton.setAttribute("class", "red-button")
    } else if (color === "green") {
        newButton.setAttribute("class", "green-button");
    }
    newButton.setAttribute("id", buttonText);
    newButton.innerHTML = buttonText;
    container.appendChild(newButton);
}

function reloadPage() {
    location.reload();
}

// game
function game() {
    contButtonYes.remove();
    contMessage.innerHTML = "Very well. You are in the middle of a room with two doors leading to somewhere. Pick one.";

    createButton("LEFT", "normal");
    createButton("RIGHT", "normal");

    document.getElementById("LEFT").addEventListener("click", function () {
        document.getElementById("LEFT").remove();
        document.getElementById("RIGHT").remove();
        contMessage.innerHTML = "Wrong door. You died from falling into a hole.";
        createButton("RETRY", "red");
        document.getElementById("RETRY").addEventListener("click", reloadPage);
    });

    document.getElementById("RIGHT").addEventListener("click", function () {
        document.getElementById("LEFT").remove();
        document.getElementById("RIGHT").remove();
        contMessage.innerHTML = "You arrive in a pink room. There's a phone on a table. Do you try to call someone?";
        createButton("YES", "green");
        createButton("NO", "red");
        document.getElementById("YES").addEventListener("click", function () {
            document.getElementById("YES").remove();
            document.getElementById("NO").remove();
            contMessage.innerHTML = "Bad luck. The phone doesn't work. Ok. Let's move on. You move towards the other end of the room. There are two doors again.";
        });
        document.getElementById("NO").addEventListener("click", function () {
            document.getElementById("YES").remove();
            document.getElementById("NO").remove();
            contMessage.innerHTML = "Ok. Let's move on. You move towards the other end of the room. There are two doors again.";
        });
    });
}