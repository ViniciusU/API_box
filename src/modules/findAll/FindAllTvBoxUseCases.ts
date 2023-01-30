import { prisma} from "../../database/prismaClient"




export class FindAllPostsUseCase {
    async execute (){
        const Posts = await prisma.equipments.findMany(
            {include:{
                Imagens:{

                    select:{
                        image:true,
                        typed:true
                    }
                    
                }
            }

                
            }
        );

        return(Posts);
    }
}