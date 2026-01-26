import Image from "next/image";
import Link from "next/link";

export default function ProblemSection() {
  return (
    <section className="py-10 bg-[#fff]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/images/Frame 13.png"
                alt="African commerce scene"
                width={600}
                height={400}
                className="w-full object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <div className="">
              <h2 className="text-[24px] md:text-[28px]  lg:text-[28px] font-semibold text-[#585757] md:text-[#1C1C1C] leading-tight">
                Every day, billions <br className="hidden md:block"/> of transactions fail before <br className="hidden md:block"/>they start.
                Reeach is taking <br className="hidden md:block"/> responsibility.
              </h2>
            </div>

            <div className="space-y-4 text-[#5F6368]">
              <p className="leading-relaxed text-[14px] md:text-[16px]">
                Consumers can't find what they need. Retailers have inventory
                nobody knows about. Manufacturers don't know where their
                products are or how they're performing.
              </p>

              <p className="leading-relaxed text-[14px] md:text-[16px]">
                Reeach solves this by becoming Africa's commerce operating
                system. By connecting manufacturers, distributors, retailers,
                products and services together in one ecosystem and unleashing
                the power of AI to make sense of millions of data points. Reeach
                unlocks unprecedented value - actionable market intelligence that
                powers decisions across entire supply chains, harmonized payments
                that simplifies transactions irrespective of borders and top-in-class
                discounts for every participant whenever they need it.
              </p>

              <p className="text-sm text-gray-600">
                Doing business in Africa? Get Reeach.
              </p>

              <Link
                href="how-it-works"
                className="inline-block text-[#E64D0B] font-regular text-[16px] hover:text-orange-700 transition-colors"
              >
                How Reeach works
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
