import Image from "next/image";
import Container from "../../ui/container";
import * as motion from "motion/react-client";
import GooeyWhiteLink from "../../ui/gooey-white-link";

interface SiteTypeSectionProps {
  title: string | React.ReactNode;
  description: string;
  imageUrl: string;
  imageAlt: string;
  list: string[];
  buttonText: string;
  href: string;
  subtitle: string;
  variant: "left" | "right";
}

export default function SiteTypeSection({
  title,
  description,
  imageUrl,
  imageAlt,
  list,
  buttonText,
  href,
  subtitle,
  variant = "left",
}: SiteTypeSectionProps) {
  return (
    <section className="mb-[148px] lg:mb-[152px]">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className={`mb-6 lg:mb-15 font-manrope text-[36px] lg:text-[64px] leading-[120%] text-white uppercase font-light ${variant === "left" ? "text-left" : "text-right"}`}
        >
          {title}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: variant === "left" ? 15 : -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className={`flex flex-col gap-6 lg:gap-8 mb-6 ${variant === "left" ? "md:flex-row" : "md:flex-row-reverse"}`}
        >
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={592}
            height={453}
            className="w-full md:w-1/2 h-auto object-cover rounded-[20px]"
          />
          <div>
            <p className="mb-6 lg:mb-8 font-montserrat text-[12px] lg:text-[14px] font-light text-white leading-[120%]">
              {description}
            </p>
            <div className="p-4 lg:p-5 rounded-[14px] flex flex-col backdrop-blur-lg bg-white/3 shadow-[inset_3px_-1px_8.7px_-1px_rgba(255,255,255,0.12)] safari-blur-fix will-change-transform transform-gpu">
              <h3 className="mb-6 font-manrope text-[16px] lg:text-[32px] leading-[120%] text-white uppercase font-light">
                {subtitle}
              </h3>
              <ul className="flex flex-col gap-3">
                {list.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-5 py-4 px-5 lg:py-5 bg-black rounded-full font-montserrat text-[12px] lg:text-[14px] font-light text-white leading-[120%]"
                  >
                    <div className="rounded-full bg-white w-3.5 h-3.5 lg:w-4.5 lg:h-4.5 shrink-0" />
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className={`flex items-center will-change-opacity transform-gpu ${variant === "left" ? "flex-row-reverse" : "flex-row"}`}
        >
          <GooeyWhiteLink
            text={buttonText}
            href={href}
            className="text-center w-full text-[14px] font-montserrat font-light text-black"
            width={313}
            height={52}
          />
          <div
            className={`hidden sm:flex flex-1 h-px from-[#FFFFFF] to-[#0A0704] ${variant === "left" ? "bg-linear-to-l" : "bg-linear-to-r"}`}
          ></div>
        </motion.div>
      </Container>
    </section>
  );
}
