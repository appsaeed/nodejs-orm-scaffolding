import { Request, Response } from "express";
import auth from "../../base/auth";

export default class LoginController {

    static login(req: Request, res: Response) {
        return res.render('login', req.params)
    }

    static loginAction(req: Request, res: Response) {
        const username = req.params?.username || '';
        const password = req.params?.password || '';
        if (auth.login(username, password)) {
            return res.render('/', { message: 'Login successful' })
        }
        res.locals.message = 'Login failed';
        return res.redirect('back')
    }
}