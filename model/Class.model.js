import mongoose, { ObjectId } from "mongoose";

export const ClassSchema = new mongoose.Schema({
    id: { type: ObjectId },
    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    },

    className: {
        type: String,
        required: false,
    },
    startTimeClass: {
        type: String,
        required: false,
    },
    endTimeClass: {
        type: String,
        required: false
    },

},
    { timestamps: true });

export default mongoose.model.Class || mongoose.model('Class', ClassSchema);