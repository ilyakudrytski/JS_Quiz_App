const quizData = [{
        question: "Что в Российской империи было вещевым эквивалентом денег?",
        a: "Шкуры пушных зверей",
        b: "Крупный рогатый скот",
        c: "Табак",
        d: "Женские серьги",
        correct: "a"
    },
    {
        question: "У индейцев из племени квакиутл есть традиция: беря деньги в долг, они оставляют в залог…",
        a: "Душу",
        b: "Имя",
        c: "Скальп тещи",
        d: "Амулет",
        correct: "b"
    },
    {
        question: "Основой для «Сказки о рыбаке и рыбке Пушкина послужила сказка братьев Гримм «Рыбак и его жена». В ней немецкая «коллега» нашей старухи превратилась в:",
        a: "Папу Римского",
        b: "Королеву",
        c: "Директора рыбзавода",
        d: "Командира отряда водолазов ",
        correct: "a"
    },
    {
        question: "Найдите ошибку в отрывке из басни Крылова: «Попрыгунья Стрекоза лето красное пропела; оглянуться не успела, как зима катит в глаза». ",
        a: "Стрекозы не умеют прыгать",
        b: "Зимы в тех местах, о которых писал Крылов, нет",
        c: "Здесь нет ошибки, все правильно ",
        d: "Эти насекомые совсем не издают звуков",
        correct: "d"
    },
    {
        question: "Российский мультфильм, удостоенный «Оскара», — это…",
        a: "Простоквашино",
        b: "Винни-Пух",
        c: "Старик и море",
        d: "Ну, погоди!",
        correct: "c"
    }
]

const quiz = document.getElementById('quiz')
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const answerEls = document.querySelectorAll('.answer');

let currentQuiz = 0;
let score = 0;

loadQuiz()

function loadQuiz() {
    deselectAnswer()
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {

    let answer = undefined;
    answerEls.forEach(answerEls => {
        if (answerEls.checked) {
            answer = answerEls.id;
        }
    })

    return answer;
}

function deselectAnswer() {
    answerEls.forEach(answerEls => {
        answerEls.checked = false
    })
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions</h2>
            <button onclick="location.reload()">Try again</button>`
        }
    }




})