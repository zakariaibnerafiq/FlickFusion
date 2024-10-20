import React from 'react'

const TopNavbar = () => {
  return (
    <div className="flex flex-col flex-1 w-full">
        <div className="z-10 py-4  shadow-md bg-base-700 shadow-peach">
            <div className="flex items-center justify-between h-full px-6 mx-auto">
                <div>
                    <h1 className='text-3xl font-bold text-peach'>Admin Panel</h1>
                </div>
                <div>
                    <div className='aspect-square w-12 h-12 bg-white rounded-full flex items-center justify-center text-3xl'>
                        P
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopNavbar