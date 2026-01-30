'use client';
import FacebookIcon from './facebook-icon';
import LinkedinIcon from './linkedin-icon';
import TelegramIcon from './telegram-icon';
import InstagramIcon from './instagram-icon';
import GooeyWhiteButton from '../ui/gooey-white-button';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import dynamic from 'next/dynamic';

const FeedbackModal = dynamic(() => import('@/components/feedback-modal'), {
  ssr: false,
});

export const links = [
  {
    icon: <FacebookIcon />,
    href: 'https://www.facebook.com/share/172NiweB8A/',
    label: 'Facebook',
  },
  {
    icon: <InstagramIcon />,
    href: 'https://www.instagram.com/webbond.agency',
    label: 'Instagram',
  },
  {
    icon: <LinkedinIcon />,
    href: 'https://www.linkedin.com/company/webbond-digital-agency/',
    label: 'LinkedIn',
  },
  {
    icon: <TelegramIcon />,
    href: 'https://t.me/Bondarenko_Christina',
    label: 'Telegram',
  },
];

const ContactsContainer = () => {
  const t = useTranslations('Contacts');
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  return (
    <section className='px-5 sm:px-8 pb-[36px] md:hidden'>
      <div className="relative max-w-[130px] sm:max-w-[200px] font-manrope font-light text-[20px] sm:text-[24px] text-white leading-[120%] before:content-[''] before:block before:absolute before:bottom-[-40px] before:left-0 before:w-[16px] before:h-[16px] before:bg-white before:rounded-full">
        {t('cvr')}
      </div>
      <div className="mt-15 relative max-w-[160px] font-manrope font-light text-[20px] text-white leading-[120%] before:content-[''] before:block before:absolute before:bottom-[-40px] before:left-0 before:w-[16px] before:h-[16px] before:bg-white before:rounded-full">
        {t('city')}
      </div>
      <a
        href={`mailto:${t('email')}`}
        className="block mt-15 max-w-[228px] font-manrope font-light text-[20px] text-white leading-[120%] underline decoration-white/20 underline-offset-4"
      >
        {t('email')}
      </a>
      <ul className="flex items-center gap-[15px] mt-[36px] mb-[44px]">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} target="_blank" aria-label={link.label}>
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
      <GooeyWhiteButton
        text={t('button')}
        onClick={() => setIsFeedbackOpen(true)}
        className="mx-auto text-center w-full text-[14px] font-montserrat font-light text-black"
        height={52}
      />
      <FeedbackModal isOpen={isFeedbackOpen} onOpenChange={setIsFeedbackOpen} />
    </section>
  );
};

export default ContactsContainer;
