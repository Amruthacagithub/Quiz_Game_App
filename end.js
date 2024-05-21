document.addEventListener('DOMContentLoaded', () => {
    const username = document.querySelector('#username');
    const saveScoreBtn = document.querySelector('#saveScoreBtn');
    const finalScore = document.querySelector('#finalScore');
    const mostRecentScore = localStorage.getItem('mostRecentScore');

    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    const MAX_HIGH_SCORES = 5;

    finalScore.innerText = mostRecentScore;

    username.addEventListener('keyup', () => {
        saveScoreBtn.disabled = !username.value;
    });

    const saveHighScore = (e) => {
        e.preventDefault();

        const score = {
            score: mostRecentScore,
            name: username.value
        };

        highScores.push(score);
        highScores.sort((a, b) => b.score - a.score);
        highScores.splice(MAX_HIGH_SCORES);

        localStorage.setItem('highScores', JSON.stringify(highScores));
        window.location.href = 'index.html'; // Navigate to index.html
    };

    document.querySelector('#endForm').addEventListener('submit', saveHighScore);
});
