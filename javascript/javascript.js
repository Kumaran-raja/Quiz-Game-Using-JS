var currentIndex = 0;
var score = 0;

const all_questions = [
    "1. In web design, what does CSS stand for?",
    "2. HTML stands for -",
    "3. <input> is -",
    "4. The <hr> tag in HTML is used for -",
    "5. HTML tags are enclosed in-",
    "6. How to insert a background image in HTML?"
];

const all_options = [
    ["Counter Strike Source", "Corrective Style Sheet", "Computer Style Sheet", "Cascading Style Sheet"],
    ["HighText Machine Language", "HyperText and links Markup Language", "HyperText Markup Language", "None of these"],
    ["a format tag.", "an empty tag.", "All of the above", "None of the above"],
    ["new line", "vertical ruler", "new paragraph", "horizontal ruler"],
    ["# h1 #", "{ h1 }", "! h1 ?", "< h1 >"],
    ["<body background = 'img.png'>", "<img background = 'img.png'>", "<bg-image = 'img.png'>", "None of the above"]
];

const correct_answers = [4, 3, 2, 4, 4, 1];

function button(value) {
    let correctOption = correct_answers[currentIndex];
    if (value === correctOption) {
        score++;
    }

    currentIndex++;
    if (currentIndex < all_questions.length) {
        loadNextQuestion();
    } else {
        showFinalScore();
        location.reload();
    }
}

function loadNextQuestion() {
    let question = document.getElementById("question");
    question.innerText = all_questions[currentIndex];

    document.getElementById("option_a_ans").innerText = all_options[currentIndex][0];
    document.getElementById("option_b_ans").innerText = all_options[currentIndex][1];
    document.getElementById("option_c_ans").innerText = all_options[currentIndex][2];
    document.getElementById("option_d_ans").innerText = all_options[currentIndex][3];

}


function showFinalScore() {
    alert("Quiz Completed!");
    alert( "Your score is: "+score+" out of "+all_questions.length)

}