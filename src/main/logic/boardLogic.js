export class BoardLogic {
    constructor(canvasObj) {
        this.canvasObj = canvasObj;
        this.board = new Array();

        this.start();
    }

    start() {
        for (let i = 0; i < 8; i++) {
            this.board[i] = new Array();
            for (let j = 0; j < 8; j++) {
                this.board[i][j] = null;
            }
        }

        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if (i === 0 || i === 7) {
                    this.board[i][j] = i === 0 ? `${i}${j}b` : `${i}${j}w`;
                } else if (i === 1 || i === 6) {
                    this.board[i][j] = i === 1 ? `${i}${j}b` : `${i}${j}w`;
                }
                continue;
            }
        }
        console.table(this.board)
    }
}
