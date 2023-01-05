import { Request, Response } from "express";
import { ImporTvBoxUseCase} from "./importTvBoxUseCases"

class ImporTvBoxControllers{
    constructor(private importNewsImgsUseCase: ImporTvBoxUseCase){}
    handle(request:Request, response:Response):Response {

        const file = request.file as Express.Multer.File;



        const {serial, description, destination, batch} = request.body;
        
        this.importNewsImgsUseCase.execute({serial, description, destination, batch},file);

        return response.send(); //retorna 200 

    }
}

export {ImporTvBoxControllers};