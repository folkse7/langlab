import { CardsCarousel } from './carousel';
import { FooterSocial } from './footer';
import { HeaderAction } from './headeraction';
import { FaqWithImage } from './paperd';
import { TitlePaper } from './pheader';
import { PaperMenu } from './ppmenu';

export default function PastPaper() {
  return (
      <>
      <HeaderAction links={[{ link: "wordbanks", label: "Word Banks" }, { link: "guides", label: "Exam Guides" }, { link: "pastpapers", label: "Past Papers" }]}> </HeaderAction>      
      <TitlePaper></TitlePaper>
      <PaperMenu></PaperMenu>
      <FaqWithImage></FaqWithImage>
      {/* <CardsCarousel></CardsCarousel> */}
      <FooterSocial></FooterSocial>
      </>
  );
}