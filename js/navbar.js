window.onscroll = function () {
  scrollFunction();
};
const text = "Welcome to Central Library at University of Sadat City";
const typingElement = document.getElementById("typing-text");
let index = 0;
function typeText() {
  typingElement.textContent += text.charAt(index);
  index++;
        setTimeout(typeText, 70);
  
        }
typeText();
const audio = new Audio("thanks.wav"); 
const submitBtn = document.querySelector('input[type="submit"]');
submitBtn.addEventListener("click", () => {
    audio.currentTime = 0; 
    audio.play();
});

 function toggleAnswer(element) {
        const answer = element.nextElementSibling;
        const allAnswers = document.querySelectorAll('.answer');
        const allTitles = document.querySelectorAll('.question-title');
        allAnswers.forEach(item => {
          if (item !== answer) {
            item.classList.remove('show');
          }
        });
        allTitles.forEach(item => {
          if (item !== element) {
            item.classList.remove('active');
          }
        });
        answer.classList.toggle('show');
        element.classList.toggle('active');
      }