import React from 'react'

const Navbar = () => {
  return (
    <nav className="md:flex pt-3">
        <header className="pl-3">
            <p className="tracking-wider text-slate-500 font-semibold">
            <span className="text-[25px] text-purple-300 font-serif font-extrabold tracking-widest">NOTES</span>
            ify
            </p>
        </header>
        <div className="ml-auto mr-4 pt-2">
            <a href="#" className="font-serif font-semibold text-slate-500 mr-4 border-2  border-purple-300 p-2 rounded-md hover:bg-purple-200 hover:text-purple-800 active:bg-purple-300">Sign up</a>
            <a href="#" className="font-serif font-semibold text-slate-500 border-2  border-purple-300 p-2 rounded-md hover:bg-purple-200 hover:text-purple-800 active:bg-purple-300">Sign in</a>
        </div>
    </nav>
  )
}

export default Navbar