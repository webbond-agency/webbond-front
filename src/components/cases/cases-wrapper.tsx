'use client';
import { useIsMobile } from '@/hooks/use-mobile';
import CasesContainer from './cases-container';
import DesktopCasesContainer from './desktop-cases-container';
import { CaseWithLanguage } from '@/types/case';

interface CasesWrapperProps {
  cases: CaseWithLanguage[];
}

const CasesWrapper = ({ cases }: CasesWrapperProps) => {
  const isMobile = useIsMobile();

  // Mobile-first SSR so content is in the HTML and doesn't all mount after hydration.
  return (
    <section>
      {isMobile === false ? (
        <DesktopCasesContainer cases={cases} />
      ) : (
        <CasesContainer cases={cases} />
      )}
    </section>
  );
};

export default CasesWrapper;
