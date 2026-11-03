let buttons = document.querySelectorAll("#mood-buttons button");
let totalScore = 0;
console.log("How do you feel?");
buttons.forEach(function(button) {
    button.addEventListener("click", function(){
        button.textContent = "Sad";
        totalScore += 1;
    })
    button.addEventListener("click", function(){
        button.textContent = "Okay";
        totalScore += 2;
    })
    button.addEventListener("click", function(){
        button.textContent = "Don't Know";
        totalScore += 3;
    })
    button.addEventListener("click", function(){
        button.textContent = "Happy";
        totalScore += 4;
    })
    button.addEventListener("click", function(){
        button.textContent = "Excited";
        totalScore += 5;
    })
});
console.log("Total score: " + totalScore);
if(totalScore <= 3) {
    console.log("You are feeling sad or okay");
} else if(totalScore >= 4) {
    console.log("You are feeling great today");
} 