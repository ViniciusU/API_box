import {prisma} from '../../database/prismaClient'
interface ICreateTvBox{
    serial: string;
    description: string;
    destination:string;
    batch:string;
}

class UpdateTvBoxUseCase{
    async  execute(idImg:string,{serial,description,destination,batch}:ICreateTvBox,file:Express.Multer.File){
          const find = await prisma.box_tv.update({
            where: {
                id: idImg,
            },
            data:{
                serial,
                description,
                destination,
                batch,
                fileName: file.filename
            }
          })

            return(find);
       
  
      }
  }
  
  export {UpdateTvBoxUseCase}

