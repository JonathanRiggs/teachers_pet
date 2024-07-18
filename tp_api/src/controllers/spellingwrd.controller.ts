import { Prisma, PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient()

const createSpellingWord = async (req: Request, res: Response) => {
    try {
        const result = await prisma.spellingWords.create({
            data: { ...req.body }
        })
        res.status(200).json(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

const updateSpellingWord = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const spellingWord = await prisma.spellingWords.update({
            where: { id: Number(id) },
            data: { ...req.body }
        })
        res.status(200).json(spellingWord)
    } catch (error) {
        res.status(500).send(error)
    }
}

const getAllSpellingWord = async (req: Request, res: Response) => {
    try {
        const spellingWord = await prisma.spellingWords.findMany()
        res.status(200).json(spellingWord)
    } catch (error) {
        res.status(500).send(error)
    }
}

const getSpellingWord = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const spellingWord = await prisma.spellingWords.findFirst({
            where: { id: Number(id) }
        })
        res.status(200).json(spellingWord)
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteSpellingWord = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const spellingWord = await prisma.spellingWords.delete({
            where: { id: Number(id) }
        })
        res.status(200).json(spellingWord)
    } catch (error) {
        res.status(500).send(error)
    }
}

export default {
    createSpellingWord,
    updateSpellingWord,
    getAllSpellingWord,
    getSpellingWord,
    deleteSpellingWord
}