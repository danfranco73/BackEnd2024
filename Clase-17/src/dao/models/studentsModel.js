import mongoose from 'mongoose';
import mongoosPaginate from 'mongoose-paginate-v2';

const studentCollection = 'students';

const studentSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    gender: { type: String, required: true },
    grade: { type: Number, required: true },
    group: { type: String, required: true }
});



studentSchema.plugin(mongoosPaginate);
const studentModel = mongoose.model(studentCollection, studentSchema);

export default studentModel;