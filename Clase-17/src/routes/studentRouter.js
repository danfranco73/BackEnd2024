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

// GET student by id
studentRouter.get('/:id', async (req, res) => {
    try {
        const student = await studentModel.findById(req.params.id);
        res.json(student);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// use aggregate sorting by grade NOT by id from the students collection
studentRouter.get('/grade', async (req, res) => {
    try {
        const students = await studentModel.aggregate([
            // agrupo por promedios
            { $group: { _id: "$grade" } },
            // separo los mejores alumnos
            { $match: { grade: { $gte: 7 } } },
            // ordeno por grado
            { $sort: { grade: -1 } }
            // no se puede usar el sort en el find

               
        ]);
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

export default studentRouter;