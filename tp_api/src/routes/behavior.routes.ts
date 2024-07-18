import express from 'express';
import BehaviorController from '../controllers/behavior.controller';

const app = express()

const behaviorRouter = express.Router()

behaviorRouter.post('/create', BehaviorController.createBehavior)
behaviorRouter.put('/update/:id', BehaviorController.updateBehavior)
behaviorRouter.get('/get_all', BehaviorController.getAllBehavior)
behaviorRouter.get('/get/:id', BehaviorController.getBehavior)
behaviorRouter.delete('/delete/:id', BehaviorController.deleteBehavior)


export default behaviorRouter