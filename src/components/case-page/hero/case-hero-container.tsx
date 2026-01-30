import { CaseWithLanguage } from '@/types/case';
import CaseHeroMobile from './case-hero-mobile';
import CaseHeroDesktop from './case-hero-desktop';

const CaseHeroContainer = ({
  currentCase,
}: {
  currentCase: CaseWithLanguage;
}) => {
  return (
    <section>
      <CaseHeroMobile currentCase={currentCase} />
      <CaseHeroDesktop currentCase={currentCase} />
    </section>
  );
};

export default CaseHeroContainer;
