let buttons = document.querySelectorAll("#quiz-container button");
        buttons.forEach(button => {
            button.addEventListener("click", function() {
                console.log(`You selected: ${button.textContent}`);
            });
        });
        buttons.forEach(button => {
            if(button.textContent === "Sad") {
                console.log("You are feeling sad.");
            }
            else if(button.textContent === "Happy") {
                console.log("You are feeling happy.");
            }
            else if(button.textContent === "Angry") {
                console.log("You are feeling angry.");
            }
            else if(button.textContent === "Scared") {
                console.log("You are feeling scared.");
            }
        });