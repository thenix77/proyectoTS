"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apiCtrlTypeShield_1 = __importDefault(require("../../controllers/apiCtrlTypeShield"));
class Home {
    constructor() {
        this.router = express_1.Router();
        this.Inicio();
        //   this.Extras()
    }
    Inicio() {
        this.router.get('/', apiCtrlTypeShield_1.default.index);
        this.router.post("/create", apiCtrlTypeShield_1.default.insert);
        this.router.get("/update/:id", apiCtrlTypeShield_1.default.edit);
        this.router.post("/update", apiCtrlTypeShield_1.default.update);
        this.router.post("/delete", apiCtrlTypeShield_1.default.delete);
    }
    Extras() {
        this.router.get("/active/:id", apiCtrlTypeShield_1.default.active);
        this.router.get('/onoff/:id', apiCtrlTypeShield_1.default.onoff);
    }
}
const apiTypeShield = new Home();
exports.default = apiTypeShield.router;
