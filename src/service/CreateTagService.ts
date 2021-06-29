import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../Repositories/TagsRepositories"

class CreateTagService {
    async execute(name:string) {
        const tagsRepositories=getCustomRepository(TagsRepositories);

        if(!name){
            throw new Error("Incorrect name");
        }
        const tagsAlreadyExist= await tagsRepositories.findOne({
            name
        });
        
        if(tagsAlreadyExist){
            throw new Error("Tag already exist")
        }

        const tag=tagsRepositories.create({
            name
        })
        await tagsRepositories.save(tag);
        return tag;
    }
}
export { CreateTagService }