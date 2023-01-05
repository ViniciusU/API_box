import { Response, Request} from "express";
import {FindAllPostsUseCase } from "./FindAllTvBoxUseCases";
var base64 = require('node-base64-image');
var fs = require('fs');




export class FindAllPostsController{

    async handle(request:Request, response: Response){

        const findAllPostsUseCase  = new FindAllPostsUseCase ();
        const posts = await findAllPostsUseCase.execute()
      

     posts.forEach( element => {
        
          var imageAsBase64 = fs.readFileSync('C:\\Users\\vinig\\OneDrive\\Área de Trabalho\\app\\back\\tmp\\' + element.fileName, 'base64');
           element.fileName = imageAsBase64;
        });

      

        return response.json(posts)
    }
} 