document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('game-board'); const movesDisplay = document.getElementById('moves'); const restartBtn = document.getElementById('restart-btn');
    const gameIcons = ['📜', '🏺', '🗿', '⚔️', '👑', '🏛️']; const gameCards = [...gameIcons, ...gameIcons];
    let moves = 0; let hasFlippedCard = false; let lockBoard = false; let firstCard, secondCard;
    function shuffle(array) { for (let i = array.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [array[i], array[j]] = [array[j], array[i]]; } }
    function createBoard() { shuffle(gameCards); gameCards.forEach(icon => { const card = document.createElement('div'); card.classList.add('memory-card'); card.dataset.icon = icon; card.innerHTML = `<div class="front-face">${icon}</div><div class="back-face">?</div>`; card.addEventListener('click', flipCard); gameBoard.appendChild(card); }); }
    function flipCard() { if (lockBoard || this === firstCard) return; this.classList.add('flip'); moves++; movesDisplay.textContent = moves; if (!hasFlippedCard) { hasFlippedCard = true; firstCard = this; return; } secondCard = this; checkForMatch(); }
    function checkForMatch() { const isMatch = firstCard.dataset.icon === secondCard.dataset.icon; isMatch ? disableCards() : unflipCards(); }
    function disableCards() { firstCard.removeEventListener('click', flipCard); secondCard.removeEventListener('click', flipCard); resetBoard(); checkWin(); }
    function unflipCards() { lockBoard = true; setTimeout(() => { firstCard.classList.remove('flip'); secondCard.classList.remove('flip'); resetBoard(); }, 1000); }
    function resetBoard() { [hasFlippedCard, lockBoard] = [false, false]; [firstCard, secondCard] = [null, null]; }
    function checkWin() { if (document.querySelectorAll('.memory-card.flip').length === gameCards.length) { setTimeout(() => alert(`¡Felicidades! Ganaste en ${moves} movimientos.`), 500); } }
    function restartGame() { gameBoard.innerHTML = ''; moves = 0; movesDisplay.textContent = moves; resetBoard(); createBoard(); }
    restartBtn.addEventListener('click', restartGame); createBoard();
});