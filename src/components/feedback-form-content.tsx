"use client";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import { cn } from "@/lib/utils";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useEffect, useMemo, useState } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import SuccessModal from "./success-modal";
import { ChevronDown } from "lucide-react";
import { m } from "framer-motion";
import { useTranslations } from "next-intl";
import { sendNotification } from "@/app/actions/telegram-action";
import GooeyWhiteButton from "./ui/gooey-white-button";

interface FeedbackFormContentProps {
  onSuccess?: () => void;
  className?: string;
}

const INTERESTED_SERVICE_VALUES = [
  "website",
  "seo",
  "logo",
  "google_ads",
  "fb_ads",
  "other",
] as const;

const FeedbackFormContent = ({
  onSuccess,
  className,
}: FeedbackFormContentProps) => {
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const t = useTranslations("FeedbackModal");

  const languageOptions = useMemo(
    () => [
      { value: "da", label: t("form.languages.da") },
      { value: "en", label: t("form.languages.en") },
      { value: "uk", label: t("form.languages.uk") },
      { value: "ru", label: t("form.languages.ru") },
    ],
    [t],
  );

  const serviceOptions = useMemo(
    () => [
      { value: "website", label: t("form.services.website") },
      { value: "seo", label: t("form.services.seo") },
      { value: "logo", label: t("form.services.logo") },
      { value: "google_ads", label: t("form.services.googleAds") },
      { value: "fb_ads", label: t("form.services.fbAds") },
      { value: "other", label: t("form.services.other") },
    ],
    [t],
  );

  const formSchema = z
    .object({
      username: z.string().min(2, {
        message: t("validation.nameMin"),
      }),
      phone: z
        .string()
        .min(1, { message: t("validation.phoneRequired") })
        .refine(
          (value) => {
            if (!isValidPhoneNumber(value)) return false;
            // Strict check for Ukraine: +380 XX XXX XX XX is exactly 13 characters
            if (value.startsWith("+380") && value.length !== 13) return false;
            return true;
          },
          {
            message: t("validation.phoneInvalid"),
          },
        ),
      email: z.email({
        message: t("validation.emailInvalid"),
      }),
      preferredLanguage: z
        .string()
        .refine((v) => ["da", "en", "uk", "ru"].includes(v), {
          message: t("validation.languageRequired"),
        }),
      interestedService: z
        .string()
        .refine(
          (v) => (INTERESTED_SERVICE_VALUES as readonly string[]).includes(v),
          {
            message: t("validation.serviceRequired"),
          },
        ),
      otherServiceNote: z.string().max(200, {
        message: t("validation.messageMax"),
      }),
      message: z
        .string()
        .min(1, {
          message: t("validation.messageRequired"),
        })
        .max(1000, {
          message: t("validation.messageMax"),
        }),
    })
    .superRefine((data, ctx) => {
      if (
        data.interestedService === "other" &&
        data.otherServiceNote.trim().length === 0
      ) {
        ctx.addIssue({
          code: "custom",
          message: t("validation.otherServiceRequired"),
          path: ["otherServiceNote"],
        });
      }
    });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      username: "",
      phone: "",
      email: "",
      preferredLanguage: "",
      interestedService: "other",
      otherServiceNote: "",
      message: "",
    },
  });

  const interestedService = useWatch({
    control: form.control,
    name: "interestedService",
  });

  useEffect(() => {
    if (interestedService !== "other") {
      form.setValue("otherServiceNote", "");
      form.clearErrors("otherServiceNote");
    }
  }, [interestedService, form]);

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setSubmissionError(null);
    try {
      const languageLabel =
        languageOptions.find((o) => o.value === data.preferredLanguage)
          ?.label ?? data.preferredLanguage;
      const serviceLabel =
        serviceOptions.find((o) => o.value === data.interestedService)?.label ??
        data.interestedService;
      const serviceDetail =
        data.interestedService === "other" && data.otherServiceNote.trim()
          ? `${serviceLabel}: ${data.otherServiceNote.trim()}`
          : serviceLabel;
      const message = `<b>🔔 Ny anmodning om konsultation</b>\n\n👤 <b>Navn:</b> ${data.username}\n📱 <b>Telefon:</b> <code>${data.phone}</code>\n📧 <b>E-mail:</b> ${data.email}\n🌐 <b>Sprog:</b> ${languageLabel}\n🛠 <b>Service:</b> ${serviceDetail}\n💬 <b>Besked:</b> ${data.message}\n\n<i>🚀 Anmodning fra kontaktformularen</i>`;

      await sendNotification(message, { parseMode: "HTML" });

      // Success - notify parent to switch view or close
      if (onSuccess) onSuccess();
      form.reset();
    } catch (error) {
      console.error("Failed to send notification:", error);
      setSubmissionError(t("validation.submitError"));
    }
  };

  return (
    <>
      <div className={cn("relative", className)}>
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
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center [@media(max-height:800px)]:items-start will-change-[opacity,transform] transform-gpu"
        >
          <h2 className="mb-[24px] [@media(max-height:800px)]:mb-[20px] font-manrope font-light text-[40px] [@media(max-height:800px)]:text-[32px] md:text-[48px] lg:text-[64px] uppercase text-white leading-[120%] [@media(max-height:800px)]:text-left">
            {t("title")}
          </h2>
          <p className="mb-[24px] [@media(max-height:800px)]:mb-[20px] font-montserrat font-light text-[12px] md:text-[14px] text-white leading-[120%] [@media(max-height:800px)]:text-left">
            {t("description")}
          </p>
        </m.div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5 [@media(max-height:800px)]:space-y-5 w-full"
          >
            <div className="flex flex-col gap-5 md:flex-row">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="md:w-[calc(50%-10px)]">
                    <FormControl>
                      <Input
                        placeholder={t("form.namePlaceholder")}
                        {...field}
                        className="h-[45px] [@media(max-height:800px)]:h-[46px] md:h-[52px] rounded-[38px] border border-white px-4 font-montserrat text-[12px] lg:text-[14px] text-white placeholder:text-white focus-visible:border-red-200 focus-visible:ring-0"
                      />
                    </FormControl>
                    <FormMessage className="ml-4" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="md:w-[calc(50%-10px)]">
                    <FormControl>
                      <Input
                        placeholder={t("form.emailPlaceholder")}
                        {...field}
                        className="h-[45px] [@media(max-height:800px)]:h-[46px] md:h-[52px] rounded-[38px] border border-white px-4 font-montserrat text-[12px] lg:text-[14px] text-white placeholder:text-white focus-visible:border-red-200 focus-visible:ring-0"
                      />
                    </FormControl>
                    <FormMessage className="ml-4" />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-col gap-5 md:flex-row">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="md:w-[calc(50%-10px)]">
                    <FormControl>
                      <div
                        className={cn(
                          "relative flex items-center h-[45px] [@media(max-height:800px)]:h-[46px] md:h-[52px] rounded-[38px] border bg-transparent transition-colors overflow-hidden",
                          form.formState.errors.phone
                            ? "border-red-500"
                            : "border-white",
                        )}
                      >
                        <PhoneInput
                          placeholder="+45"
                          defaultCountry="DK"
                          countries={[
                            "DK",
                            "UA",
                            "PL",
                            "DE",
                            "FR",
                            "IT",
                            "ES",
                            "RO",
                            "MD",
                            "SK",
                            "HU",
                            "AT",
                            "BE",
                            "BG",
                            "CY",
                            "CZ",
                            "EE",
                            "FI",
                            "GR",
                            "IE",
                            "LT",
                            "LU",
                            "MT",
                            "NL",
                            "PT",
                            "SE",
                            "SI",
                            "NO",
                            "CH",
                            "GB",
                            "US",
                          ]}
                          international
                          withCountryCallingCode
                          limitMaxLength={true}
                          value={field.value}
                          onChange={field.onChange}
                          className="flex h-full w-full items-center font-montserrat text-[12px] lg:text-[14px] text-white placeholder:text-white/50 
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
                name="preferredLanguage"
                render={({ field }) => (
                  <FormItem className="md:w-[calc(50%-10px)]">
                    <FormControl>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                        options={languageOptions}
                        placeholder={t("form.languagePlaceholder")}
                        triggerClassName="border-white"
                      />
                    </FormControl>
                    <FormMessage className="ml-4" />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="interestedService"
              render={({ field }) => (
                <FormItem>
                  <p className="mb-2 font-montserrat font-light text-[12px] md:text-[14px] text-white leading-[120%] [@media(max-height:800px)]:text-left">
                    {t("form.serviceLabel")}
                  </p>
                  <FormControl>
                    <Select
                      value={field.value}
                      onValueChange={field.onChange}
                      options={serviceOptions}
                      placeholder={t("form.servicePlaceholder")}
                      triggerClassName="border-white"
                    />
                  </FormControl>
                  <FormMessage className="ml-4" />
                </FormItem>
              )}
            />

            {interestedService === "other" ? (
              <FormField
                control={form.control}
                name="otherServiceNote"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder={t("form.messagePlaceholder")}
                        {...field}
                        className="h-[45px] [@media(max-height:800px)]:h-[46px] md:h-[52px] rounded-[38px] border border-white px-4 font-montserrat text-[12px] lg:text-[14px] text-white placeholder:text-white focus-visible:border-red-200 focus-visible:ring-0"
                      />
                    </FormControl>
                    <FormMessage className="ml-4" />
                  </FormItem>
                )}
              />
            ) : null}

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder={t("form.messagePlaceholder")}
                      {...field}
                      className="h-[100px] [@media(max-height:800px)]:h-[90px] lg:h-[128px] rounded-[18px] border border-white px-4 py-3 font-montserrat text-[12px] lg:text-[14px] text-white placeholder:text-white focus-visible:border-red-200 focus-visible:ring-0"
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
              text={t("form.submit")}
              loadingText={t("form.loading")}
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
