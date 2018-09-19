//////////////
// Imports //
////////////

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/////////////
// Schema //
///////////

const PostSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'users' },
    text: { type: String, required: true },
    name: { type: String },
    avatar: { type: String },
    likes: [
        {
            user: { type: Schema.Types.ObjectId, res: 'users' }
        }
    ],
    comments: [
        {
            user: { type: Schema.Types.ObjectId, res: 'users' },
            text: { type: String },
            name: { type: String },
            avatar: { type: String },
            date: { type: Date,  default: Date.now() }
        }
    ],
    date: { type: Date, default: Date.now() }
});

//////////////
// Exports //
////////////

module.exports = post = mongoose.model('posts', PostSchema, 'posts');
