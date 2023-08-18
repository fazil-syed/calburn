"use server";
import mongoose from "mongoose";

let isConnected = false; //variable to check if mongoose is connected or not

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (!process.env.MONGODB_URL) return console.log("MONGODB_URL NOT FOUND");
  if (isConnected) return console.log("Already Connected to MongoDB");

  try {
    {
      console.log(process.env.MONGODB_URL);
    }
    await mongoose.connect(
      "mongodb+srv://syedfazil539:25SKOH6jJ3edPyx8@cluster0.pytwohi.mongodb.net/?retryWrites=true&w=majority"
    );
    isConnected = true;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(`error connecting to MONGODB ${(error as Error).message}`);
  }
};
