import Gameboard from './factories/Gameboard';
import Player from './factories/Player';
import Ship from './factories/Ship';
import Ui from './Ui';

class Game {
	constructor() {
		this.gameboardPlayer = new Gameboard();
		this.gameboardAi = new Gameboard();
		this.player = new Player();
		this.ai = new Player();

        this.placeShipsPlayer()
        this.placeShipsAi()
	}

    placeShipsPlayer() {
        this.gameboardPlayer.placeShip([0,0], 'x', 1)
        this.gameboardPlayer.placeShip([1,4], 'x', 1)
        this.gameboardPlayer.placeShip([6,7], 'x', 1)
        this.gameboardPlayer.placeShip([9,0], 'x', 1)
        this.gameboardPlayer.placeShip([1,2], 'x', 2)
        this.gameboardPlayer.placeShip([6,4], 'y', 2)
        this.gameboardPlayer.placeShip([1,7], 'y', 2)
        this.gameboardPlayer.placeShip([6,2], 'x', 3)
        this.gameboardPlayer.placeShip([4,4], 'y', 3)
        this.gameboardPlayer.placeShip([6,9], 'x', 4)
    }
    placeShipsAi() {
        this.gameboardAi.placeShip([1,0], 'x', 1)
        this.gameboardAi.placeShip([0,4], 'x', 1)
        this.gameboardAi.placeShip([5,7], 'x', 1)
        this.gameboardAi.placeShip([8,0], 'x', 1)
        this.gameboardAi.placeShip([3,0], 'y', 2)
        this.gameboardAi.placeShip([7,4], 'y', 2)
        this.gameboardAi.placeShip([0,7], 'y', 2)
        this.gameboardAi.placeShip([6,2], 'x', 3)
        this.gameboardAi.placeShip([3,4], 'x', 3)
        this.gameboardAi.placeShip([4,9], 'x', 4)
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
