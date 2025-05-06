const choices = document.querySelectorAll('.choice');
const userImage = document.getElementById('user-image');
const computerImage = document.getElementById('computer-image');
const message = document.getElementById('message');
const scoreDisplay = document.getElementById('score');
const resetBtn = document.getElementById('reset');

let userScore = 0;
let computerScore = 0;

const imageMap = {
  rock: "images/rock.png",
  paper: "images/paper.png",
  scissors: "images/scissors.png"
};

choices.forEach(choice => {
  choice.addEventListener('click', () => {
    const userChoice = choice.id;
    const computerChoice = getComputerChoice();

    userImage.src = imageMap[userChoice];
    computerImage.src = imageMap[computerChoice];

    const result = getResult(userChoice, computerChoice);
    message.textContent = result;

    if (result === "You Win!") userScore++;
    else if (result === "You Lose!") computerScore++;

    scoreDisplay.textContent = `You: ${userScore} | Computer: ${computerScore}`;
  });
});

function getComputerChoice() {
  const options = ['rock', 'paper', 'scissors'];
  return options[Math.floor(Math.random() * 3)];
}

function getResult(user, computer) {
  if (user === computer) return "It's a Draw!";
  if (
    (user === 'rock' && computer === 'scissors') ||
    (user === 'paper' && computer === 'rock') ||
    (user === 'scissors' && computer === 'paper')
  ) {
    return "You Win!";
  } else {
    return "You Lose!";
  }
}

resetBtn.addEventListener('click', () => {
  userScore = 0;
  computerScore = 0;
  userImage.src = "images/question.png";
  computerImage.src = "images/question.png";
  message.textContent = "Make your move!";
  scoreDisplay.textContent = `You: 0 | Computer: 0`;
});
