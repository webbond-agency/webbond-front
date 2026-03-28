import Container from "@/components/ui/container";
import Image from "next/image";
import { useTranslations } from "next-intl";
import * as motion from "motion/react-client";

import PriceCard from "./price-card";
import SectionLabel from "./section-label";

export default function BasicPrices() {
  const t = useTranslations("PricePage.BasicPrices");

  return (
    <section className="pb-[148px] lg:pb-[192px]">
      <Container className="relative">
        <div className="pointer-events-none absolute top-[-180px] left-[-280px] -z-10 h-[611px] w-[580px] opacity-70 lg:hidden">
          <Image
            src="/landing-page-packages-shadow-top-mob.webp"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="pointer-events-none absolute top-[-320px] right-[-420px] -z-10 hidden h-[1376px] w-[1305px] opacity-50 lg:block">
          <Image
            src="/landing-page-packages-shadow-desk.webp"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div className="mb-10 flex flex-col gap-6 md:mb-[58px] md:flex-row md:items-center md:justify-between lg:mb-[75px]">
          <div className="md:max-w-[211px]">
            <p className="mb-4 font-montserrat text-[14px] font-light leading-[120%] text-white lg:mb-8">
              {t("descriptionOne")}
            </p>
            <p className="font-montserrat text-[14px] font-light leading-[120%] text-white">
              {t("descriptionTwo")}
            </p>
          </div>
          <motion.h2
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-[624px] font-manrope text-[36px] font-light uppercase leading-[120%] text-white md:text-right lg:text-[64px]"
          >
            {t.rich("title", {
              gray: (chunks) => (
                <span className="text-[#818181]">{chunks}</span>
              ),
            })}
          </motion.h2>
        </div>

        <div className="flex flex-col gap-10 lg:gap-[75px]">
          <div>
            <SectionLabel>{t("landing.title")}</SectionLabel>
            <div className="flex flex-col gap-6 md:flex-row lg:gap-8">
              <PriceCard
                name={t("landing.basic.name")}
                priceFrom={t("landing.basic.priceFrom")}
                priceAmount={t("landing.basic.priceAmount")}
                description={t("landing.basic.description")}
                button={t("landing.basic.button")}
                href="/websites/landing"
                premiumDecor={false}
              />
              <PriceCard
                name={t("landing.premium.name")}
                priceFrom={t("landing.premium.priceFrom")}
                priceAmount={t("landing.premium.priceAmount")}
                description={t("landing.premium.description")}
                button={t("landing.premium.button")}
                href="/websites/landing"
                premiumDecor
              />
            </div>
          </div>

          <div>
            <SectionLabel className="md:justify-end">
              {t("multipage.title")}
            </SectionLabel>
            <div className="flex flex-col gap-6 md:flex-row lg:gap-8">
              <PriceCard
                name={t("multipage.basic.name")}
                priceFrom={t("multipage.basic.priceFrom")}
                priceAmount={t("multipage.basic.priceAmount")}
                description={t("multipage.basic.description")}
                button={t("multipage.basic.button")}
                href="/websites/multi-page"
                premiumDecor={false}
              />
              <PriceCard
                name={t("multipage.premium.name")}
                priceFrom={t("multipage.premium.priceFrom")}
                priceAmount={t("multipage.premium.priceAmount")}
                description={t("multipage.premium.description")}
                button={t("multipage.premium.button")}
                href="/websites/multi-page"
                premiumDecor
              />
            </div>
          </div>

          <div>
            <SectionLabel>{t("webshop.title")}</SectionLabel>
            <PriceCard
              name={t("webshop.solution.name")}
              priceFrom={t("webshop.solution.priceFrom")}
              priceAmount={t("webshop.solution.priceAmount")}
              description={t("webshop.solution.description")}
              button={t("webshop.solution.button")}
              href="/websites/webshop"
              premiumDecor
              fullWidth
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
