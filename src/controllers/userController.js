import UsersService from '../services/usersService.js';

export default class UserController {
    static async getUser(req, res) {
        try {
            const user = await UsersService.getUserById(req.params.userId);

            if (user) {
                res.json(user);

                return;
            }

            res.status(404).send('Not found')
         } catch (error) {
            res.status(500).json({error: error})
         }
    }
};
