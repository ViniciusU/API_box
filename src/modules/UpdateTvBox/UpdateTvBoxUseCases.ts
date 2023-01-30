import {prisma} from '../../database/prismaClient'
interface ICreateTvBox{
    serial: string;
    description: string;
    model_id:string;
    batch:string;

}

class UpdateTvBoxUseCase{
    async  execute(idImg:string,{serial,description,model_id,batch}:ICreateTvBox,file:Express.Multer.File){
        const tipo = "before"
          const find = await prisma.equipments.update({
            where: {
                id: idImg,
            },
            data:{
                serial,
                description,
                batch,
                model:model_id,
                
            Imagens:{
                create:{
                    image:file.filename,
                    typed:tipo

        
                }}
            }
            
          })

            return(find);
       
  
      }
  }
  
  export {UpdateTvBoxUseCase}

