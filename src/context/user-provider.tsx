import React, { useState } from 'react';

export interface User {
  displayName?: string | null;
  photo?: string | null;
  userId?: string;
}

export interface UserContextValue {
  currentUser: User | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const UserContext = React.createContext<UserContextValue>(undefined!);

const UserProvider: React.FunctionComponent = (props) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
