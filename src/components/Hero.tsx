import React from 'react'
import Link from 'next/link'
import WordRotate from './magicui/word-rotate'
import Particles from './magicui/particles'
import ShimmerButton from './magicui/shimmer-button'

function Hero() {
    return (
    <div className='w-screen h-screen flex flex-col items-center justify-center mt-16'>
        <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={"ffffff"}
        refresh
        />
        <h2 className='font-bold text-6xl md:text-7xl my-10 ml-5 md:ml-0'>Find, Connect, Promote</h2>
        <h2 className='text-violet-400 text-xl md:text-5xl mt-5 text-center'>The Ultimate Platform for </h2>
        <WordRotate
        className="text-5xl font-bold text-violet-700"
        words={["Influencers", "Brands"]}
        />
        <div className='flex flex-col md:flex-row gap-5 md:gap-7 my-5'>
            <a href={"/Creator/register"}>        
                <ShimmerButton 
                className="shadow-2xlcursor-auto">
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                    Register Creator
                    </span>
                </ShimmerButton>
            </a>
            <a href={"/Brand/register"}>        
                <ShimmerButton 
                className="shadow-2xl cursor-auto">
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                    Register Brand
                    </span>
                </ShimmerButton>
            </a>
        </div>
        <p className='text-center my-16 md:w-3/6 text-neutral-300 mx-5'>PromotionLink bridges the gap between <span className='text-violet-500 font-bold'>influencers</span> and <span className='text-violet-500 font-bold'>brands</span>.<br/>Helping to find their perfect match. Influencers find opportunities that match their niche, while brands discover the right voices to amplify their message.</p>
    </div>
  )
}

export default Hero