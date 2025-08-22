import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const connectionParams = {newUrlParser:true};
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error in DB Connection: ${error.message}`);
    process.exit(1); // Exit with failure
  }
};

export default connectDB;