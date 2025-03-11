import React from 'react'
import Link from 'next/link'

function page() {
  return (
    <div className='min-h-screen px-10 py-20 bg-white'>
      <h2 className='text-2xl text-black'>
        At <b>PromotionLink</b>, we bridge the gap between passionate Self-Help Groups (SHGs) and impactful regional influencers.<br />
        Our goal is to create meaningful, results-driven collaborations that uplift local brands and amplify authentic voices.
      </h2>

      <h2 className='text-3xl font-bold text-neutral-900 mt-5'>Here’s how the process works:</h2>

      <div className='mt-5'>
        <h2 className="px-5 border border-neutral-700 mb-5 font-semibold text-md hover:bg-black hover:translate-x-5 duration-700 ease-in-out">
          1. Create Your Profile
          <p className='font-medium'>
            Whether you're a SHG looking to promote your handmade products, or an influencer wanting to make a local impact—
            begin by signing up and creating your personalized profile.
          </p>
        </h2>

        <h2 className="px-5 border border-neutral-700 mb-5 font-semibold text-md hover:bg-black hover:translate-x-5 duration-700 ease-in-out">
          2. Discover Matches
          <p className='font-medium'>
            Our system intelligently recommends relevant matches—brands discover influencers who align with their values,
            and influencers see collaboration-ready SHGs based on category, location, and interests.
          </p>
        </h2>

        <h2 className="px-5 border border-neutral-700 mb-5 font-semibold text-md hover:bg-black hover:translate-x-5 duration-700 ease-in-out">
          3. Connect & Collaborate
          <p className='font-medium'>
            Once matched, initiate conversations directly on the platform.
            Set expectations, share campaign ideas, and finalize your partnership—all in one place.
          </p>
        </h2>

        <h2 className="px-5 border border-neutral-700 mb-5 font-semibold text-md hover:bg-black hover:translate-x-5 duration-700 ease-in-out">
          4. Run Your Campaign
          <p className='font-medium'>
            Influencers promote the products through content, shout-outs, reviews, or reels—
            while SHGs track visibility, reach, and engagement using simple dashboards.
          </p>
        </h2>

        <h2 className="px-5 border border-neutral-700 mb-5 font-semibold text-md hover:bg-black hover:translate-x-5 duration-700 ease-in-out">
          5. Earn, Grow & Build Trust
          <p className='font-medium'>
            After successful promotions, influencers earn their reward, and SHGs build lasting visibility and trust.
            Ratings and feedback help both parties grow within the community.
          </p>
        </h2>

        <h2 className='text-3xl font-bold py-10 text-black'>
          With PromotionLink, we're not just creating partnerships—we're empowering local stories, grassroots brands, and genuine creators to grow together.
        </h2>

        <div className='h-fit mt-5 relative pb-20 bg-neutral-200'>
          <Link href={"/"} className="px-5 py-2 text-lg bg-black text-white hover:text-gray-200 hover:scale-105 duration-500 ease-in-out absolute">
            Start Your Collaboration Journey Today!
          </Link>
        </div>
      </div>
    </div>
  )
}

export default page
