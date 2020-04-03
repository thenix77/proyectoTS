import {Router} from 'express'
import ctrlApiUsers from '../../controllers/apiCtrlUsers'

class Home{

    router:Router

    constructor(){
        this.router = Router()
        this.Inicio()
        this.Extras()
        this.Login()
    }

    Inicio(){
        this.router.get('/', ctrlApiUsers.index)
        this.router.post("/create", ctrlApiUsers.insert)
        this.router.get("/update/:id", ctrlApiUsers.edit)
        this.router.post("/update", ctrlApiUsers.update)
        this.router.post("/delete", ctrlApiUsers.delete)
    }

    Extras(){
        this.router.get("/active" , ctrlApiUsers.active)
        this.router.get('/onoff/:id',ctrlApiUsers.onoff);
    }

    Login(){
        this.router.post('/login',ctrlApiUsers.login);
    }
}

const apiUser = new Home()
export default apiUser.router