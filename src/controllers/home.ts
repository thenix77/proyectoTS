import { Response, Request } from 'express'

class CtrlHome {

    index(req: Request,res: Response): void | Response {
        return res.json({status:200})
    }
}

const ctrlHome = new CtrlHome()
export default ctrlHome