let rps = ["🪨", "🗞️", "✂️"];
let computer = document.getElementById("computer");
let result = document.getElementById("result");
let replay = document.getElementById("replay");
let playerScore = document.getElementById("playerScore");
let computerScore = document.getElementById("computerScore");
let draw = document.getElementById("draw");

function randInt() { return Math.floor(Math.random() * (0 - 3)) + 3 }

function random_choice() { computer.innerText = rps[randInt()] }

let animation = setInterval(random_choice, 200);

let user_clicked = false;


function userChoice(user) {
    clearInterval(animation);
    if (user_clicked == false) {
        let computerChoice = rps[randInt()];
        computer.innerText = computerChoice;

        if (user == computerChoice) {
            result.innerText = "😑 Match Draw 😑";
            draw.innerText++;
        }
        else if ((user == "🪨" && computerChoice == "🗞️") || (user == "🗞️" && computerChoice == "✂️") || (user == "✂️" && computerChoice == "🪨")) {
            result.innerText = "😞 Computer Wins 😞";
            computerScore.innerText ++
        }
        else if ((user == "🗞️" && computerChoice == "🪨") || (user == "✂️" && computerChoice == "🗞️") || (user == "🪨" && computerChoice == "✂️")) {
            result.innerText = "🥳 You Wins 🥳";
            playerScore.innerText++;

        }
    }
    result.style.display = "";
    replay.style.display = "block";
    user_clicked = true;

}

replay.addEventListener("click", () => {
    animation = setInterval(random_choice, 200);
    user_clicked = false;
    result.style.display = "none";
    replay.style.display = "none";
})








