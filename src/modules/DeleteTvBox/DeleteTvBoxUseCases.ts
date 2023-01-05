import {prisma} from '../../database/prismaClient'


class DeleteTvBoxUseCase{
    async  execute(idImg:string){
          const find = await prisma.box_tv.delete({
              where: {id: idImg}
            })

            return(find);
       
  
      }
  }
  
  export {DeleteTvBoxUseCase}