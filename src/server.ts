import path from 'node:path';
import express from 'express';
import mongoose from 'mongoose';

import { router } from './router';

mongoose.connect('mongodb+srv://adrianmouzinho:cx12nvHe59XGSWZb@waiterapp.58hmeu7.mongodb.net/test')
  .then(() => {
    const app = express();
    const port = 3000;

    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
    app.use(express.json());
    app.use(router);

    app.listen(port, () => {
      console.log(`🚀 Server is running on http://localhost:${port}`);
    });
  })
  .catch(() => console.log('erro ao conectar ao mongodb'));

