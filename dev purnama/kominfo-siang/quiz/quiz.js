const startButton = document.getElementById('start')
const nextButton = document.getElementById('next')
const scoreButton = document.getElementById('score')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const showScoreElement = document.getElementById('showScore')

startButton.addEventListener('click', startGame)

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})
scoreButton.addEventListener('click', showScore)

function startGame() {
    showScoreElement.classList.add('hide')
    score = 0
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function showScore() {
    console.log('yay')
    questionContainerElement.classList.add('hide')
    showScoreElement.classList.remove('hide')
    document.getElementById('showScore').innerText = 'Skor kamu: ' + (localStorage.getItem('score') + ' dari 10')
    scoreButton.classList.add('hide')
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        scoreButton.classList.remove('hide')
    }
    if (correct) {
        score++
        localStorage.setItem('score', JSON.stringify(score))
        console.log(localStorage.getItem('score'))
    }
    // How to disable answer-buttons after picking an answer?
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [{
        question: 'Berapa jumlah member twenty one pilots?',
        answers: [
            { text: '21', correct: false },
            { text: '5', correct: false },
            { text: '2', correct: true }
        ]
    },
    {
        question: 'Album terbaru twenty one pilots berjudul...',
        answers: [
            { text: 'Now, Not Yet', correct: false },
            { text: 'Trench', correct: true },
            { text: 'Neotheater', correct: false }
        ]
    },
    {
        question: 'Siapa nama cheetah peliharaan Tyler Joseph?',
        answers: [
            { text: 'Jason Statham', correct: true },
            { text: 'Josh Dun', correct: false },
            { text: 'Emma Watson', correct: false }
        ]
    },
    {
        question: 'Siapa nama pemimpin dari DEMA?',
        answers: [
            { text: 'KEON', correct: false },
            { text: 'Clancy', correct: false },
            { text: 'Nicholas Bourbaki', correct: true }
        ]
    },
    {
        question: 'Apa yang kamu teriakkan di Trench saat butuh bantuan?',
        answers: [
            { text: 'Sahlo Folina', correct: true },
            { text: 'Domingo en fuego', correct: false },
            { text: 'Cállate', correct: false }
        ]
    },
    {
        question: 'Apa warna yang tidak bisa dilihat oleh Nico and The Niners?',
        answers: [
            { text: 'Kuning', correct: true },
            { text: 'Merah', correct: false },
            { text: 'Biru', correct: false }
        ]
    },
    {
        question: 'Apa warna yang menjadi identitas Nico and The Niners?',
        answers: [
            { text: 'Orange', correct: false },
            { text: 'Merah', correct: true },
            { text: 'Biru', correct: false }
        ]
    },
    {
        question: 'Kelompok yang menentang DEMA dikenal dengan sebutan...',
        answers: [
            { text: 'Skeleton Clique', correct: false },
            { text: 'Bandito', correct: true },
            { text: 'Locals', correct: false }
        ]
    },
    {
        question: 'Ritual pemujaan terhadap terhadap cahaya buatan yang disimpan dalam wadah berbentuk tabung disebut...',
        answers: [
            { text: 'Vialism', correct: true },
            { text: 'Levitate', correct: false },
            { text: 'Morph', correct: false }
        ]
    },
    {
        question: 'Dalam video klip Chlorine, diperkenalkan sosok makhluk kecil bertanduk sebagai representasi dari proses kreatif. Siapa namanya?',
        answers: [
            { text: 'Jim', correct: false },
            { text: 'Ned', correct: true },
            { text: 'Clifford', correct: false }
        ]
    }

]