import express, { Router } from 'express';
import ResourcesController from '../controllers/resources.controller';

const app = express()

const resourceRouter = express.Router()

resourceRouter.post('/create', ResourcesController.createResource)
resourceRouter.put('/update/:id', ResourcesController.updateResource)
resourceRouter.get('/get_all', ResourcesController.getAllResources)
resourceRouter.get('/get/:id', ResourcesController.getResource)
resourceRouter.delete('/delete/:id', ResourcesController.deleteResource)


export default resourceRouter