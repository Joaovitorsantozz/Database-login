import {Request,Response,NextFunction} from "express"
import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../Repositories/UserRepositories";
import { User } from "../entities/User";
export async function ensureAdmin(request:Request,response:Response,next:NextFunction ){
  const {user_id}=request;
  const userRepositories=getCustomRepository(UserRepositories)
  const { admin } = await userRepositories.findOne(user_id) as User;
  if(admin){
      return next();
  }

  return response.status(401).json({
      error:"Admin is not unabled "
  });
}