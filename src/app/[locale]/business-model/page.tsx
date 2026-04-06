import Faq from "@/components/business-model-page/faq/faq";
import Cta from "@/components/business-model-page/cta/cta";
import Hero from "@/components/business-model-page/hero/hero";

export default function BusinessModelPage() {
  return (
    <div className="pt-15 sm:pt-20 md:pt-[110px]">
      <Hero />
      <Faq />
      <Cta />
    </div>
  );
}
