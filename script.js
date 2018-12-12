// 1. Bon Voyage!
// In your JavaScript file, declare a new variable called likesToTravel and set it equal to true or false.
// If likesToTravel is true, log "Bon voyage!" to the console. If not, log "Enjoy your couch!" to the console.

var likestoTravel = true;

if(likestoTravel===true){
    console.log("Bon voyage")} else {console.log("Enjoy your couch!")};

//    2. Fried Pickles are the Best
// In your JavaScript file, declare a new variable called favoriteFood and set it equal to your favorite food.
// Write a conditional that checks to see if the favoriteFood variable is equal to "fried pickles". If so, log "Congratulations! You have excellent taste!" to the console. Otherwise, log "But have you tried fried pickles?" to the console.


var favoriteFood = "Tacos"

if(favoriteFood === "fried pickles") {
    console.log("Congratulations! You have great taste!")} else {console.log("but have you tried fried pickles")};


//     3. Check Your Math
// Use JavaScript to check and see if the following comparisons are true. For each of the following, log "True fact!" to the console if the condition evaluates to true and "LIES!" to the console if it doesn't.
// Is the sum of 1 and 1 greater than 5?
// Is the product of 4 and 5 less than our equal to 20?
// Is the difference between 6 and 2 greater than or equal to 0?

if(1+1 > 5){
    console.log("True fact!")} else {
        console.log("LIES")};

if(4*5 <= 100) {
        console.log("True fact")} else {
            console.log("LIES")};

if(6/2 >= 0){
    console.log("True fact!")} else {
        console.log("LIES")}


//         4. Greetings
// In your JavaScript file, create a new object representing a person. Your object should have at least two properties: one for the person's name and one for their preferred language.
// In index.html, copy and paste the following code:
// <h3 id="personal-greeting"></h3>
// Write a conditional that checks for the following:
// If the person's preferred language is English, print "Hello, [name]!" to the "#personal-greeting" element.
// If the person's preferred language is Spanish print "Hola, [name]!" to the "#personal-greeting" element.
// If their preferred language is French, print "Bonjour, [name]!" to the "#personal-greeting" element. (Hint: use document.querySelector and .innerHTML)


var personObject = {
    personName: "New Guy",
    personLanguage: "Spanish"
}

var sayHello = document.querySelector("#personal-greeting")


if(personObject.personLanguage === "English"){
        sayHello.innerHTML = `Hello, ${personObject.personName}!`} 
        else if (personObject.personLanguage === "Spanish"){
            sayHello.innerHTML = `Hola, ${personObject.personName}`}
            else if (personObject.personLanguage === "French"){
                sayHello.innerHTML = `Bonjour, ${personObject.personName}`}



//                 5. Grandma's Kitchen
// In your JavaScript file, declare two new variables:
// A variable called time that should store a string that represents a time of day ("1:00 PM", "2:00 PM", etc)
// A variable called isHungry that stores a boolean representing whether or not you're hungry
// Write a conditional that checks the following:
// If it's 7:30 AM and you're hungry, log "Time for breakfast!" to the console
// If it's 12:00 PM and you're hungry, log "Time for luch!" to the console
// If it's 7:00 PM or 8:00 PM and you're hungry, log "Time for dinner!" to the console.
// If you're hungry, log "Time for a snack!" to the console.
// If none of the above are true, log "Have a cookie anyway!" to the console.
// Try changing the values of your variables. You should get different results every time you change them.



var time = ["10:00 am", "11:00 am", "12:00 pm", "1:00 pm", "2:00 pm", "3:00 pm", "4:00 pm", "5:00 pm",  "6:00 pm", "7:00 pm", "8:00 pm"]

var isHungry = true

if(time[8] === "10:00 am" && isHungry){
console.log("Time for breakfast!");
} else if (time[9] === "12:00 pm" && isHungry){
    console.log("Time for lunch!");
} else if (time[2] === "7:00 pm" || time[5] === "8:00 pm" && isHungry){
    console.log("Time for Dinner!");
} else if (isHungry === true){
    console.log("Time for a snack!");
} else {
    console.log("Have a cookie anyways!")
}








// 6. Student Grades
// In your JavaScript file, declare a new variable called grade and give it a number value between 0 and 100.
// Write a conditional that converts the number grade to a letter grade:
// If the value of grade is greater than or equal to 0 and less than or equal to 69, log "You got an F" to the console.
// If it's between 70 and 76, log "You got a D" to the console.
// If it's between 77 and 84, log "You got a C" to the console.
// If it's between 84 and 92, log "You got a B" to the console.
// If it's between 93 and 100, log "You got an A" to the console.

var grade = 88

if(grade >= 70 && grade <= 76){
    console.log("You got a D")
} else if(grade >= 77 && grade <= 84){
    console.log("You got a C")
} else if(grade >= 85 && grade <= 92){
    console.log("You got a B")
} else if(grade >= 93 && grade <= 100){
    console.log("You got a A")
}