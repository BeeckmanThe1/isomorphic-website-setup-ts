import { Request, Response } from 'express'
const getRoot = (req: Request, res: Response) => res.send('Express + TypeScript Server')

export default {
    getRoot
}