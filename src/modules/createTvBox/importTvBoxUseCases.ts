import { prisma } from "../../database/prismaClient";


interface ICreateTvBox{
    serial: string;
    description: string;
    batch:string;
    model_id:string;
}

class ImporTvBoxUseCase{
    async  execute({serial,description,model_id,batch}:ICreateTvBox,file:Express.Multer.File){
         
          console.log(file) 
          const tipo = "before"
          const newsImg = await prisma.equipments.create({
              data: {
                  serial,
                  description,
                  batch,
                  model:model_id,
                  Imagens:{
                    create:{
                        image:file.filename,
                        typed:tipo

            
                    }
                  }
                  }
                  
              }
  
          )

          return(newsImg)
  
      }
  }

export {ImporTvBoxUseCase}