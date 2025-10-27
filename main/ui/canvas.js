export class Canvas {
    elements = new Map();

    constructor(id, height, width) {
        this.el = document.querySelector(id);

        this.el.width = width;
        this.el.height = height;
        this.ctx = this.el.getContext("2d");
    }

    render() {
        this.elements.forEach((element) => {
            element.render(this.ctx, this.el);
        });
    }

    addElement(...elements) {
        elements.forEach((element) => this.elements.set(element.id, element));
    }

    removeElement(...ids) {
        ids.forEach((id) => this.elements.delete(id));
    }
}
