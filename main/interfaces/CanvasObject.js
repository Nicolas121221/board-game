export class CanvasObject {
    constructor(id, step) {
        this.id = id;
        this.step = step;
        this.x = null;
        this.y = null;
    }

    render(ctx, canvas) {}
}
