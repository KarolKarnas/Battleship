class Ship {
    constructor(length = 4, hits = 0, sunk = false) {
        this.length = length;
        this.hits = hits;
        this.sunk = sunk
    }

    hit() {
        this.hits++
        this.isSunk()
        // return this.hits
    }

    isSunk() {
        if (this.length === this.hits) {
            this.sunk = true;
            // return true
        } 
    }
}

export default Ship