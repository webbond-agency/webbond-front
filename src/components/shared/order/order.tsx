import Container from "@/components/ui/container";
import Image from "next/image";
import * as motion from "motion/react-client";
import GooeyWhiteButton from "@/components/ui/gooey-white-button";

interface OrderProps {
  image: string;
  buttonText: string;
}

export default function Order({ image, buttonText }: OrderProps) {
  return (
    <section>
      <Container>
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
          <GooeyWhiteButton
            text={buttonText}
            // onClick={() => setIsFeedbackOpen(true)}
            className="text-center w-full text-[14px] font-montserrat font-light text-black"
            width={313}
            height={52}
          />

          <div
            className={`hidden sm:flex flex-1 h-px from-[#FFFFFF] to-[#0A0704] bg-linear-to-r`}
          ></div>
        </motion.div>
      </Container>
    </section>
  );
}
