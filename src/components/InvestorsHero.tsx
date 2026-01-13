import Image from "next/image";

export default function InvestorsHero() {
  return (
    <section className="relative min-h-screen bg-[#E64D0B] flex items-center overflow-hidden">
      <div className="container mx-auto px-6 py-32 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              We're building Africa's commerce operating system.
            </h1>

            <p className="text-base md:text-lg leading-relaxed opacity-95">
              Reeach is reimagining retail in Africa, building the complete
              stack— End-to-end inventory tracking, discovery, payment, records,
              and supply chain intelligence— Using AI to make markets
              intelligible, transactions frictionless, and supply chains visible.
            </p>

            <p className="text-base md:text-lg leading-relaxed opacity-95">
              We're raising pre-seed to set out in Nigeria but with our sights
              on the rest of Africa and other emerging countries.
            </p>
          </div>

          {/* Right Content - Africa Map Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-[500px] aspect-square">
              <Image
                src="/images/africa-money-map.png"
                alt="Africa Commerce Market"
                width={500}
                height={500}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
