'use client';

import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { startTransition, useOptimistic, useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LangsProps {
  className?: string;
  triggerClassName?: string;
}

const LocaleSwitcher = ({ className, triggerClassName }: LangsProps) => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Оптимистичное состояние для языка
  const [optimisticLocale, setOptimisticLocale] = useOptimistic(locale);

  const onLocaleChange = (nextLocale: string) => {
    if (nextLocale !== locale) {
      // Оптимистично меняем UI
      startTransition(() => {
        setOptimisticLocale(nextLocale);
      });
      // Асинхронно меняем язык в роутере
      router.replace(pathname, { locale: nextLocale });
      router.refresh();
    }
  };

  const languages = [
    { code: 'da', label: 'DA' },
    { code: 'en', label: 'EN' },
  ];

  const currentLanguage =
    languages.find((lang) => lang.code === optimisticLocale) || languages[0];

  return (
    <div className={cn('relative', className)}>
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <button
            className={cn(
              'cursor-pointer flex items-center gap-[6px] text-white outline-none text-[14px]',
              triggerClassName,
            )}
          >
            <span className="font-montserrat font-medium uppercase">
              {currentLanguage.label}
            </span>
            {isOpen ? (
              <ChevronUp className="w-[1em] h-[1em]" />
            ) : (
              <ChevronDown className="w-[1em] h-[1em]" />
            )}
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="relative border-none bg-white/3 backdrop-blur-[32px] rounded-[24px] p-[16px] w-[var(--radix-dropdown-menu-trigger-width)] shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] mt-2 z-[250] overflow-hidden safari-blur-fix"
        >
          {/* Gradient Border Overlay for Dropdown */}
          <div
            className="absolute inset-0 rounded-[24px] pointer-events-none"
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
          <div className="relative flex flex-col gap-[8px] z-10">
            {languages.map((lang) => (
              <DropdownMenuItem
                key={lang.code}
                onClick={() => onLocaleChange(lang.code)}
                className="flex items-center justify-between p-0 focus:bg-white/10 cursor-pointer rounded-lg px-2 py-1 transition-colors"
              >
                <div className="flex items-center gap-[12px]">
                  <div className="w-[16px] flex justify-center">
                    {optimisticLocale === lang.code && (
                      <Check className="w-[16px] h-[16px] text-white" />
                    )}
                  </div>
                  <span
                    className={cn(
                      'font-montserrat font-medium text-[16px] uppercase text-white',
                    )}
                  >
                    {lang.label}
                  </span>
                </div>
              </DropdownMenuItem>
            ))}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LocaleSwitcher;
