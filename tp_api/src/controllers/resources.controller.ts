import { Prisma, PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient()

const createResource = async (req: Request, res: Response) => {
    try {
        const result = await prisma.resources.create({
            data: { ...req.body }
        })
        res.status(200).json(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

const updateResource = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const resource = await prisma.resources.update({
            where: { id: Number(id) },
            data: { ...req.body }
        })
        res.status(200).json(resource)
    } catch (error) {
        res.status(500).send(error)
    }
}

const getAllResources = async (req: Request, res: Response) => {
    try {
        const resource = await prisma.resources.findMany()
        res.status(200).json(resource)
    } catch (error) {
        res.status(500).send(error)
    }
}

const getResource = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const resource = await prisma.resources.findFirst({
            where: { id: Number(id) }
        })
        res.status(200).json(resource)
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteResource = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const resource = await prisma.resources.delete({
            where: { id: Number(id) }
        })
        res.status(200).json(resource)
    } catch (error) {
        res.status(500).send(error)
    }
}

export default {
    createResource,
    updateResource,
    getAllResources,
    getResource,
    deleteResource
}