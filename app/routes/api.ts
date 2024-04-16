import express from 'express';
import ApiController from '../controllers/api/ApiController';
import LoginController from '../controllers/api/LoginController';
const app = express.Router();



app.get('/', ApiController.welcome)
app.get('/login', LoginController.login)
app.post('/login', LoginController.loginPost)


export default app;