import {Router} from 'express'
import ctrlApiProject from '../../controllers/apiCtrlProject'

class Home{

    router:Router

    constructor(){
        this.router = Router()
        this.Inicio()
       // this.Extras()
    }

    Inicio(){
        this.router.get('/', ctrlApiProject.index)
        this.router.post("/create", ctrlApiProject.insert)
        this.router.get("/update/:id", ctrlApiProject.edit)
        this.router.post("/update", ctrlApiProject.update)
        this.router.post("/delete", ctrlApiProject.delete)
    }

    Extras(){
        this.router.get("/active" , ctrlApiProject.active)
        this.router.get('/onoff/:id',ctrlApiProject.onoff);
    }
}

const apiProject = new Home()
export default apiProject.router