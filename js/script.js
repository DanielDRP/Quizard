"use strict";

const quizData = [
  {
    question: "Las cuotas se calculan con base en:",
    a: "Las ventas de periodos anteriores.",
    b: "Las ventas previstas.",
    c: "La producción.",
    d: "Las respuestas a y b son correctas.",
    correct: "d",
  },
  {
    question: "El objetivo de ventas se puede fijar sobre:",
    a: "El volumen de producción.",
    b: "El volumen de ventas.",
    c: "Los precios.",
    d: "Las promociones.",
    correct: "b",
  },
  {
    question: "El objetivo cuantitativo es:",
    a: "El incremento de las ventas de un producto.",
    b: "La fidelización de clientes.",
    c: "La recuperación de clientes.",
    d: "El esfuerzo de la imagen corporativa.",
    correct: "a",
  },
  {
    question: "Fidelizar clientes es más costoso que:",
    a: "Recuperar clientes perdidos.",
    b: "Capturar nuevos clientes.",
    c: "Conservar los clientes actuales.",
    d: "Todas las respuestas anteriores son incorrectas.",
    correct: "d",
  },
  {
    question: "Para que un nuevo producto lanzado al mercado tenga éxito:",
    a: "Debe ser percibido por los consumidores como un producto distinto.",
    b: "Debe ser parecido a algún producto existente.",
    c: "Debe estar patentado.",
    d: "Tiene que ser barato.",
    correct: "a",
  },
  {
    question: "En estructuras territoriales los objetivos se fijan:",
    a: "Con la división del objetivo de ventas totales entre los territorios a partes iguales.",
    b: "Con la asignación de más ventas a los territorios más grandes.",
    c: "Con la asignación proporcional de las ventas al número de clientes queu haya en cada territorio.",
    d: "Con base en el rendimiento de cada territorio en periodos anteriores.",
    correct: "d",
  },
  {
    question: "La asistencia a ferias profesionales es:",
    a: "Prospección fria.",
    b: "Un método de prospección de clientes.",
    c: "Parte del análisis de la satisfacción de clientes.",
    d: "Un objetivo del plan de ventas.",
    correct: "b",
  },
  {
    question: "Las actividades de difusión en ventas consisten en:",
    a: "Realizar ofertas.",
    b: "Mantener la base de datos de clientes.",
    c: "Informar y recordar.",
    d: "La promoción y el servicio posventa.",
    correct: "c",
  },
  {
    question: "Los objetivos de ventas deben ser:",
    a: "Ambiciosos.",
    b: "Dificiles de alcanzar.",
    c: "Duraderos.",
    d: "Claros.",
    correct: "d",
  },
  {
    question: "El mantenimiento de la base de datos de clientes es tarea de:",
    a: "El jefe de ventas.",
    b: "El departamento de informática.",
    c: "Cada vendedor.",
    d: "Todos los empleados.",
    correct: "c",
  },
  {
    question: "Las tareas de difusión consisten en:",
    a: "Cribar clientes potenciales.",
    b: "Informar a los clientes.",
    c: "Hacer pedidos.",
    d: "Atender reclamaciones.",
    correct: "b",
  },
  {
    question: "Con que frecuencia se debe hacer el mantenimiento de la base de datos?",
    a: "Semanal",
    b: "Anual",
    c: "Mensual",
    d: "Trimestral",
    correct: "a",
  },
]

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
  const currentQuizData = quizData[currentQuiz]

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