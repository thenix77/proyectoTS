"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const home_1 = __importDefault(require("../controllers/home"));
class Home {
    constructor() {
        this.router = express_1.Router();
        this.Inicio();
    }
    Inicio() {
        this.router.get('/', home_1.default.index);
    }
}
const home = new Home();
exports.default = home.router;
