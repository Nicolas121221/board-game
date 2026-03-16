export class Game {
    constructor(canvasObj) {
        this.canvasObj = canvasObj;
        this.grid = new Array();

        this.start();
    }

    start() {
        for (let i = 0; i < 8; i++) {
            this.grid[i] = new Array();
            for (let j = 0; j < 8; j++) {
                this.grid[i][j] = null;
            }
        }

        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if (i === 0 || i === 7) {
                    this.grid[i][j] = i === 0 ? `${i}${j}` : `${i}${j}`;
                } else if (i === 1 || i === 6) {
                    this.grid[i][j] = i === 1 ? `${i}${j}` : `${i}${j}`;
                }
                continue;
            }
        }
    }
}
