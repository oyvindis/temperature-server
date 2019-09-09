import express from 'express';
import { routes } from './routes/routes';

export const server = {
    start(): void {
        const app = express();
        const port = 3333;



        app.use('/', routes);

        app.get('/', (req, res) => {
            res.send(`Test å skrive ut env.variabel: ${process.env.FIREBASE_TEMPERATURE_CREDENTIALS}`);
        });

        app.listen(port, err => {
            if (err) {
                return console.error(err);
            }
            return console.log(`server is listening on ${port}`);
        });
    },
};
