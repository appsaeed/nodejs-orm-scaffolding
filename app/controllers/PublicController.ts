import { Request, Response } from "express";

export default class PublicController {

    static welcome(req: Request, res: Response) {
        return res.render('welcome', { title: 'Welcome page!' });
    }

    static about(req: Request, res: Response) {
        return res.render('about', { title: 'About Us' })
    }
}