// This project is to build a Greeting Robot, following the step-by-step from the freeCodeCamp lectures

// console.log --> showcases the message
console.log("Hi, there!");
console.log("I am excited to talk to you.");

// let --> create variables
let bot;
let botLocation;

// the following instruction sets a value to the variables
bot = "teacherBot";
botLocation = "the universe";

console.log("Allow me to introduce myself.");

const botIntroduction = "My name is " + bot + ".";
console.log(botIntroduction);

const botLocationSentence = "I live in " + botLocation + ".";
console.log(botLocationSentence);

// If a add another value to the string, it automatically changes it, and this becomes the new value
bot = "professorBot";

const nickNameIntroduction = "My nickname is " + bot + ".";
console.log("nickNameIntroduction");

bot = "awasomeTeacherBot";

const newNicknameGreeting = "I love my nickname but I wish people would call me " + bot + ".";
console.log("newNicknameGreeting");

const favoriteSubject = "Computer Science";

const favoriteSubjectSentence = "My favorite subject is " + favoriteSubject + ".";
console.log("favoriteSubjectSentence");

console.log("Well, it was nice to talk to you. Have a nice day!");