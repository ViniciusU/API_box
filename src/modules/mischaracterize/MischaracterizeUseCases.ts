import { prisma } from "../../database/prismaClient";


interface ICreateTvBox{
    equipment_id:string,
    destination:string,
    resourcesComplement:string,
    state:string
    long:string
    lat:string
}

class MischaracterizeUseCases{
    async  execute({ 
        equipment_id,
        destination,
        resourcesComplement,
        state,
        long,
        lat}:ICreateTvBox,file:Express.Multer.File){
         
          console.log(file) 
          const tipo = "after"
      
  
          const newsImg = await prisma.mischaracterize.create({
              data: {
                equipment_id,
                destination,
                resourcesComplement,
                state,
                long,
                lat,
                updateDate: new Date()}
           
              }
          )

          const imgs = await prisma.imagens.create({
            data:{
                  image:file.filename,
                  typed:tipo,
                  equipment_id:  equipment_id

              
            }
          })

          return({newsImg,imgs})
  
      }
  }

export {MischaracterizeUseCases}