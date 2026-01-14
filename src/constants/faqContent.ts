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
       {
        question: "Will Reeach be tracking my location constantly?",
        answer:
          "No. We’ll only use your location when you explicitly search (to show products and services near you). You control location permissions. We don't track you between sessions. We will never sell location data.",
      },
      {
        question: "What's your privacy policy?",
        answer:
          "See our full Privacy Policy. TL;DR: Minimal data collection. No selling your data. Bank-level security. You control your information.",
      },
      {
        question: "Can I suggest a feature or report a bug?",
        answer:
          "Yes. Email us at operations@reeach.co. We read and respond to every message.",
      },
       {
        question: "I have another question not covered here.",
        answer:
          "Email operations@reeach.co.  We'll respond within 24 hours.",
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
          "SCHAIN is the supply chain intelligence and management platform.\n\nFor manufacturers, it's how you maintain your products on RUIS, manage your distribution network, track supply, see product performance, and understand market demand.\n\nFor distributors, it's how you manage relationships with manufacturers, supply retailers, understand inventory levels, and optimize your supply chain.",
      },
      {
        question: "What can manufacturers do on SCHAIN by Reeach?",
        answer:
          "Manufacturers can maintain their product portfolio on RUIS. Connect with Reeach-vetted distributors. Mirror your supply to them digitally. Track where your products are. See how they perform. Access real demand intelligence. Make better forecasting and production decisions.",
      },
      {
        question: "What can distributors do on SCHAIN by Reeach?",
        answer:
          "Distributors can find and connect with manufacturers whose products you want to distribute. Manage supply from multiple manufacturers. Find and connect with retailers. Digitally supply retailers—your supply automatically appears in their SAYLES. See retailer inventory levels. Receive automatic supply prompts. Manage relationships. Track supply records.",
      },
      {
        question: "How do manufacturers supply distributors digitally?",
        answer:
          "On SCHAIN, you create digital records of the supply you've given to each distributor. This is the \"digital mirror\" of your physical supply. It's tracked, verified, and recorded. When a distributor supplies a retailer, that also appears on SCHAIN.",
      },
      {
        question: "Will SCHAIN replace my current ERP or inventory system?",
        answer:
          "No. SCHAIN integrates with what you have. Your warehouse management, order systems, logistics—everything stays the same. SCHAIN is the visibility layer you're missing.",
      },
      {
        question: "How is my supply chain data kept private?",
        answer:
          "Your data is yours. You see your inventory, your sales, your customers. You might see competitive benchmarking (how your SKUs perform vs. similar products), but not detailed competitor data. You control what's visible.",
      },
      {
        question: "How often is the data updated?",
        answer:
          "Real-time. As retailers update inventory and customers make purchases, your SCHAIN dashboard reflects current market state.",
      },
      {
        question: "What's the difference between retailer orders and actual sales?",
        answer:
          "Retailer orders show what they asked for (often inflated by buffer stock). SCHAIN shows what they actually sold. Consumer demand. Real market signals. This insight that changes decision-making.",
      },
      {
        question: "How does this help with production planning?",
        answer:
          "This helps you stop guessing. You see actual end-consumer demand. Which categories are hot? Which SKUs are stalling? Where are you undersupplied? Where are you overstocked? This drives smarter production decisions, less waste, higher margins.",
      },
      {
        question: "Can I forecast better with SCHAIN?",
        answer:
          "Yes. Demand forecasting based on real customer behavior is exponentially more accurate than based on retailer orders. Reduce overstock. Eliminate stockouts. Better planning. Better margins.",
      },
      {
        question: "How can I use SCHAIN for expansion?",
        answer:
          "SCHAIN shows you where demand is concentrated. Where you're undersupplied. Which regions are ready for growth. Which new markets to enter. Expansion becomes data-driven instead of guesswork.",
      },
      {
        question: "Can I see competitive products?",
        answer:
          "You'll see how competing products perform in your category. Search volume. Sales patterns. Price positioning. But not confidential competitor data. Enough to inform strategy, not enough to be spyware.",
      },
      {
        question: "What kind of data does SCHAIN show manufacturers?",
        answer:
          "Real-time inventory across your distribution network. Sales by SKU and location. Customer demand patterns (what's searched for, what converts). Competitive insights. Regional variations. Seasonal trends. Geographic expansion opportunities. Everything you need to see and plan.",
      },
      {
        question: "What kind of data does SCHAIN show distributors?",
        answer:
          "Manufacturer product portfolios. Your supply history. Retailer inventory levels (from your supply). Automatic supply prompts when retailers run low. Retailer sales patterns. Everything you need to optimize supply chain.",
      },
      {
        question: "How accurate is the data?",
        answer:
          "Our AI teams African markets in real time. Data comes from actual transactions—real supply, real demand, real consumer behavior. More accurate than quarterly reports or estimates. Some lag exists (data updates as transactions happen), but it's significantly more current than typical retail or traditional supply chain data.",
      },
      {
        question: "How does SCHAIN get data from retailers?",
        answer:
          "When retailers use Reeach and accept payments from customers via Reeach, that transaction data flows into SCHAIN. When they update inventory, that also flows in. So the data is automatic—no manual reporting from retailers. It's real transaction data.",
      },
      {
        question: "How does SCHAIN help with distributor relationships?",
        answer:
          "You have data on distributor performance. You can see which distributors maximize your product visibility. Which ones move volume fastest. Which ones underperform. You come to conversations with data, not guesses.",
      },
      {
        question: "Can I find new distributors on SCHAIN?",
        answer:
          "Yes, manufacturers can browse available distributors and connect with them. Similarly, distributors can find manufacturers whose products they want to distribute.",
      },
      {
        question: "Can retailers find distributors?",
        answer:
          "Yes. Retailers can see available distributors on SCHAIN and request supply connections.",
      },
      {
        question: "Can I see competitive products?",
        answer:
          "You'll see how competing products perform in your category. Search volume. Sales patterns. Price positioning. But not confidential competitor data. Enough to inform strategy, not enough to be spyware.",
      },
      {
        question: "How does SCHAIN help with retail negotiations?",
        answer:
          "Come to meetings with data. \"This location's demand is 40% higher than you've ordered.\" \"Customers are searching for this variant but you don't stock it.\" \"Your competitor is outselling you in this category.\" backed by evidence. Conversations become fact-based.",
      },
      {
        question: "What about seasonal demand prediction?",
        answer:
          "SCHAIN learns seasonal patterns from history and customer search behavior. Predict demand spikes before they happen. 2-4 weeks advance warning on surges. Plan production accordingly.",
      },
      {
        question: "Can I integrate SCHAIN with my systems?",
        answer:
          "Yes. API access will eventually be available for authorized integrations. When this happens, real-time data will feed into your systems.",
      },
      {
        question: "What about supply security and grey markets?",
        answer:
          "SCHAIN can flag suspicious supply patterns and sales patterns that might indicate counterfeit activity or unauthorized channels. Early warning system for brand integrity issues.",
      },
      {
        question: "Do I have to commit to a long-term contract?",
        answer:
          "We'll discuss terms based on your needs. But we focus on demonstrating value—you'll want to stay because it works.",
      },
      {
        question: "Can I accept payments through SCHAIN?",
        answer:
          "Yes. Manufacturers and distributors can accept payments for products supplied. All recorded and verified on SCHAIN.",
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
          "You'll log into SAYLES. Browse the already set up product database! and select products you physically stock. Add them to your digital shelves. Set your prices. That's it. You can also request products to be supplied by your distributors via SCHAIN—when they supply you, those products automatically appear in your SAYLES inventory.",
      },
      {
        question: "How much does SAYLES cost?",
        answer:
          "Launch pricing for first 100 retailers: ₦5,000/month. No setup fees. No hidden costs. Month-to-month. Cancel anytime. Once we reach 100 retailers, prices increase, so joining early locks you in at the best rate.",
      },
      {
        question: "How do I accept payments from Reeach customers?",
        answer:
          "We give you a simple device (similar to a mobile money terminal). Customer scans your Sayles Point QR code. You receive payment notification. You confirm and issue a digital receipt. Payment lands in your account instantly. It's that simple. You will be able accept payment with your mobile phone too.",
      },
      {
        question: "Is there a setup fee?",
        answer:
          "No setup fees. No installation charges. We handle everything. You just pay the monthly subscription.",
      },
      {
        question: "What if I have multiple stores?",
        answer:
          "SAYLES works across all your locations. Each store has its own inventory listing and QR code. Customers in that area find that specific store. You manage all stores from one dashboard.",
      },
      {
        question: "Will SAYLES actually bring customers to my store?",
        answer:
          "Yes! Customers who are actively searching for what you sell. It's not magical. But when someone searches \"Nescafe instant coffee,\" and you have it in stock, they'll find you. Those customers were looking anyway. SAYLES connects them.",
      },
      {
        question: "What if my inventory changes frequently?",
        answer:
          "As users buy on Reeach, your inventory levels are updated automatically in real time. However, if you sell off Reeach, you will need to update it in SAYLES (takes 2 minutes or less). This way customers see what's currently available. This prevents wasted trips to your store.",
      },
      {
        question: "Can I use SAYLES alongside other sales channels?",
        answer:
          "Absolutely! SAYLES is additive. Sell online on other platforms. Sell in-store. Sell through distributors. SAYLES adds another verified sales channel with better data.",
      },
      {
        question: "How do I compete with big chains?",
        answer:
          "You compete on quality and price, not visibility. SAYLES brings customers who are actively searching. Big chains have bigger marketing budgets. You have better local knowledge and often better prices. Compete on what you're good at.",
      },
      {
        question: "Can competitors see my prices?",
        answer:
          "Customers can see prices when they search (that's the point). Competitors might see pricing too. But transparency benefits everyone—you win on quality and service, not hiding information.",
      },
      {
        question: "What if I want to offer discounts or promotions?",
        answer:
          "SAYLES lets you set promotional prices. Customers see them. Drives traffic. You control timing and discounts completely.",
      },
      {
        question: "Do I need special hardware?",
        answer:
          "Just a smartphone (to manage inventory) and our payment device (we provide). No expensive registers. No complicated software. Simple.",
      },
      {
        question: "Can I get a loan based on SAYLES records?",
        answer:
          "Yes. Banks recognize Reeach records as verified, auditable sales data. This helps you qualify for loans and better terms from distributors.",
      },
      {
        question: "Can I manage my team through SAYLES?",
        answer:
          "Yes. Add team members. Assign roles. Track performance. Manage shifts. All within SAYLES.",
      },
      {
        question: "Can I communicate with my customers through SAYLES?",
        answer:
          "Yes. Send announcements. Promote products. Manage communications with your followers and customers. All from the SAYLES dashboard.",
      },
      {
        question: "Can I track issues and feedback from customers?",
        answer:
          "Yes. You can track customer issues, complaints, and feedback. Manage resolution. Improve service based on real feedback.",
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
          "Presently, Reeach has launched with RUIS - Reeach's Universal Inventory System, which will be the foundational layer for Reeach's product availability intelligence. By June 2026, Reeach will be available for Manufacturers, Distributors, and Retailers to use. However, the full user experience with the waitlist get 24 hour early access. After that, it's available for everyone in Nigeria, with eventual entry to Swazi cities.",
      },
      {
        question: "Is this just another shopping app?",
        answer:
          "No. Reeach is fundamentally different. It's discovery + payment + records all in one seamless experience. You find products. You buy them instantly in-store by scanning a QR code or request for them to be delivered to your delivery has been achieved in your city. You get actual receipts. Everything is recorded. No clutter. No guesswork. It just changes shopping completely.",
      },
      {
        question: "How would I buy something with Reeach?",
        answer:
          "Find a product on the app. Go to the store that has it. Scan their Swytis Point QR code. Select \"Pay for Product.\" Choose your item. See the price. Pay with PIN or biometric. Get receipt instantly. Total time: about 30 seconds.",
      },
      {
        question: "What if the store is far away?",
        answer:
          "we're working on delivery partnerships so you can have items brought to you.",
      },
      {
        question: "How much does Reeach cost?",
        answer:
          "Downloading and using the app is free. When you buy through Reeach, there's a small transaction fee (typically 1-3%) included in the total price you see. That's it.",
      },
      {
        question: "How accurate is the product information?",
        answer:
          "Because we link what retailers actually stock and verify's availability in real-time. More accurate than calling stores. More current than websites. Occasionally a retailer updates stock faster than we can—but we're constantly improving accuracy.",
      },
      {
        question: "Is my location data safe?",
        answer:
          "We only use your location when you search to find products near you. You control location permissions. We don't track you after the search. We don't sell your data. Read our Privacy Policy for full details.",
      },
      {
        question: "How will you protect my payment information?",
        answer:
          "We use bank-level encryption. Your PIN and biometric data are never stored or shared. Payment is processed securely and verified.",
      },
    ],
  },
];
