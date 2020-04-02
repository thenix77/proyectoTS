import { Response, Request } from "express"
import conexion from "../database/conexion"
import { shieldsModel as Model} from "../models/shieldsModel"

import io from '../index'

class CtrlApiTypeShield {

    async index(req: Request,res: Response) {
        const cnn = await conexion.connectMysql();

        const ssql = "select * from shields order by nombre asc";
        const [shields, fields] = await cnn.query(ssql, []);
    
        return res.json({ status: 200, shields });
    }

    async insert(req: Request, res: Response) {
        const model: Model = req.body;
    
        const cnn = await conexion.connectMysql()
        const ssql = "insert into shields set ? "
        const [rst] = await cnn.query(ssql, [model])
    
        io.emit("server-sensor", "sensor");
        return res.json({ status: 200 ,id :rst.insertId})
    }

    async edit(req: Request, res: Response) {
        const id = req.params.id;
    
        const cnn = await conexion.connectMysql();
        const ssql = "select * from shields where id = ? ";
        const [typeshield, fields] = await cnn.query(ssql, [id]);
    
        return res.json({ status: 200, typeshield });
    }

    async update(req: Request, res: Response) {
        const model: Model = req.body;
    
        model.updated = new Date(Date.now());
    
        const cnn = await conexion.connectMysql();
        const ssql = "update shields set ? where id = ? ";
        const [rst] = await cnn.query(ssql, [model, model.id]);
    
        return res.json({ status: 200 , update : rst.affectedRows});
    }

    async delete(req: Request, res: Response) {
        const id = req.body.id;
    
        const cnn = await conexion.connectMysql();
        const ssql = "delete from shields where id = ? ";
        await cnn.query(ssql, [id]);
    
        res.json({ status: "200" });
    }

    async active(req: Request, res: Response) {
        const id = req.params.id;
        
        const cnn = await conexion.connectMysql();
    
        const ssql = "select * from shields where id=?";
        
        const [model] = await cnn.query(ssql, [id]);
        
        res.json({ status: "200",active : model[0].active});
      }
    
      async onoff(req: Request, res: Response) {
        const id = req.params.id
        const cnn = await conexion.connectMysql();
    
        var ssql = "update shields set  active= !active where id=?";
        await cnn.query(ssql, [id])
    
        ssql = "select * from shields where id=?"
        const [model] = await cnn.query(ssql, [id])
    
        res.json({ status: "200" , active: model[0].active});
      }
}

const ctrlApiShield = new CtrlApiTypeShield()
export default ctrlApiShield