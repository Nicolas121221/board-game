export class AudioCtx {
    isClicked = false;

    constructor(canvas) {
        this.canvas = canvas;
        this.addListeners();
    }

    addListeners() {
        this.canvas.addEventListener("click", (e) => {
            if (this.isClicked) return;
            this.isClicked = true;

            this.ctx = new AudioContext();
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = "triangle";
            osc.frequency.setValueAtTime(100, this.ctx.currentTime);
            osc.frequency.linearRampToValueAtTime(
                120,
                this.ctx.currentTime + 0.1,
            );

            gain.gain.setValueAtTime(0.2, this.ctx.currentTime);

            osc.connect(gain).connect(this.ctx.destination);
            osc.start();
            osc.stop(this.ctx.currentTime + 0.2);
            this.ctx = null;

            setTimeout(() => {
                this.isClicked = false;
            }, 200);
        });
    }
}
