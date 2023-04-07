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

	placeShip(startCoordinates = [0, 0], direction = 'x') {
		const myShip = new Ship(2, 0, false);
		// const shipStartCoordinates = startCoordinates;
		const shipDirection = direction;
		if (
			this.isStartCoordinatesAvailable(startCoordinates) &&
			this.isEnoughSpace()
		) {
		}
	}
	//checkCoordinates
	isStartCoordinatesAvailable(startCoordinates = [0, 0]) {
		const x = startCoordinates[0];
		const y = startCoordinates[1];
		if (this.board[x][y].ship === false) return true;
	}
	//checkCoordinatesWithLengthAndDirection
	isEnoughSpace(startCoordinates = [0, 0], direction = 'x', shipLength = 2) {
		let x = startCoordinates[0];
		let y = startCoordinates[1];
		for (let i = 0; i < shipLength; i++) {
			if (direction === 'x') {
				if (this.isStartCoordinatesAvailable([x, y])) {
					x++;
				} else {
					return false;
				}
			} else if (direction === 'y') {
				if (this.isStartCoordinatesAvailable([x, y])) {
					y++;
				} else {
                    return false
                }
			}
		}
        return true
	}
}

// const board = new Gameboard;

// console.log(board);

export default Gameboard;
