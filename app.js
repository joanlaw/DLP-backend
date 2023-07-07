import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/index.routes.js';
import cartasRoutes from './routes/cards.routes.js';
import decksRoutes from './routes/decks.routes.js';
import cardsRouter from './routes/cardsen.routes.js';

const app = express();

app.use(cors()); // Permitir todos los orígenes

app.use(morgan('dev'));

app.use(indexRoutes);
app.use(cartasRoutes);
app.use(decksRoutes);
app.use(cardsRouter);

app.use((req, res) => {
  res.status(404).send("Not Found");
});

export default app;
