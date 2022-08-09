import { Request, Response} from "express";
import * as Dog from '../models/Dog';

export const home = (req:Request,res:Response)=>{
    res.render('pages/page',{
        banner:{
            title: 'Todos os animais',
            backgroundImage: 'allanimals.jpg'
        }
    })
}
export const dogs = (req:Request,res:Response)=>{
    res.render('pages/page',{
        banner:{
            title: 'Todos os cachorros',
            backgroundImage: 'banner_dog.jpg'
        },
        photos:Dog.getDogs
    })
}
export const cats = (req:Request,res:Response)=>{
    res.render('pages/page',{
        banner:{
            title: 'Todos os gatos',
            backgroundImage: 'banner_cat.jpg'
        }
    })
}
export const fishes = (req:Request,res:Response)=>{
    res.render('pages/page',{
        banner:{
            title: 'Todos os peixes',
            backgroundImage: 'banner_fish.jpg'
        }
    })
}