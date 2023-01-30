import { Response, Request} from "express";
import {CreateCategoryUseCase} from "./createCategoryUseCases"
import {z} from "zod"

var base64 = require('node-base64-image');
var fs = require('fs');


export class CreateCategoryController{

    async handle(request:Request, response: Response){

        const createCategoryUseCase = new CreateCategoryUseCase();

        const createCategory = z.object({
            type: z.string(),
            model: z.string()
    
          })
    
        const {type, model} = createCategory.parse(request.body)

        const posts= await createCategoryUseCase.execute(type,model)

      

        return response.json(posts)
    }
} 