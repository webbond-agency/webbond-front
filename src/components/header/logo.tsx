import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';

const Logo = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <Link href="/#hero" className="flex items-center shrink-0">
      <Image
        src="/logo-mobile.svg"
        alt="Logo"
        width={121}
        height={20}
        className={cn('lg:hidden', className)}
        onClick={onClick}
      />
      <Image
        src="/logo-desktop.svg"
        alt="Logo"
        width={121}
        height={20}
        className={cn('hidden lg:block', className)}
      />
    </Link>
  );
};

export default Logo;
