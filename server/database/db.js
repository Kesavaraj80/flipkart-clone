import mongoose from 'mongoose';



// console.log(MONGO_URL);

const Connection = async (URL) => {
    try {
        await mongoose.connect(URL);
        console.log("DB Connected")
    } catch (error) {
        console.log(error.message);
    }

}

export default Connection;
