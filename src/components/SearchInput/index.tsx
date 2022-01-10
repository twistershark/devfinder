import { FiSearch } from "react-icons/fi";
import { Container, Input, SearchButton } from "./styles";
import { useState } from "react";
import { useUser } from "../../hooks/useUser";

export function SearchInput() {
  const [search, setSearch] = useState("");
  const { handleSearchUser } = useUser();

  return (
    <Container>
      <FiSearch color="#0079FB" />
      <Input
        placeholder="Search GitHub username..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <SearchButton onClick={() => handleSearchUser(search)}>
        Search
      </SearchButton>
    </Container>
  );
}
