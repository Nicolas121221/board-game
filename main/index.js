import { Board } from "./elements/board.js";
import { Canvas } from "./ui/canvas.js";
import { Player } from "./elements/player.js";
import { AudioCtx } from "./audio/audioCtx.js";
import { BoardCaptions } from "./elements/board-captions.js";
import { darkPawn, darkPieces } from "./imports/assets.js";

const [height, width] = [800, 800];
const step = height / 8;

const canvas = new Canvas("#canvas", height, width);
const board = new Board("board", step);

const player = new Player("user", step, canvas.el, canvas);
player.logic.createPieces("white", darkPieces, darkPawn);

const captions = new BoardCaptions("captions", step);
const audioCtx = new AudioCtx(canvas.el);

canvas.addElement(board, player, captions);

canvas.render();

document.addEventListener("click", () => {
    canvas.render();
});
