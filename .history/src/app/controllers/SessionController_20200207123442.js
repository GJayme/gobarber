import jwt from 'jasonwebtoken';

import User from '../models/User';


class SessionController {
    async sotre(req, res) {
        const { email, password } = req.body;

        const user = await User.findOne ({ where: { email }});
    }
}

export default new SessionController();