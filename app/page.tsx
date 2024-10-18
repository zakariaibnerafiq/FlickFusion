'use client'
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Navbar from "@components/Navbar";
import HomePage from "@components/HomePage";

export default function LandingPage() {
  const { data: session } = useSession()
  const router = useRouter()
  if (session) {
    router.push('/main')
  }


  return (
    <>
      <HomePage />
    </>
    
  );
}
