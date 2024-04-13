const mongoose = require("mongoose");
const { Schema } = mongoose;
const userShema = new Schema(
    {
        name: String,
        username: String,
        email: String,
        website: String,
        address: {
            street: String,
            suite: String,
            city: String,
            zipcode: String,
        },
        geo: {
            lat: string,
            lng: string
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('User', userShema, 'User');