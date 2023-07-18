import mongoose, { ObjectId } from "mongoose";

export const CourseSchema = new mongoose.Schema({
    id: { type: ObjectId },
    courseName: {
        type: String,
        required: false,
    },
    price: {
        type: Number,
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
    startTime: {
        type: Date,
        required: false,
    },
    endTime: {
        type: Date,
        required: false
    },

}, {
    timestamps: true
});

export default mongoose.model.Course || mongoose.model('Course', CourseSchema);