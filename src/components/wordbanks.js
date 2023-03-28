import { HeaderAction } from './headeraction';
import { ContainedInputs, LanguagePicker } from './menus';

export default function WordBanks() {
  return (
      <>
      <HeaderAction links={[{ link: "Wordbanks.js", label: "Word Banks" }, { link: "https://google.com", label: "Exam Guides" }, { link: "https://google.com", label: "Past Papers" }]}> </HeaderAction>
      <ContainedInputs></ContainedInputs>
      </>
  );
}