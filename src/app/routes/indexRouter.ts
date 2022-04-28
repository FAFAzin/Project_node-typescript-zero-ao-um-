import{
    Response,
    Request,
    Router
} from 'express'
import {indexController} from "../controllers/indexController";

export class indexRouter {

    public r: Router

    constructor(){
        const controller = new indexController();
        this.r = Router()
        this.r.route("*").get((req: Request, res: Response) => {

            res.status(200).json(controller.defaultRoute())


            }
        )
        
    }
}
