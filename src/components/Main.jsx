import React from 'react';
import SectionHero from './SectionHero';
import SectionTeam from './SectionTeam';
import TextBlock from './TextBlock';

function Main() {
  return (
    <main className="clearfix">
      <SectionHero />
      <SectionTeam />
      <TextBlock />
    </main>
  );
}

export default Main;