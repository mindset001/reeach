import Image from "next/image";
import One from '../../public/images/Group 3.png'
import Two from '../../public/images/Group 4.png'
import Three from '../../public/images/investors-bg.jpg'

export default function InvestorsHero() {
  return (
    <section className="relative min-h-screen bg-[#E64D0B] flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 opacity-2"
        style={{
          backgroundImage: `url(${Three.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      
      <div className="container mx-auto px-6 md:px-16 py-32 md:py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className=" text-white  md:ml-[26px] md:mt-20">
            <p className="text-[18px] mb-4">Reeach for Investors</p>
            <h1 className="text-[24px] md:text-[36px] lg:text-[36px] mb-6 font-bold leading-tight">
              We're building Africa's <br className="hidden md:block"/> commerce operating <br className="hidden md:block"/> system.
            </h1>

            <p className="text-[16px] md:text-[18px] leading-relaxed opacity-95 mb-6">
              Reeach is reimagining retail in Africa, building the complete
              stack— End-to-end inventory tracking, discovery, payment, records,
              and supply chain intelligence— Using AI to make markets
              intelligible, transactions frictionless, and supply chains visible.
            </p>

            <p className="text-[16px] md:text-[18px] leading-relaxed opacity-95">
              We're raising pre-seed to set out in Nigeria but with our sights
              on the rest of Africa and other emerging countries.
            </p>
          </div>

          {/* Right Content - Puzzle Pieces Arrangement */}
          <div className="hidden md:flex justify-center md:justify-end">
            <div className="relative w-full max-w-[600px] h-[400px] md:h-[500px]">
              {/* Top Left Puzzle Piece */}
              <div className="absolute top-0 md:left-8 md:left-16 w-[65%] md:w-[50%] z-10">
                <Image
                  src={One}
                  alt="Africa Commerce Market"
                  width={300}
                  height={300}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
              
              {/* Bottom Right Puzzle Piece */}
              <div className="absolute bottom-0 md:right-8 md:right-16 w-[65%] md:w-[50%]">
                <Image
                  src={Two}
                  alt="Africa Commerce Market"
                  width={300}
                  height={300}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="md:hidden flex justify-center md:justify-end">
              <div>
                   <Image
                  src={One}
                  alt="Africa Commerce Market"
                  width={500}
                  height={400}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
               <div>
                   <Image
                  src={Two}
                  alt="Africa Commerce Market"
                  width={500}
                  height={400}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
