document.addEventListener('DOMContentLoaded', () => {
    const wordDisplay = document.getElementById('word-display'); const colorButtons = document.querySelectorAll('.color-button'); const scoreDisplay = document.getElementById('score');
    const words = ['ROJO', 'AZUL', 'VERDE', 'NARANJA']; const colors = ['red', 'blue', 'green', 'orange']; const colorNames = ['rojo', 'azul', 'verde', 'naranja'];
    let score = 0; let errors = 0; let currentColor = '';
    function newRound() { const randomWordIndex = Math.floor(Math.random() * words.length); const randomColorIndex = Math.floor(Math.random() * colors.length); wordDisplay.textContent = words[randomWordIndex]; wordDisplay.style.color = colors[randomColorIndex]; currentColor = colorNames[randomColorIndex]; }
    function handleGuess(event) { const guessedColor = event.target.dataset.color; if (guessedColor === currentColor) { score++; } else { errors++; } scoreDisplay.textContent = `Aciertos: ${score} | Errores: ${errors}`; newRound(); }
    colorButtons.forEach(button => button.addEventListener('click', handleGuess)); newRound();
});