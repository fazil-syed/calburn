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
  connectToDB();
  try {
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
