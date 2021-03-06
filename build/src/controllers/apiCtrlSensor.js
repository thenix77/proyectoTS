"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conexion_1 = __importDefault(require("../database/conexion"));
const index_1 = __importDefault(require("../index"));
class CtrlApiSensor {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cnn = yield conexion_1.default.connectMysql();
            const ssql = "select * from sensors order by nombre asc";
            const [data, fields] = yield cnn.query(ssql, []);
            return res.json({ status: 200, data });
        });
    }
    insert(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const model = req.body;
            const cnn = yield conexion_1.default.connectMysql();
            const ssql = "insert into sensors set ? ";
            const [rst] = yield cnn.query(ssql, [model]);
            index_1.default.emit("server-sensor", "sensor");
            return res.json({ status: 200, id: rst[0].insertId });
        });
    }
    edit(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const cnn = yield conexion_1.default.connectMysql();
            const ssql = "select * from sensors where id = ? ";
            const [sensor] = yield cnn.query(ssql, [id]);
            return res.json({ status: 200, sensor });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const model = req.body;
            model.updated = new Date(Date.now());
            const cnn = yield conexion_1.default.connectMysql();
            const ssql = "update sensors set ? where id = ? ";
            const [rst, fields] = yield cnn.query(ssql, [model, model.id]);
            return res.json({ status: 200, update: rst[0].affectedRows });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.body.id;
            const cnn = yield conexion_1.default.connectMysql();
            const ssql = "delete from sensors where id = ? ";
            yield cnn.query(ssql, [id]);
            res.json({ status: "200" });
        });
    }
    active(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cnn = yield conexion_1.default.connectMysql();
            const ssql = "select * from sensors where active=1";
            const [sensors] = yield cnn.query(ssql, []);
            res.json({ status: "200", sensors });
        });
    }
    onoff(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const cnn = yield conexion_1.default.connectMysql();
            var ssql = "update sensors set  active= !active where id=?";
            yield cnn.query(ssql, [id]);
            ssql = "select * from sensors where id=?";
            const [sensor] = yield cnn.query(ssql, [id]);
            res.json({ status: "200", active: sensor[0].active });
        });
    }
}
const ctrlApiSensor = new CtrlApiSensor();
exports.default = ctrlApiSensor;
