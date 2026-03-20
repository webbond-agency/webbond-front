import Hero from "@/components/landing-page/hero/hero";
import Faq from "@/components/landing-page/faq/faq";

export default function LandingPage() {
  return (
    <div className="pt-15 sm:pt-20 md:pt-[110px]">
      <Hero />
      <Faq />
    </div>
  );
}
