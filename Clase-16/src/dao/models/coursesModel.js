import mongoose from 'mongoose';

const courseCollection = 'courses';

const courseSchema= mongoose.Schema({
    title: {type: String, required: true, index: true, unique: true},
    description: String,
    difficulty: {type: String, enum: ['beginner', 'intermediate', 'advanced']},
    topics: {
        type: Array,
        default: []
    },
    professor: String,
    students:{
        type: Array,
        default: []
    }
})

const courseModel = mongoose.model(courseCollection, courseSchema)

export default courseModel;