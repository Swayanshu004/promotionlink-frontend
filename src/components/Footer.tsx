import React from 'react'
import Link from 'next/link';

import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconHome,
  IconBrandLinkedin
} from "@tabler/icons-react";

function Footer() {
    const links = [
        {
          title: "Home",
          icon: (
            <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "/",
        },
     
        {
          title: "LinkedIn",
          icon: (
            <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "https://www.linkedin.com/in/swayanshu-satyapragyan-sahoo-084b6525a/",
        },
        {
          title: "X",
          icon: (
            <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "https://twitter.com/SwayanshuSahoo",
        },
        {
          title: "GitHub",
          icon: (
            <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "https://github.com/Swayanshu004",
        },
      ];

  return (
    <div className='w-full bottom-0'>
        <div className='w-full bg-violet-700 flex justify-between px-10'>
          <div className='flex'>
            <div className='text-violet-100 w-1/2 flex flex-col px-5 py-5'>
            <Link href={"/about"} className='hover:translate-x-1 duration-300 py-1 hover:text-while'>About</Link>
            <Link href={"/contact"} className='hover:translate-x-1 duration-300 py-1 hover:text-while'>Contact</Link>
            <Link href={"/faq"} className='hover:translate-x-1 duration-300 py-1 hover:text-while'>FAQ</Link>
            </div>
            <div className='text-violet-100 w-full flex flex-col px-5 py-5'>
            <Link href={"/privacy"} className='hover:translate-x-1 duration-300 py-1 hover:text-while'>Privacy</Link>
            <Link href={"/process"} className='hover:translate-x-1 duration-300 py-1 hover:text-while'>Process</Link>
            <Link href={"/terms"} className='hover:translate-x-1 duration-300 py-1 hover:text-while'>Tems & Condition</Link>
            </div>
          </div>
          <div className="flex items-center justify-end h-20 w-1/6 ">
            <FloatingDock
                mobileClassName="translate-y-20 z-20 bottom-20"
                items={links}
            />
          </div>
        </div>
    </div>
  )
}

export default Footer