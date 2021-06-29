import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../Repositories/ComplimentsRepositories"
import { UserRepositories } from "../Repositories/UserRepositories";

interface IComplimentRequest{
    tag_id:string;
    user_sender:string;
    user_receiver:string;
    message:string;
}
class CreateComplimentsService{
  async execute({tag_id,user_receiver,user_sender,message}:IComplimentRequest){
    const complimentsRepositories=getCustomRepository(ComplimentsRepositories);
    const userRepositories=getCustomRepository(UserRepositories);

    if(user_sender=== user_receiver){
        throw new Error("The user cant send a compliment for yourself")
    }
    const userReceiverExist=await userRepositories.findOne(
        user_receiver,
    );

    if(!userReceiverExist){
        throw new Error("The user receiver does not exist");
    }
    const compliments=complimentsRepositories.create({
        tag_id,
        user_receiver,
        user_sender,
        message,
    })
    await complimentsRepositories.save(compliments);
    return compliments;
  }
}
export{CreateComplimentsService}