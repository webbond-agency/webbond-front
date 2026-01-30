'use client';
import FeedbackFormContent from './feedback-form-content';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog';
import { XIcon } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import SuccessModal from './success-modal';

interface FeedbackModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const FeedbackModalContent = ({ isOpen, onOpenChange }: FeedbackModalProps) => {
  const t = useTranslations('FeedbackModal');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Reset state after modal closes completely
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => setIsSubmitted(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (isSubmitted && isOpen) {
    return <SuccessModal isOpen={isOpen} onOpenChange={onOpenChange} />;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="w-[90%] md:w-full md:max-w-[480px] lg:max-w-[560px] p-[20px] md:p-[30px] lg:p-[40px] [@media(max-height:800px)]:p-[40px] rounded-[12px] border-none max-h-[90vh] overflow-hidden"
      >
        <DialogTitle className="sr-only">{t('title')}</DialogTitle>
        <DialogClose className="z-10 absolute right-[32px] top-[32px] ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground text-white cursor-pointer">
          <XIcon className="h-6 w-6" />
          <span className="sr-only">Close</span>
        </DialogClose>
        <FeedbackFormContent onSuccess={() => setIsSubmitted(true)} />
      </DialogContent>
    </Dialog>
  );
};

const FeedbackModal = (props: FeedbackModalProps) => {
  const locale = useLocale();
  return <FeedbackModalContent key={locale} {...props} />;
};

export default FeedbackModal;
