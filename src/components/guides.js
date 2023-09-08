import { FooterSocial } from "./footer";
import { ImageBackground } from "./gheader";
import { GuideInputs } from "./guidemenu";
import { HeaderAction } from "./headeraction";

export default function Guides() {
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
      <ImageBackground></ImageBackground>
      <GuideInputs></GuideInputs>
      <FooterSocial></FooterSocial>
    </>
  );
}
