import { MongoOperations } from "../lib/mongoOperations";
import { User } from "../models/user";

export class UserService {

    mongoOperations: MongoOperations;
    
    constructor(mongoOperations: MongoOperations){
        this.mongoOperations = mongoOperations
    }

    async insertUser(user: User){
        let result = await this.mongoOperations.insertIntoUsers(user);
        return result;
    }

    async getUsers(){
        let result = await this.mongoOperations.getUsers();
        return result;
    }

}