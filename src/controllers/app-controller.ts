import { UserService } from "../services/users";
import { SingletonFactory } from "../singletonFactory";

export default class AppController {
    
  userService: UserService;
  constructor(private request:any, private response:any) {
    this.userService = <UserService>SingletonFactory.getSingleton("UserService");
  }
  
  async index (): Promise<any> {
    let result = await this.userService.getUsers();
    return result;
  }
}