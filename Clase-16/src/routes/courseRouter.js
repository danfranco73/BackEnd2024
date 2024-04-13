import { Router } from "express";
import courseModel from '../dao/models/coursesModel.js';

const courseRouter = Router();

// get all courses
courseRouter.get('/', async (req, res) => {
    try {
        const courses = await courseModel.find();
        res.json(courses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// get course by title
courseRouter.get('/search', async (req, res) => {
    try {
        const courses = await courseModel.find({ title: req.query.title }).explain();
        res.json(courses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// create a course
courseRouter.post('/', async (req, res) => {
    try {
        const course = new courseModel(req.body);
        await course.save();
        res.json(course);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
})


export default courseRouter;