const mongoose = require('mongoose');
const { MONGO_DB_URI } = require('./env');

const connectToDb = async () => {
    try {
        const conn = await mongoose.connect(MONGO_DB_URI);
        console.log(`✅ Database connected to host: ${conn.connection.host}`);
    } catch (error) {
        console.error(`❌ Database connection error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectToDb;
