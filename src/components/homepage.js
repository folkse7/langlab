import { HeaderAction } from './headeraction';
import { HeroTitle } from './main';
import {GetInTouchSimple } from './contact';
import { OurStory } from './story';
import { FooterSocial } from './footer';

export default function Homepage() {
  return (
      <>
      <HeaderAction links={[{ link: "Wordbanks.js", label: "Word Banks" }, { link: "https://google.com", label: "Exam Guides" }, { link: "https://google.com", label: "Past Papers" }]}> </HeaderAction>
      <HeroTitle></HeroTitle>
      <OurStory></OurStory>
      <GetInTouchSimple></GetInTouchSimple>
      <FooterSocial></FooterSocial>
      </>
  );
}
