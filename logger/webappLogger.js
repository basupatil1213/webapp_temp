import {createLogger, format, transports} from 'winston';
import dotenv from 'dotenv';

dotenv.config();

const { combine, timestamp, json } = format;


const webappLogger = createLogger({
    level: 'debug',
    format: combine(
        timestamp(),
        json()
    ),
    transports: [],
})

if(process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'local'){
    webappLogger.add( new transports.Console());
}
else{
    webappLogger.add( new transports.File({ filename: '/var/log/webapp/webapp.log', level: 'debug' }));
}
export default webappLogger;