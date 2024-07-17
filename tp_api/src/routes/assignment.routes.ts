import express from "express";
import AssignmentController from "../controllers/assignment.controller";

const app = express()

const assignmentRouter = express.Router()

assignmentRouter.post('/create', AssignmentController.createAssignment)
assignmentRouter.put('/update/:id', AssignmentController.updateAssignment)
assignmentRouter.get('/get_all', AssignmentController.getAllAssignments)
assignmentRouter.get('/get/:id', AssignmentController.getAssignments)
assignmentRouter.delete('/delete/:id', AssignmentController.deleteAssignment)

export default assignmentRouter