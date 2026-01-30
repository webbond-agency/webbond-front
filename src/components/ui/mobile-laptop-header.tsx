'use client';
import Burger from '../header/burger';
import LocaleSwitcher from '../header/lang-switch';
import Logo from '../header/logo';
import { useState } from 'react';
import dynamic from 'next/dynamic';

const FeedbackModal = dynamic(() => import('@/components/feedback-modal'), {
  ssr: false,
});

const MobileLaptopHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  return (
    <div className="relative flex items-center justify-between px-[20px] py-[12px] backdrop-blur-[32px] bg-white/3 rounded-[40px] shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] safari-blur-fix">
      {/* Gradient Border Overlay */}
      <div
        className="absolute inset-0 rounded-[40px] pointer-events-none"
        style={{
          padding: '1px',
          background:
            'linear-gradient(to right, rgba(74, 14, 14, 0.6), rgba(74, 14, 14, 0.1))',
          WebkitMask:
            'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />
      <Logo />
      <div className="flex items-center gap-[24px]">
        <LocaleSwitcher />
        <div className="w-px h-[20px] bg-[#d2d2d2]"></div>
        <Burger
          isOpen={isMenuOpen}
          setIsOpen={setIsMenuOpen}
          onOpenFeedback={() => setIsFeedbackOpen(true)}
        />
      </div>
      <FeedbackModal isOpen={isFeedbackOpen} onOpenChange={setIsFeedbackOpen} />
    </div>
  );
};

export default MobileLaptopHeader;
