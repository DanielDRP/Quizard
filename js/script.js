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

  //T4
  {
    question: "El plan de formación de vendedores, si es eficiente:",
    a: "Aumenta los ingresos de la empresa a corto plazo",
    b: "Aumenta los ingresos de la empresa a corto plazo",
    c: "Aumenta los ingresos de la empresa a medio plazo",
    d: "Aumenta los ingresos y costes de la empresa a largo plazo",
    correct: "c",
  },
  {
    question: "El vendedor está preparado para las objeciones del cliente cuando:",
    a: "Conoce las ventajas del producto.",
    b: "Conoce las ventajas e inconvenientes del producto y los productos similares de la competencia.",
    c: "Conoce las promociones de venta.",
    d: "Puede bajar el precio del producto.",
    correct: "b",
  },
  {
    question: "Conocer a fondo la empresa es bueno para el vendedor porque:",
    a: "Conoce mejor a la competencia.",
    b: "Comprende mejor las necesidades del cliente.",
    c: "Se identifica con ella.",
    d: "Diseña mejor las rutas de venta y las visitas a los clientes.",
    correct: "c",
  },
  {
    question: "La formación sirve para optimizar las tareas de gestión administrativa del vendedor y, de este modo:",
    a: "Maximizar el tiempo que el vendedor dedica a tareas de visitas.",
    b: "Reducir el tiempo medio de las visitas a clientes.",
    c: "Aumentar als horas semanales dedicadas a preparar presupuestos y facturar.",
    d: "Reducir los costes de dietas y desplazamientos de los vendedores.",
    correct: "a",
  },
  {
    question: "La tendencia actual en cuanto a técnicas de venta se centraliza en:",
    a: "La stisfacción del cliente.",
    b: "La fidelización del cliente.",
    c: "El volumen de ventas.",
    d: "Las respuestas a y b son correctas",
    correct: "d",
  },
  {
    question: "Definir las necesidades formativas significa:",
    a: "Escoger la metodología formativa.",
    b: "Analizar los puntos de mejora de la función de ventas.",
    c: "Decidir los objetivos formativos.",
    d: "Diseñar el plan de formación.",
    correct: "b",
  },
  {
    question: "Formación continua es la que recibe:",
    a: "El vendedor antes de empezar su carrera profesional.",
    b: "El estudiante de ciclos formativos.",
    c: "El vendedor recién incorporado a una empresa.",
    d: "El vendedor a lo largo de toda su carrera profesional.",
    correct: "d",
  },
  {
    question: "Cuando la dirección comercial detecta una bajada del volumen de ventas y del numero de pedidos, el plan de formación debe centrarse en:",
    a: "Mejorar el conocimiento que los vendedores tienen del producto, la empresa, la competencia, los clientes, el sector y la normativa.",
    b: "Las técnicas de venta.",
    c: "Optimizar las tareas de gestión.",
    d: "Aumentar las ventas.",
    correct: "b",
  },
  {
    question: "La formación inicial de vendedores va dirigida a:",
    a: "Los vendedores que han perdido la motivación.",
    b: "Todos los vendedores de la compañia.",
    c: "Los vendedores que no conocen los nuevos productos de la empresa.",
    d: "Los vendedores recién incorporados a la compañía.",
    correct: "d",
  },
  {
    question: "La duración de la formación incial de vendedpres es:",
    a: "Una o dos semanas.",
    b: "Uno o dos meses.",
    c: "Un curso escolar de septiembre a junio.",
    d: "Un año.",
    correct: "a",
  },
  //T5
  {
    question: "Los planes de formación de perfeccionamiento están pensados para:",
    a: "Veteranos.",
    b: "Quien se inicia en la actividad de ventas.",
    c: "Son planes para diseñar la formación.",
    d: "Son para veteranos y para quien comienza en el equipo comercial.",
    correct: "a",
  },
  {
    question: "El reciclaje comercial hace referencia a:",
    a: "Actualizar conocimientos.",
    b: "Conocimiento sobre cambios en el mercado.",
    c: "Conocer las necesidades de los clientes.",
    d: "Todas las respuestas anteriores son correctas.",
    correct: "d",
  },
  {
    question: "¿Quién impartirá la formación?",
    a: "Personal interno.",
    b: "Personal externo.",
    c: "Únicamente se puede hacer por especialistas.",
    d: "Las respuestas a y b son correctas.",
    correct: "d",
  },
  {
    question: "¿Los objetivos se recogen en el plan de formación?",
    a: "Sí.",
    b: "No.",
    c: "En algunos casos sí.",
    d: "En algunos casos no.",
    correct: "a",
  },
  {
    question: "¿Los contenidos se recogen en el plan de formación?",
    a: "Sí.",
    b: "No.",
    c: "En algunos casos sí.",
    d: "En algunos casos no.",
    correct: "a",
  },
  {
    question: "¿La metodología se recoge en el plan de formación?",
    a: "Sí.",
    b: "No.",
    c: "En algunos casos sí.",
    d: "En algunos casos no.",
    correct: "a",
  },
  {
    question: "¿La evaluación está contenida en el plan de formación?",
    a: "Sí.",
    b: "No.",
    c: "En algunos casos sí.",
    d: "En algunos casos no.",
    correct: "a",
  },
  {
    question: "En plan de ventas se puede requerir formar en:",
    a: "Técnicas de venta.",
    b: "Gestión del tiempo.",
    c: "Habilidades sociales.",
    d: "Todas las respuestas son correctas.",
    correct: "d",
  },
  {
    question: "¿Dónde se analiza la eficacia de la formación?",
    a: "En la fuera de ventas.",
    b: "En la evaluación de los programas formativos.",
    c: "En el equipo comercial.",
    d: "Todas las respuestas son falsas.",
    correct: "b",
  },
  {
    question: "Un indicador de los planes de formación continua es:",
    a: "La modificación del comportamiento.",
    b: "La comunicación verbal.",
    c: "La comunicación no verbal.",
    d: "Todas son correctas.",
    correct: "d",
  },
  {
    question: "La evaluación de planes de formación deberá:",
    a: "Medir la eficacia del programa de formación.",
    b: "Estimar los costes de la formación.",
    c: "Estimar los beneficios de la formación",
    d: "Todas las respuestas anteriores son correctas.",
    correct: "d",
  },
  {  
    question: "¿En qué consiste la financiación de formación a trabajadores a cargo de la empresa?",
    a: "En un sistema de bonificaciones en las cuotas de la Seguridad Social.",
    b: "En un sistema de amortizaciones.",
    c: "No existe tal financiación.",
    d: "Todas las respuestas anteriores son incorrectas.",
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