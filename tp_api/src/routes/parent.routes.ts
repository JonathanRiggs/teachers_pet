import express from "express";
import ParentController from "../controllers/parent.controller";

const app = express()

const parentRouter = express.Router()

parentRouter.post('/create', ParentController.createParent)
parentRouter.put('/update/:id', ParentController.updateParent)
parentRouter.get('/get_all', ParentController.getAllParents)
parentRouter.get('/get/:id', ParentController.getParent)
parentRouter.delete('/delete/:id', ParentController.deleteParent)

export default parentRouter

