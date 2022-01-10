import { Container } from "../../styles/styles";
import { Header } from "../components/Header";
import { ProfileCard } from "../components/ProfileCard";
import { SearchInput } from "../components/SearchInput";

interface HomeProps {
  handleThemeChange: () => void;
}

export default function Home({ handleThemeChange }: HomeProps) {
  return (
    <Container>
      <Header handleThemeChange={handleThemeChange} />
      <SearchInput />
      <ProfileCard />
    </Container>
  );
}
