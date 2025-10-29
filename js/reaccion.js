document.addEventListener('DOMContentLoaded', () => {
    const gameArea = document.getElementById('game-area'); const target = document.getElementById('target'); const message = document.getElementById('message'); const resultsDisplay = document.getElementById('results');
    let bestTime = null; let startTime = null; let timeoutId = null;
    function startRound() { message.textContent = 'Espera...'; target.style.display = 'none'; gameArea.style.backgroundColor = '#a8d8ea'; const delay = Math.random() * 3000 + 2000; timeoutId = setTimeout(() => { startTime = Date.now(); message.textContent = ''; target.style.display = 'block'; gameArea.style.backgroundColor = '#f7dc6f'; }, delay); }
    function handleClick() {
        if (timeoutId) { clearTimeout(timeoutId); message.textContent = '¡Demasiado pronto! Espera a que aparezca el rojo.'; gameArea.style.backgroundColor = '#f1948a'; timeoutId = null; setTimeout(startRound, 2000); }
        else if (startTime) { const reactionTime = Date.now() - startTime; message.textContent = `Tiempo: ${reactionTime} ms`; gameArea.style.backgroundColor = '#82e0aa'; startTime = null; if (bestTime === null || reactionTime < bestTime) { bestTime = reactionTime; resultsDisplay.textContent = `Tu mejor tiempo: ${bestTime} ms`; } setTimeout(startRound, 2000); }
        else { startRound(); }
    }
    gameArea.addEventListener('click', handleClick);
});