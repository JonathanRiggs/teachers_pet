import { Prisma, PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient()

const createGrade = async (req: Request, res: Response) => {
    try {
        const result = await prisma.grades.create({
            data: { ...req.body }
        })
        res.status(200).json(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

const updateGrade = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const grade = await prisma.grades.update({
            where: { id: Number(id) },
            data: { ...req.body }
        })
        res.status(200).json(grade)
    } catch (error) {
        res.status(500).send(error)
    }
}

const getAllGrade = async (req: Request, res: Response) => {
    try {
        const grade = await prisma.grades.findMany()
        res.status(200).json(grade)
    } catch (error) {
        res.status(500).send(error)
    }
}

const getGrade = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const grade = await prisma.grades.findFirst({
            where: { id: Number(id) }
        })
        res.status(200).json(grade)
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteGrade = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const grade = await prisma.grades.delete({
            where: { id: Number(id) }
        })
        res.status(200).json(grade)
    } catch (error) {
        res.status(500).send(error)
    }
}

export default {
    createGrade,
    updateGrade,
    getAllGrade,
    getGrade,
    deleteGrade
}