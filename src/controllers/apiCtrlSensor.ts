import { Response, Request } from "express"
import conexion from "../database/conexion"
import { sensorModel as Model} from "../models/sensorModel"

import io from '../index'

class CtrlApiSensor {
  async index(req: Request, res: Response) {
    const cnn = await conexion.connectMysql();

    const ssql = "select * from sensor";
    const [data, fields] = await cnn.query(ssql, []);

    return res.json({ status: 200, data });
  }

  async insert(req: Request, res: Response) {
    const model: Model = req.body;

    const cnn = await conexion.connectMysql()
    const ssql = "insert into sensor set ? "
    await cnn.query(ssql, [model])

    io.emit("server-sensor", "sensor");
    return res.json({ status: 200 })
  }

  async edit(req: Request, res: Response) {
    const id = req.params.id;

    const cnn = await conexion.connectMysql();
    const ssql = "select * from sensor where id = ? ";
    const [sensor, fields] = await cnn.query(ssql, [id]);

    return res.json({ status: 200, sensor });
  }

  async update(req: Request, res: Response) {
    const model: Model = req.body;

    model.updated = new Date(Date.now());

    const cnn = await conexion.connectMysql();
    const ssql = "update sensor set ? where id = ? ";
    await cnn.query(ssql, [model, model.id]);

    return res.json({ status: 200 });
  }

  async delete(req: Request, res: Response) {
    const id = req.body.id;

    const cnn = await conexion.connectMysql();
    const ssql = "delete from sensor where id = ? ";
    await cnn.query(ssql, [id]);

    res.json({ status: "200" });
  }
}

const ctrlApiSensor = new CtrlApiSensor();
export default ctrlApiSensor;
