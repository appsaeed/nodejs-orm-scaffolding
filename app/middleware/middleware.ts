import express from 'express';
import { apiSend, view } from '../base/helpers';
import api from './api';
const app = express();
const router = express.Router();
app.use(router)
app.use(api)
app.all('/*', (req, res) => {
    return view(res, 'errors', 404)
})
app.all('/api/*', (req, res) => {
    return apiSend(res, 'status', 404)
})

export default app;