import { FooterSocial } from './footer';
import { ImageBackground } from './gheader';
import { GuideInputs } from './guidemenu';
import { HeaderAction } from './headeraction';

export default function Guides() {
  return (
      <>
      <HeaderAction links={[{ link: "Wordbanks.js", label: "Word Banks" }, { link: "https://google.com", label: "Exam Guides" }, { link: "https://google.com", label: "Past Papers" }]}> </HeaderAction>
      <ImageBackground></ImageBackground>
      <GuideInputs></GuideInputs>
      <FooterSocial></FooterSocial>
      </>
  );
}