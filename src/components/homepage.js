import { HeaderAction } from './headeraction';

export default function Homepage() {
  return (
      <HeaderAction links={[{link: "https://google.com", label: "google"}]}> </HeaderAction>
  );
}
