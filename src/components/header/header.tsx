import DesktopHeader from '../ui/desktop-header';
import MobileLaptopHeader from '../ui/mobile-laptop-header';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-100 md:px-[32px] pt-[12px] md:pt-[30px] pointer-events-none">
      <div className="hidden lg:block pointer-events-auto">
        <DesktopHeader />
      </div>
      <div className="lg:hidden pointer-events-auto">
        <MobileLaptopHeader />
      </div>
    </header>
  );
};

export default Header;
