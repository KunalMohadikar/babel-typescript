import { MongoClient } from "mongodb";
import { MongoOperations } from "../lib/mongoOperations";
import { UserService } from "../services/users";

export interface Singletons{
    mongoClient: MongoClient|null,
    userService: UserService|null,
    mongoOperations: MongoOperations|null
}