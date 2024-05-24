let userScore = 0;
let compScore = 0;
let userPic;
let compPic;

const choices = document.querySelectorAll(".chooice");
const msg = document.querySelector("#msg");
const uscr = document.querySelector("#user-score");
const cscr = document.querySelector("#comp-score");

const playGame = (uch) => {
  let arr = ["rock", "paper", "scissor"];
  let rand = Math.floor(Math.random() * 3);
  compPic = arr[rand];
  console.log("computer: " + compPic);
  let cch = arr[rand];

  if (uch === "rock") {
    if (uch === "rock" && cch === "rock") {
      msg.textContent = " It's Draw ! ";
      return;
    }
    if (uch === "rock" && cch === "paper") {
      compScore += 1;
      cscr.innerHTML = compScore;
      // console.log('compScore' + compScore);
      msg.textContent = "You loose :< , Computer won !";
    } else {
      userScore += 1;
      uscr.innerHTML = userScore;
      // console.log('userScore' + userScore);
      msg.textContent = "You won :> , Computer loose !";
    }
    return;
  }
  if (uch === "paper") {
    if (uch === "paper" && cch === "paper") {
      msg.textContent = " It's Draw ! ";
      return;
    }
    if (uch === "paper" && cch === "scissor") {
      compScore += 1;
      cscr.innerHTML = compScore;
      // console.log('compScore' + compScore);
      msg.textContent = "You loose :< , Computer won !";
    } else {
      userScore += 1;
      uscr.innerHTML = userScore;
      // console.log('userScore' + userScore);
      msg.textContent = "You won :> , Computer loose !";
    }
    return;
  }
  if (uch === "scissor") {
    if (uch === "scissor" && cch === "scissor") {
      msg.textContent = " It's Draw ! ";
      return;
    }
    if (uch === "scissor" && cch === "rock") {
      compScore += 1;
      cscr.innerHTML = compScore;
      // console.log('compScore' + compScore);
      msg.textContent = "You loose :< , Computer won !";
    } else {
      userScore += 1;
      uscr.innerHTML = userScore;
      // console.log('userScore' + userScore);
      msg.textContent = "You won :> , Computer loose !";
    }
    return;
  }
};
choices.forEach((element) => {
  element.addEventListener("click", (e) => {
    userPic = e.target.id;
    console.log("user :", userPic);
    const userChoice = element.getAttribute("id");
    playGame(userChoice);
  });
});
