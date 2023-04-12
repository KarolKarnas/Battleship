import Gameboard from './factories/Gameboard';
import Player from './factories/Player';
import Ship from './factories/Ship';

class Game {
	constructor() {
		this.gameboardPlayer = new Gameboard();
		this.gameboardAi = new Gameboard();
		this.player = new Player();
		this.ai = new Player();

        this.gameboardPlayer.placeShip([0,0], 'x', 1)
	}

	playerTurn() {
		this.player.attack(gameboardAi, [1, 1]);
		if (this.gameboardAi.areAllShipsSunk()) {
			this.gameOver();
		}
		this.aiTurn();
	}

	aiTurn() {

        this.ai.randomAttack(this.gameboardPlayer);
        if (this.gameboardPlayer.areAllShipsSunk()) {
			this.gameOver();
		}
		this.playerTurn();
	}

    gameOver() {

    }

	// gameStart() {

	// }
}

export default Game;
