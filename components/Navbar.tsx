"use client"
import { useSession, signOut, signIn } from "next-auth/react"


const Navbar = () => {
  const { data: session } = useSession()
  console.log(session);

  const handleLogin = async () => {
    await signIn("google", {
      callbackUrl: "/",
    })
  }
  const handleLogout = async () => {
    await signOut({
      redirectTo: '/'
    })
  }
  return (
    <nav className="flex items-center justify-between py-5">

      <h1 className="bg-gradient-to-r from-maroon to-mauve bg-clip-text text-transparent text-2xl font-bold ">FlickFusion</h1>

      <ul className="flex items-center justify-center gap-3">
        <li><a href="/" className="text-lg">Home</a></li>
        <li><a href="/about" className="text-lg">About</a></li>
      </ul>
      <div className="flex items-center justify-center gap-3">
        {session && session && (
          <button className="px-4 py-1 bg-primary-blue dark:bg-primary-red text-white rounded-full" onClick={handleLogout}>Logout</button>
        )}
        {session === null && (
          <button className="px-4 py-1 bg-primary-blue dark:bg-primary-red text-white rounded-full" onClick={handleLogin}>Login</button>
        )}
      </div>
    </nav>
  )
}

export default Navbar;