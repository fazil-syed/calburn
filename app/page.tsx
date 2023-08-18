import { currentUser } from "@clerk/nextjs";
import Home from "./components/Home";
import { fetchUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

export default async function Page() {
  const user = await currentUser();
  const userInfo = await fetchUser(user.id);
  if (userInfo === null || userInfo.onboarder === false)
    redirect("/onboarding");
  return (
    <>
      <div className="flex justify-center items-center -mt-2 mb-2">
        <h1 className="text-heading1-bold text-light-1">
          An AI Based Fitness Bot
        </h1>
      </div>
      <Home user={user} />
    </>
  );
}
