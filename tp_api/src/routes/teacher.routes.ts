import express from "express";
import TeacherController from "../controllers/teacher.controller";

const app = express()

const teacherRouter = express.Router()

teacherRouter.post('/create', TeacherController.createTeacher)
teacherRouter.put('/update/:id', TeacherController.updateTeacher)
teacherRouter.get('/get_all_teachers', TeacherController.getAllTeachers)
teacherRouter.get('/get/:id', TeacherController.getTeacher)
teacherRouter.delete('/delete/:id', TeacherController.deleteTeacher)

export default teacherRouter