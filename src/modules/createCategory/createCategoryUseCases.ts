import {prisma} from '../../database/prismaClient'


class CreateCategoryUseCase{
    async  execute(model:string,type:string){
          const find = await prisma.category.create({
              data:{
                model,
                type
              }
            })

            return(find);
       
  
      }
  }
  
  export {CreateCategoryUseCase}