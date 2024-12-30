const mongoose = require('mongoose');
require('dotenv').config();

const db = process.env.DB_CONNECT
async function connect() {
    try {
        await mongoose.connect(db);
        console.log('connect successfully')
    }catch(error) {
        console.log('connect failure')
    }
}
module.exports = { connect };