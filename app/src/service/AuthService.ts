import bycript from 'bcrypt';
import UserModel from '../models/User';

class AuthService {
    async register(username: string, password: string) {
        const userExists = await UserModel.findUserByUsername(username);
        if (userExists) return null;

        const hash = await bycript.hash(password, 10);
        await UserModel.createUser(username, hash);

        return[username];
    }

    async login(username: string, password: string) {
        const user = await UserModel.findUserByUsername(username);
        if (!user) return null;

        const valid = await bycript.compare(password, user.password);
        if (!valid) return null;

        return {id: user.id, username: user.username};

    }
}

export default new AuthService();