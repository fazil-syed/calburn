"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { updateUser } from "@/lib/actions/user.actions";
// import { useUploadThing } from "@/lib/uploadthing";
// import { isBase64Image } from "@/lib/utils";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { UserValidation } from "@/lib/validations/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { connectToDB } from "@/lib/mongoose";

interface Props {
  user: {
    id: string;
    name: string;
    height: string;
    weight: string;
    age: string;
    gender: string;
    bloodGroup: string;
  };
}
const AccountProfile = ({ user }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const form = useForm({
    resolver: zodResolver(UserValidation),
    defaultValues: {
      name: user?.name || "",
      height: user?.height || "",
      weight: user?.weight || "",
      age: user?.age,
      gender: user?.gender || "",
      bloodGroup: user?.bloodGroup || "",
    },
  });

  const onSubmit = async (values: z.infer<typeof UserValidation>) => {
    // TODO: Update user profile
    // connectToDB();
    await updateUser({
      userId: user.id,
      name: values.name,
      age: values.age,
      bloodGroup: values.bloodGroup,
      gender: values.gender,
      weight: values.weight,
      height: values.height,
    });
    console.log(values);

    if (pathname === "/profile/edit") {
      router.back();
    } else {
      router.push("/");
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-start gap-10"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full gap-3">
              <FormLabel className=" text-base-semibold text-light-2">
                Name
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  className="border border-dark-4 bg-dark-3 text-light-1 no-focus"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="height"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full gap-3">
              <FormLabel className="text-base-semibold text-light-2">
                Height
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  className="border border-dark-4 bg-dark-3 text-light-1 no-focus"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="weight"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full gap-3">
              <FormLabel className=" text-base-semibold text-light-2">
                Weight
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  className="border border-dark-4 bg-dark-3 text-light-1 no-focus"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full gap-3">
              <FormLabel className=" text-base-semibold text-light-2">
                Age
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  className="border border-dark-4 bg-dark-3 text-light-1 no-focus"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full gap-3">
              <FormLabel className=" text-base-semibold text-light-2">
                Gender
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  className="border border-dark-4 bg-dark-3 text-light-1 no-focus"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Gender</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0 ">
                    <FormControl>
                      <RadioGroupItem value="male" className="bg-primary-500" />
                    </FormControl>
                    <FormLabel className="font-normal">Male</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="female" />
                    </FormControl>
                    <FormLabel className="font-normal">Female</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}
        <FormField
          control={form.control}
          name="bloodGroup"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full gap-3">
              <FormLabel className=" text-base-semibold text-light-2">
                BloodGroup
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  className="border border-dark-4 bg-dark-3 text-light-1 no-focus"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-primary-500">
          Submit
        </Button>
      </form>
    </Form>
  );
};
export default AccountProfile;
