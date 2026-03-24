import Hero from "@/components/webshop-page/hero/hero";
import Faq from "@/components/webshop-page/faq/faq";
import Cta from "@/components/webshop-page/cta/cta";
import ContactsContainer from "@/components/contacts/contacts-container";
import OrderWebshop from "@/components/webshop-page/order-webshop/order-webshop";
import ServicesWebshop from "@/components/webshop-page/services-webshop/services-webshop";
import Packages from "@/components/webshop-page/packages/packages";

export default function WebshopPage() {
  return (
    <div className="pt-15 sm:pt-20 md:pt-[110px]">
      <Hero />
      <Packages />
      <ServicesWebshop />
      <OrderWebshop />
      <Faq />
      <Cta />
      <ContactsContainer />
    </div>
  );
}
