import {Router} from 'express'
import ctrlApiTypeShield from '../../controllers/apiCtrlTypeShield'

class Home{

    router:Router

    constructor(){
        this.router = Router()
        this.Inicio()
     //   this.Extras()
    }

    Inicio(){
        this.router.get('/', ctrlApiTypeShield.index)
        this.router.post("/create", ctrlApiTypeShield.insert)
        this.router.get("/update/:id", ctrlApiTypeShield.edit)
        this.router.post("/update", ctrlApiTypeShield.update)
        this.router.post("/delete", ctrlApiTypeShield.delete)
    }

    Extras(){
        this.router.get("/active/:id" , ctrlApiTypeShield.active)
        this.router.get('/onoff/:id',ctrlApiTypeShield.onoff);
    }
}

const apiTypeShield = new Home()
export default apiTypeShield.router