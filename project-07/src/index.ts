import express, { Request, Response } from 'express';
import { router } from './routes/loginRoutes';
import cookieSession from 'cookie-session';

// const app = express();

// app.use(express.urlencoded({ extended: true }));
// app.use(cookieSession({ keys: ['secret-token'] }));
// app.use(router);

// app.listen(3000, () => {
//     console.log('listening on port 3000');
// });

class Server {
    app: express.Express = express();

    constructor() {
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cookieSession({ keys: ['secret-token'] }));
        this.app.use(router);
    }

    start(): void {
        this.app.listen(3000, () => {
            console.log('listening on port 3000');
        });
    }
}