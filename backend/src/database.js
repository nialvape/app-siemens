import mysql from 'mysql2/promise';
import { config } from "./config"

const testConnection = async () => {
    try {
        const connection = await mysql.createConnection(config);
        console.log('Conexión exitosa');
        await connection.end();
    } catch (error) {
        console.error('Error de conexión:', error);
    }
};

testConnection();


export const connect = async () => {
    return await mysql.createConnection(config);
}