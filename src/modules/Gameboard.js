import Ship from './Ship';

class Gameboard {
	constructor() {
		this.board = [];
		this.makeBoard(this.board);
	}

	makeBoard(board) {
		for (let j = 0; j < 10; j++) {
			board[j] = [];
			for (let i = 0; i < 10; i++) {
				board[j][i] = {
					ship: false,
					hit: false,
					coordinatesArr: [j, i],
					coordinates: { x: j, y: i },
				};
			}
		}
		//   console.log(this.board);
	}

	placeShip(startCoordinates = [0, 0], direction = 'x', shipLength) {
		const myShip = new Ship(shipLength);
		// const shipStartCoordinates = startCoordinates;
		if (this.isEnoughSpace(startCoordinates, direction, myShip.length)) {
			let x = startCoordinates[0];
			let y = startCoordinates[1];
			for (let i = 0; i < myShip.length; i++) {
				if (direction === 'x') {
					this.board[x][y].ship = true;
					x++;
				} else if (direction === 'y') {
					this.board[x][y].ship = true;
					y++;
				}
			}
			return 'Ship placed';
		} else {
			return 'Cannot build here'
		}
	}
	//checkCoordinates
	checkCoordinates(startCoordinates = [0, 0]) {
		const x = startCoordinates[0];
		const y = startCoordinates[1];
		if (x >= 10 || y >= 10) return false;
		if (this.board[x][y].ship === false) return true;
	}
	//checkCoordinatesWithLengthAndDirection
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
}

// const board = new Gameboard;

// console.log(board);

export default Gameboard;
