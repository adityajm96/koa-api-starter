const jwt = require('jsonwebtoken');
const config = require('../config/config.json');
module.exports = {
    issue(payload, expireIn) {
        return jwt.sign({
            data: payload
        }, config.development.secret, { expiresIn: expireIn });

    },
    verify(token) {
        return jwt.verify(token, config.development.secret);
    }
}