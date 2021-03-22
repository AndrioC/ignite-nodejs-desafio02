import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    // Complete aqui
    const user = new User()

    Object.assign(user, {
      name,
      email,
      created_at: new Date(),
      updated_at: new Date()
    })

    this.users.push(user)

    return user
  }

  findById(id: string): User | undefined {
    const findId = this.users.find((user) => user.id === id)

    return findId
  }

  findByEmail(email: string): User | undefined {
    const findEmail = this.users.find((user) => user.email === email)

    return findEmail
  }

  turnAdmin(receivedUser: User): User {
    const findUser = this.users.find((user) => user.id === receivedUser.id)

    console.log(findUser)

    findUser.admin = true
    findUser.updated_at = new Date()

    return findUser
  }

  list(): User[] {
   return this.users
  }
}

export { UsersRepository };
