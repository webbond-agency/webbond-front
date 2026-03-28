import Container from "@/components/ui/container";
import Image from "next/image";
import { useTranslations } from "next-intl";
import * as motion from "motion/react-client";

import PriceCard from "@/components/price-page/basic-prices/price-card";

const SERVICE_KEYS = [
  "seo",
  "logo",
  "googleAds",
  "metaAds",
  "motion",
  "calculators",
] as const;

export default function AdditionalServices() {
  const t = useTranslations("PricePage.AdditionalServices");

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
          <motion.h2
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-manrope text-[36px] font-light uppercase leading-[120%] text-white md:text-right lg:text-[64px]"
          >
            {t.rich("title", {
              gray: (chunks) => (
                <span className="text-[#818181]">{chunks}</span>
              ),
            })}
          </motion.h2>
          <p className="font-montserrat text-[14px] font-light leading-[120%] text-white md:max-w-[211px]">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {SERVICE_KEYS.map((key) => (
            <PriceCard
              key={key}
              name={t(`${key}.name`)}
              priceFrom={t(`${key}.priceFrom`)}
              priceAmount={t(`${key}.priceAmount`)}
              description={t(`${key}.description`)}
              button={t(`${key}.button`)}
              href="/#services"
              premiumDecor
              gridCell
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
