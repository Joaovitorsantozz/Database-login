import { CreateComplimentsService } from "../service/CreateComplimentsService"
import {Request,Response} from "express";
class CreateControllerCompliments{
    async handle(request:Request,response:Response){
        const{tag_id,user_receiver,user_sender,message}=request.body;
        const createComplimentsService= new CreateComplimentsService();
        
        const compliment=await createComplimentsService.execute({
            tag_id,user_receiver,user_sender,message
        })

        return response.json(compliment)
    }
}
export {CreateControllerCompliments}