const letters = "abcdefghijklmnopqrstuvwxyz";

let lettersArray = [...letters];

let lettersContainer = document.querySelector(".letters");

lettersArray.forEach((letter) => {
  let span = document.createElement("span");

  span.innerHTML = letter;

  span.className = "letter-box";

  lettersContainer.appendChild(span);
});

const words = {
  programming: [
    "php",
    "javascript",
    "go",
    "scala",
    "fortran",
    "r",
    "mysql",
    "python",
  ],
  movies: [
    "Prestige",
    "Inception",
    "Parasite",
    "Interstellar",
    "Whiplash",
    "Memento",
    "Coco",
    "Up",
  ],
  people: [
    "Albert Einstein",
    "Hitchcock",
    "Alexander",
    "Cleopatra",
    "Mahatma Ghandi",
  ],
  countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"],
};

let allkeys = Object.keys(words);

let randomKey = Math.floor(Math.random() * allkeys.length);

let randomCategory = allkeys[randomKey];

let randomCategoryArr = words[randomCategory];

let randomValueNum = Math.floor(Math.random() * randomCategoryArr.length);

let randomValueName = randomCategoryArr[randomValueNum];

document.querySelector(".game-info .category span").innerHTML = randomCategory;

let letterGuessContainer = document.querySelector(".letter-guess");

let letterGuessSpace = [...randomValueName];

letterGuessSpace.map((letter) => {
  let emptySpan = document.createElement("span");
  emptySpan.className = "letter"
  if (letter === " ") {
    emptySpan.className = "with-space";
  }
  letterGuessContainer.appendChild(emptySpan);
});

let worngAttemps = 0;
let trueAttepms = 1;

let draw = document.querySelector(".hangman-draw");

let letterEvent = document.querySelectorAll(".letters span");

let checkLetters = document.querySelectorAll(".letter-guess .letter")

let letterValue = ""



letterEvent.forEach((ele) => {
  ele.addEventListener("click", (ele) => {
    let status = false;

    ele.target.classList.add("clicked");

    let clickdLetter = ele.target.innerHTML;

    letterGuessSpace.map((letter, index) => {
      letter = letter.toLowerCase();

      if (letter == clickdLetter) {
        ele.target.classList.add("true");
        let box = document.querySelectorAll(".letter-guess span");
        box[index].innerHTML = ele.target.innerHTML;
        status = true;
      }
    });
    if (status == false) {
      worngAttemps++;
      draw.classList.add(`wrong-${worngAttemps}`);
      if (worngAttemps == 8) {
        lettersContainer.classList.add("finshed");
        endGame();
      }
    }
    checkLetters.forEach((check)=>{
      letterValue += check.innerHTML
    })
    if (letterValue.length == randomValueName.length){
      won()
    }else{
      letterValue= "";
    }
  });
});















function endGame() {
  let gameOver = document.createElement("div");

  gameOver.innerHTML = `<span>Game Over You are Noob , The Word Is <span> ${randomValueName.toUpperCase()}</span></span>`;
  gameOver.className = "game-over";
  document.body.appendChild(gameOver);

  let restart = document.createElement("button");
  restart.innerHTML = "Try Again Noob ";
  restart.addEventListener("click", () => {
    window.location.reload();
  });
  gameOver.appendChild(restart);

  let gameOverContainer = document.createElement("div");
  gameOverContainer.className = "game-over-container";
  document.body.appendChild(gameOverContainer);
}

function won() {
  let won = document.createElement("div");

  won.innerHTML = `Congratulation, You'r Won!`;
  won.className = "won";
  document.body.appendChild(won);

  let restart = document.createElement("button");
  restart.innerHTML = "Try Again!";
  restart.addEventListener("click", () => {
    window.location.reload();
  });
  won.appendChild(restart);

  let gameOverContainer = document.createElement("div");
  gameOverContainer.className = "game-over-container";
  document.body.appendChild(gameOverContainer);
}


