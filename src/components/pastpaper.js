import { CardsCarousel } from './carousel';
import { HeaderAction } from './headeraction';

export default function PastPaper() {
  return (
      <>
<HeaderAction links={[{ link: "wordbanks", label: "Word Banks" }, { link: "guides", label: "Exam Guides" }, { link: "pastpapers", label: "Past Papers" }]}> </HeaderAction>      <CardsCarousel></CardsCarousel>
      </>
  );
}