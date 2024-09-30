import { connect } from '../database';

export const getUser = async (req, res) => {
    try {
        const connection = await connect();
        const [rows] = await connection.query('SELECT * FROM users WHERE user_id = ?', [req.params.id]);

        if (rows.length > 0) {
            res.json(rows[0]);
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        console.error('Error obteniendo el usuario:', error);
        res.status(500).json({ message: 'Error del servidor' });
    }
};

export const getUsers = async (req, res) => {
    try {
        const connection = await connect();
        const [rows] = await connection.query('SELECT * FROM users');
        res.json(rows);
    } catch (error) {
        console.error('Error obteniendo usuarios:', error);
        res.status(500).json({ message: 'Error del servidor' });
    }
};

export const getUsersCount = async (req, res) => {
    try {
        const connection = await connect();
        const [rows] = await connection.query('SELECT COUNT(*) as count FROM users');

        if (rows.length > 0) {
            res.json({ count: rows[0].count });
        } else {
            res.status(404).json({ message: 'No se encontraron usuarios' });
        }
    } catch (error) {
        console.error('Error obteniendo el conteo de usuarios:', error);
        res.status(500).json({ message: 'Error del servidor' });
    }
};

export const createUser = async (req, res) => {
    const { user_name, user_password, email_address, first_name, last_name, phonenumber } = req.body; // Ajustar a tus columnas
    try {
        const connection = await connect();
        const result = await connection.query(
            'INSERT INTO users (user_name, user_password, email_address, first_name, last_name, phonenumber) VALUES (?, ?, ?, ?, ?, ?)', 
            [user_name, user_password, email_address, first_name, last_name, phonenumber]
        );
        
        res.status(201).json({ message: 'Usuario creado', userId: result.insertId });
    } catch (error) {
        console.error('Error creando el usuario:', error);
        res.status(500).json({ message: 'Error del servidor' });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const connection = await connect();
        const result = await connection.query('DELETE FROM users WHERE user_id = ?', [req.params.id]);

        if (result.affectedRows > 0) {
            res.json({ message: 'Usuario eliminado' });
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        console.error('Error eliminando el usuario:', error);
        res.status(500).json({ message: 'Error del servidor' });
    }
};

export const updateUser = async (req, res) => {
    const { user_name, user_password, email_address, first_name, last_name, phonenumber } = req.body; // Ajustar a tus columnas
    try {
        const connection = await connect();
        const result = await connection.query(
            'UPDATE users SET user_name = ?, user_password = ?, email_address = ?, first_name = ?, last_name = ?, phonenumber = ? WHERE user_id = ?', 
            [user_name, user_password, email_address, first_name, last_name, phonenumber, req.params.id]
        );

        if (result.affectedRows > 0) {
            res.json({ message: 'Usuario actualizado' });
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        console.error('Error actualizando el usuario:', error);
        res.status(500).json({ message: 'Error del servidor' });
    }
};

export const loginUser = async (req, res) => {
    const { user_name, user_password } = req.body; // Ajusta si tu modelo de base de datos usa "email"
    
    try {
      const connection = await connect();
      const [rows] = await connection.query(
        'SELECT * FROM users WHERE user_name = ? AND user_password = ?', 
        [user_name, user_password]
      );
  
      if (rows.length > 0) {
        res.json({ message: 'Inicio de sesión exitoso', user: rows[0] });
      } else {
        res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
      }
    } catch (error) {
      console.error('Error durante el login:', error);
      res.status(500).json({ message: 'Error del servidor' });
    }
  };
    