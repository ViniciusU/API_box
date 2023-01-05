import { Response, Request} from "express";
import {DeleteTvBoxUseCase} from "./DeleteTvBoxUseCases"

var base64 = require('node-base64-image');
var fs = require('fs');


  

export class DeletePostsController{

    async handle(request:Request, response: Response){

        const deleteTvBoxUseCase = new DeleteTvBoxUseCase();
        
        const {idImg} = request.params;
    
        const posts= await deleteTvBoxUseCase.execute(idImg)

      

        return response.json(posts)
    }
} 