import { CanvasObject } from "../interfaces/CanvasObject.js";

export class Board extends CanvasObject {
    render(ctx, canvas) {
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "rgba(16, 16, 35, 1)";
        for (let i = 0; i < this.step; i++) {
            const offset = i % 2 === 0 ? 0 : this.step;
            for (let j = 0; j < this.step; j++) {
                if (j % 2 === 0) continue;
                ctx.fillRect(
                    this.step * j - offset,
                    this.step * i,
                    this.step,
                    this.step
                );
            }
        }
    }
}
