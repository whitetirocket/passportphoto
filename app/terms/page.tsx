import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use | PassportPhotoSnap',
  description: 'Terms of use for PassportPhotoSnap free passport photo maker.',
}

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms of Use</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: April 2026</p>

      <div className="space-y-8 text-gray-700 leading-relaxed">

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Acceptance of Terms</h2>
          <p>
            By using PassportPhotoSnap (&quot;the Service&quot;), you agree to these Terms of Use.
            If you do not agree, please do not use the Service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Description of Service</h2>
          <p>
            PassportPhotoSnap is a free online tool that helps users crop and resize photos to meet
            passport and visa photo requirements for various countries. All image processing is performed
            locally in your browser — no images are uploaded to our servers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">No Guarantee of Official Acceptance</h2>
          <p>
            PassportPhotoSnap provides size and formatting guidance based on publicly available government
            requirements. However, we cannot guarantee that photos created using this tool will be accepted
            by any government agency, consulate, or official body. Requirements may change without notice.
          </p>
          <p className="mt-3">
            It is your responsibility to verify current requirements with the relevant authority before
            submitting your photo.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Permitted Use</h2>
          <p>You may use the Service for personal, non-commercial purposes. You may not:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Use automated scripts or bots to access the Service</li>
            <li>Attempt to reverse-engineer or copy the Service</li>
            <li>Use the Service for any unlawful purpose</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Disclaimer of Warranties</h2>
          <p>
            The Service is provided &quot;as is&quot; without warranty of any kind. We make no warranties,
            express or implied, regarding the accuracy, reliability, or suitability of the Service for
            any purpose.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, PassportPhotoSnap shall not be liable for any
            indirect, incidental, special, or consequential damages arising from your use of the Service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Continued use of the Service
            after changes constitutes acceptance of the new Terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Contact</h2>
          <p>
            Questions about these Terms?{' '}
            <a href="mailto:hello@passportphotosnap.com" className="text-blue-600 hover:underline">
              hello@passportphotosnap.com
            </a>
          </p>
        </section>

      </div>
    </div>
  )
}
