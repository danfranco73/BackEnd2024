import mongoose from 'mongoose'

const studentCollection = 'students'

const studentSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    courses: {
        type: [
            {
                course: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'courses',
                },
            }
        ],
        default: []
    }
},
)

const studentModel = mongoose.model(studentCollection, studentSchema);

export default studentModel