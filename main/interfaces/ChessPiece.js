import { CanvasObject } from "./CanvasObject.js";

export class ChessPiece extends CanvasObject {
    constructor(id, step, color, path) {
        super(id, step);
        this.color = color;
        this.addImage(path);
        this.x = 0;
        this.y = 0;
    }

    addImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    render(ctx) {
        if (!this.img.complete) {
            this.img.onload = () => {
                ctx.drawImage(this.img, this.x, this.y, this.step, this.step);
            };
            return;
        }
        ctx.drawImage(this.img, this.x, this.y, this.step, this.step);
    }
}
