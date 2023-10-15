import {config} from 'dotenv'

config()

export const Config = Object.freeze({
    PORT: process.env.PORT || 8080,
    MONGO_URI: process.env.MONGO_URI as string
})