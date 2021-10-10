import express from 'express';
import AppController from './controllers/app-controller';
import config from './config';
import {MongoClient} from 'mongodb';
import { SingletonFactory } from './singletonFactory';

const app = express()
const port = 3000


let start = async ()=>{
    let MONGO_CONFIG = config.MONGO_CONFIG;
    const client = new MongoClient(MONGO_CONFIG.uri);
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        SingletonFactory.initializeSingletons(client);

        app.get('/', async (req, res) => {
            const users = await new AppController(req, res).index();
            res.send(users);
        })
        
        // throw Error("got error");
        
        app.listen(port, () => console.log(`Example app listening on port ${port}!`))

 
    } catch (e) {
        console.error(e);
    }
}

start();