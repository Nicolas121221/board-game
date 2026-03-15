export class Canvas {
    elements = new Map();

    constructor(id, height, width) {
        this.el = document.querySelector(id);
        this.el.width = width;
        this.el.height = height;
        this.step = height / 8;
        this.ctx = this.el.getContext("2d");

        this.handleClick();
    }

    render() {
        this.elements.forEach((element) => {
            element.render(this.ctx, this.step, this.el);
        });
    }

    addElement(...elements) {
        elements.forEach((element) => this.elements.set(element.id, element));
    }

    removeElement(...ids) {
        ids.forEach((id) => this.elements.delete(id));
    }

    handleClick() {
        let isSelected = false;
        let lastPiece = null;
        this.el.addEventListener("click", () => {
            const user = this.elements.get("user");
            setTimeout(() => {
                let x = user.x / this.step;
                let y = user.y / this.step;

                const currentPiece = this.elements
                    .get("user")
                    .logic.pieces.get(`${x}${y}`);
                console.log(currentPiece);

                if (isSelected && lastPiece.logic.move(x, y)) {
                    const position = `${x}${y}`;
                    const movingPiece = user.logic.pieces.get(`${lastPiece.x / 100}${lastPiece.y / 100}`);
                    console.log(`${lastPiece.x / 100}${lastPiece.y / 100}`);
                    movingPiece.x = x * this.step;
                    movingPiece.y = y * this.step;
                    user.logic.pieces.delete(position);
                    user.logic.pieces.set(position, movingPiece);
                    user.toggleClick()
                    this.render()
                    isSelected = false
                }
                else if (currentPiece !== undefined) {
                    isSelected = true;
                    currentPiece.logic.drawPositions(this.ctx, x, y);
                    lastPiece = currentPiece;
                } else {
                    isSelected = false;
                }
            }, 10);
        });
    }
}
