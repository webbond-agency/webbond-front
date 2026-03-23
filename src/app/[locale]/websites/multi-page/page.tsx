import Hero from "@/components/multipage-page/hero/hero";
import Faq from "@/components/multipage-page/faq/faq";
import Cta from "@/components/multipage-page/cta/cta";
import OrderMultipage from "@/components/multipage-page/order-multipage/order-multipage";
import ContactsContainer from "@/components/contacts/contacts-container";

export default function MultiPagePage() {
  return (
    <div className="pt-15 sm:pt-20 md:pt-[110px]">
      <Hero />
      <OrderMultipage />
      <Faq />
      <Cta />
      <ContactsContainer />
    </div>
  );
}
