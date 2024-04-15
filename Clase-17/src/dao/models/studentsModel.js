import mongoose from 'mongoose';

const studentCollection = 'students';

// Defino el esquema de la coleccion con el siguiente formato:
// first_name / last_name / email / gender / grade / group
// apto para hacer sort sin errores de objectId
const studentSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    gender: { type: String, required: true },
    grade: { type: Number, required: true },
    group: { type: String, required: true }
});




const studentModel = mongoose.model(studentCollection, studentSchema);

export default studentModel;