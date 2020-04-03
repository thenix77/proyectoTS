"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apiCtrlUsers_1 = __importDefault(require("../../controllers/apiCtrlUsers"));
class Home {
    constructor() {
        this.router = express_1.Router();
        this.Inicio();
        this.Extras();
        this.Login();
    }
    Inicio() {
        this.router.get('/', apiCtrlUsers_1.default.index);
        this.router.post("/create", apiCtrlUsers_1.default.insert);
        this.router.get("/update/:id", apiCtrlUsers_1.default.edit);
        this.router.post("/update", apiCtrlUsers_1.default.update);
        this.router.post("/delete", apiCtrlUsers_1.default.delete);
    }
    Extras() {
        this.router.get("/active", apiCtrlUsers_1.default.active);
        this.router.get('/onoff/:id', apiCtrlUsers_1.default.onoff);
    }
    Login() {
        this.router.post('/login', apiCtrlUsers_1.default.login);
    }
}
const apiUser = new Home();
exports.default = apiUser.router;
