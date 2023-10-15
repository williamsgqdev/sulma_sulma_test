import { connect } from "mongoose";
import { Config } from "./config";

export const dbConnection = async () => {
    try {
        await connect(Config.MONGO_URI)
        console.log('Connected to Db');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};