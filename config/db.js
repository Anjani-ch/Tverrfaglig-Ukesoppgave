const mongoose = require('mongoose');

const connectToDB = async connectionURI => {
    try {
        await mongoose.connect(connectionURI, { useNewUrlParser: true, useUnifiedTopology: true, });
        console.log('CONNECTED TO DB...');
    } catch (err) {
        console.log('CONNECT ERROR');
        console.log(err);
    }
};

module.exports = connectToDB;