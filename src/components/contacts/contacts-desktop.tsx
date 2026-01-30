'use client';
import GooeyWhiteButton from '../ui/gooey-white-button';
import { links } from './contacts-container';
import { useTranslations } from 'next-intl';
import { m } from 'framer-motion';
import { useState } from 'react';
import dynamic from 'next/dynamic';

const FeedbackModal = dynamic(() => import('@/components/feedback-modal'), {
  ssr: false,
});

const ContactsDesktop = () => {
  const t = useTranslations('Contacts');
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  return (
    <m.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      className="hidden md:flex items-center justify-between mb-[41px] will-change-opacity transform-gpu"
    >
      <m.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6 }}
        className="will-change-[opacity,transform] transform-gpu"
      >
        <GooeyWhiteButton
          text={t('button')}
          onClick={() => setIsFeedbackOpen(true)}
          className="text-center w-full text-[14px] font-montserrat font-light text-black"
          width={168}
          height={42}
        />
      </m.div>

      <div className="flex flex-col lg:flex-row items-center gap-[20px] xl:gap-[72px]">
        {[
          { text: t('cvr'), isEmail: false },
          { text: t('city'), isEmail: false },
          { text: t('email'), isEmail: true },
        ].map((item, idx) => (
          <m.div
            key={idx}
            variants={{
              hidden: { opacity: 0, x: -20 },
              show: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.5 }}
            className={`relative font-manrope font-light text-[20px] text-white leading-[120%] will-change-[opacity,transform] transform-gpu ${
              idx < 2
                ? "xl:before:content-[''] xl:before:block xl:before:absolute xl:before:top-1/2 xl:before:-translate-y-1/2 xl:before:right-[-40px] xl:before:w-[16px] xl:before:h-[16px] xl:before:bg-white xl:before:rounded-full"
                : ''
            }`}
          >
            {item.isEmail ? (
              <a
                href={`mailto:${item.text}`}
                className="underline decoration-white/20 underline-offset-4 hover:decoration-white/50 transition-colors"
              >
                {item.text}
              </a>
            ) : (
              item.text
            )}
          </m.div>
        ))}
      </div>

      <m.ul
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
        className="flex items-center gap-[15px] will-change-opacity transform-gpu"
      >
        {links.map((link, index) => (
          <m.li
            key={index}
            variants={{
              hidden: { opacity: 0, scale: 0.5 },
              show: { opacity: 1, scale: 1 },
            }}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className="will-change-[opacity,transform] transform-gpu"
          >
            <a href={link.href} target="_blank" aria-label={link.label}>
              {link.icon}
            </a>
          </m.li>
        ))}
      </m.ul>
      <FeedbackModal isOpen={isFeedbackOpen} onOpenChange={setIsFeedbackOpen} />
    </m.div>
  );
};
export default ContactsDesktop;
