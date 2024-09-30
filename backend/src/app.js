import express from 'express';
import buildingRoutes from './routes/building.js'; // Ruta de building.js
import userRoutes from './routes/users.js'; // Ruta de users.js
import cors from 'cors';

const app = express()

// Middleware para manejar JSON
app.use(express.json())
app.use(cors());

// Usar las rutas definidas en los archivos de rutas
app.use(userRoutes)
app.use(buildingRoutes)

export default app;
