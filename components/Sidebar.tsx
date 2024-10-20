import React from 'react'

const Sidebar = () => {
  return (
    <div className="z-20 hidden w-64 overflow-y-auto md:block flex-shrink-0 bg-base-700">
        <div className="py-4">
            <a className="ml-6 text-lg font-bold text-peach" href="#">
                FlickFusion
            </a>
            <ul className="mt-6">
                <li className="relative px-6 py-3">
                    <span className="absolute inset-y-0 left-0 w-1 bg-mauve rounded-tr-lg rounded-br-lg"
                        aria-hidden="true"></span>
                    <a className="inline-flex items-center w-full text-sm font-semibold  transition-colors duration-150  hover:text-gray-200 text-gray-100"
                        href="/admin">
                        <svg className="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round"
                            stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
                            </path>
                        </svg>
                        <span className="ml-4">Item</span>
                    </a>
                </li>
            </ul>
            
            
        </div>
    </div>
  )
}

export default Sidebar