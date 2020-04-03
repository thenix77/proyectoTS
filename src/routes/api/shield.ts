import {Router} from 'express'
import ctrlApiShield from '../../controllers/apiCtrlShields'

class Home{

    router:Router

    constructor(){
        this.router = Router()
        this.Inicio()
     //   this.Extras()
    }

    Inicio(){
        this.router.get('/', ctrlApiShield.index)
        this.router.post("/create", ctrlApiShield.insert)
        this.router.get("/update/:id", ctrlApiShield.edit)
        this.router.post("/update", ctrlApiShield.update)
        this.router.post("/delete", ctrlApiShield.delete)
    }

    Extras(){
        this.router.get("/active/:id" , ctrlApiShield.active)
        this.router.get('/onoff/:id',ctrlApiShield.onoff);
    }
}

const apiShield = new Home()
export default apiShield.router