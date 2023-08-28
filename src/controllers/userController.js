import jwt from 'jsonwebtoken';
import UsersService from '../services/usersService.js';

class UserController {
    async getUser(req, res) {
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

    async addUser(req, res) {
        try {
            const { login, password, email } = req.body;

            if (!login || !password || !email) {
                res.status(400).send("All input is required");

                return;
            }

            const user = await UsersService.addUser(login, password, email);
            const token = jwt.sign(
                { id: user.id, login: user.login },
                process.env.TOKEN_KEY,
                {
                    expiresIn: 60000,
                }
            );

            res.cookie("jwt", token, {
                maxAge: 600000, // 10min
              });

            res.json(user);
        } catch(error) {
            res.status(500).json({ error })
        }
    }

    async login(req, res) {
        try {
            const { login, password } = req.body;

            if (!(login && password)) {
                return res.status(400).send("All input is required");
            }

            const user = await UsersService.login(login, password);

            if (!user) {
                res.status(400).send("Invalid Credentials");

                return;
            }

            const token = jwt.sign(
                { id: user.id, login: user.login },
                process.env.TOKEN_KEY,
                {
                    expiresIn: 60000,
                }
            );

            res.cookie("jwt", token, {
                maxAge: 600000, // 10min
              });

            res.json(user);
        } catch(error) {
            res.status(500).json({ error })
        }
    }
};

export default new UserController();
