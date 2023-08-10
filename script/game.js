const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const questionCounterText = document.getElementById('questionCounter');
const scoreText = document.getElementById('score');


let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "What is the highest grossing game in the series?",
 choice1: "Breath of the Wild",
 choice2: "Twilight Princess" ,
 choice3: "A Link to the Past",
 choice4: "Ocarina of Time",
 answer: 1
    },
    {
        question: "How many masks can be collected in The Legend of Zelda: Majora's Mask?",
 choice1: "36",
 choice2: "50",
 choice3: "24",
 choice4: "30",
 answer: 3
    },
    {
        question: "In what game does the character Tingle first appear?",
 choice1: "Oracle of Ages",
 choice2: "Majora's Mask",
 choice3: "Spirit Tracks",
 choice4: "Wind Waker",
 answer: 2
    },
    {
        question: "What is the name of the spirit who accompanies Link in Twilight Princess?",
 choice1: "Fi",
 choice2: "Navi",
 choice3: "King of Red Lions",
 choice4: "Midna",
 answer: 4
    },
    {
        question: "Which Zelda game was specifically designed for the Nintendo 3DS?",
 choice1: "A Link Between Worlds",
 choice2: "Phantom Hourglass",
 choice3: "Four Swords Adventures",
 choice4: "Skyward Sword",
 answer: 1
    },
    {
        question: "What is the name of the primary currency used in the series?",
 choice1: "Rings",
 choice2: "Coins",
 choice3: "Rupees",
 choice4: "Diamonds",
 answer: 3
    },
    {
        question: "In which game does the character Beedle first appear as a traveling merchant?",
 choice1: "Oracle of Seasons",
 choice2: "Tri Force Heroes",
 choice3: "Tears of the Kingdom",
 choice4: "Wind Waker",
 answer: 4
    },
    {
        question: "What is the name of the primary antagonist in The Legend of Zelda: Skyward Sword?",
 choice1: "Ghirahim",
 choice2: "Owlan",
 choice3: "Impa",
 choice4: "Groose",
 answer: 1
    },
    {
        question: "What are the three pieces of the Triforce, and which characters are associated with each piece?",
 choice1: "Force (Ganon), Intelligence (Zelda), and Determination (Link)",
 choice2: "Energy (Ganon), Sage (Zelda), and Endurance (Link)",
 choice3: "Power (Ganon), Wisdom (Zelda), and Courage (Link)",
 choice4: "Strength (Ganon), Knowledge (Zelda), and Bravery (Link)",
 answer: 3
    },
    {
        question: "Which game allows players to control time using the “Song of Time”?",
 choice1: "Twilight Princess",
 choice2: "Majora's Mask",
 choice3: "Wind Waker",
 choice4: "Ocarina of Time",
 answer: 1
    }
];

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestions();
}

getNewQuestions = () => {

    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign("end.html");
    }

    questionCounter++;
    questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        let classToApply = 'incorrect';
        if(selectedAnswer == currentQuestion.answer){
            classToApply = 'correct';
        };

        if(classToApply === 'correct') {
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout( () => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestions();
        }, 250);
        
    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
}


startGame();