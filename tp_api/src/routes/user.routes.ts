import express from "express";
import UserController from "../controllers/user.controller"

const app = express()

const userRouter = express.Router()

userRouter.post('/create', UserController.createUser)
userRouter.put('/update', UserController.updateUser)
userRouter.get('/get_users', UserController.getAllUsers)
userRouter.get('/get/:id', UserController.getUser)
userRouter.delete('/delete', UserController.deleteUser)

export default userRouter