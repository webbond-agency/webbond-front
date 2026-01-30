"use client";

import { PortableText, PortableTextComponents } from "@portabletext/react";
import { useMemo } from "react";
import { cn } from "@/lib/utils";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
  paragraphClassName?: string;
}

export default function CustomPortableText({
  value,
  paragraphClassName,
}: Props) {
  const components: PortableTextComponents = useMemo(
    () => ({
      marks: {
        textColor: ({ children, value }) => {
          const isWhite = value.color === "white";
          return (
            <span className={isWhite ? "text-white font-light" : ""}>
              {children}
            </span>
          );
        },
      },
      block: {
        normal: ({ children }) => (
          <p className={cn("font-montserrat font-light", paragraphClassName)}>
            {children}
          </p>
        ),
      },
    }),
    [paragraphClassName]
  );

  return <PortableText value={value} components={components} />;
}
