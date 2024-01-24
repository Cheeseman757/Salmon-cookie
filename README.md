# about-me
A website all about the Cheeseman!!!!!
<!DOCTYPE html>
<html lang="en">
<head>
    <title>About Cheeseman Game</title>
    <style>
        header {
            color: white;
            background-color: indianred; 
            text-align: center;
        }
        body {
            font-family: Arial, sans-serif;
       
        }
      #startButton {
          display: block;
          margin: 20px auto;
          padding: 10px 20px;
          background-color: orangered;
          color: white;
          border: none;
          cursor: pointer;
          text-align: center;
      }
      #startButton:hover {
          background-color: mediumvioletred;
      }
    </style>
</head>
<body>
    <header>Welcome to My About Me Game</header>

  
    <section id="bio">
        <h2>Biography</h2>
        <p>My name is Justin Cheeseman and I was born in 1992 and I am veteran of the United States Air Force. I am also a published poet who also enjoys collecting vintage books. </p>
    </section>

    <section id="Education">
        <h2>Education</h2>
        <p>I am currently 6 credits away from getting my bachelors degree and I have multiple certifications.</p>
    </section>

    <section id="experience">
        <h2>Job Experience</h2>
        <p>My job experience is all over the place but mainly wihtin healthcare. I have dont military healthcare and also civilain healthcare since I have entered the workforce but a little know fact is that I used to work at the amusement park call Busch Gardens.</p>
    </section>

    <section id="goals">
        <h2>My Goals</h2>
        <p>My main goal in life is to eventually start a non profit that identifies and rectifies healthcare disparities for minority groups. My second goal is to always treat others with empathy because you never know another's story.</p>

      <button id="startButton">Start Game</button>
        <script>
          'use strict';

          function askYesNoQuestion(question) {
              let answer;
              do {
                  answer = prompt(question).toLowerCase();
              } while (answer !== 'y' && answer !== 'yes' && answer !== 'n' && answer !== 'no');
              return answer === 'y' || answer === 'yes';
          }

          function startGame() {
              let userName = prompt('What is your name?');
              alert(`Welcome to my About Me game, ${userName}!`);

              let questions = [
                  'Was I born in the 1990s? (yes/no)',
                  'Do I enjoy collecting vintage water bottles? (yes/no)',
                  'Have I worked in healthcare? (yes/no)',
                  'Am I 4 credits away from finishing my bachelors? (yes/no)',
                  'Is starting a non-profit one of my goals? (yes/no)'
              ];
              let correctAnswers = ['yes', 'no', 'yes', 'no', 'yes'];
              let score = 0;

              for (let i = 0; i < questions.length; i++) {
                  let userAnswer = askYesNoQuestion(questions[i]);

                  if (userAnswer === (correctAnswers[i] === 'yes')) {
                      alert('Correct!');
                      score++;
                  } else {
                      alert('Incorrect!');
                  }
              }

              alert(`${userName}, your score is ${score} out of ${questions.length}`);
          }

          document.getElementById('startButton').onclick = startGame;
        </script>
        </body>
        </html>
       
      
      
