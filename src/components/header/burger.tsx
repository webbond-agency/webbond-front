'use client';
import { Button } from '../ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { Link, usePathname } from '@/i18n/navigation';
import { navItems } from '@/components/header/navigate-data';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { m, Variants } from 'framer-motion';
import ArrowUpRightForBtn from './arrow-up-right-for-btn';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const FeedbackFormContent = dynamic(
  () => import('@/components/feedback-form-content'),
  {
    ssr: false,
  },
);

const SuccessContent = dynamic(() => import('@/components/success-content'), {
  ssr: false,
});

const SuccessModal = dynamic(() => import('@/components/success-modal'), {
  ssr: false,
});

interface BurgerProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  onOpenFeedback?: () => void;
}

const Burger = ({ isOpen, setIsOpen, onOpenFeedback }: BurgerProps) => {
  const [view, setView] = useState<'nav' | 'feedback' | 'success'>('nav');
  const [showSuccess, setShowSuccess] = useState(false);
  const t = useTranslations();
  const pathname = usePathname();
  const locale = useLocale();
  const isActive = (href: string) => pathname === href;

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'circOut',
      },
    },
  };

  return (
    <Sheet
      open={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open);
        if (!open) setTimeout(() => setView('nav'), 300); // Reset view after closing
      }}
      modal={false}
    >
      <div className="relative lg:hidden flex items-center">
        <SheetTrigger asChild>
          <button className="outline-hidden">
            {isOpen ? (
              <Image
                src="/close.svg"
                alt="menu"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            ) : (
              <Image
                src="/Hamburger-Menu.svg"
                alt="menu"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            )}
          </button>
        </SheetTrigger>
      </div>
      <SheetContent
        side="right"
        className="w-full p-0 [&>button[data-slot='sheet-close']]:hidden bg-[#0B0B0B] border-none overflow-hidden"
        onPointerDownOutside={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <div
          className={`flex flex-col h-full px-[20px] pb-[40px] relative z-10 ${
            view === 'feedback' || view === 'success'
              ? 'overflow-visible pt-[120px]'
              : 'overflow-y-auto pt-[160px]'
          }`}
        >
          {/* Accessibility - Hidden Title and Description */}
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <SheetDescription className="sr-only">
            Main navigation menu with links to different sections
          </SheetDescription>

          {/* Mobile Navigation */}
          {view === 'nav' ? (
            <>
              <nav className="flex-1 mb-[40px]">
                <m.ul
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-col gap-[32px] will-change-[opacity]"
                >
                  {navItems.map((item) => (
                    <m.li
                      key={item.titleKey}
                      variants={itemVariants}
                      className="pt-[12px] pb-[20px] relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-[270px] after:bg-linear-to-r after:from-[#E63B44] after:to-transparent will-change-[opacity,transform] transform-gpu"
                    >
                      <Link
                        locale={locale}
                        href={`/${item.href}`}
                        onClick={() => setIsOpen(false)}
                        className={`text-base leading-[120%] font-montserrat transition-all duration-300 ${
                          isActive(item.href)
                            ? 'text-[#00dfd0]'
                            : 'text-white hover:text-[#00dfd0]'
                        }`}
                      >
                        {t(item.titleKey)}
                      </Link>
                    </m.li>
                  ))}
                </m.ul>
              </nav>
              <Button
                onClick={() => {
                  if (window.innerWidth >= 768 && onOpenFeedback) {
                    onOpenFeedback();
                    setIsOpen(false);
                  } else {
                    setView('feedback');
                  }
                }}
                className="w-full text-[14px] uppercase text-white font-montserrat h-[60px] pl-[36px] pr-[13px] py-[13px] backdrop-blur-[32px] bg-white/3 rounded-[40px] shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] shrink-0 safari-blur-fix"
              >
                Book en konsultation
                <div className="ml-auto w-[36px] h-[36px] flex items-center justify-center bg-white rounded-full">
                  <ArrowUpRightForBtn />
                </div>
              </Button>
            </>
          ) : view === 'feedback' ? (
            <FeedbackFormContent
              onSuccess={() => {
                setView('success');
              }}
            />
          ) : (
            <div className="flex-1 flex flex-col justify-center">
              <SuccessContent onClose={() => setIsOpen(false)} />
            </div>
          )}
        </div>
        {/* FIXED DECORATION IMAGE */}
        {view === 'nav' && (
          <Image
            src="/mobile-menu-decor.png"
            alt="menu decor"
            width={670}
            height={670}
            sizes="(max-width: 768px) 100vw, 670px"
            quality={60}
            className="absolute -bottom-[270px] -right-[300px] w-[670px] h-auto pointer-events-none select-none max-w-none contrast-125 saturate-150"
            priority
          />
        )}
      </SheetContent>
      <SuccessModal isOpen={showSuccess} onOpenChange={setShowSuccess} />
    </Sheet>
  );
};

export default Burger;
