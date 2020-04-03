"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apiCtrlSensor_1 = __importDefault(require("../../controllers/apiCtrlSensor"));
class ApiSensor {
    constructor() {
        this.router = express_1.Router();
        this.Inicio();
        this.Extras();
    }
    Inicio() {
        this.router.get("/", apiCtrlSensor_1.default.index);
        this.router.post("/create", apiCtrlSensor_1.default.insert);
        this.router.get("/update/:id", apiCtrlSensor_1.default.edit);
        this.router.post("/update", apiCtrlSensor_1.default.update);
        this.router.post("/delete", apiCtrlSensor_1.default.delete);
    }
    Extras() {
        this.router.get("/active", apiCtrlSensor_1.default.active);
        this.router.get('/onoff/:id', apiCtrlSensor_1.default.onoff);
    }
}
const apiSensor = new ApiSensor();
exports.default = apiSensor.router;
