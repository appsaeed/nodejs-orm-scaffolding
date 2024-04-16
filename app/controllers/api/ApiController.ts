import { Request, Response } from "express";
import { apiSend } from "../../base/helpers";

export default class ApiController {

    static welcome(req: Request, res: Response) {
        return apiSend(res, 'Welcome to the new project!');
    }
}