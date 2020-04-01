"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CtrlHome {
    index(req, res) {
        return res.json({ status: 200 });
    }
}
const ctrlHome = new CtrlHome();
exports.default = ctrlHome;
