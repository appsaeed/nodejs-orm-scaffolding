import express from "express";
import LoginController from "../controllers/auth/LoginController";
const app = express();

app.get('/login', LoginController.login)
app.post('/login', LoginController.loginAction)

export default app;