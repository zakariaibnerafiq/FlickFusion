'use client'

import Link from 'next/link'
import { useSession, signOut, signIn } from "next-auth/react"
const Login = () => {
  const { data: session } = useSession()
  

  const handleLogin = async () => {
    await signIn("google", {
      callbackUrl: "/main",
    })
  }
  return (
    <section className="space-y-40 ">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 h-screen ">
        <div className="md:pt-20 pt-40 h-full">
          <div className="md:grid lg:grid-cols-6 md:grid-cols-2 md:gap-6 lg:gap-6 w-full h-full">
            <div className="item lg:col-span-4 md:flex flex-col hidden justify-center gap-6">
              <h1 className='lg:text-8xl text-6xl font-bold text-peach'>
                Welcome!
              </h1>
              <p className='text-rosewater font-medium lg:text-xl text-md'>Get back to where you left off.</p>
            </div>
            <div className="lg:col-span-2 md:flex justify-center items-center ">
              <div className="max-w-sm md:ml-auto md:w-full m-auto">
                <div className="rounded-xl shadow bg-base-700">
                  <div className="flex flex-col p-6 space-y-1">
                    <h3 className='font-semibold text-2xl tracking-tight text-peach '>Log In</h3>
                    <p className='text-rosewater text-sm '>Dont have an account? <span className='underline text-sm text-peach'><Link href="/signup">Sign Up</Link></span></p>
                  </div>
                  <div className="p-6 grid gap-4 pt-0">
                    <button onClick={handleLogin} className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-9 px-4 py-2 [&_svg]:size-4 [&_svg]:shrink-0 text-base-800 bg-gradient-to-r from-peach to-red'>
                      <svg role="img" viewBox="0 0 24 24" className="mr-2 h-4 w-4"><path fill="currentColor" d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"></path></svg>
                      Continue with Google
                    </button>
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-t-peach"></span>
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-base-700 px-2 text-peach">Or continue with</span>
                      </div>
                    </div>

                  </div>
                  <form className = "p-6 grid gap-4 pt-0" action="">
                    
                    <div className="grid gap-2">
                      <label className='text-sm font-medium leading-none text-peach' htmlFor="email">Email</label>
                      <input className="flex h-9 w-full rounded-md border border-peach bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder-base-300 focus-visible:outline-none text-white" type="email" id='email' placeholder='example@email.com' />
                    </div>
                    <div className="grid gap-2">
                      <label className='text-sm font-medium leading-none text-peach' htmlFor="email">Password</label>
                      <input className="flex h-9 w-full rounded-md border border-peach bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder-base-300 focus-visible:outline-none text-white" type="password" id='password' placeholder='password' />
                    </div>

                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none bg-gradient-to-r from-peach to-red text-base-800 shadow h-9 px-4 py-2 w-full mt-2">
                        Log In
                    </button>

                    
                  </form>

                </div>
                  
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login