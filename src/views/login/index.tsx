import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';


function Login(props: any) {
  useEffect(() => {
    const sub = (window as any).firebase.auth().onAuthStateChanged(
      (user: any) => {
        if (user) {
          (window as any).firebase.auth().currentUser.getIdToken()
            .then((token: string) => (window as any).auth = { token, user });

          (window as any).isAuth = true;
          props.history.push('/private');
        } else {
          // no authenticated, noop show buttons
        }
      }
    );

    return () => {
      sub();
    }
  });

  const google = () => {
    const provider = new (window as any).firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    (window as any).firebase.auth().signInWithRedirect(provider);
  };

  return (
    <div className="login">
      <h3>Se connecter</h3>

      <button onClick={() => google()}>Via Google</button>

      
    </div>
  );
}

export default Login;
