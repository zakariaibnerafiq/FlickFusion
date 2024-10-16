const Navbar = () => {
  return (
    <nav className="container m-auto px-10 flex items-center justify-between py-10">
        
        <h1 className="text-2xl font-bold text-primary-blue dark:text-primary-red">FlickFusion</h1>
        
        <ul className="flex items-center justify-center gap-3">
            <li><a href="/" className="text-lg">Home</a></li>
            <li><a href="/about" className="text-lg">About</a></li>
        </ul>
        <div className="flex items-center justify-center gap-3">
            <a className="dark:bg-primary-red bg-primary-blue light block px-4 py-1 rounded-full text-center font-montserrat hover:dark:bg-secondary-red hover:bg-secondary-blue" href="/login">Login</a>
        </div>
    </nav>
  )
}

export default Navbar;