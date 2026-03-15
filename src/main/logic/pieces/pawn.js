export class Pawn {
    firstMove = true;
    possibleMoves = [];

    drawPositions(ctx, x, y) {
        let maxSquares = 1;
        if (this.firstMove) maxSquares = 2;

        for (let i = 1; i <= maxSquares; i++) {
            ctx.beginPath();
            ctx.fillStyle = "#6a8bd7b3";
            ctx.arc(x * 100 + 50, (y - i) * 100 + 50, 25, 0, 2 * Math.PI);
            ctx.fill();

            this.possibleMoves.push(`${x}${y-i}`);
        }
    }

    move(x, y) {
        const isPossible = this.possibleMoves.indexOf(`${x}${y}`);
        if (isPossible !== -1) {
            this.firstMove = false;
        }
        this.possibleMoves = [];
        return isPossible !== -1;
    }
}
