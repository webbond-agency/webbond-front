'use client';
import { useIsMobile } from '@/hooks/use-mobile';
import DesktopTeamContainer from './desktop-team-container';
import TeamContainer from './team-container';

const TeamWrapper = () => {
  const isMobile = useIsMobile();

  // Mobile-first SSR so content is in the HTML and doesn't all mount after hydration.
  return (
    <section>
      {isMobile === false ? <DesktopTeamContainer /> : <TeamContainer />}
    </section>
  );
};

export default TeamWrapper;
