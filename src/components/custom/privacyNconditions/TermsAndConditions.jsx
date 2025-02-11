import Link from 'next/link';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20 font-poppins">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="prose max-w-none text-gray-700">
          {/* Company Information */}
          <section className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Terms and Conditions
            </h1>
            <p className="text-lg">
              We are SocialShift Corp ("Company," "we," "us," "our"), a company registered in Delaware, United States, with its registered office at 251 Falls Drive, Wilmington, New Castle County, Delaware 1908.
            </p>
            <p className="text-lg mt-4">
              We operate the mobile application Know[ledge] (the "App"), along with any related products and services that reference or link to these legal terms (the "Legal Terms") (collectively, the "Services").
            </p>
            <p className="text-lg mt-4">
              You can contact us by:
            </p>
            <ul className="list-none pl-0 mt-2">
              <li>Phone: 404-938-9214</li>
              <li>Email: info@knowhistory.xyz</li>
              <li>Mail: 251 Falls Drive, Wilmington, New Castle County, Delaware 19808, United States</li>
            </ul>
          </section>

          {/* Agreement Notice */}
          <section className="mb-8">
            <p className="text-lg">
              These Legal Terms constitute a legally binding agreement between you, whether personally or on behalf of an entity ("you"), and SocialShift Corp, regarding your access to and use of the Services. By accessing the Services, you agree that you have read, understood, and accepted these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, YOU MUST DISCONTINUE USE IMMEDIATELY.
            </p>
            <p className="text-lg mt-4">
              We will provide prior notice of any scheduled changes to the Services. The modified Legal Terms will become effective upon posting or notification via info@knowhistory.xyz. By continuing to use the Services after the effective date of any changes, you agree to be bound by the modified terms.
            </p>
            <p className="text-lg mt-4">
              Minors under the age of 18 must have parental or guardian permission to use the Services. Parents or guardians must read and agree to these Legal Terms before allowing a minor to use the Services.
            </p>
            <p className="text-lg mt-4">
              We recommend that you print a copy of these Legal Terms for your records.
            </p>
          </section>

          {/* Table of Contents */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">TABLE OF CONTENTS</h2>
            <ol className="list-decimal pl-6">
              {[
                "OUR SERVICES",
                "INTELLECTUAL PROPERTY RIGHTS",
                "USER REPRESENTATIONS",
                "USER REGISTRATION",
                "PURCHASES AND PAYMENT",
                "SUBSCRIPTIONS",
                "POLICY",
                "PROHIBITED ACTIVITIES",
                "USER GENERATED CONTRIBUTIONS",
                "CONTRIBUTION LICENSE",
                "MOBILE APPLICATION LICENSE",
                "SOCIAL MEDIA",
                "THIRD-PARTY WEBSITES AND CONTENT",
                "ADVERTISERS",
                "SERVICES MANAGEMENT",
                "PRIVACY POLICY",
                "DIGITAL MILLENNIUM COPYRIGHT ACT (DMCA) NOTICE AND POLICY",
                "TERM AND TERMINATION",
                "MODIFICATIONS AND INTERRUPTIONS",
                "GOVERNING LAW",
                "DISPUTE RESOLUTION",
                "CORRECTIONS",
                "DISCLAIMER",
                "LIMITATIONS OF LIABILITY",
                "INDEMNIFICATION",
                "USER DATA",
                "ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES",
                "CALIFORNIA USERS AND RESIDENTS",
                "MISCELLANEOUS",
                "CONTACT US"
              ].map((item, index) => (
                <li key={index} className="mb-2">
                  <a href={`#section-${index + 1}`} className="text-blue-600 hover:text-blue-800">
                    {item}
                  </a>
                </li>
              ))}
            </ol>
          </section>

          {/* Content Sections */}
          <section id="section-1" className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">1. OUR SERVICES</h2>
            <p className="text-lg mb-4">
              The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.
            </p>
            <p className="text-lg">
              The Services are not tailored to comply with industry-specific regulations (Health Insurance Portability and Accountability Act (HIPAA), Federal Information Security Management Act (FISMA), etc.), so if your interactions would be subjected to such laws, you may not use the Services. You may not use the Services in a way that would violate the Gramm-Leach-Bliley Act (GLBA).
            </p>
          </section>

          <section id="section-2" className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">2. INTELLECTUAL PROPERTY RIGHTS</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Our intellectual property</h3>
                <p className="text-lg">
                  We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the "Content"), as well as the trademarks, service marks, and logos contained therein (the "Marks").
                </p>
                <p className="text-lg mt-4">
                  Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties in the United States and around the world.
                </p>
                <p className="text-lg mt-4">
                  The Content and Marks are provided in or through the Services "AS IS" for your personal, non-commercial use only.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Your use of our Services</h3>
                <p className="text-lg mb-4">
                  Subject to your compliance with these Legal Terms, including the "PROHIBITED ACTIVITIES" section below, we grant you a non-exclusive, non-transferable, revocable license to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  <li>access the Services; and</li>
                  <li>download or print a copy of any portion of the Content to which you have properly gained access,</li>
                  <li>solely for your personal, non-commercial use.</li>
                </ul>
                <p className="text-lg mt-4">
                  Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Your submissions and contributions</h3>
                <p className="text-lg">
                  Please review this section and the "PROHIBITED ACTIVITIES" section carefully prior to using our Services to understand the (a) rights you give us and (b) obligations you have when you post or upload any content through the Services.
                </p>
                <p className="text-lg mt-4">
                  Submissions: By directly sending us any question, comment, suggestion, idea, feedback, or other information about the Services ("Submissions"), you agree to assign to us all intellectual property rights in such Submission. You agree that we shall own this Submission and be entitled to its unrestricted use and dissemination for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you.
                </p>
              </div>
            </div>
          </section>

          <section id="section-3" className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">3. USER REPRESENTATIONS</h2>
            <p className="text-lg mb-4">
              By using the Services, you represent and warrant that:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-lg">
              <li>all registration information you submit will be true, accurate, current, and complete;</li>
              <li>you will maintain the accuracy of such information and promptly update such registration information as necessary;</li>
              <li>you have the legal capacity and you agree to comply with these Legal Terms;</li>
              <li>you are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental permission to use the Services;</li>
              <li>you will not access the Services through automated or non-human means, whether through a bot, script or otherwise;</li>
              <li>you will not use the Services for any illegal or unauthorized purpose;</li>
              <li>your use of the Services will not violate any applicable law or regulation.</li>
            </ol>
            <p className="text-lg mt-4">
              If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof).
            </p>
          </section>

          <section id="section-4" className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">4. USER REGISTRATION</h2>
            <p className="text-lg">
              You may be required to register to use the Services. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.
            </p>
          </section>

          <section id="section-5" className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">5. PURCHASES AND PAYMENT</h2>
            <p className="text-lg mb-4">
              We accept the following forms of payment:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg mb-4">
              <li>Visa</li>
              <li>Mastercard</li>
              <li>American Express</li>
              <li>Discover</li>
            </ul>
            <p className="text-lg mb-4">
              You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Services. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed. Sales tax will be added to the price of purchases as deemed required by us. We may change prices at any time. All payments shall be in US dollars.
            </p>
            <p className="text-lg mb-4">
              You agree to pay all charges at the prices then in effect for your purchases and any applicable shipping fees, and you authorize us to charge your chosen payment provider for any such amounts upon placing your order.
            </p>
            <p className="text-lg mb-4">
              We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment.
            </p>
            <p className="text-lg">
              We reserve the right to refuse any order placed through the Services. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order. These restrictions may include orders placed by or under the same customer account, the same payment method, and/or orders that use the same billing or shipping address. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers, or distributors.
            </p>
          </section>

          <section id="section-6" className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">6. SUBSCRIPTIONS</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Billing & Auto-Renewal</h3>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  <li>Your subscription automatically renews unless canceled at least 24 hours before the end of the current billing period.</li>
                  <li>Your payment method will be charged at the start of each new billing cycle at the listed price.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Free Trial & Charges</h3>
                <p className="text-lg">
                  If you sign up for a free trial, your account will be charged automatically at the end of the trial unless canceled beforehand.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Cancellation & Refunds</h3>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  <li>Apple App Store Users: Subscriptions purchased via the App Store must be managed and canceled through your Apple account settings. Apple does not allow developers to issue refunds. For refund requests, visit Apple Support: https://support.apple.com/billing</li>
                  <li>Google Play Store Users: Subscriptions purchased via Google Play must be managed through your Google account settings. Google may issue refunds under specific conditions. For more details, visit: https://support.google.com/googleplay/answer/2479637</li>
                  <li>Direct Purchases: If you purchased a subscription through our website, you may contact us at info@knowhistory.xyz for refund requests subject to our refund policy.</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="section-7" className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">7. POLICY</h2>
            <p className="text-lg">
              All sales are final and no refund will be issued.
            </p>
          </section>

          <section id="section-8" className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">8. PROHIBITED ACTIVITIES</h2>
            <p className="text-lg mb-4">
              You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
            </p>
            <p className="text-lg mb-4">As a user of the Services, you agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
              <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
              <li>Circumvent, disable, or otherwise interfere with security-related features of the Services.</li>
              <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.</li>
              <li>Use any information obtained from the Services in order to harass, abuse, or harm another person.</li>
              <li>Make improper use of our support services or submit false reports of abuse or misconduct.</li>
              <li>Use the Services in a manner inconsistent with any applicable laws or regulations.</li>
              <li>Engage in unauthorized framing of or linking to the Services.</li>
              <li>Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material that interferes with any party's uninterrupted use and enjoyment of the Services.</li>
              <li>Engage in any automated use of the system, such as using scripts to send comments or messages.</li>
              <li>Delete the copyright or other proprietary rights notice from any Content.</li>
              <li>Attempt to impersonate another user or person or use the username of another user.</li>
              <li>Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services.</li>
            </ul>
          </section>

          <section id="section-9" className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">9. USER GENERATED CONTRIBUTIONS</h2>
            <p className="text-lg">
              The Services may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality during which you may create, submit, post, display, transmit, publish, distribute, or broadcast content and materials to us or through the Services, including but not limited to text, writings, video, audio, photographs, music, graphics, comments, reviews, rating suggestions, personal information, or other material ("Contributions"). Any Submission that is publicly posted shall also be treated as a Contribution.
            </p>
          </section>

          <section id="section-10" className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">10. CONTRIBUTION LICENSE</h2>
            <p className="text-lg mb-4">
              When you post Contributions, you grant us a license (including use of your name, trademarks, and logos): By posting any Contributions, you grant us an unrestricted, unlimited, irrevocable, perpetual, non-exclusive, transferable, royalty-free, fully-paid, worldwide right, and license to: use, copy, reproduce, distribute, sell, resell, publish, broadcast, retitle, store, publicly perform, publicly display, reformat, translate, excerpt (in whole or in part), and exploit your Contributions (including, without limitation, your image, name, and voice) for any purpose, commercial, advertising, or otherwise, to prepare derivative works of, or incorporate into other works, your contributions, and to sublicense the licenses granted in this section.
            </p>
            <p className="text-lg">
              This license includes our use of your name, company name, and franchise name, as applicable, and any of the trademarks, service marks, trade names, logos, and personal and commercial images you provide.
            </p>
          </section>

          <section id="section-11" className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">11. MOBILE APPLICATION LICENSE</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Use License</h3>
                <p className="text-lg">
                  If you access the Services via a mobile application, then we grant you a revocable, non-exclusive, non-transferable, limited right to install and use the mobile application on wireless electronic devices owned or controlled by you, and to access and use the mobile application on such devices strictly in accordance with the terms and conditions of this mobile application license contained in these Legal Terms.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Apple and Android Devices</h3>
                <p className="text-lg">
                  The following terms apply when you use a mobile application obtained from either the Apple Store or Google Play to access the Services. You acknowledge that these Legal Terms are between you and us only, and not with Apple Inc. or Google, Inc., and they are not responsible for the App and its content.
                </p>
              </div>
            </div>
          </section>

          <section id="section-12" className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">12. SOCIAL MEDIA</h2>
            <p className="text-lg">
              As part of the functionality of the Services, you may link your account with online accounts you have with third-party service providers (each such account, a "Third-Party Account") by either: (1) providing your Third-Party Account login information through the Services; or (2) allowing us to access your Third-Party Account, as is permitted under the applicable terms and conditions that govern your use of each Third-Party Account.
            </p>
          </section>

          <section id="section-13" className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">13. THIRD-PARTY WEBSITES AND CONTENT</h2>
            <p className="text-lg mb-4">
              The Services may contain (or you may be sent via the Site) links to other websites ("Third-Party Websites") as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, applications, software, and other content or items belonging to or originating from third parties ("Third-Party Content").
            </p>
            <p className="text-lg">
              Such Third-Party Websites and Third-Party Content are not investigated, monitored, or checked for accuracy, appropriateness, or completeness by us, and we are not responsible for any Third-Party Websites accessed through the Services or any Third-Party Content posted on, available through, or installed from the Services, including the content, accuracy, offensiveness, opinions, reliability, privacy practices, or other policies of or contained in the Third-Party Websites or the Third-Party Content.
            </p>
          </section>

          <section id="section-14" className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">14. ADVERTISERS</h2>
            <p className="text-lg mb-4">
              We allow advertisers to display their advertisements and other information in certain areas of the Services, such as sidebar advertisements or banner advertisements. We simply provide the space to place such advertisements, and we have no other relationship with advertisers.
            </p>
          </section>

          <section id="section-15" className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">15. SERVICES MANAGEMENT</h2>
            <p className="text-lg mb-4">
              We reserve the right, but not the obligation, to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>Monitor the Services for violations of these Legal Terms;</li>
              <li>Take appropriate legal action against anyone who, in our sole discretion, violates the law or these Legal Terms, including without limitation, reporting such user to law enforcement authorities;</li>
              <li>In our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof;</li>
              <li>In our sole discretion and without limitation, notice, or liability, to remove from the Services or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems;</li>
              <li>Otherwise manage the Services in a manner designed to protect our rights and property and to facilitate the proper functioning of the Services.</li>
            </ul>
          </section>

          <section id="section-16" className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">16. PRIVACY POLICY</h2>
            <p className="text-lg">
              We care about data privacy and security. Please review our Privacy Policy: <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-800">Privacy Policy</Link>. By using the Services, you agree to be bound by our Privacy Policy, which is incorporated into these Legal Terms.
            </p>
          </section>

          <section id="section-17" className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">17. DIGITAL MILLENNIUM COPYRIGHT ACT (DMCA) NOTICE AND POLICY</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Notifications</h3>
                <p className="text-lg">
                  If you believe that content available on or through our Services infringes one or more of your copyrights, please immediately notify our Designated Copyright Agent by mail, email or fax and provide the information described below.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Counter Notification</h3>
                <p className="text-lg">
                  If you believe your own copyrighted material has been removed from the Services as a result of a mistake or misidentification, you may submit a written counter notification to our Designated Copyright Agent using the contact information provided below.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Designated Copyright Agent</h3>
                <p className="text-lg">
                  Rafael Williams<br />
                  Attn: Copyright Agent<br />
                  info@knowhistory.xyz
                </p>
              </div>
            </div>
          </section>

          <section id="section-18" className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">18. TERM AND TERMINATION</h2>
            <p className="text-lg">
              These Legal Terms shall remain in full force and effect while you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION.
            </p>
          </section>

          <section id="section-19" className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">19. MODIFICATIONS AND INTERRUPTIONS</h2>
            <p className="text-lg">
              We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Services.
            </p>
          </section>

          <section id="section-20" className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">20. GOVERNING LAW</h2>
            <p className="text-lg">
              These Legal Terms and your use of the Services are governed by and construed in accordance with the laws of the State of Delaware applicable to agreements made and to be entirely performed within the State of Delaware, without regard to its conflict of law principles.
            </p>
          </section>

          <section id="section-21" className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">21. DISPUTE RESOLUTION</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Informal Negotiations</h3>
                <p className="text-lg">
                  To expedite resolution and control the cost of any dispute, controversy, or claim related to these Legal Terms, you and we agree to first attempt to negotiate any dispute informally for at least thirty (30) days before initiating arbitration.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Binding Arbitration</h3>
                <p className="text-lg">
                  If informal negotiations fail, all disputes arising out of or relating to these Legal Terms shall be resolved through binding arbitration. YOU UNDERSTAND THAT WITHOUT THIS PROVISION, YOU WOULD HAVE THE RIGHT TO SUE IN COURT AND HAVE A JURY TRIAL.
                </p>
              </div>
            </div>
          </section>

          <section id="section-22" className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">22. CORRECTIONS</h2>
            <p className="text-lg">
              There may be information on the Services that contains typographical errors, inaccuracies, or omissions. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice.
            </p>
          </section>

          <section id="section-23" className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">23. DISCLAIMER</h2>
            <p className="text-lg uppercase">
              THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK.
            </p>
          </section>

          <section id="section-24" className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">24. LIMITATIONS OF LIABILITY</h2>
            <p className="text-lg">
              IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES.
            </p>
          </section>

          <section id="section-25" className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">25. INDEMNIFICATION</h2>
            <p className="text-lg">
              You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand.
            </p>
          </section>

          <section id="section-26" className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">26. USER DATA</h2>
            <p className="text-lg">
              We will maintain certain data that you transmit to the Services for the purpose of managing the performance of the Services, as well as data relating to your use of the Services. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Services.
            </p>
          </section>

          <section id="section-27" className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">27. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</h2>
            <p className="text-lg">
              Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically satisfy any legal requirement that such communication be in writing.
            </p>
          </section>

          <section id="section-28" className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">28. CALIFORNIA USERS AND RESIDENTS</h2>
            <p className="text-lg">
              If any complaint with us is not satisfactorily resolved, you can contact the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs in writing at 1625 North Market Blvd., Suite N 112, Sacramento, California 95834 or by telephone at (800) 952-5210 or (916) 445-1254.
            </p>
          </section>

          <section id="section-29" className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">29. MISCELLANEOUS</h2>
            <p className="text-lg">
              These Legal Terms and any policies or operating rules posted by us on the Services or in respect to the Services constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Legal Terms shall not operate as a waiver of such right or provision.
            </p>
          </section>

          <section id="section-30" className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">30. CONTACT US</h2>
            <p className="text-lg">
              In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:
            </p>
            <div className="mt-4 text-lg">
              <p>SocialShift Corp</p>
              <p>251 Little Falls Drive</p>
              <p>Wilmington, New Castle County, Delaware 19808</p>
              <p>United States</p>
              <p>Phone: 404-938-9214</p>
              <p>Email: info@knowhistory.xyz</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
