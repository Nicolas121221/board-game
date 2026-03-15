export class ChessPiece {
    constructor(id, path, logic) {
        this.id = id;
        this.addImage(path);
        this.x = 0;
        this.y = 0;
        this.logic = logic
    }

    addImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    addPieceLogic(PieceLogic){
        this.pieceLogic = PieceLogic()
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
