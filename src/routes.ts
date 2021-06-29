import {Router} from "express";
import { AuthenticateUserController } from "./controller/AuthenticateUserController";
import { CreateControllerCompliments } from "./controller/CreateControllerCompliment";
import { CreateTagController } from "./controller/CreateTagController";
import { CreateUserController} from "./controller/CreateUserController";
import { ListTagController } from "./controller/ListTagController";
import { ListUsersController } from "./controller/ListUserController";
import { ListUserReceiverComplimentsController } from "./controller/ListUserReceiverComplimentsController";
import { ListUserSendComplimentsController } from "./controller/ListUserSendComplimentsController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticate";
const router= Router();

const createUserController= new CreateUserController();
const createTagController=new CreateTagController();
const authenticateUserController=new AuthenticateUserController();
const complimentController=new CreateControllerCompliments()
const listTagController=new ListTagController();
const listUserReceiveComplimentsController=new ListUserReceiverComplimentsController();
const listUserSendComplimentsController=new ListUserSendComplimentsController();
const listUsersController=new ListUsersController()
router.get("/tags", ensureAuthenticated, listTagController.handle);

router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);
router.post(
  "/compliments",
  ensureAuthenticated,
  complimentController.handle
);

router.get(
  "/users/compliments/send",
  ensureAuthenticated,
  listUserSendComplimentsController.handle
);
router.get(
  "/users/compliments/receive",
  ensureAuthenticated,
  listUserReceiveComplimentsController.handle
);

router.get("/users", ensureAuthenticated, listUsersController.handle);
export{router}
 