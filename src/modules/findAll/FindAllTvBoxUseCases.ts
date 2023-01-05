import { prisma} from "../../database/prismaClient"




export class FindAllPostsUseCase {
    async execute (){
        const Posts = await prisma.box_tv.findMany();

        return(Posts);
    }
}