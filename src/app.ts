import express from 'express';

export const server = {
    start(): void {
        const app = express();
        const port = 3333;
        app.get('/', (req, res) => {
            res.send('Update: Therese ser på tv! - 08.09.2019, 15:52');
        });
        app.listen(port, err => {
            if (err) {
                return console.error(err);
            }
            return console.log(`server is listening on ${port}`);
        });
    },
};
