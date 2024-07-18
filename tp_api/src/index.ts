import { PrismaClient } from "@prisma/client";
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import userRouter from "./routes/user.routes";
import parentRouter from "./routes/parent.routes";
import teacherRouter from "./routes/teacher.routes";
import studentRouter from "./routes/student.routes";
import assignmentRouter from "./routes/assignment.routes";
import resourceRouter from "./routes/resources.routes";
import gradeRouter from "./routes/grades.routes";
import spellingWordRouter from "./routes/spellingwrd.routes";

dotenv.config()

// App Variables

const PORT: number = parseInt(process.env.PORT as string, 10)
const app = express()
const prisma = new PrismaClient()

// App Configuration
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use('/user', userRouter)
app.use('/parent', parentRouter)
app.use('/teacher', teacherRouter)
app.use('/student', studentRouter)
// Data Config
app.use('/assignment', assignmentRouter)
app.use('/spelling-word', spellingWordRouter)
app.use('/grade', gradeRouter)
app.use('/resource', resourceRouter)

async function main() {
    // write client queries here
}


main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })

// Server Activation

if (!process.env.PORT) {
    process.exit(1)
}
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})