import { NextFunction, Request, Response } from "express";
import Joi from "joi";

export const validateInput = (schema: Joi.Schema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req.body);       

        if (error) {
            return res.status(400).json({message: error.message});
        }
    
        next();
    }
}