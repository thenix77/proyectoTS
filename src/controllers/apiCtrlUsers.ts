import { Response, Request } from "express"
import conexion from "../database/conexion"
import { usersModel as Model} from "../models/usersModels"
import { loginModel } from '../models/loginModel'

import io from '../index'

class CtrlApiSensor {

    async index(req: Request,res: Response) {
        const cnn = await conexion.connectMysql();

        const ssql = "select * from users group by active order by apellidos,nombre "
        const [users, fields] = await cnn.query(ssql, []);
    
        return res.json({ status: 200, users });
    }

    async insert(req: Request, res: Response) {
        const model: Model = req.body;
    
        const cnn = await conexion.connectMysql()
        const ssql = "insert into users set ? "
        const [rst] = await cnn.query(ssql, [model])
    
        io.emit("server-sensor", "sensor");
        return res.json({ status: 200 ,id :rst.insertId})
    }

    async edit(req: Request, res: Response) {
        const id = req.params.id;
    
        const cnn = await conexion.connectMysql();
        const ssql = "select * from users where id = ? ";
        const [user, fields] = await cnn.query(ssql, [id]);
    
        return res.json({ status: 200, user });
    }

    async update(req: Request, res: Response) {
        const model: Model = req.body;
    
        model.updated = new Date(Date.now());
    
        const cnn = await conexion.connectMysql();
        const ssql = "update users set ? where id = ? ";
        const [rst] = await cnn.query(ssql, [model, model.id]);
    
        return res.json({ status: 200 , update : rst.affectedRows});
    }

    async delete(req: Request, res: Response) {
        const id = req.body.id;
    
        const cnn = await conexion.connectMysql();
        const ssql = "delete from users where id = ? ";
        await cnn.query(ssql, [id]);
    
        res.json({ status: "200" });
    }

    async active(req: Request, res: Response) {
        const cnn = await conexion.connectMysql();
    
        const ssql = "select * from users where active= 1 order by apellidos,nombre";
        
        const [model,fields] = await cnn.query(ssql, [id]);
        
        res.json({ status: "200", projects: model});
    }
    
    async onoff(req: Request, res: Response) {
        const id = req.params.id
        const cnn = await conexion.connectMysql();
    
        var ssql = "update users set active= !active where id=?";
        await cnn.query(ssql, [id])
    
        ssql = "select * from projects where id=?"
        const [model] = await cnn.query(ssql, [id])
    
        res.json({ status: "200" , active: model[0].active});
    }

    async login(req: Request, res: Response) {
        const login :loginModel = req.body
        const cnn = await conexion.connectMysql();
    
        var ssql = "call dbsensor.p_login(?, ?)";
        const [user] = await cnn.query(ssql, [login.dni,login.password])

        const usuario: Model = user[0][0]

        res.json({status:200, user:usuario})
    }

}
const ctrlApiUsers = new CtrlApiSensor();
export default ctrlApiUsers;