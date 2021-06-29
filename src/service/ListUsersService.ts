import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../Repositories/UserRepositories";
import { classToPlain } from "class-transformer";

class ListUserService {
  async execute() {
    const usersRepositories = getCustomRepository(UserRepositories);

    const users = await usersRepositories.find();

    return classToPlain(users);
  }
}

export { ListUserService };