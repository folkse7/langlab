import { CardsCarousel } from './carousel';
import { HeaderAction } from './headeraction';
import { TitlePaper } from './pheader';
import { PaperMenu } from './ppmenu';

export default function PastPaper() {
  return (
      <>
<HeaderAction links={[{ link: "wordbanks", label: "Word Banks" }, { link: "guides", label: "Exam Guides" }, { link: "pastpapers", label: "Past Papers" }]}> </HeaderAction>      
<TitlePaper></TitlePaper>
<PaperMenu></PaperMenu>
<CardsCarousel></CardsCarousel>
      </>
  );
}