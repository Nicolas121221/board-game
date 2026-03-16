import { Index } from "../../interfaces/indexClass.js";

export class King {
    firstMove = true;
    possibleMoves = new Map();

    drawPositions(ctx, x, y) {
        this.validatePositions(x, y);

        this.possibleMoves.forEach((move) => {
            ctx.beginPath();
            ctx.fillStyle = "#6a8bd7b3";
            ctx.arc(move.x * 100 + 50, move.y * 100 + 50, 25, 0, 2 * Math.PI);
            ctx.fill();
        });
    }

    validatePositions(x, y) {
        const xPlusOne = x + 1;
        const xMinusOne = x - 1;
        const yPlusOne = y + 1;
        const yMinusOne = y - 1;

        if (xPlusOne < 8)
            this.possibleMoves.set(`${xPlusOne}${y}`, new Index(xPlusOne, y));
        if (xMinusOne > -1)
            this.possibleMoves.set(`${xMinusOne}${y}`, new Index(xMinusOne, y));
        if (yPlusOne < 8)
            this.possibleMoves.set(`${x}${yPlusOne}`, new Index(x, yPlusOne));
        if (yMinusOne > -1)
            this.possibleMoves.set(`${x}${y - 1}`, new Index(x, y - 1));

        if (xPlusOne < 8 && yPlusOne < 8)
            this.possibleMoves.set(
                `${xPlusOne}${yPlusOne}`,
                new Index(xPlusOne, yPlusOne),
            );
        if (xMinusOne > -1 && yMinusOne > -1)
            this.possibleMoves.set(
                `${xMinusOne}${yMinusOne}`,
                new Index(xMinusOne, yMinusOne),
            );
        if (xPlusOne < 8 && yMinusOne > -1)
            this.possibleMoves.set(
                `${xPlusOne}${yMinusOne}`,
                new Index(xPlusOne, yMinusOne),
            );
        if (xMinusOne > -1 && yPlusOne < 8)
            this.possibleMoves.set(
                `${xMinusOne}${yPlusOne}`,
                new Index(xMinusOne, yPlusOne),
            );
    }

    move(x, y) {
        const isPossible = this.possibleMoves.has(`${x}${y}`);
        this.possibleMoves = new Map();
        return isPossible;
    }
}
