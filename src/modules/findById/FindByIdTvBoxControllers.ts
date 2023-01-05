import { Response, Request} from "express";
import {FindByIdTvBoxUseCase} from "./FindByIdTvBoxUseCases"

var base64 = require('node-base64-image');
var fs = require('fs');


  

export class FindPostsController{

    async handle(request:Request, response: Response){

        const findByIdTvBoxUseCase = new FindByIdTvBoxUseCase();
        
        const {idImg} = request.params;
    
        const posts= await findByIdTvBoxUseCase.execute(idImg)
    

        var imageAsBase64 = fs.readFileSync('C:\\Users\\vinig\\OneDrive\\Área de Trabalho\\app\\back\\tmp\\' + posts.fileName, 'base64');
        posts.fileName = imageAsBase64;
    

      

        return response.json(posts)
    }
} 