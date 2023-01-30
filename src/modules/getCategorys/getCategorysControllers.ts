import { Response, Request} from "express";
import {GetCategorysUseCase} from "./getCategorysUseCases"


  

export class GetCategorysController{

    async handle(request:Request, response: Response){

        const getCategorysUseCase= new GetCategorysUseCase();
        
    
    
        const posts= await  getCategorysUseCase.execute()
    


        return response.json(posts)
    }
} 