import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  imagePosition: "left" | "right";
  ctaText?: string;
  onCtaClick?: () => void;
}

export default function FeatureCard({
  title,
  description,
  image,
  imagePosition,
  ctaText = "Join waitlist",
  onCtaClick,
}: FeatureCardProps) {
  const isImageRight = imagePosition === "right";

  return (
    <div
      className={`grid md:grid-cols-2 gap-14 items-center ${
        isImageRight ? "" : "md:grid-flow-dense"
      }`}
    >
      {/* Text Content */}
      <div className={`space-y-4 ${isImageRight ? "md:order-1" : "md:col-start-2 md:pl-20"}`}>
        <div className="md:w-[75%]">
          <h3 className="text-[22px] md:text-[28px] font-semibold text-[#000000]">
            {title}
          </h3>
        </div>
        <div className="w-[90%] md:w-[60%]">
          <p className="text-[#5F6368] leading-relaxed text-[16px] font-regular">{description}</p>
        </div>
        <div className="flex gap-4">
          {/* <button className="text-[#E64D0B] font-regular text-[16px] hover:text-orange-700 transition-colors" onClick={onCtaClick}>
            {ctaText}
          </button> */}
        </div>
      </div>

      {/* Image */}
      <div className={`${isImageRight ? "md:order-2" : "md:col-start-1 md:row-start-1"}`}>
        <div className="rounded-2xl overflow-hidden ">
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}
