import * as motion from "motion/react-client";

import { Variants } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/container";
import { twMerge } from "tailwind-merge";

export type ServiceDescriptionItem = {
  text: string;
};

export type ServicesSectionItem = {
  title: string;
  description?: ServiceDescriptionItem[];
};

export type ServicesProps = {
  services?: ServicesSectionItem[];
  title?: string;
  description?: string;
  className?: string;
};

const Services = ({
  services,
  title: _title,
  description: _description,
  className,
}: ServicesProps) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  return (
    <section className={twMerge("pb-[148px]", className)}>
      <Container className="relative">
        <div className="flex flex-col md:flex-row-reverse md:justify-between md:items-end gap-6 mb-6 md:mb-[58px]">
          {_title ? (
            <motion.h2
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="md:max-w-[661px] font-manrope text-[36px] lg:text-[48px] xl:text-[64px] font-light uppercase text-white leading-[120%] text-right"
            >
              {_title}
            </motion.h2>
          ) : null}
          {_description ? (
            <div className="relative flex md:max-w-[300px] lg:max-w-[375px]">
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="w-[2px] h-auto bg-[linear-gradient(0deg,_#ffffff_0%,_#0a0704_100%)] opacity-32 rounded-full"
              />
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="pl-[20px] font-montserrat font-light text-[14px] lg:text-[18px] text-white leading-[120%] will-change-transform"
              >
                {_description}
              </motion.p>
            </div>
          ) : null}
        </div>
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-20 md:gap-[123px]"
        >
          {services?.map((service, i) => (
            <motion.li
              key={i}
              className="list-none flex flex-col justify-between items-start relative"
            >
              <div className="flex flex-col gap-5 md:flex-row justify-between items-start w-full relative">
                <motion.h3
                  variants={itemVariants}
                  className="md:max-w-[400px] font-manrope text-2xl lg:text-[40px] font-light uppercase text-white leading-[108%]"
                >
                  {service?.title}
                </motion.h3>
                <motion.ul
                  variants={itemVariants}
                  className="flex flex-col gap-2 list-none md:max-w-[400px] items-start pl-2 lg:pl-[11px]"
                >
                  {service.description?.map((item, idx) => (
                    <li key={idx} className="relative pl-[10px] lg:pl-[14px]">
                      {service &&
                      service.description &&
                      service.description?.length > 1 ? (
                        <span className="absolute left-0 top-[7px] w-0.5 h-0.5 rounded-full bg-white" />
                      ) : null}
                      <p className="text-[12px] leading-[108%] lg:text-base font-light font-montserrat text-white">
                        {item.text}
                      </p>
                    </li>
                  ))}
                </motion.ul>
              </div>

              {i !== services.length - 1 && (
                <div className="absolute bottom-[-40px] md:bottom-[-60px] h-[0.8px] w-full bg-[#565656]">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 size-4 rounded-full bg-[#565656]" />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 size-4 rounded-full bg-[#565656]" />
                </div>
              )}
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.5 }}
          className="md:hidden absolute top-[-67px] left-[-52px] w-[1024px] will-change-opacity -z-10"
        >
          <Image
            width={1024}
            height={1020}
            src="/case-cervices-shadow-mobile.webp"
            alt="case-cervices-shadow-mobile"
            sizes="(max-width: 1280px) 33vw, 1024px"
            className="select-none pointer-events-none blur-2xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.5 }}
          className="hidden md:block will-change-opacity absolute top-[-120px] left-[716px] w-[1024px] -z-10"
        >
          <Image
            width={1024}
            height={1020}
            src="/case-services-shadow-desktop.webp"
            alt="case-services-shadow-desktop"
            sizes="(max-width: 1280px) 33vw, 1024px"
            className="select-none pointer-events-none blur-2xl"
          />
        </motion.div>
      </Container>
    </section>
  );
};

export default Services;
