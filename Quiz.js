let buttons = document.querySelectorAll("#quiz-container button");

buttons.forEach(button => {
    button.addEventListener("click", function() {
        if(button.textContent === "Sad") {
            button.addEventListener('click', function() {
                alert("I'm sorry you are feeling sad")
            }
        }
        else if(button.textContent === "Happy") {
            button.addEventListener('click', function() {
                alert("I'm glab you are feeling happy")
            }
        }
        else if(button.textContent === "Angry") {
            button.addEventListener('click', function() {
                alert("I'm sorry you feel angry right now")
            }
        }
        else if(button.textContent === "Scared") {
            button.addEventListener('click', function() {
                alert("I'm sorry you feel scared")
            }
        }
       
    });
});
