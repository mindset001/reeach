import Image from "next/image";
import FaqBg from "../../public/images/faq-bg.jpg";

export default function FAQHero() {
  return (
    <section className="relative min-h-[70vh] bg-[#6A2406] flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `url(${FaqBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      
      <div className="container mx-auto px-6 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-4">
            Got Questions?
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white/90">
            We've got answers.
          </h2>
        </div>
      </div>
    </section>
  );
}
