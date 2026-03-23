import Hero from "@/components/landing-page/hero/hero";
import Faq from "@/components/landing-page/faq/faq";
import Cta from "@/components/landing-page/cta/cta";
import OrderLanding from "@/components/landing-page/order-landing/order-landing";
import ContactsContainer from "@/components/contacts/contacts-container";

export default function LandingPage() {
  return (
    <div className="pt-15 sm:pt-20 md:pt-[110px]">
      <Hero />
      <OrderLanding />
      <Faq />
      <Cta />
      <ContactsContainer />
    </div>
  );
}
