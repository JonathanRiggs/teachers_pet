import { Prisma, PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient()

const createParent = async (req: Request, res: Response) => {
    try {
        const result = await prisma.parent.create({
            data: { ...req.body }
        })
        res.status(200).json(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

const updateParent = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const parent = await prisma.parent.update({
            where: { id: Number(id )},
            data: { ...req.body }
        })
        res.status(200).json(parent)
    } catch (error) {
        res.status(500).send(error)
    }
}

const getAllParents = async (req: Request, res: Response) => {
    try {
        const parent = await prisma.parent.findMany()
        res.status(200).json(parent)
    } catch (error) {
        res.status(500).send(error)
    }
}

const getParent = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const parent = await prisma.parent.findFirst({
            where: { id: Number(id) }
        })
        res.status(200).json(parent)
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteParent = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const parent = await prisma.parent.delete({
            where: { id: Number(id) }
        })
        res.status(200).json(parent)
    } catch (error) {
        res.status(500).send(error)
    }
}

export default {
    createParent,
    updateParent,
    getAllParents,
    getParent,
    deleteParent
}