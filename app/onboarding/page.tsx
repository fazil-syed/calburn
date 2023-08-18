import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import AccountProfile from "../components/forms/Profile";
async function Page() {
  const user = await currentUser();

  const userInfo = await fetchUser(user.id);
  if (userInfo?.onboarded) redirect("/");
  const userData = {
    id: user?.id,
    name: user?.name,
    age: user?.age,
    bloodGroup: user?.bloodGroup,
    gender: user?.gender,
    weight: user?.weight,
    height: user?.height,
  };

  return (
    <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
      <p className="mt-2 text-base-regular text-light-2">
        Complete your profile to get personalized results
      </p>
      <section className="mt-9 bg-dark-2 p-10">
        <AccountProfile user={userData} btnTitle="Continue" />
      </section>
    </main>
  );
}

export default Page;
