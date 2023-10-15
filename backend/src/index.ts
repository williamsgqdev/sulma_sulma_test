import { dbConnection } from "./db-connection"
import App from './app';

(async ()=> {
    await dbConnection();

    const app = App();

})()