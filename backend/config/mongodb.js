import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`);
    console.log("DB Connected");
  } catch (err) {
    console.error("DB connection failed:", err);
    process.exit(1);
  }
};

export default connectDB;









