import React from 'react'
import WordRotate from './magicui/word-rotate'
import Particles from './magicui/particles'

function Hero() {
    return (
    <div>
        <div className='w-screen h-screen flex flex-col items-center justify-center relative'>
            <Particles
            className="absolute z-10 w-screen h-screen"
            quantity={500}
            ease={80}
            color={"#000"}
            />
            <div className='flex flex-col items-center justify-center absolute z-20'>
                <h2 className='text-violet-600 text-xl md:text-7xl'>The Ultimate Platform for </h2>
                <WordRotate
                className="mt-2 text-6xl font-bold text-violet-500"
                words={["Influencers", "Brands"]}
                />
                <div className='flex flex-col md:flex-row gap-5 md:gap-7 my-5'>
                    <a href={"/Creator/register"}>        
                        <button className="hover:bg-violet-950 bg-black shadow-2xl cursor-pointer px-7 py-4 rounded-full">
                            <span className="whitespace-pre-wrap text-center text-md leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                            Register as Creator
                            </span>
                        </button>
                    </a>
                    <a href={"/Brand/register"}>        
                        <button className="hover:bg-violet-950 bg-black shadow-2xl cursor-pointer px-7 py-4 rounded-full">
                            <span className="whitespace-pre-wrap text-center text-md leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                            Register as Brand
                            </span>
                        </button>
                    </a>
                </div>
            </div>
        </div>
        <div className='w-screen h-screen p-10 bg-gradient-to-t from-neutral-900'>
            <h2 className='w-2/3 text-violet-700 text-5xl mb-10'>Influencer marketing is projected to grow to a <span className='font-bold text-violet-950'>$30 billion</span> industry by the end of 2024, reflecting its increasing adoption across industries</h2>
            <hr/>
            <h2 className='w-2/3 text-violet-700 text-5xl my-10'><span className='font-bold text-violet-950'>61%</span> of brands struggle to find influencers aligned with their values.</h2>
            <hr/>
            <h2 className='w-2/3 text-violet-700 text-5xl my-10'>Only <span className='font-bold text-violet-950'>37%</span> of influencers feel they are compensated fairly for their work.</h2>
        </div>
        <div className='w-screen h-screen bg-neutral-900 p-10'>
            <h2 className='font-bold text-6xl md:text-7xl mb-5 ml-5 md:ml-0 text-white'>Find, Connect, Promote</h2>
            <p className='text-center my-16 md:w-3/6 text-neutral-700 mx-5'>PromotionLink bridges the gap between <span className='text-violet-500 font-bold'>influencers</span> and <span className='text-violet-500 font-bold'>brands</span>.<br/>Helping to find their perfect match. Influencers find opportunities that match their niche, while brands discover the right voices to amplify their message.</p>
        </div>
    </div>
  )
}

export default Hero