import { Link } from '@/i18n/navigation';

export interface BreadcrumbStep {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  steps: BreadcrumbStep[];
  className?: string;
}

function Breadcrumbs({ steps, className = '' }: BreadcrumbsProps) {
  return (
    <nav
      aria-label='Breadcrumb'
      className={`relative z-10 flex flex-wrap items-center font-montserrat font-light leading-[120%] text-[12px] lg:text-[14px] ${className}`}
    >
      <ul className='flex items-center list-none p-0 m-0'>
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;

          return (
            <li key={index} className='flex items-center'>
              {index > 0 && (
                <span
                  className='mx-2 text-white select-none'
                  aria-hidden='true'
                >
                  /
                </span>
              )}

              {isLast ? (
                <span aria-current='page' className='text-white font-light'>
                  {step.label}
                </span>
              ) : (
                <Link
                  href={step.href || '/'}
                  className='relative text-white font-light group pb-0.5'
                >
                  {step.label}
                  <span className='absolute bottom-0 left-0 w-full h-px bg-white scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-left ease-out' />
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
export { Breadcrumbs };
