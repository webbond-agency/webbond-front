import GooeyWhiteLink from "@/components/ui/gooey-white-link";
import Image from "next/image";
import * as motion from "motion/react-client";
import OrderModal from "./order-modal";

interface OrderProps {
  image: string;
  buttonText: string;
  link?: string;
}

export default function Order({ image, buttonText, link }: OrderProps) {
  return (
    <>
      <div className="relative w-full h-[635px] md:h-[478px] mb-5 lg:mb-6 rounded-[20px] overflow-hidden">
        <Image src={image} alt="order" fill className="object-cover" />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6 }}
        className={`flex items-center will-change-opacity transform-gpu flex-row`}
      >
        {link ? (
          <GooeyWhiteLink
            text={buttonText}
            href={link}
            className="w-full md:max-w-[236px]"
            centerText
          />
        ) : (
          <OrderModal buttonText={buttonText} />
        )}

        <div
          className={`hidden sm:flex flex-1 h-px from-[#FFFFFF] to-[#0A0704] bg-linear-to-r opacity-32`}
        ></div>
      </motion.div>
    </>
  );
}
