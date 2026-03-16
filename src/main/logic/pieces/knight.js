import { Index } from "../../interfaces/indexClass.js";

export class Knight {
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
        if (x + 2 < 8) {
            if (y - 1 > -1)
                this.possibleMoves.set(
                    `${x + 2}${y - 1}`,
                    new Index(x + 2, y - 1),
                );
            if (y + 1 < 8)
                this.possibleMoves.set(
                    `${x + 2}${y + 1}`,
                    new Index(x + 2, y + 1),
                );
        }
        if (y + 2 < 8) {
            if (x - 1 > -1)
                this.possibleMoves.set(
                    `${x - 1}${y + 2}`,
                    new Index(x - 1, y + 2),
                );
            if (x + 1 < 8)
                this.possibleMoves.set(
                    `${x + 1}${y + 2}`,
                    new Index(x + 1, y + 2),
                );
        }
        if (x - 2 < 8) {
            if (y - 1 > -1)
                this.possibleMoves.set(
                    `${x - 2}${y - 1}`,
                    new Index(x - 2, y - 1),
                );
            if (y + 1 < 8)
                this.possibleMoves.set(
                    `${x - 2}${y + 1}`,
                    new Index(x - 2, y + 1),
                );
        }
        if (y - 2 < 8) {
            if (x - 1 > -1)
                this.possibleMoves.set(
                    `${x - 1}${y - 2}`,
                    new Index(x - 1, y - 2),
                );
            if (x + 1 < 8)
                this.possibleMoves.set(
                    `${x + 1}${y - 2}`,
                    new Index(x + 1, y - 2),
                );
        }
    }

    move(x, y) {
        const isPossible = this.possibleMoves.has(`${x}${y}`);
        this.possibleMoves = new Map();
        return isPossible;
    }
}
