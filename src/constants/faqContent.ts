export interface FAQ {
  question: string;
  answer: string;
}

export interface FAQCategory {
  id: string;
  label: string;
  questions: FAQ[];
}

export const FAQ_CATEGORIES: FAQCategory[] = [
  {
    id: "general",
    label: "General",
    questions: [
      {
        question: "When will Reeach fully launch?",
        answer:
          "Presently, Reeach has launched with RUIS - Reeach's Universal Inventory System, which will is the foundational layer for Reeach's product availability intelligence. By June 2026, Reeach will be available for Manufacturers, Distributors, Retailers and consumers. The first 500 people/businesses on the waitlist get 24-hour early access. After that, it's available for everyone in Nigeria - with emphasis on the busiest cities first.",
      },
      {
        question: "What makes Reeach different from Google Shopping, Jumia, or Konga?",
        answer:
          "Google shows what's online. Jumia shows what's listed on their platform. Konga is an online marketplace. Reeach shows what's actually available near you in physical retail, right now. We understand African retail—small shops, neighborhood vendors, informal commerce—not just malls and centralized e-commerce. We're hyper-local, real-time, and verified.",
      },
      {
        question: "How is Reeach different from Klasha or other SME platforms?",
        answer:
          "Klasha focuses on payments and financial services for SMEs. Reeach is the full commerce and intelligence operating system. Discovery, payment, records, supply chain management, AND market intelligence. We're not just payments—we're reimagining how retail works.",
      },
    ],
  },
  {
    id: "manufacturers-distributors",
    label: "Manufacturers/Distributors",
    questions: [
      {
        question: "When will Reeach fully launch?",
        answer:
          "Presently, Reeach has launched with RUIS - Reeach's Universal Inventory System, which will is the foundational layer for Reeach's product availability intelligence. By June 2026, Reeach will be available for Manufacturers, Distributors, Retailers and consumers. The first 500 people/businesses on the waitlist get 24-hour early access. After that, it's available for everyone in Nigeria - with emphasis on the busiest cities first.",
      },
      {
        question: "What is SCHAIN by Reeach?",
        answer:
          "SCHAIN™ is the supply chain intelligence and management platform.\n\nFor manufacturers, it's how you maintain your products on RUIS, manage your distribution network, track supply, see product performance, and understand market demand.\n\nFor distributors, it's how you manage relationships with manufacturers, supply retailers, understand inventory levels, and optimize your supply chain.",
      },
      {
        question: "What can manufacturers do on SCHAIN by Reeach?",
        answer:
          "Manufacturers can maintain their product portfolio on RUIS. Connect with Reeach-vetted distributors. Mirror your supply to them digitally. Track where your products are. See how they perform. Access real demand intelligence. Make better forecasting and production decisions.",
      },
    ],
  },
  {
    id: "smes-retailers",
    label: "SMEs/Retailers",
    questions: [
      {
        question: "When will Reeach fully launch?",
        answer:
          "Presently, Reeach has launched with RUIS - Reeach's Universal Inventory System, which will is the foundational layer for Reeach's product availability intelligence. By June 2026, Reeach will be available for Manufacturers, Distributors, Retailers and consumers. The first 500 people/businesses on the waitlist get 24-hour early access. After that, it's available for everyone in Nigeria - with emphasis on the busiest cities first.",
      },
      {
        question: "What is SAYLES?",
        answer:
          "SAYLES is how retailers become part of Reeach's ecosystem. You stock products from RUIS (our universal product database). You manage your inventory, your team, your communications, your availability. You accept payments from customers, too, but you get business insights. You grow.",
      },
      {
        question: "How do customers find me/my business on Reeach?",
        answer:
          "When you stock products on SAYLES (products from RUIS), they appear in Reeach searches. When someone searches \"running shoes,\" your store appears if you have them in stock. You're found by real customers actively searching for what you sell.",
      },
      {
        question: "How do I add my inventory",
        answer:
          "You'll log into SAYLES, access Reeach's universal product database and search for what you physically have. Add them to your digital store. Sell your products. Then?!! You can also request manufacturers to be profiled by your requests. After that you search for them. You supply chain intelligence auto-updates as you appear in the visibility of other retailers that stock what you stock. Everything is SAYLES-powered, informed by industry.",
      },
      {
        question: "How much does SAYLES cost?",
        answer:
          "Launch pricing for first 100 retailers: ₦6,000/month. No setup fees. No hidden costs. Month-to-month. Cancel anytime. Basic support included.",
      },
    ],
  },
  {
    id: "consumers",
    label: "Consumers",
    questions: [
      {
        question: "When will Reeach fully launch?",
        answer:
          "Presently, Reeach has launched with RUIS - Reeach's Universal Inventory System, which will is the foundational layer for Reeach's product availability intelligence. By June 2026, Reeach will be available for Manufacturers, Distributors, Retailers and consumers. The first 500 people/businesses on the waitlist get 24-hour early access. After that, it's available for everyone in Nigeria - with emphasis on the busiest cities first.",
      },
      {
        question: "Is this just another shopping app?",
        answer:
          "No. Reeach is fundamentally different. It's discovery + payment + records all in one seamless experience. You find products. You buy them. Instantly. In store or searching for it. QR code or request for them to be delivered to you (if delivery has been activated in your city). You get a digital receipt. Everything is recorded. No other app does this—and it changes shopping completely.",
      },
      {
        question: "How would I buy something with Reeach?",
        answer:
          "Find a product on the app. Or go to the store that has it. Scan their Sayles Point QR code. Select \"Pay for Product.\" Choose your item. See its price. Pay with PIA or biometrics. Get receipt instantly. Total time: about 30 seconds.",
      },
      {
        question: "What if the store is far away?",
        answer:
          "We're working on delivery partnerships so you can have items brought to you.",
      },
      {
        question: "How much does Reeach cost?",
        answer:
          "Downloading and using the app is free. When you buy through Reeach, there's a small transaction fee (typically 1.5%). Included in the total price you see. That's it.",
      },
    ],
  },
];
