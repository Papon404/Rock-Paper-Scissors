let score = JSON.parse(localStorage.getItem('score')) || {
        Wins : 0,
        Losses : 0,
        Ties : 0
    };
    updateScoreDisplay();
        
        let result;

        function playRound (playerMove) {
            const computerMove = pickcomputerMove();
            if (playerMove === 'rock') {
                if (computerMove === 'rock') {
                    result = 'Tie 😐🤝';
                } else if (computerMove === 'paper') {
                    result = 'You Lose 😢💀';
                } else if (computerMove === 'scissors') {
                    result = 'You Win 😎🔥';
                }    
            }
            else if (playerMove === 'paper') {
                if (computerMove === 'rock') {
                    result = 'You Win 😎🔥';
                } else if (computerMove === 'paper') {
                    result = 'Tie 😐🤝';
                } else if (computerMove === 'scissors') {
                    result = 'You Lose 😢💀';
                }
            }
            else if (playerMove === 'scissors') {
                if (computerMove === 'rock') {
                    result = 'You Lose 😢💀';
                } else if (computerMove === 'paper') {
                    result = 'You Win 😎🔥';
                } else if (computerMove === 'scissors') {
                    result = 'Tie 😐🤝';
                }
                
            }
            updateScore(result);

            function pickcomputerMove() {
                const randomNumber = Math.random ();
                if (randomNumber < 1/3) {
                    return 'rock';
                } else if (randomNumber < 2/3) {
                    return 'paper';
                } else {
                    return 'scissors'
                }
            }

            function updateScore(result) {
                if (result === 'You Win 😎🔥') {
                    score.Wins++;
                } else if (result === 'You Lose 😢💀') {
                    score.Losses++;
                } else if (result === 'Tie 😐🤝') {
                    score.Ties++;
                }
                updateScoreDisplay();
                localStorage.setItem('score', JSON.stringify(score));

            }

            document.querySelector('.js-result').innerHTML = `<b>${result}</b>`;
            
            document.querySelector('.js-move').innerHTML = `You 
            <img src="images/${playerMove}-emoji.png" class="move-icon">
            vs
            <img src="images/${computerMove}-emoji.png" class="move-icon">
            Computer`;
        }
        
         function updateScoreDisplay () {
            const scoreDisplay = document.querySelector(".score-display");
            scoreDisplay.innerText =
            `Wins : ${score.Wins} | Losses : ${score.Losses} | Ties : ${score.Ties}`;
            }
            

        function resetScore() {
            score.Wins = 0;
            score.Losses = 0;
            score.Ties = 0;
            localStorage.removeItem('score');
        updateScoreDisplay();   
        }

        

