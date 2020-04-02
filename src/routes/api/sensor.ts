import { Router } from "express";
import ctrlApiSensor from "../../controllers/apiCtrlSensor"

class ApiSensor {
  router: Router;

  constructor() {
    this.router = Router();
    this.Inicio()
    this.Extras()
  }

  Inicio() {
    this.router.get("/", ctrlApiSensor.index)
    this.router.post("/create", ctrlApiSensor.insert)
    this.router.get("/update/:id", ctrlApiSensor.edit)
    this.router.post("/update", ctrlApiSensor.update)
    this.router.post("/delete", ctrlApiSensor.delete);
  }

  Extras(){
    this.router.get("/active/:id" , ctrlApiSensor.active)
    this.router.get('/onoff/:id',ctrlApiSensor.onoff);
  }
}

const apiSensor = new ApiSensor();
export default apiSensor.router;
