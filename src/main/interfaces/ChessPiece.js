export class ChessPiece {
    constructor(id, path, Logic) {
        this.id = id;
        this.addImage(path);
        this.x = 0;
        this.y = 0;
        this.path = path;
        this.class = Logic;

        this.createLogic(Logic);
    }

    createLogic(Logic) {
        this.logic = new Logic();
    }

    addImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    addPieceLogic(PieceLogic) {
        this.pieceLogic = PieceLogic();
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
