'use client';
import Image from 'next/image';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { cn } from '@/lib/utils';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { useState } from 'react';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import SuccessModal from './success-modal';
import { ChevronDown, Loader2 } from 'lucide-react';
import { m } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { sendNotification } from '@/app/actions/telegram-action';
import GooeyWhiteButton from './ui/gooey-white-button';

interface FeedbackFormContentProps {
  onSuccess?: () => void;
  className?: string;
}

const FeedbackFormContent = ({
  onSuccess,
  className,
}: FeedbackFormContentProps) => {
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const t = useTranslations('FeedbackModal');

  const formSchema = z.object({
    username: z.string().min(2, {
      message: t('validation.nameMin'),
    }),
    phone: z
      .string()
      .min(1, { message: t('validation.phoneRequired') })
      .refine(
        (value) => {
          if (!isValidPhoneNumber(value)) return false;
          // Strict check for Ukraine: +380 XX XXX XX XX is exactly 13 characters
          if (value.startsWith('+380') && value.length !== 13) return false;
          return true;
        },
        {
          message: t('validation.phoneInvalid'),
        },
      ),
    email: z.email({
      message: t('validation.emailInvalid'),
    }),
    message: z
      .string()
      .min(1, {
        message: t('validation.messageRequired'),
      })
      .max(1000, {
        message: t('validation.messageMax'),
      }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      username: '',
      phone: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setSubmissionError(null);
    try {
      const message = `<b>🔔 Ny anmodning om konsultation</b>\n\n👤 <b>Navn:</b> ${data.username}\n📱 <b>Telefon:</b> <code>${data.phone}</code>\n📧 <b>E-mail:</b> ${data.email}\n💬 <b>Besked:</b> ${data.message}\n\n<i>🚀 Anmodning fra kontaktformularen</i>`;

      await sendNotification(message, { parseMode: 'HTML' });

      // Success - notify parent to switch view or close
      if (onSuccess) onSuccess();
      form.reset();
    } catch (error) {
      console.error('Failed to send notification:', error);
      setSubmissionError(t('validation.submitError'));
    }
  };

  return (
    <>
      <div className={cn('relative', className)}>
        <div className="absolute -z-10 top-[-1050px] left-[-650px] md:top-[-950px] md:left-[-650px] pointer-events-none select-none transform-gpu">
          <Image
            src="/feddback-modal-shadow.webp"
            alt="Feedback Modal Shadow"
            width={1200}
            height={1300}
            sizes="33vw"
            quality={60}
            className="max-w-none"
          />
        </div>
        <div className="absolute -z-10 bottom-[-1050px] right-[-750px] md:bottom-[-1050px] md:right-[-750px] pointer-events-none select-none transform-gpu">
          <Image
            src="/feddback-modal-shadow.webp"
            alt="Feedback Modal Shadow"
            width={1200}
            height={1300}
            sizes="33vw"
            quality={60}
            className="max-w-none rotate-180"
          />
        </div>

        <m.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col items-center [@media(max-height:800px)]:items-start will-change-[opacity,transform] transform-gpu"
        >
          <h2 className="mb-[24px] [@media(max-height:800px)]:mb-[20px] font-manrope font-light text-[40px] [@media(max-height:800px)]:text-[32px] md:text-[48px] lg:text-[64px] uppercase text-white leading-[120%] [@media(max-height:800px)]:text-left">
            {t('title')}
          </h2>
          <p className="mb-[24px] [@media(max-height:800px)]:mb-[20px] font-montserrat font-light text-[12px] md:text-[14px] text-white leading-[120%] [@media(max-height:800px)]:text-left">
            {t('description')}
          </p>
        </m.div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5 [@media(max-height:800px)]:space-y-5 w-full"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder={t('form.namePlaceholder')}
                      {...field}
                      className="h-[45px] [@media(max-height:800px)]:h-[46px] md:h-[52px] rounded-[38px] border border-white px-4 font-montserrat text-[16px] text-white placeholder:text-white focus-visible:border-red-200 focus-visible:ring-0"
                    />
                  </FormControl>
                  <FormMessage className="ml-4" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div
                      className={cn(
                        'relative flex items-center h-[45px] [@media(max-height:800px)]:h-[46px] md:h-[52px] rounded-[38px] border bg-transparent transition-colors overflow-hidden',
                        form.formState.errors.phone
                          ? 'border-red-500'
                          : 'border-white',
                      )}
                    >
                      <PhoneInput
                        placeholder="+45"
                        defaultCountry="DK"
                        countries={[
                          'DK',
                          'UA',
                          'PL',
                          'DE',
                          'FR',
                          'IT',
                          'ES',
                          'RO',
                          'MD',
                          'SK',
                          'HU',
                          'AT',
                          'BE',
                          'BG',
                          'CY',
                          'CZ',
                          'EE',
                          'FI',
                          'GR',
                          'IE',
                          'LT',
                          'LU',
                          'MT',
                          'NL',
                          'PT',
                          'SE',
                          'SI',
                          'NO',
                          'CH',
                          'GB',
                          'US',
                        ]}
                        international
                        withCountryCallingCode
                        limitMaxLength={true}
                        value={field.value}
                        onChange={field.onChange}
                        className="flex h-full w-full items-center font-montserrat text-[16px] text-white placeholder:text-white/50 
                            [&>input]:h-full [&>input]:border-none [&>input]:bg-transparent [&>input]:outline-none [&>input]:placeholder:text-white/50 [&>input]:px-4
                            [&_select]:appearance-none
                            [&_.PhoneInputCountry]:flex [&_.PhoneInputCountry]:items-center [&_.PhoneInputCountry]:h-full [&_.PhoneInputCountry]:pl-4 [&_.PhoneInputCountry]:pr-[40px] [&_.PhoneInputCountry]:border-r [&_.PhoneInputCountry]:border-white/20 [&_.PhoneInputCountry]:gap-[10px]
                            [&_.PhoneInputCountryIcon]:w-[32px]! [&_.PhoneInputCountryIcon]:h-[24px]! [&_.PhoneInputCountryIcon]:shadow-none! 
                            [&_.PhoneInputCountrySelectArrow]:hidden! [&_.PhoneInputCountrySelectArrow]:opacity-0!"
                      />
                      <div className="absolute left-[58px] pointer-events-none">
                        <ChevronDown className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage className="ml-4" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder={t('form.emailPlaceholder')}
                      {...field}
                      className="h-[45px] [@media(max-height:800px)]:h-[46px] md:h-[52px] rounded-[38px] border border-white px-4 font-montserrat text-[16px] text-white placeholder:text-white focus-visible:border-red-200 focus-visible:ring-0"
                    />
                  </FormControl>
                  <FormMessage className="ml-4" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder={t('form.messagePlaceholder')}
                      {...field}
                      className="h-[100px] [@media(max-height:800px)]:h-[90px] lg:h-[128px] rounded-[18px] border border-white px-4 py-3 font-montserrat text-[16px] text-white placeholder:text-white focus-visible:border-red-200 focus-visible:ring-0"
                    />
                  </FormControl>
                  <FormMessage className="ml-4" />
                </FormItem>
              )}
            />
            {submissionError && (
              <p className="text-red-500 text-[14px] font-montserrat text-center animate-in fade-in slide-in-from-top-1 duration-300">
                {submissionError}
              </p>
            )}
            <GooeyWhiteButton
              type="submit"
              text={t('form.submit')}
              loadingText={t('form.loading')}
              disabled={form.formState.isSubmitting || !form.formState.isValid}
              isLoading={form.formState.isSubmitting}
              className="mx-auto text-center w-full text-[14px] font-montserrat font-light text-black"
              height={52}
            />
          </form>
        </Form>
      </div>
    </>
  );
};

export default FeedbackFormContent;
