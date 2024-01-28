"use strict";


const url = 'http://localhost:5500/data/marketing.json';

async function obtenerArrayDesdeJSON(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error al cargar el archivo JSON: ${response.status}`);
    }

    const data = await response.json();

    if (Array.isArray(data)) {
      return data;
    } else {
      throw new Error('El JSON no representa un array.');
    }
  } catch (error) {
    throw error;
  }
}

const quizData = obtenerArrayDesdeJSON(url);


const quiz = document.querySelector('.quiz-body');
const answerEL = document.querySelectorAll('.answer');
const questionEL = document.getElementById('question');
const footerEL = document.querySelector('.quiz-footer');
const quizDetailEL = document.querySelector(".quiz-details");

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const btnSubmit = document.getElementById("btn");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
  deselectAnswer();

  console.log(quizData);
  console.log(currentQuiz);


  const currentQuizData = quizData[currentQuiz];


  questionEL.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;

  quizDetailEL.innerHTML = `<p> ${currentQuiz + 1} of ${quizData.length} </p>`;

}

//Deselect radio buttons
function deselectAnswer(){
  answerEL.forEach((answerEL)=>{
    answerEL.checked = false;
  })
}

function getSelected(){
  let answer;
  answerEL.forEach((answerELs) =>{
    if(answerELs.checked){
      answer = answerELs.id;
    }
  })
  return answer;
}

btnSubmit.addEventListener('click', ()=>{
  const answer = getSelected();
  if (answer){

    if(answer == quizData[currentQuiz].correct) {
      score++;
    }

    nextQuestion();

  }
})

function nextQuestion(){
  currentQuiz++;

    if(currentQuiz < quizData.length){
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} Questions correctly </h2>
      <button type="button" onclick="location.reload()" >Reload</button>
      `;
      footerEL.style.display = "none";
    }
}