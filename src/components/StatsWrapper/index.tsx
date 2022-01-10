import { useUser } from "../../hooks/useUser";
import { Container, Category, Data } from "./styles";

export function StatsWrapper() {
  const { user } = useUser();

  return (
    <Container>
      <Category>Repos</Category>
      <Category>Followers</Category>
      <Category>Following</Category>
      <Data>{user.public_repos}</Data>
      <Data>{user.followers}</Data>
      <Data>{user.following}</Data>
    </Container>
  );
}
