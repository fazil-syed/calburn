import Image from "next/image";
import Link from "next/link";
import { SignedIn } from "@clerk/nextjs";
import { SignOutButton } from "@clerk/nextjs";
import { Satisfy } from "next/font/google";

const satisfy = Satisfy({
  subsets: ["latin"],
  weight: "400",
});

function Topbar() {
  return (
    <nav className="fixed top-0 z-30 flex w-full items-center justify-between bg-dark-2 px-6 py-2 mb-0 pb-0">
      <Link href="/" className="flex items-center gap-4">
        {/* <Image src="./assets/logo.svg" alt="logo" width={40} height={40} /> */}
        <p
          className={`text-heading1-bold text-light-1 max-xs:hidden ${satisfy.className}`}
        >
          CalBurn
        </p>
      </Link>
      <div className="flex items-center gap-1">
        <div className="block ">
          <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer">
                <Image
                  src="./assets/logout.svg"
                  alt="logout"
                  width={24}
                  height={24}
                />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}
export default Topbar;
