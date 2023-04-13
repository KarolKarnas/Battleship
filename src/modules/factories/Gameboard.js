import Ship from './Ship';

class Gameboard {
	constructor() {
		this.board = [];
		this.shipTracker = [];
		this.makeBoard(this.board);
		this.idTracker = 0;
	}

	makeBoard(board) {
		for (let j = 0; j < 10; j++) {
			board[j] = [];
			for (let i = 0; i < 10; i++) {
				board[j][i] = {
					ship: false,
					shipId: false,
					missedShot: false,
					hitShip: false,
					coordinatesArr: [j, i],
					coordinates: { x: j, y: i },
					coordinatesStr: `[${j},${i}]`,
				};
			}
		}
	}

	placeShip(startCoordinates = [0, 0], direction = 'x', shipLength) {
		const myShip = new Ship(shipLength, this.idTracker);
		this.shipTracker.push(myShip);
		this.idTracker++;
		// const shipStartCoordinates = startCoordinates;
		if (this.isEnoughSpace(startCoordinates, direction, myShip.length)) {
			let x = startCoordinates[0];
			let y = startCoordinates[1];
			for (let i = 0; i < myShip.length; i++) {
				if (direction === 'x') {
					this.board[x][y].ship = true;
					this.board[x][y].shipId = myShip.id;
					x++;
				} else if (direction === 'y') {
					this.board[x][y].ship = true;
					this.board[x][y].shipId = myShip.id;
					y++;
				}
			}
			return 'Ship placed';
		} else {
			return 'Cannot build here';
		}
	}

	checkCoordinates(coordinates = [0, 0]) {
		const x = coordinates[0];
		const y = coordinates[1];
		if (x >= 10 || y >= 10) return false;
		if (this.board[x][y].ship === false) {
			return true;
		}
	}

	isEnoughSpace(startCoordinates = [0, 0], direction = 'x', shipLength = 2) {
		let x = startCoordinates[0];
		let y = startCoordinates[1];
		for (let i = 0; i < shipLength; i++) {
			if (direction === 'x') {
				if (this.checkCoordinates([x, y])) {
					x++;
				} else {
					return false;
				}
			} else if (direction === 'y') {
				if (this.checkCoordinates([x, y])) {
					y++;
				} else {
					return false;
				}
			}
		}
		return true;
	}

	receiveAttack(attackCoordinates = [0, 0]) {
		let x = attackCoordinates[0];
		let y = attackCoordinates[1];
		if (this.board[x][y].ship === true && this.board[x][y].hitShip === false) {
			const id = this.board[x][y].shipId;
			this.board[x][y].hitShip = true;
			this.shipTracker[id].hit();
		} else {
			this.board[x][y].missedShot = true;
		}
		// return attackCoordinates
	}

	areAllShipsSunk() {
		for (let i = 0; i < this.shipTracker.length; i++) {
			if (this.shipTracker[i].sunk === false) {
				return false;
			}
		}
		return true;
	}
}

export default Gameboard;
