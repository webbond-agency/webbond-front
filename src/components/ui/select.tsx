"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

export type SelectOption = {
  value: string;
  label: string;
};

export type SelectProps = {
  value: string;
  onValueChange: (value: string) => void;
  options: SelectOption[];
  placeholder: string;
  disabled?: boolean;
  className?: string;
  triggerClassName?: string;
  id?: string;
  "aria-invalid"?: boolean;
  "aria-describedby"?: string;
};

const Select = React.forwardRef<HTMLButtonElement, SelectProps>(function Select(
  {
    value,
    onValueChange,
    options,
    placeholder,
    disabled,
    className,
    triggerClassName,
    id,
    "aria-invalid": ariaInvalid,
    "aria-describedby": ariaDescribedBy,
  },
  ref,
) {
  const [open, setOpen] = React.useState(false);
  const [highlightedIndex, setHighlightedIndex] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const listboxId = React.useId();

  const selected = options.find((o) => o.value === value);
  const displayLabel = selected?.label ?? "";

  React.useEffect(() => {
    if (!open) return;
    const idx = Math.max(
      0,
      options.findIndex((o) => o.value === value),
    );
    setHighlightedIndex(idx === -1 ? 0 : idx);
  }, [open, options, value]);

  React.useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent) => {
      const el = containerRef.current;
      if (el && !el.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  const selectIndex = (index: number) => {
    const opt = options[index];
    if (opt) {
      onValueChange(opt.value);
      setOpen(false);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (disabled) return;
    if (!open) {
      if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setOpen(true);
      }
      return;
    }
    switch (e.key) {
      case "Escape":
        e.preventDefault();
        setOpen(false);
        break;
      case "ArrowDown": {
        e.preventDefault();
        setHighlightedIndex((i) => (i >= options.length - 1 ? 0 : i + 1));
        break;
      }
      case "ArrowUp": {
        e.preventDefault();
        setHighlightedIndex((i) => (i <= 0 ? options.length - 1 : i - 1));
        break;
      }
      case "Enter":
      case " ": {
        e.preventDefault();
        selectIndex(highlightedIndex);
        break;
      }
      case "Home":
        e.preventDefault();
        setHighlightedIndex(0);
        break;
      case "End":
        e.preventDefault();
        setHighlightedIndex(options.length - 1);
        break;
      default:
        break;
    }
  };

  return (
    <div ref={containerRef} className={cn("relative w-full", className)}>
      <button
        ref={ref}
        id={id}
        type="button"
        disabled={disabled}
        aria-invalid={ariaInvalid || undefined}
        aria-describedby={ariaDescribedBy}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={listboxId}
        role="combobox"
        aria-activedescendant={
          open && options[highlightedIndex]
            ? `${listboxId}-option-${highlightedIndex}`
            : undefined
        }
        onKeyDown={onKeyDown}
        onClick={() => !disabled && setOpen((o) => !o)}
        className={cn(
          "flex min-h-[45px] w-full min-w-0 cursor-pointer items-center justify-between gap-3 rounded-[38px] border border-input bg-transparent px-4 py-2 text-left font-montserrat text-[12px] lg:text-[14px] text-white shadow-xs outline-none transition-[color,box-shadow,border-color] md:min-h-[52px]",
          "[@media(max-height:800px)]:min-h-[46px]",
          "focus-visible:border-red-200 focus-visible:ring-0",
          "aria-[invalid=true]:border-red-500",
          "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
          displayLabel ? "text-white" : "text-white",
          triggerClassName,
        )}
      >
        <span className="min-w-0 flex-1 wrap-break-word leading-[120%]">
          {displayLabel || placeholder}
        </span>
        <ChevronDown
          className={cn(
            "size-6 shrink-0 text-white transition-transform duration-200",
            open && "rotate-180",
          )}
          aria-hidden
        />
      </button>

      {open && options.length > 0 ? (
        <ul
          id={listboxId}
          role="listbox"
          className="absolute left-0 right-0 top-[calc(100%+8px)] z-[200] max-h-[min(320px,70vh)] overflow-auto rounded-[18px] bg-white p-2 shadow-lg"
        >
          {options.map((opt, index) => {
            const isSelected = opt.value === value;
            const isHighlighted = index === highlightedIndex;
            return (
              <li
                key={opt.value}
                id={`${listboxId}-option-${index}`}
                role="option"
                aria-selected={isSelected}
                className={cn(
                  "cursor-pointer rounded-[12px] px-4 py-3 font-montserrat text-[12px] lg:text-[14px] leading-[120%] text-neutral-900 outline-none transition-colors",
                  isHighlighted && "bg-neutral-100",
                  isSelected && "font-medium",
                )}
                onMouseEnter={() => setHighlightedIndex(index)}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => selectIndex(index)}
              >
                {opt.label}
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
});

Select.displayName = "Select";

export { Select };
