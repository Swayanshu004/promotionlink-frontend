import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import WordRotate from './magicui/word-rotate'
import Particles from './magicui/particles'

function Hero() {
    return (
    <div>
        <div className='w-screen h-screen flex flex-col items-center justify-center relative bg-neutral-50'>
            <Particles
            className="absolute w-screen h-screen opacity-40"
            quantity={500}
            ease={80}
            color={"#000"}
            />
            <div className='flex flex-col items-center justify-center absolute'>
                <h2 className='text-violet-600 text-4xl md:text-7xl'>Empowering</h2>
                <WordRotate
                className="my-4 text-4xl md:text-6xl font-bold text-violet-700"
                words={["Creators", "Self-Help Groups"]}
                />
                <h2 className='text-violet-600 text-4xl md:text-7xl mb-12 md:mb-0'>to Grow Together</h2>
                <div className='flex flex-col md:flex-row gap-5 md:gap-7 mt-10 mb-5'>
                    <a href={"/Creator/register"}>        
                        <button className="hover:bg-violet-600 bg-black shadow-2xl cursor-pointer px-7 py-4 rounded-full transition delay-0 duration-500 ease-in-out">
                            <span className="whitespace-pre-wrap text-center text-md leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                            Register as Creator
                            </span>
                        </button>
                    </a>
                    <a href={"/Brand/register"}>        
                        <button className="hover:bg-violet-600 bg-black shadow-2xl cursor-pointer px-7 py-4 rounded-full transition delay-0 duration-500 ease-in-out">
                            <span className="whitespace-pre-wrap text-center text-md leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                            Register as Brand
                            </span>
                        </button>
                    </a>
                </div>
            <p className='text-center text-lg mt-5 md:w-screen text-neutral-900 px-10'>PromotionLink bridges the gap between <span className='text-violet-500 font-bold'>influencers</span> and <span className='text-violet-500 font-bold'>regional Self-Help Groups / startups</span>. Helping to find their perfect match.</p>
            </div>
        </div>
        <div className='w-screen h-fit bg-neutral-50 p-10 py-20'>
            <h1 className='text-3xl font-bold mb-16'>We Focus On Empowering Small-Cap SHGs</h1>
            <div className='flex flex-wrap md:flex-row gap-5 md:gap-16 items-center justify-center my-10 md:my-5'>
                <Image 
                src="https://res.cloudinary.com/swayanshu/image/upload/v1738865842/codingaashram/nq6jh3ncfzacy24z5ij6.jpg"
                width={500}
                height={500}
                alt="mission-sakti-logo"
                className='w-20 h-20 md:w-40 md:h-40 bg-white rounded-xl md:rounded-3xl grayscale hover:grayscale-0'
                />
                <Image 
                src="https://res.cloudinary.com/swayanshu/image/upload/v1738865843/codingaashram/hdecwojh15a9n43pwltl.jpg"
                width={500}
                height={500}
                alt="mission-sakti-logo"
                className='w-20 h-20 md:w-40 md:h-40 bg-white rounded-xl md:rounded-3xl grayscale hover:grayscale-0'
                />
                <Image 
                src="https://res.cloudinary.com/swayanshu/image/upload/v1738865844/codingaashram/ox8inzfpxi2ngb7xxbzh.jpg"
                width={500}
                height={500}
                alt="mission-sakti-logo"
                className='w-20 h-20 md:w-40 md:h-40 bg-white rounded-xl md:rounded-3xl grayscale hover:grayscale-0'
                />
                <Image 
                src="https://res.cloudinary.com/swayanshu/image/upload/v1738865845/codingaashram/wtx3lbk1ugi5a54c3frx.png"
                width={500}
                height={500}
                alt="kudumbashree-logo"
                className='w-20 h-20 md:w-40 md:h-40 bg-white rounded-xl md:rounded-3xl grayscale hover:grayscale-0'
                />
                <Image 
                src="https://res.cloudinary.com/swayanshu/image/upload/v1738865843/codingaashram/zmlhub0690hbiwj1z9nz.png"
                width={500}
                height={500}
                alt="kudumbashree-logo"
                className='w-20 h-20 md:w-40 md:h-40 bg-white rounded-xl md:rounded-3xl grayscale hover:grayscale-0'
                />
                <div 
                className='w-20 h-20 md:w-40 md:h-40 border-black hover:border-violet-600 border-2 border-dashed rounded-xl md:rounded-3xl flex items-center justify-center text-balck hover:text-violet-600'>
                    <h3 className='text-sm md:text-xl font-medium'>and more.</h3>
                </div>
            </div>
            <h3 className='text-lg mt-16'>We’re here to connect <span className='font-bold'>SHGs</span> with <span className='font-bold'>influencers</span> who align with their <span className='font-bold'>values, ensuring mutual growth and sustainable success.</span></h3>
        </div>
        <div className='w-screen h-fit p-10 bg-neutral-950'>
            <div className='flex items-end justify-center'>
            <h2 className='w-full text-violet-50 text-xl md:text-4xl mt-10 mb-20 px-10'>The influencer marketing sector in India is projected to reach <span className='font-bold text-violet-400'>₹3,375 crore</span> by 2026, with a compound annual growth rate (CAGR) of<span className='font-bold text-violet-400'> 18%.</span> 
            <br/><Link className='text-xs bg-neutral-200 px-2 py-1 mt-5 rounded-full hover:scale-110 duration-500 ease-in-out hover:text-violet-600 absolute text-neutral-700' href={"https://www.ey.com/en_in/insights/media-entertainment/how-influencer-marketing-is-impacting-brands-in-india"}>Read</Link>
            </h2> 
            </div>
            <hr/>
            <h2 className='w-full text-violet-50 text-xl md:text-4xl mt-10 mb-20 px-10'>According to a study by Edelman, <span className='font-bold text-violet-400'>63% </span> of consumers trust influencers more than brands when it comes to product recommendations.
            <br/><Link className='text-xs bg-neutral-200 px-2 py-1 mt-5 rounded-full hover:scale-110 duration-500 ease-in-out hover:text-violet-600 absolute text-neutral-700' href={"https://www.regionalinfluencers.in/news-article/regional-influencers-outperform-global-influencers-in-driving-engagement-and-sales-says-new-study"}>Read</Link>
            </h2>
            <hr/>
            <h2 className='w-full text-violet-50 text-xl md:text-4xl mt-10 mb-20 px-10'>The 2025 Union Budget introduces the 'Grameen Credit Score,' enhancing credit access for <span className='font-bold text-violet-400'>100 million</span> rural SHG members.
            <br/><Link className='text-xs bg-neutral-200 px-2 py-1 mt-5 rounded-full hover:scale-110 duration-500 ease-in-out hover:text-violet-600 absolute text-neutral-700' href={"https://www.business-standard.com/budget/news/budget-2025-credit-score-boost-for-100-million-rural-shg-members-125020200506_1.html"}>Read</Link>
            </h2>
        </div>
        <div className='w-screen h-fit bg-neutral-950 p-10 flex flex-col'>
            <p  className='text-neutral-500'>We connect regional Self-Help Groups / startups and regional influencers based on</p>
            <h2 className='font-bold text-3xl md:text-5xl text-white'>niche,<br/>audience,<br/>and<br/>engagement.</h2>
            <p  className='my-10 text-neutral-500'>Influencers find opportunities that match their niche, while Self-Help Groups discover the right voices to amplify their message.</p>
        </div>
        <div className='w-screen h-fit bg-neutral-950 p-10'>
            <h2 className='font-bold text-5xl md:text-6xl text-white'>Find, Connect, Promote</h2>
        </div>
    </div>
  )
}

export default Hero