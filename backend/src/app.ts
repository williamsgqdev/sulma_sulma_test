import express from "express";
import { Config } from "./config";
import { addFeedbak } from "./controllers/app.controller";
import { errorHandler, notFoundRoute, validateInput } from "./middleware";
import { createFeedbackDtoSchema } from "./dto";
import helmet from 'helmet';
import cors from 'cors';


export default () => {
   const app = express();

   app.use(cors());
   app.use(express.json())
   app.use(helmet());

   app.post('/api/feedback', validateInput(createFeedbackDtoSchema) ,addFeedbak);
   app.use('*', notFoundRoute);
   app.use(errorHandler);

   app.listen(Config.PORT, ()=> {
    console.log('listening on port ' + Config.PORT);
   })

   return app
}