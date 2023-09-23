import mongoose from 'mongoose';

let isConnected: boolean = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true)

    if(!process.env.MONGODB_URL) {
        console.log('No MONGODB_URL found in .env file');
        return;
    }

    if(isConnected) {
        console.log('Already connected to database');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL)
        isConnected = true;
        console.log('Connected to database');
    }
    catch(err) {
        console.log('Error connecting to database');
        console.log(err);
    }
}