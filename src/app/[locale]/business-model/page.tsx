import Faq from "@/components/business-model-page/faq/faq";
import Cta from "@/components/business-model-page/cta/cta";
import Hero from "@/components/business-model-page/hero/hero";
import Disadvantages from "@/components/business-model-page/disadvantages/disadvantages";
import Comparison from "@/components/business-model-page/comparison/comparison";
import TargetAudience from "@/components/business-model-page/target-audience/target-audience";
import Included from "@/components/business-model-page/included/included";
import Demo from "@/components/business-model-page/demo/demo";
import Price from "@/components/business-model-page/price/price";
import Warranty from "@/components/business-model-page/warranty/warranty";
import CtaFirst from "@/components/business-model-page/cta-first/cta-first";
import Steps from "@/components/business-model-page/steps/steps";

export default function BusinessModelPage() {
  return (
    <div className="pt-15 sm:pt-20 md:pt-[110px]">
      <Hero />
      <Disadvantages />
      <Comparison />
      <TargetAudience />
      <Included />
      <Demo />
      <Steps />
      <Price />
      <Warranty />
      <CtaFirst />
      <Faq />
      <Cta />
    </div>
  );
}
