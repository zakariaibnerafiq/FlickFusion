"use client"
import { useSession, signOut} from "next-auth/react"
import Link from "next/link";
import { useState } from 'react';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const { data: session } = useSession()
  console.log(session);
  const handleLogout = async () => {
    await signOut({
      redirectTo: '/'
    })
  }

  if (session){
    return (
      <>
      </>
    )
  } else {
    return (
      <>
          <nav className="z-10 w-full absolute">
            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
              <div className="flex flex-wrap items-center justify-between py-2 gap-6 md:py-4 md:gap-0 relative">
                <input
                  type="checkbox"
                  name="toggle_nav"
                  className="hidden peer"
                  checked={navOpen}
                  onChange={() => setNavOpen(!navOpen)}
                />
                <div className="relative z-20 w-full flex justify-between lg:w-max md:px-0">
                  <Link href="/" aria-label="logo" className="flex space-x-2 items-center">
                    <span className="text-2xl font-bold text-white bg-gradient-to-r from-peach to-red text-transparent bg-clip-text">FlickFusion</span>
                  </Link>
      
                  <div className="relative flex items-center lg:hidden max-h-10">
                    <label
                      role="button"
                      htmlFor="toggle_nav"
                      aria-label="hamburger"
                      id="hamburger"
                      className="relative p-6 -mr-6"
                      onClick={() => setNavOpen(!navOpen)}
                    >
                      <div
                        className={`m-auto h-0.5 w-5 rounded  bg-peach transition duration-300 ${navOpen ? 'rotate-45 translate-y-[0.31rem]' : ''}`} 
                      ></div>
                      <div
                        className={`m-auto mt-2 h-0.5 w-5 rounded bg-peach transition duration-300 ${navOpen ? '-rotate-45 -translate-y-[0.31rem]' : ''}`} 
                      ></div>
                    </label>
                  </div>
                </div>
      
                <div
                  className={`fixed z-10 inset-0 h-screen w-screen  backdrop-blur-2xl origin-bottom scale-y-0 transition duration-500 lg:hidden bg-base-800/70 ${navOpen ? 'scale-y-100' : 'scale-y-0'}`}
                />
      
                <div
                  className={`flex-col z-20 flex-wrap gap-6 p-8 rounded-3xl border shadow-2xl shadow-base-600/10 justify-end w-full invisible opacity-0 translate-y-1 absolute top-full left-0 transition-all duration-300 scale-95 origin-top lg:relative lg:scale-100 lg:flex lg:flex-row lg:items-center lg:gap-0 lg:p-0 lg:bg-transparent lg:w-7/12 lg:visible lg:opacity-100 lg:border-none peer-checked:scale-100 peer-checked:opacity-100 peer-checked:visible dark:shadow-none bg-base-800 border-base-700 ${
                    navOpen ? 'visible opacity-100' : 'invisible opacity-0'
                  }`}
                >
                  <div className="text-gray-600 dark:text-gray-300 lg:pr-4 lg:w-auto w-full lg:pt-0">
                    <ul className="tracking-wide font-medium lg:text-sm flex-col flex lg:flex-row gap-6 lg:gap-5">
                      <li>
                        <Link href="/" className="block transition hover:text-red">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link href="/about" className="block transition hover:text-red">
                          About
                        </Link>
                      </li>
                      <li>
                        <Link href="/features" className="block transition hover:text-red">
                          Features
                        </Link>
                      </li>
                    
                    </ul>
                  </div>
      
                  <div className="mt-12 lg:mt-0">
                    {
                      session && session && (
                          <a
                            onClick={handleLogout}
                            className="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r from-peach to-red before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                          >
                            <span className="relative text-sm font-semibold text-base-800 font-poppins cursor-pointer">Logout</span>
                          </a> )
      
                    }
                    {
                      session === null && (
                        <Link
                          href={"/login"}
                          
                          className="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r from-peach to-red before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max cursor-pointer"
                        >
                          <span className="relative text-sm font-semibold text-base-800 font-poppins">Login</span>
                        </Link>
                      )
                    }
                  </div>
                </div>
              </div>
            </div>
          </nav>
      </>
    );
  }
};

export default Navbar;