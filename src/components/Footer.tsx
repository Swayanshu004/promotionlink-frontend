import React from 'react'

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
    <div className='w-screen'>
        <div className='w-full bg-violet-700 flex items-center justify-between'>
          <div className='w-5/6 flex items-center md:h-20 text-md font-light ml-5'>
            <h3 className='px-2 lg:px-5 py-3 border-2 rounded-3xl hover:bg-violet-600'>
              <span className='font-bold text-violet-950'>@ : </span>swayanshusahoo.pri@gmail.com
            </h3>
          </div>
          <div className="flex items-center justify-end h-20 w-1/6 md:w-2/6">
            <FloatingDock
                mobileClassName="translate-y-20 z-20 bottom-20 right-5"
                items={links}
            />
          </div>
        </div>
    </div>
  )
}

export default Footer