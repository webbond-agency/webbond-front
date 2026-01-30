'use client';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { XIcon } from 'lucide-react';

import { useTranslations } from 'next-intl';
import GooeyWhiteButton from './ui/gooey-white-button';
import Image from 'next/image';
import SuccessContent from './success-content';

interface SuccessModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const SuccessModal = ({ isOpen, onOpenChange }: SuccessModalProps) => {
  const t = useTranslations('SuccessModal');
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="overflow-hidden border-none p-[30px] xl:p-[40px] w-full max-w-[600px] rounded-[12px]"
      >
        <DialogTitle className="sr-only">{t('title')}</DialogTitle>
        <DialogClose className="absolute right-4 top-4 z-20 ring-offset-background transition-opacity hover:opacity-100 text-white cursor-pointer">
          <XIcon className="h-6 w-6 text-white" />
          <span className="sr-only">Close</span>
        </DialogClose>

        <SuccessContent onClose={() => onOpenChange(false)} />
      </DialogContent>
    </Dialog>
  );
};

export default SuccessModal;
