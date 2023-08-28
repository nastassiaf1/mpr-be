import bcrypt from 'bcrypt';
import Users from "./../db/models/users.model.js";

class UsersService {
    async getUserById(id) {
        return Users.findOne({ where: { id } });
    }

    async addUser(login, password, email) {
      const isUserExists = await Users.findOne({ where: { login } });

        if (!!isUserExists) {
            throw new Error("User Already Exist. Please Login");
        }

        const encryptedPassword = await bcrypt.hash(password, 10);
        const createdAt = Date.now();

        const user = await Users.create({ login, email: email.toLowerCase(), password: encryptedPassword, createdAt, updatedAt: createdAt });

        return user;
    }

    async login(login, password) {
        const user = await Users.findOne({ where: { login } });

        if (user && (await bcrypt.compare(password, user.password))) {
            return user;
        }
    }
}

export default new UsersService();
