import studentModel from "../dao/models/studentsModel";
import { Router } from "express";

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

export default studentRouter;