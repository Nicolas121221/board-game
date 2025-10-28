export class Board {
    constructor(id) {
        this.id = id;
    }

    render(ctx, step, canvas) {
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "rgba(16, 16, 35, 1)";
        for (let i = 0; i < step; i++) {
            const offset = i % 2 === 0 ? 0 : step;
            for (let j = 0; j < step; j++) {
                if (j % 2 === 0) continue;
                ctx.fillRect(step * j - offset, step * i, step, step);
            }
        }
    }
}
