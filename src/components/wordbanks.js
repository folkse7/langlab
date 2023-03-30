import { FooterSocial } from './footer';
import { HeroImageBackground } from './header';
import { HeaderAction } from './headeraction';
import { ContainedInputs } from './menus';
import { TableScrollArea } from './table';

export default function WordBanks() {
  return (
      <>
<HeaderAction links={[{ link: "wordbanks", label: "Word Banks" }, { link: "guides", label: "Exam Guides" }, { link: "pastpapers", label: "Past Papers" }]}> </HeaderAction>      <HeroImageBackground></HeroImageBackground>
      <ContainedInputs></ContainedInputs>
      <TableScrollArea></TableScrollArea>
      <FooterSocial></FooterSocial>
      </>
  );
}