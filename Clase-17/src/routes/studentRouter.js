import { Router } from "express";
import studentModel from "../dao/models/studentsModel.js";


const studentRouter = Router();

// GET all students
studentRouter.get('/all', async (req, res) => {
    try {
        const students = await studentModel.find();
        res.json(students);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// obtengo el promedio de los hombres y de las mujeres
studentRouter.get('/average', async (req, res) => {
    try {
        const students = await studentModel.aggregate([
            // agrupo por genero
            { $group: { _id: "$gender", average: { $avg: "$grade" } } }
        ]);
        res.json(students);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// use aggregate sorting by grade NOT by id from the students collection
studentRouter.get('/grade', async (req, res) => {
    try {
        const students = await studentModel.aggregate([
            // separo los mejores alumnos
            { $match: { grade: { $gte: 8 } } },
            // ordeno por grado
            { $sort: { grade: -1 } }
        ]);
        res.json(students);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// using paginate
studentRouter.get('/paginate', async (req, res) => {
    try {
        const students = await studentModel.paginate({
            gender: 'Female'
        }, { page: 1, limit: 10 });
        res.json(students);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET student by id
studentRouter.get('/:id', async (req, res) => {
    try {
        const student = await studentModel.findById(req.params.id);
        res.json(student);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


export default studentRouter;