import Link from 'next/link';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20 font-poppins">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="prose max-w-none text-gray-700">
          {/* Header */}
          <section className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg">
              This Privacy Policy describes SocialShift's policies and procedures on the collection, use, and disclosure of your information when you use the Service.
            </p>
            <p className="text-lg mt-4">
              We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the Privacy Policy Generator.
            </p>
          </section>

          {/* Interpretation and Definitions */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Interpretation and Definitions</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Interpretation</h3>
              <p className="text-lg">
                The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Definitions</h3>
              <p className="text-lg mb-4">For the purposes of this Privacy Policy:</p>
              <ul className="list-disc pl-6 space-y-3 text-lg">
                <li><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
                <li><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</li>
                <li><strong>Application</strong> refers to Know[ledge], the software program provided by the Company.</li>
                <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to SocialShift, 251 Falls Drive, Wilmington, New Castle County, Delaware 19808, United States.</li>
                <li><strong>Country</strong> refers to: Delaware, United States</li>
                <li><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
                <li><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
                <li><strong>Service</strong> refers to the Application.</li>
                <li><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</li>
                <li><strong>Third-party Social Media Service</strong> refers to any website or any social network website through which a User can log in or create an account to use the Service.</li>
                <li><strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</li>
                <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
              </ul>
            </div>
          </section>

          {/* Collecting and Using Your Personal Data */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Collecting and Using Your Personal Data</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Types of Data Collected</h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-blue-800 mb-3">Personal Data</h4>
                <p className="text-lg mb-4">
                  While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  <li>Email address</li>
                  <li>First name and last name</li>
                  <li>Phone number</li>
                  <li>Usage Data</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-blue-800 mb-3">Usage Data</h4>
                <p className="text-lg">
                  Usage Data is collected automatically when using the Service.
                </p>
                <p className="text-lg mt-4">
                  Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                </p>
              </div>
            </div>

            {/* Information from Third-Party Social Media Services */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Information from Third-Party Social Media Services</h3>
              <p className="text-lg mb-4">
                The Company allows You to create an account and log in to use the Service through the following Third-party Social Media Services:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg">
                <li>Google</li>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>LinkedIn</li>
              </ul>
            </div>

            {/* Use of Your Personal Data */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Use of Your Personal Data</h3>
              <p className="text-lg mb-4">The Company may use Personal Data for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2 text-lg">
                <li>To provide and maintain our Service, including to monitor the usage of our Service.</li>
                <li>To manage Your Account: to manage Your registration as a user of the Service.</li>
                <li>For the performance of a contract: the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</li>
                <li>To contact You: To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication.</li>
                <li>To provide You with news, special offers and general information about other goods, services and events.</li>
                <li>To manage Your requests: To attend and manage Your requests to Us.</li>
                <li>For business transfers: We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets.</li>
                <li>For other purposes: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns.</li>
              </ul>
            </div>
          </section>

          {/* Legal Basis for Processing */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Legal Basis for Processing Personal Data (For Users in the European Economic Area - EEA)</h2>
            <p className="text-lg mb-4">We process personal data based on the following legal grounds:</p>
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>Consent: When you provide explicit consent (e.g., subscribing to newsletters).</li>
              <li>Contractual Necessity: To fulfill our obligations in providing services to you.</li>
              <li>Legitimate Interest: To improve our services and detect fraudulent activity.</li>
              <li>Legal Obligation: To comply with legal and regulatory requirements.</li>
              <li>Vital Interest: When necessary to protect users' safety.</li>
            </ul>
          </section>

          {/* Retention of Data */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Retention of Your Personal Data</h2>
            <p className="text-lg mb-4">
              The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
            </p>
            <p className="text-lg">
              The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.
            </p>
          </section>

          {/* Transfer of Data */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Transfer of Your Personal Data</h2>
            <p className="text-lg">
              Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.
            </p>
          </section>

          {/* Delete Your Personal Data */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Delete Your Personal Data</h2>
            <p className="text-lg mb-4">
              You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.
            </p>
            <p className="text-lg mb-4">
              Our Service may give You the ability to delete certain information about You from within the Service.
            </p>
            <p className="text-lg">
              You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us.
            </p>
          </section>

          {/* Disclosure of Personal Data */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Disclosure of Your Personal Data</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Business Transactions</h3>
              <p className="text-lg">
                If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Law enforcement</h3>
              <p className="text-lg">
                Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Other legal requirements</h3>
              <p className="text-lg mb-4">
                The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg">
                <li>Comply with a legal obligation</li>
                <li>Protect and defend the rights or property of the Company</li>
                <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
                <li>Protect the personal safety of Users of the Service or the public</li>
                <li>Protect against legal liability</li>
              </ul>
            </div>
          </section>

          {/* Security of Personal Data */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Security of Your Personal Data</h2>
            <p className="text-lg">
              The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Children's Privacy</h2>
            <p className="text-lg mb-4">
              Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us.
            </p>
            <p className="text-lg">
              If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.
            </p>
          </section>

          {/* Links to Other Websites */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Links to Other Websites</h2>
            <p className="text-lg">
              Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.
            </p>
          </section>

          {/* Changes to Privacy Policy */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Changes to this Privacy Policy</h2>
            <p className="text-lg mb-4">
              We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.
            </p>
            <p className="text-lg mb-4">
              We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.
            </p>
            <p className="text-lg">
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
          </section>

          {/* Contact Us */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Contact Us</h2>
            <p className="text-lg mb-4">
              If you have any questions about this Privacy Policy, You can contact us:
            </p>
            <p className="text-lg">By email: info@knowhistory.xyz</p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
