import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import { NAV_LINKS } from "@/constants/navigation";

export default function Navbar() {
  return (
    <nav className="fixed top-0 h-[66px] left-0 right-0 z-50 bg-transparent backdrop-blur-[4px]">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
         <div className="flex items-center gap-8">
             {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/white-logo.png"
              alt="Reeach Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white text-[17px] font-medium hover:text-white/80 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
         </div>

          {/* CTA Button */}
          <Button variant="outline" size="sm" className="text-[16px]">
            Be an early user
          </Button>
        </div>
      </div>
    </nav>
  );
}
