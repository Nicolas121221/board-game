import { Index } from "../../interfaces/indexClass.js";

export class Queen {
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
        for (let i = 1; i < 8; i++) {
            if (x + i < 8 && y + i < 8)
                this.possibleMoves.set(
                    `${x + i}${y + i}`,
                    new Index(x + i, y + i),
                );
            if (x - i > -1 && y - i > -1)
                this.possibleMoves.set(
                    `${x - i}${y - i}`,
                    new Index(x - i, y - i),
                );
            if (x + i > -1 && y - i > -1 && x + i < 8 && y - i < 8)
                this.possibleMoves.set(
                    `${x + i}${y - i}`,
                    new Index(x + i, y - i),
                );
            if (x - i > -1 && y + i > -1 && x - i < 8 && y + i < 8)
                this.possibleMoves.set(
                    `${x - i}${y + i}`,
                    new Index(x - i, y + i),
                );

            if (x + i < 8)
                this.possibleMoves.set(`${x + i}${y}`, new Index(x + i, y));
            if (x - i > -1)
                this.possibleMoves.set(`${x - i}${y}`, new Index(x - i, y));
            if (y + i < 8)
                this.possibleMoves.set(`${x}${y + i}`, new Index(x, y + i));
            if (y - i > -1)
                this.possibleMoves.set(`${x}${y - i}`, new Index(x, y - i));
        }
    }

    move(x, y) {
        const isPossible = this.possibleMoves.has(`${x}${y}`);
        this.possibleMoves = new Map();
        return isPossible;
    }
}
