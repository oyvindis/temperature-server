import express from 'express';
import { routes } from './routes/routes';

export const server = {
    start(): void {
        const app = express();
        const port = 3333;

        app.get('/test', (req, res) => {
            res.send(`Test å skrive ut env.variabel: ${process.env.FIREBASE_TEMPERATURE_CREDENTIALS}`);
        });

        app.use('/', routes);

        app.listen(port, err => {
            if (err) {
                return console.error(err);
            }
            return console.log(`server is listening on ${port}`);
        });
    },
};
