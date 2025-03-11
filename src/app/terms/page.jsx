import React from 'react'

function page() {
  return (
    <div className='min-h-screen px-10 py-20 bg-white text-black'>
      <h2 className='text-2xl font-bold'>Terms & Conditions</h2>
      <p className='text-sm font-light italic'>Last updated on Feb 21st, 2025</p>

      <p className='text-base mt-4'>
        For the purpose of these Terms and Conditions, the terms <strong>"we," "us," "our"</strong> refer to PromotionLink, and <strong>"you," "your," "user," "visitor"</strong> refer to any individual or entity visiting our website and/or using our services, including those related to influencer-brand collaborations.
        <br/><br/>
        Your use of our website and services is governed by the following Terms and Conditions:
      </p>

      <ul className='mt-6 space-y-6'>
        <li>
          <h3 className='text-xl font-semibold'>1. General</h3>
          <p>
            The content on this website, including platform details, offerings, and policies, is subject to change without prior notice.
            By accessing our site or using our platform, you agree to comply with these Terms & Conditions.
          </p>
        </li>

        <li>
          <h3 className='text-xl font-semibold'>2. Platform Disclaimer</h3>
          <p>
            PromotionLink acts as a connector between influencers and SHGs/brands. We do not guarantee specific outcomes from collaborations.
            The responsibility for the content shared, campaign performance, and mutual expectations lies with the involved parties.
          </p>
        </li>

        <li>
          <h3 className='text-xl font-semibold'>3. Intellectual Property</h3>
          <p>
            All content on this platform — including logos, copy, design elements, and proprietary features — is owned by or licensed to PromotionLink.
            Unauthorized reproduction, modification, or distribution of content is prohibited.
          </p>
        </li>

        <li>
          <h3 className='text-xl font-semibold'>4. User Responsibilities</h3>
          <p>
            You are responsible for the authenticity of the information you provide. Misrepresentation, spamming, or platform misuse may lead to account suspension or legal action.
            You agree not to use the platform for unlawful or unauthorized purposes.
          </p>
        </li>

        <li>
          <h3 className='text-xl font-semibold'>5. Third-Party Links</h3>
          <p>
            Our platform may contain links to external websites or resources. We are not responsible for the content, policies, or reliability of third-party platforms.
          </p>
        </li>

        <li>
          <h3 className='text-xl font-semibold'>6. Payments & Transactions</h3>
          <p>
            All payments between influencers and brands are subject to mutual agreement. PromotionLink is not liable for payment disputes but may intervene to mediate if required.
            Any platform usage fees (if applicable) must be paid in full before access is granted.
          </p>
        </li>

        <li>
          <h3 className='text-xl font-semibold'>7. Disputes & Jurisdiction</h3>
          <p>
            Any disputes arising from your use of PromotionLink will be governed by the laws of India.
            We are not liable for indirect, incidental, or consequential damages related to platform use.
          </p>
        </li>
      </ul>

      <p className='text-base mt-10'>
        By continuing to use PromotionLink, you agree to these Terms & Conditions. If you have any questions or concerns, we encourage you to contact us before proceeding with any partnerships.
      </p>
    </div>

  )
}

export default page