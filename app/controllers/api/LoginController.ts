import { Request, Response } from "express";
import auth from "../../base/auth";
import { apiSend } from "../../base/helpers";

export default class LoginController {
    static login(req: Request, res: Response) {
        return res.json(req.params)
    }

    static async loginPost(req: Request, res: Response) {
        const username = req.body.username || '';
        const password = req.body.password || '';

        if (auth.login(username, password)) {
            const user = await auth.user();
            return apiSend(res, 'Successfully logged in Now!', 200);
        }
    }
}