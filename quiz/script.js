const questions = [
    {
        que: "Who made this webpage?",
        a: "Mellow",
        b: "Spidey",
        c: "Ronald",
        d: "Gecko",
        correct: "a",
    },
    {
        que: "How old are they?",
        a: "16",
        b: "30",
        c: "55",
        d: "15",
        correct: "a",
    },
    {
        que: "Their favorite programming language?",
        a: "Python",
        b: "CSS",
        c: "Javascript",
        d: "Go",
        correct: "c",
    },
    {
        que: "Their favorite music genre?",
        a: "Pop",
        b: "Rock!",
        c: "Phonk",
        d: "EDM",
        correct: "c",
    }
];

let index = 0;
let right = 0;
let wrong = 0;
let total = questions.length;

const question = document.getElementById('quiz');
const ansInput = document.querySelectorAll('.answers');

const getAnswers = () => {
    if(index === total) {
        return result();
    }
    reset();
    let data = questions[index];
    question.innerText = `0${index + 1}) ${data.que}`;

    ansInput[0].nextElementSibling.innerText = data.a
    ansInput[1].nextElementSibling.innerText = data.b
    ansInput[2].nextElementSibling.innerText = data.c
    ansInput[3].nextElementSibling.innerText = data.d
}

const submitQuiz = () => {
    let data = questions[index];
    let ans = matchAns();
    if(ans === data.correct) {
        right++;
    } else {
        wrong++;
    }
    ansInput.forEach((input) => {
        if (input.checked) {
            index++;
            getAnswers();
            return;       
        }

    }
)
}


const matchAns = () => {
    let answers;
    ansInput.forEach((input) => {
        if (input.checked) {
           answers = input.value;
        }
    }
);
        return answers;
}

const reset = () => {
    ansInput.forEach((input) => {
        input.checked = false;
    }
)
}

const result = () => {
    document.getElementById('box').innerHTML = `<h3>Thank you for participatng</h3>
    <span>You scored : ${right} / ${total} </span>
    <a href="">Retake Quiz </a>
    `
}

getAnswers();