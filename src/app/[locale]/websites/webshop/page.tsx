import Hero from "@/components/webshop-page/hero/hero";
import Faq from "@/components/webshop-page/faq/faq";
import Cta from "@/components/webshop-page/cta/cta";
import ContactsContainer from "@/components/contacts/contacts-container";

export default function LandingPage() {
  return (
    <div className="pt-15 sm:pt-20 md:pt-[110px]">
      <Hero />
      <Faq />
      <Cta />
      <ContactsContainer />
    </div>
  );
}
