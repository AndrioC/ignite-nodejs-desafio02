import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    // Complete aqui
    const user = this.usersRepository.findById(user_id)
    const list = this.usersRepository.list()

    if (!user.admin){
      throw new Error("User doesn't have permission tho this feature!")
    }

    /* if (!user){
      throw new Error("User doesn't not exist!")
    } */

    return list
  }
}

export { ListAllUsersUseCase };
