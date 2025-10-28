export class Player {
    constructor(id) {
        this.id = id;
        this.logic = null;
    }

    render(ctx, step) {
        if (this.x !== null || this.y !== null) {
            ctx.fillStyle = "#6a8bd7b3";
            ctx.fillRect(this.x, this.y, step, step);
        }

        this.logic.render(ctx, step);
    }

    addEventListeners(canvasEl, step) {
        canvasEl.addEventListener("click", (e) => {
            canvasEl.classList.add("active");

            const x = step * Math.floor(e.offsetX / step);
            const y = step * Math.floor(e.offsetY / step);

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
