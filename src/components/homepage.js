import { HeaderAction } from "./headeraction";
import { HeroTitle } from "./main";
import { GetInTouchSimple } from "./contact";
import { OurStory } from "./story";
import { FooterSocial } from "./footer";
import { FeaturesTitle } from "./features";
import { ToastContainer } from "react-toastify";
export default function Homepage() {
  return (
    <>
      <HeaderAction
        links={[
          { link: "wordbanks", label: "Word Banks" },
          { link: "guides", label: "Exam Guides" },
          { link: "pastpapers", label: "Past Papers" },
        ]}
      >
        {" "}
      </HeaderAction>{" "}
      <ToastContainer></ToastContainer>
      <HeroTitle></HeroTitle>
      <FeaturesTitle></FeaturesTitle>
      <OurStory></OurStory>
      <GetInTouchSimple></GetInTouchSimple>
      <FooterSocial></FooterSocial>
    </>
  );
}
