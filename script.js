const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const compItems = ["Rock", "Paper", "Scissors"];
const letsPlay = document.querySelector('.lets-play');
const record = document.querySelector('#record');
const challenges = ["Quit Sugar for 30 Days", "Quit Social Media for 30 Days", "Quit Caffeine for 30 Days", "Wake Up at 5am for 30 Days", "Meditated 1 hour Every Day for 30 Days", "Journal for 30 Days", "Take Cold Showers for Next 30 Days", "Try Intermittent Fasting for 30 Days", "Try Yoga Every Day for 30 Days", "Speak to a Stranger", "Compliment Someone", "Send a Thank You Note to Someone", "Exercise for 20 Minutes", "Turn off Electronics at 8 PM"];
let playerScore = 0;
let compScore = 0;
let roundNum = 0;

document.getElementById("challenge").src = `images\\${challenges[Math.floor(Math.random() * (14 - 1) + 1)]}.png`;

rock.addEventListener('click', function () {
    playerSelection = "Rock";
    playRound();
})
paper.addEventListener('click', function () {
    playerSelection = "Paper";
    playRound();
})
scissors.addEventListener('click', function () {
    playerSelection = "Scissors";
    playRound();
})

function playRound() {
    letsPlay.style.display = 'none';
    displayPlayerItem(playerSelection);
    roundNum++;
    displayRound(roundNum);
    compSelection = computerPlay();
    displayCompItem(compSelection);
    updateScore(playerSelection, compSelection);
    whoWon(playerScore, compScore);
}

function displayPlayerItem(playerSelection) {
    const left = document.createElement('div');
    const yourRecord = document.createElement('span');
    left.classList.add('left');
    yourRecord.classList.add('your-record');
    yourRecord.textContent = playerSelection + "!";
    left.append(yourRecord);
    record.append(left);
}

function displayRound(roundNum) {
    const center = document.createElement('div');
    center.classList.add('center');
    center.textContent = 'Round ' + roundNum;
    record.append(center);
}

function displayCompItem(compSelection) {
    const right = document.createElement('div');
    const compRecord = document.createElement('span');
    const clear = document.createElement('div');
    right.classList.add('right');
    compRecord.classList.add('comp-record');
    compRecord.textContent = compSelection + "!";
    right.append(compRecord);
    record.append(right);
    clear.classList.add('clear');
    record.append(clear);
}

function computerPlay() {
    return compItems[Math.floor(Math.random() * compItems.length)];
}

function updateScore(playerSelection, compSelection) {
    const myScoreDisplay = document.querySelector('#my-score');
    const compScoreDisplay = document.querySelector('#comp-score');
    if (playerSelection == compSelection) {
        return;
    } else if (playerSelection == "Rock" && compSelection == "Scissors") {
        return myScoreDisplay.textContent = playerScore += 1;
    } else if (playerSelection == "Paper" && compSelection == "Rock") {
        return myScoreDisplay.textContent = playerScore += 1;
    } else if (playerSelection == "Scissors" && compSelection == "Paper") {
        return myScoreDisplay.textContent = playerScore += 1;
    } else {
        return compScoreDisplay.textContent = compScore += 1;
    }
}

function whoWon(playerScore, compScore) {
    if (playerScore == 5 || compScore == 5) {
        const play = document.querySelector('#play');
        const greenBanner = document.querySelector('#banner-green');
        const results = document.querySelector('#results');
        play.style.display = 'none';
        greenBanner.style.display = 'none';
        results.scrollIntoView();
    }
    if (playerScore == 5) {
        const youWon = document.querySelector('#you-won');
        youWon.style.display = 'block';
    }
    if (compScore == 5) {
        const youLost = document.querySelector('#you-lost');
        youLost.style.display = 'block';
    }
}