import mysql from 'mysql2/promise';
import { config } from "./config";

const connet = async () => {
    return await mysql.createConnection(config)
}

connet()