import { Link } from "@/i18n/navigation";
import Container from "./container";

export interface BreadcrumbStep {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  steps: BreadcrumbStep[];
  className?: string;
}

function Breadcrumbs({ steps, className = "" }: BreadcrumbsProps) {
  if (!steps.length) return null;

  const parents = steps.slice(0, -1);
  const current = steps[steps.length - 1]!;

  const navClass = `relative z-10 min-w-0 font-montserrat font-light leading-[120%] text-[12px] lg:text-[14px] ${className}`;
  const sep = (
    <span className="mx-2 shrink-0 text-white select-none" aria-hidden="true">
      /
    </span>
  );

  return (
    <Container>
      <nav aria-label="Breadcrumb" className={navClass}>
        <ul className="m-0 flex list-none flex-wrap items-baseline gap-y-2 p-0">
          {parents.map((step, index) => {
            const isLastParent = index === parents.length - 1;

            return (
              <li
                key={step.href ?? `crumb-${index}`}
                className="inline-flex shrink-0 items-baseline"
              >
                {index > 0 ? sep : null}
                <Link
                  href={step.href || "/"}
                  className="relative inline-block max-w-full break-words pb-0.5 text-white font-light group"
                >
                  {step.label}
                  <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-y-0 bg-white transition-transform duration-300 ease-out group-hover:scale-y-100" />
                </Link>
                {isLastParent && parents.length > 0 ? sep : null}
              </li>
            );
          })}

          <li className="flex min-w-0 w-full basis-full items-baseline sm:w-auto sm:flex-1 sm:basis-0">
            <span
              aria-current="page"
              className="min-w-0 flex-1 text-left break-words text-white font-light [overflow-wrap:anywhere]"
            >
              {current.label}
            </span>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
export { Breadcrumbs };
