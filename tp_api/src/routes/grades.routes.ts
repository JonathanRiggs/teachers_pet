import express from 'express';
import GradesController from '../controllers/grades.controller';

const app = express()

const gradeRouter = express.Router()

gradeRouter.post('/create', GradesController.createGrade)
gradeRouter.put('/update/:id', GradesController.updateGrade)
gradeRouter.get('/get_all', GradesController.getAllGrade)
gradeRouter.get('/get/:id', GradesController.getGrade)
gradeRouter.delete('/delete/:id', GradesController.deleteGrade)

export default gradeRouter;