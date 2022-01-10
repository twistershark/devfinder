import { FaLink, FaMapMarkerAlt, FaTwitter, FaBuilding } from "react-icons/fa";
import { useUser } from "../../hooks/useUser";
import { GithubAnimation } from "../GithubAnimation";
import { StatsWrapper } from "../StatsWrapper";
import { UserNotFoundAnimation } from "../UserNotFoundAnimation";
import {
  Container,
  UserInfoWrapper,
  Image,
  UserJoinDate,
  UserName,
  UserNameGithub,
  BioDescription,
  SocialInfo,
  SocialLink,
  NoDataContainer,
  NoDataTitle,
} from "./styles";

export function ProfileCard() {
  const { user, userNotFound } = useUser();

  if (!user?.login && !userNotFound) {
    return (
      <NoDataContainer>
        <GithubAnimation />
        <NoDataTitle>Search for a GitHub user</NoDataTitle>
      </NoDataContainer>
    );
  }

  if (userNotFound) {
    return (
      <NoDataContainer>
        <UserNotFoundAnimation />
        <NoDataTitle>User not found!</NoDataTitle>
      </NoDataContainer>
    );
  }

  return (
    <Container>
      <Image src={user.avatar_url} alt={user.name} />
      <UserInfoWrapper>
        <div>
          <UserName>{user.name}</UserName>
          <UserNameGithub>@{user.login}</UserNameGithub>
        </div>
        <UserJoinDate>
          Joined{" "}
          {Intl.DateTimeFormat("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          }).format(new Date(user.created_at))}
        </UserJoinDate>
      </UserInfoWrapper>
      <BioDescription>{user.bio}</BioDescription>
      <StatsWrapper />

      <SocialInfo>
        <SocialLink available={Boolean(user.location)}>
          <FaMapMarkerAlt /> {user.location || "Not Available"}
        </SocialLink>
        <SocialLink available={Boolean(user.login)}>
          <FaLink /> {user.blog || "Not Available"}
        </SocialLink>
        <SocialLink available={Boolean(user.twitter_username)}>
          <FaTwitter /> {user.twitter_username || "Not Available"}
        </SocialLink>
        <SocialLink available={Boolean(user.company)}>
          <FaBuilding /> {user.company || "Not Available"}
        </SocialLink>
      </SocialInfo>
    </Container>
  );
}
