import { Request, Response } from "express";
import { MischaracterizeUseCases} from "./MischaracterizeUseCases"

class MischaracterizeControllers{
    constructor(private mischaracterizeUseCases: MischaracterizeUseCases){}
    handle(request:Request, response:Response):Response {

        const file = request.file as Express.Multer.File;
        const {
            equipment_id,
            destination,
            resourcesComplement,
            state,
            long,
            lat} = request.body
            
        this.mischaracterizeUseCases.execute({
            equipment_id,
            destination,
            resourcesComplement,
            state,
            long,
            lat},file);

        return response.send(); //retorna 200 

    }
}

export {MischaracterizeControllers};