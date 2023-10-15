import { Request, Response } from "express";
import { Feedback } from "../models/feedback.model";
import { ICreateFeedBackDto } from "../dto";

const addFeedbak = async(req: Request<{}, {}, ICreateFeedBackDto>, res: Response) => {
    try {
        const feedback = new Feedback(req.body);
        await feedback.save();
        return res.status(200).json({
         message: 'Feedback added successfully',
         data: feedback
        }); 
    } catch (error) {
        return  res.status(500).json({
            message: 'Something went wrong'
        })
    }
   
}

export {
    addFeedbak
}