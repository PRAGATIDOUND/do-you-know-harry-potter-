var readLineSync=require("readline-sync");
var chalk=require("chalk");
var score=0;
var userName=readLineSync.question("May I Know Your Name? ");
console.log("WELLCOME! "+ chalk.bold.green(userName)+" to the game");
console.log("Let's see how much you love "+chalk.bgYellow("HARRY POTTER"));
console.log("Who said th following quotes -");
function play(question,answer){
var userAnswer= readLineSync.question(question);

if(userAnswer.toLowerCase()===answer ){
  console.log(chalk.bold.red("RIGHT"));
  score++;
  console.log("current score is "+score);
}
else{
  console.log("WRONG");
}

};
var questions=[{
  question:"1) Time will not slow down when something unpleasant lies ahead.",
  answer:"harry potter"
},{question:"2) It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.",
answer:"albus dumbledore"},
{
  question:"3) If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals." ,
  answer:"sirius black"
},{
  question:"4) Do not pity the dead, Harry. Pity the living, and, above all those who live without love",
  answer:"albus dumbledore"
},{
  question:"5) It is our choices ... that show what we truly are, far more than our abilities.",
  answer:"albus dumbledore"
},{
  question:"6) I’ll be in my bedroom, making no noise and pretending I’m not there.",
  answer: "harry potter"
},
{
  question:"7) I want to commit the murder I was imprisoned for." ,
  answer:"sirius black"
},{
  question:"8) We’ve all got both light and dark inside us. What matters is the part we choose to act on. That’s who we really are." ,
  answer:"sirius black"
},{
  question:"9) Things we lose have a way of coming back to us in the end, if not always in the way we expect." ,
  answer:"luna lovegood"
}]
for(var i=0;i<questions.length;i++){
  var currQuestion=questions[i];
  play(currQuestion.question,currQuestion.answer);
  console.log("correct answer is "+currQuestion.answer);
}console.log("HIGH SCORE IS 9");
console.log("Your FINAL SCORE IS "+score);
