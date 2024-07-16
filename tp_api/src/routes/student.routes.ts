import express from "express";
import StudentController from "../controllers/student.controller";

const app = express()

const studentRouter = express.Router()

studentRouter.post('/create', StudentController.createStudent)
studentRouter.put('/update/:id', StudentController.updateStudent)
studentRouter.get('/get_all_students', StudentController.getAllStudents)
studentRouter.get('/get/:id', StudentController.getStudent)
studentRouter.delete('/delete', StudentController.deleteStudent)

export default studentRouter