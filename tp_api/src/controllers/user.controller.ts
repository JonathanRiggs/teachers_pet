import { Prisma, PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { Express } from "express";

const prisma = new PrismaClient()

const createUser = async (req: Request, res: Response) => {
    try {
        const result = await prisma.user.create({
            data: { ...req.body }
        })
        res.status(200).json(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

const updateUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const user = await prisma.user.update({
            where: { id: Number(id) },
            data: { ...req.body }
        })
        res.status(200).json(user)
    } catch (error) {
        res.status(500).send(error)
    }
}

const getAllUsers = async (req: Request, res: Response) => {
    try {
        const user = await prisma.user.findMany()
        res.status(200).json(user)
    } catch (error) {
        res.status(500).send(error)
    }
}

const getUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const user = await prisma.user.findFirst({
            where: { id: Number(id) },
        })
        res.status(200).json(user)
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const user = await prisma.user.delete({
            where: { id: Number(id) }
        })
        res.status(200).json(user)
    } catch (error) {
        res.status(500).send(error)
    }
}

export default {
    createUser,
    updateUser,
    getAllUsers,
    getUser,
    deleteUser
}