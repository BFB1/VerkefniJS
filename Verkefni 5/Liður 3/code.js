'use strict';
let questions = [
    {
        question: 'What is your favorite colour of the alphabet?',
        answers: [
            {text: 'Yes!', truthy: false},
            {text: 'Banana', truthy: true},
            {text: 'Oreos', truthy: false},
            {text: 'That doesn\'t make any sense', truthy: false}
            ]
    },
    {
        question: 'Pineapples on pizza?',
        answers: [
            {text: 'Ye!', truthy: false},
            {text: 'Nah', truthy: true}
        ]
    }
    ];


let questionId = 0;
let correctAnswers = 0;

function DisplayQuestion(id) {
    document.getElementById('questionTag').innerText = questions[id].question;
    let options = document.getElementById('options');
    ClearHTMLTag(options);
    let list = document.createElement('ol');
    options.appendChild(list);

    let answers = questions[id].answers;
    for (let i = 0; i < answers.length; i++) {
        let li = document.createElement('li');
        let option = document.createElement('p');
        li.appendChild(option);

        let answer = answers[i];
        option.innerText = answer.text;
        li.addEventListener('click', answer.truthy ? pickedRight : pickedWrong);
        list.appendChild(li);
    }
}

function pickedWrong() {
    console.log('Wrong!');
    NextQuestion();
}

function pickedRight() {
    console.log('Correct!');
    correctAnswers++;
    NextQuestion();
}

function NextQuestion() {
    if (++questionId < questions.length) {
        DisplayQuestion(questionId)
    } else {
        let container = document.getElementById('container');
        ClearHTMLTag(container);

        let score = document.createElement('h1');
        score.innerText = 'You got ' + correctAnswers + '/' + questions.length + ' correct!';
        container.appendChild(score);
        container.classList.add('CenterText');
    }
}

function ClearHTMLTag(tag) {
    while(tag.firstChild) {
        tag.removeChild(tag.firstChild);
    }
}

DisplayQuestion(questionId);