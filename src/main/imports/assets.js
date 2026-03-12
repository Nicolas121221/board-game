import { Pawn } from "../logic/pieces/pawn.js";
import { Rook } from "../logic/pieces/rook.js";
import { Knight } from "../logic/pieces/knight.js";
import { Bishop } from "../logic/pieces/bishop.js";
import { Queen } from "../logic/pieces/queen.js";
import { King } from "../logic/pieces/king.js";

const lightColor = "white";
const darkColor = "blue";

const createChessAssetsURL = (color, piece) => {
    return `/src/assets/chess/${color}/${piece}.png`;
};

export const lightPieces = {
    pieces: [
        createChessAssetsURL(lightColor, "rook"),
        createChessAssetsURL(lightColor, "knight"),
        createChessAssetsURL(lightColor, "bishop"),
        createChessAssetsURL(lightColor, "king"),
        createChessAssetsURL(lightColor, "queen"),
        createChessAssetsURL(lightColor, "bishop"),
        createChessAssetsURL(lightColor, "knight"),
        createChessAssetsURL(lightColor, "rook"),
    ],
    pawn: createChessAssetsURL(lightColor, "pawn"),
    pieceClasses: [
        new Rook(),
        new Knight(),
        new Bishop(),
        new Queen(),
        new King(),
        new Bishop(),
        new Knight(),
        new Rook(),
    ],
    pawnClass: new Pawn(),
};

export const darkPieces = {
    pieces: [
        createChessAssetsURL(darkColor, "rook"),
        createChessAssetsURL(darkColor, "knight"),
        createChessAssetsURL(darkColor, "bishop"),
        createChessAssetsURL(darkColor, "king"),
        createChessAssetsURL(darkColor, "queen"),
        createChessAssetsURL(darkColor, "bishop"),
        createChessAssetsURL(darkColor, "knight"),
        createChessAssetsURL(darkColor, "rook"),
    ],
    pawn: createChessAssetsURL(darkColor, "pawn"),
    pieceClasses: [
        new Rook(),
        new Knight(),
        new Bishop(),
        new Queen(),
        new King(),
        new Bishop(),
        new Knight(),
        new Rook(),
    ],
    pawnClass: new Pawn(),
};

export const lightKing = `/src/assets/checkers/${lightColor}/king.png`;
export const lightStone = `/src/assets/checkers/${lightColor}/stone.png`;
export const darkKing = `/src/assets/checkers/${darkColor}/king.png`;
export const darkStone = `/src/assets/checkers/${darkColor}/stone.png`;
