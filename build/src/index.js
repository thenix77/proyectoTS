"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const default_1 = __importDefault(require("./routes/default"));
const cors_1 = __importDefault(require("cors"));
/* *** apis *** */
const sensor_1 = __importDefault(require("./routes/api/sensor"));
const typeshield_1 = __importDefault(require("./routes/api/typeshield"));
const shield_1 = __importDefault(require("./routes/api/shield"));
const project_1 = __importDefault(require("./routes/api/project"));
const users_1 = __importDefault(require("./routes/api/users"));
const socket_io_1 = __importDefault(require("socket.io"));
const http_1 = __importDefault(require("http"));
const path_1 = __importDefault(require("path"));
class ServerWeb {
    constructor() {
        this.port = 3000;
        this.app = express_1.default();
        this.configuracion();
        this.middleware();
        this.rutas();
        this.server = http_1.default.createServer(this.app);
        this.io = socket_io_1.default(this.server);
    }
    configuracion() {
        this.app.set("puerto", this.port);
        this.app.use("/socket.io", express_1.default.static(path_1.default.join(__dirname, "/node_modules/socket.io-client/dist")));
    }
    middleware() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use(cors_1.default({
            origin: "*",
            methods: "GET,POST,PUT,DELETE",
            allowedHeaders: "X-Requested-With,content-type",
            credentials: true
        }));
    }
    rutas() {
        this.app.use("/", default_1.default);
        this.app.use("/api/sensors", sensor_1.default);
        this.app.use('/api/typeshilds', typeshield_1.default);
        this.app.use('/api/shilds', shield_1.default);
        this.app.use('/api/project', project_1.default);
        this.app.use('/api/users', users_1.default);
    }
    SocketIo() {
        this.io.on("connection", socket => {
            socket.on("sensor", msg => {
                if (msg === "sensor-add") {
                    this.io.emit("sensor-rpta", "add");
                }
            });
            socket.on("disconnect", function () {
                console.log("user disconnected");
            });
        });
    }
    start() {
        this.SocketIo();
        this.server.listen(this.app.get("puerto"), () => {
            console.log("server> Servidor UP");
        });
    }
}
const server = new ServerWeb();
server.start();
exports.default = server.io;
