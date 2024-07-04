import { validateRequest } from "@/lib/validate-req";
import Image from "next/image";
import Link from "next/link";
import { logout } from "./actions";

export default function Home() {
  return <h1 className="text-4xl">Home</h1>;
}
