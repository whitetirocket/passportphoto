import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | PassportPhotoSnap',
  description: 'Privacy policy for PassportPhotoSnap. Learn how we handle your data - spoiler: we don\'t collect any photos.',
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: April 2026</p>

      <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Your Photos Stay on Your Device</h2>
          <p>
            PassportPhotoSnap processes all images entirely within your browser using the JavaScript Canvas API.
            Your photos are never uploaded to our servers, never stored, and never transmitted to any third party.
            When you close the browser tab, all photo data is permanently gone.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Information We Collect</h2>
          <p>We do not collect personal information such as your name, email address, or photos.</p>
          <p className="mt-3">We may collect anonymous usage data through third-party analytics services (such as Google Analytics), which may include:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Pages visited and time spent on the site</li>
            <li>Browser type and operating system</li>
            <li>Approximate geographic location (country/city level)</li>
            <li>Referring website</li>
          </ul>
          <p className="mt-3">This data is aggregated and cannot be used to identify individual users.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Advertising</h2>
          <p>
            This website displays advertisements served by Google AdSense. Google may use cookies and similar
            technologies to show you relevant ads based on your browsing history. You can opt out of
            personalized advertising by visiting{' '}
            <a href="https://adssettings.google.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              Google Ad Settings
            </a>.
          </p>
          <p className="mt-3">
            Google&apos;s use of advertising cookies enables it and its partners to serve ads based on your visit
            to this and other websites. For more information, see{' '}
            <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              Google&apos;s Privacy Policy
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Cookies</h2>
          <p>
            We use cookies only for the purposes of analytics and advertising as described above. We do not
            use cookies to track individual users or store personal information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy
            practices of those sites and encourage you to read their privacy policies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Children&apos;s Privacy</h2>
          <p>
            This service is not directed to children under 13. We do not knowingly collect personal
            information from children.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page
            with an updated revision date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Contact</h2>
          <p>
            If you have questions about this Privacy Policy, you can contact us at:{' '}
            <a href="mailto:hello@passportphotosnap.com" className="text-blue-600 hover:underline">
              hello@passportphotosnap.com
            </a>
          </p>
        </section>

      </div>
    </div>
  )
}
