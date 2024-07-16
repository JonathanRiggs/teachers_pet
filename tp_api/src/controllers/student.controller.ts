import { Prisma, PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
 
const prisma = new PrismaClient()

const createStudent = async (req: Request, res: Response) => {
    try {
        const result = await prisma.student.create({
            data: { ...req.body }
        })
        res.status(200).json(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

const updateStudent = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const student = await prisma.student.update({
            where: { id: Number(id)},
            data: { ...req.body }
        })
        res.status(200).json(student)
    } catch (error) {
        res.status(500).send(error)
    }
}

const getAllStudents = async (req: Request, res: Response) => {
    try {
        const student = await prisma.student.findMany()
        res.status(200).json(student)
    } catch (error) {
        res.status(500).send(error)
    }
}

const getStudent = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const student = await prisma.student.findFirst({
            where: { id: Number(id) }
        })
        res.status(200).json(student)
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteStudent = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const student = await prisma.student.delete({
            where: {id: Number(id) }
        })
        res.status(200).json(student)
    } catch (error) {
        res.status(500).send(error)
    }
}

export default {
    createStudent,
    updateStudent,
    getAllStudents,
    getStudent,
    deleteStudent
}