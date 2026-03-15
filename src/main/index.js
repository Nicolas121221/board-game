import { Board } from "./elements/board.js";
import { Canvas } from "./ui/canvas.js";
import { Player } from "./elements/player.js";
import { AudioCtx } from "./audio/audioCtx.js";
import { BoardCaptions } from "./elements/board-captions.js";
import { ChessLogic } from "./logic/playerLogic.js";
import {
    darkPieces,
    lightPieces,
} from "./imports/assets.js";

import { OpponentLogic } from "./logic/opponentLogic.js";
import { BoardLogic } from "./logic/boardLogic.js";

// creates the board Class and adds the game logic
const canvas = new Canvas("#canvas", 800, 800);
const boardLogic = new BoardLogic();
canvas.board = boardLogic;

// the layout of the board
const board = new Board("board");

// player pieces and logic
const player = new Player("user");
player.logic = new ChessLogic();
player.logic.createPieces(canvas.step, lightPieces);
player.addEventListeners(canvas.el, canvas.step);

// opponent pieces and logic
const opponent = new Player("opponent");
opponent.logic = new OpponentLogic();
opponent.logic.createPieces(canvas.step, darkPieces);

// board captions and audio feature
const captions = new BoardCaptions("captions", canvas.step);
const audioCtx = new AudioCtx(canvas.el);

canvas.addElement(board, player, opponent, captions);
canvas.render();

document.addEventListener("click", () => {
    canvas.render();
});
