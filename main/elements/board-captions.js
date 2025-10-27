import { CanvasObject } from "../interfaces/CanvasObject.js";

export class BoardCaptions extends CanvasObject {
    render(ctx) {
        const cols = "abcdefgh";
        ctx.font = '14px "Pixelify Sans"';
        for (const index in cols) {
            ctx.fillStyle = index % 2 === 0 ? "rgba(16, 16, 35, 1)" : "white";
            ctx.fillText(cols[index], this.step * index + this.step / 1.2, 14);
            ctx.fillText(8 - Number(index), 4, this.step * index + 14);
        }
    }
}
