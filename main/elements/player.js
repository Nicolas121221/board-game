import { CanvasObject } from "../interfaces/CanvasObject.js";
import { PlayerLogic } from "../logic/playerLogic.js";

export class Player extends CanvasObject {
    constructor(id, step, canvasEl) {
        super(id, step);
        this.addEventListeners(canvasEl);
        this.logic = new PlayerLogic(step);
    }

    render(ctx) {
        if (this.x !== null || this.y !== null) {
            ctx.fillStyle = "#6a8bd7b3";
            ctx.fillRect(this.x, this.y, this.step, this.step);
        }

        this.logic.render(ctx);
    }

    addEventListeners(canvasEl) {
        canvasEl.addEventListener("click", (e) => {
            canvasEl.classList.add("active");

            const x = this.step * Math.floor(e.offsetX / this.step);
            const y = this.step * Math.floor(e.offsetY / this.step);

            if (this.x === x && this.y === y) {
                canvasEl.classList.remove("active");
                this.x = null;
                this.y = null;
                return;
            }

            this.x = x;
            this.y = y;
            return;
        });
    }
}
