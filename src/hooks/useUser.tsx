import { createContext, useContext, useState } from "react";

export interface User {
  avatar_url: string;
  bio: string;
  created_at: string;
  followers: number;
  following: number;
  public_repos: number;
  location: string;
  blog: string;
  twitter_username: string;
  name: string;
  login: string;
  company: string;
}

interface UserContextData {
  user: User;
  userNotFound: boolean;
  handleSearchUser: (username: string) => void;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

export function UserProvider({ children }: any) {
  const [user, setUser] = useState<User>({} as User);
  const [userNotFound, setUserNotFound] = useState(false);

  function handleSearchUser(username: string) {
    if (username) {
      fetch(`https://api.github.com/users/${username}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.login) {
            setUser(data);
            setUserNotFound(false);
          } else {
            setUserNotFound(true);
            setUser({} as User);
          }
        });
    }
  }

  return (
    <UserContext.Provider value={{ user, handleSearchUser, userNotFound }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser(): UserContextData {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
}
