require('dotenv').config();

const envConstants = {
    serverPort: process.env.PORT,
    mongodbUrl: process.env.MONGO_URL,
    jwtSecret: process.env.JWT_SECRET,
    jwtExpiresIn: process.env.JWT_EXPIRES_IN
}

module.exports = {
    envConstants
}