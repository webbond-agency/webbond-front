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

  if (isMobile === undefined) return null;

  return (
    <section>
      {isMobile ? <CasesContainer cases={cases} /> : <DesktopCasesContainer cases={cases} />}
    </section>
  );
};

export default CasesWrapper;
