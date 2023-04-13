class Ui {
	constructor(game) {
		this.aiGameboardElement = document.getElementById('ai-gameboard');
		this.playerGameboardElement = document.getElementById('player-gameboard');

		this.game = game;

		this.renderAiGameboard();
		this.renderPlayerGameboard();
		this.addListeners();
	}

	addListeners() {
		this.aiGameboardElement.addEventListener(
			'click',
			this.hitAiGameboard.bind(this)
		);
		this.playerGameboardElement.addEventListener(
			'click',
			this.hitPlayerGameboard.bind(this)
		);
	}

	hitPlayerGameboard(e) {
		if (e.target.classList.contains('field')) {
			console.log(e.target);
			const coordinates = JSON.parse(e.target.dataset.coordinates);
			this.game.gameboardPlayer.receiveAttack(coordinates);
			while (this.playerGameboardElement.firstChild) {
				this.playerGameboardElement.removeChild(
					this.playerGameboardElement.firstChild
				);
			}
			this.renderPlayerGameboard();
		}
	}

	hitAiGameboard(e) {
		if (e.target.classList.contains('field')) {
			console.log(e.target);
			const coordinates = JSON.parse(e.target.dataset.coordinates);
			this.game.gameboardAi.receiveAttack(coordinates);

			while (this.aiGameboardElement.firstChild) {
				this.aiGameboardElement.removeChild(this.aiGameboardElement.firstChild);
			}

			this.renderAiGameboard();
		}
	}

	renderPlayerGameboard() {
		this.renderGameboard(
			this.game.gameboardPlayer.board,
			this.playerGameboardElement
		);
	}

	renderAiGameboard() {
		this.renderGameboard(this.game.gameboardAi.board, this.aiGameboardElement);
	}

	renderGameboard(gameboard, gameboardElement) {
		// console.log(gameboard);

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
}

export default Ui;
