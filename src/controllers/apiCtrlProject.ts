import { Response, Request } from "express"
import conexion from "../database/conexion"
import { projectModel as Model} from "../models/projectModel"

import io from '../index'

class CtrlApiSensor {

    async index(req: Request,res: Response) {
        const cnn = await conexion.connectMysql();

        const ssql = "select * from projects group by active order by created,nombre "
        const [projects, fields] = await cnn.query(ssql, []);
    
        return res.json({ status: 200, projects });
    }

    async insert(req: Request, res: Response) {
        const model: Model = req.body;
    
        const cnn = await conexion.connectMysql()
        const ssql = "insert into projects set ? "
        const [rst] = await cnn.query(ssql, [model])
    
        io.emit("server-sensor", "sensor");
        return res.json({ status: 200 ,id :rst.insertId})
    }

    async edit(req: Request, res: Response) {
        const id = req.params.id;
    
        const cnn = await conexion.connectMysql();
        const ssql = "select * from projects where id = ? ";
        const [project, fields] = await cnn.query(ssql, [id]);
    
        return res.json({ status: 200, project });
    }

    async update(req: Request, res: Response) {
        const model: Model = req.body;
    
        model.updated = new Date(Date.now());
    
        const cnn = await conexion.connectMysql();
        const ssql = "update projects set ? where id = ? ";
        const [rst] = await cnn.query(ssql, [model, model.id]);
    
        return res.json({ status: 200 , update : rst.affectedRows});
    }

    async delete(req: Request, res: Response) {
        const id = req.body.id;
    
        const cnn = await conexion.connectMysql();
        const ssql = "delete from projets where id = ? ";
        await cnn.query(ssql, [id]);
    
        res.json({ status: "200" });
    }

    async active(req: Request, res: Response) {
        const cnn = await conexion.connectMysql();
    
        const ssql = "select * from projects where active= 1 order by created,nombre";
        
        const [model,fields] = await cnn.query(ssql, [id]);
        
        res.json({ status: "200", projects: model});
    }
    
    async onoff(req: Request, res: Response) {
        const id = req.params.id
        const cnn = await conexion.connectMysql();
    
        var ssql = "update projects set active= !active where id=?";
        await cnn.query(ssql, [id])
    
        ssql = "select * from projects where id=?"
        const [model] = await cnn.query(ssql, [id])
    
        res.json({ status: "200" , active: model[0].active});
    }

}
const ctrlApiProject = new CtrlApiSensor();
export default ctrlApiProject;