import {prisma} from '../../database/prismaClient'


class FindByIdTvBoxUseCase{
    async  execute(idImg:string){
          const find = await prisma.equipments.findFirst({
              where: {id: idImg},
              include:{
                mischaracterize:{
                  select:{
                    destination:true,
                    lat:true,
                    long:true,
                    resourcesComplement:true,
                    state:true

                  }
                }
              }

            })

            const image = await prisma.imagens.findFirst({
                where: {equipment_id: find?.id,
                    typed:"before"
                }
              })

            return({...find,fileName:image?.image});


       
  
      }
  }
  
  export {FindByIdTvBoxUseCase}