import {prisma} from '../../database/prismaClient'


class GetCategorysUseCase{
    async  execute(){
          const find = await prisma.category.findMany()
            return(find);


       
  
      }
  }
  
  export {GetCategorysUseCase}