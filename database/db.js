import mongoose from 'mongoose';


const DBConnection = async () => {
    const MONGODB_URL = 'mongodb+srv://gracemajohnson:40q4wT1ON7L3pI41@file-sharing.5axrxzv.mongodb.net/?retryWrites=true&w=majority';
    try {
        await mongoose.connect(MONGODB_URL, { useNewUrlParser: true});
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Error while connecting with the database',error.message);
    }
}

export default DBConnection;