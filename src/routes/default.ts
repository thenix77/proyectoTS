import {Router} from 'express'
import ctrlHome from '../controllers/home'

class Home{

    router:Router

    constructor(){
        this.router = Router()
        this.Inicio()
    }

    Inicio(){
        this.router.get('/', ctrlHome.index)
    }
}

const home = new Home()
export default home.router
