import {Request,Response,NextFunction} from "express" 
import { verify } from "jsonwebtoken";
import { nextTick } from "process"
interface IPayload{
     sub:string
}
export function ensureAuthenticated(request:Request,response:Response,next:NextFunction){
     const token=request.headers.authorization

     if(!token){
          return response.status(401).end();
     }
     const[]=token.split(" ");
     try{
          const {sub}=verify(token,"4f93ac9d10cb751b8c9c646bc9dbccb9")as IPayload 
          request.user_id=sub; 
          return next();
     }catch(err){
          return response.status(401).end();
     }
}