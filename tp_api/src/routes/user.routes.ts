import express from "express";
import UserController from "../controllers/user.controller"

const app = express()

const userRouter = express.Router()

userRouter.post('/create', UserController.createUser)
userRouter.put('/update/:id', UserController.updateUser)
userRouter.get('/get_users', UserController.getAllUsers)
userRouter.get('/get/:id', UserController.getUser)
userRouter.delete('/delete/:id', UserController.deleteUser)

export default userRouter