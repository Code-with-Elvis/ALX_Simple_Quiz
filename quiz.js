document.addEventListener("DOMContentLoaded", function () {
  function checkAnswer() {
    const correctAnswer = "4";
    const selected = document.querySelector('input[name="quiz"]:checked');

    if (selected) {
      const userAnswer = selected.value;

      if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
      } else {
        document.getElementById("feedback").textContent =
          "That's incorrect. Try again!";
      }
    } else {
      document.getElementById("feedback").textContent =
        "Please select an answer.";
      console.log("No answer selected.");
    }
  }

  document
    .getElementById("submit-answer")
    .addEventListener("click", checkAnswer);
});
