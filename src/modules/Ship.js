class Ship {
    constructor(length = 4, id, hits = 0, sunk = false) {
        this.length = length;
        this.id = id;
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