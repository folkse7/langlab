import { CardsCarousel } from './carousel';
import { HeaderAction } from './headeraction';

export default function PastPaper() {
  return (
      <>
      <HeaderAction links={[{ link: "Wordbanks.js", label: "Word Banks" }, { link: "https://google.com", label: "Exam Guides" }, { link: "https://google.com", label: "Past Papers" }]}> </HeaderAction>
      <CardsCarousel></CardsCarousel>
      </>
  );
}