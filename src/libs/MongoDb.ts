import { MongoClient, Db } from 'MongoDb'
import { logger } from './logger'

let mongoConnection: MongoClient | null = null

export const connectMongoDb = async (): Promise<Db> => {
    
    try {
        const uri = 'mongodb://localhost:27017/'

        if(!mongoConnection){
            mongoConnection = await MongoClient.connect(uri)
            logger.info('MONGO_CONNECT_SUCESS', 'MongoDb connected', )
        }
       return mongoConnection.db()
        
    } catch (error) {

        logger.error('ERROR_CONNECTION_MONGODB', error)
        
    }
    
}