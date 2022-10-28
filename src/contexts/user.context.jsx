import { createContext, useState, useEffect } from 'react';

import { createUserDocumenFromAuth, onAuthStateChangedListener } from '../utils/firebase/firebase.utils';


export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null, 
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser }

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        // This checks DB for exiting user and creates if none exsists 
        createUserDocumenFromAuth(user);
      }
      // Then we set the user.  If logging out, this will be null. 
      setCurrentUser(user);
    });
    return unsubscribe; 
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}


