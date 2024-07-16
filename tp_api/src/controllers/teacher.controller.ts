import { Prisma, PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient()

const createTeacher = async (req: Request, res: Response) => {
    try {
        const result = await prisma.teacher.create({
            data: { ...req.body }
        })
        res.status(200).json(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

const updateTeacher = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const teacher = await prisma.teacher.update({
            where: { id: Number(id) },
            data: { ...req.body }
        })
        res.status(200).json(teacher)
    } catch (error) {
        res.status(500).send(error)
    }
}

const getAllTeachers = async (req: Request, res: Response) => {
    try {
        const teacher = await prisma.teacher.findMany()
        res.status(200).json(teacher)
    } catch (error) {
        res.status(500).send(error)
    }
}

const getTeacher = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const teacher = await prisma.teacher.findFirst({
            where: { id: Number(id) }
        })
        res.status(200).json(teacher)
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteTeacher = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const teacher = await prisma.teacher.delete({
            where: { id: Number(id) }
        })
        res.status(200).json(teacher)
    } catch (error) {
        res.status(500).send(error)
    }
}

export default {
    createTeacher,
    updateTeacher,
    getAllTeachers,
    getTeacher,
    deleteTeacher
}