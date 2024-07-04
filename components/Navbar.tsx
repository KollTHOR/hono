import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { SquareActivity } from "lucide-react";
import { validateRequest } from "@/lib/validate-req";
import { logout } from "@/app/actions";

export default async function Navbar() {
  const { user } = await validateRequest();

  return (
    <div className="bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <SquareActivity />
        </Link>
        <div className="ml-auto flex items-center space-x-2">
          {user && (
            <form action={logout}>
              <button className={buttonVariants()}>Logout</button>
            </form>
          )}
          {!user && (
            <Link className={buttonVariants()} href="/login">
              Login
            </Link>
          )}
          {!user && (
            <Link className={buttonVariants()} href="/signup">
              Sign Up
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
