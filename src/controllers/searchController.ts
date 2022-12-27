import { Request, Response} from "express";
import { Pet } from "../models/Pet";
import { createMenuObject } from "../helpers/createMenuObject";

export const search = (req:Request,res:Response)=>{
    res.render('pages/page', {
        menu: createMenuObject(''),
        
    })    
}