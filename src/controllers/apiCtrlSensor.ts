import { Response, Request } from "express"
import conexion from "../database/conexion"
import { sensorModel as Model} from "../models/sensorModel"

import io from '../index'

class CtrlApiSensor {
  async index(req: Request, res: Response) {
    const cnn = await conexion.connectMysql();

    const ssql = "select * from sensors order by nombre asc";
    const [data, fields] = await cnn.query(ssql, []);

    return res.json({ status: 200, data });
  }

  async insert(req: Request, res: Response) {
    const model: Model = req.body;

    const cnn = await conexion.connectMysql()
    const ssql = "insert into sensors set ? "
    const [rst] = await cnn.query(ssql, [model])

    io.emit("server-sensor", "sensor");
    return res.json({ status: 200 ,id :rst[0].insertId})
  }

  async edit(req: Request, res: Response) {
    const id = req.params.id;

    const cnn = await conexion.connectMysql();
    const ssql = "select * from sensors where id = ? ";
    const [sensor] = await cnn.query(ssql, [id]);

    return res.json({ status: 200, sensor });
  }

  async update(req: Request, res: Response) {
    const model: Model = req.body;

    model.updated = new Date(Date.now());

    const cnn = await conexion.connectMysql();
    const ssql = "update sensors set ? where id = ? ";
    const [rst,fields] = await cnn.query(ssql, [model, model.id]);

    return res.json({ status: 200 , update : rst[0].affectedRows});
  }

  async delete(req: Request, res: Response) {
    const id = req.body.id;

    const cnn = await conexion.connectMysql();
    const ssql = "delete from sensors where id = ? ";
    await cnn.query(ssql, [id]);

    res.json({ status: "200" });
  }

  async active(req: Request, res: Response) {
    
    const cnn = await conexion.connectMysql();

    const ssql = "select * from sensors where active=1";
    
    const [sensors] = await cnn.query(ssql, []);
    
    res.json({ status: "200",sensors);
  }

  async onoff(req: Request, res: Response) {
    const id = req.params.id
    const cnn = await conexion.connectMysql();

    var ssql = "update sensors set  active= !active where id=?";
    await cnn.query(ssql, [id])

    ssql = "select * from sensors where id=?"
    const [sensor] = await cnn.query(ssql, [id])

    res.json({ status: "200" , active: sensor[0].active});
  }
}

const ctrlApiSensor = new CtrlApiSensor();
export default ctrlApiSensor;
