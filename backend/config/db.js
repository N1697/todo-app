import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit(1);

    /**
     The purpose of using process.exit(1) in the context of the connectDB function
     is to ensure that if an error occurs during the database connection process,
     the Node.js process will be terminated with an error status. This can be useful in production environments,
     where it may be important to ensure that the application is stopped if there is an issue with the database connection.
     */
  }
};

export default connectDB;
