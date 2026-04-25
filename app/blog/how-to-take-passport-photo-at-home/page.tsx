import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Take a Passport Photo at Home | Step-by-Step Guide 2026',
  description: 'Save $15–20 by taking your own passport photo at home. Step-by-step guide: background setup, lighting, pose, and how to crop to the correct size for free.',
}

export default function Post() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-2">
        <Link href="/blog" className="text-sm text-blue-600 hover:underline">← All guides</Link>
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mt-4 mb-2">
        How to Take a Passport Photo at Home (Step-by-Step Guide)
      </h1>
      <p className="text-sm text-gray-400 mb-8">April 2026 · 5 min read</p>

      <div className="space-y-8 text-gray-700 leading-relaxed">

        <p className="text-lg text-gray-600">
          A professional passport photo at a drugstore costs $15–20. Taking one at home costs nothing.
          Here is exactly how to do it right — the first time.
        </p>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">What You Need</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>A smartphone with a decent camera (any phone from the last 5 years works)</li>
            <li>A plain white or light grey wall or background</li>
            <li>Natural light or a lamp in front of you</li>
            <li>Someone to take the photo, or a tripod and a timer</li>
            <li>PassportPhotoSnap to crop and resize — free, no registration</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Step 1: Set Up Your Background</h2>
          <p>
            Stand or sit 2–3 feet in front of a plain white wall. A white wall, a white sheet,
            or even a plain white door all work.
          </p>
          <p className="mt-3">
            The most common reason passport photos get rejected is shadows on the background.
            To avoid this: stand far enough from the wall so that your shadow does not fall on it.
          </p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mt-4">
            <p className="text-sm font-semibold text-yellow-900">Tip</p>
            <p className="text-sm text-yellow-800 mt-1">
              If you do not have a white wall, tape a large white sheet of paper or a white bedsheet to the wall.
              It does not need to be perfect — the crop tool will take care of the framing.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Step 2: Get the Lighting Right</h2>
          <p>
            Face the light source directly. Natural light from a window works best. If using a lamp,
            place it in front of you, not behind or to the side.
          </p>
          <p className="mt-3">
            Avoid harsh overhead lighting — it creates shadows under your eyes. Soft, even, front-facing
            light gives the cleanest result.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Step 3: Pose Correctly</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Look directly at the camera</li>
            <li>Keep your head straight — no tilting</li>
            <li>Neutral expression, mouth closed</li>
            <li>Both eyes fully open</li>
            <li>No glasses (required by most countries since 2016–2018)</li>
            <li>Hair out of your face so your full face is visible</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Step 4: Take the Photo</h2>
          <p>
            Frame the shot so your head and shoulders are visible, with some space above your head.
            Take several photos and pick the sharpest one.
          </p>
          <p className="mt-3">
            Transfer the photo to your computer, or use your phone browser to continue.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Step 5: Crop and Resize for Free</h2>
          <p>
            Use <Link href="/" className="text-blue-600 hover:underline">PassportPhotoSnap</Link> to
            crop your photo to the exact size required by your country. Select your country, upload
            the photo, drag the crop handles to frame your face, and download.
          </p>
          <p className="mt-3">
            You can download a single JPG or a print-ready PDF with multiple copies per page —
            useful for printing at home or at a pharmacy.
          </p>
          <div className="mt-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
            >
              Crop My Photo Now →
            </Link>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Common Mistakes to Avoid</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Shadow on the background</strong> — stand further from the wall</li>
            <li><strong>Blurry photo</strong> — hold the phone steady, or use a tripod</li>
            <li><strong>Harsh shadows on face</strong> — use softer, front-facing light</li>
            <li><strong>Wrong expression</strong> — neutral and relaxed, not stiff</li>
            <li><strong>Wrong size</strong> — always use a tool to resize, do not guess</li>
          </ul>
        </section>

        <div className="border-t border-gray-200 pt-6 mt-8">
          <p className="text-sm text-gray-500">
            Ready to crop your photo?{' '}
            <Link href="/" className="text-blue-600 hover:underline">Use the free tool →</Link>
          </p>
        </div>

      </div>
    </div>
  )
}
