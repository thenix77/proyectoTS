"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apiCtrlShields_1 = __importDefault(require("../../controllers/apiCtrlShields"));
class Home {
    constructor() {
        this.router = express_1.Router();
        this.Inicio();
        //   this.Extras()
    }
    Inicio() {
        this.router.get('/', apiCtrlShields_1.default.index);
        this.router.post("/create", apiCtrlShields_1.default.insert);
        this.router.get("/update/:id", apiCtrlShields_1.default.edit);
        this.router.post("/update", apiCtrlShields_1.default.update);
        this.router.post("/delete", apiCtrlShields_1.default.delete);
    }
    Extras() {
        this.router.get("/active/:id", apiCtrlShields_1.default.active);
        this.router.get('/onoff/:id', apiCtrlShields_1.default.onoff);
    }
}
const apiShield = new Home();
exports.default = apiShield.router;
