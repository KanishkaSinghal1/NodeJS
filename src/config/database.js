import mongoose from "mongoose";
import dns from 'node:dns/promises';
dns.setServers(['1.1.1.1', '8.8.8.8']); 
const  connectDB = async () => {
    try {
         console.log(process.env.MONGODB_URI);
        const connectionInstance = await mongoose.connect
        (`${process.env.MONGODB_URI}`)
       
        console.log(`\n MongoDB connected !!!
            ${connectionInstance.connection.host}`);
    } catch(error) {
        console.log("MongoDB connection failed", error);
        process.exit(1)
    }
}

export default connectDB;
