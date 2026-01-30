import CtaContainer from "./cta-container";
import DesktopCtaContainer from "./desktop-cta-container";

const CtaWrapper = () => {
  return (
    <section className="pt-[178px] md:pt-[214px] pb-[148px]">
      <CtaContainer />
      <DesktopCtaContainer />
    </section>
  );
};

export default CtaWrapper;
