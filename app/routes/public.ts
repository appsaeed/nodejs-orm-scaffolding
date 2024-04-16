import express from 'express';
import PublicController from '../controllers/PublicController';
const app = express();

app.get('/', PublicController.welcome)
app.get('/about', PublicController.about)

export default app;