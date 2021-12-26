const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProfileSchema = new Schema({
/*     account: {
        ref: "User",
        type: Schema.Types.ObjectId
    }, */
/*     avatar: {
        type: String,
        required: false,
    },  */
    Fullname: {
      type: String,
      required: true
    },
    dateOfBirth: {
        type: Date,
        trim: true,
    },
    phone: {
        type: String,
        required: true
      },
    gender: {
        type: String,
        required: true
      },
    address: {
        type: String,
        required: true
      },
    inputBackgroundisease: {
        type: String,
        required: true
    },
    inputHPC: {
        type: String,
        required: true
    },
}, { timestamps: true})

module.exports = mongoose.model('Profile', ProfileSchema)
