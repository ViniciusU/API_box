import {prisma} from '../../database/prismaClient'


class FindByIdTvBoxUseCase{
    async  execute(idImg:string){
          const find = await prisma.box_tv.findFirst({
              where: {id: idImg}
            })

            return(find);
       
  
      }
  }
  
  export {FindByIdTvBoxUseCase}