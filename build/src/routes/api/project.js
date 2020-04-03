"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apiCtrlProject_1 = __importDefault(require("../../controllers/apiCtrlProject"));
class Home {
    constructor() {
        this.router = express_1.Router();
        this.Inicio();
        // this.Extras()
    }
    Inicio() {
        this.router.get('/', apiCtrlProject_1.default.index);
        this.router.post("/create", apiCtrlProject_1.default.insert);
        this.router.get("/update/:id", apiCtrlProject_1.default.edit);
        this.router.post("/update", apiCtrlProject_1.default.update);
        this.router.post("/delete", apiCtrlProject_1.default.delete);
    }
    Extras() {
        this.router.get("/active", apiCtrlProject_1.default.active);
        this.router.get('/onoff/:id', apiCtrlProject_1.default.onoff);
    }
}
const apiProject = new Home();
exports.default = apiProject.router;
