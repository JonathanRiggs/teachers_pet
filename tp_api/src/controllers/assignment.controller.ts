import { Prisma, PrismaClient } from "@prisma/client";
import { Response, Request } from "express";

const prisma = new PrismaClient()

const createAssignment = async (req: Request, res: Response) => {
    try {
        const result = await prisma.assignments.create({
            data: { ...req.body }
        })
        res.status(200).json(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

const updateAssignment = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const assignment = await prisma.assignments.update({
            where: { id: Number(id)},
            data: { ...req.body } 
        })
        res.status(200).json(assignment)
    } catch (error) {
        res.status(500).send(error)
    }
}

const getAllAssignments = async (req: Request, res: Response) => {
    try {
        const assignment = await prisma.assignments.findMany()
        res.status(200).json(assignment)
    } catch (error) {
        res.status(500).send(error)
    }
}

const getAssignments = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const assignment = await prisma.assignments.findFirst({
            where: { id: Number(id) }
        })
        res.status(200).json(assignment)
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteAssignment = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const assignment = await prisma.assignments.delete({
            where: { id: Number(id) }
        })
        res.status(200).json(assignment)
    } catch (error) {
        res.status(500).send(error)
    }
}

export default {
    createAssignment,
    updateAssignment,
    getAllAssignments,
    getAssignments,
    deleteAssignment
}