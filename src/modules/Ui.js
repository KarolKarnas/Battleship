class Ui {
	constructor(game) {
		this.game = game;
		this.renderGameboard(this.game.gameboardPlayer.board);
	}

renderGameboard(gameboard) {
    console.log(gameboard);
    const gameboardElement = document.getElementById('player-gameboard');
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const divField = document.createElement('div');
            divField.classList.add('field');
            divField.textContent = gameboard[j][i].coordinatesStr;
            if(gameboard[j][i].ship) {
                divField.classList.add('ship')
            }
            gameboardElement.appendChild(divField);
        }
    }
}
}

export default Ui;
