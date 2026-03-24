import Hero from "@/components/multipage-page/hero/hero";
import Faq from "@/components/multipage-page/faq/faq";
import Cta from "@/components/multipage-page/cta/cta";
import OrderMultipage from "@/components/multipage-page/order-multipage/order-multipage";
import ContactsContainer from "@/components/contacts/contacts-container";
import ServicesMultipage from "@/components/multipage-page/services-multipage/services-multipage";
import Packages from "@/components/multipage-page/packages/packages";

export default function MultiPagePage() {
  return (
    <div className="pt-15 sm:pt-20 md:pt-[110px]">
      <Hero />
      <Packages />
      <ServicesMultipage />
      <OrderMultipage />
      <Faq />
      <Cta />
      <ContactsContainer />
    </div>
  );
}
