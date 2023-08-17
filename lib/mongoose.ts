import mongoose from "mongoose";

let isConnected = false; //variable to check if mongoose is connected or not

export const connectToDB = async () => {
  // mongoose.set("strictQuery", true);
  // if (!process.env.MONGODB_URL) return console.log("MONGODB_URL NOT FOUND");
  // if (isConnected) return console.log("Already Connected to MongoDB");
  const MONGODB_URL =
    "mongodb+srv://syedfazil539:adT3EFG0V6ML3oyx@cluster0.mb6yppf.mongodb.net/?retryWrites=true&w=majority";
  try {
    await mongoose.connect(MONGODB_URL);
    isConnected = true;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(`error connecting to MONGODB ${(error as Error).message}`);
  }
};
