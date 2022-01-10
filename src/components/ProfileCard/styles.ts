import styled from "styled-components";

interface SocialLinkProps {
  available: boolean;
}

export const Container = styled.div`
  background: ${({ theme }) => theme.background_card};
  border-radius: 8px;

  margin-top: 1rem;

  padding: 2rem 1.5rem;
  width: 100%;

  display: grid;
  gap: 1.5em;
  grid-auto-columns: 0.5fr 1fr;
  grid-template-areas:
    "userimage userinfo"
    "bio bio"
    "stats stats"
    "social social";

  @media (min-width: 768px) {
    grid-auto-columns: 0.3fr 1fr;
    padding: 3rem;
  }

  @media (min-width: 1024px) {
    grid-template-areas:
      "userimage userinfo"
      "userimage bio"
      "userimage stats"
      "userimage social";
  }
`;

export const Image = styled.img`
  grid-area: userimage;

  height: 5rem;
  width: 5rem;

  border-radius: 50%;

  @media (min-width: 768px) {
    height: 8rem;
    width: 8rem;
  }

  @media (min-width: 1024px) {
    height: 10rem;
    width: 10rem;
  }
`;

export const UserInfoWrapper = styled.div`
  grid-area: userinfo;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  justify-content: center;

  @media (min-width: 1024px) {
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row;
  }
`;

export const UserName = styled.p`
  color: ${({ theme }) => theme.text};

  @media (min-width: 768px) {
    font-size: 1.6rem;
  }

  @media (min-width: 1024px) {
    margin-top: -8px;
    font-size: 1.8rem;
  }
`;

export const UserNameGithub = styled.p`
  color: ${({ theme }) => theme.primary};
  font-size: 0.75rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const UserJoinDate = styled.p`
  color: ${({ theme }) => theme.text_secondary};
  font-size: 0.8rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const BioDescription = styled.p`
  grid-area: bio;

  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.6rem;
  font-size: 0.9rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const SocialInfo = styled.div`
  grid-area: social;

  display: grid;
  gap: 0.8em;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const SocialLink = styled.p<SocialLinkProps>`
  color: ${({ theme, available }) =>
    available ? theme.text : theme.text_secondary};
  font-size: 0.9rem;
`;

export const NoDataContainer = styled.div`
  display: grid;
  align-items: center;

  background: ${({ theme }) => theme.background_card};
  border-radius: 8px;

  margin-top: 1rem;

  padding-bottom: 2rem;
`;

export const NoDataTitle = styled.h2`
  color: ${({ theme }) => theme.text};
  text-align: center;

  font-size: 1.2rem;

  @media (min-width: 1024px) {
    font-size: 1.8rem;
  }
`;
