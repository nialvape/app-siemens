import { Router } from 'express';
import { getBuildingConsumption, updateBuildingConsumption } from '../controllers/building'; // Asegúrate de que estas funciones existen

const router = Router();

router.get('/buildings/:id/lines/:line', getBuildingConsumption); // Verifica que esta función esté definida
router.put('/buildings/:id/lines/:line', updateBuildingConsumption); // Verifica que esta función esté definida

export default router;
