import * as z from "zod";

export const UserValidation = z.object({
  name: z
    .string()
    .min(3, { message: "MINIMUM 3 CHARACTERS" })
    .max(30, { message: "MAXIMUM 30 CHARARCTERS" }),

  height: z.string(),
  weight: z.string(),
  age: z.string(),
  gender: z.string(),
  bloodGroup: z.string(),
});
