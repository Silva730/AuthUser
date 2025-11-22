import { createConnection } from "../database/connection";

class UserModel {
    async findUserByUsername(username: string) {
        const connection = await createConnection();
        const [rows]: any = await connection.query(
            'SELECT * FROM users WHERE username = ?',
            [username]
        );
        return rows[0] || null;
    }

    async createUser(username: string, hash: string) {
        const connection = await createConnection();
        await connection.query(
            'INSERT INTO users (username, password) VALUES (?, ?)',
            [username, hash]
        );
    }
}

export default new UserModel();