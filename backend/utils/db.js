import mongoose from "mongoose";
const mongodbconnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {});
    console.log(`MongoDB Connected Successfullly: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default mongodbconnect;