import mongoose from 'mongoose'

const userCollection = 'users'

// los indices en las bases de datos son como los indices en los libros, nos permiten acceder a la información de manera más rápida, solo hay que usarlos con cuidado ya que si se abusa de ellos pueden ralentizar la base de datos
const userSchema = new mongoose.Schema({
    first_name: {type: String, required: true, index: true},
    last_name: {type: String, required: true},
    email: {type: String, required: true},
    gender: {type: String, required: true},
})

const userModel = mongoose.model(userCollection, userSchema);

export default userModel 