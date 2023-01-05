import { Request, Response } from "express";
import { UpdateTvBoxUseCase} from "./UpdateTvBoxUseCases"

class UpdateTvBoxControllers{
    constructor(private updateUseCase: UpdateTvBoxUseCase){}
    handle(request:Request, response:Response):Response {



        const file = request.file as Express.Multer.File;
        const {idImg} = request.params;
        const {serial, description, destination, batch} = request.body;
        this.updateUseCase.execute(idImg,{serial, description, destination, batch},file);

        return response.send(); //retorna 200 

    }
}

export {UpdateTvBoxControllers};