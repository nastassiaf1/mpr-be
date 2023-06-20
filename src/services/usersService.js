import User from "./../db/models/users.model.js";

export default class UsersService {
    static async getUserById(id) {
        return User.findOne({ where: { id } })
    }
}