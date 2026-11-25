let buttons = document.querySelectorAll("#quiz-container button");
    let userAnswer = {};
    
        buttons.forEach(button => {
            button.addEventListener("click", function() {
                if(button.textContent === "Sad") {
                    output.textContent = "I'm sorry you feel sad.";
                    userAnswer.mood = "Sad";
                    
                }
                else if(button.textContent === "Happy") {
                    output.textContent = "I'm glad you feel happy.";
                    userAnswer.mood = "Happy";
                }
                else if(button.textContent === "Angry") {
                    output.textContent = "I'm sorry you feel angry.";
                    userAnswer.mood = "Angry";
                }
                else if(button.textContent === "Scared") {
                    output.textContent = "I'm sorry you feel scared.";
                    userAnswer.mood = "Scared";
                }
                let buttonID = button.id;
                let response = button.dataset.mood;
                userAnswer[buttonID] = response;
                console.log(userAnswer);
            });
        });
