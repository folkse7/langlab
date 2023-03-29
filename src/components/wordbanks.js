import { HeroImageBackground } from './header';
import { HeaderAction } from './headeraction';
import { ContainedInputs } from './menus';
import { TableScrollArea } from './table';

export default function WordBanks() {
  return (
      <>
      <HeaderAction links={[{ link: "Wordbanks.js", label: "Word Banks" }, { link: "https://google.com", label: "Exam Guides" }, { link: "https://google.com", label: "Past Papers" }]}> </HeaderAction>
      <HeroImageBackground></HeroImageBackground>
      <ContainedInputs></ContainedInputs>
      <TableScrollArea></TableScrollArea>
      </>
  );
}