import {prisma} from '../../database/prismaClient'


class DeleteTvBoxUseCase{
    async  execute(idImg:string){

        
            const transaction = prisma.$queryRaw`
            DELETE FROM equipments where id=${idImg};
            `
               
            const transaction1 = prisma.$queryRaw`
            DELETE FROM imagens where equipment_id=${idImg};
                `
                    
            const transaction2 = prisma.$queryRaw`
            DELETE FROM mischaracterize where equipment_id=${idImg};
            `

            
            return({transaction, transaction1, transaction2});
       
  
      }
  }
  
  export {DeleteTvBoxUseCase}