import studentModel from "../dao/models/studentsModel.js";
import { Router } from "express";
// incorporo populate para traer los datos de los cursos
import populate from "../dao/models/coursesModel.js";

const studentRouter = Router();

// get all students
studentRouter.get('/', async (req, res) => {
    try {
        const students = await studentModel.find();
        res.json(students);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// agreo un estudiante
studentRouter.post('/', async (req, res) => {
    try {
        const student = new studentModel(req.body);
        await student.save();
        res.json(student);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// agrego el _id del curso a la lista de cursos del estudiante
studentRouter.post('/addCourse', async (req, res) => {
    try {
        const student = await studentModel.findById(req.body.student_id);  
        student.courses.push({ course: req.body.course_id });
        await student.save();
        res.json(student);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
} )

// borro el contenido de la lista de cursos de todos los estudiantes
/* studentRouter.delete('/deleteCourses', async (req, res) => {
    try {
        const students = await studentModel.find();
        students.forEach(async student => {
            student.courses = [];
            await student.save();
        });
        res.json(students);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}); */

// con un student_id agrego el _id del curso a la lista de cursos del estudiante
studentRouter.post('/addCourse/:sid/:cid', async (req, res) => {
    try {
        const student = await studentModel.findById(req.params.sid);
        student.courses.push({ course: req.params.cid });
        await student.save();
        res.json(student);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
} )

// con un student_id usando populate traigo los datos de los cursos del estudiante
/* studentRouter.get('/:id', async (req, res) => {
    try {
        const student = await studentModel.findById(req.params.id).populate('courses.course');
        res.json(student);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}); */

// ahora uso sin el populate ya que incorporo populate en el modelo
studentRouter.get('/:id', async (req, res) => {
    try {
        const student = await studentModel.find({_id:req.params.id});
        res.json(student);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


export default studentRouter;