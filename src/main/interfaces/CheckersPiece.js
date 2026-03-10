export class CheckersPiece {
    constructor(id, path) {
        this.id = id
        this.addImage(path);
        this.x = 0;
        this.y = 0;
    }

    addImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    render(ctx, step) {
        if (!this.img.complete) {
            this.img.onload = () => {
                ctx.drawImage(this.img, this.x, this.y, step, step);
            };
            return;
        }
        ctx.drawImage(this.img, this.x, this.y, step, step);
    }
}
