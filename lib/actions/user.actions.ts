"use server";
import User from "../models/user.model";
import { connectToDB } from "../mongoose";

interface Params {
  userId: string;
  name: string;
  age: string;
  bloodGroup: string;
  gender: string;
  weight: string;
  height: string;
}
export async function updateUser({
  userId,
  name,
  age,
  bloodGroup,
  gender,
  weight,
  height,
}: Params): Promise<void> {
  try {
    connectToDB();
    await User.findOneAndUpdate(
      { id: userId },
      {
        name,
        age,
        bloodGroup,
        gender,
        weight,
        height,
        onboarded: true,
      },
      { upsert: true }
    );
   
  } catch (error: any) {
    throw new Error(`Failed to create/update user: ${error.message}`);
  }
}
export async function fetchUser(userId: string) {
  try {
    connectToDB();

    return await User.findOne({ id: userId });
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
}
