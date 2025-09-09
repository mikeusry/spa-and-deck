// FAQ data for schema markup and SEO
export const FAQ_DATA = [
  {
    question: "What hot tub brands do you carry?",
    answer: "We are authorized dealers for Hot Spring Spas, Caldera Spas, and Endless Pools. These are industry-leading brands known for quality, reliability, and innovation. We also carry saunas and complete spa accessories."
  },
  {
    question: "Do you provide hot tub installation services?",
    answer: "Yes, we provide complete professional installation services throughout North Georgia. Our experienced team handles site preparation, electrical connections, placement, and startup for both our Blue Ridge and Blairsville service areas."
  },
  {
    question: "What areas do you serve in North Georgia?",
    answer: "We serve a 50-mile radius from both our Blue Ridge and Blairsville locations, including Hiawassee, Young Harris, Dahlonega, Helen, Cleveland, Murphy NC, and Hayesville NC."
  },
  {
    question: "Do you service hot tubs from other dealers?",
    answer: "Yes, we provide maintenance and repair services for most hot tub brands, not just the ones we sell. Our certified technicians have over 40 years of experience with various spa manufacturers."
  },
  {
    question: "What financing options are available?",
    answer: "We offer competitive financing options to make your spa purchase more affordable. Our team can discuss various payment plans and financing terms during your consultation."
  },
  {
    question: "How often should I service my hot tub?",
    answer: "We recommend professional service every 3-4 months for optimal performance. Regular maintenance includes water testing, filter cleaning, chemical balancing, and equipment inspection to extend your spa's life."
  },
  {
    question: "Can I see working hot tubs before purchasing?",
    answer: "Absolutely! Both our Blue Ridge and Blairsville showrooms feature multiple working display models where you can experience the jets, lighting, and features before making your decision."
  },
  {
    question: "What's included with a new hot tub purchase?",
    answer: "New hot tub purchases include delivery, professional installation, startup service, water care kit, owner training, and manufacturer warranty. We also provide ongoing support and maintenance services."
  }
] as const;

export const generateFAQSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": FAQ_DATA.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});