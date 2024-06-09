import connectFlash from 'connect-flash';
import express from 'express';
import * as Helpers from "./app/base/helpers";
import middlewiare from './app/middleware/middleware';
import apiRouter from './app/routes/api';
import authRouter from './app/routes/auth';
import publicRouter from './app/routes/public';
import config from './config/config';
import filesconfig from './config/filesconfig';
import { User } from './models/User';

// Assigning helpers to the global object
Object.assign(global, Helpers);

const app = express();
//app setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(filesconfig.public_path || 'public'))
//set views engine and path
config.view_engine && app.set('view engine', config.view_engine)
config.view_path && app.set('views', config.view_path)

//third party express libraries
// app.use(session(config.session.express));
app.use(connectFlash());

//register routes
app.use(authRouter)
app.use('/api/v1', apiRouter)
app.use(publicRouter)

// main();
console.log('database: ', env('DB_DATABASE'))
async function main() {
    const insert = await User.insert({
        first_name: 'Saeed',
        email: Date.now() + '@gmail.com',
    })
    console.log(insert)
}

//middleware
app.use(middlewiare)

app.listen(3030, () => {
    // console.clear()
    console.log('Server url: ', 'http://localhost:3030')
})