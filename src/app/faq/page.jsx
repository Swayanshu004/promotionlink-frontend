'use client';
import React from 'react';
import Link from 'next/link';
import { LuExternalLink } from 'react-icons/lu';

function FAQPage() {
  return (
    <div className="min-h-screen px-6 md:px-10 py-20 bg-amber-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">FAQs – PromotionLink</h2>

        <div className="text-amber-800 text-base leading-relaxed">
          <section>
            <h3 className="text-xl font-semibold text-neutral-900 mb-3">How does PromotionLink work?</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>SHGs and local brands list their products or campaigns.</li>
              <li>Regional influencers register and browse available promotions.</li>
              <li>Influencers apply or get matched based on niche and location.</li>
              <li>Once approved, they create and share authentic content.</li>
            </ul>
            <div className="flex items-center gap-2 mt-3">
              <span>For full details</span>
              <Link
                href="/process"
                className="px-2 py-1 text-sm text-neutral-900 bg-neutral-300 font-medium border border-neutral-500 flex items-center gap-1 rounded"
              >
                Visit <LuExternalLink size={16} />
              </Link>
            </div>
          </section>
          <section>
            <h3 className="text-xl font-semibold text-neutral-900 mb-3">Who can join PromotionLink?</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>Influencers:</strong> Regional creators with a strong local presence and authentic engagement.
              </li>
              <li>
                <strong>SHGs/Local Brands:</strong> Small-scale businesses, craft groups, or local sellers looking for
                digital promotion.
              </li>
            </ul>
          </section>
          <section>
            <h3 className="text-xl font-semibold text-neutral-900 mb-3">Is there a fee to use PromotionLink?</h3>
            <p>
              No upfront fees! We operate on a performance-based model. SHGs only pay for successful promotions, and
              influencers are compensated for each collaboration.
            </p>
          </section>
          <section>
            <h3 className="text-xl font-semibold text-neutral-900 mb-3">What kind of campaigns are supported?</h3>
            <p>
              From product showcases and unboxings to testimonials, reels, and awareness posts—PromotionLink supports
              creative campaigns that drive real engagement.
            </p>
          </section>
          <section>
            <h3 className="text-xl font-semibold text-neutral-900 mb-3">How are influencers matched with SHGs?</h3>
            <p>
              Our smart matching system considers region, content style, audience type, and language to connect SHGs
              with the most suitable influencers.
            </p>
          </section>
          <section>
            <h3 className="text-xl font-semibold text-neutral-900 mb-3">Do you offer support during campaigns?</h3>
            <p>
              Absolutely! Our team ensures smooth coordination, timely communication, and content guidance to align
              with both brand and influencer goals.
            </p>
          </section>
          <section>
            <h3 className="text-xl font-semibold text-neutral-900 mb-3">What are the payment options?</h3>
            <p>
              We support secure payments via UPI, digital wallets, and bank transfers. Influencer payments are processed
              after campaign completion and approval.
            </p>
          </section>
          <section>
            <h3 className="text-xl font-semibold text-neutral-900 mb-3">Can I collaborate in bulk or run multiple campaigns?</h3>
            <p>
              Yes! Whether you're an SHG launching multiple products or an agency managing several groups, PromotionLink
              supports bulk and multi-campaign collaborations.
            </p>
          </section>
          <section>
            <h3 className="text-xl font-semibold text-neutral-900 mb-3">How do I contact the team?</h3>
            <p className='flex'>
              For any assistance, email us at{' '}
              <strong className="text-neutral-900">swayanshusahoo734@gmail.com</strong> or reach out via our 
              <Link
                href="/contact"
                className="px-2 py-1 text-sm text-neutral-900 bg-neutral-300 font-medium border border-neutral-500 flex items-center gap-1 rounded"
              >
                Contact Page <LuExternalLink size={16} />
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default FAQPage;
