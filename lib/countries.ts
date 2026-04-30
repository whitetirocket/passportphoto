export interface DocumentSpec {
  id: string
  countryId: string
  name: string
  slug: string
  widthMm: number
  heightMm: number
  widthPx: number
  heightPx: number
  dpi: number
  background: string
  bgColor: string
  bgColorLabel: string
  requirements: string[]
  seoTitle: string
  seoDescription: string
  h1: string
  faq: { q: string; a: string }[]
}

export interface CountrySpec {
  id: string
  name: string
  flag: string
  documents: DocumentSpec[]
}

// Helper for short FAQs on secondary document types
function shortFaq(name: string, w: number, h: number, bg: string): { q: string; a: string }[] {
  return [
    { q: `What size is a ${name} photo?`, a: `${name} photos must be ${w}×${h}mm with a ${bg} background.` },
    { q: 'Can I wear glasses?', a: 'No. Biometric photo standards do not permit glasses.' },
    { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
  ]
}

export const countries: CountrySpec[] = [
  {
    id: 'us',
    name: 'United States',
    flag: '🇺🇸',
    documents: [
      {
        id: 'us-passport',
        countryId: 'us',
        name: 'Passport',
        slug: 'us-passport-photo',
        widthMm: 51, heightMm: 51, widthPx: 600, heightPx: 600, dpi: 300,
        background: 'White or off-white', bgColor: '#ffffff', bgColorLabel: 'White',
        requirements: [
          'Size: 2×2 inches (51×51 mm)', 'Printed at 300 DPI minimum',
          'Plain white or off-white background', 'Neutral facial expression, mouth closed',
          'Both eyes open and clearly visible', 'No glasses (since 2016)',
          'Head centered, facing camera directly', 'Face must cover 70–80% of the frame',
          'Taken within the last 6 months',
        ],
        seoTitle: 'Free US Passport Photo Maker | 2×2 inch | No Watermark | Free',
        seoDescription: 'Create a compliant US passport photo online for free. Correct 2×2 inch size, white background. No registration, no watermark. Download JPG or print-ready PDF instantly.',
        h1: 'Free US Passport Photo Maker',
        faq: [
          { q: 'What size is a US passport photo?', a: 'US passport photos must be exactly 2×2 inches (51×51 mm). When printed at 300 DPI that equals 600×600 pixels. Our tool automatically outputs the correct size.' },
          { q: 'What background color is required for US passport photos?', a: 'The background must be plain white or off-white. No patterns, shadows, or other people should appear in the background.' },
          { q: 'Can I wear glasses in my US passport photo?', a: 'No. Since November 2016, the US Department of State does not accept passport photos with glasses, even prescription glasses.' },
          { q: 'How recent does my passport photo need to be?', a: 'Your photo must have been taken within the last 6 months and must reflect your current appearance.' },
          { q: 'Can I use this photo for a US visa application?', a: 'Yes. The 2×2 inch format is accepted for most US visa applications as well as for Global Entry, TSA PreCheck, and other government programs.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens entirely in your browser using JavaScript. Your photo never leaves your device.' },
        ],
      },
      {
        id: 'us-visa',
        countryId: 'us',
        name: 'Visa',
        slug: 'us-visa-photo',
        widthMm: 51, heightMm: 51, widthPx: 600, heightPx: 600, dpi: 300,
        background: 'White or off-white', bgColor: '#ffffff', bgColorLabel: 'White',
        requirements: ['Size: 2×2 inches (51×51 mm)', 'Plain white or off-white background', 'Neutral expression, mouth closed', 'Both eyes open and clearly visible', 'No glasses', 'Taken within the last 6 months'],
        seoTitle: 'Free US Visa Photo Maker | 2×2 inch | No Watermark | Free',
        seoDescription: 'Create a compliant US visa photo online for free. Correct 2×2 inch (51×51mm) size, white background. No registration, no watermark. Instant download.',
        h1: 'Free US Visa Photo Maker',
        faq: [
          { q: 'What size is a US visa photo?', a: 'US visa photos require the same 2×2 inch (51×51 mm) format as the US passport photo, with a plain white background.' },
          { q: 'Can I use this photo for DS-160 (non-immigrant visa application)?', a: 'Yes. The 2×2 inch format with white background meets DS-160 requirements for tourist, student, work, and other non-immigrant visas.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens entirely in your browser. Your photo never leaves your device.' },
        ],
      },
      {
        id: 'us-green-card',
        countryId: 'us',
        name: 'Green Card',
        slug: 'us-green-card-photo',
        widthMm: 51, heightMm: 51, widthPx: 600, heightPx: 600, dpi: 300,
        background: 'White or off-white', bgColor: '#ffffff', bgColorLabel: 'White',
        requirements: ['Size: 2×2 inches (51×51 mm)', 'Plain white or off-white background', 'Neutral expression, mouth closed', 'Both eyes open and clearly visible', 'No glasses', 'Taken within the last 6 months'],
        seoTitle: 'Free US Green Card Photo Maker | 2×2 inch | No Watermark | Free',
        seoDescription: 'Create a compliant US Green Card (permanent resident) photo free. Correct 2×2 inch size, white background. No registration, no watermark. Instant download.',
        h1: 'Free US Green Card Photo Maker',
        faq: [
          { q: 'What size is a Green Card photo?', a: 'US Green Card photos must be 2×2 inches (51×51 mm) with a plain white background — the same format as the US passport photo.' },
          { q: 'Can I use this for Form I-485 (adjustment of status)?', a: 'Yes. Form I-485 and most other USCIS forms require the standard 2×2 inch photo with white background.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. Everything is processed locally in your browser. Your photo never leaves your device.' },
        ],
      },
    ],
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    flag: '🇬🇧',
    documents: [
      {
        id: 'uk-passport',
        countryId: 'uk',
        name: 'Passport',
        slug: 'uk-passport-photo',
        widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300,
        background: 'Plain cream or light grey', bgColor: '#f0ede8', bgColorLabel: 'Cream',
        requirements: ['Size: 35×45 mm', 'Plain cream or light grey background', 'Neutral expression, mouth closed', 'Eyes open and clearly visible', 'No glasses', 'Face must take up 70–80% of the frame', 'Taken within the last month', 'No head covering (unless for religious reasons)'],
        seoTitle: 'Free UK Passport Photo Maker | 35×45mm | No Watermark | Free',
        seoDescription: 'Create a compliant UK passport photo online for free. Correct 35×45mm size. No registration, no watermark. Download JPG or print-ready PDF instantly.',
        h1: 'Free UK Passport Photo Maker',
        faq: [
          { q: 'What size is a UK passport photo?', a: 'UK passport photos must be 35 mm wide and 45 mm tall. Our tool outputs the correct pixel dimensions for printing at 300 DPI.' },
          { q: 'What background is required for a UK passport photo?', a: 'The background must be plain cream or light grey. It must have no patterns or shadows.' },
          { q: 'Can I wear glasses in my UK passport photo?', a: 'No. HM Passport Office stopped accepting photos with glasses in 2018.' },
          { q: 'How recent does my UK passport photo need to be?', a: 'UK passport photos should be taken within the last month and must show your current appearance.' },
          { q: 'Can I smile in my UK passport photo?', a: 'You should have a neutral expression with your mouth closed. A slight natural smile may be acceptable, but a broad smile is not.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens entirely in your browser. Your photo never leaves your device.' },
        ],
      },
      {
        id: 'uk-visa',
        countryId: 'uk',
        name: 'Visa',
        slug: 'uk-visa-photo',
        widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300,
        background: 'Plain cream or light grey', bgColor: '#f0ede8', bgColorLabel: 'Cream',
        requirements: ['Size: 35×45 mm', 'Plain cream or light grey background', 'Neutral expression, mouth closed', 'Eyes open and clearly visible', 'No glasses', 'Taken within the last 6 months'],
        seoTitle: 'Free UK Visa Photo Maker | 35×45mm | No Watermark | Free',
        seoDescription: 'Create a compliant UK visa photo online for free. Correct 35×45mm size, cream background. No registration, no watermark. Instant download.',
        h1: 'Free UK Visa Photo Maker',
        faq: [
          { q: 'What size is a UK visa photo?', a: 'UK visa photos must be 35×45mm — the same format as the UK passport photo, with a plain cream or light grey background.' },
          { q: 'Can I use the same photo for UK passport and UK visa?', a: 'Yes. Both UK passport and UK visa applications require the 35×45mm format with a plain cream or light grey background.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
      {
        id: 'uk-drivers-licence',
        countryId: 'uk',
        name: "Driver's Licence",
        slug: 'uk-drivers-licence-photo',
        widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300,
        background: 'Plain cream or light grey', bgColor: '#f0ede8', bgColorLabel: 'Cream',
        requirements: ['Size: 35×45 mm', 'Plain cream or light grey background', 'Neutral expression', 'Eyes open and clearly visible', 'No glasses', 'Taken within the last 6 months'],
        seoTitle: "Free UK Driver's Licence Photo | 35×45mm | No Watermark | Free",
        seoDescription: "Create a compliant UK driver's licence photo online for free. Correct 35×45mm size. No registration, no watermark. Instant download.",
        h1: "Free UK Driver's Licence Photo Maker",
        faq: shortFaq("UK Driver's Licence", 35, 45, 'plain cream or light grey'),
      },
      {
        id: 'uk-id-card',
        countryId: 'uk',
        name: 'ID / Residence Card',
        slug: 'uk-id-card-photo',
        widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300,
        background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White',
        requirements: ['Size: 35×45 mm', 'Plain white background', 'Neutral expression', 'Eyes open and clearly visible', 'No glasses', 'Taken within the last 6 months'],
        seoTitle: 'Free UK ID / Residence Card Photo | 35×45mm | No Watermark | Free',
        seoDescription: 'Create a compliant UK ID card or residence card photo online for free. Correct 35×45mm size, white background. No registration, no watermark. Instant download.',
        h1: 'Free UK ID / Residence Card Photo Maker',
        faq: shortFaq('UK ID/Residence Card', 35, 45, 'plain white'),
      },
    ],
  },
  {
    id: 'canada',
    name: 'Canada',
    flag: '🇨🇦',
    documents: [
      {
        id: 'canada-passport',
        countryId: 'canada',
        name: 'Passport',
        slug: 'canada-passport-photo',
        widthMm: 50, heightMm: 70, widthPx: 591, heightPx: 827, dpi: 300,
        background: 'White', bgColor: '#ffffff', bgColorLabel: 'White',
        requirements: ['Size: 50×70 mm', 'Plain white background', 'Neutral expression, mouth closed', 'Both eyes open and clearly visible', 'No glasses', 'Head centered and straight', 'Face height between 31–36 mm from chin to crown', 'Taken within the last 6 months'],
        seoTitle: 'Free Canada Passport Photo Maker | 50×70mm | No Watermark | Free',
        seoDescription: 'Create a compliant Canadian passport photo online for free. Correct 50×70mm size. No registration, no watermark. Download JPG or print-ready PDF instantly.',
        h1: 'Free Canada Passport Photo Maker',
        faq: [
          { q: 'What size is a Canadian passport photo?', a: 'Canadian passport photos must be 50 mm wide and 70 mm tall, with the face occupying 31–36 mm of the height.' },
          { q: 'What background is required for a Canadian passport photo?', a: 'The background must be plain white with no patterns or shadows.' },
          { q: 'Can I wear glasses in my Canadian passport photo?', a: 'No. Immigration, Refugees and Citizenship Canada (IRCC) does not accept photos taken with glasses.' },
          { q: 'Can I use this photo for a Canadian visa?', a: 'Yes. The 50×70mm format is also used for Canadian visas and permanent resident cards.' },
          { q: 'How recent must the photo be?', a: 'The photo must have been taken within the last 6 months and must represent your current appearance.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens entirely in your browser. Your photo never leaves your device.' },
        ],
      },
      {
        id: 'canada-pr-card',
        countryId: 'canada',
        name: 'PR Card',
        slug: 'canada-pr-card-photo',
        widthMm: 50, heightMm: 70, widthPx: 591, heightPx: 827, dpi: 300,
        background: 'White', bgColor: '#ffffff', bgColorLabel: 'White',
        requirements: ['Size: 50×70 mm', 'Plain white background', 'Neutral expression, mouth closed', 'Both eyes open and clearly visible', 'No glasses', 'Taken within the last 6 months'],
        seoTitle: 'Free Canada PR Card Photo | 50×70mm | No Watermark | Free',
        seoDescription: 'Create a compliant Canadian permanent resident (PR) card photo online for free. Correct 50×70mm size. No registration, no watermark. Instant download.',
        h1: 'Free Canada PR Card Photo Maker',
        faq: [
          { q: 'What size is a Canadian PR card photo?', a: 'Canadian permanent resident (PR) card photos must be 50×70mm with a plain white background — same as the Canadian passport photo format.' },
          { q: 'Can I use the same photo for my passport and PR card?', a: 'Yes. Both use the 50×70mm format with white background and the same facial expression requirements.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. Everything is processed locally in your browser.' },
        ],
      },
      {
        id: 'canada-visa',
        countryId: 'canada',
        name: 'Visa',
        slug: 'canada-visa-photo',
        widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300,
        background: 'White', bgColor: '#ffffff', bgColorLabel: 'White',
        requirements: ['Size: 35×45 mm', 'Plain white background', 'Neutral expression, mouth closed', 'Both eyes open and clearly visible', 'No glasses', 'Taken within the last 6 months'],
        seoTitle: 'Free Canada Visa Photo | 35×45mm | No Watermark | Free',
        seoDescription: 'Create a compliant Canadian visa photo online for free. Correct 35×45mm size, white background. No registration, no watermark. Instant download.',
        h1: 'Free Canada Visa Photo Maker',
        faq: [
          { q: 'What size is a Canadian visa photo?', a: 'Canadian temporary resident visa photos require 35×45mm with a plain white background.' },
          { q: 'Is the Canada visa photo size different from the passport photo?', a: 'Yes. Canadian passport photos are 50×70mm, while Canadian visa applications use the standard 35×45mm international format.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
    ],
  },
  {
    id: 'australia',
    name: 'Australia',
    flag: '🇦🇺',
    documents: [
      {
        id: 'australia-passport',
        countryId: 'australia',
        name: 'Passport',
        slug: 'australia-passport-photo',
        widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300,
        background: 'Plain white or light grey', bgColor: '#ffffff', bgColorLabel: 'White',
        requirements: ['Size: 35×45 mm', 'Plain white or light grey background', 'Neutral expression, mouth closed', 'Eyes open and clearly visible', 'No glasses', 'Face must take up at least 75–80% of the frame', 'Taken within the last 6 months'],
        seoTitle: 'Free Australian Passport Photo Maker | 35×45mm | No Watermark | Free',
        seoDescription: 'Create a compliant Australian passport photo online for free. Correct 35×45mm size. No registration, no watermark. Download JPG or print-ready PDF instantly.',
        h1: 'Free Australian Passport Photo Maker',
        faq: [
          { q: 'What size is an Australian passport photo?', a: 'Australian passport photos must be 35 mm wide and 45 mm tall.' },
          { q: 'What background is required?', a: 'The background must be plain white or light grey, without patterns or shadows.' },
          { q: 'Can I wear glasses?', a: 'No. The Australian Passport Office does not accept photos with glasses.' },
          { q: 'How recent does the photo need to be?', a: 'The photo must have been taken within the last 6 months.' },
          { q: 'Can I use this for an Australian visa?', a: 'Yes. The 35×45mm format is accepted for Australian visas and the ImmiAccount portal.' },
          { q: 'Is my photo uploaded to any server?', a: 'No. All processing happens entirely in your browser. Your photo never leaves your device.' },
        ],
      },
      {
        id: 'australia-visa',
        countryId: 'australia',
        name: 'Visa',
        slug: 'australia-visa-photo',
        widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300,
        background: 'Plain white or light grey', bgColor: '#ffffff', bgColorLabel: 'White',
        requirements: ['Size: 35×45 mm', 'Plain white or light grey background', 'Neutral expression, mouth closed', 'Eyes open and clearly visible', 'No glasses', 'Taken within the last 6 months'],
        seoTitle: 'Free Australian Visa Photo Maker | 35×45mm | No Watermark | Free',
        seoDescription: 'Create a compliant Australian visa photo online for free. Correct 35×45mm size, white background. No registration, no watermark. Instant download.',
        h1: 'Free Australian Visa Photo Maker',
        faq: [
          { q: 'What size is an Australian visa photo?', a: 'Australian visa photos are 35×45mm — same as the Australian passport photo format.' },
          { q: 'Can I submit this photo through the ImmiAccount portal?', a: 'Yes. The 35×45mm format is accepted for online Australian visa applications through ImmiAccount.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
      {
        id: 'australia-id-card',
        countryId: 'australia',
        name: 'ID Card',
        slug: 'australia-id-card-photo',
        widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300,
        background: 'Plain white or light grey', bgColor: '#ffffff', bgColorLabel: 'White',
        requirements: ['Size: 35×45 mm', 'Plain white or light grey background', 'Neutral expression', 'Eyes open and clearly visible', 'No glasses', 'Taken within the last 6 months'],
        seoTitle: 'Free Australian ID Card Photo | 35×45mm | No Watermark | Free',
        seoDescription: 'Create a compliant Australian ID card photo online for free. Correct 35×45mm size. No registration, no watermark. Instant download.',
        h1: 'Free Australian ID Card Photo Maker',
        faq: shortFaq('Australian ID Card', 35, 45, 'plain white or light grey'),
      },
      {
        id: 'australia-citizenship',
        countryId: 'australia',
        name: 'Citizenship',
        slug: 'australia-citizenship-photo',
        widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300,
        background: 'Plain white or light grey', bgColor: '#ffffff', bgColorLabel: 'White',
        requirements: ['Size: 35×45 mm', 'Plain white or light grey background', 'Neutral expression', 'Eyes open and clearly visible', 'No glasses', 'Taken within the last 6 months'],
        seoTitle: 'Free Australia Citizenship Photo | 35×45mm | No Watermark | Free',
        seoDescription: 'Create a compliant Australian citizenship application photo online for free. Correct 35×45mm size. No registration, no watermark. Instant download.',
        h1: 'Free Australia Citizenship Photo Maker',
        faq: shortFaq('Australia Citizenship', 35, 45, 'plain white or light grey'),
      },
      {
        id: 'australia-drivers-licence',
        countryId: 'australia',
        name: "Driver's Licence",
        slug: 'australia-drivers-licence-photo',
        widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300,
        background: 'Plain white or light grey', bgColor: '#ffffff', bgColorLabel: 'White',
        requirements: ['Size: 35×45 mm', 'Plain white or light grey background', 'Neutral expression', 'Eyes open and clearly visible', 'No glasses', 'Taken within the last 6 months'],
        seoTitle: "Free Australian Driver's Licence Photo | 35×45mm | No Watermark | Free",
        seoDescription: "Create a compliant Australian driver's licence photo online for free. Correct 35×45mm size. No registration, no watermark. Instant download.",
        h1: "Free Australian Driver's Licence Photo Maker",
        faq: shortFaq("Australian Driver's Licence", 35, 45, 'plain white or light grey'),
      },
    ],
  },
  {
    id: 'india',
    name: 'India',
    flag: '🇮🇳',
    documents: [
      {
        id: 'india-passport',
        countryId: 'india',
        name: 'Passport',
        slug: 'india-passport-photo',
        widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300,
        background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White',
        requirements: ['Size: 35×45 mm', 'Plain white background', 'Neutral expression, mouth closed', 'Both eyes open and clearly visible', 'No glasses', 'Head centered, facing camera directly', 'Face should cover 70–80% of frame', 'Taken within the last 6 months', 'No shadows on face or background'],
        seoTitle: 'Free India Passport Photo Maker | 35×45mm | No Watermark | Free',
        seoDescription: 'Create a compliant Indian passport photo online for free. Correct 35×45mm size. No registration, no watermark. Download JPG or print-ready PDF instantly.',
        h1: 'Free India Passport Photo Maker',
        faq: [
          { q: 'What size is an Indian passport photo?', a: 'Indian passport photos must be 35 mm wide and 45 mm tall with a plain white background.' },
          { q: 'Can I wear glasses in my Indian passport photo?', a: 'No. The Ministry of External Affairs does not accept passport photos with glasses.' },
          { q: 'Can I wear a head covering?', a: 'Head coverings are only permitted for religious reasons. The face must be fully visible.' },
          { q: 'How recent must the photo be?', a: 'The photo must be taken within the last 6 months.' },
          { q: 'Can I use this photo for an Indian visa application?', a: 'Yes. The 35×45mm format is accepted for all Indian visa categories.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing is done locally in your browser. Your photo never leaves your device.' },
        ],
      },
      {
        id: 'india-visa',
        countryId: 'india',
        name: 'Visa',
        slug: 'india-visa-photo',
        widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300,
        background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White',
        requirements: ['Size: 35×45 mm', 'Plain white background', 'Neutral expression, mouth closed', 'Both eyes open and clearly visible', 'No glasses', 'Taken within the last 6 months'],
        seoTitle: 'Free India Visa Photo Maker | 35×45mm | No Watermark | Free',
        seoDescription: 'Create a compliant Indian visa photo online for free. Correct 35×45mm size, white background. No registration, no watermark. Instant download.',
        h1: 'Free India Visa Photo Maker',
        faq: [
          { q: 'What size is an Indian visa photo?', a: 'Indian visa photos require the same 35×45mm format with a plain white background as the Indian passport photo.' },
          { q: 'Can I use this for an e-Visa application?', a: 'Yes. Indian e-Visa applications require a 35×45mm photo with white background.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. Everything is processed locally in your browser.' },
        ],
      },
      {
        id: 'india-oci',
        countryId: 'india',
        name: 'OCI Card',
        slug: 'india-oci-photo',
        widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300,
        background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White',
        requirements: ['Size: 35×45 mm', 'Plain white background', 'Neutral expression, mouth closed', 'Both eyes open and clearly visible', 'No glasses', 'Taken within the last 6 months'],
        seoTitle: 'Free India OCI Card Photo Maker | 35×45mm | No Watermark | Free',
        seoDescription: 'Create a compliant OCI card photo online for free. Correct 35×45mm size, white background. No registration, no watermark. Instant download.',
        h1: 'Free India OCI Card Photo Maker',
        faq: [
          { q: 'What size is an OCI card photo?', a: 'OCI (Overseas Citizen of India) card photos must be 35×45mm with a plain white background.' },
          { q: 'Can I use the same photo for my passport and OCI card?', a: 'Yes. Both use the 35×45mm format with white background and the same ICAO requirements.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
      {
        id: 'india-pan-card',
        countryId: 'india',
        name: 'PAN Card',
        slug: 'india-pan-card-photo',
        widthMm: 25, heightMm: 35, widthPx: 295, heightPx: 413, dpi: 300,
        background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White',
        requirements: ['Size: 25×35 mm', 'Plain white background', 'Neutral expression, mouth closed', 'Both eyes open and clearly visible', 'No glasses', 'Taken within the last 6 months'],
        seoTitle: 'Free India PAN Card Photo | 25×35mm | No Watermark | Free',
        seoDescription: 'Create a compliant India PAN card photo online for free. Correct 25×35mm size, white background. No registration, no watermark. Instant download.',
        h1: 'Free India PAN Card Photo Maker',
        faq: [
          { q: 'What size is an India PAN card photo?', a: 'PAN card photos must be 25×35 mm (2.5×3.5 cm) with a plain white background. This is smaller than the standard passport photo.' },
          { q: 'Is this the same as the passport photo size?', a: 'No. The PAN card photo is 25×35mm, while the Indian passport photo is 35×45mm.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
      {
        id: 'india-pcc',
        countryId: 'india',
        name: 'PCC (Police Clearance Certificate)',
        slug: 'india-pcc-photo',
        widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300,
        background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White',
        requirements: [
          'Size for PSK application in India: 35×45 mm',
          'Size for US / UK / Canada visa applications via VFS: 51×51 mm (2×2 inch)',
          'Plain white background',
          'Neutral expression, mouth closed',
          'Both eyes open and clearly visible',
          'No glasses',
          'Face must cover 70-80% of frame',
          'Taken within the last 6 months',
        ],
        seoTitle: 'India PCC Photo Size: 35×45mm vs 2×2 inch (Free Photo Maker)',
        seoDescription: 'India PCC photo specifications explained: 35×45mm for PSK application, 2×2 inch (51×51mm) for VFS / foreign embassy submissions. Free online tool, no watermark, no registration.',
        h1: 'India PCC Photo: Which Size Do You Actually Need?',
        faq: [
          {
            q: 'What size is an Indian PCC photo - 35×45mm or 51×51mm (2×2 inch)?',
            a: 'It depends on where you are submitting the PCC. For applying at a Passport Seva Kendra (PSK) in India, the photo is 35×45mm with a plain white background, identical to the Indian passport photo. For PCC submitted as part of a US, UK, Canada, or Australia visa application via VFS Global, the photo is 51×51mm (2×2 inch), matching the destination country format. VFS Global officially lists 2×2 inch on its India PCC pages.',
          },
          {
            q: 'I am applying for a US visa from India - which PCC photo size?',
            a: 'For VFS Global India accepting your US visa application package, use 51×51mm (2×2 inch) photos. This matches the US Department of State photo standard. If your supporting PCC certificate from PSK uses a 35×45mm photo, that is fine - it is the certificate itself, not the visa application photo.',
          },
          {
            q: 'Why do different sources say different sizes?',
            a: 'Two different applications use the PCC and each has its own photo standard. Indian government PSK uses ICAO 35×45mm. Foreign embassies receiving the certificate via their visa application typically want 51×51mm because their entire application package follows their own country format. Both sizes are correct in different contexts.',
          },
          {
            q: 'Can I use my Indian passport photo for the PSK PCC application?',
            a: 'Yes. PSK uses the same 35×45mm photo specification for both passport applications and PCC applications.',
          },
          {
            q: 'Is my photo uploaded to your servers?',
            a: 'No. All processing happens locally in your browser. Your photo never leaves your device.',
          },
        ],
      },
      {
        id: 'india-driving-license',
        countryId: 'india',
        name: 'Driving License',
        slug: 'india-driving-license-photo',
        widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300,
        background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White',
        requirements: ['Size: 35×45 mm', 'Plain white background', 'Neutral expression, mouth closed', 'Both eyes open and clearly visible', 'No glasses', 'Face centered, looking straight at camera', 'File size typically 20-50 KB for online RTO upload'],
        seoTitle: 'Free India Driving License Photo Maker | 35×45mm | Sarathi Parivahan | Free',
        seoDescription: 'Create a compliant Indian driving license photo online for free. Correct 35×45mm size, white background, optimized file size for Sarathi Parivahan upload. No watermark.',
        h1: 'Free India Driving License Photo Maker',
        faq: [
          { q: 'What size photo is required for Indian driving license?', a: 'Indian driving license photos must be 35×45mm (3.5×4.5 cm) with a plain white background. This applies to learner license, permanent license, and international driving permit applications.' },
          { q: 'What file size does Sarathi Parivahan accept?', a: 'For online uploads through parivahan.gov.in or Sarathi Parivahan, photos should typically be between 20-50 KB. Some forms require strictly under 20 KB.' },
          { q: 'Is the same photo accepted across all RTOs in India?', a: 'Yes. The 35×45mm specification with white background is standard across all state RTOs in India for driving license applications.' },
          { q: 'Can I use my passport photo for driving license?', a: 'Yes. The Indian passport photo specification (35×45mm, white background) is identical to the driving license photo requirement.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens locally in your browser. Your photo never leaves your device.' },
        ],
      },
      {
        id: 'india-voter-id',
        countryId: 'india',
        name: 'Voter ID',
        slug: 'india-voter-id-photo',
        widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300,
        background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White',
        requirements: ['Size: 35×45 mm', 'Plain white background', 'Neutral expression, mouth closed', 'Both eyes open and clearly visible', 'No glasses', 'Face centered, looking straight at camera', 'File size optimized for NVSP upload'],
        seoTitle: 'Free India Voter ID Photo Maker | EPIC Form 6 | 35×45mm | Free',
        seoDescription: 'Create a compliant Voter ID (EPIC) photo for India online for free. Correct 35×45mm size, white background for NVSP / Form 6 application. No watermark, no registration.',
        h1: 'Free India Voter ID Photo Maker',
        faq: [
          { q: 'What photo size is required for Indian Voter ID?', a: 'For new voter registration via NVSP (National Voter Service Portal) using Form 6, photos must be 35×45mm with a plain white background.' },
          { q: 'Can I use the same photo as my passport for Voter ID?', a: 'Yes. Both use the standard 35×45mm portrait orientation with a plain white background.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens locally in your browser. Your photo never leaves your device.' },
        ],
      },
    ],
  },
  {
    id: 'schengen',
    name: 'Schengen / EU',
    flag: '🇪🇺',
    documents: [
      {
        id: 'schengen-visa',
        countryId: 'schengen',
        name: 'Schengen Visa',
        slug: 'schengen-visa-photo',
        widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300,
        background: 'Plain white or light grey', bgColor: '#ffffff', bgColorLabel: 'White',
        requirements: [
          'Size: 35×45 mm (3.5×4.5 cm)',
          'Plain white or very light grey background',
          'Neutral expression, mouth closed',
          'Eyes open and clearly visible, looking at camera',
          'No glasses (since 2015)',
          'Head straight and centered',
          'Face must cover 70-80% of the frame',
          'Taken within the last 6 months',
          'ICAO 9303 biometric compliant',
          'Ears visible (or at least both edges of the face)',
          'No shadows on face or background',
        ],
        seoTitle: 'Schengen Visa Photo: 35×45mm Specs (2026, EES-ready) | Free Maker',
        seoDescription: 'Schengen visa photo specifications for 2026: 35×45mm, ICAO biometric, accepted at all 27 Schengen consulates. EES launched 10 Apr 2026 - photo specs unchanged. Free, no signup, no watermark.',
        h1: 'Schengen Visa Photo (35×45mm) — 2026 Guide',
        faq: [
          {
            q: 'What size is a Schengen visa photo in 2026?',
            a: 'Schengen visa photos are 35 mm wide and 45 mm tall (3.5 × 4.5 cm), printed at 300 DPI. This ICAO 9303 biometric format is required by all 27 Schengen consulates and has not changed in 2026 despite the launch of the Entry/Exit System (EES).',
          },
          {
            q: 'Did the new EU Entry/Exit System (EES) change the visa photo requirements?',
            a: 'No. EES became operational on 10 April 2026 at Schengen external borders, but it captures biometric data (fingerprints and a face scan) directly at the border kiosk - not from your visa application photo. Your Schengen visa photo specifications remain 35×45mm ICAO. The EES is a separate biometric layer added at border crossings, not a replacement for the visa application process.',
          },
          {
            q: 'Will I need a new photo because of ETIAS?',
            a: 'ETIAS (European Travel Information and Authorization System) is launching in Q4 2026 for visa-waiver travelers (US, UK, Canada, Australia, etc.). The ETIAS application requires a digital photo that meets the same 35×45mm ICAO biometric specifications as a Schengen visa photo. If you already have a compliant Schengen-format photo, it will work for ETIAS.',
          },
          {
            q: 'Which countries accept the Schengen photo format?',
            a: 'All 29 Schengen Area countries: Austria, Belgium, Bulgaria, Croatia, Czechia, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Iceland, Italy, Latvia, Liechtenstein, Lithuania, Luxembourg, Malta, Netherlands, Norway, Poland, Portugal, Romania, Slovakia, Slovenia, Spain, Sweden, Switzerland. Cyprus and Ireland are not in the Schengen Area but generally accept the same 35×45mm format for their national visas.',
          },
          {
            q: 'What is the most common reason Schengen visa photos get rejected?',
            a: 'Three reasons account for most rejections at consulate or VFS Global appointments. First: the face occupies the wrong percentage of the frame (must be 70-80%, not 50-60%). Second: shadow on the background, caused by standing too close to the wall when the photo was taken. Third: the photo is older than 6 months and the consulate officer notices a visible change in appearance. Photos with glasses, head tilted, or a slight smile that lifts the cheeks are also rejected.',
          },
          {
            q: 'Can I use my Schengen visa photo for a national EU passport (German, French, Italian)?',
            a: 'Yes. The 35×45mm ICAO biometric format is the standard for all EU national passports and Schengen visas. The same photo works for German Reisepass, French passeport, Italian passaporto, and any other EU member state passport.',
          },
          {
            q: 'I am applying through VFS Global - do they have a different requirement?',
            a: 'VFS Global is the visa application service provider for many Schengen consulates outside Europe. The photo specification they enforce is identical to the consulate requirement: 35×45mm, ICAO biometric, plain background. VFS verification staff measure with a template at the appointment - if the photo is off-spec by more than a millimeter, they will ask you to retake it on-site (typically EUR 5-10 extra).',
          },
          {
            q: 'What background color is required - white or light grey?',
            a: 'Both are accepted. The original Schengen guideline allows "plain white or very light grey." In practice, pure white (#FFFFFF) is the safest choice and works at every consulate. Light grey is allowed but introduces interpretation differences between consulates.',
          },
          {
            q: 'Can children and infants use the same photo specifications?',
            a: 'The size is the same (35×45mm) but expression rules are relaxed for infants under 6. Eyes do not need to be open in infant photos. The child should be alone in the photo (no parents, hands, or supports visible). For children 6 and older, the standard adult rules apply.',
          },
          {
            q: 'Is my photo uploaded to your servers?',
            a: 'No. All image processing happens entirely in your browser. Your photo never leaves your device. You can verify this by opening browser DevTools and watching the Network tab during use.',
          },
        ],
      },
    ],
  },
  {
    id: 'uae',
    name: 'UAE',
    flag: '🇦🇪',
    documents: [
      {
        id: 'uae-passport',
        countryId: 'uae',
        name: 'Passport',
        slug: 'uae-passport-photo',
        widthMm: 40, heightMm: 60, widthPx: 472, heightPx: 709, dpi: 300,
        background: 'White', bgColor: '#ffffff', bgColorLabel: 'White',
        requirements: ['Size: 40×60 mm', 'Plain white background', 'Neutral expression, mouth closed', 'Both eyes open and clearly visible', 'No glasses', 'Head centered and straight', 'Taken within the last 6 months', 'No shadows on face or background'],
        seoTitle: 'Free UAE Passport Photo Maker | 40×60mm | No Watermark | Free',
        seoDescription: 'Create a compliant UAE passport photo online for free. Correct 40×60mm size. No registration, no watermark. Download JPG or print-ready PDF instantly.',
        h1: 'Free UAE Passport Photo Maker',
        faq: [
          { q: 'What size is a UAE passport photo?', a: 'UAE passport photos must be 40 mm wide and 60 mm tall with a plain white background.' },
          { q: 'Can I wear glasses in my UAE passport photo?', a: 'No. The UAE Federal Authority for Identity and Citizenship does not accept photos with glasses.' },
          { q: 'Can I use this photo for UAE visa applications?', a: 'Yes. The 40×60mm format is accepted for UAE residence visas, entry permits, and Emirates ID applications.' },
          { q: 'Can women wear hijab in a UAE passport photo?', a: 'Yes, a hijab is permitted as long as the face is fully visible from forehead to chin.' },
          { q: 'How recent must the photo be?', a: 'The photo must be taken within the last 6 months and reflect your current appearance.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing is done locally in your browser. Your photo never leaves your device.' },
        ],
      },
      {
        id: 'uae-visa',
        countryId: 'uae',
        name: 'Visa',
        slug: 'uae-visa-photo',
        widthMm: 40, heightMm: 60, widthPx: 472, heightPx: 709, dpi: 300,
        background: 'White', bgColor: '#ffffff', bgColorLabel: 'White',
        requirements: ['Size: 40×60 mm', 'Plain white background', 'Neutral expression, mouth closed', 'Both eyes open and clearly visible', 'No glasses', 'Taken within the last 6 months'],
        seoTitle: 'Free UAE Visa Photo Maker | 40×60mm | No Watermark | Free',
        seoDescription: 'Create a compliant UAE visa photo online for free. Correct 40×60mm size, white background. No registration, no watermark. Instant download.',
        h1: 'Free UAE Visa Photo Maker',
        faq: [
          { q: 'What size is a UAE visa photo?', a: 'UAE visa photos must be 40×60mm with a plain white background — same format as the UAE passport photo.' },
          { q: 'Can I use this for a UAE residence visa application?', a: 'Yes. UAE residence visa, work permit, and visit visa applications all require the 40×60mm format.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
      {
        id: 'uae-emirates-id',
        countryId: 'uae',
        name: 'Emirates ID',
        slug: 'uae-emirates-id-photo',
        widthMm: 35, heightMm: 40, widthPx: 413, heightPx: 472, dpi: 300,
        background: 'White', bgColor: '#ffffff', bgColorLabel: 'White',
        requirements: ['Size: 35×40 mm', 'Plain white background', 'Neutral expression, mouth closed', 'Both eyes open and clearly visible', 'No glasses', 'Taken within the last 6 months'],
        seoTitle: 'Free UAE Emirates ID Photo Maker | 35×40mm | No Watermark | Free',
        seoDescription: 'Create a compliant Emirates ID photo online for free. Correct 35×40mm size, white background. No registration, no watermark. Instant download.',
        h1: 'Free UAE Emirates ID Photo Maker',
        faq: [
          { q: 'What size is an Emirates ID photo?', a: 'Emirates ID photos (for the UAE ICA portal) must be 35×40 mm with a plain white background.' },
          { q: 'Is the Emirates ID photo size different from the passport photo?', a: 'Yes. The Emirates ID uses 35×40mm, while the UAE passport photo is 40×60mm.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. Everything is processed locally in your browser.' },
        ],
      },
      {
        id: 'uae-visa-offline',
        countryId: 'uae',
        name: 'Visa Offline 43×55mm',
        slug: 'uae-visa-offline-photo',
        widthMm: 43, heightMm: 55, widthPx: 508, heightPx: 650, dpi: 300,
        background: 'Light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey',
        requirements: ['Size: 43×55 mm', 'Plain light grey background', 'Neutral expression, mouth closed', 'Both eyes open and clearly visible', 'No glasses', 'Taken within the last 6 months'],
        seoTitle: 'Free UAE Visa Photo 43×55mm | Offline Application | No Watermark | Free',
        seoDescription: 'Create a compliant UAE visa photo (43×55mm) for offline embassy applications. Light grey background. No registration, no watermark. Instant download.',
        h1: 'Free UAE Visa Photo (Offline) 43×55mm',
        faq: [
          { q: 'When is the 43×55mm UAE visa photo used?', a: 'The 43×55mm format with light grey background is used for some UAE visa applications submitted directly to embassies or consulates (offline applications).' },
          { q: 'Is the 43×55mm format different from the standard UAE visa photo?', a: 'Yes. Online UAE visa applications via Emirates.com typically use a different size. The 43×55mm is for specific embassy submissions.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
    ],
  },
]

export const extraCountries: CountrySpec[] = [
  {
    id: 'germany',
    name: 'Germany',
    flag: '🇩🇪',
    documents: [
      {
        id: 'germany-passport',
        countryId: 'germany',
        name: 'Passport',
        slug: 'germany-passport-photo',
        widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300,
        background: 'Plain light grey or white', bgColor: '#e0e0e0', bgColorLabel: 'Light grey',
        requirements: ['Size: 35×45 mm (biometric)', 'Plain light grey or white background', 'Neutral expression, mouth closed', 'Eyes open, looking directly at camera', 'No glasses (since 2017)', 'Head centered and straight', 'Face must cover 70–80% of the frame', 'Taken within the last 6 months', 'ICAO biometric compliant'],
        seoTitle: 'Free Germany Passport Photo Maker | 35×45mm Biometrisch | No Watermark | Free',
        seoDescription: 'Create a compliant German biometric passport photo (Passfoto) online for free. Correct 35×45mm size. No registration, no watermark. Download JPG or PDF instantly.',
        h1: 'Free Germany Passport Photo Maker',
        faq: [
          { q: 'What size is a German passport photo?', a: 'German passport photos (Biometrisches Passfoto) must be 35 mm wide and 45 mm tall, conforming to the ICAO biometric standard.' },
          { q: 'What background is required for a German passport photo?', a: 'The background must be plain light grey or white, without patterns or shadows.' },
          { q: 'Can I wear glasses in a German passport photo?', a: 'No. Since 2017, glasses are not permitted in German biometric passport photos.' },
          { q: 'Is this format also valid for a German ID card (Personalausweis)?', a: 'Yes. The 35×45mm biometric format is used for both the German passport (Reisepass) and the national ID card (Personalausweis).' },
          { q: 'How recent must the photo be?', a: 'The photo must have been taken within the last 6 months.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens entirely in your browser. Your photo never leaves your device.' },
        ],
      },
      {
        id: 'germany-id-card',
        countryId: 'germany',
        name: 'ID Card',
        slug: 'germany-id-card-photo',
        widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300,
        background: 'Plain light grey or white', bgColor: '#e0e0e0', bgColorLabel: 'Light grey',
        requirements: ['Size: 35×45 mm (biometric)', 'Plain light grey or white background', 'Neutral expression, mouth closed', 'Eyes open, looking directly at camera', 'No glasses', 'Taken within the last 6 months'],
        seoTitle: 'Free German ID Card Photo (Personalausweis) | 35×45mm | No Watermark | Free',
        seoDescription: 'Create a compliant German ID card (Personalausweis) biometric photo free. Correct 35×45mm size. No registration, no watermark. Instant download.',
        h1: 'Free German ID Card Photo (Personalausweis)',
        faq: [
          { q: 'What size is a German ID card (Personalausweis) photo?', a: 'German Personalausweis photos must be 35×45mm — the same biometric format as the German passport (Reisepass).' },
          { q: 'Is the background requirement the same as for the passport?', a: 'Yes. Both the passport and ID card require a plain light grey or white background.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
      {
        id: 'germany-visa',
        countryId: 'germany',
        name: 'Visa',
        slug: 'germany-visa-photo',
        widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300,
        background: 'Plain light grey or white', bgColor: '#e0e0e0', bgColorLabel: 'Light grey',
        requirements: ['Size: 35×45 mm (biometric)', 'Plain light grey or white background', 'Neutral expression', 'Eyes open, looking directly at camera', 'No glasses', 'Taken within the last 6 months'],
        seoTitle: 'Free Germany Visa Photo | 35×45mm | No Watermark | Free',
        seoDescription: 'Create a compliant German visa photo online for free. Correct 35×45mm biometric size, light grey background. No registration, no watermark. Instant download.',
        h1: 'Free Germany Visa Photo Maker',
        faq: shortFaq('Germany Visa', 35, 45, 'plain light grey or white'),
      },
      {
        id: 'germany-drivers-licence',
        countryId: 'germany',
        name: "Driver's Licence",
        slug: 'germany-drivers-licence-photo',
        widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300,
        background: 'Plain light grey or white', bgColor: '#e0e0e0', bgColorLabel: 'Light grey',
        requirements: ['Size: 35×45 mm (biometric)', 'Plain light grey or white background', 'Neutral expression', 'Eyes open', 'No glasses', 'Taken within the last 6 months'],
        seoTitle: "Free German Driver's Licence Photo | 35×45mm | No Watermark | Free",
        seoDescription: "Create a compliant German driver's licence (Führerschein) photo online for free. Correct 35×45mm size. No registration, no watermark. Instant download.",
        h1: "Free German Driver's Licence Photo Maker",
        faq: shortFaq("German Driver's Licence", 35, 45, 'plain light grey or white'),
      },
      {
        id: 'germany-residence-permit',
        countryId: 'germany',
        name: 'Residence Permit',
        slug: 'germany-residence-permit-photo',
        widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300,
        background: 'Plain light grey or white', bgColor: '#e0e0e0', bgColorLabel: 'Light grey',
        requirements: ['Size: 35×45 mm (biometric)', 'Plain light grey or white background', 'Neutral expression', 'Eyes open', 'No glasses', 'Taken within the last 6 months'],
        seoTitle: 'Free Germany Residence Permit Photo | 35×45mm | No Watermark | Free',
        seoDescription: 'Create a compliant German residence permit (Aufenthaltstitel) photo online for free. Correct 35×45mm size. No registration, no watermark. Instant download.',
        h1: 'Free Germany Residence Permit Photo Maker',
        faq: [
          { q: 'What size is a German residence permit photo?', a: 'German residence permit (Aufenthaltstitel) photos must be 35×45mm with a plain light grey or white background — the same as the German passport photo.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
    ],
  },
  {
    id: 'japan',
    name: 'Japan',
    flag: '🇯🇵',
    documents: [
      {
        id: 'japan-visa',
        countryId: 'japan',
        name: 'Visa',
        slug: 'japan-visa-photo',
        widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300,
        background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White',
        requirements: ['Size: 35×45 mm', 'Plain white background', 'Neutral expression, mouth closed', 'Both eyes open and visible', 'No glasses', 'Head centered, no tilt', 'Face height 32–36 mm from chin to crown', 'Taken within the last 6 months', 'No shadows on face or background'],
        seoTitle: 'Free Japan Visa Photo Maker | 35×45mm | No Watermark | Free',
        seoDescription: 'Create a compliant Japan visa or passport photo online for free. Correct 35×45mm size, white background. No registration, no watermark. Instant download.',
        h1: 'Free Japan Visa & Passport Photo Maker',
        faq: [
          { q: 'What size is a Japan visa photo?', a: 'Japan visa and passport photos must be 35 mm wide and 45 mm tall, with the face taking up 32–36 mm of the height.' },
          { q: 'What background is required?', a: 'The background must be plain white without any patterns, shadows, or objects.' },
          { q: 'Can I wear glasses?', a: 'No. The Japanese Ministry of Foreign Affairs does not accept photos with glasses for visa and passport applications.' },
          { q: 'Can I use this photo for a Japan tourist visa?', a: 'Yes. This format is accepted for all Japan visa categories including tourist, work, and student visas.' },
          { q: 'How recent must the photo be?', a: 'The photo must be taken within the last 6 months.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
      {
        id: 'japan-passport',
        countryId: 'japan',
        name: 'Passport',
        slug: 'japan-passport-photo',
        widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300,
        background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White',
        requirements: ['Size: 35×45 mm', 'Plain white background', 'Neutral expression, mouth closed', 'Both eyes open and visible', 'No glasses', 'Taken within the last 6 months'],
        seoTitle: 'Free Japan Passport Photo Maker | 35×45mm | No Watermark | Free',
        seoDescription: 'Create a compliant Japanese passport photo online for free. Correct 35×45mm size, white background. No registration, no watermark. Instant download.',
        h1: 'Free Japan Passport Photo Maker',
        faq: [
          { q: 'What size is a Japanese passport photo?', a: 'Japanese passport photos must be 35×45mm with a plain white background and the face occupying 32–36mm of the height.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
      {
        id: 'japan-residence-card',
        countryId: 'japan',
        name: 'Residence Card',
        slug: 'japan-residence-card-photo',
        widthMm: 30, heightMm: 40, widthPx: 354, heightPx: 472, dpi: 300,
        background: 'Plain light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey',
        requirements: ['Size: 30×40 mm (3×4 cm)', 'Plain light grey background', 'Neutral expression', 'Both eyes open and visible', 'No glasses', 'Taken within the last 6 months'],
        seoTitle: 'Free Japan Residence Card Photo | 30×40mm | No Watermark | Free',
        seoDescription: 'Create a compliant Japan residence card (在留カード) photo online for free. Correct 30×40mm size. No registration, no watermark. Instant download.',
        h1: 'Free Japan Residence Card Photo Maker',
        faq: [
          { q: 'What size is a Japan residence card (在留カード) photo?', a: 'Japan residence card and certificate of eligibility photos must be 30×40 mm (3×4 cm) with a plain light grey background.' },
          { q: 'Is this the same size as the Japan visa photo?', a: 'No. The Japan visa photo is 35×45mm, while the residence card uses 30×40mm.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
      {
        id: 'japan-my-number-card',
        countryId: 'japan',
        name: 'My Number Card',
        slug: 'japan-my-number-card-photo',
        widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300,
        background: 'Plain light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey',
        requirements: ['Size: 35×45 mm', 'Plain light grey background', 'Neutral expression', 'Both eyes open and visible', 'No glasses', 'Taken within the last 6 months'],
        seoTitle: 'Free Japan My Number Card Photo | 35×45mm | No Watermark | Free',
        seoDescription: 'Create a compliant Japan My Number Card (マイナンバーカード) photo online for free. Correct 35×45mm size. No registration, no watermark. Instant download.',
        h1: 'Free Japan My Number Card Photo Maker',
        faq: shortFaq('Japan My Number Card (マイナンバーカード)', 35, 45, 'plain light grey'),
      },
      {
        id: 'japan-evisa',
        countryId: 'japan',
        name: 'e-Visa',
        slug: 'japan-evisa-photo',
        widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300,
        background: 'Plain light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey',
        requirements: ['Size: 35×45 mm', 'Plain light grey or white background', 'Neutral expression', 'Both eyes open and visible', 'No glasses', 'Taken within the last 6 months'],
        seoTitle: 'Free Japan e-Visa Photo | 35×45mm | No Watermark | Free',
        seoDescription: 'Create a compliant Japan e-Visa photo online for free. Correct 35×45mm size for online visa application. No registration, no watermark. Instant download.',
        h1: 'Free Japan e-Visa Photo Maker',
        faq: shortFaq('Japan e-Visa', 35, 45, 'plain light grey or white'),
      },
    ],
  },
  {
    id: 'brazil',
    name: 'Brazil',
    flag: '🇧🇷',
    documents: [
      {
        id: 'brazil-passport',
        countryId: 'brazil',
        name: 'Passport',
        slug: 'brazil-passport-photo',
        widthMm: 50, heightMm: 70, widthPx: 591, heightPx: 827, dpi: 300,
        background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White',
        requirements: ['Size: 50×70 mm', 'Plain white background', 'Neutral expression, mouth closed', 'Both eyes open and visible', 'No glasses', 'Head centered and straight', 'Face must occupy 70–80% of the frame', 'Taken within the last 6 months'],
        seoTitle: 'Free Brazil Passport Photo Maker | 50×70mm | No Watermark | Free',
        seoDescription: 'Create a compliant Brazilian passport photo online for free. Correct 50×70mm size. No registration, no watermark. Download JPG or print-ready PDF instantly.',
        h1: 'Free Brazil Passport Photo Maker',
        faq: [
          { q: 'What size is a Brazilian passport photo?', a: 'Brazilian passport photos must be 50 mm wide and 70 mm tall with a plain white background.' },
          { q: 'Can I wear glasses?', a: 'No. The Brazilian Federal Police does not accept passport photos with glasses.' },
          { q: 'Can I use this for a Brazilian visa application?', a: 'Yes. The 50×70mm format is accepted for Brazilian passports and visas.' },
          { q: 'What background is required?', a: 'The background must be plain white, without patterns or shadows.' },
          { q: 'How recent must the photo be?', a: 'The photo must have been taken within the last 6 months.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. Everything is processed locally in your browser.' },
        ],
      },
      {
        id: 'brazil-visa',
        countryId: 'brazil',
        name: 'Visa',
        slug: 'brazil-visa-photo',
        widthMm: 50, heightMm: 70, widthPx: 591, heightPx: 827, dpi: 300,
        background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White',
        requirements: ['Size: 50×70 mm', 'Plain white background', 'Neutral expression, mouth closed', 'Both eyes open and visible', 'No glasses', 'Taken within the last 6 months'],
        seoTitle: 'Free Brazil Visa Photo Maker | 50×70mm | No Watermark | Free',
        seoDescription: 'Create a compliant Brazilian visa photo online for free. Correct 50×70mm size, white background. No registration, no watermark. Instant download.',
        h1: 'Free Brazil Visa Photo Maker',
        faq: [
          { q: 'What size is a Brazilian visa photo?', a: 'Brazilian visa photos are 50×70mm with a plain white background — the same format as the Brazilian passport photo.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. Everything is processed locally in your browser.' },
        ],
      },
      {
        id: 'brazil-id-card',
        countryId: 'brazil',
        name: 'ID Card (RG)',
        slug: 'brazil-id-card-photo',
        widthMm: 30, heightMm: 40, widthPx: 354, heightPx: 472, dpi: 300,
        background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White',
        requirements: ['Size: 30×40 mm (3×4 cm)', 'Plain white background', 'Neutral expression, mouth closed', 'Both eyes open and visible', 'No glasses', 'Taken within the last 6 months'],
        seoTitle: 'Free Brazil ID Card (RG) Photo | 3×4cm | No Watermark | Free',
        seoDescription: 'Create a compliant Brazilian ID card (Registro Geral/RG) photo online for free. Correct 3×4cm (30×40mm) size. No registration, no watermark. Instant download.',
        h1: 'Free Brazil ID Card (RG) Photo Maker',
        faq: [
          { q: 'What size is a Brazilian ID card (RG) photo?', a: 'Brazilian RG (Registro Geral) ID card photos must be 3×4 cm (30×40mm) with a plain white background.' },
          { q: 'Is the RG photo size different from the passport photo?', a: 'Yes. The Brazilian passport photo is 50×70mm, while the RG card uses the 3×4 cm (30×40mm) format.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
    ],
  },
  {
    id: 'mexico',
    name: 'Mexico',
    flag: '🇲🇽',
    documents: [
      {
        id: 'mexico-passport',
        countryId: 'mexico',
        name: 'Passport',
        slug: 'mexico-passport-photo',
        widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300,
        background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White',
        requirements: ['Size: 35×45 mm', 'Plain white background', 'Neutral expression, mouth closed', 'Both eyes open and clearly visible', 'No glasses', 'Head straight and centered', 'Face must cover 70–80% of the frame', 'Taken within the last 6 months'],
        seoTitle: 'Free Mexico Passport Photo Maker | 35×45mm | No Watermark | Free',
        seoDescription: 'Create a compliant Mexican passport photo online for free. Correct 35×45mm size. No registration, no watermark. Download JPG or print-ready PDF instantly.',
        h1: 'Free Mexico Passport Photo Maker',
        faq: [
          { q: 'What size is a Mexican passport photo?', a: 'Mexican passport photos must be 35 mm wide and 45 mm tall with a plain white background.' },
          { q: 'Can I wear glasses?', a: 'No. The Secretaría de Relaciones Exteriores does not accept passport photos with glasses.' },
          { q: 'Can I use this for Mexican visa applications?', a: 'Yes. The 35×45mm format is accepted for Mexican passports and most visa applications.' },
          { q: 'How recent must the photo be?', a: 'The photo must have been taken within the last 6 months.' },
          { q: 'What background is required?', a: 'Plain white, without any patterns, shadows, or objects in the background.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
      {
        id: 'mexico-visa',
        countryId: 'mexico',
        name: 'Visa',
        slug: 'mexico-visa-photo',
        widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300,
        background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White',
        requirements: ['Size: 35×45 mm', 'Plain white background', 'Neutral expression', 'Both eyes open and clearly visible', 'No glasses', 'Taken within the last 6 months'],
        seoTitle: 'Free Mexico Visa Photo | 35×45mm | No Watermark | Free',
        seoDescription: 'Create a compliant Mexican visa photo online for free. Correct 35×45mm size, white background. No registration, no watermark. Instant download.',
        h1: 'Free Mexico Visa Photo Maker',
        faq: shortFaq('Mexico Visa', 35, 45, 'plain white'),
      },
      {
        id: 'mexico-drivers-licence',
        countryId: 'mexico',
        name: "Driver's Licence",
        slug: 'mexico-drivers-licence-photo',
        widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300,
        background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White',
        requirements: ['Size: 35×45 mm', 'Plain white background', 'Neutral expression', 'Both eyes open and clearly visible', 'No glasses', 'Taken within the last 6 months'],
        seoTitle: "Free Mexico Driver's Licence Photo | 35×45mm | No Watermark | Free",
        seoDescription: "Create a compliant Mexican driver's licence photo online for free. Correct 35×45mm size, white background. No registration, no watermark. Instant download.",
        h1: "Free Mexico Driver's Licence Photo Maker",
        faq: shortFaq("Mexico Driver's Licence", 35, 45, 'plain white'),
      },
    ],
  },
  {
    id: 'china',
    name: 'China',
    flag: '🇨🇳',
    documents: [
      {
        id: 'china-visa',
        countryId: 'china',
        name: 'Visa',
        slug: 'china-visa-photo',
        widthMm: 33, heightMm: 48, widthPx: 390, heightPx: 567, dpi: 300,
        background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White',
        requirements: ['Size: 33×48 mm (unique format)', 'Plain white background', 'Neutral expression, mouth closed', 'Both eyes open and clearly visible', 'No glasses', 'Head straight, no tilt', 'Face must cover 60–80% of the frame', 'Taken within the last 6 months', 'No shadows on face or background'],
        seoTitle: 'Free China Visa Photo Maker | 33×48mm | No Watermark | Free',
        seoDescription: 'Create a compliant China visa photo online for free. Correct 33×48mm size — unique Chinese format. No registration, no watermark. Instant download.',
        h1: 'Free China Visa Photo Maker',
        faq: [
          { q: 'What size is a China visa photo?', a: 'China visa photos have a unique format: 33 mm wide and 48 mm tall. This differs from the standard 35×45mm used by most countries.' },
          { q: 'What background is required for a China visa photo?', a: 'The background must be plain white, without patterns, shadows, or other people.' },
          { q: 'Can I wear glasses?', a: 'No. The Chinese embassy does not accept visa photos with glasses.' },
          { q: 'Is this format valid for a Chinese passport?', a: 'Chinese passport photos also use the 33×48mm format. Always verify with the consulate before submission.' },
          { q: 'How recent must the photo be?', a: 'The photo must have been taken within the last 6 months.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
      {
        id: 'china-passport',
        countryId: 'china',
        name: 'Passport',
        slug: 'china-passport-photo',
        widthMm: 33, heightMm: 48, widthPx: 390, heightPx: 567, dpi: 300,
        background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White',
        requirements: ['Size: 33×48 mm', 'Plain white background', 'Neutral expression, mouth closed', 'Both eyes open and clearly visible', 'No glasses', 'Taken within the last 6 months'],
        seoTitle: 'Free China Passport Photo Maker | 33×48mm | No Watermark | Free',
        seoDescription: 'Create a compliant Chinese passport photo online for free. Correct 33×48mm size, white background. No registration, no watermark. Instant download.',
        h1: 'Free China Passport Photo Maker',
        faq: [
          { q: 'What size is a Chinese passport photo?', a: 'Chinese passport photos must be 33×48mm with a plain white background — the same unique format used for Chinese visas.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
      {
        id: 'china-green-card',
        countryId: 'china',
        name: 'Green Card',
        slug: 'china-green-card-photo',
        widthMm: 33, heightMm: 48, widthPx: 390, heightPx: 567, dpi: 300,
        background: 'Plain light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey',
        requirements: ['Size: 33×48 mm', 'Plain light grey background', 'Neutral expression, mouth closed', 'Both eyes open and clearly visible', 'No glasses', 'Taken within the last 6 months'],
        seoTitle: 'Free China Green Card (Permanent Residence) Photo | 33×48mm | No Watermark | Free',
        seoDescription: 'Create a compliant China green card (permanent residence permit) photo online for free. Correct 33×48mm size, light grey background. No registration, no watermark.',
        h1: 'Free China Green Card Photo Maker',
        faq: [
          { q: 'What size is a China green card (permanent residence) photo?', a: 'China permanent residence permit (green card) photos must be 33×48mm with a plain light grey background.' },
          { q: 'Is the background different from the visa photo?', a: 'Yes. The China green card photo uses a light grey background, while the visa photo uses white.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
    ],
  },
]

export const newCountries: CountrySpec[] = [
  {
    id: 'indonesia',
    name: 'Indonesia',
    flag: '🇮🇩',
    documents: [
      {
        id: 'indonesia-passport',
        countryId: 'indonesia',
        name: 'Passport 4×6cm',
        slug: 'indonesia-passport-photo',
        widthMm: 40, heightMm: 60, widthPx: 472, heightPx: 709, dpi: 300,
        background: 'Red', bgColor: '#cc0000', bgColorLabel: 'Red',
        requirements: ['Size: 40×60 mm (4×6 cm)', 'Plain RED background — mandatory for Indonesian passport', 'Neutral expression, mouth closed', 'Both eyes open and clearly visible', 'No glasses', 'Head centered and straight', 'Face must cover 70–80% of frame', 'No shadows on face or background', 'Taken within the last 6 months'],
        seoTitle: 'Free Indonesia Passport Photo | 4×6cm Red Background | No Watermark | Free',
        seoDescription: 'Create a compliant Indonesian passport photo online for free. Correct 4×6cm (40×60mm) size with mandatory red background. No registration, no watermark. Instant download.',
        h1: 'Free Indonesia Passport Photo Maker',
        faq: [
          { q: 'What background color is required for Indonesian passport photos?', a: 'Indonesian passport photos require a plain RED background — this is unique and mandatory. It differs from most countries that use white or grey.' },
          { q: 'What size is an Indonesian passport photo?', a: 'Indonesian passport photos must be 4×6 cm (40×60mm).' },
          { q: 'Does the tool automatically apply the red background?', a: 'Yes. Use the "Fill Red Background" button to automatically replace the background with the correct red color.' },
          { q: 'Can I wear glasses?', a: 'No. Indonesian passport regulations do not accept photos with glasses.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
      {
        id: 'indonesia-visa-3x4',
        countryId: 'indonesia',
        name: 'Visa 3×4cm',
        slug: 'indonesia-visa-photo-3x4',
        widthMm: 30, heightMm: 40, widthPx: 354, heightPx: 472, dpi: 300,
        background: 'Red', bgColor: '#cc0000', bgColorLabel: 'Red',
        requirements: ['Size: 30×40 mm (3×4 cm)', 'Plain RED background', 'Neutral expression, mouth closed', 'Both eyes open and clearly visible', 'No glasses', 'Head centered and straight', 'Taken within the last 6 months'],
        seoTitle: 'Free Indonesia Visa Photo 3×4cm | Red Background | No Watermark | Free',
        seoDescription: 'Create a compliant Indonesian visa photo (3×4 cm / 30×40mm) online for free. Red background applied automatically. No registration, no watermark. Instant download.',
        h1: 'Free Indonesia Visa Photo 3×4 cm',
        faq: [
          { q: 'What is the 3×4 cm photo format used for in Indonesia?', a: 'The 3×4 cm (30×40mm) format with red background is used for Indonesian visa applications, KTP (national ID), SIM (driver\'s license), and other official documents.' },
          { q: 'What background color is required?', a: 'Red background — the same as the Indonesian passport photo. The tool applies it automatically.' },
          { q: 'What size is the 3×4 cm photo exactly?', a: 'The photo is 30mm wide and 40mm tall. At 300 DPI this equals 354×472 pixels.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
      {
        id: 'indonesia-visa-4x6',
        countryId: 'indonesia',
        name: 'Visa 4×6cm Red',
        slug: 'indonesia-visa-photo-4x6',
        widthMm: 40, heightMm: 60, widthPx: 472, heightPx: 709, dpi: 300,
        background: 'Red', bgColor: '#cc0000', bgColorLabel: 'Red',
        requirements: ['Size: 40×60 mm (4×6 cm)', 'Plain RED background', 'Neutral expression, mouth closed', 'Both eyes open and clearly visible', 'No glasses', 'Head centered and straight', 'Taken within the last 6 months'],
        seoTitle: 'Free Indonesia Visa Photo 4×6cm Red Background | No Watermark | Free',
        seoDescription: 'Create a compliant Indonesian visa photo (4×6 cm / 40×60mm) with red background online for free. No registration, no watermark. Instant download.',
        h1: 'Free Indonesia Visa Photo 4×6 cm (Red)',
        faq: [
          { q: 'What is the 4×6 cm red background photo used for in Indonesia?', a: 'The 4×6 cm (40×60mm) format with red background is used for Indonesian on-arrival visa, e-Visa, and various official applications.' },
          { q: 'What is the difference between the 3×4 and 4×6 formats?', a: 'The 3×4 cm (30×40mm) is used for ID cards and some visas; the 4×6 cm (40×60mm) is used for passports and other visa categories. Both require a red background.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
      {
        id: 'indonesia-visa-35x45',
        countryId: 'indonesia',
        name: 'Visa 35×45mm',
        slug: 'indonesia-visa-photo-35x45',
        widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300,
        background: 'Plain light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey',
        requirements: ['Size: 35×45 mm (3.5×4.5 cm)', 'Plain light grey background', 'Neutral expression, mouth closed', 'Both eyes open and clearly visible', 'No glasses', 'Taken within the last 6 months'],
        seoTitle: 'Free Indonesia Visa Photo 35×45mm | No Watermark | Free',
        seoDescription: 'Create a compliant Indonesian visa photo 35×45mm (3.5×4.5 cm) for online applications. Light grey background. No registration, no watermark. Instant download.',
        h1: 'Free Indonesia Visa Photo 35×45mm',
        faq: [
          { q: 'When is the 35×45mm format used for Indonesian visa?', a: 'The 35×45mm (3.5×4.5 cm) format is accepted for some Indonesian online visa applications and embassy submissions that follow international biometric standards.' },
          { q: 'Why does this format use a grey background instead of red?', a: 'The 35×45mm format follows the international ICAO biometric standard with a light grey background. The red background is specific to physical Indonesian passport and ID documents.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
      {
        id: 'indonesia-evoa',
        countryId: 'indonesia',
        name: 'EVoA',
        slug: 'indonesia-evoa-photo',
        widthMm: 40, heightMm: 60, widthPx: 472, heightPx: 709, dpi: 300,
        background: 'Red', bgColor: '#cc0000', bgColorLabel: 'Red',
        requirements: ['Size: 40×60 mm equivalent (400×600 px upload)', 'Plain RED background', 'Neutral expression, mouth closed', 'Both eyes open and clearly visible', 'No glasses', 'Taken within the last 6 months'],
        seoTitle: 'Free Indonesia EVoA Photo | Electronic Visa on Arrival | No Watermark | Free',
        seoDescription: 'Create a compliant Indonesia Electronic Visa on Arrival (EVoA) photo online for free. Red background, correct dimensions. No registration, no watermark.',
        h1: 'Free Indonesia EVoA Photo Maker',
        faq: [
          { q: 'What is the Indonesia EVoA (Electronic Visa on Arrival)?', a: 'The EVoA is Indonesia\'s Electronic Visa on Arrival system. It requires a photo with a red background uploaded during the online application.' },
          { q: 'What size photo does the Indonesia EVoA require?', a: 'The EVoA system requires a photo equivalent to 40×60mm (4×6cm) with a plain red background.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
      {
        id: 'indonesia-evisa',
        countryId: 'indonesia',
        name: 'E-Visa',
        slug: 'indonesia-evisa-photo',
        widthMm: 40, heightMm: 60, widthPx: 472, heightPx: 709, dpi: 300,
        background: 'Red', bgColor: '#cc0000', bgColorLabel: 'Red',
        requirements: ['Size: 40×60 mm equivalent', 'Plain RED background', 'Neutral expression, mouth closed', 'Both eyes open and clearly visible', 'No glasses', 'Taken within the last 6 months'],
        seoTitle: 'Free Indonesia E-Visa Photo | Online Registration | No Watermark | Free',
        seoDescription: 'Create a compliant Indonesia e-Visa registration photo online for free. Red background, correct dimensions. No registration, no watermark. Instant download.',
        h1: 'Free Indonesia E-Visa Photo Maker',
        faq: [
          { q: 'What photo is needed for Indonesia e-Visa registration?', a: 'Indonesia e-Visa registration requires a photo with a plain red background. The typical size is equivalent to 40×60mm (4×6 cm).' },
          { q: 'Is this the same as the EVoA photo?', a: 'The requirements are similar — both use a red background and 40×60mm equivalent size. The EVoA is specifically for on-arrival applications, while e-Visa is applied for in advance.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
    ],
  },
  {
    id: 'finland',
    name: 'Finland',
    flag: '🇫🇮',
    documents: [
      {
        id: 'finland-passport',
        countryId: 'finland',
        name: 'Passport',
        slug: 'finland-passport-photo',
        widthMm: 36, heightMm: 47, widthPx: 425, heightPx: 555, dpi: 300,
        background: 'Plain grey', bgColor: '#d0d0d0', bgColorLabel: 'Light grey',
        requirements: ['Size: 36×47 mm (unique Finnish format)', 'Plain grey background — lighter for dark hair, medium for light hair', 'Neutral expression, mouth closed', 'Both eyes open and clearly visible', 'No glasses', 'Head centered and straight', 'Face must cover 70–80% of frame', 'Taken within the last 6 months', 'ICAO biometric compliant'],
        seoTitle: 'Free Finland Passport Photo Maker | 36×47mm Grey Background | No Watermark | Free',
        seoDescription: 'Create a compliant Finnish passport photo online for free. Unique 36×47mm size with grey background. No registration, no watermark. Instant download.',
        h1: 'Free Finland Passport Photo Maker',
        faq: [
          { q: 'What size is a Finnish passport photo?', a: 'Finnish passport and visa photos have a unique size: 36 mm wide and 47 mm tall. This differs from the standard 35×45mm used by most EU countries.' },
          { q: 'What background color is required for Finnish passport photos?', a: 'Finland requires a plain grey background. The shade can vary — lighter grey for dark hair, medium grey for light hair — to ensure good contrast with your face.' },
          { q: 'Is the Finnish format the same as the Schengen standard?', a: 'No. Finland uses a 36×47mm format with a grey background, while the general Schengen standard is 35×45mm with white background. Always use the Finnish-specific format for Finnish documents.' },
          { q: 'Can I use this photo for a Finnish visa?', a: 'Yes. The 36×47mm grey background format is accepted for Finnish passports, ID cards, and visa applications.' },
          { q: 'Can I wear glasses?', a: 'No. Finnish passport regulations follow the ICAO biometric standard which does not permit glasses.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
      {
        id: 'finland-visa',
        countryId: 'finland',
        name: 'Visa',
        slug: 'finland-visa-photo',
        widthMm: 36, heightMm: 47, widthPx: 425, heightPx: 555, dpi: 300,
        background: 'Plain grey', bgColor: '#d0d0d0', bgColorLabel: 'Light grey',
        requirements: ['Size: 36×47 mm', 'Plain grey background', 'Neutral expression', 'Both eyes open and clearly visible', 'No glasses', 'Taken within the last 6 months'],
        seoTitle: 'Free Finland Visa Photo | 36×47mm Grey Background | No Watermark | Free',
        seoDescription: 'Create a compliant Finnish visa photo online for free. Correct 36×47mm size, grey background. No registration, no watermark. Instant download.',
        h1: 'Free Finland Visa Photo Maker',
        faq: shortFaq('Finland Visa', 36, 47, 'plain grey'),
      },
      {
        id: 'finland-id-card',
        countryId: 'finland',
        name: 'ID Card',
        slug: 'finland-id-card-photo',
        widthMm: 36, heightMm: 47, widthPx: 425, heightPx: 555, dpi: 300,
        background: 'Plain grey', bgColor: '#d0d0d0', bgColorLabel: 'Light grey',
        requirements: ['Size: 36×47 mm', 'Plain grey background', 'Neutral expression', 'Both eyes open and clearly visible', 'No glasses', 'Taken within the last 6 months'],
        seoTitle: 'Free Finland ID Card Photo | 36×47mm Grey Background | No Watermark | Free',
        seoDescription: 'Create a compliant Finnish ID card photo online for free. Correct 36×47mm size, grey background. No registration, no watermark. Instant download.',
        h1: 'Free Finland ID Card Photo Maker',
        faq: shortFaq('Finland ID Card', 36, 47, 'plain grey'),
      },
      {
        id: 'finland-residence',
        countryId: 'finland',
        name: 'Residence Permit',
        slug: 'finland-residence-photo',
        widthMm: 36, heightMm: 47, widthPx: 425, heightPx: 555, dpi: 300,
        background: 'Plain grey', bgColor: '#d0d0d0', bgColorLabel: 'Light grey',
        requirements: ['Size: 36×47 mm', 'Plain grey background', 'Neutral expression', 'Both eyes open and clearly visible', 'No glasses', 'Taken within the last 6 months'],
        seoTitle: 'Free Finland Residence Permit Photo | 36×47mm | No Watermark | Free',
        seoDescription: 'Create a compliant Finnish residence permit photo online for free. Correct 36×47mm size, grey background. No registration, no watermark. Instant download.',
        h1: 'Free Finland Residence Permit Photo Maker',
        faq: shortFaq('Finland Residence Permit', 36, 47, 'plain grey'),
      },
      {
        id: 'finland-drivers-licence',
        countryId: 'finland',
        name: "Driver's Licence",
        slug: 'finland-drivers-licence-photo',
        widthMm: 36, heightMm: 47, widthPx: 425, heightPx: 555, dpi: 300,
        background: 'Plain grey', bgColor: '#d0d0d0', bgColorLabel: 'Light grey',
        requirements: ['Size: 36×47 mm', 'Plain grey background', 'Neutral expression', 'Both eyes open and clearly visible', 'No glasses', 'Taken within the last 6 months'],
        seoTitle: "Free Finland Driver's Licence Photo | 36×47mm | No Watermark | Free",
        seoDescription: "Create a compliant Finnish driver's licence photo online for free. Correct 36×47mm size, grey background. No registration, no watermark. Instant download.",
        h1: "Free Finland Driver's Licence Photo Maker",
        faq: shortFaq("Finland Driver's Licence", 36, 47, 'plain grey'),
      },
    ],
  },
]

const reqW = (s: string) => [`Size: ${s}`, 'Plain white background', 'Neutral expression, mouth closed', 'Both eyes open and clearly visible', 'No glasses', 'Taken within the last 6 months']
const reqG = (s: string) => [`Size: ${s}`, 'Plain light grey background', 'Neutral expression, mouth closed', 'Both eyes open and clearly visible', 'No glasses', 'Taken within the last 6 months']

const euroCountries: CountrySpec[] = [
  {
    id: 'france', name: 'France', flag: '🇫🇷',
    documents: [
      {
        id: 'france-passport', countryId: 'france', name: 'Passport', slug: 'france-passport-photo',
        widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300,
        background: 'Plain light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey',
        requirements: reqG('35×45 mm'),
        seoTitle: 'Free France Passport Photo Maker | 35×45mm | No Watermark | Free',
        seoDescription: "Create a compliant French passport photo (photo d'identité) online for free. Correct 35×45mm size, light grey background. No registration, no watermark.",
        h1: 'Free France Passport Photo Maker',
        faq: [
          { q: 'What size is a French passport photo?', a: "French passport and ID photos (photo d'identité) must be 35×45mm with a plain light grey background." },
          { q: 'What background does France require?', a: 'France requires a plain light grey background for all official ID and passport photos.' },
          { q: 'Can I wear glasses?', a: 'No. The French government requires photos without glasses.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
      { id: 'france-id-card', countryId: 'france', name: 'ID Card (CNI)', slug: 'france-id-card-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey', requirements: reqG('35×45 mm'), seoTitle: 'Free France ID Card Photo (CNI) | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant French national ID card (CNI) photo online for free. Correct 35×45mm size, light grey background. No registration, no watermark.', h1: 'Free France National ID Card (CNI) Photo', faq: shortFaq('French ID Card (CNI)', 35, 45, 'plain light grey') },
      { id: 'france-visa', countryId: 'france', name: 'Visa', slug: 'france-visa-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey', requirements: reqG('35×45 mm'), seoTitle: 'Free France Visa Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant French visa photo online for free. Correct 35×45mm size, light grey background. No registration, no watermark.', h1: 'Free France Visa Photo Maker', faq: shortFaq('France Visa', 35, 45, 'plain light grey') },
      { id: 'france-drivers-licence', countryId: 'france', name: "Driver's Licence", slug: 'france-drivers-licence-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey', requirements: reqG('35×45 mm'), seoTitle: "Free France Driver's Licence Photo | 35×45mm | No Watermark | Free", seoDescription: "Create a compliant French driver's licence photo online for free. Correct 35×45mm size. No registration, no watermark.", h1: "Free France Driver's Licence Photo", faq: shortFaq("French Driver's Licence", 35, 45, 'plain light grey') },
    ],
  },
  {
    id: 'spain', name: 'Spain', flag: '🇪🇸',
    documents: [
      {
        id: 'spain-passport', countryId: 'spain', name: 'Passport', slug: 'spain-passport-photo',
        widthMm: 26, heightMm: 32, widthPx: 307, heightPx: 378, dpi: 300,
        background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White',
        requirements: reqW('26×32 mm'),
        seoTitle: 'Free Spain Passport Photo Maker | 26×32mm | No Watermark | Free',
        seoDescription: 'Create a compliant Spanish passport photo online for free. Correct 26×32mm size, white background. No registration, no watermark.',
        h1: 'Free Spain Passport Photo Maker',
        faq: [
          { q: 'What size is a Spanish passport photo?', a: 'Spanish passport photos are 26×32mm (width × height) with a plain white background — a unique format smaller than the EU standard 35×45mm.' },
          { q: 'Is the Spanish passport photo the same as the EU standard?', a: 'No. Spain uses 26×32mm while most EU countries use 35×45mm. Always use the Spanish format for Spanish documents.' },
          { q: 'Can I wear glasses?', a: 'No. Spanish passport regulations do not accept photos with glasses.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
      { id: 'spain-dni', countryId: 'spain', name: 'DNI / ID Card', slug: 'spain-dni-photo', widthMm: 26, heightMm: 32, widthPx: 307, heightPx: 378, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('26×32 mm'), seoTitle: 'Free Spain DNI / ID Card Photo | 26×32mm | No Watermark | Free', seoDescription: 'Create a compliant Spanish DNI (national ID card) photo online for free. Correct 26×32mm size, white background. No registration, no watermark.', h1: 'Free Spain DNI / ID Card Photo', faq: shortFaq('Spanish DNI', 26, 32, 'plain white') },
      { id: 'spain-visa', countryId: 'spain', name: 'Visa', slug: 'spain-visa-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('35×45 mm'), seoTitle: 'Free Spain Visa Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Spanish visa photo online for free. Correct 35×45mm size, white background. No registration, no watermark.', h1: 'Free Spain Visa Photo Maker', faq: shortFaq('Spain Visa', 35, 45, 'plain white') },
    ],
  },
  {
    id: 'italy', name: 'Italy', flag: '🇮🇹',
    documents: [
      {
        id: 'italy-passport', countryId: 'italy', name: 'Passport', slug: 'italy-passport-photo',
        widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300,
        background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White',
        requirements: reqW('35×45 mm'),
        seoTitle: 'Free Italy Passport Photo Maker | 35×45mm | No Watermark | Free',
        seoDescription: 'Create a compliant Italian passport photo online for free. Correct 35×45mm size, white background. No registration, no watermark.',
        h1: 'Free Italy Passport Photo Maker',
        faq: [
          { q: 'What size is an Italian passport photo?', a: 'Italian passport photos must be 35×45mm with a plain white background.' },
          { q: 'What background is required for Italian ID photos?', a: 'Italian passport uses a white background; the ID card (Carta d\'Identità) and other documents use a light grey background.' },
          { q: 'Can I wear glasses?', a: 'No. Italian biometric passport regulations do not accept glasses.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
      { id: 'italy-id-card', countryId: 'italy', name: 'ID Card (CIE)', slug: 'italy-id-card-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey', requirements: reqG('35×45 mm'), seoTitle: 'Free Italy ID Card Photo (CIE) | 35×45mm | No Watermark | Free', seoDescription: "Create a compliant Italian ID card (Carta d'Identità Elettronica) photo online for free. Correct 35×45mm, light grey background. No registration, no watermark.", h1: 'Free Italy ID Card (CIE) Photo', faq: shortFaq('Italian ID Card (CIE)', 35, 45, 'plain light grey') },
      { id: 'italy-visa', countryId: 'italy', name: 'Visa', slug: 'italy-visa-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey', requirements: reqG('35×45 mm'), seoTitle: 'Free Italy Visa Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Italian visa photo online for free. Correct 35×45mm size, light grey background. No registration, no watermark.', h1: 'Free Italy Visa Photo Maker', faq: shortFaq('Italy Visa', 35, 45, 'plain light grey') },
      { id: 'italy-drivers-licence', countryId: 'italy', name: "Driver's Licence", slug: 'italy-drivers-licence-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey', requirements: reqG('35×45 mm'), seoTitle: "Free Italy Driver's Licence Photo | 35×45mm | No Watermark | Free", seoDescription: "Create a compliant Italian driver's licence photo online for free. Correct 35×45mm size. No registration, no watermark.", h1: "Free Italy Driver's Licence Photo", faq: shortFaq("Italian Driver's Licence", 35, 45, 'plain light grey') },
    ],
  },
  {
    id: 'poland', name: 'Poland', flag: '🇵🇱',
    documents: [
      {
        id: 'poland-passport', countryId: 'poland', name: 'Passport', slug: 'poland-passport-photo',
        widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300,
        background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White',
        requirements: reqW('35×45 mm'),
        seoTitle: 'Free Poland Passport Photo Maker | 35×45mm | No Watermark | Free',
        seoDescription: 'Create a compliant Polish passport photo online for free. Correct 35×45mm size, white background. No registration, no watermark.',
        h1: 'Free Poland Passport Photo Maker',
        faq: [
          { q: 'What size is a Polish passport photo?', a: 'Polish passport photos must be 35×45mm with a plain white background.' },
          { q: 'Can I wear glasses in a Polish passport photo?', a: 'No. Polish biometric passport regulations do not accept glasses.' },
          { q: 'Is the Polish ID card the same size?', a: 'Yes. Both the Polish passport and ID card (Dowód Osobisty) use the 35×45mm format with white background.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
      { id: 'poland-id-card', countryId: 'poland', name: 'ID Card (Dowód)', slug: 'poland-id-card-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('35×45 mm'), seoTitle: 'Free Poland ID Card Photo (Dowód Osobisty) | 35×45mm | Free', seoDescription: 'Create a compliant Polish ID card (Dowód Osobisty) photo online for free. Correct 35×45mm size, white background. No registration, no watermark.', h1: 'Free Poland ID Card (Dowód Osobisty) Photo', faq: shortFaq('Polish ID Card', 35, 45, 'plain white') },
      { id: 'poland-visa', countryId: 'poland', name: 'Visa', slug: 'poland-visa-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey', requirements: reqG('35×45 mm'), seoTitle: 'Free Poland Visa Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Polish visa photo online for free. Correct 35×45mm size, light grey background. No registration, no watermark.', h1: 'Free Poland Visa Photo Maker', faq: shortFaq('Poland Visa', 35, 45, 'plain light grey') },
      { id: 'poland-residence', countryId: 'poland', name: 'Residence Card', slug: 'poland-residence-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey', requirements: reqG('35×45 mm'), seoTitle: 'Free Poland Residence Card Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Polish residence card photo online for free. Correct 35×45mm size. No registration, no watermark.', h1: 'Free Poland Residence Card Photo', faq: shortFaq('Polish Residence Card', 35, 45, 'plain light grey') },
    ],
  },
  {
    id: 'sweden', name: 'Sweden', flag: '🇸🇪',
    documents: [
      {
        id: 'sweden-passport', countryId: 'sweden', name: 'Passport', slug: 'sweden-passport-photo',
        widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300,
        background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White',
        requirements: reqW('35×45 mm'),
        seoTitle: 'Free Sweden Passport Photo Maker | 35×45mm | No Watermark | Free',
        seoDescription: 'Create a compliant Swedish passport photo online for free. Correct 35×45mm size, white background. No registration, no watermark.',
        h1: 'Free Sweden Passport Photo Maker',
        faq: [
          { q: 'What size is a Swedish passport photo?', a: 'Swedish passport photos must be 35×45mm with a plain white background.' },
          { q: 'Can I wear glasses?', a: 'No. Swedish biometric regulations do not accept glasses.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
      { id: 'sweden-id-card', countryId: 'sweden', name: 'ID Card', slug: 'sweden-id-card-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('35×45 mm'), seoTitle: 'Free Sweden ID Card Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Swedish ID card photo online for free. Correct 35×45mm size, white background. No registration, no watermark.', h1: 'Free Sweden ID Card Photo', faq: shortFaq('Swedish ID Card', 35, 45, 'plain white') },
      { id: 'sweden-visa', countryId: 'sweden', name: 'Visa', slug: 'sweden-visa-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey', requirements: reqG('35×45 mm'), seoTitle: 'Free Sweden Visa Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Swedish visa photo online for free. Correct 35×45mm size, light grey background. No registration, no watermark.', h1: 'Free Sweden Visa Photo', faq: shortFaq('Sweden Visa', 35, 45, 'plain light grey') },
    ],
  },
  {
    id: 'norway', name: 'Norway', flag: '🇳🇴',
    documents: [
      {
        id: 'norway-passport', countryId: 'norway', name: 'Passport', slug: 'norway-passport-photo',
        widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300,
        background: 'Plain light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey',
        requirements: reqG('35×45 mm'),
        seoTitle: 'Free Norway Passport Photo Maker | 35×45mm | No Watermark | Free',
        seoDescription: 'Create a compliant Norwegian passport photo online for free. Correct 35×45mm size, light grey background. No registration, no watermark.',
        h1: 'Free Norway Passport Photo Maker',
        faq: [
          { q: 'What size is a Norwegian passport photo?', a: 'Norwegian passport photos must be 35×45mm with a plain light grey background.' },
          { q: 'Can I wear glasses?', a: 'No. Norwegian biometric passport regulations do not accept glasses.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
      { id: 'norway-visa', countryId: 'norway', name: 'Visa', slug: 'norway-visa-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey', requirements: reqG('35×45 mm'), seoTitle: 'Free Norway Visa Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Norwegian visa photo online for free. Correct 35×45mm size, light grey background. No registration, no watermark.', h1: 'Free Norway Visa Photo', faq: shortFaq('Norway Visa', 35, 45, 'plain light grey') },
    ],
  },
  {
    id: 'denmark', name: 'Denmark', flag: '🇩🇰',
    documents: [
      {
        id: 'denmark-passport', countryId: 'denmark', name: 'Passport', slug: 'denmark-passport-photo',
        widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300,
        background: 'Plain light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey',
        requirements: reqG('35×45 mm'),
        seoTitle: 'Free Denmark Passport Photo Maker | 35×45mm | No Watermark | Free',
        seoDescription: 'Create a compliant Danish passport photo online for free. Correct 35×45mm size, light grey background. No registration, no watermark.',
        h1: 'Free Denmark Passport Photo Maker',
        faq: [
          { q: 'What size is a Danish passport photo?', a: 'Danish passport photos must be 35×45mm with a plain light grey background.' },
          { q: 'Can I wear glasses?', a: 'No. Danish biometric regulations do not accept glasses.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
      { id: 'denmark-id-card', countryId: 'denmark', name: 'ID Card', slug: 'denmark-id-card-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey', requirements: reqG('35×45 mm'), seoTitle: 'Free Denmark ID Card Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Danish ID card photo online for free. Correct 35×45mm size. No registration, no watermark.', h1: 'Free Denmark ID Card Photo', faq: shortFaq('Danish ID Card', 35, 45, 'plain light grey') },
      { id: 'denmark-visa', countryId: 'denmark', name: 'Visa', slug: 'denmark-visa-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey', requirements: reqG('35×45 mm'), seoTitle: 'Free Denmark Visa Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Danish visa photo online for free. Correct 35×45mm size. No registration, no watermark.', h1: 'Free Denmark Visa Photo', faq: shortFaq('Denmark Visa', 35, 45, 'plain light grey') },
      { id: 'denmark-drivers-licence', countryId: 'denmark', name: "Driver's Licence", slug: 'denmark-drivers-licence-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey', requirements: reqG('35×45 mm'), seoTitle: "Free Denmark Driver's Licence Photo | 35×45mm | No Watermark | Free", seoDescription: "Create a compliant Danish driver's licence photo online for free. Correct 35×45mm size. No registration, no watermark.", h1: "Free Denmark Driver's Licence Photo", faq: shortFaq("Danish Driver's Licence", 35, 45, 'plain light grey') },
    ],
  },
  {
    id: 'switzerland', name: 'Switzerland', flag: '🇨🇭',
    documents: [
      {
        id: 'switzerland-passport', countryId: 'switzerland', name: 'Passport', slug: 'switzerland-passport-photo',
        widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300,
        background: 'Plain light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey',
        requirements: reqG('35×45 mm'),
        seoTitle: 'Free Switzerland Passport Photo Maker | 35×45mm | No Watermark | Free',
        seoDescription: 'Create a compliant Swiss passport photo online for free. Correct 35×45mm size, light grey background. No registration, no watermark.',
        h1: 'Free Switzerland Passport Photo Maker',
        faq: [
          { q: 'What size is a Swiss passport photo?', a: 'Swiss passport photos must be 35×45mm with a plain light grey background.' },
          { q: 'Can I wear glasses?', a: 'No. Swiss biometric regulations do not accept glasses.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
      { id: 'switzerland-visa', countryId: 'switzerland', name: 'Visa', slug: 'switzerland-visa-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey', requirements: reqG('35×45 mm'), seoTitle: 'Free Switzerland Visa Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Swiss visa photo online for free. Correct 35×45mm size, light grey background. No registration, no watermark.', h1: 'Free Switzerland Visa Photo', faq: shortFaq('Switzerland Visa', 35, 45, 'plain light grey') },
      { id: 'switzerland-drivers-licence', countryId: 'switzerland', name: "Driver's Licence", slug: 'switzerland-drivers-licence-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('35×45 mm'), seoTitle: "Free Switzerland Driver's Licence Photo | 35×45mm | No Watermark | Free", seoDescription: "Create a compliant Swiss driver's licence photo online for free. Correct 35×45mm size. No registration, no watermark.", h1: "Free Switzerland Driver's Licence Photo", faq: shortFaq("Swiss Driver's Licence", 35, 45, 'plain white') },
    ],
  },
  {
    id: 'austria', name: 'Austria', flag: '🇦🇹',
    documents: [
      {
        id: 'austria-passport', countryId: 'austria', name: 'Passport', slug: 'austria-passport-photo',
        widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300,
        background: 'Plain light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey',
        requirements: reqG('35×45 mm'),
        seoTitle: 'Free Austria Passport Photo Maker | 35×45mm | No Watermark | Free',
        seoDescription: 'Create a compliant Austrian passport photo online for free. Correct 35×45mm size, light grey background. No registration, no watermark.',
        h1: 'Free Austria Passport Photo Maker',
        faq: [
          { q: 'What size is an Austrian passport photo?', a: 'Austrian passport photos must be 35×45mm with a plain light grey background.' },
          { q: 'Can I wear glasses?', a: 'No. Austrian biometric regulations do not accept glasses.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
      { id: 'austria-id-card', countryId: 'austria', name: 'ID Card', slug: 'austria-id-card-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey', requirements: reqG('35×45 mm'), seoTitle: 'Free Austria ID Card Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Austrian ID card photo online for free. Correct 35×45mm size. No registration, no watermark.', h1: 'Free Austria ID Card Photo', faq: shortFaq('Austrian ID Card', 35, 45, 'plain light grey') },
      { id: 'austria-visa', countryId: 'austria', name: 'Visa', slug: 'austria-visa-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey', requirements: reqG('35×45 mm'), seoTitle: 'Free Austria Visa Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Austrian visa photo online for free. Correct 35×45mm size. No registration, no watermark.', h1: 'Free Austria Visa Photo', faq: shortFaq('Austria Visa', 35, 45, 'plain light grey') },
    ],
  },
  {
    id: 'belgium', name: 'Belgium', flag: '🇧🇪',
    documents: [
      {
        id: 'belgium-passport', countryId: 'belgium', name: 'Passport', slug: 'belgium-passport-photo',
        widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300,
        background: 'Plain light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey',
        requirements: reqG('35×45 mm'),
        seoTitle: 'Free Belgium Passport Photo Maker | 35×45mm | No Watermark | Free',
        seoDescription: 'Create a compliant Belgian passport photo online for free. Correct 35×45mm size, light grey background. No registration, no watermark.',
        h1: 'Free Belgium Passport Photo Maker',
        faq: [
          { q: 'What size is a Belgian passport photo?', a: 'Belgian passport photos must be 35×45mm with a plain light grey background.' },
          { q: 'Can I wear glasses?', a: 'No. Belgian biometric regulations do not accept glasses.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
      { id: 'belgium-id-card', countryId: 'belgium', name: 'eID Card', slug: 'belgium-id-card-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey', requirements: reqG('35×45 mm'), seoTitle: 'Free Belgium eID Card Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Belgian electronic ID card (eID) photo online for free. Correct 35×45mm size. No registration, no watermark.', h1: 'Free Belgium eID Card Photo', faq: shortFaq('Belgian eID Card', 35, 45, 'plain light grey') },
      { id: 'belgium-visa', countryId: 'belgium', name: 'Visa', slug: 'belgium-visa-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey', requirements: reqG('35×45 mm'), seoTitle: 'Free Belgium Visa Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Belgian visa photo online for free. Correct 35×45mm size. No registration, no watermark.', h1: 'Free Belgium Visa Photo', faq: shortFaq('Belgium Visa', 35, 45, 'plain light grey') },
    ],
  },
  {
    id: 'portugal', name: 'Portugal', flag: '🇵🇹',
    documents: [
      {
        id: 'portugal-passport', countryId: 'portugal', name: 'Passport', slug: 'portugal-passport-photo',
        widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300,
        background: 'Plain light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey',
        requirements: reqG('35×45 mm'),
        seoTitle: 'Free Portugal Passport Photo Maker | 35×45mm | No Watermark | Free',
        seoDescription: 'Create a compliant Portuguese passport photo online for free. Correct 35×45mm size, light grey background. No registration, no watermark.',
        h1: 'Free Portugal Passport Photo Maker',
        faq: [
          { q: 'What size is a Portuguese passport photo?', a: 'Portuguese passport photos must be 35×45mm with a plain light grey background.' },
          { q: 'Can I wear glasses?', a: 'No. Portuguese biometric regulations do not accept glasses.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
      { id: 'portugal-visa', countryId: 'portugal', name: 'Visa', slug: 'portugal-visa-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey', requirements: reqG('35×45 mm'), seoTitle: 'Free Portugal Visa Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Portuguese visa photo online for free. Correct 35×45mm size. No registration, no watermark.', h1: 'Free Portugal Visa Photo', faq: shortFaq('Portugal Visa', 35, 45, 'plain light grey') },
      { id: 'portugal-residence', countryId: 'portugal', name: 'Residence Permit', slug: 'portugal-residence-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey', requirements: reqG('35×45 mm'), seoTitle: 'Free Portugal Residence Permit Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Portuguese residence permit photo online for free. Correct 35×45mm size. No registration, no watermark.', h1: 'Free Portugal Residence Permit Photo', faq: shortFaq('Portugal Residence Permit', 35, 45, 'plain light grey') },
    ],
  },
  {
    id: 'netherlands', name: 'Netherlands', flag: '🇳🇱',
    documents: [
      {
        id: 'netherlands-passport', countryId: 'netherlands', name: 'Passport', slug: 'netherlands-passport-photo',
        widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300,
        background: 'Plain light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey',
        requirements: reqG('35×45 mm'),
        seoTitle: 'Free Netherlands Passport Photo Maker | 35×45mm | No Watermark | Free',
        seoDescription: 'Create a compliant Dutch passport photo online for free. Correct 35×45mm size, light grey background. No registration, no watermark.',
        h1: 'Free Netherlands Passport Photo Maker',
        faq: [
          { q: 'What size is a Dutch passport photo?', a: 'Dutch passport photos must be 35×45mm with a plain light grey background.' },
          { q: 'Can I wear glasses?', a: 'No. Dutch biometric regulations do not accept glasses.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
      { id: 'netherlands-visa', countryId: 'netherlands', name: 'Visa', slug: 'netherlands-visa-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey', requirements: reqG('35×45 mm'), seoTitle: 'Free Netherlands Visa Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Dutch visa photo online for free. Correct 35×45mm size. No registration, no watermark.', h1: 'Free Netherlands Visa Photo', faq: shortFaq('Netherlands Visa', 35, 45, 'plain light grey') },
    ],
  },
  {
    id: 'greece', name: 'Greece', flag: '🇬🇷',
    documents: [
      {
        id: 'greece-passport', countryId: 'greece', name: 'Passport', slug: 'greece-passport-photo',
        widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300,
        background: 'Plain light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey',
        requirements: reqG('35×45 mm'),
        seoTitle: 'Free Greece Passport Photo Maker | 35×45mm | No Watermark | Free',
        seoDescription: 'Create a compliant Greek passport photo online for free. Correct 35×45mm size, light grey background. No registration, no watermark.',
        h1: 'Free Greece Passport Photo Maker',
        faq: [
          { q: 'What size is a Greek passport photo?', a: 'Greek passport photos must be 35×45mm with a plain light grey background.' },
          { q: 'Can I wear glasses?', a: 'No. Greek biometric regulations do not accept glasses.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
      { id: 'greece-visa', countryId: 'greece', name: 'Visa', slug: 'greece-visa-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey', requirements: reqG('35×45 mm'), seoTitle: 'Free Greece Visa Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Greek visa photo online for free. Correct 35×45mm size. No registration, no watermark.', h1: 'Free Greece Visa Photo', faq: shortFaq('Greece Visa', 35, 45, 'plain light grey') },
    ],
  },
  {
    id: 'hungary', name: 'Hungary', flag: '🇭🇺',
    documents: [
      {
        id: 'hungary-passport', countryId: 'hungary', name: 'Passport', slug: 'hungary-passport-photo',
        widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300,
        background: 'Plain light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey',
        requirements: reqG('35×45 mm'),
        seoTitle: 'Free Hungary Passport Photo Maker | 35×45mm | No Watermark | Free',
        seoDescription: 'Create a compliant Hungarian passport photo online for free. Correct 35×45mm size, light grey background. No registration, no watermark.',
        h1: 'Free Hungary Passport Photo Maker',
        faq: [
          { q: 'What size is a Hungarian passport photo?', a: 'Hungarian passport photos must be 35×45mm with a plain light grey background.' },
          { q: 'Can I wear glasses?', a: 'No. Hungarian biometric regulations do not accept glasses.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
      { id: 'hungary-id-card', countryId: 'hungary', name: 'ID Card', slug: 'hungary-id-card-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey', requirements: reqG('35×45 mm'), seoTitle: 'Free Hungary ID Card Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Hungarian ID card photo online for free. Correct 35×45mm size. No registration, no watermark.', h1: 'Free Hungary ID Card Photo', faq: shortFaq('Hungarian ID Card', 35, 45, 'plain light grey') },
      { id: 'hungary-visa', countryId: 'hungary', name: 'Visa', slug: 'hungary-visa-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey', requirements: reqG('35×45 mm'), seoTitle: 'Free Hungary Visa Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Hungarian visa photo online for free. Correct 35×45mm size. No registration, no watermark.', h1: 'Free Hungary Visa Photo', faq: shortFaq('Hungary Visa', 35, 45, 'plain light grey') },
    ],
  },
  {
    id: 'romania', name: 'Romania', flag: '🇷🇴',
    documents: [
      {
        id: 'romania-passport', countryId: 'romania', name: 'Passport', slug: 'romania-passport-photo',
        widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300,
        background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White',
        requirements: reqW('35×45 mm'),
        seoTitle: 'Free Romania Passport Photo Maker | 35×45mm | No Watermark | Free',
        seoDescription: 'Create a compliant Romanian passport photo online for free. Correct 35×45mm size, white background. No registration, no watermark.',
        h1: 'Free Romania Passport Photo Maker',
        faq: [
          { q: 'What size is a Romanian passport photo?', a: 'Romanian passport photos must be 35×45mm with a plain white background.' },
          { q: 'Is the Romanian ID card photo the same size?', a: 'No. The Romanian ID card (Carte de Identitate) uses a smaller 30×40mm format.' },
          { q: 'Can I wear glasses?', a: 'No. Romanian biometric regulations do not accept glasses.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
      { id: 'romania-id-card', countryId: 'romania', name: 'ID Card', slug: 'romania-id-card-photo', widthMm: 30, heightMm: 40, widthPx: 354, heightPx: 472, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('30×40 mm'), seoTitle: 'Free Romania ID Card Photo | 30×40mm | No Watermark | Free', seoDescription: 'Create a compliant Romanian ID card (Carte de Identitate) photo online for free. Correct 30×40mm size. No registration, no watermark.', h1: 'Free Romania ID Card Photo', faq: shortFaq('Romanian ID Card', 30, 40, 'plain white') },
      { id: 'romania-visa', countryId: 'romania', name: 'Visa', slug: 'romania-visa-photo', widthMm: 30, heightMm: 40, widthPx: 354, heightPx: 472, dpi: 300, background: 'Plain light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey', requirements: reqG('30×40 mm'), seoTitle: 'Free Romania Visa Photo | 30×40mm | No Watermark | Free', seoDescription: 'Create a compliant Romanian visa photo online for free. Correct 30×40mm size. No registration, no watermark.', h1: 'Free Romania Visa Photo', faq: shortFaq('Romania Visa', 30, 40, 'plain light grey') },
    ],
  },
  {
    id: 'ukraine', name: 'Ukraine', flag: '🇺🇦',
    documents: [
      {
        id: 'ukraine-intl-passport', countryId: 'ukraine', name: 'International Passport', slug: 'ukraine-passport-photo',
        widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300,
        background: 'Plain light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey',
        requirements: reqG('35×45 mm'),
        seoTitle: 'Free Ukraine Passport Photo Maker | 35×45mm | No Watermark | Free',
        seoDescription: 'Create a compliant Ukrainian passport photo online for free. Correct 35×45mm size, light grey background. No registration, no watermark.',
        h1: 'Free Ukraine Passport Photo Maker',
        faq: [
          { q: 'What size is a Ukrainian passport photo?', a: 'Ukrainian international passport photos must be 35×45mm with a plain light grey background.' },
          { q: 'Can I wear glasses?', a: 'No. Ukrainian biometric regulations do not accept glasses.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
      { id: 'ukraine-id-card', countryId: 'ukraine', name: 'Internal Passport (ID Card)', slug: 'ukraine-id-card-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey', requirements: reqG('35×45 mm'), seoTitle: 'Free Ukraine Internal Passport / ID Card Photo | 35×45mm | Free', seoDescription: 'Create a compliant Ukrainian internal passport / ID card photo online for free. Correct 35×45mm size. No registration, no watermark.', h1: 'Free Ukraine Internal Passport / ID Card Photo', faq: shortFaq('Ukrainian ID Card', 35, 45, 'plain light grey') },
      { id: 'ukraine-visa', countryId: 'ukraine', name: 'Visa', slug: 'ukraine-visa-photo', widthMm: 30, heightMm: 40, widthPx: 354, heightPx: 472, dpi: 300, background: 'Plain light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey', requirements: reqG('30×40 mm'), seoTitle: 'Free Ukraine Visa Photo | 30×40mm | No Watermark | Free', seoDescription: 'Create a compliant Ukrainian visa photo online for free. Correct 30×40mm (3×4cm) size. No registration, no watermark.', h1: 'Free Ukraine Visa Photo', faq: shortFaq('Ukraine Visa', 30, 40, 'plain light grey') },
    ],
  },
]

const middleEastAfricaCountries: CountrySpec[] = [
  {
    id: 'turkey', name: 'Turkey', flag: '🇹🇷',
    documents: [
      {
        id: 'turkey-passport', countryId: 'turkey', name: 'Passport', slug: 'turkey-passport-photo',
        widthMm: 50, heightMm: 60, widthPx: 591, heightPx: 709, dpi: 300,
        background: 'Plain light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey',
        requirements: reqG('50×60 mm'),
        seoTitle: 'Free Turkey Passport Photo Maker | 50×60mm | No Watermark | Free',
        seoDescription: 'Create a compliant Turkish passport photo online for free. Correct 50×60mm size, light grey background. No registration, no watermark.',
        h1: 'Free Turkey Passport Photo Maker',
        faq: [
          { q: 'What size is a Turkish passport photo?', a: 'Turkish passport and document photos use the unique 50×60mm (5×6 cm) format with a plain light grey background.' },
          { q: 'Is the Turkish format different from EU standard?', a: 'Yes. Turkey uses 50×60mm while most EU countries use 35×45mm. Always use the Turkish-specific format for Turkish documents.' },
          { q: 'Can I wear glasses?', a: 'No. Turkish biometric regulations do not accept glasses.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
      { id: 'turkey-id-card', countryId: 'turkey', name: 'ID Card', slug: 'turkey-id-card-photo', widthMm: 50, heightMm: 60, widthPx: 591, heightPx: 709, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('50×60 mm'), seoTitle: 'Free Turkey ID Card Photo | 50×60mm | No Watermark | Free', seoDescription: 'Create a compliant Turkish ID card (Kimlik Kartı) photo online for free. Correct 50×60mm size, white background. No registration, no watermark.', h1: 'Free Turkey ID Card Photo', faq: shortFaq('Turkish ID Card', 50, 60, 'plain white') },
      { id: 'turkey-visa', countryId: 'turkey', name: 'Visa', slug: 'turkey-visa-photo', widthMm: 50, heightMm: 60, widthPx: 591, heightPx: 709, dpi: 300, background: 'Plain light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey', requirements: reqG('50×60 mm'), seoTitle: 'Free Turkey Visa Photo | 50×60mm | No Watermark | Free', seoDescription: 'Create a compliant Turkish visa photo online for free. Correct 50×60mm size. No registration, no watermark.', h1: 'Free Turkey Visa Photo', faq: shortFaq('Turkey Visa', 50, 60, 'plain light grey') },
      { id: 'turkey-drivers-licence', countryId: 'turkey', name: "Driver's Licence", slug: 'turkey-drivers-licence-photo', widthMm: 50, heightMm: 60, widthPx: 591, heightPx: 709, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('50×60 mm'), seoTitle: "Free Turkey Driver's Licence Photo | 50×60mm | No Watermark | Free", seoDescription: "Create a compliant Turkish driver's licence photo online for free. Correct 50×60mm size. No registration, no watermark.", h1: "Free Turkey Driver's Licence Photo", faq: shortFaq("Turkish Driver's Licence", 50, 60, 'plain white') },
    ],
  },
  {
    id: 'israel', name: 'Israel', flag: '🇮🇱',
    documents: [
      {
        id: 'israel-passport', countryId: 'israel', name: 'Passport', slug: 'israel-passport-photo',
        widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300,
        background: 'Plain light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey',
        requirements: reqG('35×45 mm'),
        seoTitle: 'Free Israel Passport Photo Maker | 35×45mm | No Watermark | Free',
        seoDescription: 'Create a compliant Israeli passport photo online for free. Correct 35×45mm size, light grey background. No registration, no watermark.',
        h1: 'Free Israel Passport Photo Maker',
        faq: [
          { q: 'What size is an Israeli passport photo?', a: 'Israeli passport photos must be 35×45mm with a plain light grey background.' },
          { q: 'Can I wear glasses?', a: 'No. Israeli biometric regulations do not accept glasses.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
      { id: 'israel-id-card', countryId: 'israel', name: 'ID Card', slug: 'israel-id-card-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey', requirements: reqG('35×45 mm'), seoTitle: 'Free Israel ID Card Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Israeli ID card photo online for free. Correct 35×45mm size. No registration, no watermark.', h1: 'Free Israel ID Card Photo', faq: shortFaq('Israeli ID Card', 35, 45, 'plain light grey') },
      { id: 'israel-visa', countryId: 'israel', name: 'Visa', slug: 'israel-visa-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey', requirements: reqG('35×45 mm'), seoTitle: 'Free Israel Visa Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Israeli visa photo online for free. Correct 35×45mm size. No registration, no watermark.', h1: 'Free Israel Visa Photo', faq: shortFaq('Israel Visa', 35, 45, 'plain light grey') },
    ],
  },
  {
    id: 'qatar', name: 'Qatar', flag: '🇶🇦',
    documents: [
      {
        id: 'qatar-passport', countryId: 'qatar', name: 'Passport', slug: 'qatar-passport-photo',
        widthMm: 38, heightMm: 48, widthPx: 449, heightPx: 567, dpi: 300,
        background: 'Plain light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey',
        requirements: reqG('38×48 mm'),
        seoTitle: 'Free Qatar Passport Photo Maker | 38×48mm | No Watermark | Free',
        seoDescription: 'Create a compliant Qatari passport photo online for free. Correct 38×48mm size, light grey background. No registration, no watermark.',
        h1: 'Free Qatar Passport Photo Maker',
        faq: [
          { q: 'What size is a Qatar passport photo?', a: 'Qatari passport photos use the unique 38×48mm format with a plain light grey background.' },
          { q: 'Is the Qatari format different from standard?', a: 'Yes. Qatar uses 38×48mm, which differs from the standard 35×45mm used in most countries.' },
          { q: 'Can I wear glasses?', a: 'No. Qatari biometric regulations do not accept glasses.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
      { id: 'qatar-id-card', countryId: 'qatar', name: 'ID Card (QID)', slug: 'qatar-id-card-photo', widthMm: 38, heightMm: 48, widthPx: 449, heightPx: 567, dpi: 300, background: 'Plain light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey', requirements: reqG('38×48 mm'), seoTitle: 'Free Qatar ID Card (QID) Photo | 38×48mm | No Watermark | Free', seoDescription: 'Create a compliant Qatar ID card (QID) photo online for free. Correct 38×48mm size. No registration, no watermark.', h1: 'Free Qatar ID Card (QID) Photo', faq: shortFaq('Qatar QID', 38, 48, 'plain light grey') },
      { id: 'qatar-visa', countryId: 'qatar', name: 'Visa', slug: 'qatar-visa-photo', widthMm: 38, heightMm: 48, widthPx: 449, heightPx: 567, dpi: 300, background: 'Plain light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey', requirements: reqG('38×48 mm'), seoTitle: 'Free Qatar Visa Photo | 38×48mm | No Watermark | Free', seoDescription: 'Create a compliant Qatari visa photo online for free. Correct 38×48mm size. No registration, no watermark.', h1: 'Free Qatar Visa Photo', faq: shortFaq('Qatar Visa', 38, 48, 'plain light grey') },
    ],
  },
  {
    id: 'kuwait', name: 'Kuwait', flag: '🇰🇼',
    documents: [
      {
        id: 'kuwait-passport', countryId: 'kuwait', name: 'Passport', slug: 'kuwait-passport-photo',
        widthMm: 40, heightMm: 60, widthPx: 472, heightPx: 709, dpi: 300,
        background: 'Light blue', bgColor: '#309eff', bgColorLabel: 'Light blue',
        requirements: ['Size: 40×60 mm', 'Plain light blue background', 'Neutral expression, mouth closed', 'Both eyes open and clearly visible', 'No glasses', 'Taken within the last 6 months'],
        seoTitle: 'Free Kuwait Passport Photo Maker | 40×60mm Blue Background | Free',
        seoDescription: 'Create a compliant Kuwaiti passport photo online for free. Correct 40×60mm size, light blue background. No registration, no watermark.',
        h1: 'Free Kuwait Passport Photo Maker',
        faq: [
          { q: 'What size is a Kuwait passport photo?', a: 'Kuwaiti passport photos must be 40×60mm with a plain light blue background — a unique requirement.' },
          { q: 'Why does Kuwait use a blue background?', a: 'Kuwait requires a light blue background for passport and ID photos, unlike most countries that use white or grey.' },
          { q: 'Can I wear glasses?', a: 'No. Kuwaiti biometric regulations do not accept glasses.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
      { id: 'kuwait-id-card', countryId: 'kuwait', name: 'Civil ID', slug: 'kuwait-id-card-photo', widthMm: 40, heightMm: 60, widthPx: 472, heightPx: 709, dpi: 300, background: 'Light blue', bgColor: '#309eff', bgColorLabel: 'Light blue', requirements: ['Size: 40×60 mm', 'Plain light blue background', 'Neutral expression, mouth closed', 'Both eyes open and clearly visible', 'No glasses', 'Taken within the last 6 months'], seoTitle: 'Free Kuwait Civil ID Photo | 40×60mm Blue Background | Free', seoDescription: 'Create a compliant Kuwaiti Civil ID card photo online for free. Correct 40×60mm size, light blue background. No registration, no watermark.', h1: 'Free Kuwait Civil ID Card Photo', faq: shortFaq('Kuwait Civil ID', 40, 60, 'plain light blue') },
      { id: 'kuwait-visa', countryId: 'kuwait', name: 'Visa', slug: 'kuwait-visa-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('35×45 mm'), seoTitle: 'Free Kuwait Visa Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Kuwaiti visa photo online for free. Correct 35×45mm size, white background. No registration, no watermark.', h1: 'Free Kuwait Visa Photo', faq: shortFaq('Kuwait Visa', 35, 45, 'plain white') },
    ],
  },
  {
    id: 'saudi-arabia', name: 'Saudi Arabia', flag: '🇸🇦',
    documents: [
      {
        id: 'saudi-passport', countryId: 'saudi-arabia', name: 'Passport', slug: 'saudi-arabia-passport-photo',
        widthMm: 40, heightMm: 60, widthPx: 472, heightPx: 709, dpi: 300,
        background: 'Plain light grey', bgColor: '#dddddd', bgColorLabel: 'Light grey',
        requirements: reqG('40×60 mm'),
        seoTitle: 'Free Saudi Arabia Passport Photo | 40×60mm | No Watermark | Free',
        seoDescription: 'Create a compliant Saudi Arabian passport photo online for free. Correct 40×60mm size, light grey background. No registration, no watermark.',
        h1: 'Free Saudi Arabia Passport Photo Maker',
        faq: [
          { q: 'What size is a Saudi Arabia passport photo?', a: 'Saudi Arabian passport photos must be 40×60mm with a plain light grey background.' },
          { q: 'Can I wear glasses?', a: 'No. Saudi biometric regulations do not accept glasses.' },
          { q: 'Can women wear hijab?', a: 'Yes, a hijab is permitted as long as the face is fully visible from forehead to chin.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
      { id: 'saudi-id-card', countryId: 'saudi-arabia', name: 'National ID', slug: 'saudi-arabia-id-card-photo', widthMm: 40, heightMm: 60, widthPx: 472, heightPx: 709, dpi: 300, background: 'Plain light grey', bgColor: '#dddddd', bgColorLabel: 'Light grey', requirements: reqG('40×60 mm'), seoTitle: 'Free Saudi Arabia National ID Photo | 40×60mm | No Watermark | Free', seoDescription: 'Create a compliant Saudi Arabian national ID card photo online for free. Correct 40×60mm size. No registration, no watermark.', h1: 'Free Saudi Arabia National ID Card Photo', faq: shortFaq('Saudi National ID', 40, 60, 'plain light grey') },
      { id: 'saudi-work-permit', countryId: 'saudi-arabia', name: 'Work Permit (Iqama)', slug: 'saudi-arabia-work-permit-photo', widthMm: 40, heightMm: 60, widthPx: 472, heightPx: 709, dpi: 300, background: 'Plain light grey', bgColor: '#dddddd', bgColorLabel: 'Light grey', requirements: reqG('40×60 mm'), seoTitle: 'Free Saudi Arabia Work Permit (Iqama) Photo | 40×60mm | Free', seoDescription: 'Create a compliant Saudi Arabian work permit (Iqama) photo online for free. Correct 40×60mm size. No registration, no watermark.', h1: 'Free Saudi Arabia Work Permit (Iqama) Photo', faq: shortFaq('Saudi Work Permit (Iqama)', 40, 60, 'plain light grey') },
    ],
  },
  {
    id: 'egypt', name: 'Egypt', flag: '🇪🇬',
    documents: [
      {
        id: 'egypt-passport', countryId: 'egypt', name: 'Passport', slug: 'egypt-passport-photo',
        widthMm: 40, heightMm: 60, widthPx: 472, heightPx: 709, dpi: 300,
        background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White',
        requirements: reqW('40×60 mm'),
        seoTitle: 'Free Egypt Passport Photo Maker | 40×60mm | No Watermark | Free',
        seoDescription: 'Create a compliant Egyptian passport photo online for free. Correct 40×60mm size, white background. No registration, no watermark.',
        h1: 'Free Egypt Passport Photo Maker',
        faq: [
          { q: 'What size is an Egyptian passport photo?', a: 'Egyptian passport photos must be 40×60mm with a plain white background.' },
          { q: 'Can I wear glasses?', a: 'No. Egyptian biometric regulations do not accept glasses.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
      { id: 'egypt-visa', countryId: 'egypt', name: 'Visa', slug: 'egypt-visa-photo', widthMm: 40, heightMm: 60, widthPx: 472, heightPx: 709, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('40×60 mm'), seoTitle: 'Free Egypt Visa Photo | 40×60mm | No Watermark | Free', seoDescription: 'Create a compliant Egyptian visa photo online for free. Correct 40×60mm size, white background. No registration, no watermark.', h1: 'Free Egypt Visa Photo', faq: shortFaq('Egypt Visa', 40, 60, 'plain white') },
    ],
  },
  {
    id: 'south-africa', name: 'South Africa', flag: '🇿🇦',
    documents: [
      {
        id: 'south-africa-passport', countryId: 'south-africa', name: 'Passport', slug: 'south-africa-passport-photo',
        widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300,
        background: 'Plain light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey',
        requirements: reqG('35×45 mm'),
        seoTitle: 'Free South Africa Passport Photo Maker | 35×45mm | No Watermark | Free',
        seoDescription: 'Create a compliant South African passport photo online for free. Correct 35×45mm size, light grey background. No registration, no watermark.',
        h1: 'Free South Africa Passport Photo Maker',
        faq: [
          { q: 'What size is a South African passport photo?', a: 'South African passport photos must be 35×45mm with a plain light grey background.' },
          { q: 'Can I wear glasses?', a: 'No. South African biometric regulations do not accept glasses.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
      { id: 'south-africa-id-card', countryId: 'south-africa', name: 'Smart ID Card', slug: 'south-africa-id-card-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey', requirements: reqG('35×45 mm'), seoTitle: 'Free South Africa Smart ID Card Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant South African Smart ID card photo online for free. Correct 35×45mm size. No registration, no watermark.', h1: 'Free South Africa Smart ID Card Photo', faq: shortFaq('South African Smart ID', 35, 45, 'plain light grey') },
      { id: 'south-africa-visa', countryId: 'south-africa', name: 'Visa', slug: 'south-africa-visa-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey', requirements: reqG('35×45 mm'), seoTitle: 'Free South Africa Visa Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant South African visa photo online for free. Correct 35×45mm size. No registration, no watermark.', h1: 'Free South Africa Visa Photo', faq: shortFaq('South Africa Visa', 35, 45, 'plain light grey') },
    ],
  },
  {
    id: 'nigeria', name: 'Nigeria', flag: '🇳🇬',
    documents: [
      {
        id: 'nigeria-passport', countryId: 'nigeria', name: 'Passport', slug: 'nigeria-passport-photo',
        widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300,
        background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White',
        requirements: reqW('35×45 mm'),
        seoTitle: 'Free Nigeria Passport Photo Maker | 35×45mm | No Watermark | Free',
        seoDescription: 'Create a compliant Nigerian passport photo online for free. Correct 35×45mm size, white background. No registration, no watermark.',
        h1: 'Free Nigeria Passport Photo Maker',
        faq: [
          { q: 'What size is a Nigerian passport photo?', a: 'Nigerian passport photos must be 35×45mm with a plain white background.' },
          { q: 'Can I wear glasses?', a: 'No. Nigerian Immigration Service does not accept photos with glasses.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
      { id: 'nigeria-visa', countryId: 'nigeria', name: 'Visa', slug: 'nigeria-visa-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('35×45 mm'), seoTitle: 'Free Nigeria Visa Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Nigerian visa photo online for free. Correct 35×45mm size, white background. No registration, no watermark.', h1: 'Free Nigeria Visa Photo', faq: shortFaq('Nigeria Visa', 35, 45, 'plain white') },
    ],
  },
]

const asiaCountries: CountrySpec[] = [
  {
    id: 'russia', name: 'Russia', flag: '🇷🇺',
    documents: [
      {
        id: 'russia-intl-passport', countryId: 'russia', name: 'International Passport', slug: 'russia-passport-photo',
        widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300,
        background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White',
        requirements: reqW('35×45 mm'),
        seoTitle: 'Free Russia Passport Photo Maker | 35×45mm | No Watermark | Free',
        seoDescription: 'Create a compliant Russian international passport (Загранпаспорт) photo online for free. Correct 35×45mm size, white background. No registration, no watermark.',
        h1: 'Free Russia International Passport Photo',
        faq: [
          { q: 'What size is a Russian international passport photo?', a: 'Russian international passport (Загранпаспорт) photos must be 35×45mm with a plain white background.' },
          { q: 'Is the internal passport the same size?', a: 'Yes. Both the Russian international (Загранпаспорт) and internal (Паспорт РФ) passports use the 35×45mm format with white background.' },
          { q: 'Can I wear glasses?', a: 'No. Russian biometric passport regulations do not accept glasses.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
      { id: 'russia-internal-passport', countryId: 'russia', name: 'Internal Passport (Паспорт РФ)', slug: 'russia-internal-passport-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('35×45 mm'), seoTitle: 'Free Russia Internal Passport Photo (Паспорт РФ) | 35×45mm | Free', seoDescription: 'Create a compliant Russian internal passport (Паспорт РФ) photo online for free. Correct 35×45mm size. No registration, no watermark.', h1: 'Free Russia Internal Passport (Паспорт РФ) Photo', faq: shortFaq('Russian Internal Passport', 35, 45, 'plain white') },
    ],
  },
  {
    id: 'south-korea', name: 'South Korea', flag: '🇰🇷',
    documents: [
      {
        id: 'south-korea-passport', countryId: 'south-korea', name: 'Passport', slug: 'south-korea-passport-photo',
        widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300,
        background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White',
        requirements: reqW('35×45 mm'),
        seoTitle: 'Free South Korea Passport Photo Maker | 35×45mm | No Watermark | Free',
        seoDescription: 'Create a compliant South Korean passport photo online for free. Correct 35×45mm size, white background. No registration, no watermark.',
        h1: 'Free South Korea Passport Photo Maker',
        faq: [
          { q: 'What size is a South Korean passport photo?', a: 'South Korean passport photos must be 35×45mm with a plain white background.' },
          { q: 'Can I wear glasses?', a: 'No. Korean Immigration Service does not accept photos with glasses.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
      { id: 'south-korea-visa', countryId: 'south-korea', name: 'Visa', slug: 'south-korea-visa-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey', requirements: reqG('35×45 mm'), seoTitle: 'Free South Korea Visa Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant South Korean visa photo online for free. Correct 35×45mm size, light grey background. No registration, no watermark.', h1: 'Free South Korea Visa Photo', faq: shortFaq('South Korea Visa', 35, 45, 'plain light grey') },
      { id: 'south-korea-alien-card', countryId: 'south-korea', name: 'Alien Registration Card', slug: 'south-korea-arc-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('35×45 mm'), seoTitle: 'Free South Korea ARC (Alien Registration Card) Photo | 35×45mm | Free', seoDescription: 'Create a compliant South Korean Alien Registration Card (ARC) photo online for free. Correct 35×45mm size. No registration, no watermark.', h1: 'Free South Korea Alien Registration Card Photo', faq: shortFaq('South Korea ARC', 35, 45, 'plain white') },
    ],
  },
  {
    id: 'thailand', name: 'Thailand', flag: '🇹🇭',
    documents: [
      {
        id: 'thailand-passport', countryId: 'thailand', name: 'Passport', slug: 'thailand-passport-photo',
        widthMm: 40, heightMm: 60, widthPx: 472, heightPx: 709, dpi: 300,
        background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White',
        requirements: reqW('40×60 mm'),
        seoTitle: 'Free Thailand Passport Photo Maker | 40×60mm | No Watermark | Free',
        seoDescription: 'Create a compliant Thai passport photo online for free. Correct 40×60mm size, white background. No registration, no watermark.',
        h1: 'Free Thailand Passport Photo Maker',
        faq: [
          { q: 'What size is a Thai passport photo?', a: 'Thai passport photos must be 40×60mm with a plain white background.' },
          { q: 'Can I wear glasses?', a: 'No. Thai passport regulations do not accept glasses.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
      { id: 'thailand-visa', countryId: 'thailand', name: 'Visa', slug: 'thailand-visa-photo', widthMm: 40, heightMm: 60, widthPx: 472, heightPx: 709, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('40×60 mm'), seoTitle: 'Free Thailand Visa Photo | 40×60mm | No Watermark | Free', seoDescription: 'Create a compliant Thai visa photo online for free. Correct 40×60mm size, white background. No registration, no watermark.', h1: 'Free Thailand Visa Photo', faq: shortFaq('Thailand Visa', 40, 60, 'plain white') },
      { id: 'thailand-voa', countryId: 'thailand', name: 'Visa On Arrival', slug: 'thailand-voa-photo', widthMm: 40, heightMm: 60, widthPx: 472, heightPx: 709, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('40×60 mm'), seoTitle: 'Free Thailand Visa On Arrival Photo | 40×60mm | No Watermark | Free', seoDescription: 'Create a compliant Thailand Visa On Arrival photo online for free. Correct 40×60mm size. No registration, no watermark.', h1: 'Free Thailand Visa On Arrival Photo', faq: shortFaq('Thailand Visa On Arrival', 40, 60, 'plain white') },
    ],
  },
  {
    id: 'vietnam', name: 'Vietnam', flag: '🇻🇳',
    documents: [
      {
        id: 'vietnam-passport', countryId: 'vietnam', name: 'Passport', slug: 'vietnam-passport-photo',
        widthMm: 40, heightMm: 60, widthPx: 472, heightPx: 709, dpi: 300,
        background: 'Plain light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey',
        requirements: reqG('40×60 mm'),
        seoTitle: 'Free Vietnam Passport Photo Maker | 40×60mm | No Watermark | Free',
        seoDescription: 'Create a compliant Vietnamese passport photo online for free. Correct 40×60mm size, light grey background. No registration, no watermark.',
        h1: 'Free Vietnam Passport Photo Maker',
        faq: [
          { q: 'What size is a Vietnamese passport photo?', a: 'Vietnamese passport photos must be 40×60mm with a plain light grey background.' },
          { q: 'Can I wear glasses?', a: 'No. Vietnamese passport regulations do not accept glasses.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
      { id: 'vietnam-visa', countryId: 'vietnam', name: 'Visa', slug: 'vietnam-visa-photo', widthMm: 40, heightMm: 60, widthPx: 472, heightPx: 709, dpi: 300, background: 'Plain light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey', requirements: reqG('40×60 mm'), seoTitle: 'Free Vietnam Visa Photo | 40×60mm | No Watermark | Free', seoDescription: 'Create a compliant Vietnamese visa photo online for free. Correct 40×60mm size. No registration, no watermark.', h1: 'Free Vietnam Visa Photo', faq: shortFaq('Vietnam Visa', 40, 60, 'plain light grey') },
      { id: 'vietnam-id-card', countryId: 'vietnam', name: 'ID Card (CCCD)', slug: 'vietnam-id-card-photo', widthMm: 30, heightMm: 40, widthPx: 354, heightPx: 472, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('30×40 mm'), seoTitle: 'Free Vietnam ID Card (CCCD) Photo | 3×4cm | No Watermark | Free', seoDescription: 'Create a compliant Vietnamese citizen ID card (CCCD) photo online for free. Correct 3×4cm (30×40mm) size. No registration, no watermark.', h1: 'Free Vietnam ID Card (CCCD) Photo', faq: shortFaq('Vietnamese ID Card (CCCD)', 30, 40, 'plain white') },
    ],
  },
  {
    id: 'malaysia', name: 'Malaysia', flag: '🇲🇾',
    documents: [
      {
        id: 'malaysia-passport', countryId: 'malaysia', name: 'Passport', slug: 'malaysia-passport-photo',
        widthMm: 35, heightMm: 50, widthPx: 413, heightPx: 591, dpi: 300,
        background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White',
        requirements: reqW('35×50 mm'),
        seoTitle: 'Free Malaysia Passport Photo Maker | 35×50mm | No Watermark | Free',
        seoDescription: 'Create a compliant Malaysian passport photo online for free. Correct 35×50mm size, white background. No registration, no watermark.',
        h1: 'Free Malaysia Passport Photo Maker',
        faq: [
          { q: 'What size is a Malaysian passport photo?', a: 'Malaysian passport photos must be 35×50mm (width × height) with a plain white background.' },
          { q: 'Is the Malaysian format different from standard?', a: 'Yes. Malaysia uses 35×50mm, which is taller than the standard 35×45mm used in most countries.' },
          { q: 'Can I wear glasses?', a: 'No. Malaysian passport regulations do not accept glasses.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
      { id: 'malaysia-visa', countryId: 'malaysia', name: 'Visa', slug: 'malaysia-visa-photo', widthMm: 35, heightMm: 50, widthPx: 413, heightPx: 591, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('35×50 mm'), seoTitle: 'Free Malaysia Visa Photo | 35×50mm | No Watermark | Free', seoDescription: 'Create a compliant Malaysian visa photo online for free. Correct 35×50mm size, white background. No registration, no watermark.', h1: 'Free Malaysia Visa Photo', faq: shortFaq('Malaysia Visa', 35, 50, 'plain white') },
      { id: 'malaysia-evisa', countryId: 'malaysia', name: 'eVISA / eNTRI', slug: 'malaysia-evisa-photo', widthMm: 35, heightMm: 50, widthPx: 413, heightPx: 591, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('35×50 mm'), seoTitle: 'Free Malaysia eVISA / eNTRI Photo | 35×50mm | No Watermark | Free', seoDescription: 'Create a compliant Malaysian eVISA or eNTRI photo online for free. Correct 35×50mm size, white background. No registration, no watermark.', h1: 'Free Malaysia eVISA Photo', faq: shortFaq('Malaysia eVISA', 35, 50, 'plain white') },
    ],
  },
  {
    id: 'philippines', name: 'Philippines', flag: '🇵🇭',
    documents: [
      {
        id: 'philippines-passport', countryId: 'philippines', name: 'Passport', slug: 'philippines-passport-photo',
        widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300,
        background: 'Plain light blue', bgColor: '#309eee', bgColorLabel: 'Light blue',
        requirements: ['Size: 35×45 mm', 'Plain light blue background', 'Neutral expression, mouth closed', 'Both eyes open and clearly visible', 'No glasses', 'Taken within the last 6 months'],
        seoTitle: 'Free Philippines Passport Photo | 35×45mm Blue Background | Free',
        seoDescription: 'Create a compliant Philippine passport photo online for free. Correct 35×45mm size, light blue background. No registration, no watermark.',
        h1: 'Free Philippines Passport Photo Maker',
        faq: [
          { q: 'What size is a Philippine passport photo?', a: 'Philippine passport photos must be 35×45mm with a plain light blue background.' },
          { q: 'Why does the Philippines use a blue background?', a: 'The Philippine Department of Foreign Affairs requires a light blue background for passport photos, unlike most countries that use white or grey.' },
          { q: 'Can I wear glasses?', a: 'No. Philippine passport regulations do not accept glasses.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
      { id: 'philippines-visa', countryId: 'philippines', name: 'Visa', slug: 'philippines-visa-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('35×45 mm'), seoTitle: 'Free Philippines Visa Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Philippine visa photo online for free. Correct 35×45mm size, white background. No registration, no watermark.', h1: 'Free Philippines Visa Photo', faq: shortFaq('Philippines Visa', 35, 45, 'plain white') },
    ],
  },
  {
    id: 'singapore', name: 'Singapore', flag: '🇸🇬',
    documents: [
      {
        id: 'singapore-passport', countryId: 'singapore', name: 'Passport', slug: 'singapore-passport-photo',
        widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300,
        background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White',
        requirements: reqW('35×45 mm'),
        seoTitle: 'Free Singapore Passport Photo Maker | 35×45mm | No Watermark | Free',
        seoDescription: 'Create a compliant Singaporean passport photo online for free. Correct 35×45mm size, white background. No registration, no watermark.',
        h1: 'Free Singapore Passport Photo Maker',
        faq: [
          { q: 'What size is a Singaporean passport photo?', a: 'Singaporean passport photos must be 35×45mm with a plain white background.' },
          { q: 'Can I wear glasses?', a: 'No. ICA Singapore does not accept passport photos with glasses.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
      { id: 'singapore-nric', countryId: 'singapore', name: 'NRIC / ID Card', slug: 'singapore-nric-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('35×45 mm'), seoTitle: 'Free Singapore NRIC / ID Card Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Singapore NRIC (National Registration Identity Card) photo online for free. Correct 35×45mm size. No registration, no watermark.', h1: 'Free Singapore NRIC / ID Card Photo', faq: shortFaq('Singapore NRIC', 35, 45, 'plain white') },
      { id: 'singapore-visa', countryId: 'singapore', name: 'Visa', slug: 'singapore-visa-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('35×45 mm'), seoTitle: 'Free Singapore Visa Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Singapore visa photo online for free. Correct 35×45mm size, white background. No registration, no watermark.', h1: 'Free Singapore Visa Photo', faq: shortFaq('Singapore Visa', 35, 45, 'plain white') },
    ],
  },
  {
    id: 'hong-kong', name: 'Hong Kong', flag: '🇭🇰',
    documents: [
      {
        id: 'hk-passport', countryId: 'hong-kong', name: 'Passport', slug: 'hong-kong-passport-photo',
        widthMm: 40, heightMm: 50, widthPx: 472, heightPx: 591, dpi: 300,
        background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White',
        requirements: reqW('40×50 mm'),
        seoTitle: 'Free Hong Kong Passport Photo Maker | 40×50mm | No Watermark | Free',
        seoDescription: 'Create a compliant Hong Kong passport photo online for free. Correct 40×50mm size, white background. No registration, no watermark.',
        h1: 'Free Hong Kong Passport Photo Maker',
        faq: [
          { q: 'What size is a Hong Kong passport photo?', a: 'Hong Kong passport photos must be 40×50mm with a plain white background.' },
          { q: 'Can I wear glasses?', a: 'No. ImmD Hong Kong does not accept passport photos with glasses.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
      { id: 'hk-id-card', countryId: 'hong-kong', name: 'HKID Card', slug: 'hong-kong-id-card-photo', widthMm: 40, heightMm: 50, widthPx: 472, heightPx: 591, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('40×50 mm'), seoTitle: 'Free Hong Kong HKID Card Photo | 40×50mm | No Watermark | Free', seoDescription: 'Create a compliant Hong Kong Identity Card (HKID) photo online for free. Correct 40×50mm size, white background. No registration, no watermark.', h1: 'Free Hong Kong HKID Card Photo', faq: shortFaq('Hong Kong HKID', 40, 50, 'plain white') },
      { id: 'hk-visa', countryId: 'hong-kong', name: 'Visa', slug: 'hong-kong-visa-photo', widthMm: 40, heightMm: 50, widthPx: 472, heightPx: 591, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('40×50 mm'), seoTitle: 'Free Hong Kong Visa Photo | 40×50mm | No Watermark | Free', seoDescription: 'Create a compliant Hong Kong visa photo online for free. Correct 40×50mm size. No registration, no watermark.', h1: 'Free Hong Kong Visa Photo', faq: shortFaq('Hong Kong Visa', 40, 50, 'plain white') },
    ],
  },
  {
    id: 'taiwan', name: 'Taiwan', flag: '🇹🇼',
    documents: [
      {
        id: 'taiwan-passport', countryId: 'taiwan', name: 'Passport', slug: 'taiwan-passport-photo',
        widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300,
        background: 'Plain light grey', bgColor: '#eeeeee', bgColorLabel: 'Light grey',
        requirements: reqG('35×45 mm'),
        seoTitle: 'Free Taiwan Passport Photo Maker | 35×45mm | No Watermark | Free',
        seoDescription: 'Create a compliant Taiwanese passport photo online for free. Correct 35×45mm size, light grey background. No registration, no watermark.',
        h1: 'Free Taiwan Passport Photo Maker',
        faq: [
          { q: 'What size is a Taiwanese passport photo?', a: 'Taiwanese passport photos must be 35×45mm with a plain light grey background.' },
          { q: 'Can I wear glasses?', a: 'No. Taiwanese passport regulations do not accept glasses.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
      { id: 'taiwan-visa', countryId: 'taiwan', name: 'Visa', slug: 'taiwan-visa-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('35×45 mm'), seoTitle: 'Free Taiwan Visa Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Taiwanese visa photo online for free. Correct 35×45mm size, white background. No registration, no watermark.', h1: 'Free Taiwan Visa Photo', faq: shortFaq('Taiwan Visa', 35, 45, 'plain white') },
    ],
  },
  {
    id: 'pakistan', name: 'Pakistan', flag: '🇵🇰',
    documents: [
      {
        id: 'pakistan-passport', countryId: 'pakistan', name: 'Passport', slug: 'pakistan-passport-photo',
        widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300,
        background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White',
        requirements: reqW('35×45 mm'),
        seoTitle: 'Free Pakistan Passport Photo Maker | 35×45mm | No Watermark | Free',
        seoDescription: 'Create a compliant Pakistani passport photo online for free. Correct 35×45mm size, white background. No registration, no watermark.',
        h1: 'Free Pakistan Passport Photo Maker',
        faq: [
          { q: 'What size is a Pakistani passport photo?', a: 'Pakistani passport photos must be 35×45mm with a plain white background.' },
          { q: 'Can I wear glasses?', a: 'No. NADRA and the Pakistani Passport Office do not accept photos with glasses.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
      { id: 'pakistan-cnic', countryId: 'pakistan', name: 'CNIC / NICOP', slug: 'pakistan-cnic-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('35×45 mm'), seoTitle: 'Free Pakistan CNIC / NICOP Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Pakistan CNIC or NICOP (NADRA) photo online for free. Correct 35×45mm size, white background. No registration, no watermark.', h1: 'Free Pakistan CNIC / NICOP Photo', faq: shortFaq('Pakistan CNIC/NICOP', 35, 45, 'plain white') },
      { id: 'pakistan-drivers-licence', countryId: 'pakistan', name: "Driver's Licence", slug: 'pakistan-drivers-licence-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('35×45 mm'), seoTitle: "Free Pakistan Driver's Licence Photo | 35×45mm | No Watermark | Free", seoDescription: "Create a compliant Pakistani driver's licence photo online for free. Correct 35×45mm size. No registration, no watermark.", h1: "Free Pakistan Driver's Licence Photo", faq: shortFaq("Pakistani Driver's Licence", 35, 45, 'plain white') },
    ],
  },
  {
    id: 'bangladesh', name: 'Bangladesh', flag: '🇧🇩',
    documents: [
      {
        id: 'bangladesh-passport', countryId: 'bangladesh', name: 'Passport', slug: 'bangladesh-passport-photo',
        widthMm: 45, heightMm: 55, widthPx: 531, heightPx: 650, dpi: 300,
        background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White',
        requirements: reqW('45×55 mm'),
        seoTitle: 'Free Bangladesh Passport Photo Maker | 45×55mm | No Watermark | Free',
        seoDescription: 'Create a compliant Bangladeshi passport photo online for free. Correct 45×55mm size, white background. No registration, no watermark.',
        h1: 'Free Bangladesh Passport Photo Maker',
        faq: [
          { q: 'What size is a Bangladeshi passport photo?', a: 'Bangladeshi passport photos must be 45×55mm with a plain white background.' },
          { q: 'Can I wear glasses?', a: 'No. Bangladesh Department of Immigration & Passports does not accept photos with glasses.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
      { id: 'bangladesh-evisa', countryId: 'bangladesh', name: 'e-Visa', slug: 'bangladesh-evisa-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('35×45 mm'), seoTitle: 'Free Bangladesh e-Visa Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Bangladeshi e-Visa photo online for free. Correct 35×45mm size, white background. No registration, no watermark.', h1: 'Free Bangladesh e-Visa Photo', faq: shortFaq('Bangladesh e-Visa', 35, 45, 'plain white') },
    ],
  },
]

const otherCountries: CountrySpec[] = [
  {
    id: 'argentina', name: 'Argentina', flag: '🇦🇷',
    documents: [
      {
        id: 'argentina-passport', countryId: 'argentina', name: 'Passport', slug: 'argentina-passport-photo',
        widthMm: 40, heightMm: 40, widthPx: 472, heightPx: 472, dpi: 300,
        background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White',
        requirements: reqW('40×40 mm'),
        seoTitle: 'Free Argentina Passport Photo Maker | 40×40mm | No Watermark | Free',
        seoDescription: 'Create a compliant Argentine passport photo online for free. Correct 40×40mm size, white background. No registration, no watermark.',
        h1: 'Free Argentina Passport Photo Maker',
        faq: [
          { q: 'What size is an Argentine passport photo?', a: 'Argentine passport photos must be 40×40mm (square format) with a plain white background.' },
          { q: 'Is the Argentine format different from standard?', a: 'Yes. Argentina uses a 40×40mm square format, which differs from the standard 35×45mm rectangular format.' },
          { q: 'Can I wear glasses?', a: 'No. Argentine passport regulations do not accept glasses.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
      { id: 'argentina-id-card', countryId: 'argentina', name: 'DNI / ID Card', slug: 'argentina-dni-photo', widthMm: 40, heightMm: 40, widthPx: 472, heightPx: 472, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('40×40 mm'), seoTitle: 'Free Argentina DNI / ID Card Photo | 40×40mm | No Watermark | Free', seoDescription: 'Create a compliant Argentine DNI (national ID card) photo online for free. Correct 40×40mm size, white background. No registration, no watermark.', h1: 'Free Argentina DNI / ID Card Photo', faq: shortFaq('Argentine DNI', 40, 40, 'plain white') },
      { id: 'argentina-visa', countryId: 'argentina', name: 'Visa', slug: 'argentina-visa-photo', widthMm: 40, heightMm: 40, widthPx: 472, heightPx: 472, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('40×40 mm'), seoTitle: 'Free Argentina Visa Photo | 40×40mm | No Watermark | Free', seoDescription: 'Create a compliant Argentine visa photo online for free. Correct 40×40mm size. No registration, no watermark.', h1: 'Free Argentina Visa Photo', faq: shortFaq('Argentina Visa', 40, 40, 'plain white') },
    ],
  },
  {
    id: 'new-zealand', name: 'New Zealand', flag: '🇳🇿',
    documents: [
      {
        id: 'nz-passport', countryId: 'new-zealand', name: 'Passport', slug: 'new-zealand-passport-photo',
        widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300,
        background: 'Plain white or light grey', bgColor: '#ffffff', bgColorLabel: 'White',
        requirements: reqW('35×45 mm'),
        seoTitle: 'Free New Zealand Passport Photo Maker | 35×45mm | No Watermark | Free',
        seoDescription: 'Create a compliant New Zealand passport photo online for free. Correct 35×45mm size, white background. No registration, no watermark.',
        h1: 'Free New Zealand Passport Photo Maker',
        faq: [
          { q: 'What size is a New Zealand passport photo?', a: 'New Zealand passport photos must be 35×45mm with a plain white or light grey background.' },
          { q: 'Can I wear glasses?', a: 'No. New Zealand passport regulations do not accept glasses.' },
          { q: 'Is my photo uploaded to your servers?', a: 'No. All processing happens in your browser. Your photo never leaves your device.' },
        ],
      },
      { id: 'nz-visa', countryId: 'new-zealand', name: 'Visa / NZeTA', slug: 'new-zealand-visa-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain white or light grey', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('35×45 mm'), seoTitle: 'Free New Zealand Visa / NZeTA Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant New Zealand visa or NZeTA photo online for free. Correct 35×45mm size, white background. No registration, no watermark.', h1: 'Free New Zealand Visa / NZeTA Photo', faq: shortFaq('New Zealand Visa/NZeTA', 35, 45, 'plain white') },
    ],
  },
]

// ── Eastern Europe (EU/Schengen) ──────────────────────────────────────────
const easternEuropeCountries: CountrySpec[] = [
  {
    id: 'bulgaria', name: 'Bulgaria', flag: '🇧🇬',
    documents: [
      { id: 'bulgaria-passport', countryId: 'bulgaria', name: 'Passport', slug: 'bulgaria-passport-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('35×45 mm'), seoTitle: 'Free Bulgaria Passport Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Bulgarian passport photo online for free. Correct 35×45mm size, white background. No registration, no watermark.', h1: 'Free Bulgaria Passport Photo Maker', faq: shortFaq('Bulgarian Passport', 35, 45, 'plain white') },
      { id: 'bulgaria-id-card', countryId: 'bulgaria', name: 'ID Card', slug: 'bulgaria-id-card-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('35×45 mm'), seoTitle: 'Free Bulgaria ID Card Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Bulgarian ID card photo online for free. Correct 35×45mm size, white background. No registration, no watermark.', h1: 'Free Bulgaria ID Card Photo Maker', faq: shortFaq('Bulgarian ID Card', 35, 45, 'plain white') },
    ],
  },
  {
    id: 'croatia', name: 'Croatia', flag: '🇭🇷',
    documents: [
      { id: 'croatia-passport', countryId: 'croatia', name: 'Passport', slug: 'croatia-passport-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('35×45 mm'), seoTitle: 'Free Croatia Passport Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Croatian passport photo online for free. Correct 35×45mm size, white background. No registration, no watermark.', h1: 'Free Croatia Passport Photo Maker', faq: shortFaq('Croatian Passport', 35, 45, 'plain white') },
      { id: 'croatia-id-card', countryId: 'croatia', name: 'ID Card', slug: 'croatia-id-card-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('35×45 mm'), seoTitle: 'Free Croatia ID Card Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Croatian national ID card photo for free. Correct 35×45mm size, white background. No registration, no watermark.', h1: 'Free Croatia ID Card Photo Maker', faq: shortFaq('Croatian ID Card', 35, 45, 'plain white') },
    ],
  },
  {
    id: 'czech-republic', name: 'Czech Republic', flag: '🇨🇿',
    documents: [
      { id: 'czech-passport', countryId: 'czech-republic', name: 'Passport', slug: 'czech-republic-passport-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('35×45 mm'), seoTitle: 'Free Czech Republic Passport Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Czech passport photo online for free. Correct 35×45mm size, white background. No registration, no watermark.', h1: 'Free Czech Republic Passport Photo Maker', faq: shortFaq('Czech Passport', 35, 45, 'plain white') },
      { id: 'czech-id-card', countryId: 'czech-republic', name: 'ID Card', slug: 'czech-republic-id-card-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('35×45 mm'), seoTitle: 'Free Czech Republic ID Card Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Czech national ID card photo online for free. Correct 35×45mm size, white background. No registration, no watermark.', h1: 'Free Czech Republic ID Card Photo Maker', faq: shortFaq('Czech ID Card', 35, 45, 'plain white') },
    ],
  },
  {
    id: 'slovakia', name: 'Slovakia', flag: '🇸🇰',
    documents: [
      { id: 'slovakia-passport', countryId: 'slovakia', name: 'Passport', slug: 'slovakia-passport-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('35×45 mm'), seoTitle: 'Free Slovakia Passport Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Slovak passport photo online for free. Correct 35×45mm size, white background. No registration, no watermark.', h1: 'Free Slovakia Passport Photo Maker', faq: shortFaq('Slovak Passport', 35, 45, 'plain white') },
      { id: 'slovakia-id-card', countryId: 'slovakia', name: 'ID Card', slug: 'slovakia-id-card-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('35×45 mm'), seoTitle: 'Free Slovakia ID Card Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Slovak national ID card photo for free. Correct 35×45mm size, white background. No registration, no watermark.', h1: 'Free Slovakia ID Card Photo Maker', faq: shortFaq('Slovak ID Card', 35, 45, 'plain white') },
    ],
  },
  {
    id: 'slovenia', name: 'Slovenia', flag: '🇸🇮',
    documents: [
      { id: 'slovenia-passport', countryId: 'slovenia', name: 'Passport', slug: 'slovenia-passport-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('35×45 mm'), seoTitle: 'Free Slovenia Passport Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Slovenian passport photo online for free. Correct 35×45mm size, white background. No registration, no watermark.', h1: 'Free Slovenia Passport Photo Maker', faq: shortFaq('Slovenian Passport', 35, 45, 'plain white') },
    ],
  },
  {
    id: 'estonia', name: 'Estonia', flag: '🇪🇪',
    documents: [
      { id: 'estonia-passport', countryId: 'estonia', name: 'Passport', slug: 'estonia-passport-photo', widthMm: 40, heightMm: 50, widthPx: 472, heightPx: 591, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('40×50 mm'), seoTitle: 'Free Estonia Passport Photo | 40×50mm | No Watermark | Free', seoDescription: 'Create a compliant Estonian passport photo online for free. Correct 40×50mm size, white background. No registration, no watermark.', h1: 'Free Estonia Passport Photo Maker', faq: shortFaq('Estonian Passport', 40, 50, 'plain white') },
      { id: 'estonia-id-card', countryId: 'estonia', name: 'ID Card', slug: 'estonia-id-card-photo', widthMm: 40, heightMm: 50, widthPx: 472, heightPx: 591, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('40×50 mm'), seoTitle: 'Free Estonia ID Card Photo | 40×50mm | No Watermark | Free', seoDescription: 'Create a compliant Estonian ID card photo for free. Correct 40×50mm size, white background. No registration, no watermark.', h1: 'Free Estonia ID Card Photo Maker', faq: shortFaq('Estonian ID Card', 40, 50, 'plain white') },
    ],
  },
  {
    id: 'latvia', name: 'Latvia', flag: '🇱🇻',
    documents: [
      { id: 'latvia-passport', countryId: 'latvia', name: 'Passport', slug: 'latvia-passport-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('35×45 mm'), seoTitle: 'Free Latvia Passport Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Latvian passport photo online for free. Correct 35×45mm size, white background. No registration, no watermark.', h1: 'Free Latvia Passport Photo Maker', faq: shortFaq('Latvian Passport', 35, 45, 'plain white') },
    ],
  },
  {
    id: 'lithuania', name: 'Lithuania', flag: '🇱🇹',
    documents: [
      { id: 'lithuania-passport', countryId: 'lithuania', name: 'Passport', slug: 'lithuania-passport-photo', widthMm: 40, heightMm: 60, widthPx: 472, heightPx: 709, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('40×60 mm'), seoTitle: 'Free Lithuania Passport Photo | 40×60mm | No Watermark | Free', seoDescription: 'Create a compliant Lithuanian passport photo online for free. Correct 40×60mm size, white background. No registration, no watermark.', h1: 'Free Lithuania Passport Photo Maker', faq: shortFaq('Lithuanian Passport', 40, 60, 'plain white') },
    ],
  },
]

// ── Balkans ───────────────────────────────────────────────────────────────
const balkanCountries: CountrySpec[] = [
  {
    id: 'serbia', name: 'Serbia', flag: '🇷🇸',
    documents: [
      { id: 'serbia-passport', countryId: 'serbia', name: 'Passport', slug: 'serbia-passport-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('35×45 mm'), seoTitle: 'Free Serbia Passport Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Serbian passport photo online for free. Correct 35×45mm size, white background. No registration, no watermark.', h1: 'Free Serbia Passport Photo Maker', faq: shortFaq('Serbian Passport', 35, 45, 'plain white') },
      { id: 'serbia-id-card', countryId: 'serbia', name: 'ID Card', slug: 'serbia-id-card-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('35×45 mm'), seoTitle: 'Free Serbia ID Card Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Serbian national ID card photo for free. Correct 35×45mm size, white background. No registration, no watermark.', h1: 'Free Serbia ID Card Photo Maker', faq: shortFaq('Serbian ID Card', 35, 45, 'plain white') },
    ],
  },
  {
    id: 'bosnia', name: 'Bosnia & Herzegovina', flag: '🇧🇦',
    documents: [
      { id: 'bosnia-passport', countryId: 'bosnia', name: 'Passport', slug: 'bosnia-passport-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('35×45 mm'), seoTitle: 'Free Bosnia Passport Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Bosnian passport photo online for free. Correct 35×45mm size, white background. No registration, no watermark.', h1: 'Free Bosnia & Herzegovina Passport Photo Maker', faq: shortFaq('Bosnian Passport', 35, 45, 'plain white') },
    ],
  },
  {
    id: 'montenegro', name: 'Montenegro', flag: '🇲🇪',
    documents: [
      { id: 'montenegro-passport', countryId: 'montenegro', name: 'Passport', slug: 'montenegro-passport-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('35×45 mm'), seoTitle: 'Free Montenegro Passport Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Montenegrin passport photo online for free. Correct 35×45mm size, white background. No registration, no watermark.', h1: 'Free Montenegro Passport Photo Maker', faq: shortFaq('Montenegrin Passport', 35, 45, 'plain white') },
    ],
  },
  {
    id: 'north-macedonia', name: 'North Macedonia', flag: '🇲🇰',
    documents: [
      { id: 'north-macedonia-passport', countryId: 'north-macedonia', name: 'Passport', slug: 'north-macedonia-passport-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('35×45 mm'), seoTitle: 'Free North Macedonia Passport Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant North Macedonian passport photo for free. Correct 35×45mm size, white background. No registration, no watermark.', h1: 'Free North Macedonia Passport Photo Maker', faq: shortFaq('North Macedonian Passport', 35, 45, 'plain white') },
    ],
  },
  {
    id: 'albania', name: 'Albania', flag: '🇦🇱',
    documents: [
      { id: 'albania-passport', countryId: 'albania', name: 'Passport', slug: 'albania-passport-photo', widthMm: 40, heightMm: 50, widthPx: 472, heightPx: 591, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('40×50 mm'), seoTitle: 'Free Albania Passport Photo | 40×50mm | No Watermark | Free', seoDescription: 'Create a compliant Albanian passport photo online for free. Correct 40×50mm size, white background. No registration, no watermark.', h1: 'Free Albania Passport Photo Maker', faq: shortFaq('Albanian Passport', 40, 50, 'plain white') },
    ],
  },
  {
    id: 'moldova', name: 'Moldova', flag: '🇲🇩',
    documents: [
      { id: 'moldova-passport', countryId: 'moldova', name: 'Passport', slug: 'moldova-passport-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('35×45 mm'), seoTitle: 'Free Moldova Passport Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Moldovan passport photo online for free. Correct 35×45mm size, white background. No registration, no watermark.', h1: 'Free Moldova Passport Photo Maker', faq: shortFaq('Moldovan Passport', 35, 45, 'plain white') },
    ],
  },
]

// ── Former USSR / CIS ─────────────────────────────────────────────────────
const cisCountries: CountrySpec[] = [
  {
    id: 'kazakhstan', name: 'Kazakhstan', flag: '🇰🇿',
    documents: [
      { id: 'kazakhstan-passport', countryId: 'kazakhstan', name: 'Passport', slug: 'kazakhstan-passport-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('35×45 mm'), seoTitle: 'Free Kazakhstan Passport Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Kazakhstani passport photo online for free. Correct 35×45mm size, white background. No registration, no watermark.', h1: 'Free Kazakhstan Passport Photo Maker', faq: shortFaq('Kazakhstani Passport', 35, 45, 'plain white') },
      { id: 'kazakhstan-id-card', countryId: 'kazakhstan', name: 'ID Card', slug: 'kazakhstan-id-card-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('35×45 mm'), seoTitle: 'Free Kazakhstan ID Card Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Kazakhstani national ID card photo for free. Correct 35×45mm size, white background. No registration, no watermark.', h1: 'Free Kazakhstan ID Card Photo Maker', faq: shortFaq('Kazakhstani ID Card', 35, 45, 'plain white') },
    ],
  },
  {
    id: 'belarus', name: 'Belarus', flag: '🇧🇾',
    documents: [
      { id: 'belarus-passport', countryId: 'belarus', name: 'Passport', slug: 'belarus-passport-photo', widthMm: 40, heightMm: 50, widthPx: 472, heightPx: 591, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('40×50 mm'), seoTitle: 'Free Belarus Passport Photo | 40×50mm | No Watermark | Free', seoDescription: 'Create a compliant Belarusian passport photo online for free. Correct 40×50mm size, white background. No registration, no watermark.', h1: 'Free Belarus Passport Photo Maker', faq: shortFaq('Belarusian Passport', 40, 50, 'plain white') },
    ],
  },
  {
    id: 'georgia', name: 'Georgia', flag: '🇬🇪',
    documents: [
      { id: 'georgia-passport', countryId: 'georgia', name: 'Passport', slug: 'georgia-passport-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('35×45 mm'), seoTitle: 'Free Georgia Passport Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Georgian passport photo online for free. Correct 35×45mm size, white background. No registration, no watermark.', h1: 'Free Georgia Passport Photo Maker', faq: shortFaq('Georgian Passport', 35, 45, 'plain white') },
      { id: 'georgia-visa', countryId: 'georgia', name: 'Visa', slug: 'georgia-visa-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('35×45 mm'), seoTitle: 'Free Georgia Visa Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Georgian visa photo online for free. Correct 35×45mm size, white background. No registration, no watermark.', h1: 'Free Georgia Visa Photo Maker', faq: shortFaq('Georgia Visa', 35, 45, 'plain white') },
    ],
  },
  {
    id: 'armenia', name: 'Armenia', flag: '🇦🇲',
    documents: [
      { id: 'armenia-passport', countryId: 'armenia', name: 'Passport', slug: 'armenia-passport-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('35×45 mm'), seoTitle: 'Free Armenia Passport Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Armenian passport photo online for free. Correct 35×45mm size, white background. No registration, no watermark.', h1: 'Free Armenia Passport Photo Maker', faq: shortFaq('Armenian Passport', 35, 45, 'plain white') },
    ],
  },
  {
    id: 'azerbaijan', name: 'Azerbaijan', flag: '🇦🇿',
    documents: [
      { id: 'azerbaijan-passport', countryId: 'azerbaijan', name: 'Passport', slug: 'azerbaijan-passport-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('35×45 mm'), seoTitle: 'Free Azerbaijan Passport Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Azerbaijani passport photo online for free. Correct 35×45mm size, white background. No registration, no watermark.', h1: 'Free Azerbaijan Passport Photo Maker', faq: shortFaq('Azerbaijani Passport', 35, 45, 'plain white') },
      { id: 'azerbaijan-visa', countryId: 'azerbaijan', name: 'Visa', slug: 'azerbaijan-visa-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('35×45 mm'), seoTitle: 'Free Azerbaijan Visa Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Azerbaijani visa photo online for free. Correct 35×45mm size, white background. No registration, no watermark.', h1: 'Free Azerbaijan Visa Photo Maker', faq: shortFaq('Azerbaijan Visa', 35, 45, 'plain white') },
    ],
  },
  {
    id: 'uzbekistan', name: 'Uzbekistan', flag: '🇺🇿',
    documents: [
      { id: 'uzbekistan-passport', countryId: 'uzbekistan', name: 'Passport', slug: 'uzbekistan-passport-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('35×45 mm'), seoTitle: 'Free Uzbekistan Passport Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Uzbekistani passport photo online for free. Correct 35×45mm size, white background. No registration, no watermark.', h1: 'Free Uzbekistan Passport Photo Maker', faq: shortFaq('Uzbekistani Passport', 35, 45, 'plain white') },
    ],
  },
  {
    id: 'kyrgyzstan', name: 'Kyrgyzstan', flag: '🇰🇬',
    documents: [
      { id: 'kyrgyzstan-passport', countryId: 'kyrgyzstan', name: 'Passport', slug: 'kyrgyzstan-passport-photo', widthMm: 40, heightMm: 60, widthPx: 472, heightPx: 709, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('40×60 mm'), seoTitle: 'Free Kyrgyzstan Passport Photo | 40×60mm | No Watermark | Free', seoDescription: 'Create a compliant Kyrgyzstani passport photo online for free. Correct 40×60mm size, white background. No registration, no watermark.', h1: 'Free Kyrgyzstan Passport Photo Maker', faq: shortFaq('Kyrgyzstani Passport', 40, 60, 'plain white') },
    ],
  },
]

// ── North Africa / MENA additions ─────────────────────────────────────────
const northAfricaCountries: CountrySpec[] = [
  {
    id: 'morocco', name: 'Morocco', flag: '🇲🇦',
    documents: [
      { id: 'morocco-passport', countryId: 'morocco', name: 'Passport', slug: 'morocco-passport-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('35×45 mm'), seoTitle: 'Free Morocco Passport Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Moroccan passport photo online for free. Correct 35×45mm size, white background. No registration, no watermark.', h1: 'Free Morocco Passport Photo Maker', faq: shortFaq('Moroccan Passport', 35, 45, 'plain white') },
      { id: 'morocco-visa', countryId: 'morocco', name: 'Visa', slug: 'morocco-visa-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('35×45 mm'), seoTitle: 'Free Morocco Visa Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Moroccan visa photo online for free. Correct 35×45mm size, white background. No registration, no watermark.', h1: 'Free Morocco Visa Photo Maker', faq: shortFaq('Morocco Visa', 35, 45, 'plain white') },
    ],
  },
  {
    id: 'tunisia', name: 'Tunisia', flag: '🇹🇳',
    documents: [
      { id: 'tunisia-passport', countryId: 'tunisia', name: 'Passport', slug: 'tunisia-passport-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('35×45 mm'), seoTitle: 'Free Tunisia Passport Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Tunisian passport photo online for free. Correct 35×45mm size, white background. No registration, no watermark.', h1: 'Free Tunisia Passport Photo Maker', faq: shortFaq('Tunisian Passport', 35, 45, 'plain white') },
    ],
  },
  {
    id: 'algeria', name: 'Algeria', flag: '🇩🇿',
    documents: [
      { id: 'algeria-passport', countryId: 'algeria', name: 'Passport', slug: 'algeria-passport-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('35×45 mm'), seoTitle: 'Free Algeria Passport Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Algerian passport photo online for free. Correct 35×45mm size, white background. No registration, no watermark.', h1: 'Free Algeria Passport Photo Maker', faq: shortFaq('Algerian Passport', 35, 45, 'plain white') },
    ],
  },
  {
    id: 'jordan', name: 'Jordan', flag: '🇯🇴',
    documents: [
      { id: 'jordan-passport', countryId: 'jordan', name: 'Passport', slug: 'jordan-passport-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('35×45 mm'), seoTitle: 'Free Jordan Passport Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Jordanian passport photo online for free. Correct 35×45mm size, white background. No registration, no watermark.', h1: 'Free Jordan Passport Photo Maker', faq: shortFaq('Jordanian Passport', 35, 45, 'plain white') },
      { id: 'jordan-visa', countryId: 'jordan', name: 'Visa', slug: 'jordan-visa-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('35×45 mm'), seoTitle: 'Free Jordan Visa Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Jordanian visa photo online for free. Correct 35×45mm size, white background. No registration, no watermark.', h1: 'Free Jordan Visa Photo Maker', faq: shortFaq('Jordan Visa', 35, 45, 'plain white') },
    ],
  },
  {
    id: 'lebanon', name: 'Lebanon', flag: '🇱🇧',
    documents: [
      { id: 'lebanon-passport', countryId: 'lebanon', name: 'Passport', slug: 'lebanon-passport-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('35×45 mm'), seoTitle: 'Free Lebanon Passport Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Lebanese passport photo online for free. Correct 35×45mm size, white background. No registration, no watermark.', h1: 'Free Lebanon Passport Photo Maker', faq: shortFaq('Lebanese Passport', 35, 45, 'plain white') },
    ],
  },
  {
    id: 'kenya', name: 'Kenya', flag: '🇰🇪',
    documents: [
      { id: 'kenya-passport', countryId: 'kenya', name: 'Passport', slug: 'kenya-passport-photo', widthMm: 51, heightMm: 51, widthPx: 600, heightPx: 600, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('2×2 inch (51×51 mm)'), seoTitle: 'Free Kenya Passport Photo | 2×2 inch | No Watermark | Free', seoDescription: 'Create a compliant Kenyan passport photo online for free. Correct 2×2 inch (51×51mm) size, white background. No registration, no watermark.', h1: 'Free Kenya Passport Photo Maker', faq: shortFaq('Kenyan Passport', 51, 51, 'plain white') },
      { id: 'kenya-evisa', countryId: 'kenya', name: 'eVisa', slug: 'kenya-evisa-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('35×45 mm'), seoTitle: 'Free Kenya eVisa Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Kenya eVisa photo online for free. Correct 35×45mm size, white background. No registration, no watermark.', h1: 'Free Kenya eVisa Photo Maker', faq: shortFaq('Kenya eVisa', 35, 45, 'plain white') },
    ],
  },
]

// ── South & Southeast Asia additions ──────────────────────────────────────
const southAsiaCountries: CountrySpec[] = [
  {
    id: 'nepal', name: 'Nepal', flag: '🇳🇵',
    documents: [
      { id: 'nepal-passport', countryId: 'nepal', name: 'Passport', slug: 'nepal-passport-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('35×45 mm'), seoTitle: 'Free Nepal Passport Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Nepalese passport photo online for free. Correct 35×45mm size, white background. No registration, no watermark.', h1: 'Free Nepal Passport Photo Maker', faq: shortFaq('Nepalese Passport', 35, 45, 'plain white') },
      { id: 'nepal-visa', countryId: 'nepal', name: 'Visa', slug: 'nepal-visa-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('35×45 mm'), seoTitle: 'Free Nepal Visa Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Nepal visa photo online for free. Correct 35×45mm size, white background. No registration, no watermark.', h1: 'Free Nepal Visa Photo Maker', faq: shortFaq('Nepal Visa', 35, 45, 'plain white') },
    ],
  },
  {
    id: 'sri-lanka', name: 'Sri Lanka', flag: '🇱🇰',
    documents: [
      { id: 'sri-lanka-passport', countryId: 'sri-lanka', name: 'Passport', slug: 'sri-lanka-passport-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('35×45 mm'), seoTitle: 'Free Sri Lanka Passport Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Sri Lankan passport photo online for free. Correct 35×45mm size, white background. No registration, no watermark.', h1: 'Free Sri Lanka Passport Photo Maker', faq: shortFaq('Sri Lankan Passport', 35, 45, 'plain white') },
      { id: 'sri-lanka-visa', countryId: 'sri-lanka', name: 'eVisa / ETA', slug: 'sri-lanka-visa-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('35×45 mm'), seoTitle: 'Free Sri Lanka eVisa / ETA Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Sri Lanka eVisa or ETA photo online for free. Correct 35×45mm size, white background. No registration, no watermark.', h1: 'Free Sri Lanka eVisa / ETA Photo Maker', faq: shortFaq('Sri Lanka eVisa/ETA', 35, 45, 'plain white') },
    ],
  },
  {
    id: 'myanmar', name: 'Myanmar', flag: '🇲🇲',
    documents: [
      { id: 'myanmar-passport', countryId: 'myanmar', name: 'Passport', slug: 'myanmar-passport-photo', widthMm: 38, heightMm: 48, widthPx: 449, heightPx: 567, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('38×48 mm'), seoTitle: 'Free Myanmar Passport Photo | 38×48mm | No Watermark | Free', seoDescription: 'Create a compliant Myanmar passport photo online for free. Correct 38×48mm size, white background. No registration, no watermark.', h1: 'Free Myanmar Passport Photo Maker', faq: shortFaq('Myanmar Passport', 38, 48, 'plain white') },
      { id: 'myanmar-visa', countryId: 'myanmar', name: 'eVisa', slug: 'myanmar-evisa-photo', widthMm: 38, heightMm: 48, widthPx: 449, heightPx: 567, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('38×48 mm'), seoTitle: 'Free Myanmar eVisa Photo | 38×48mm | No Watermark | Free', seoDescription: 'Create a compliant Myanmar eVisa photo online for free. Correct 38×48mm size, white background. No registration, no watermark.', h1: 'Free Myanmar eVisa Photo Maker', faq: shortFaq('Myanmar eVisa', 38, 48, 'plain white') },
    ],
  },
  {
    id: 'cambodia', name: 'Cambodia', flag: '🇰🇭',
    documents: [
      { id: 'cambodia-passport', countryId: 'cambodia', name: 'Passport', slug: 'cambodia-passport-photo', widthMm: 40, heightMm: 60, widthPx: 472, heightPx: 709, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('40×60 mm'), seoTitle: 'Free Cambodia Passport Photo | 40×60mm | No Watermark | Free', seoDescription: 'Create a compliant Cambodian passport photo online for free. Correct 40×60mm size, white background. No registration, no watermark.', h1: 'Free Cambodia Passport Photo Maker', faq: shortFaq('Cambodian Passport', 40, 60, 'plain white') },
      { id: 'cambodia-evisa', countryId: 'cambodia', name: 'eVisa', slug: 'cambodia-evisa-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('35×45 mm'), seoTitle: 'Free Cambodia eVisa Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Cambodia eVisa photo online for free. Correct 35×45mm size, white background. No registration, no watermark.', h1: 'Free Cambodia eVisa Photo Maker', faq: shortFaq('Cambodia eVisa', 35, 45, 'plain white') },
    ],
  },
]

// ── Latin America additions ───────────────────────────────────────────────
const latinAmericaCountries: CountrySpec[] = [
  {
    id: 'colombia', name: 'Colombia', flag: '🇨🇴',
    documents: [
      { id: 'colombia-passport', countryId: 'colombia', name: 'Passport', slug: 'colombia-passport-photo', widthMm: 30, heightMm: 40, widthPx: 354, heightPx: 472, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('30×40 mm'), seoTitle: 'Free Colombia Passport Photo | 30×40mm | No Watermark | Free', seoDescription: 'Create a compliant Colombian passport photo online for free. Correct 30×40mm size, white background. No registration, no watermark.', h1: 'Free Colombia Passport Photo Maker', faq: shortFaq('Colombian Passport', 30, 40, 'plain white') },
      { id: 'colombia-visa', countryId: 'colombia', name: 'Visa', slug: 'colombia-visa-photo', widthMm: 30, heightMm: 40, widthPx: 354, heightPx: 472, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('30×40 mm'), seoTitle: 'Free Colombia Visa Photo | 30×40mm | No Watermark | Free', seoDescription: 'Create a compliant Colombian visa photo online for free. Correct 30×40mm size, white background. No registration, no watermark.', h1: 'Free Colombia Visa Photo Maker', faq: shortFaq('Colombia Visa', 30, 40, 'plain white') },
    ],
  },
  {
    id: 'peru', name: 'Peru', flag: '🇵🇪',
    documents: [
      { id: 'peru-passport', countryId: 'peru', name: 'Passport', slug: 'peru-passport-photo', widthMm: 35, heightMm: 45, widthPx: 413, heightPx: 531, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('35×45 mm'), seoTitle: 'Free Peru Passport Photo | 35×45mm | No Watermark | Free', seoDescription: 'Create a compliant Peruvian passport photo online for free. Correct 35×45mm size, white background. No registration, no watermark.', h1: 'Free Peru Passport Photo Maker', faq: shortFaq('Peruvian Passport', 35, 45, 'plain white') },
    ],
  },
  {
    id: 'chile', name: 'Chile', flag: '🇨🇱',
    documents: [
      { id: 'chile-passport', countryId: 'chile', name: 'Passport', slug: 'chile-passport-photo', widthMm: 45, heightMm: 45, widthPx: 532, heightPx: 532, dpi: 300, background: 'Plain white', bgColor: '#ffffff', bgColorLabel: 'White', requirements: reqW('45×45 mm'), seoTitle: 'Free Chile Passport Photo | 45×45mm | No Watermark | Free', seoDescription: 'Create a compliant Chilean passport photo online for free. Correct 45×45mm size, white background. No registration, no watermark.', h1: 'Free Chile Passport Photo Maker', faq: shortFaq('Chilean Passport', 45, 45, 'plain white') },
    ],
  },
]

export const allCountries = [
  ...countries,
  ...extraCountries,
  ...newCountries,
  ...euroCountries,
  ...middleEastAfricaCountries,
  ...asiaCountries,
  ...otherCountries,
  ...easternEuropeCountries,
  ...balkanCountries,
  ...cisCountries,
  ...northAfricaCountries,
  ...southAsiaCountries,
  ...latinAmericaCountries,
]

export const allDocuments: DocumentSpec[] = allCountries.flatMap((c) => c.documents)

export const documentsBySlug = Object.fromEntries(allDocuments.map((d) => [d.slug, d]))

export const countriesById = Object.fromEntries(allCountries.map((c) => [c.id, c]))

export const defaultDocument = countries[0].documents[0]
