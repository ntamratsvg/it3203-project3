function checkQuiz() {
    // Define the correct answers
    const answers = {
        q1: "b",
        q2: "a",
        q3: "b",
        q4: "a"
    };

    let score = 0;
    const totalQuestions = 4;
    const form = document.getElementById('topicQuiz');
    const formData = new FormData(form);

    // Check each answer
    for (let i = 1; i <= totalQuestions; i++) {
        const userAnswer = formData.get('q' + i);
        if (userAnswer === answers['q' + i]) {
            score++;
        }
    }

    // Calculate percentage
    const percentage = (score / totalQuestions) * 100;

    // Display the result on the page
    const resultDiv = document.getElementById('quizResult');
    resultDiv.innerHTML = "Your Grade: " + score + "/" + totalQuestions + " (" + percentage + "%)";

    // Provide feedback based on score
    if (percentage === 100) {
        resultDiv.style.color = "#27ae60"; // Green for perfect score
        alert("Perfect! You're a cloud expert.");
    } else {
        resultDiv.style.color = "#c0392b"; // Red for errors
        alert("Quiz submitted. You scored " + percentage + "%.");
    }
}

console.log("Quiz Logic Loaded Successfully.");