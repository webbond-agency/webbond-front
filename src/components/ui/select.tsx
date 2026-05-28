"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { createPortal } from "react-dom";

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
  const [mounted, setMounted] = React.useState(false);
  const [portalContainer, setPortalContainer] = React.useState<HTMLElement | null>(
    null,
  );
  const [dropdownPosition, setDropdownPosition] = React.useState<{
    top: number;
    left: number;
    width: number;
    placeAbove: boolean;
  }>({
    top: 0,
    left: 0,
    width: 0,
    placeAbove: false,
  });
  const containerRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const dropdownRef = React.useRef<HTMLUListElement>(null);
  const listboxId = React.useId();
  const isPositionReady = dropdownPosition.width > 0;

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
    setMounted(true);
  }, []);

  React.useEffect(() => {
    const containerEl = containerRef.current;
    if (!containerEl) return;

    const dialogContent = containerEl.closest(
      '[data-slot="dialog-content"]',
    ) as HTMLElement | null;

    setPortalContainer(dialogContent ?? document.body);
  }, []);

  React.useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent) => {
      const containerEl = containerRef.current;
      const dropdownEl = dropdownRef.current;
      const targetNode = e.target as Node;

      if (
        containerEl &&
        !containerEl.contains(targetNode) &&
        (!dropdownEl || !dropdownEl.contains(targetNode))
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  React.useEffect(() => {
    if (!open) return;

    const updatePosition = () => {
      const triggerEl = triggerRef.current;
      if (!triggerEl) return;

      const rect = triggerEl.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const spaceBelow = viewportHeight - rect.bottom;
      const spaceAbove = rect.top;
      const placeAbove = spaceBelow < 240 && spaceAbove > spaceBelow;

      const isDialogContainer =
        portalContainer !== null && portalContainer !== document.body;

      if (isDialogContainer && portalContainer) {
        const containerRect = portalContainer.getBoundingClientRect();
        setDropdownPosition({
          top:
            (placeAbove ? rect.top - 8 : rect.bottom + 8) -
            containerRect.top +
            portalContainer.scrollTop,
          left: rect.left - containerRect.left + portalContainer.scrollLeft,
          width: rect.width,
          placeAbove,
        });
        return;
      }

      setDropdownPosition({
        top: placeAbove ? rect.top - 8 : rect.bottom + 8,
        left: rect.left,
        width: rect.width,
        placeAbove,
      });
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);
    if (portalContainer && portalContainer !== document.body) {
      portalContainer.addEventListener("scroll", updatePosition);
    }

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
      if (portalContainer && portalContainer !== document.body) {
        portalContainer.removeEventListener("scroll", updatePosition);
      }
    };
  }, [open, portalContainer]);

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
        ref={(node) => {
          triggerRef.current = node;
          if (typeof ref === "function") {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
        }}
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

      {open &&
      options.length > 0 &&
      mounted &&
      portalContainer &&
      isPositionReady
        ? createPortal(
            <ul
              ref={dropdownRef}
              id={listboxId}
              role="listbox"
              style={{
                position:
                  portalContainer && portalContainer !== document.body
                    ? "absolute"
                    : "fixed",
                top: dropdownPosition.top,
                left: dropdownPosition.left,
                width: dropdownPosition.width,
                transform: dropdownPosition.placeAbove
                  ? "translateY(-100%)"
                  : undefined,
              }}
              className="z-[300] max-h-[min(320px,70vh)] overflow-auto rounded-[18px] bg-white p-2 shadow-lg"
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
                      "cursor-pointer rounded-[12px] px-4 py-2 font-montserrat text-[12px] lg:text-[14px] leading-[120%] text-neutral-900 outline-none transition-colors",
                      isHighlighted && "bg-neutral-100",
                      isSelected && "font-medium",
                    )}
                    onMouseEnter={() => setHighlightedIndex(index)}
                    onPointerDown={(e) => {
                      e.preventDefault();
                      selectIndex(index);
                    }}
                  >
                    {opt.label}
                  </li>
                );
              })}
            </ul>,
            portalContainer,
          )
        : null}
    </div>
  );
});

Select.displayName = "Select";

export { Select };
