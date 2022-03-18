const express = require('express');
const cors = require('./app/middlewares/cors');
const errorHandler = require('./app/middlewares/errorHandler');
require('express-async-errors');

const routes = require('./routes');

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(cors);
app.use(routes);
app.use(errorHandler);

app.listen(PORT, () => console.log(`[server] Server started at http://localhost:${PORT}`));
