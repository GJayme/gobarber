import jwt from 'jasonwebtoken';

import User from '../models/User';


class SessionController {
    async sotre(req, res) {
        const { email, password } = req.body
    }
}

export default new SessionController();