import Image from "next/image";
import TeamSlider from "./team-slider";
import { useTranslations } from "next-intl";
import GooeyWhiteLink from "../ui/gooey-white-link";

const TeamContainer = () => {
  const t = useTranslations("Team");

  return (
    <section className="relative z-1">
      <Image
        src="/team-mobile-title.webp"
        alt="team-text"
        width={440}
        height={241}
        quality={75}
        className="absolute top-[50px] left-0 right-0 select-none pointer-events-none"
      />
      <div className="px-[20px] sm:px-[40px]">
        <h2 className="max-w-[255px] sm:max-w-[400px] relative mb-[52px] text-[40px] sm:text-[48px] font-manrope font-light uppercase text-white leading-[120%] before:content-[''] before:block before:absolute before:top-1/2 before:-translate-y-1/2 before:right-[-26px] before:w-[20px] before:h-[20px] before:bg-white before:rounded-full">
          {t("title")}
        </h2>
      </div>
      <TeamSlider />
      <div className="px-[20px] sm:px-[40px]">
        <GooeyWhiteLink
          href="/about"
          text={t("buttonAbout")}
          height={52}
          className="mx-auto text-center w-full text-[14px] font-montserrat font-light text-black"
        />
      </div>
    </section>
  );
};

export default TeamContainer;
