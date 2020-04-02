import { Response, Request } from "express"
import conexion from "../database/conexion"
import { typeshieldsModel as Model} from "../models/typeShieldsModel"

import io from '../index'

class CtrlApiTypeShield {

    async index(req: Request,res: Response) {
        const cnn = await conexion.connectMysql();

        const ssql = "select * from tiposhields order by nombre asc";
        const [data, fields] = await cnn.query(ssql, []);
    
        return res.json({ status: 200, data });
    }

    async insert(req: Request, res: Response) {
        const model: Model = req.body;
    
        const cnn = await conexion.connectMysql()
        const ssql = "insert into tiposshields set ? "
        const [rst] = await cnn.query(ssql, [model])
    
        io.emit("server-sensor", "sensor");
        return res.json({ status: 200 ,id :rst.insertId})
    }

    async edit(req: Request, res: Response) {
        const id = req.params.id;
    
        const cnn = await conexion.connectMysql();
        const ssql = "select * from tiposhields where id = ? ";
        const [typeshield, fields] = await cnn.query(ssql, [id]);
    
        return res.json({ status: 200, typeshield });
    }

    async update(req: Request, res: Response) {
        const model: Model = req.body;
    
        model.updated = new Date(Date.now());
    
        const cnn = await conexion.connectMysql();
        const ssql = "update tiposhields set ? where id = ? ";
        const [rst] = await cnn.query(ssql, [model, model.id]);
    
        return res.json({ status: 200 , update : rst.affectedRows});
    }

    async delete(req: Request, res: Response) {
        const id = req.body.id;
    
        const cnn = await conexion.connectMysql();
        const ssql = "delete from tiposhields where id = ? ";
        await cnn.query(ssql, [id]);
    
        res.json({ status: "200" });
    }

    async active(req: Request, res: Response) {
        const id = req.params.id;
        
        const cnn = await conexion.connectMysql();
    
        const ssql = "select * from tiposhields where id=?";
        
        const [model] = await cnn.query(ssql, [id]);
        
        res.json({ status: "200",active : model[0].active});
      }
    
      async onoff(req: Request, res: Response) {
        const id = req.params.id
        const cnn = await conexion.connectMysql();
    
        var ssql = "update tiposhields set  active= !active where id=?";
        await cnn.query(ssql, [id])
    
        ssql = "select * from tiposhields where id=?"
        const [model] = await cnn.query(ssql, [id])
    
        res.json({ status: "200" , active: model[0].active});
      }
}

const ctrlApiTypeShield = new CtrlApiTypeShield()
export default ctrlApiTypeShield