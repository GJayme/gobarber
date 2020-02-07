import jwt from 'jasonwebtoken';

import User from '../models/User';

class SessionController {
    async sotre(req, res) {
        const { email, password } = req.body;

        const user = await User.findOne ({ where: { email }});

        if(!user) {
            res.status(401).json({ error: 'User not found' });  
        }

        if(!(await user.checkPassword(password))) {
            return res.status(401).json()
        }
    }
}

export default new SessionController();