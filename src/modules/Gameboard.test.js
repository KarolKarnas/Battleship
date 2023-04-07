import Gameboard from "./Gameboard";

let gameboad1 = new Gameboard()

describe('Gameboard', () => {
    beforeEach(() => {
        gameboad1 = new Gameboard()
    })
    test('board has 10 rows', () => {
        // console.log(gameboad1)
expect(gameboad1.board.length).toBe(10)
    })

    test('is board pool free to place ship', () => {
        expect(gameboad1.isStartCoordinatesAvailable([0,0])).toBe(true)
    })

    test('can i place ship', () => {
        expect(gameboad1.isEnoughSpace([0,0], 'x', 5)).toBe(true)
    })
})