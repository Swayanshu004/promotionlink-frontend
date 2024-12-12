import React from 'react'
import Link from 'next/link'
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
                className="mt-2 text-4xl md:text-6xl font-bold text-violet-500"
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
            <p className='text-center text-lg mt-5 md:w-screen text-neutral-900 px-10'>PromotionLink bridges the gap between <span className='text-violet-500 font-bold'>influencers</span> and <span className='text-violet-500 font-bold'>brands</span>. Helping to find their perfect match.</p>
            </div>
        </div>
        <div className='w-screen min-h-screen p-10 bg-gradient-to-t from-neutral-900'>
            <div className='flex items-end justify-center'>
            <h2 className='w-full text-violet-700 text-3xl md:text-5xl mb-10 px-10'>Influencer marketing is projected to grow to a <span className='font-bold text-violet-950'>$30 billion</span> industry by the end of 2024. 
            <Link className='text-sm bg-neutral-950 px-5 py-2 rounded-full hover:bg-neutral-600 text-white' href={"https://www.business2community.com/statistics-pages/influencer-marketing-statistics"}>view</Link>
            </h2> 
            </div>
            <hr/>
            <h2 className='w-full text-violet-200 text-3xl md:text-5xl my-10 px-10'><span className='font-bold text-violet-950'>34%</span> of brands say they have difficulty finding influencers.
            <Link className='text-sm bg-neutral-950 px-5 py-2 rounded-full hover:bg-neutral-600 text-white' href={"https://www.meltwater.com/en/blog/influencer-marketing-statistics"}>view</Link>
            </h2>
            <hr/>
            <h2 className='w-full text-violet-300 text-3xl md:text-5xl my-10 px-10'>Only <span className='font-bold text-violet-950'>30%</span> of influencers feel they are compensated fairly for their work.
            <Link className='text-sm bg-neutral-950 px-5 py-2 rounded-full hover:bg-neutral-600 text-white' href={"https://www.businessofapps.com/insights/2021-influencer-compensation-report/"}>view</Link>
            </h2>
        </div>
        <div className='w-screen h-screen bg-neutral-900 p-10 flex flex-col'>
            <p  className='text-neutral-500'>We connect brands and influencers based on</p>
            <h2 className='font-bold text-4xl md:text-6xl mb-5 ml-5 md:ml-0 text-white'>niche,<br/>audience,<br/>and<br/>engagement.</h2>
            <p  className='my-10 md:w-3/6 text-neutral-500'>Influencers find opportunities that match their niche, while brands discover the right voices to amplify their message.</p>
            <div className='w-4/6 mx-auto flex flex-col md:flex-row gap-5 justify-around my-10'>
                <div className='text-black bg-cyan-50 hover:bg-neutral-400 border-2 border-neutral-900 px-10 py-5 flex flex-col items-center justify-between rounded-lg'>
                    <h2 className='text-3xl font-bold my-2 '>Free</h2>
                    <p className='mt-2 mb-5'>for first 3 promotion</p>
                    <div className='w-full font-medium text-lg text-red-600 border-t-2 border-neutral-500 py-15'>
                        <p>no early access</p> 
                        <p>no analysis report</p> 
                        <p>no profile customization</p> 
                    </div>
                </div>
                <div className='text-black bg-green-100 hover:bg-neutral-400 border-2 border-neutral-900 px-10 py-5 flex flex-col items-center justify-between rounded-lg'>
                    <h2 className='text-3xl font-bold '>5$ / month</h2>
                    <p className='mt-2 mb-5'>Premium</p>
                    <div className='w-full font-medium text-lg text-green-600 border-t-2 border-neutral-500 py-15'>
                        <p>early access</p> 
                        <p>Monthly analysis</p> 
                        <p>cusmotized profile</p> 
                    </div>
                </div>
                <div className='text-black bg-amber-400 hover:bg-neutral-400 border-2 border-neutral-900 px-10 py-5 flex flex-col items-center justify-between rounded-lg'>
                    <h2 className='text-3xl font-bold my-2 '>15$ / month</h2>
                    <p className='mt-2 mb-5'>Luxury</p>
                    <div className='w-full font-medium text-lg text-green-600 border-t-2 border-neutral-500 py-15'>
                        <p>Free + Premium</p> 
                        <p>profile review</p> 
                        <p>Daily </p> 
                    </div>
                </div>
            </div>
        </div>
        <div className='w-screen h-fit bg-neutral-900 p-10'>
            <h2 className='font-bold text-5xl md:text-7xl mx-5 md:ml-0 text-white'>Find, Connect, Promote</h2>
        </div>
    </div>
  )
}

export default Hero