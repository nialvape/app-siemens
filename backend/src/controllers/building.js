import db from '../database'; // Asegúrate de tener configurada la conexión a la base de datos

// Función para obtener el consumo de un edificio
export const getBuildingConsumption = async (req, res) => {
    const { id, line } = req.params;

    try {
        // Aquí, realiza una consulta a la base de datos para obtener el consumo
        const result = await db.query(
            `SELECT * FROM consumptions WHERE building_id = $1 AND line = $2`,
            [id, line]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'No se encontró el consumo para esta línea.' });
        }

        const { current_consumption, previous_consumption } = result.rows[0];

        // Responde con los datos obtenidos
        res.json({
            line,
            consumptionCurrent: current_consumption,
            consumptionPrevious: previous_consumption,
        });
    } catch (error) {
        console.error('Error al obtener el consumo del edificio:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Función para actualizar el consumo de un edificio
export const updateBuildingConsumption = async (req, res) => {
    const { id, line } = req.params;
    const { newConsumption } = req.body;

    if (newConsumption === undefined) {
        return res.status(400).json({ message: 'Se requiere un nuevo consumo para actualizar.' });
    }

    try {
        // Aquí, realiza una actualización en la base de datos
        const result = await db.query(
            `UPDATE consumptions SET current_consumption = $1 WHERE building_id = $2 AND line = $3 RETURNING *`,
            [newConsumption, id, line]
        );

        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'No se encontró el consumo para actualizar.' });
        }

        res.status(200).json({ message: 'Consumo actualizado', data: result.rows[0] });
    } catch (error) {
        console.error('Error al actualizar el consumo del edificio:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};
