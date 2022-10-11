const buttons = document.querySelectorAll('.rpsButton')
const playerScore = document.querySelector('#player-score')
const hands = document.querySelector('#hands')
const result = document.querySelector('#result')

let choice = ['rock', 'paper', 'scissors']

let score = 0

buttons.forEach(button=>{
	button.onclick = ()=>{
		const index= Math.floor(Math.random()*3)
		const botDecision = choice[index]
		const userDecision = button.value
		const msg = `👱 ${userDecision} vs 🤖 ${botDecision}`
		hands.innerHTML = msg
		if(botDecision == userDecision){
			console.log('draw')
			
			playerScore.innerHTML = score
			result.innerHTML = "It's Draw"
		}
		else if (userDecision === 'rock' && botDecision === 'scissors') {
			console.log('You win')
			score +=1
			playerScore.innerHTML = score
			result.innerHTML = 'You Won'
	
		} else if (userDecision === "paper" && botDecision === "rock") {
			console.log('you win')
			result.innerHTML = 'You Won'
			score +=1
			playerScore.innerHTML = score
	
		} else if (userDecision === "scissors" && botDecision === "paper") {
			console.log('you win')
			result.innerHTML = 'You Won'
			score +=1
			playerScore.innerHTML = score
	
		// Otherwise human loses (aka set score to -1)
		} else {
			console.log('you lose')
			result.innerHTML = 'You Lose'
			score -= 1
			playerScore.innerHTML = score
		}
	}
})

 