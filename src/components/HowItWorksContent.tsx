export default function HowItWorksContent() {
  return (
    <section className="bg-white pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl space-y-8">
          {/* The Problem Section */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              The Problem: a deeply fragmented inefficient commerce landscape
            </h2>
            
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              Billions of dollars in transactions fail every year across Africa. Not because demand doesn't exist or because products aren't available, but because information doesn't flow.
            </p>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              Consumers spend hours searching for products they need, not knowing where to find them or what's available nearby. Retailers have inventory that nobody knows about, competing on price instead of visibility. Manufacturers have product/distribution decisions based in gut market demand. In store, sometimes, payments fail, transactions reverse; products bought for wholesales are non-existent or inaccurate. For consumers, paper receipts end up in waste bins or in gutters and no records are kept.
            </p>

            <p className="text-base md:text-lg text-gray-900 font-semibold leading-relaxed mb-4">
              This is the core inefficiency that Reeach is addressing.
            </p>
          </div>

          {/* The Solution Section */}
          <div className="space-y-4">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Reeach built a commerce infrastructure centered around a continuously growing, carefully curated database of products and services, managed by Reeach, manufacturers and original services providers. Each product or service has a detailed profile of vetted information ready for use by different users (including unique identifiers that make it easy to generate comprehensive data about specific products and services in real time). Next, Reeach connects every manufacturer, distributor, retailer, service provider and consumer with each other around the products or services that they are concerned with per time.
            </p>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              This way, every interaction/search, payment, transfer - yes you can transfer products and services on Reeach across hundreds or thousands of miles in real time/ or intended interactions help us account for every product as they flow from factory to store to the consumer. We dynamically, automatically track inventory levels across entire markets for every product or service, executing important consumption, intention-to-consume data in real time so that those concerned can use them for powerful data-driven decision making.
            </p>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Reeach is Africa's first category-defining "End-to-end market intelligence, market interaction and market experience company" for commercially supplied products and services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
