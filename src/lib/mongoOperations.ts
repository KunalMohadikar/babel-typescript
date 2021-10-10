import { MongoClient } from 'mongodb';
import { User } from '../models/user';

export class MongoOperations{

    private client: MongoClient;

    constructor(client: MongoClient){
        this.client = client;
    }

    async insertIntoUsers(user: User){
        let result = await this.client.db("real_estate").collection("Users").insertOne(user);
        return result;
    }

    async getUsers(){
        let result = await this.client.db("real_estate").collection("Users").find({}).toArray();
        return result;
    }



}