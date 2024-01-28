"use strict"

document.addEventListener('DOMContentLoaded', function() {
  // Obtener el elemento <ul> por su ID
  var marketingUl = document.getElementById('marketing');

  // Agregar un evento de clic al elemento <ul>
  marketingUl.addEventListener('click', function() {
      // Redirigir a la página quiz.js con el parámetro "marketing"
      window.location.href = 'quiz.html?category=marketing';
  });
});
