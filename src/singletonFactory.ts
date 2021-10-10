import { MongoClient } from "mongodb";
import { MongoOperations } from "./lib/mongoOperations";
import { Singletons } from "./models/singletons";
import { UserService } from "./services/users";

export class SingletonFactory {

   static singletons = <Singletons>{ 
        mongoClient: null,
        mongoOperations: null,
        userService: null
    }

    static initializeSingletons(mongoClient: MongoClient){
        this.singletons.mongoClient = mongoClient;
        this.singletons.mongoOperations = new MongoOperations(this.singletons.mongoClient);
        this.singletons.userService = new UserService(this.singletons.mongoOperations);
    }

    static getSingleton(type: string){
        if(type == "MongoClient"){
            return this.singletons.mongoClient;
        }
        else if(type == "UserService"){
            return this.singletons.userService;
        }
        else if(type == "MongoOperations"){
            return this.singletons.mongoOperations;
        }
    }

}