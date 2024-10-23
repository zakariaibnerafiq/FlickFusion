'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ActiveLink from '@utils/ActiveLink'


const Sidebar = () => {
    const pathname = usePathname()

    console.log(pathname)
    return (
        <div className="z-20 hidden w-64 overflow-y-auto md:block flex-shrink-0 ">
            <div className="flex flex-col h-full">
                <div className="flex flex-col flex-1 gap-1">
                    <ActiveLink name={'Dashboard'} href={'/admin'} activeClassName={'text-mauve bg-base-700'} className = {'flex items-center justify-between px-4 py-2 text-text hover:bg-base-100 hover:text-peach rounded-md font-semibold'} />
                    <ActiveLink name={'Add Movie'} href={'/admin/addmovie'} activeClassName={'text-mauve bg-base-700'} className = {'flex items-center justify-between px-4 py-2 text-text hover:bg-base-100 hover:text-peach rounded-md font-semibold'} />
                    <ActiveLink name={'All Movies'} href={'/admin/movies'} activeClassName={'text-mauve bg-base-700'} className = {'flex items-center justify-between px-4 py-2 text-text hover:bg-base-100 hover:text-peach rounded-md font-semibold'} />
                    <ActiveLink name={'All Users'} href={'/Users'} activeClassName={'text-mauve bg-base-700'} className = {'flex items-center justify-between px-4 py-2 text-text hover:bg-base-100 hover:text-peach rounded-md font-semibold'} />
                </div>
            </div>

        </div>
    )
}

export default Sidebar