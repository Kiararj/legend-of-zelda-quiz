const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: What is the highest grossing game in the series?
 choice1: Breath of the Wild
 choice2: Twilight Princess 
 choice3: A Link to the Past
 choice4: Ocarina of Time
 answer: 1
    }
    {
        question: How many masks can be collected in The Legend of Zelda: Majora's Mask?
 choice1: 36
 choice2: 50
 choice3: 24
 choice4: 30
 answer: 3
    }
    {
        question: In what game does the character Tingle first appear?
 choice1: Oracle of Ages
 choice2: Majora's Mask
 choice3: Spirit Tracks
 choice4: Wind Waker
 answer: 2
    }
    {
        question: What is the name of the spirit who accompanies Link in Twilight Princess?
 choice1: Fi
 choice2: Navi
 choice3: King of Red Lions
 choice4: Midna
 answer: 4
    }
    {
        question: Which Zelda game was specifically designed for the Nintendo 3DS?
 choice1: A Link Between Worlds
 choice2: Phantom Hourglass
 choice3: Four Swords
 choice4: Skyward Sword
 answer: 1
    }
];
