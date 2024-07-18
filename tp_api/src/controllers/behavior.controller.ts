import { Prisma, PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient()

const createBehavior = async (req: Request, res: Response) => {
    try {
        const result = await prisma.behavior.create({
            data: { ...req.body }
        })
        res.status(200).json(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

const updateBehavior = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const behavior = await prisma.behavior.update({
            where: { id: Number(id) },
            data: { ...req.body }
        })
        res.status(200).json(behavior)
    } catch (error) {
        res.status(500).send(error)
    }
}

const getAllBehavior = async (req: Request, res: Response) => {
    try {
        const behavior = await prisma.behavior.findMany()
        res.status(200).json(behavior)
    } catch (error) {
        res.status(500).send(error)
    }
}

const getBehavior = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const behavior = await prisma.behavior.findFirst({
            where: { id: Number(id) }
        })
        res.status(200).json(behavior)
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteBehavior = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const behavior = await prisma.behavior.delete({
            where: { id: Number(id) }
        })
        res.status(200).json(behavior)
    } catch (error) {
        res.status(500).send(error)
    }
}

export default {
    createBehavior,
    updateBehavior,
    getAllBehavior,
    getBehavior,
    deleteBehavior
}