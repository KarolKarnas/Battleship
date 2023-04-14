import Gameboard from './factories/Gameboard';
import Player from './factories/Player';

class App {
	constructor() {
		//Instantiate Gameboard and Players
		this.gameboardPlayer = new Gameboard();
		this.gameboardAi = new Gameboard();
		this.player = new Player();
		this.ai = new Player();
		//Ship Placement
		this.placeShipsPlayer();
		this.placeShipsAi();

		// GameLoop
		this.currentPlayer = 'human';

		//Render
		this.aiGameboardElement = document.getElementById('ai-gameboard');
		this.playerGameboardElement = document.getElementById('player-gameboard');

		this.renderAiGameboard();
		this.renderPlayerGameboard();
		this.addListeners();
	}

	playerTurn(e) {
		if (
			e.target.classList.contains('field') &&
			this.currentPlayer === 'human'
		) {
			const coordinates = JSON.parse(e.target.dataset.coordinates);
			console.log(`player hit [${coordinates}]`);
			this.player.attack(this.gameboardAi, coordinates);
			this.cleanGameBoard(this.aiGameboardElement);
			this.renderAiGameboard();
			if (this.gameboardAi.areAllShipsSunk()) {
				console.log('game over Player won');
				return;
			}
			this.currentPlayer = 'ai';
			this.aiTurn();
		}
	}

	aiTurn() {
		if (this.currentPlayer === 'ai') {
			this.ai.randomAttack(this.gameboardPlayer);
			if (this.gameboardPlayer.areAllShipsSunk()) {
				console.log('game over Ai won');
				return;
			}
			this.cleanGameBoard(this.playerGameboardElement);
			this.renderPlayerGameboard();
			this.currentPlayer = 'human';
		}
	}

	cleanGameBoard(gameboard) {
		while (gameboard.firstChild) {
			gameboard.removeChild(gameboard.firstChild);
		}
	}

	addListeners() {
		this.aiGameboardElement.addEventListener(
			'click',
			this.playerTurn.bind(this)
		);
	}

	renderPlayerGameboard() {
		this.renderGameboard(
			this.gameboardPlayer.board,
			this.playerGameboardElement
		);
	}

	renderAiGameboard() {
		this.renderGameboard(this.gameboardAi.board, this.aiGameboardElement);
	}

	renderGameboard(gameboard, gameboardElement) {
		for (let i = 0; i < 10; i++) {
			for (let j = 0; j < 10; j++) {
				const divField = document.createElement('div');
				divField.classList.add('field');
				divField.textContent = gameboard[j][i].coordinatesStr;
				divField.setAttribute('data-coordinates', `[${j}, ${i}]`);
				if (gameboard[j][i].ship) {
					divField.classList.add('ship');
				}
				if (gameboard[j][i].missedShot) {
					divField.textContent = '*';
				}
				if (gameboard[j][i].hitShip) {
					divField.textContent = 'X';
				}

				gameboardElement.appendChild(divField);
			}
		}
	}

	placeShipsPlayer() {
		this.gameboardPlayer.placeShip([0, 0], 'x', 1);
		this.gameboardPlayer.placeShip([1, 4], 'x', 1);
		this.gameboardPlayer.placeShip([6, 7], 'x', 1);
		this.gameboardPlayer.placeShip([9, 0], 'x', 1);
		this.gameboardPlayer.placeShip([1, 2], 'x', 2);
		this.gameboardPlayer.placeShip([6, 4], 'y', 2);
		this.gameboardPlayer.placeShip([1, 7], 'y', 2);
		this.gameboardPlayer.placeShip([6, 2], 'x', 3);
		this.gameboardPlayer.placeShip([4, 4], 'y', 3);
		this.gameboardPlayer.placeShip([6, 9], 'x', 4);
	}
	placeShipsAi() {
		this.gameboardAi.placeShip([1, 0], 'x', 1);
		this.gameboardAi.placeShip([0, 4], 'x', 1);
		this.gameboardAi.placeShip([5, 7], 'x', 1);
		this.gameboardAi.placeShip([8, 0], 'x', 1);
		this.gameboardAi.placeShip([3, 0], 'y', 2);
		this.gameboardAi.placeShip([7, 4], 'y', 2);
		this.gameboardAi.placeShip([0, 7], 'y', 2);
		this.gameboardAi.placeShip([6, 2], 'x', 3);
		this.gameboardAi.placeShip([3, 4], 'x', 3);
		this.gameboardAi.placeShip([4, 9], 'x', 4);
	}
}

export default App;
