import Image from 'next/image';
import FooterLogo from './footer-logo';
import ContactsDesktop from '../contacts/contacts-desktop';

const Footer = () => {
  return (
    <footer className="pb-[20px] sm:pb-[40px] md:pb-[30px] overflow-y-clip md:max-w-[1340px] md:mx-auto md:px-[32px]">
      <div className="px-[20px] sm:px-[40px] md:px-0 md:pt-0 ">
        <div className="w-full h-px bg-linear-to-r from-white via-white to-[#686868] mb-[32px] md:mb-[41px] " />
        <ContactsDesktop />

        <div className="md:hidden relative w-full h-[143px] flex items-center">
          {/* Логотип со встроенным градиентным фоном теперь внизу */}
          <FooterLogo className="absolute inset-0 w-full" />

          {/* Декор накладывается сверху в режиме multiply для эффекта глубоких теней */}
          <Image
            src="/footer-decor.png"
            alt="Footer Decor"
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            quality={60}
            className="object-cover opacity-60 mix-blend-multiply pointer-events-none z-10"
          />
        </div>
        <div className="hidden md:block relative w-full h-[376px] rounded-[12px] bg-[linear-gradient(193deg,#ff2b1f_0%,#680c0c_100%)]">
          <Image
            src="/desktop-footer-decor.webp"
            alt="Desktop Footer Decor"
            fill
            sizes="100vw"
            quality={80}
            className="object-cover opacity-40 mix-blend-overlay pointer-events-none saturate-150 contrast-150 z-10 rounded-[12px]"
          />
          <Image
            src="/desktop-footer-text.svg"
            alt="Desktop Footer Text"
            width={1162}
            height={241}
            className="absolute left-[20px] bottom-[20px] mt-auto object-cover opacity-60 mix-blend-overlay pointer-events-none z-20 md:w-[670px] lg:w-[920px] xl:w-[1162px] h-auto"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
