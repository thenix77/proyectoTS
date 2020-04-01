import { createPool } from 'mysql2/Promise';

class Conexion {

  constructor(){
    this.connectMysql()
  }

  async connectMysql(){
    const connection = await createPool({
      user: "root",
      database: "dbsensor",
      host: "localhost",
      password: "1234nix"
    });

    return connection
  }
}
const conexion = new Conexion()
export default conexion