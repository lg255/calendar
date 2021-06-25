import React, { useContext, useEffect } from 'react';
import { Appointment } from '../../appointment';
import { auth, firestore, provider } from '../../../Firebase';
import { UserContext } from '../../../context/user-provider';
import { CalendarContext } from '../../../context/calendar-provider';

const Login: React.FunctionComponent<any> = () => {
  const { setAppointments } = useContext(CalendarContext);
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const logIn = () => {
    auth.signInWithPopup(provider).catch(() => {
      setCurrentUser(null);
    });
  };

  const logOut = () => {
    auth.signOut();
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const collectionRef = firestore.collection('Appointments');
        const unsubscribe = collectionRef
          .where('userId', '==', user.uid)
          .orderBy('date')
          .onSnapshot(
            (querySnapshot) => {
              const appointments: Appointment[] = querySnapshot.docs.map(
                (doc) => {
                  return {
                    description: doc.data().description,
                    date: new Date(doc.data().date.toDate()),
                    type: doc.data().type,
                  };
                }
              );
              setAppointments(appointments);
            },
            (_error) => {
              unsubscribe();
              setAppointments([]);
            }
          );

        setCurrentUser({
          displayName: user.displayName,
          userId: user.uid,
          photo: user.photoURL,
        });
      } else {
        setCurrentUser(null);
        setAppointments([]);
      }
    });
  }, [setAppointments, setCurrentUser]);

  return currentUser ? (
    <div className="button login-button" onClick={() => logOut()}>
      Logout
    </div>
  ) : (
    <div className="button login-button" onClick={() => logIn()}>
      Login
    </div>
  );
};

export default Login;
