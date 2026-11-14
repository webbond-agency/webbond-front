import { cn } from '@/lib/utils';
import { Link } from '@/i18n/navigation';

const Logo = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <Link
      href="/#hero"
      onClick={onClick}
      aria-label="WebBond"
      className={cn(
        'shrink-0 font-manrope font-semibold uppercase leading-none text-white text-[18px] tracking-[0.18em]',
        className,
      )}
    >
      WEBBOND
    </Link>
  );
};

export default Logo;
