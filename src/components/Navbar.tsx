"use client"
import React ,{useState, useEffect} from 'react'
import Link from 'next/link'

function Navbar() {
  const [currentPath, setCurrentPath] = useState("");
  const [pathname, setPathname] = useState("");
  let route = pathname.split('/')
  ;
  useEffect(()=>{
    setCurrentPath(window.location.origin);
    setPathname(window.location.pathname);
  }, [])
  
  return (
    <div className='w-full h-fit px-3 md:px-10 py-5 flex items-center justify-between bg-white/30 backdrop-blur-sm rounded-md top-0 z-10 fixed'>
        <Link href={"/"}>
        <h1 className="text-lg md:text-2xl font-normal text-violet-800 tracking-wide">PROMOTIONLINK</h1>
        </Link>
        <Link href={`/Creator/profile`}>        
            <button className='text-xs md:text-base tracking-wideer bg-neutral-300 px-3 py-1 md:px-5 md:py-2 text-black rounded-3xl md:w-[130px] hover:bg-violet-700 hover:text-white transition delay-75 duration-500 ease-in-out'>
                PROFILE
            </button>
        </Link>
    </div>
  )
}

export default Navbar
