import { prisma } from "../../database/prismaClient";


interface ICreateTvBox{
    serial: string;
    description: string;
    destination:string;
    batch:string;
}

class ImporTvBoxUseCase{
  async  execute({serial,description,destination,batch}:ICreateTvBox,file:Express.Multer.File){
       
        console.log(file) 
        
        const newsImg = await prisma.box_tv.create({
            data: {
                serial,
                description,
                destination,
                batch,
                fileName: file.filename
            }

        });

    }
}

export {ImporTvBoxUseCase}