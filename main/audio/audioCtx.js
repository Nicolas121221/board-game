export class AudioCtx {
    constructor(canvas) {
        this.canvas = canvas;
        this.addListeners();
    }

    addListeners() {
        this.canvas.addEventListener("click", (e) => {
            this.ctx = new AudioContext();
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = "square";
            osc.frequency.setValueAtTime(130, this.ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(
                196,
                this.ctx.currentTime + 0.1
            );
            osc.frequency.exponentialRampToValueAtTime(
                164,
                this.ctx.currentTime + 0.2
            );

            gain.gain.setValueAtTime(0.02, this.ctx.currentTime);

            osc.connect(gain).connect(this.ctx.destination);
            osc.start();
            osc.stop(this.ctx.currentTime + 0.2);
            this.ctx = null;
        });
    }
}
